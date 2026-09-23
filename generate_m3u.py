"""
Generador de listas M3U para Antena Sur
Genera listas compatibles con TiviMate, OTT Navigator, IPTV Smarters, VLC y Kodi para Android TV.
"""
import json
import os

def generate_m3u():
    base_dir = os.path.dirname(os.path.abspath(__file__))
    json_path = os.path.join(base_dir, 'data', 'stations.json')
    tv_m3u_path = os.path.join(base_dir, 'data', 'antena-sur.m3u')
    radios_m3u_path = os.path.join(base_dir, 'data', 'antena-sur-radios.m3u')

    with open(json_path, 'r', encoding='utf-8') as f:
        data = json.load(f)

    stations = data.get('stations', [])

    # 1. Canales de TV
    tv_lines = ['#EXTM3U name="Antena Sur - Canales de Chile"']
    for s in stations:
        if s.get('type') != 'tv':
            continue
        name = s.get('name', '')
        stream_url = s.get('streamUrl', '')
        if not stream_url:
            continue

        ch_num = s.get('channelNumber', '')
        genre = s.get('genre', 'General')
        logo = s.get('logo', '')
        station_id = s.get('id', '')

        # Metadatos IPTV para Android TV (TiviMate / OTT Navigator)
        tvg_info = f'tvg-id="{station_id}" tvg-name="{name}" tvg-logo="{logo}" tvg-chno="{ch_num}" group-title="{genre}"'
        tv_lines.append(f'#EXTINF:-1 {tvg_info},{name}')

        # Si el stream requiere referer de Canal 13 o similar
        if 'dpsgo.com' in stream_url or '13.cl' in stream_url:
            tv_lines.append('#EXTVLCOPT:http-referrer=https://www.13.cl/')
            tv_lines.append('#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36')
        elif 'chilevision.cl' in stream_url or 'rudo.video' in stream_url:
            tv_lines.append('#EXTVLCOPT:http-referrer=https://www.chilevision.cl/')
        elif 'uchile.cl' in stream_url:
            tv_lines.append('#EXTVLCOPT:http-referrer=https://tv.uchile.cl/')

        tv_lines.append(stream_url)

    with open(tv_m3u_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(tv_lines) + '\n')

    # 2. Estaciones de Radio
    rad_lines = ['#EXTM3U name="Antena Sur - Radios de Chile"']
    for s in stations:
        if s.get('type') != 'radio':
            continue
        name = s.get('name', '')
        stream_url = s.get('streamUrl', '')
        if not stream_url:
            continue

        genre = s.get('genre', 'Radio')
        logo = s.get('logo', '')
        station_id = s.get('id', '')

        rad_lines.append(f'#EXTINF:-1 tvg-id="{station_id}" tvg-name="{name}" tvg-logo="{logo}" group-title="{genre}",{name}')
        rad_lines.append(stream_url)

    with open(radios_m3u_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(rad_lines) + '\n')

    print(f"Listas M3U generadas exitosamente:")
    print(f" - {tv_m3u_path} ({len(tv_lines)//2} canales)")
    print(f" - {radios_m3u_path} ({len(rad_lines)//2} radios)")

if __name__ == '__main__':
    generate_m3u()
