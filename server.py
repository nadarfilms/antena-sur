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
from http.server import HTTPServer, SimpleHTTPRequestHandler

# Desactivar verificación estricta de certificados SSL en Python para evitar bloqueos en macOS
SSL_CONTEXT = ssl._create_unverified_context()

NOW_PLAYING_CACHE = {}  # key -> { 'data': dict, 'timestamp': float }
CACHE_TTL = 6.0  # seconds

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


# MIME types adicionales necesarios para streams HLS y audio
MIME_TYPES = {
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

class AntenaSurHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        # Habilitar CORS universalmente para todos los recursos
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', '*')
        self.send_header('Access-Control-Expose-Headers', 'Content-Length, Content-Range')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def guess_type(self, path):
        _, ext = os.path.splitext(path)
        if ext.lower() in MIME_TYPES:
            return MIME_TYPES[ext.lower()]
        return super().guess_type(path)

    def do_GET(self):
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
                referer = ref_param
                if not referer:
                    low_url = target_url.lower()
                    if 'uchile' in low_url:
                        referer = 'https://tv.uchile.cl/'
                    elif '13' in low_url or 'dpsgo.com' in low_url:
                        referer = 'https://www.13.cl/'
                    elif 'chv' in low_url or 'rudo.video' in low_url:
                        referer = 'https://www.chilevision.cl/'
                    elif 'mega' in low_url:
                        referer = 'https://www.mega.cl/'
                    elif 'tvmas' in low_url:
                        referer = 'https://tvmas.tv/'
                    elif 'mdstrm.com' in low_url or '24horas' in low_url:
                        referer = 'https://www.24horas.cl/'
                    elif 'tntsports' in low_url:
                        referer = 'https://www.tntsports.cl/'
                    elif 'rtvc.gov.co' in low_url:
                        referer = 'https://www.rtvc.gov.co/'
                    else:
                        parsed_target = urllib.parse.urlparse(target_url)
                        referer = f"{parsed_target.scheme}://{parsed_target.netloc}/"

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

        # Servir archivos estáticos normales
        return super().do_GET()

def is_port_available(port):
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        return s.connect_ex(('127.0.0.1', port)) != 0

def run_server(base_port=8080):
    port = base_port
    while not is_port_available(port):
        port += 1
        if port > base_port + 20:
            print("Error: No se encontró ningún puerto disponible.")
            sys.exit(1)

    server_address = ('', port)
    httpd = HTTPServer(server_address, AntenaSurHandler)

    print("\n" + "=" * 65)
    print(" 📡 ANTENA SUR - TV & RADIOS DE CHILE Y SUDAMÉRICA")
    print("=" * 65)
    print(f" Servidor iniciado con Proxy HLS Inteligente:")
    print(f" 👉 http://localhost:{port}")
    print(f" 👉 http://127.0.0.1:{port}")
    print("-" * 65)
    print(" Presiona Ctrl + C para detener el servidor.")
    print("=" * 65 + "\n")

    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServidor detenido. ¡Hasta pronto!")
        httpd.server_close()

if __name__ == '__main__':
    # Cambiar al directorio del script
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    port = int(os.environ.get('PORT', 8080))
    run_server(port)
