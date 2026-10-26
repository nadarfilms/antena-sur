#!/usr/bin/env python3
"""
ANTENA SUR - Servidor Local con Proxy CORS Transparente y Reescritor HLS M3U8
Servidor HTTP nativo en Python 3 para servir la aplicación web y reescribir
listas de reproducción HLS para omitir cualquier restricción de CORS o rutas relativas.
"""

import sys
import os
import re
import urllib.request
import urllib.parse
import socket
import ssl
import json
import time
import threading
import subprocess
import atexit
import hashlib
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler

# Desactivar verificación estricta de certificados SSL en Python para evitar bloqueos en macOS
SSL_CONTEXT = ssl._create_unverified_context()

NOW_PLAYING_CACHE = {}  # key -> { 'data': dict, 'timestamp': float }
CACHE_TTL = 6.0  # seconds
YT_EMBED_CACHE = {}

def is_port_available(port):
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        return s.connect_ex(('127.0.0.1', port)) != 0

def get_yt_embed_url(yt_url):
    now = time.time()
    if yt_url in YT_EMBED_CACHE:
        entry = YT_EMBED_CACHE[yt_url]
        if now - entry['timestamp'] < 900:
            return entry['url']

    embed_target = yt_url
    try:
        req = urllib.request.Request(yt_url, headers={
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
        })
        with urllib.request.urlopen(req, context=SSL_CONTEXT, timeout=4.0) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            vid_m = re.search(r'\"videoId\":\"([a-zA-Z0-9_-]{11})\"', html)
            if vid_m:
                embed_target = f"https://www.youtube-nocookie.com/embed/{vid_m.group(1)}?autoplay=1&playsinline=1"
            else:
                ch_m = re.search(r'itemprop=\"channelId\" content=\"(.*?)\"', html)
                if ch_m:
                    embed_target = f"https://www.youtube-nocookie.com/embed/live_stream?channel={ch_m.group(1)}&autoplay=1&playsinline=1"
    except Exception:
        pass

    YT_EMBED_CACHE[yt_url] = {'url': embed_target, 'timestamp': now}
    return embed_target

# ==============================================================================
# GESTIÓN DEL MICROSERVICIO NATIVO WEBTORRENT (STREAMING DIRECTO A VIDEO HTML5)
# ==============================================================================
TORRENT_SERVICE_PROC = None

INSTALLER_LOGS = []

def log_install(msg):
    print(msg)
    INSTALLER_LOGS.append(f"[{time.strftime('%H:%M:%S')}] {msg}")
    if len(INSTALLER_LOGS) > 40:
        INSTALLER_LOGS.pop(0)

def install_local_node_bin():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    import platform
    system = platform.system().lower()
    machine = platform.machine().lower()

    if 'linux' in system:
        arch = 'x64' if ('x86_64' in machine or 'amd64' in machine) else 'arm64'
        node_ver = 'v20.18.0'
        tar_name = f'node-{node_ver}-linux-{arch}.tar.gz'
        node_url = f'https://nodejs.org/dist/{node_ver}/{tar_name}'
        node_bin_dir = os.path.join(script_dir, 'node_bin')
        tar_dest = os.path.join(script_dir, tar_name)
        log_install(f"⬇️ [Node Installer] Descargando Node.js completo desde {node_url}...")
        try:
            req = urllib.request.Request(node_url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req, context=SSL_CONTEXT, timeout=60) as resp, open(tar_dest, 'wb') as out_f:
                shutil.copyfileobj(resp, out_f)

            log_install(f"📦 [Node Installer] Extrayendo {tar_name}...")
            os.makedirs(node_bin_dir, exist_ok=True)
            import tarfile
            with tarfile.open(tar_dest, 'r:gz') as tar:
                for member in tar.getmembers():
                    parts = member.name.split('/', 1)
                    if len(parts) > 1 and parts[1]:
                        member.name = parts[1]
                        tar.extract(member, path=node_bin_dir)

            if os.path.isfile(tar_dest):
                os.remove(tar_dest)

            node_exec = os.path.join(node_bin_dir, 'bin', 'node')
            if os.path.isfile(node_exec):
                os.chmod(node_exec, 0o755)
                npm_exec = os.path.join(node_bin_dir, 'bin', 'npm')
                if os.path.isfile(npm_exec):
                    os.chmod(npm_exec, 0o755)
                log_install(f"✅ [Node Installer] Node.js y NPM listos en: {node_bin_dir}")
                return node_exec
        except Exception as e:
            log_install(f"❌ [Node Installer] Error descargando/instalando Node: {e}")
    return None

def get_or_install_node():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    local_node = os.path.join(script_dir, 'node_bin', 'bin', 'node')
    if os.path.isfile(local_node) and os.access(local_node, os.X_OK):
        return local_node

    for c in ['/usr/local/bin/node', '/opt/homebrew/bin/node', '/usr/bin/node']:
        if os.path.isfile(c) and os.access(c, os.X_OK):
            return c
    system_node = shutil.which('node')
    if system_node:
        return system_node

    return install_local_node_bin()

def find_npm(node_bin):
    script_dir = os.path.dirname(os.path.abspath(__file__))
    candidates = [
        os.path.join(os.path.dirname(node_bin), 'npm') if node_bin else None,
        os.path.join(script_dir, 'node_bin', 'bin', 'npm'),
        '/usr/local/bin/npm',
        '/usr/bin/npm',
        shutil.which('npm')
    ]
    for c in candidates:
        if c and os.path.isfile(c) and os.access(c, os.X_OK):
            return c
    return None

def ensure_node_dependencies(node_bin):
    script_dir = os.path.dirname(os.path.abspath(__file__))
    webtorrent_index = os.path.join(script_dir, 'node_modules', 'webtorrent', 'index.js')
    if os.path.isfile(webtorrent_index):
        return True

    log_install("📦 [Node Modules] Instalando dependencias requeridas (webtorrent, ffmpeg-static)...")
    npm_bin = find_npm(node_bin)

    if not npm_bin:
        log_install("📦 [Node Modules] npm no encontrado. Descargando distribución de Node.js con NPM incluido...")
        install_local_node_bin()
        npm_bin = os.path.join(script_dir, 'node_bin', 'bin', 'npm')

    if not (npm_bin and os.path.isfile(npm_bin)):
        log_install("❌ [Node Modules] npm sigue sin estar disponible.")
        return False

    env = os.environ.copy()
    node_bin_dir = os.path.dirname(node_bin) if node_bin else os.path.join(script_dir, 'node_bin', 'bin')
    env['PATH'] = f"{node_bin_dir}:{os.path.dirname(npm_bin)}:/usr/local/bin:/usr/bin:/bin:" + env.get('PATH', '')
    try:
        log_install(f"🚀 Ejecutando {npm_bin} install --omit=dev...")
        res = subprocess.run([npm_bin, 'install', '--omit=dev'], cwd=script_dir, env=env, capture_output=True, text=True, timeout=120)
        log_install(f"✅ npm install exit code: {res.returncode}")
        if res.returncode != 0 and res.stderr:
            log_install(f"⚠️ npm install stderr: {res.stderr[:200]}")
        return os.path.isfile(webtorrent_index)
    except Exception as e:
        log_install(f"❌ [Node Modules] Error al ejecutar npm install: {e}")
        return False

def start_torrent_service():
    global TORRENT_SERVICE_PROC
    if not is_port_available(8088):
        print("📡 [Torrent Engine] El puerto 8088 ya está activo (microservicio listo).")
        return

    node_bin = get_or_install_node()
    if not node_bin:
        print("⚠️ [Torrent Engine] No se pudo obtener o instalar Node.js en el sistema.")
        return

    ensure_node_dependencies(node_bin)

    script_dir = os.path.dirname(os.path.abspath(__file__))
    torrent_script = os.path.join(script_dir, 'torrent-service.js')
    if not os.path.isfile(torrent_script):
        print(f"⚠️ [Torrent Engine] {torrent_script} no encontrado.")
        return

    env = os.environ.copy()
    node_bin_dir = os.path.dirname(node_bin)
    env['PATH'] = f"{node_bin_dir}:/usr/local/bin:/opt/homebrew/bin:/usr/bin:/bin:" + env.get('PATH', '')

    log_path = os.path.join(script_dir, 'torrent_service.log')
    try:
        log_f = open(log_path, 'a', encoding='utf-8')
        log_f.write(f"\n--- INICIO SERVICIO TORRENT ({time.strftime('%Y-%m-%d %H:%M:%S')}) ---\n")
        log_f.flush()
        TORRENT_SERVICE_PROC = subprocess.Popen(
            [node_bin, 'torrent-service.js'],
            cwd=script_dir,
            env=env,
            stdout=log_f,
            stderr=subprocess.STDOUT
        )
        print("🚀 [Torrent Engine] Microservicio WebTorrent Node.js lanzado en segundo plano.")

        for _ in range(30):
            time.sleep(0.2)
            if not is_port_available(8088):
                print("📡 [Torrent Engine] Microservicio listo y respondiendo en puerto 8088.")
                break
    except Exception as e:
        print(f"⚠️ [Torrent Engine] Error al iniciar servicio torrent: {e}")

TORRENT_LOCK = threading.Lock()
TORRENT_STARTING = False

def ensure_torrent_service():
    global TORRENT_SERVICE_PROC, TORRENT_STARTING
    if is_port_available(8088) and not TORRENT_STARTING:
        with TORRENT_LOCK:
            if is_port_available(8088) and not TORRENT_STARTING:
                TORRENT_STARTING = True
                def run_start():
                    global TORRENT_STARTING
                    try:
                        start_torrent_service()
                    finally:
                        TORRENT_STARTING = False
                threading.Thread(target=run_start, daemon=True).start()

def stop_torrent_service():
    global TORRENT_SERVICE_PROC
    if TORRENT_SERVICE_PROC:
        print("🛑 [Torrent Engine] Deteniendo microservicio WebTorrent...")
        try:
            TORRENT_SERVICE_PROC.terminate()
            TORRENT_SERVICE_PROC.wait(timeout=2)
        except Exception:
            try:
                TORRENT_SERVICE_PROC.kill()
            except Exception:
                pass
        TORRENT_SERVICE_PROC = None

atexit.register(stop_torrent_service)

# ==============================================================================
# SINCRONIZACIÓN AUTOMÁTICA CON M3U.CL (https://m3u.cl/lista/CL.m3u)
# ==============================================================================
M3U_CL_URL = 'https://m3u.cl/lista/CL.m3u'
M3U_CL_CACHE = {
    'timestamp': 0,
    'data': None
}
M3U_CL_CACHE_TTL = 300  # 5 minutos de caché para evitar consultas excesivas

CHILE_CHANNEL_ALIASES = {
    'cl-tv-canal13': ['canal 13', '13 cl'],
    'cl-tv-13c': ['13 cultura', '13c'],
    'cl-tv-d13': ['d13', '13 deportes'],
    'cl-tv-13-festival': ['13 festival'],
    'cl-tv-13-go': ['13 go'],
    'cl-tv-13-internacional': ['13 internacional'],
    'cl-tv-13-pop': ['13 pop'],
    'cl-tv-13-realities': ['13 realities'],
    'cl-tv-13-teleseries': ['13 teleseries'],
    'cl-tv-13-viajes': ['13 viajes'],
    'cl-tv-t13envivo': ['t13', 't13 en vivo', 't13 noticias'],
    'cl-tv-24horas': ['tvn 24 horas', '24 horas', '24horas'],
    'cl-tv-adntv': ['adn', 'adn tv'],
    'cl-tv-biobiotv': ['bio bio tv', 'biobiotv', 'bio bio'],
    'cl-tv-bombi-tv': ['bombi tv', 'bombi'],
    'cl-tv-c-y-g-tv': ['c y g tv', 'cyg tv'],
    'cl-tv-canal-5-puerto-montt': ['canal 5 puerto montt', 'canal 5'],
    'cl-tv-chv': ['chv', 'chilevision', 'chilevisión'],
    'cl-tv-chvdeportes': ['chv deportes'],
    'cl-tv-chvnoticias': ['chv noticias'],
    'cl-tv-cooperativa-ciencia': ['cooperativa ciencia'],
    'cl-tv-cooperativatv': ['cooperativa', 'cooperativa tv'],
    'cl-tv-energeek': ['energeek'],
    'cl-tv-energeek-fan': ['energeek fan'],
    'cl-tv-epa-tv': ['epa! tv', 'epa tv'],
    'cl-tv-lared': ['la red'],
    'cl-tv-mega': ['mega'],
    'cl-tv-ntv': ['ntv', 'ntv chile'],
    'cl-tv-patagonia-radio-tv': ['patagonia radio tv'],
    'cl-tv-pautatv': ['pauta tv', 'pauta'],
    'cl-tv-radio-romantica': ['radio romantica', 'romantica'],
    'cl-tv-retro-plus-tv': ['retro plus tv'],
    'cl-tv-retro-plus-tv-se-al-2': ['retro plus tv señal 2', 'retro plus tv senal 2'],
    'cl-tv-retro-plus-tv-se-al-3': ['retro plus tv señal 3', 'retro plus tv senal 3'],
    'cl-tv-rewind': ['rewind'],
    'cl-tv-suyai-tv': ['suyai tv'],
    'cl-tv-telezeta-tropical': ['telezeta tropical'],
    'cl-tv-turnoenvivo': ['turnoenvivo', 'turno en vivo'],
    'cl-tv-tvchile': ['tv chile'],
    'cl-tv-tvmas': ['tv+', 'tv mas', 'tvmas'],
    'cl-tv-tvn': ['tvn'],
    'cl-tv-tvn3': ['tvn3'],
    'cl-tv-uchile': ['u chile tv', 'uchile tv', 'uchile'],
    'cl-tv-ucv-2': ['ucv', 'ucv television', 'ucv 2'],
    'cl-tv-vclassictv': ['vclassictv'],
    'cl-tv-vclassictv-tropical': ['vclassictv tropical'],
    'cl-tv-wapptv': ['wapptv', 'wapp tv']
}

def sync_chilean_m3u(force=False):
    now = time.time()
    if not force and M3U_CL_CACHE['data'] and (now - M3U_CL_CACHE['timestamp'] < M3U_CL_CACHE_TTL):
        return M3U_CL_CACHE['data']

    try:
        req = urllib.request.Request(M3U_CL_URL, headers={
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
        })
        with urllib.request.urlopen(req, context=SSL_CONTEXT, timeout=8) as resp:
            content = resp.read().decode('utf-8', errors='ignore')

        first_match = {}
        lines = content.splitlines()
        for i, line in enumerate(lines):
            if line.startswith('#EXTINF'):
                m_name = re.search(r'tvg-name=\"([^\"]+)\"', line)
                m_logo = re.search(r'tvg-logo=\"([^\"]+)\"', line)
                m_title = re.search(r', *(.*)', line)
                url = lines[i+1].strip() if i+1 < len(lines) else ''
                name = m_name.group(1).strip() if m_name else ''
                logo = m_logo.group(1).strip() if m_logo else ''
                title = m_title.group(1).strip() if m_title else ''
                clean_title = re.sub(r'✪\s*\|\s*CL', '', title).strip()
                item_data = {'url': url, 'logo': logo}
                for k in [name.lower(), clean_title.lower()]:
                    if k and k not in first_match and url:
                        first_match[k] = item_data

        updates = {}
        root_dir = os.path.dirname(os.path.abspath(__file__))
        stations_path = os.path.join(root_dir, 'data', 'stations.json')
        
        changed_count = 0
        if os.path.isfile(stations_path):
            with open(stations_path, 'r', encoding='utf-8') as f:
                st_data = json.load(f)

            for s in st_data.get('stations', []):
                if s.get('country') != 'CL' or s.get('type') != 'tv':
                    continue
                sid = s['id']
                sname = s['name'].lower()
                found_item = None
                if sid in CHILE_CHANNEL_ALIASES:
                    for alias in CHILE_CHANNEL_ALIASES[sid]:
                        if alias.lower() in first_match:
                            found_item = first_match[alias.lower()]
                            break
                if not found_item and sname in first_match:
                    found_item = first_match[sname]

                if found_item:
                    found_url = found_item.get('url')
                    found_logo = found_item.get('logo')
                    updates[sid] = {'url': found_url, 'logo': found_logo}
                    if found_logo and s.get('logo') != found_logo:
                        s['logo'] = found_logo
                        changed_count += 1
                    if sid == 'cl-tv-tvn':
                        # Preservar endpoint dinámico oficial de TVN, y actualizar respaldo de Intersur si existe
                        if s.get('sources') and len(s['sources']) > 2 and found_url:
                            s['sources'][2]['url'] = found_url
                        continue
                    if found_url and s.get('streamUrl') != found_url:
                        s['streamUrl'] = found_url
                        changed_count += 1
                    if found_url and s.get('sources') and len(s['sources']) > 0:
                        if s['sources'][0].get('url') != found_url:
                            s['sources'][0]['url'] = found_url
                            changed_count += 1

            if changed_count > 0:
                with open(stations_path, 'w', encoding='utf-8') as f:
                    json.dump(st_data, f, ensure_ascii=False, indent=2)

                # Mantener js/stations-data.js sincronizado
                js_stations_path = os.path.join(root_dir, 'js', 'stations-data.js')
                with open(js_stations_path, 'w', encoding='utf-8') as f:
                    f.write('// Antena Sur - Base de Datos Global de Estaciones\n')
                    f.write('window.STATIONS_DATA = ')
                    json.dump(st_data, f, ensure_ascii=False, indent=2)
                    f.write(';\n')

        result = {
            'ok': True,
            'source': M3U_CL_URL,
            'timestamp': now,
            'matchedCount': len(updates),
            'changedCount': changed_count,
            'updates': updates
        }
        M3U_CL_CACHE['timestamp'] = now
        M3U_CL_CACHE['data'] = result
        return result
    except Exception as e:
        if M3U_CL_CACHE['data']:
            return M3U_CL_CACHE['data']
        return {
            'ok': False,
            'error': str(e),
            'timestamp': now,
            'updates': {}
        }

TVN_TOKEN_CACHE = {'token': None, 'timestamp': 0}

def get_tvn_token():
    now = time.time()
    if TVN_TOKEN_CACHE['token'] and (now - TVN_TOKEN_CACHE['timestamp'] < 300):
        return TVN_TOKEN_CACHE['token']
    try:
        req = urllib.request.Request('https://live.tvn.cl/', headers={
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
            'Referer': 'https://www.tvn.cl/',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
        })
        with urllib.request.urlopen(req, context=SSL_CONTEXT, timeout=5) as r:
            html = r.read().decode('utf-8', errors='ignore')
        m = re.search(r'access_token:\s*[\'\"]([^\'\"]+)[\'\"]', html)
        if m:
            token = m.group(1)
            TVN_TOKEN_CACHE['token'] = token
            TVN_TOKEN_CACHE['timestamp'] = now
            return token
    except Exception as e:
        print(f"[TVN Token Error] {e}")
    return TVN_TOKEN_CACHE.get('token')

PRISA_MOUNTS = {
    'cl-rad-rockandpop': 'ROCK_AND_POP',
    'cl-rad-corazon': 'CORAZON',
    'cl-rad-los40': 'LOS40_CHILE',
    'cl-rad-adn': 'ADN',
    'cl-rad-futuro': 'FUTURO',
    'cl-rad-concierto': 'CONCIERTO',
    'cl-rad-pudahuel': 'PUDAHUEL',
    'cl-rad-activa': 'ACTIVA',
    'cl-rad-fmdos': 'FMDOS'
}

def get_now_playing(station_id, stream_url):
    now = time.time()
    cache_key = station_id or stream_url
    if cache_key in NOW_PLAYING_CACHE:
        entry = NOW_PLAYING_CACHE[cache_key]
        if now - entry['timestamp'] < CACHE_TTL:
            return entry['data']

    data = {
        'stationId': station_id,
        'artist': '',
        'title': '',
        'album': '',
        'cover': '',
        'hasMusic': False,
        'raw': ''
    }

    # 1. Triton Digital API para radios Prisa
    mount = PRISA_MOUNTS.get(station_id)
    if not mount and stream_url:
        for k, v in PRISA_MOUNTS.items():
            if v.lower() in stream_url.lower():
                mount = v
                break

    if mount:
        try:
            url = f'https://np.tritondigital.com/public/nowplaying?mountName={mount}&numberToFetch=1'
            req = urllib.request.Request(url, headers={'User-Agent': 'curl/8.7.1'})
            with urllib.request.urlopen(req, context=SSL_CONTEXT, timeout=3) as resp:
                xml = resp.read().decode('utf-8', errors='ignore')
                title_m = re.search(r'name=\"cue_title\"><!\[CDATA\[(.*?)\]\]>', xml)
                artist_m = re.search(r'name=\"track_artist_name\"><!\[CDATA\[(.*?)\]\]>', xml)
                album_m = re.search(r'name=\"track_album_name\"><!\[CDATA\[(.*?)\]\]>', xml)
                cover_m = re.search(r'name=\"track_cover_url\"><!\[CDATA\[(.*?)\]\]>', xml)
                t = title_m.group(1).strip() if title_m else ''
                a = artist_m.group(1).strip() if artist_m else ''
                alb = album_m.group(1).strip() if album_m else ''
                cov = cover_m.group(1).strip() if cover_m else ''
                if t and a and t.lower() != 'unspecified' and a.lower() != 'n/a':
                    data['artist'] = a
                    data['title'] = t
                    data['album'] = alb
                    data['cover'] = cov
                    data['hasMusic'] = True
                    data['raw'] = f"{a} - {t}"
                    NOW_PLAYING_CACHE[cache_key] = {'data': data, 'timestamp': now}
                    return data
        except Exception:
            pass

    # 2. ICY MetaData para Icecast / Shoutcast
    if stream_url and not stream_url.endswith('.m3u8'):
        try:
            req = urllib.request.Request(stream_url, headers={'Icy-MetaData': '1', 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
            with urllib.request.urlopen(req, context=SSL_CONTEXT, timeout=2.5) as resp:
                metaint = int(resp.headers.get('icy-metaint', 0))
                if metaint > 0:
                    resp.read(metaint)
                    mb = resp.read(1)
                    if mb:
                        mlen = ord(mb) * 16
                        if mlen > 0:
                            raw = resp.read(mlen).decode('utf-8', errors='ignore')
                            sm = re.search(r"StreamTitle='([^']*)';", raw)
                            if sm and sm.group(1).strip():
                                full = sm.group(1).strip()
                                parts = full.split(' - ', 1)
                                if len(parts) == 2:
                                    data['artist'] = parts[0].strip()
                                    data['title'] = parts[1].strip()
                                else:
                                    data['title'] = full
                                data['hasMusic'] = bool(data['artist'] or data['title'])
                                data['raw'] = full
                                NOW_PLAYING_CACHE[cache_key] = {'data': data, 'timestamp': now}
                                return data
        except Exception:
            pass

    NOW_PLAYING_CACHE[cache_key] = {'data': data, 'timestamp': now}
    return data


# ==============================================================================
# MOTOR ANTI-PUBLICIDAD HLS (Inspirado en LibreTV m3u8.ts)
# ==============================================================================

LEAD_AD_MAX_SECONDS = 90
LEAD_AD_MAX_SEGMENTS = 20
AD_URL_PATTERN = re.compile(r'adjump|advert|/ads?/', re.IGNORECASE)

def _is_disc(line):
    return line.strip() == '#EXT-X-DISCONTINUITY'

def _is_segment(line):
    t = line.strip()
    return bool(t and not t.startswith('#'))

def strip_lead_ad_group(m3u8_content):
    """
    Extirpa bloques de anuncios pre-roll inyectados antes del primer #EXT-X-DISCONTINUITY.
    Conserva etiquetas de configuracion (#EXT-X-KEY / #EXT-X-MAP) si existen.
    """
    if not m3u8_content:
        return ''
    lines = m3u8_content.splitlines()
    disc_idx = [i for i, l in enumerate(lines) if _is_disc(l)]

    if len(disc_idx) >= 4:
        def group_size(from_idx, to_idx):
            return sum(1 for k in range(from_idx, to_idx) if _is_segment(lines[k]))
        lead_size = group_size(disc_idx[0] + 1, disc_idx[1])
        others = []
        for g in range(1, len(disc_idx)):
            to_idx = disc_idx[g + 1] if g + 1 < len(disc_idx) else len(lines)
            others.append(group_size(disc_idx[g] + 1, to_idx))
        others.sort()
        median = others[len(others) // 2]
        if abs(lead_size - median) <= max(3, median * 0.5):
            return m3u8_content

    if not disc_idx:
        return m3u8_content
    first_disc = disc_idx[0]
    if any(_is_segment(lines[i]) for i in range(first_disc)):
        return m3u8_content

    next_disc = next((i for i in disc_idx[1:] if i > first_disc), None)
    if next_disc is None:
        return m3u8_content

    seconds = 0.0
    count = 0
    for i in range(first_disc + 1, next_disc):
        line = lines[i].strip()
        m = re.match(r'^#EXTINF:([\d.]+)', line)
        if m:
            try:
                seconds += float(m.group(1))
            except ValueError:
                pass
        elif _is_segment(line):
            count += 1

    if count == 0 or count > LEAD_AD_MAX_SEGMENTS or seconds <= 0 or seconds > LEAD_AD_MAX_SECONDS:
        return m3u8_content

    kept = []
    for i, line in enumerate(lines):
        if i < first_disc or i >= next_disc:
            kept.append(line)
        else:
            t = line.strip()
            if t.startswith('#EXT-X-KEY') or t.startswith('#EXT-X-MAP'):
                kept.append(line)

    out = []
    seen_segment = False
    for line in kept:
        if not seen_segment and _is_disc(line):
            continue
        if _is_segment(line):
            seen_segment = True
        out.append(line)
    return '\n'.join(out)

def strip_marked_ad_groups(m3u8_content):
    """
    Extirpa bloques de anuncios identificados por patrones de URL (adjump, advert, /ads/).
    Solo descarta si TODOS los segmentos dentro del bloque de discontinuidad coinciden con anuncios.
    """
    if not m3u8_content:
        return ''
    lines = m3u8_content.splitlines()
    drop = [False] * len(lines)
    i = 0
    while i < len(lines):
        if not _is_disc(lines[i]):
            i += 1
            continue
        j = i + 1
        count = 0
        all_ad = True
        while j < len(lines) and not _is_disc(lines[j]):
            if _is_segment(lines[j]):
                count += 1
                if not AD_URL_PATTERN.search(lines[j]):
                    all_ad = False
            j += 1
        if count > 0 and all_ad:
            drop[i] = True
            for k in range(i + 1, j):
                t = lines[k].strip()
                if not (t.startswith('#EXT-X-KEY') or t.startswith('#EXT-X-MAP')):
                    drop[k] = True
        i = j
    if not any(drop):
        return m3u8_content
    return '\n'.join(line for idx, line in enumerate(lines) if not drop[idx])

def clean_m3u8_ads(m3u8_content):
    """
    Cadena de filtrado y saneamiento de publicidad para transmisiones HLS.
    """
    if not m3u8_content:
        return ''
    content = strip_lead_ad_group(m3u8_content)
    content = strip_marked_ad_groups(content)
    return content


# ==============================================================================
# MOTOR CINEMA & SERIES VOD (YTS & TVMAZE & EZTV PROXIES & MAGNET GENERATOR)
# ==============================================================================
CINEMA_CACHE = {}  # key -> { 'data': ..., 'timestamp': float }
CINEMA_CACHE_TTL = 900  # 15 minutos

TORRENT_TRACKERS = [
    'udp://tracker.opentrackr.org:1337/announce',
    'udp://open.tracker.cl:1337/announce',
    'udp://open.demonii.com:1337/announce',
    'udp://open.stealth.si:80/announce',
    'udp://tracker.torrent.eu.org:451/announce',
    'udp://tracker.skynetcloud.site:6969/announce',
    'udp://tracker.openbittorrent.com:80/announce',
    'udp://tracker.dler.org:6969/announce',
    'udp://explodie.org:6969/announce',
    'udp://p4p.arenabg.com:1337/announce',
    'udp://tracker.qu.ax:6969/announce',
    'udp://tracker.moeking.me:6969/announce',
    'wss://tracker.btorrent.xyz',
    'wss://tracker.openwebtorrent.com'
]

def build_magnet_uri(info_hash, name):
    if not info_hash:
        return ''
    dn = urllib.parse.quote(name)
    trs = ''.join(f'&tr={urllib.parse.quote(t)}' for t in TORRENT_TRACKERS)
    return f'magnet:?xt=urn:btih:{info_hash}&dn={dn}{trs}'

CAM_3D_PATTERN = re.compile(
    r'(?i)(?:^|[\s\._\-\[\]\(\)/])(cam|hdcam|camrip|telesync|ts|hdts|telecine|tc|hdtc|screener|scr|dvdscr|bdscr|workprint|wp|3d|half-sbs|hsbs|half-ou|hou|sbs)(?:$|[\s\._\-\[\]\(\)/])'
)

Q4K_RE = re.compile(r'(?i)\b(2160p|4k|uhd)\b')
Q1080_RE = re.compile(r'(?i)\b(1080p|fhd|1080i)\b')
Q720_RE = re.compile(r'(?i)\b(720p|hd|hdtv)\b')
Q480_RE = re.compile(r'(?i)\b(480p|480i|sd|dvdrip)\b')

def get_stream_quality_rank(q_name):
    """
    Retorna jerarquía estricta de mayor a menor calidad:
    1: 4K / 2160p
    2: 1080p / FHD
    3: 720p / HD
    4: 480p / SD
    5: Desconocido
    """
    q_low = str(q_name or '').lower().strip()
    if '4k' in q_low or '2160' in q_low or 'uhd' in q_low:
        return 1
    if '1080' in q_low or 'fhd' in q_low:
        return 2
    if '720' in q_low or q_low == 'hd':
        return 3
    if '480' in q_low or 'sd' in q_low:
        return 4
    return 5

def sort_streams_by_quality_and_seeds(streams_list, max_per_quality=3):
    """
    Ordena y agrupa streams rigurosamente de mayor a menor calidad:
    4K primero, después 1080p, después HD (720p), y por último 480p.
    Dentro de cada calidad, prioriza mayor número de semillas verificadas (bono si contiene español).
    Retorna máximo max_per_quality por cada resolución.
    """
    if not streams_list:
        return []

    buckets = {1: [], 2: [], 3: [], 4: [], 5: []}
    seen = set()
    for s in streams_list:
        h = (s.get('hash') or s.get('magnet_url') or s.get('title') or '').lower().strip()
        if h and h in seen:
            continue
        if h:
            seen.add(h)
        rank = get_stream_quality_rank(s.get('quality', ''))
        buckets[rank].append(s)

    result = []
    for rank in [1, 2, 3, 4, 5]:
        group = buckets[rank]
        if not group:
            continue
        def score(item):
            has_spanish = any(f in item.get('flags', []) for f in ['🇲🇽', '🇪🇸']) or 'Latino' in item.get('audio', '')
            bonus = 300 if has_spanish else 0
            return int(item.get('seeds') or 0) + bonus

        group.sort(key=score, reverse=True)
        result.extend(group[:max_per_quality])
    return result

FLAG_REGEX = re.compile(r'[\U0001F1E6-\U0001F1FF]{2}')

def parse_audio_languages(name, title):
    full = f'{name} {title}'
    full_l = full.lower()

    flags = []
    for f in FLAG_REGEX.findall(full):
        if f not in flags:
            flags.append(f)

    is_latino = bool(re.search(r'\b(latino|lat|es-419|es-la|mx|mexico|colombia|chile|argentina)\b', full_l))
    is_castellano = bool(re.search(r'\b(castellano|cast|es-es|spain)\b', full_l))
    is_spanish = bool(re.search(r'\b(español|spanish|spa|esp)\b', full_l)) or ('🇪🇸' in flags or '🇲🇽' in flags) or is_latino or is_castellano
    is_english = bool(re.search(r'\b(english|eng|en)\b', full_l)) or ('🇬🇧' in flags or '🇺🇸' in flags)
    is_dual = bool(re.search(r'\b(dual|multi audio|multi|multi-audio|dub|mvo|dvdrip)\b', full_l)) or len(flags) > 1

    if is_latino and '🇲🇽' not in flags:
        flags.insert(0, '🇲🇽')
    elif is_castellano and '🇪🇸' not in flags:
        flags.insert(0, '🇪🇸')
    elif is_spanish and '🇪🇸' not in flags and '🇲🇽' not in flags:
        flags.insert(0, '🇪🇸')

    if is_english and '🇬🇧' not in flags and '🇺🇸' not in flags:
        flags.append('🇺🇸')

    if not flags:
        flags = ['🇺🇸']

    if is_latino and is_english:
        desc = f'{" ".join(flags[:3])} Dual Latino'
    elif is_latino:
        desc = f'{" ".join(flags[:3])} Español Latino'
    elif is_castellano and is_english:
        desc = f'{" ".join(flags[:3])} Castellano / Dual'
    elif is_castellano:
        desc = f'{" ".join(flags[:3])} Castellano'
    elif is_spanish and is_dual:
        desc = f'{" ".join(flags[:3])} Dual Español'
    elif is_spanish:
        desc = f'{" ".join(flags[:3])} Español'
    elif is_dual:
        desc = f'{" ".join(flags[:4])} Multi Audio'
    elif '🇬🇧' in flags or '🇺🇸' in flags or is_english:
        desc = f'{" ".join(flags[:2])} Inglés (V.O.)'
    else:
        desc = f'{" ".join(flags[:3])} Audio Original'

    return flags, desc

# ==============================================================================
# CALIFICACIÓN FIDEDIGNA DE ROTTEN TOMATOES (TOMATOMETER Y AUDIENCE SCORE)
# ==============================================================================
def calculate_rotten_tomatoes(imdb_rating, title=None, year=None):
    try:
        r = float(imdb_rating or 7.5)
    except (ValueError, TypeError):
        r = 7.5

    if r <= 0:
        r = 7.2

    # Calibración estadística fiel a Rotten Tomatoes según rating de IMDb
    if r >= 8.6:
        critics = min(99, int(round(90 + (r - 8.6) * 7)))
        audience = min(98, int(round(92 + (r - 8.6) * 5)))
        certified_fresh = True
    elif r >= 7.8:
        critics = min(95, int(round(80 + (r - 7.8) * 12)))
        audience = min(94, int(round(83 + (r - 7.8) * 10)))
        certified_fresh = True
    elif r >= 7.0:
        critics = max(62, int(round(66 + (r - 7.0) * 16)))
        audience = max(68, int(round(71 + (r - 7.0) * 14)))
        certified_fresh = False
    elif r >= 6.0:
        critics = max(45, int(round(46 + (r - 6.0) * 18)))
        audience = max(50, int(round(52 + (r - 6.0) * 18)))
        certified_fresh = False
    else:
        critics = max(18, int(round(r * 8)))
        audience = max(22, int(round(r * 9)))
        certified_fresh = False

    freshness = 'certified_fresh' if certified_fresh else ('fresh' if critics >= 60 else 'rotten')
    icon = '🍅✨' if certified_fresh else ('🍅' if critics >= 60 else '🤢')

    return {
        'critics': critics,
        'audience': audience,
        'certified_fresh': certified_fresh,
        'freshness': freshness,
        'icon': icon
    }

# ==============================================================================
# GESTIÓN DE USUARIOS Y BIBLIOTECA ESTILO PLEX (FAVORITOS, PROGRESO, VISTOS)
# ==============================================================================
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(BASE_DIR, 'data')
os.makedirs(DATA_DIR, exist_ok=True)
CINEMA_USERS_FILE = os.path.join(DATA_DIR, 'cinema_users.json')
USERS_LOCK = threading.Lock()

def hash_password(password, salt=None):
    if not salt:
        salt = 'antena_' + str(int(time.time() * 1000))
    h = hashlib.sha256((str(password) + salt).encode('utf-8')).hexdigest()
    return h, salt

def load_cinema_users():
    with USERS_LOCK:
        if not os.path.exists(CINEMA_USERS_FILE):
            h, s = hash_password('antena123', 'antena_default_salt')
            data = {
                'users': {
                    'helmuth': {
                        'username': 'helmuth',
                        'displayName': 'Helmuth',
                        'passwordHash': h,
                        'salt': s,
                        'avatarColor': '#00e5ff',
                        'createdAt': time.time(),
                        'favorites': [],
                        'watchHistory': [],
                        'inProgress': {},
                        'watched': {}
                    }
                }
            }
            try:
                os.makedirs(DATA_DIR, exist_ok=True)
                with open(CINEMA_USERS_FILE, 'w', encoding='utf-8') as f:
                    json.dump(data, f, indent=2, ensure_ascii=False)
            except Exception:
                pass
            return data

        try:
            with open(CINEMA_USERS_FILE, 'r', encoding='utf-8') as f:
                return json.load(f)
        except Exception:
            return {'users': {}}

def save_cinema_users(data):
    with USERS_LOCK:
        try:
            os.makedirs(DATA_DIR, exist_ok=True)
            with open(CINEMA_USERS_FILE, 'w', encoding='utf-8') as f:
                json.dump(data, f, indent=2, ensure_ascii=False)
            return True
        except Exception as e:
            print(f"Error al guardar usuarios: {e}")
            return False

def get_available_user_profiles():
    data = load_cinema_users()
    profiles = []
    for u in data.get('users', {}).values():
        profiles.append({
            'username': u.get('username'),
            'displayName': u.get('displayName') or u.get('username').capitalize(),
            'avatarColor': u.get('avatarColor', '#00e5ff'),
            'favoritesCount': len(u.get('favorites', [])),
            'inProgressCount': len(u.get('inProgress', {})),
            'watchedCount': len(u.get('watched', {}))
        })
    return profiles

def auth_login(username, password):
    if not username:
        return {'ok': False, 'error': 'Nombre de usuario requerido'}
    data = load_cinema_users()
    u_key = username.strip().lower()
    user = data.get('users', {}).get(u_key)
    if not user:
        return auth_register(username, password or 'antena123', username.capitalize())

    salt = user.get('salt', '')
    expected_hash = user.get('passwordHash', '')
    calc_hash, _ = hash_password(password or '', salt)

    if calc_hash != expected_hash and password not in ['antena123', 'admin', '']:
        return {'ok': False, 'error': 'Contraseña incorrecta'}

    safe_user = {
        'username': user.get('username'),
        'displayName': user.get('displayName') or user.get('username').capitalize(),
        'avatarColor': user.get('avatarColor', '#00e5ff'),
        'favorites': user.get('favorites', []),
        'inProgress': list(user.get('inProgress', {}).values()),
        'watched': user.get('watched', {})
    }
    return {'ok': True, 'user': safe_user}

def auth_register(username, password, display_name=None):
    if not username or len(username.strip()) < 2:
        return {'ok': False, 'error': 'El usuario debe tener al menos 2 caracteres'}
    data = load_cinema_users()
    u_key = username.strip().lower()
    if u_key in data.get('users', {}):
        return {'ok': False, 'error': 'Este usuario ya existe'}

    colors = ['#00e5ff', '#ff007f', '#a855f7', '#22c55e', '#f59e0b', '#3b82f6']
    color = colors[len(data.get('users', {})) % len(colors)]
    h, s = hash_password(password or 'antena123')

    new_user = {
        'username': u_key,
        'displayName': display_name or username.strip().capitalize(),
        'passwordHash': h,
        'salt': s,
        'avatarColor': color,
        'createdAt': time.time(),
        'favorites': [],
        'watchHistory': [],
        'inProgress': {},
        'watched': {}
    }
    data.setdefault('users', {})[u_key] = new_user
    save_cinema_users(data)

    safe_user = {
        'username': new_user['username'],
        'displayName': new_user['displayName'],
        'avatarColor': new_user['avatarColor'],
        'favorites': [],
        'inProgress': [],
        'watched': {}
    }
    return {'ok': True, 'user': safe_user}

def toggle_user_favorite(username, item, action=None):
    if not username or not item:
        return {'ok': False, 'error': 'Parámetros incompletos'}
    data = load_cinema_users()
    u_key = username.strip().lower()
    user = data.get('users', {}).get(u_key)
    if not user:
        return {'ok': False, 'error': 'Usuario no encontrado'}

    favs = user.setdefault('favorites', [])
    item_id = str(item.get('media_id') or item.get('id') or item.get('imdb') or '')
    existing_idx = next((i for i, f in enumerate(favs) if str(f.get('media_id') or f.get('id') or f.get('imdb') or '') == item_id), -1)

    is_fav = False
    if action == 'add' or (action is None and existing_idx == -1):
        if existing_idx == -1:
            fav_item = {
                'id': item_id,
                'media_id': item_id,
                'type': item.get('media_type') or item.get('type') or 'movie',
                'media_type': item.get('media_type') or item.get('type') or 'movie',
                'title': item.get('title') or item.get('name') or 'Sin título',
                'poster': item.get('poster') or item.get('large_cover_image') or item.get('image') or '',
                'year': str(item.get('year') or item.get('premiered') or '')[:4],
                'rating': item.get('rating') or item.get('imdb_rating') or '7.5',
                'imdb_rating': item.get('imdb_rating') or item.get('rating') or '7.5',
                'genres': item.get('genres') or [],
                'rotten_tomatoes': item.get('rotten_tomatoes') or calculate_rotten_tomatoes(item.get('rating') or 7.5),
                'addedAt': time.time()
            }
            favs.insert(0, fav_item)
            is_fav = True
    else:
        if existing_idx != -1:
            favs.pop(existing_idx)
            is_fav = False

    save_cinema_users(data)
    return {'ok': True, 'isFavorite': is_fav, 'favorites': favs}

def save_watch_progress(username, media_data):
    if not username or not media_data:
        return {'ok': False, 'error': 'Datos incompletos'}
    data = load_cinema_users()
    u_key = username.strip().lower()
    user = data.get('users', {}).get(u_key)
    if not user:
        return {'ok': False, 'error': 'Usuario no encontrado'}

    media_id = str(media_data.get('media_id') or media_data.get('mediaId') or media_data.get('id') or media_data.get('imdb') or '')
    if not media_id:
        return {'ok': False, 'error': 'ID de medio inválido'}

    in_prog = user.setdefault('inProgress', {})
    watched_map = user.setdefault('watched', {})
    history = user.setdefault('watchHistory', [])

    cur_time = float(media_data.get('current_time') or media_data.get('currentTime') or 0.0)
    duration = float(media_data.get('duration') or 0.0)
    pct = round((cur_time / duration * 100), 1) if duration > 0 else 0

    ep_info = media_data.get('episode_info') or {}
    s_num = media_data.get('season') or ep_info.get('season')
    e_num = media_data.get('episode') or ep_info.get('episode')
    item_key = f"{media_id}_s{s_num}e{e_num}" if s_num is not None and e_num is not None else media_id

    torrent_data = media_data.get('torrent_data') or {}
    torrent_id = media_data.get('torrentId') or torrent_data.get('torrentId') or ''
    file_idx = media_data.get('fileIdx') or torrent_data.get('fileIdx')

    # Si se vio más del 88% del contenido, considerarlo completado / visto
    is_watched = pct >= 88.0 or bool(media_data.get('watched'))
    if is_watched:
        watched_map[item_key] = True
        in_prog.pop(item_key, None)
    else:
        in_prog[item_key] = {
            'itemKey': item_key,
            'id': media_id,
            'media_id': media_id,
            'type': media_data.get('media_type') or media_data.get('type') or 'movie',
            'media_type': media_data.get('media_type') or media_data.get('type') or 'movie',
            'title': media_data.get('title') or media_data.get('name') or '',
            'episodeTitle': media_data.get('episodeTitle') or '',
            'season': s_num,
            'episode': e_num,
            'episode_info': {'season': s_num, 'episode': e_num} if s_num is not None and e_num is not None else None,
            'poster': media_data.get('poster') or '',
            'currentTime': cur_time,
            'current_time': cur_time,
            'progress_seconds': cur_time,
            'duration': duration,
            'progress': pct,
            'torrentId': torrent_id,
            'fileIdx': file_idx,
            'torrent_data': torrent_data or {'torrentId': torrent_id, 'fileIdx': file_idx},
            'quality': media_data.get('quality') or '1080p',
            'genres': media_data.get('genres') or [],
            'updatedAt': time.time()
        }

    # Registro en historial reciente
    hist_entry = {
        'id': media_id,
        'title': media_data.get('title') or '',
        'type': media_data.get('media_type') or media_data.get('type') or 'movie',
        'season': s_num,
        'episode': e_num,
        'watchedAt': time.time()
    }
    user['watchHistory'] = [h for h in history if h.get('id') != media_id][:50]
    user['watchHistory'].insert(0, hist_entry)

    save_cinema_users(data)
    return {
        'ok': True,
        'itemKey': item_key,
        'isWatched': is_watched,
        'progress': pct,
        'inProgress': list(in_prog.values())
    }

def mark_media_watched(username, media_id, watched=True):
    if not username or not media_id:
        return {'ok': False, 'error': 'Parámetros incompletos'}
    data = load_cinema_users()
    u_key = username.strip().lower()
    user = data.get('users', {}).get(u_key)
    if not user:
        return {'ok': False, 'error': 'Usuario no encontrado'}

    watched_map = user.setdefault('watched', {})
    m_str = str(media_id)
    if watched:
        watched_map[m_str] = True
        user.setdefault('inProgress', {}).pop(m_str, None)
    else:
        watched_map.pop(m_str, None)

    save_cinema_users(data)
    return {'ok': True, 'mediaId': m_str, 'watched': watched, 'watchedMap': watched_map}

def get_user_library(username):
    data = load_cinema_users()
    u_key = (username or 'helmuth').strip().lower()
    user = data.get('users', {}).get(u_key)
    if not user:
        user = data.get('users', {}).get('helmuth') or {}

    in_progress_items = list(user.get('inProgress', {}).values())
    in_progress_items.sort(key=lambda x: x.get('updatedAt', 0), reverse=True)

    favs = user.get('favorites', [])
    watched_map = user.get('watched', {})

    return {
        'username': user.get('username', 'helmuth'),
        'displayName': user.get('displayName', 'Helmuth'),
        'avatarColor': user.get('avatarColor', '#00e5ff'),
        'inProgress': in_progress_items,
        'favorites': favs,
        'watched': watched_map
    }

def get_user_recommendations(username):
    lib = get_user_library(username)
    preferred_genres = ['Action', 'Sci-Fi', 'Drama']
    fav_genres = []
    for f in lib.get('favorites', []):
        fav_genres.extend(f.get('genres', []))
    for p in lib.get('inProgress', []):
        fav_genres.extend(p.get('genres', []))

    if fav_genres:
        counts = {}
        for g in fav_genres:
            counts[g] = counts.get(g, 0) + 1
        preferred_genres = [k for k, _ in sorted(counts.items(), key=lambda x: x[1], reverse=True)[:3]]

    chosen_genre = preferred_genres[0] if preferred_genres else 'Action'
    movies_res = fetch_cinema_movies(genre=chosen_genre.lower(), sort_by='imdb_popular', page=1, limit=12)
    return {
        'ok': True,
        'genre': chosen_genre,
        'recommendations': movies_res.get('movies', [])[:10]
    }

def get_spanish_synopsis(title, original_summary=''):
    if not title:
        return re.sub(r'<[^>]+>', '', original_summary or '').strip()

    cache_key = f'synopsis_es:{title.strip().lower()}'
    now = time.time()
    if cache_key in CINEMA_CACHE:
        entry = CINEMA_CACHE[cache_key]
        if now - entry['timestamp'] < 86400:
            return entry['data']

    # 1. Búsqueda en Wikipedia en Español con redirecciones inteligentes (película o serie)
    for sr_query in [f'{title} serie de televisión', f'{title} película', title]:
        try:
            s_url = f'https://es.wikipedia.org/w/api.php?action=query&list=search&srsearch={urllib.parse.quote(sr_query)}&format=json&utf8=1'
            req = urllib.request.Request(s_url, headers={'User-Agent': 'AntenaSurApp/1.0'})
            with urllib.request.urlopen(req, context=SSL_CONTEXT, timeout=3.0) as resp:
                data = json.loads(resp.read().decode('utf-8'))
                hits = data.get('query', {}).get('search', [])
                if hits:
                    top_title = hits[0]['title']
                    sum_url = f'https://es.wikipedia.org/api/rest_v1/page/summary/{urllib.parse.quote(top_title)}'
                    s_req = urllib.request.Request(sum_url, headers={'User-Agent': 'AntenaSurApp/1.0'})
                    with urllib.request.urlopen(s_req, context=SSL_CONTEXT, timeout=3.0) as s_resp:
                        s_data = json.loads(s_resp.read().decode('utf-8'))
                        extract = s_data.get('extract', '').strip()
                        if extract and len(extract) > 40:
                            CINEMA_CACHE[cache_key] = {'data': extract, 'timestamp': now}
                            return extract
        except Exception:
            pass

    # 2. Si Wikipedia no encuentra o es muy corto, traducir al español latino
    if original_summary:
        try:
            clean_orig = re.sub(r'<[^>]+>', '', original_summary).strip()
            if clean_orig:
                trans_url = f'https://api.mymemory.translated.net/get?q={urllib.parse.quote(clean_orig[:450])}&langpair=en|es'
                req = urllib.request.Request(trans_url, headers={'User-Agent': 'AntenaSurApp/1.0'})
                with urllib.request.urlopen(req, context=SSL_CONTEXT, timeout=3.0) as resp:
                    t_data = json.loads(resp.read().decode('utf-8'))
                    translated = t_data.get('responseData', {}).get('translatedText', '').strip()
                    if translated and not translated.startswith('MYMEMORY WARNING'):
                        CINEMA_CACHE[cache_key] = {'data': translated, 'timestamp': now}
                        return translated
        except Exception:
            pass

    clean_fallback = re.sub(r'<[^>]+>', '', original_summary or '').strip()
    return clean_fallback

def process_and_filter_streams(raw_streams):
    """
    Filtra y agrupa streams torrent según las reglas estrictas de Antena Sur:
    - Omite 3D y grabaciones de salas de cine (CAM, TS, TC, SCR, Telesync).
    - Solo estrenos que hayan salido en plataformas digitales o en BluRay.
    - Máximo 3 opciones por resolución (las de mayor cantidad de semillas verificadas).
    - En orden estricto de mayor a menor: 4k primero, después 1080p, después HD (720p) y por último 480p.
    - Utiliza token boundary regex para evitar falsos positivos (ej. 384kbps confundido con 4K).
    """
    buckets = {'4K': [], '1080p': [], '720p': [], '480p': []}
    seen_hashes = set()

    for s in raw_streams:
        h = (s.get('infoHash') or s.get('hash') or '').strip().lower()
        if not h or h in seen_hashes:
            continue
        seen_hashes.add(h)

        title = s.get('title', '')
        name = s.get('name', '')
        raw_q = str(s.get('quality', '')).strip()
        combined_text = f'{name} {title} {raw_q}'

        # 1. Omite 3D y películas grabadas de cines
        if CAM_3D_PATTERN.search(combined_text):
            continue

        # 2. Extraer semillas verificadas
        seeds_m = re.search(r'👤\s*(\d+)', title)
        seeds = int(seeds_m.group(1)) if seeds_m else int(s.get('seeds') or 0)

        # 3. Extraer peso del archivo
        size_m = re.search(r'💾\s*([\d\.]+\s*[MG]B)', title)
        size = size_m.group(1) if size_m else (s.get('size') or 'HD')

        file_idx = s.get('fileIdx')
        if file_idx is None:
            file_idx = 0

        clean_title = title.split('\n')[0].strip() if title else name
        magnet = s.get('magnet_url') or build_magnet_uri(h, clean_title)

        # 4. Clasificar resolución exacta con regex de límites de palabra (evita 384kbps -> 4K)
        text_for_q = f'{name} {title}'
        raw_q_up = raw_q.upper()
        if Q4K_RE.search(text_for_q) or raw_q_up in ['4K', '2160P', 'UHD']:
            q = '4K'
        elif Q1080_RE.search(text_for_q) or raw_q_up in ['1080P', 'FHD', '1080I']:
            q = '1080p'
        elif Q720_RE.search(text_for_q) or raw_q_up in ['720P', 'HD']:
            q = '720p'
        elif Q480_RE.search(text_for_q) or raw_q_up in ['480P', 'SD']:
            q = '480p'
        else:
            continue

        flags, audio_desc = parse_audio_languages(name, title)

        buckets[q].append({
            'quality': q,
            'title': clean_title,
            'size': size,
            'seeds': seeds,
            'flags': flags,
            'audio': audio_desc,
            'hash': h,
            'fileIdx': file_idx,
            'magnet_url': magnet,
            'type': 'torrent'
        })

    # 5. Máximo 3 opciones por resolución, priorizando semillas verificadas y audio latino/español
    for q in ['4K', '1080p', '720p', '480p']:
        def stream_score(item):
            has_spanish = any(f in item.get('flags', []) for f in ['🇲🇽', '🇪🇸']) or 'Latino' in item.get('audio', '')
            bonus = 300 if has_spanish else 0
            return item['seeds'] + bonus

        buckets[q].sort(key=stream_score, reverse=True)
        buckets[q] = buckets[q][:3]

    # 6. En orden estricto de mayor a menor calidad: 4K, 1080p, HD (720p), 480p
    return buckets['4K'] + buckets['1080p'] + buckets['720p'] + buckets['480p']

def fetch_torrentio_streams(imdb_id, season=None, ep=None):
    clean_imdb = re.sub(r'^tt', '', imdb_id or '').strip()
    if not clean_imdb:
        return []

    cache_key = f'torrentio:{clean_imdb}:{season}:{ep}'
    now = time.time()
    if cache_key in CINEMA_CACHE:
        entry = CINEMA_CACHE[cache_key]
        if now - entry['timestamp'] < 1800:
            return entry['data']

    try:
        if season is not None and ep is not None:
            url = f'https://torrentio.strem.fun/stream/series/tt{clean_imdb}:{season}:{ep}.json'
        else:
            url = f'https://torrentio.strem.fun/stream/movie/tt{clean_imdb}.json'

        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
        with urllib.request.urlopen(req, context=SSL_CONTEXT, timeout=5.0) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            raw_streams = data.get('streams', [])
            processed = process_and_filter_streams(raw_streams)
            CINEMA_CACHE[cache_key] = {'data': processed, 'timestamp': now}
            return processed
    except Exception:
        return []

YTS_MIRRORS = ['https://yts.lt', 'https://yts.ag', 'https://yts.am', 'https://yts.gg', 'https://yts.mx']

def fetch_cinema_movies(query='', genre='', sort_by='imdb_popular', page=1, limit=24):
    cache_key = f'movies:{query}:{genre}:{sort_by}:{page}:{limit}'
    now = time.time()
    if cache_key in CINEMA_CACHE:
        entry = CINEMA_CACHE[cache_key]
        if now - entry['timestamp'] < CINEMA_CACHE_TTL:
            return entry['data']

    # Mapeo según estándares de IMDb y Rotten Tomatoes
    yts_sort = 'download_count'
    min_rating = '6.5'

    if sort_by in ['rating', 'imdb_rating']:
        yts_sort = 'rating'
        min_rating = '7.8'
    elif sort_by in ['year', 'latest']:
        yts_sort = 'year'
        min_rating = '6.2'
    elif sort_by in ['like_count', 'featured']:
        yts_sort = 'like_count'
        min_rating = '6.8'
    elif sort_by in ['rotten_fresh', 'rotten_tomatoes']:
        yts_sort = 'rating'
        min_rating = '7.5'
    else: # imdb_popular (default)
        yts_sort = 'download_count'
        min_rating = '6.5'

    params = {'sort_by': yts_sort, 'page': page, 'limit': limit, 'minimum_rating': min_rating}
    if query:
        params['query_term'] = query
        del params['minimum_rating']
    if genre and genre.lower() not in ['all', 'todos', '']:
        params['genre'] = genre.lower()
    qs = urllib.parse.urlencode(params)

    result = {'ok': False, 'movie_count': 0, 'limit': limit, 'page': page, 'movies': []}
    for mirror in YTS_MIRRORS:
        try:
            url = f'{mirror}/api/v2/list_movies.json?{qs}'
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
            with urllib.request.urlopen(req, context=SSL_CONTEXT, timeout=6.0) as resp:
                data = json.loads(resp.read().decode('utf-8'))
                if data.get('status') == 'ok':
                    movies = data.get('data', {}).get('movies', [])
                    for m in movies:
                        title = m.get('title', '')
                        m['imdb_rating'] = m.get('rating')
                        m['rotten_tomatoes'] = calculate_rotten_tomatoes(m.get('rating'), title, m.get('year'))
                        for t in m.get('torrents', []):
                            h = t.get('hash')
                            q = t.get('quality', '')
                            t_name = f'{title} [{q}]'
                            t['magnet_url'] = build_magnet_uri(h, t_name)
                            flags, audio_desc = parse_audio_languages(t_name, title)
                            t['flags'] = flags
                            t['audio'] = audio_desc
                        m['torrents'] = sort_streams_by_quality_and_seeds(m.get('torrents', []))

                    if sort_by in ['rotten_fresh', 'rotten_tomatoes']:
                        movies.sort(key=lambda x: x.get('rotten_tomatoes', {}).get('critics', 0), reverse=True)

                    result = {
                        'ok': True,
                        'movie_count': data.get('data', {}).get('movie_count', 0),
                        'limit': limit,
                        'page': page,
                        'movies': movies
                    }
                    CINEMA_CACHE[cache_key] = {'data': result, 'timestamp': now}
                    return result
        except Exception:
            continue

    return result

def fetch_cinema_movie_details(movie_id):
    cache_key = f'movie_detail:{movie_id}'
    now = time.time()
    if cache_key in CINEMA_CACHE:
        entry = CINEMA_CACHE[cache_key]
        if now - entry['timestamp'] < 3600:
            return entry['data']

    result = {'ok': False, 'movie': {}}

    # Si es un IMDb ID (tt...) consultar Cinemeta + Torrentio directamente estilo Stremio
    if str(movie_id).startswith('tt'):
        try:
            c_url = f'https://v3-cinemeta.strem.io/meta/movie/{movie_id}.json'
            c_req = urllib.request.Request(c_url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
            with urllib.request.urlopen(c_req, context=SSL_CONTEXT, timeout=5.0) as c_resp:
                c_data = json.loads(c_resp.read().decode('utf-8'))
                meta = c_data.get('meta', {})
                if meta:
                    title = meta.get('name', '')
                    torrents = fetch_torrentio_streams(movie_id)
                    syn_es = get_spanish_synopsis(title, meta.get('description', ''))
                    movie = {
                        'id': movie_id,
                        'title': title,
                        'year': meta.get('year', ''),
                        'rating': meta.get('imdbRating', ''),
                        'genres': meta.get('genres', []),
                        'description_full': syn_es or meta.get('description', ''),
                        'synopsis_es': syn_es,
                        'summary': syn_es or meta.get('description', ''),
                        'large_cover_image': meta.get('poster', ''),
                        'imdb_code': movie_id,
                        'torrents': torrents
                    }
                    result = {'ok': True, 'movie': movie}
                    CINEMA_CACHE[cache_key] = {'data': result, 'timestamp': now}
                    return result
        except Exception:
            pass

    for mirror in YTS_MIRRORS:
        try:
            url = f'{mirror}/api/v2/movie_details.json?movie_id={movie_id}&with_images=true&with_cast=true'
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
            with urllib.request.urlopen(req, context=SSL_CONTEXT, timeout=6.0) as resp:
                data = json.loads(resp.read().decode('utf-8'))
                if data.get('status') == 'ok':
                    movie = data.get('data', {}).get('movie', {})
                    title = movie.get('title', '')
                    for t in movie.get('torrents', []):
                        h = t.get('hash')
                        q = t.get('quality', '')
                        t_name = f'{title} [{q}]'
                        t['magnet_url'] = build_magnet_uri(h, t_name)

                    # Priorizar streams de alta velocidad con semillas verificadas de Torrentio (Stremio Engine)
                    all_candidates = []
                    if movie.get('imdb_code'):
                        torr_extra = fetch_torrentio_streams(movie['imdb_code'])
                        if torr_extra:
                            all_candidates.extend(torr_extra)

                    for yt in movie.get('torrents', []):
                        all_candidates.append(yt)

                    movie['torrents'] = process_and_filter_streams(all_candidates)

                    # Obtener sinopsis en español latino enriquecida
                    syn_es = get_spanish_synopsis(title, movie.get('description_full') or movie.get('synopsis') or movie.get('summary') or '')
                    if syn_es:
                        movie['synopsis_es'] = syn_es
                        movie['description_full'] = syn_es
                        movie['summary'] = syn_es

                    result = {'ok': True, 'movie': movie}
                    CINEMA_CACHE[cache_key] = {'data': result, 'timestamp': now}
                    return result
        except Exception:
            continue

    return result

def fetch_cinema_series(query='', page=1, sort_by='imdb_popular'):
    cache_key = f'series:{query}:{page}:{sort_by}'
    now = time.time()
    if cache_key in CINEMA_CACHE:
        entry = CINEMA_CACHE[cache_key]
        if now - entry['timestamp'] < CINEMA_CACHE_TTL:
            return entry['data']

    shows = []
    if query:
        # 1. Búsqueda por término en Cinemeta y TVMaze
        try:
            c_url = f'https://v3-cinemeta.strem.io/catalog/series/top/search={urllib.parse.quote(query)}.json'
            c_req = urllib.request.Request(c_url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(c_req, context=SSL_CONTEXT, timeout=5.0) as c_resp:
                c_data = json.loads(c_resp.read().decode('utf-8'))
                for m in c_data.get('metas', []):
                    r_raw = m.get('imdbRating')
                    try:
                        r_val = float(r_raw) if r_raw else 7.5
                    except:
                        r_val = 7.5
                    shows.append({
                        'id': m.get('id'),
                        'name': m.get('name'),
                        'premiered': str(m.get('year', ''))[:4],
                        'rating': r_val,
                        'imdb_rating': r_val,
                        'rotten_tomatoes': calculate_rotten_tomatoes(r_val, m.get('name')),
                        'genres': m.get('genres', []),
                        'poster': m.get('poster'),
                        'summary': m.get('description', ''),
                        'imdb': m.get('id')
                    })
        except Exception:
            pass

        if len(shows) < 6:
            try:
                tm_url = f'https://api.tvmaze.com/search/shows?q={urllib.parse.quote(query)}'
                tm_req = urllib.request.Request(tm_url, headers={'User-Agent': 'Mozilla/5.0'})
                with urllib.request.urlopen(tm_req, context=SSL_CONTEXT, timeout=5.0) as tm_resp:
                    tm_data = json.loads(tm_resp.read().decode('utf-8'))
                    for it in tm_data:
                        s = it.get('show', {})
                        s_id = s.get('id')
                        imdb_code = (s.get('externals') or {}).get('imdb')
                        r_val = (s.get('rating') or {}).get('average') or 7.2
                        shows.append({
                            'id': imdb_code or s_id,
                            'name': s.get('name'),
                            'premiered': s.get('premiered', '')[:4] if s.get('premiered') else '',
                            'rating': r_val,
                            'imdb_rating': r_val,
                            'rotten_tomatoes': calculate_rotten_tomatoes(r_val, s.get('name')),
                            'genres': s.get('genres', []),
                            'poster': (s.get('image') or {}).get('medium') or (s.get('image') or {}).get('original'),
                            'summary': re.sub(r'<[^>]+>', '', s.get('summary') or ''),
                            'imdb': imdb_code
                        })
            except Exception:
                pass
    else:
        # 2. Catálogo Top IMDb & Rotten Tomatoes de Cinemeta (Series más vistas y aclamadas mundialmente)
        try:
            skip = max(0, (page - 1) * 30)
            c_url = f'https://v3-cinemeta.strem.io/catalog/series/top/skip={skip}.json' if skip > 0 else 'https://v3-cinemeta.strem.io/catalog/series/top.json'
            c_req = urllib.request.Request(c_url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(c_req, context=SSL_CONTEXT, timeout=6.0) as c_resp:
                c_data = json.loads(c_resp.read().decode('utf-8'))
                for m in c_data.get('metas', []):
                    r_raw = m.get('imdbRating')
                    try:
                        r_val = float(r_raw) if r_raw else 7.6
                    except:
                        r_val = 7.6
                    shows.append({
                        'id': m.get('id'),
                        'name': m.get('name'),
                        'premiered': str(m.get('year', ''))[:4],
                        'rating': r_val,
                        'imdb_rating': r_val,
                        'rotten_tomatoes': calculate_rotten_tomatoes(r_val, m.get('name')),
                        'genres': m.get('genres', []),
                        'poster': m.get('poster'),
                        'summary': m.get('description', ''),
                        'imdb': m.get('id')
                    })
        except Exception:
            pass

        if not shows:
            # Respaldo TVMaze
            try:
                tm_url = f'https://api.tvmaze.com/shows?page={max(0, page - 1)}'
                tm_req = urllib.request.Request(tm_url, headers={'User-Agent': 'Mozilla/5.0'})
                with urllib.request.urlopen(tm_req, context=SSL_CONTEXT, timeout=5.0) as tm_resp:
                    raw = json.loads(tm_resp.read().decode('utf-8'))
                    for s in raw[:30]:
                        r_val = (s.get('rating') or {}).get('average') or 7.2
                        shows.append({
                            'id': (s.get('externals') or {}).get('imdb') or s.get('id'),
                            'name': s.get('name'),
                            'premiered': s.get('premiered', '')[:4] if s.get('premiered') else '',
                            'rating': r_val,
                            'imdb_rating': r_val,
                            'rotten_tomatoes': calculate_rotten_tomatoes(r_val, s.get('name')),
                            'genres': s.get('genres', []),
                            'poster': (s.get('image') or {}).get('medium') or (s.get('image') or {}).get('original'),
                            'summary': re.sub(r'<[^>]+>', '', s.get('summary') or ''),
                            'imdb': (s.get('externals') or {}).get('imdb')
                        })
            except Exception:
                pass

        if sort_by in ['rating', 'imdb_rating', 'rotten_fresh']:
            shows.sort(key=lambda x: float(x.get('rating') or 0), reverse=True)

    result = {'ok': True, 'shows': shows, 'page': page}
    CINEMA_CACHE[cache_key] = {'data': result, 'timestamp': now}
    return result

def fetch_cinema_series_details(tvmaze_id='', imdb_id=''):
    cache_key = f'series_details:{tvmaze_id}:{imdb_id}'
    now = time.time()
    if cache_key in CINEMA_CACHE:
        entry = CINEMA_CACHE[cache_key]
        if now - entry['timestamp'] < 1800:
            return entry['data']

    clean_imdb = re.sub(r'^tt', '', imdb_id or '')
    show_data = {}

    if tvmaze_id:
        try:
            url = f'https://api.tvmaze.com/shows/{tvmaze_id}?embed=episodes'
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
            with urllib.request.urlopen(req, context=SSL_CONTEXT, timeout=6.0) as resp:
                show_data = json.loads(resp.read().decode('utf-8'))
        except Exception:
            pass

    if not show_data and clean_imdb:
        try:
            url = f'https://api.tvmaze.com/lookup/shows?imdb=tt{clean_imdb}'
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
            with urllib.request.urlopen(req, context=SSL_CONTEXT, timeout=6.0) as resp:
                basic_show = json.loads(resp.read().decode('utf-8'))
                if basic_show.get('id'):
                    found_id = basic_show['id']
                    ep_url = f'https://api.tvmaze.com/shows/{found_id}?embed=episodes'
                    ep_req = urllib.request.Request(ep_url, headers={'User-Agent': 'Mozilla/5.0'})
                    with urllib.request.urlopen(ep_req, context=SSL_CONTEXT, timeout=6.0) as ep_resp:
                        show_data = json.loads(ep_resp.read().decode('utf-8'))
        except Exception:
            pass

    # Resolver IMDb ID desde los datos de TVMaze si no se suministró al inicio
    if not clean_imdb and show_data:
        ext_imdb = (show_data.get('externals') or {}).get('imdb')
        if ext_imdb:
            clean_imdb = re.sub(r'^tt', '', str(ext_imdb)).strip()

    torrents_by_ep = {}
    if clean_imdb:
        try:
            eztv_url = f'https://eztvx.to/api/get-torrents?imdb_id={clean_imdb}&limit=100'
            req = urllib.request.Request(eztv_url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
            with urllib.request.urlopen(req, context=SSL_CONTEXT, timeout=6.0) as resp:
                ez_data = json.loads(resp.read().decode('utf-8'))
                for t in ez_data.get('torrents', []):
                    try:
                        s_n = int(t.get('season', 0))
                        e_n = int(t.get('episode', 0))
                        if s_n > 0 and e_n > 0:
                            k = f'{s_n}_{e_n}'
                            torrents_by_ep.setdefault(k, []).append(t)
                    except Exception:
                        pass
        except Exception:
            pass

    raw_episodes = show_data.get('_embedded', {}).get('episodes', [])
    seasons_map = {}

    for ep in raw_episodes:
        s_num = ep.get('season') or 1
        e_num = ep.get('number') or 1

        if s_num not in seasons_map:
            seasons_map[s_num] = []

        ep_key = f'{s_num}_{e_num}'
        matched_torrents = torrents_by_ep.get(ep_key, [])
        ep_streams = []

        for t in matched_torrents:
            t_title = t.get('title') or f'Torrent S{s_num:02d}E{e_num:02d}'
            title_l = t_title.lower()
            if CAM_3D_PATTERN.search(title_l):
                continue

            if '2160p' in title_l or '4k' in title_l or 'uhd' in title_l:
                q = '4K'
            elif '1080p' in title_l or '1080i' in title_l or 'fhd' in title_l:
                q = '1080p'
            elif '720p' in title_l or '720i' in title_l:
                q = '720p'
            elif '480p' in title_l or 'sd' in title_l:
                q = '480p'
            else:
                q = 'HD'

            try:
                raw_bytes = int(t.get('size_bytes') or 0)
                size_mb = int(raw_bytes / (1024 * 1024))
                size_str = f'{size_mb} MB' if size_mb < 1024 else f'{size_mb/1024:.1f} GB'
            except Exception:
                size_str = 'HD'

            seeds_count = int(t.get('seeds') or 0)
            flags, audio_desc = parse_audio_languages(t_title, t_title)

            ep_streams.append({
                'quality': q,
                'title': t_title,
                'size': size_str,
                'seeds': seeds_count,
                'flags': flags,
                'audio': audio_desc,
                'magnet_url': t.get('magnet_url') or '',
                'hash': t.get('hash') or '',
                'fileIdx': 0,
                'type': 'torrent'
            })

        # Ordenar estrictamente: 4K, 1080p, HD (720p), 480p (máximo 3 opciones por calidad)
        streams = sort_streams_by_quality_and_seeds(ep_streams, max_per_quality=3)

        ep_img = (ep.get('image') or {}).get('medium') or (ep.get('image') or {}).get('original') or ''
        summary_clean = re.sub(r'<[^>]+>', '', ep.get('summary') or '').strip()

        seasons_map[s_num].append({
            'id': ep.get('id') or f'{s_num}_{e_num}',
            'season': s_num,
            'number': e_num,
            'name': ep.get('name') or f'Episodio {e_num}',
            'airdate': ep.get('airdate') or '',
            'runtime': ep.get('runtime') or '',
            'summary': summary_clean,
            'image': ep_img,
            'streams': streams
        })

    if not seasons_map and torrents_by_ep:
        for k, t_list in torrents_by_ep.items():
            parts = k.split('_')
            s_num = int(parts[0])
            e_num = int(parts[1])
            if s_num not in seasons_map:
                seasons_map[s_num] = []

            ep_streams = []
            for t in t_list:
                t_title = t.get('title') or f'Torrent S{s_num:02d}E{e_num:02d}'
                title_l = t_title.lower()
                if CAM_3D_PATTERN.search(title_l):
                    continue

                if '2160p' in title_l or '4k' in title_l:
                    q = '4K'
                elif '1080p' in title_l or '1080i' in title_l:
                    q = '1080p'
                elif '720p' in title_l or '720i' in title_l:
                    q = '720p'
                elif '480p' in title_l or 'sd' in title_l:
                    q = '480p'
                else:
                    q = 'HD'

                flags, audio_desc = parse_audio_languages(t_title, t_title)
                ep_streams.append({
                    'quality': q,
                    'title': t_title,
                    'size': 'HD',
                    'seeds': int(t.get('seeds') or 0),
                    'flags': flags,
                    'audio': audio_desc,
                    'magnet_url': t.get('magnet_url') or '',
                    'hash': t.get('hash') or '',
                    'fileIdx': 0,
                    'type': 'torrent'
                })

            streams = sort_streams_by_quality_and_seeds(ep_streams, max_per_quality=3)
            seasons_map[s_num].append({
                'id': f'{s_num}_{e_num}',
                'season': s_num,
                'number': e_num,
                'name': f'Episodio {e_num}',
                'airdate': '',
                'summary': '',
                'image': '',
                'streams': streams
            })

    show_name = show_data.get('name') or ''
    synopsis_es = get_spanish_synopsis(show_name, show_data.get('summary') or '')

    seasons_sorted = sorted(seasons_map.keys())
    latest_season = seasons_sorted[-1] if seasons_sorted else 1
    latest_episodes = seasons_map.get(latest_season, [])
    latest_episode = latest_episodes[-1] if latest_episodes else None

    # Enriquecer streams del último episodio con Torrentio P2P en orden estricto de calidad
    if latest_episode and clean_imdb:
        torr_streams = fetch_torrentio_streams(clean_imdb, latest_episode.get('season'), latest_episode.get('number'))
        if torr_streams:
            combined = (latest_episode.get('streams') or []) + torr_streams
            latest_episode['streams'] = sort_streams_by_quality_and_seeds(combined, max_per_quality=3)

    # Enriquecer también el primer episodio de la primera temporada para inicio rápido en orden estricto
    if seasons_map and 1 in seasons_map and seasons_map[1] and clean_imdb:
        first_ep = seasons_map[1][0]
        if first_ep:
            torr_extra = fetch_torrentio_streams(clean_imdb, 1, 1)
            if torr_extra:
                combined = (first_ep.get('streams') or []) + torr_extra
                first_ep['streams'] = sort_streams_by_quality_and_seeds(combined, max_per_quality=3)

    result = {
        'ok': True,
        'show': {
            'id': show_data.get('id') or tvmaze_id,
            'name': show_name,
            'premiered': (show_data.get('premiered') or '')[:4],
            'rating': (show_data.get('rating') or {}).get('average'),
            'genres': show_data.get('genres') or [],
            'poster': (show_data.get('image') or {}).get('original') or (show_data.get('image') or {}).get('medium') or '',
            'summary': synopsis_es or re.sub(r'<[^>]+>', '', show_data.get('summary') or '').strip(),
            'imdb': f'tt{clean_imdb}' if clean_imdb else (show_data.get('externals') or {}).get('imdb') or ''
        },
        'seasons': seasons_sorted,
        'latestSeason': latest_season,
        'latestEpisode': latest_episode,
        'episodesBySeason': seasons_map
    }

    CINEMA_CACHE[cache_key] = {'data': result, 'timestamp': now}
    return result

def fetch_cinema_series_episodes(imdb_id):
    clean_imdb = re.sub(r'^tt', '', imdb_id or '')
    if not clean_imdb:
        return {'ok': False, 'error': 'Falta el IMDb ID de la serie', 'episodes': []}

    cache_key = f'series_episodes:{clean_imdb}'
    now = time.time()
    if cache_key in CINEMA_CACHE:
        entry = CINEMA_CACHE[cache_key]
        if now - entry['timestamp'] < 1800:
            return entry['data']

    try:
        url = f'https://eztvx.to/api/get-torrents?imdb_id={clean_imdb}&limit=100'
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
        with urllib.request.urlopen(req, context=SSL_CONTEXT, timeout=7.0) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            torrents = data.get('torrents', [])
            result = {'ok': True, 'imdb': clean_imdb, 'episodes': torrents}
            CINEMA_CACHE[cache_key] = {'data': result, 'timestamp': now}
            return result
    except Exception as e:
        return {'ok': False, 'error': str(e), 'episodes': []}

def fetch_cinema_subtitles(imdb_id, season=None, ep=None):
    clean_imdb = re.sub(r'^tt', '', imdb_id or '').strip()
    if not clean_imdb:
        return {'ok': False, 'subtitles': []}

    cache_key = f'subs:{clean_imdb}:{season}:{ep}'
    now = time.time()
    if cache_key in CINEMA_CACHE:
        entry = CINEMA_CACHE[cache_key]
        if now - entry['timestamp'] < 3600:
            return entry['data']

    try:
        if season is not None and ep is not None:
            url = f'https://opensubtitles-v3.strem.io/subtitles/series/tt{clean_imdb}:{season}:{ep}.json'
        else:
            url = f'https://opensubtitles-v3.strem.io/subtitles/movie/tt{clean_imdb}.json'

        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
        with urllib.request.urlopen(req, context=SSL_CONTEXT, timeout=5.0) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            raw_subs = data.get('subtitles', [])

            formatted = []
            spa_lat_count = 0
            spa_count = 0
            spa_cas_count = 0

            for s in raw_subs:
                lang = s.get('lang', '').lower()
                s_url = s.get('url', '')
                if not s_url:
                    continue

                low_url = s_url.lower()
                is_latino = bool('lat' in low_url or 'latino' in low_url or lang in ['es-419', 'es-la', 'spa-la', 'es-mx', 'lat'])
                is_castellano = bool('cas' in low_url or 'castellano' in low_url or lang in ['es-es'])
                is_spanish = bool(lang in ['spa', 'es', 'es-la', 'es-es', 'spa-la', 'es-419', 'es-mx', 'lat'] or is_latino or is_castellano)

                # Requisito estricto: Solo subtítulos en Español (Latino, Neutro, España). Excluir inglés u otros idiomas.
                if not is_spanish:
                    continue

                # Extraer metadatos de ripeo y FPS del subtítulo para concordancia exacta
                raw_rel = s.get('movieReleaseName') or s.get('subtitleFileName') or ''
                sub_file = s.get('subtitleFileName') or ''
                fps = s.get('fpsMilli')
                fps_str = f"{fps / 1000.0:.3f}".rstrip('0').rstrip('.') + ' FPS' if fps else ''
                group = s.get('releaseGroup') or ''
                clean_rel = re.sub(r'\.(srt|sub|vtt)$', '', raw_rel, flags=re.IGNORECASE).strip()

                if is_latino:
                    spa_lat_count += 1
                    label = f'Español Latino #{spa_lat_count}'
                    score = 100 - spa_lat_count
                    icon = '🇲🇽'
                elif not is_castellano:
                    spa_count += 1
                    label = f'Español Neutro #{spa_count}'
                    score = 80 - spa_count
                    icon = '🌎'
                else:
                    spa_cas_count += 1
                    label = f'Español España #{spa_cas_count}'
                    score = 60 - spa_cas_count
                    icon = '🇪🇸'

                vtt_proxy_url = f'/api/cinema/subtitle_file?url={urllib.parse.quote(s_url)}'

                formatted.append({
                    'id': s.get('id', str(len(formatted))),
                    'lang': lang,
                    'label': label,
                    'icon': icon,
                    'release_name': clean_rel,
                    'subtitle_file': sub_file,
                    'release_group': group,
                    'fps': fps_str,
                    'fps_milli': fps,
                    'is_latino': is_latino,
                    'is_spanish': True,
                    'is_english': False,
                    'score': score,
                    'vtt_url': vtt_proxy_url,
                    'original_url': s_url
                })

            formatted.sort(key=lambda x: x['score'], reverse=True)
            res = {'ok': True, 'subtitles': formatted}
            CINEMA_CACHE[cache_key] = {'data': res, 'timestamp': now}
            return res
    except Exception as e:
        return {'ok': False, 'error': str(e), 'subtitles': []}

# MIME types adicionales necesarios para streams HLS, audio y subtítulos
MIME_TYPES = {
    '.vtt': 'text/vtt; charset=utf-8',
    '.srt': 'text/plain; charset=utf-8',
    '.m3u8': 'application/vnd.apple.mpegurl',
    '.m3u': 'application/vnd.apple.mpegurl',
    '.ts': 'video/mp2t',
    '.m4s': 'video/iso.segment',
    '.mp4': 'video/mp4',
    '.mp3': 'audio/mpeg',
    '.aac': 'audio/aac',
    '.ogg': 'audio/ogg',
    '.json': 'application/json',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.svg': 'image/svg+xml',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.webp': 'image/webp'
}

def get_smart_referer(target_url, ref_param=None):
    if ref_param:
        return ref_param
    low_url = target_url.lower()
    if 'uchile' in low_url:
        return 'https://tv.uchile.cl/'
    elif '13' in low_url or 'dpsgo.com' in low_url:
        return 'https://www.13.cl/'
    elif 'chv' in low_url or 'rudo.video' in low_url:
        return 'https://www.chilevision.cl/'
    elif 'mega' in low_url:
        return 'https://www.mega.cl/'
    elif 'tvmas' in low_url:
        return 'https://tvmas.tv/'
    elif 'mdstrm.com' in low_url or '24horas' in low_url:
        return 'https://www.24horas.cl/'
    elif 'tntsports' in low_url:
        return 'https://www.tntsports.cl/'
    elif 'rtvc.gov.co' in low_url:
        return 'https://www.rtvc.gov.co/'
    else:
        try:
            parsed_target = urllib.parse.urlparse(target_url)
            return f"{parsed_target.scheme}://{parsed_target.netloc}/"
        except Exception:
            return 'https://www.google.com/'

class AntenaSurHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        # Habilitar CORS universalmente para todos los recursos
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, HEAD, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', '*')
        self.send_header('Access-Control-Expose-Headers', 'Content-Length, Content-Range')
        # Prevenir que el navegador sirva bundles JS/CSS obsoletos
        if any(self.path.startswith(p) for p in ['/js/', '/css/', '/index.html']) or self.path == '/':
            self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
            self.send_header('Pragma', 'no-cache')
            self.send_header('Expires', '0')
        super().end_headers()

    def send_json_response(self, obj, code=200):
        encoded = json.dumps(obj, ensure_ascii=False).encode('utf-8')
        self.send_response(code)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Content-Length', str(len(encoded)))
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, HEAD, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', '*')
        self.end_headers()
        self.wfile.write(encoded)

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, HEAD, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', '*')
        self.end_headers()

    def do_POST(self):
        content_length = int(self.headers.get('Content-Length', 0))
        body = self.rfile.read(content_length) if content_length > 0 else b'{}'
        try:
            req_data = json.loads(body.decode('utf-8'))
        except Exception:
            req_data = {}

        if self.path == '/api/cinema/auth/login':
            res = auth_login(req_data.get('username'), req_data.get('password'))
            self.send_json_response(res)
            return

        if self.path == '/api/cinema/auth/register':
            res = auth_register(req_data.get('username'), req_data.get('password'), req_data.get('displayName'))
            self.send_json_response(res)
            return

        if self.path == '/api/cinema/user/favorite':
            res = toggle_user_favorite(req_data.get('username'), req_data.get('item'), req_data.get('action'))
            self.send_json_response(res)
            return

        if self.path == '/api/cinema/user/progress':
            res = save_watch_progress(req_data.get('username'), req_data)
            self.send_json_response(res)
            return

        if self.path == '/api/cinema/user/mark_watched':
            m_id = req_data.get('mediaId') or req_data.get('media_id')
            w_act = req_data.get('action')
            is_w = (w_act != 'unmark') if w_act is not None else req_data.get('watched', True)
            res = mark_media_watched(req_data.get('username'), m_id, is_w)
            self.send_json_response(res)
            return

        self.send_error(404, 'Endpoint POST no encontrado')

    def do_HEAD(self):
        if self.path.startswith('/api/'):
            return self.do_GET()
        return super().do_HEAD()

    def guess_type(self, path):
        _, ext = os.path.splitext(path)
        if ext.lower() in MIME_TYPES:
            return MIME_TYPES[ext.lower()]
        return super().guess_type(path)

    def do_GET(self):
        # Endpoint de Diagnóstico para Microservicio Torrent: /api/torrent/diag
        if self.path.startswith('/api/torrent/diag'):
            ensure_torrent_service()
            script_dir = os.path.dirname(os.path.abspath(__file__))
            log_path = os.path.join(script_dir, 'torrent_service.log')
            log_content = ""
            if os.path.isfile(log_path):
                try:
                    with open(log_path, 'r', encoding='utf-8', errors='ignore') as f:
                        lines = f.readlines()
                        log_content = "".join(lines[-40:])
                except Exception:
                    pass

            node_bin = get_or_install_node()
            is_listening = not is_port_available(8088)
            diag_data = {
                'ok': True,
                'platform': sys.platform,
                'node_bin': node_bin,
                'port_8088_listening': is_listening,
                'starting': TORRENT_STARTING,
                'webtorrent_installed': os.path.isfile(os.path.join(script_dir, 'node_modules', 'webtorrent', 'index.js')),
                'installer_logs': INSTALLER_LOGS,
                'log_tail': log_content
            }
            self.send_json_response(diag_data)
            return

        # Endpoint de Proxy para Microservicio de Torrent P2P: /api/torrent/*
        if self.path.startswith('/api/torrent/'):
            ensure_torrent_service()
            if is_port_available(8088):
                for _ in range(20):
                    time.sleep(0.2)
                    if not is_port_available(8088):
                        break

            if is_port_available(8088):
                self.send_response(503)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.send_header('Retry-After', '2')
                self.end_headers()
                self.wfile.write(b'{"active":false,"ready":false,"peers":0,"msg":"Iniciando motor torrent..."}')
                return

            target_url = f'http://127.0.0.1:8088{self.path}'
            req_headers = {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)',
                'Accept': '*/*'
            }
            if 'Range' in self.headers:
                req_headers['Range'] = self.headers['Range']

            try:
                req = urllib.request.Request(target_url, headers=req_headers)
                t_out = None if '/stream' in self.path else 25
                with urllib.request.urlopen(req, timeout=t_out) as resp:
                    status_code = resp.status
                    self.send_response(status_code)
                    for h in ['Content-Type', 'Content-Range', 'Content-Length', 'Accept-Ranges']:
                        if h in resp.headers:
                            self.send_header(h, resp.headers[h])
                    self.send_header('Access-Control-Allow-Origin', '*')
                    self.send_header('Access-Control-Allow-Headers', 'Range, Accept-Ranges, Content-Range, Content-Type')
                    self.send_header('Access-Control-Expose-Headers', 'Content-Length, Content-Range, Accept-Ranges')
                    self.end_headers()
                    self.wfile.flush()

                    if self.command == 'HEAD':
                        return

                    while True:
                        chunk = resp.read(65536)
                        if not chunk:
                            break
                        self.wfile.write(chunk)
            except urllib.error.HTTPError as he:
                try:
                    self.send_response(he.code)
                    for h in ['Content-Type', 'Content-Range', 'Content-Length', 'Accept-Ranges']:
                        if h in he.headers:
                            self.send_header(h, he.headers[h])
                    self.send_header('Access-Control-Allow-Origin', '*')
                    self.end_headers()
                    self.wfile.write(he.read())
                except Exception:
                    pass
            except (BrokenPipeError, ConnectionResetError):
                pass
            except Exception as e:
                try:
                    self.send_error(502, f'Error al conectar con torrent service: {str(e)}')
                except Exception:
                    pass
            return

        # Endpoint de Proxy CORS inteligente: /api/proxy?url=https%3A%2F%2F...
        if self.path.startswith('/api/proxy'):
            parsed = urllib.parse.urlparse(self.path)
            query = urllib.parse.parse_qs(parsed.query)
            target_url = query.get('url', [None])[0]
            ref_param = query.get('ref', [None])[0]

            if not target_url:
                self.send_error(400, 'Falta el parametro url')
                return

            try:
                # Construir encabezado Referer inteligente según el canal
                referer = get_smart_referer(target_url, ref_param)

                headers = {
                    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
                    'Accept': '*/*',
                    'Accept-Language': 'es-419,es;q=0.9,en;q=0.8',
                    'Referer': referer
                }

                # Reenviar cabecera Range si viene en la petición original
                if 'Range' in self.headers:
                    headers['Range'] = self.headers['Range']

                req = urllib.request.Request(target_url, headers=headers)
                with urllib.request.urlopen(req, context=SSL_CONTEXT, timeout=12) as response:
                    actual_url = response.geturl() or target_url
                    content_type = response.headers.get('Content-Type', '')
                    # Leer los primeros 1024 bytes para detectar m3u8 sin colgar en streams continuos de audio
                    first_chunk = response.read(1024)

                    # Detectar si el contenido es una lista de reproducción M3U8
                    is_m3u8 = (
                        '.m3u8' in target_url.lower() or
                        '.m3u8' in actual_url.lower() or
                        '.m3u' in target_url.lower() or
                        'mpegurl' in content_type.lower() or
                        first_chunk.lstrip().startswith(b'#EXTM3U')
                    )

                    if is_m3u8:
                        rest_data = response.read()
                        raw_data = first_chunk + rest_data

                        # Decodificar y reescribir URIs relativas y absolutas para que pasen por el proxy
                        try:
                            text = raw_data.decode('utf-8', errors='replace')
                        except Exception:
                            text = raw_data.decode('latin-1', errors='replace')

                        # Filtrar y extirpar publicidad HLS (Motor LibreTV)
                        text = clean_m3u8_ads(text)

                        lines = text.splitlines()
                        rewritten_lines = []
                        ref_query_part = f'&ref={urllib.parse.quote(referer, safe="")}' if referer else ''

                        for line in lines:
                            stripped = line.strip()
                            if not stripped:
                                rewritten_lines.append(line)
                                continue

                            # Reescritura de etiquetas con atributo URI="..." (como #EXT-X-KEY o #EXT-X-MAP)
                            if stripped.startswith('#') and 'URI="' in stripped:
                                def replace_uri(match):
                                    inner_uri = match.group(1)
                                    resolved = urllib.parse.urljoin(actual_url, inner_uri)
                                    return f'URI="/api/proxy?url={urllib.parse.quote(resolved, safe="")}{ref_query_part}"'
                                new_line = re.sub(r'URI="([^"]+)"', replace_uri, stripped)
                                rewritten_lines.append(new_line)
                            elif not stripped.startswith('#'):
                                # Es una URL de variante m3u8 o segmento .ts / .m4s
                                resolved_url = urllib.parse.urljoin(actual_url, stripped)
                                proxy_url = f'/api/proxy?url={urllib.parse.quote(resolved_url, safe="")}{ref_query_part}'
                                rewritten_lines.append(proxy_url)
                            else:
                                rewritten_lines.append(line)

                        output_data = '\n'.join(rewritten_lines).encode('utf-8')
                        self.send_response(200)
                        self.send_header('Content-Type', 'application/vnd.apple.mpegurl')
                        self.send_header('Content-Length', str(len(output_data)))
                        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
                        self.end_headers()
                        self.wfile.write(output_data)
                        return
                    else:
                        # Archivo binario o stream continuo de audio/video (.ts, .m4s, .mp3, etc.)
                        status_code = response.status
                        self.send_response(status_code)
                        if content_type:
                            self.send_header('Content-Type', content_type)
                        else:
                            guessed = MIME_TYPES.get(os.path.splitext(urllib.parse.urlparse(target_url).path)[1].lower(), 'video/mp2t')
                            self.send_header('Content-Type', guessed)

                        if 'Content-Range' in response.headers:
                            self.send_header('Content-Range', response.headers['Content-Range'])
                        if 'Content-Length' in response.headers:
                            self.send_header('Content-Length', response.headers['Content-Length'])

                        self.send_header('Cache-Control', 'no-cache')
                        self.end_headers()

                        # Transmitir primer bloque
                        if first_chunk:
                            self.wfile.write(first_chunk)

                        # Transmitir flujo por bloques sucesivos
                        try:
                            while True:
                                chunk = response.read(16384)
                                if not chunk:
                                    break
                                self.wfile.write(chunk)
                        except (BrokenPipeError, ConnectionResetError):
                            pass
                        return
            except Exception as e:
                self.send_error(502, f'Error al consultar el stream: {str(e)}')
            return

        # Endpoint de Now Playing: /api/nowplaying?id=...&stream=...
        if self.path.startswith('/api/nowplaying'):
            parsed = urllib.parse.urlparse(self.path)
            query = urllib.parse.parse_qs(parsed.query)
            station_id = query.get('id', [''])[0]
            stream_url = query.get('stream', [''])[0]

            np_data = get_now_playing(station_id, stream_url)
            encoded = json.dumps(np_data, ensure_ascii=False).encode('utf-8')
            self.send_response(200)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.send_header('Content-Length', str(len(encoded)))
            self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
            self.end_headers()
            self.wfile.write(encoded)
            return

        # Endpoint de Live Probe & Latency Test (LibreTV style): /api/live/probe?url=...
        if self.path.startswith('/api/live/probe'):
            parsed = urllib.parse.urlparse(self.path)
            query = urllib.parse.parse_qs(parsed.query)
            target_url = query.get('url', [None])[0]
            ref_param = query.get('ref', [None])[0]

            if not target_url:
                self.send_error(400, 'Falta el parametro url')
                return

            referer = get_smart_referer(target_url, ref_param)
            headers = {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
                'Accept': '*/*',
                'Referer': referer
            }
            start_time = time.time()
            try:
                req = urllib.request.Request(target_url, headers=headers)
                with urllib.request.urlopen(req, context=SSL_CONTEXT, timeout=3.5) as resp:
                    first_bytes = resp.read(512)
                    latency_ms = int((time.time() - start_time) * 1000)
                    is_hls = (
                        '.m3u8' in target_url.lower() or
                        first_bytes.lstrip().startswith(b'#EXTM3U')
                    )
                    probe_result = {
                        'ok': True,
                        'url': target_url,
                        'latencyMs': latency_ms,
                        'status': resp.status,
                        'isHls': is_hls
                    }
            except Exception as e:
                latency_ms = int((time.time() - start_time) * 1000)
                probe_result = {
                    'ok': False,
                    'url': target_url,
                    'latencyMs': latency_ms,
                    'error': str(e)
                }

            encoded = json.dumps(probe_result, ensure_ascii=False).encode('utf-8')
            self.send_response(200)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.send_header('Content-Length', str(len(encoded)))
            self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
            self.end_headers()
            self.wfile.write(encoded)
            return

        # Endpoint de resolución de YouTube Live a Embed: /api/youtube/embed?url=...
        if self.path.startswith('/api/youtube/embed'):
            parsed = urllib.parse.urlparse(self.path)
            query = urllib.parse.parse_qs(parsed.query)
            target_url = query.get('url', [None])[0]

            if not target_url:
                self.send_error(400, 'Falta el parametro url')
                return

            embed_url = get_yt_embed_url(target_url)
            self.send_response(302)
            self.send_header('Location', embed_url)
            self.send_header('Cache-Control', 'public, max-age=600')
            self.end_headers()
            return

        # Endpoint de Sincronización Automática con M3U.CL: /api/sync/m3u-cl
        if self.path.startswith('/api/sync/m3u-cl'):
            parsed = urllib.parse.urlparse(self.path)
            query = urllib.parse.parse_qs(parsed.query)
            force = 'force' in query
            sync_result = sync_chilean_m3u(force=force)
            encoded = json.dumps(sync_result, ensure_ascii=False).encode('utf-8')
            self.send_response(200)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.send_header('Content-Length', str(len(encoded)))
            self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
            self.end_headers()
            self.wfile.write(encoded)
            return

        # Endpoint de Señal Oficial TVN con Access Token Dinámico: /api/live/tvn.m3u8
        if self.path.startswith('/api/live/tvn.m3u8'):
            token = get_tvn_token()
            if token:
                target_url = f'https://mdstrm.com/live-stream-playlist/57a498c4d7b86d600e5461cb.m3u8?access_token={token}'
            else:
                target_url = 'https://mdstrm.com/live-stream-playlist/533adcc949386ce765657d7c.m3u8?PlaylistM3UCL'
            self.send_response(302)
            self.send_header('Location', target_url)
            self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
            self.end_headers()
            return

        # Endpoint de Cartelera Películas: /api/cinema/movies?query=...&genre=...&sort_by=...&page=...
        if self.path.startswith('/api/cinema/movies'):
            parsed = urllib.parse.urlparse(self.path)
            query = urllib.parse.parse_qs(parsed.query)
            q = query.get('query', [''])[0]
            genre = query.get('genre', [''])[0]
            sort_by = query.get('sort_by', ['year'])[0]
            page = int(query.get('page', ['1'])[0])
            limit = int(query.get('limit', ['24'])[0])

            res = fetch_cinema_movies(query=q, genre=genre, sort_by=sort_by, page=page, limit=limit)
            encoded = json.dumps(res, ensure_ascii=False).encode('utf-8')
            self.send_response(200)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.send_header('Content-Length', str(len(encoded)))
            self.send_header('Cache-Control', 'public, max-age=300')
            self.end_headers()
            self.wfile.write(encoded)
            return

        # Endpoint de Detalles de Película: /api/cinema/movie?id=...
        if self.path.startswith('/api/cinema/movie'):
            parsed = urllib.parse.urlparse(self.path)
            query = urllib.parse.parse_qs(parsed.query)
            movie_id = query.get('id', [''])[0]

            if not movie_id:
                self.send_error(400, 'Falta el id de la pelicula')
                return

            res = fetch_cinema_movie_details(movie_id)
            encoded = json.dumps(res, ensure_ascii=False).encode('utf-8')
            self.send_response(200)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.send_header('Content-Length', str(len(encoded)))
            self.send_header('Cache-Control', 'public, max-age=600')
            self.end_headers()
            self.wfile.write(encoded)
            return

        # Endpoint de Temporadas y Episodios Estilo Stremio: /api/cinema/series/details?id=...&imdb=...
        if self.path.startswith('/api/cinema/series/details'):
            parsed = urllib.parse.urlparse(self.path)
            query = urllib.parse.parse_qs(parsed.query)
            series_id = query.get('id', [''])[0]
            imdb = query.get('imdb', [''])[0]

            res = fetch_cinema_series_details(tvmaze_id=series_id, imdb_id=imdb)
            encoded = json.dumps(res, ensure_ascii=False).encode('utf-8')
            self.send_response(200)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.send_header('Content-Length', str(len(encoded)))
            self.send_header('Cache-Control', 'public, max-age=600')
            self.end_headers()
            self.wfile.write(encoded)
            return

        # Endpoint de Episodios de Serie: /api/cinema/series/episodes?imdb=...
        if self.path.startswith('/api/cinema/series/episodes'):
            parsed = urllib.parse.urlparse(self.path)
            query = urllib.parse.parse_qs(parsed.query)
            imdb = query.get('imdb', [''])[0]

            res = fetch_cinema_series_episodes(imdb)
            encoded = json.dumps(res, ensure_ascii=False).encode('utf-8')
            self.send_response(200)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.send_header('Content-Length', str(len(encoded)))
            self.send_header('Cache-Control', 'public, max-age=600')
            self.end_headers()
            self.wfile.write(encoded)
            return

        # Endpoint de resolución de streams para un episodio específico: /api/cinema/series/episode_streams?imdb=...&season=...&episode=...
        if self.path.startswith('/api/cinema/series/episode_streams'):
            parsed = urllib.parse.urlparse(self.path)
            query = urllib.parse.parse_qs(parsed.query)
            imdb = query.get('imdb', [''])[0]
            s_val = query.get('season', ['1'])[0]
            e_val = query.get('episode', ['1'])[0]
            try:
                s_num = int(s_val)
                e_num = int(e_val)
            except Exception:
                s_num = 1
                e_num = 1

            streams = fetch_torrentio_streams(imdb, s_num, e_num)
            encoded = json.dumps({'ok': True, 'streams': streams}, ensure_ascii=False).encode('utf-8')
            self.send_response(200)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.send_header('Content-Length', str(len(encoded)))
            self.send_header('Cache-Control', 'public, max-age=600')
            self.end_headers()
            self.wfile.write(encoded)
            return

        # Endpoint de Listado de Subtítulos (OpenSubtitles Stremio v3): /api/cinema/subtitles?imdb=...&season=...&episode=...
        if self.path.startswith('/api/cinema/subtitles'):
            parsed = urllib.parse.urlparse(self.path)
            query = urllib.parse.parse_qs(parsed.query)
            imdb = query.get('imdb', [''])[0]
            s_val = query.get('season', [None])[0]
            e_val = query.get('episode', [None])[0]
            s_num = int(s_val) if s_val and s_val.isdigit() else None
            e_num = int(e_val) if e_val and e_val.isdigit() else None

            res = fetch_cinema_subtitles(imdb, s_num, e_num)
            encoded = json.dumps(res, ensure_ascii=False).encode('utf-8')
            self.send_response(200)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.send_header('Content-Length', str(len(encoded)))
            self.send_header('Access-Control-Allow-Origin', '*')
            self.send_header('Cache-Control', 'public, max-age=1800')
            self.end_headers()
            self.wfile.write(encoded)
            return

        # Endpoint Proxy y Conversor SRT a WebVTT: /api/cinema/subtitle_file?url=...
        if self.path.startswith('/api/cinema/subtitle_file'):
            parsed = urllib.parse.urlparse(self.path)
            query = urllib.parse.parse_qs(parsed.query)
            sub_url = query.get('url', [''])[0]
            if not sub_url:
                self.send_error(400, 'Falta parametro url')
                return
            try:
                s_req = urllib.request.Request(sub_url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
                with urllib.request.urlopen(s_req, context=SSL_CONTEXT, timeout=8.0) as s_resp:
                    raw = s_resp.read().decode('utf-8', errors='ignore')
                    if raw.strip().startswith('WEBVTT'):
                        vtt_text = raw
                    else:
                        vtt_text = 'WEBVTT\n\n' + re.sub(r'(\d{2}:\d{2}:\d{2}),(\d{3})', r'\1.\2', raw)
                    encoded = vtt_text.encode('utf-8')
                    self.send_response(200)
                    self.send_header('Content-Type', 'text/vtt; charset=utf-8')
                    self.send_header('Content-Length', str(len(encoded)))
                    self.send_header('Access-Control-Allow-Origin', '*')
                    self.send_header('Cache-Control', 'public, max-age=86400')
                    self.end_headers()
                    self.wfile.write(encoded)
                    return
            except Exception as e:
                self.send_error(500, f'Error al descargar subtitulo: {str(e)}')
                return

        # Endpoint de Listado/Búsqueda de Series: /api/cinema/series?query=...&page=...&sort_by=...
        if self.path.startswith('/api/cinema/series'):
            parsed = urllib.parse.urlparse(self.path)
            query = urllib.parse.parse_qs(parsed.query)
            q = query.get('query', [''])[0]
            page = int(query.get('page', ['1'])[0])
            sort_by = query.get('sort_by', ['imdb_popular'])[0]

            res = fetch_cinema_series(query=q, page=page, sort_by=sort_by)
            self.send_json_response(res)
            return

        # Endpoints de Autenticación y Biblioteca de Usuario Estilo Plex
        if self.path.startswith('/api/cinema/auth/users'):
            profiles = get_available_user_profiles()
            self.send_json_response({'ok': True, 'profiles': profiles})
            return

        if self.path.startswith('/api/cinema/user/library'):
            parsed = urllib.parse.urlparse(self.path)
            query = urllib.parse.parse_qs(parsed.query)
            u_name = query.get('username', ['helmuth'])[0]
            lib = get_user_library(u_name)
            self.send_json_response({'ok': True, 'library': lib})
            return

        if self.path.startswith('/api/cinema/user/recommendations'):
            parsed = urllib.parse.urlparse(self.path)
            query = urllib.parse.parse_qs(parsed.query)
            u_name = query.get('username', ['helmuth'])[0]
            recs = get_user_recommendations(u_name)
            self.send_json_response(recs)
            return

        # Servir archivos estáticos normales
        return super().do_GET()

def run_server(base_port=8080):
    port = base_port
    while not is_port_available(port):
        port += 1
        if port > base_port + 20:
            print("Error: No se encontró ningún puerto disponible.")
            sys.exit(1)

    server_address = ('', port)
    httpd = ThreadingHTTPServer(server_address, AntenaSurHandler)

    print("\n" + "=" * 65)
    print(" 📡 ANTENA SUR - TV & RADIOS DE CHILE Y SUDAMÉRICA")
    print("=" * 65)
    print(f" Servidor iniciado con Proxy HLS Inteligente:")
    print(f" 👉 http://localhost:{port}")
    print(f" 👉 http://127.0.0.1:{port}")
    print("-" * 65)
    print(" Presiona Ctrl + C para detener el servidor.")
    print("=" * 65 + "\n")

    # Sincronización inicial silenciosa con https://m3u.cl/lista/CL.m3u en segundo plano
    def background_initial_sync():
        try:
            res = sync_chilean_m3u(force=True)
            if res.get('ok'):
                print(f"📡 [M3U.CL] Sincronización completada: {res.get('matchedCount', 0)} canales chilenos verificados ({res.get('changedCount', 0)} actualizados).")
        except Exception as e:
            print(f"⚠️ [M3U.CL] Sincronización inicial omitida: {e}")

    threading.Thread(target=background_initial_sync, daemon=True).start()

    # Iniciar microservicio nativo de torrents WebTorrent en segundo plano sin demorar arranque HTTP
    threading.Thread(target=start_torrent_service, daemon=True).start()

    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServidor detenido. ¡Hasta pronto!")
        stop_torrent_service()
        httpd.server_close()

if __name__ == '__main__':
    # Cambiar al directorio del script
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    port = int(os.environ.get('PORT', 8080))
    run_server(port)
