/**
 * ANTENA SUR - NATIVE TORRENT STREAM ENGINE (STREMIO / TORRENTIO COMPATIBLE)
 * Microservicio Node.js para streaming P2P directo a elemento <video> HTML5.
 * Compatible con HTTP Range Requests (206), pipeline seguro contra PREMATURE_CLOSE,
 * priorización de piezas (header/moov atom) y protección total contra caídas.
 */

import http from 'http';
import { pipeline } from 'stream';
import { spawn } from 'child_process';
import WebTorrent from 'webtorrent';
import ffmpegPath from 'ffmpeg-static';

const INCOMPATIBLE_AUDIO_CODECS = ['ac3', 'eac3', 'dts', 'truehd', 'mlp', 'dca', 'wmapro', 'mp2'];

const LANG_MAP_ES = {
  'spa': { name: 'Español', flag: '🇪🇸', isSpanish: true },
  'es': { name: 'Español', flag: '🇪🇸', isSpanish: true },
  'lat': { name: 'Español Latino', flag: '🇲🇽', isSpanish: true, isLatino: true },
  'es-419': { name: 'Español Latino', flag: '🇲🇽', isSpanish: true, isLatino: true },
  'es-la': { name: 'Español Latino', flag: '🇲🇽', isSpanish: true, isLatino: true },
  'es-mx': { name: 'Español Latino', flag: '🇲🇽', isSpanish: true, isLatino: true },
  'cas': { name: 'Castellano (España)', flag: '🇪🇸', isSpanish: true, isCastellano: true },
  'es-es': { name: 'Castellano (España)', flag: '🇪🇸', isSpanish: true, isCastellano: true },
  'eng': { name: 'Inglés', flag: '🇺🇸', isEnglish: true },
  'en': { name: 'Inglés', flag: '🇺🇸', isEnglish: true },
  'rus': { name: 'Ruso', flag: '🇷🇺' },
  'ru': { name: 'Ruso', flag: '🇷🇺' },
  'fre': { name: 'Francés', flag: '🇫🇷' },
  'fra': { name: 'Francés', flag: '🇫🇷' },
  'fr': { name: 'Francés', flag: '🇫🇷' },
  'ita': { name: 'Italiano', flag: '🇮🇹' },
  'it': { name: 'Italiano', flag: '🇮🇹' },
  'ger': { name: 'Alemán', flag: '🇩🇪' },
  'deu': { name: 'Alemán', flag: '🇩🇪' },
  'de': { name: 'Alemán', flag: '🇩🇪' },
  'por': { name: 'Portugués', flag: '🇧🇷' },
  'pt': { name: 'Portugués', flag: '🇧🇷' },
  'jpn': { name: 'Japonés', flag: '🇯🇵' },
  'ja': { name: 'Japonés', flag: '🇯🇵' },
  'kor': { name: 'Coreano', flag: '🇰🇷' },
  'ko': { name: 'Coreano', flag: '🇰🇷' },
  'chi': { name: 'Chino', flag: '🇨🇳' },
  'zho': { name: 'Chino', flag: '🇨🇳' },
  'zh': { name: 'Chino', flag: '🇨🇳' },
  'hin': { name: 'Hindi', flag: '🇮🇳' },
  'hi': { name: 'Hindi', flag: '🇮🇳' },
  'pol': { name: 'Polaco', flag: '🇵🇱' },
  'pl': { name: 'Polaco', flag: '🇵🇱' },
  'ukr': { name: 'Ucraniano', flag: '🇺🇦' },
  'uk': { name: 'Ucraniano', flag: '🇺🇦' },
  'tur': { name: 'Turco', flag: '🇹🇷' },
  'tr': { name: 'Turco', flag: '🇹🇷' },
  'swe': { name: 'Sueco', flag: '🇸🇪' },
  'nor': { name: 'Noruego', flag: '🇳🇴' },
  'dan': { name: 'Danés', flag: '🇩🇰' },
  'fin': { name: 'Finlandés', flag: '🇫🇮' },
  'dut': { name: 'Holandés', flag: '🇳🇱' },
  'nld': { name: 'Holandés', flag: '🇳🇱' },
  'cze': { name: 'Checo', flag: '🇨🇿' },
  'ces': { name: 'Checo', flag: '🇨🇿' },
  'hun': { name: 'Húngaro', flag: '🇭🇺' },
  'gre': { name: 'Griego', flag: '🇬🇷' },
  'ell': { name: 'Griego', flag: '🇬🇷' },
  'ara': { name: 'Árabe', flag: '🇸🇦' },
  'ar': { name: 'Árabe', flag: '🇸🇦' },
  'heb': { name: 'Hebreo', flag: '🇮🇱' },
  'tha': { name: 'Tailandés', flag: '🇹🇭' },
  'vie': { name: 'Vietnamita', flag: '🇻🇳' },
  'ind': { name: 'Indonesio', flag: '🇮🇩' }
};

function formatAudioTrackSpanish(st, idx) {
  const rawTitle = (st.title || '').trim();
  const rawLang = (st.lang || '').trim().toLowerCase();
  const combined = `${rawTitle} ${rawLang} ${st.rawExtra || ''}`.toLowerCase();

  let isLatino = combined.includes('latino') || combined.includes('latin') || rawLang === 'lat' || rawLang === 'mx' || (rawLang === 'spa' && combined.includes('lat'));
  let isCastellano = combined.includes('castellano') || combined.includes('esp') || combined.includes('es-es') || rawLang === 'cas';
  let isSpanish = isLatino || isCastellano || rawLang.startsWith('es') || rawLang === 'spa' || combined.includes('español') || combined.includes('spanish');
  let isEnglish = combined.includes('eng') || combined.includes('en') || rawLang === 'eng' || rawLang === 'en' || combined.includes('english');

  let langEntry = LANG_MAP_ES[rawLang];

  if (!langEntry || rawLang === 'und') {
    if (/[а-яА-ЯёЁ]/.test(rawTitle)) {
      langEntry = { name: 'Ruso', flag: '🇷🇺' };
    } else if (/[ぁ-んァ-ヶ一-龯]/.test(rawTitle)) {
      langEntry = { name: 'Japonés', flag: '🇯🇵' };
    } else if (/[가-힣]/.test(rawTitle)) {
      langEntry = { name: 'Coreano', flag: '🇰🇷' };
    } else if (isLatino) {
      langEntry = { name: 'Español Latino', flag: '🇲🇽', isSpanish: true, isLatino: true };
    } else if (isCastellano) {
      langEntry = { name: 'Castellano (España)', flag: '🇪🇸', isSpanish: true, isCastellano: true };
    } else if (isSpanish) {
      langEntry = { name: 'Español', flag: '🌎', isSpanish: true };
    } else if (isEnglish) {
      langEntry = { name: 'Inglés', flag: '🇺🇸', isEnglish: true };
    }
  }

  const langName = langEntry ? langEntry.name : (rawLang && rawLang !== 'und' ? rawLang.toUpperCase() : `Pista #${idx + 1}`);
  const flag = isLatino ? '🇲🇽' : (isCastellano ? '🇪🇸' : (langEntry ? langEntry.flag : '🔊'));

  let descriptor = '';
  const lowerTitle = rawTitle.toLowerCase();

  if (/для\s+слабовидящих|descriptive|description|\bad\b|sdh/i.test(lowerTitle)) {
    descriptor = 'Audiodescripción';
  } else if (/дубляж|дублирование|dubbed|\bdub\b|doublage|dublado/i.test(lowerTitle)) {
    descriptor = 'Doblaje';
  } else if (/многоголосый|мво|multi-voice/i.test(lowerTitle)) {
    descriptor = 'Doblaje Multi-voz';
  } else if (/двухголосый|дво/i.test(lowerTitle)) {
    descriptor = 'Doblaje 2 voces';
  } else if (/закадровый|voice-over|voiceover/i.test(lowerTitle)) {
    descriptor = 'Voz en off';
  } else if (/commentary|comentarios/i.test(lowerTitle)) {
    descriptor = 'Comentarios';
  } else if (/original/i.test(lowerTitle) || (isEnglish && idx === 0)) {
    descriptor = 'Original';
  }

  let label = '';
  if (descriptor) {
    label = `${langName} (${descriptor})`;
  } else if (rawTitle && !/[а-яА-ЯёЁ]/.test(rawTitle) && rawTitle.length < 24) {
    label = `${langName}: ${rawTitle}`;
  } else {
    label = `${langName}`;
  }

  return {
    label,
    icon: flag,
    langName,
    isSpanish,
    isLatino,
    isCastellano,
    isEnglish
  };
}

function probeMediaFile(file) {
  if (file._mediaInfo && (file._mediaInfo.audioStreams?.length > 0)) {
    return Promise.resolve(file._mediaInfo);
  }

  return new Promise((resolve) => {
    try {
      // Leer hasta 16 MB para asegurar la lectura completa de cabeceras en contenedores MKV/MP4
      const readStream = file.createReadStream({ start: 0, end: Math.min(file.length - 1, 16 * 1024 * 1024) });
      const ff = spawn(ffmpegPath, ['-hide_banner', '-i', 'pipe:0']);
      readStream.on('error', () => {});
      ff.stdin.on('error', () => {});
      readStream.pipe(ff.stdin);

      let stderr = '';
      ff.stderr.on('data', (d) => { stderr += d.toString(); });

      let finished = false;
      const done = () => {
        if (finished) return;
        finished = true;
        try { readStream.destroy(); } catch (e) {}
        try { ff.kill('SIGKILL'); } catch (e) {}

        const audioStreams = [];
        const lines = stderr.split('\n');
        let currentStream = null;
        let audioCounter = 0;

        for (let i = 0; i < lines.length; i++) {
          const line = lines[i];
          // Detectar líneas de Stream de Audio: Stream #0:1(spa): Audio: ac3, 48000 Hz, 5.1(side)...
          const aMatch = line.match(/Stream #0:(\d+)(?:\(([^)]+)\))?: Audio: ([^,\s]+)(.*)/);
          if (aMatch) {
            if (currentStream) audioStreams.push(currentStream);
            const streamIdx = parseInt(aMatch[1], 10);
            const rawLang = (aMatch[2] || '').trim().toLowerCase();
            const codec = aMatch[3].trim().toLowerCase();
            const extra = aMatch[4] || '';
            const audioIdx = audioCounter++;

            currentStream = {
              trackIdx: audioIdx, // Mapeo exacto 0:a:N
              streamIdx,
              audioIndex: audioIdx,
              lang: rawLang || 'und',
              codec,
              channels: extra.includes('5.1') ? '5.1' : (extra.includes('7.1') ? '7.1' : 'Estéreo'),
              title: '',
              rawExtra: extra
            };
          } else if (currentStream && line.trim().startsWith('title')) {
            const parts = line.split(':');
            if (parts.length > 1) {
              currentStream.title = parts.slice(1).join(':').trim();
            }
          }
        }
        if (currentStream) audioStreams.push(currentStream);

        // Procesar etiquetas amigables 100% en español con banderas nacionales
        const formattedAudio = audioStreams.map((st, idx) => {
          const parsed = formatAudioTrackSpanish(st, idx);
          const isSupported = !INCOMPATIBLE_AUDIO_CODECS.some(c => st.codec.includes(c));

          return {
            trackIdx: st.audioIndex,
            streamIndex: st.audioIndex,
            streamNumber: st.streamIdx,
            lang: st.lang,
            codec: st.codec,
            channels: st.channels,
            label: parsed.label,
            icon: parsed.icon,
            isSupported,
            isSpanish: parsed.isSpanish,
            isLatino: parsed.isLatino,
            isCastellano: parsed.isCastellano,
            isEnglish: parsed.isEnglish
          };
        });

        const vMatch = stderr.match(/Stream #0:\d+.*?: Video: ([^,\s]+)/);
        const videoCodec = vMatch ? vMatch[1].toLowerCase() : 'unknown';
        const needsAudioTranscode = formattedAudio.length > 0 && formattedAudio.some(a => !a.isSupported);

        const info = {
          videoCodec,
          audioStreams: formattedAudio,
          needsAudioTranscode
        };

        if (formattedAudio.length > 0) {
          file._mediaInfo = info;
        }
        resolve(info);
      };

      ff.on('close', done);
      ff.on('error', done);
      setTimeout(done, 4500);
    } catch (e) {
      resolve({ videoCodec: 'unknown', audioStreams: [], needsAudioTranscode: false });
    }
  });
}

// Prevenir caídas por desconexión prematura de clientes (navegadores al pedir rangos)
process.on('uncaughtException', (err) => {
  if (
    err.code === 'PREMATURE_CLOSE' ||
    err.code === 'ERR_STREAM_PREMATURE_CLOSE' ||
    err.code === 'ECONNRESET' ||
    err.code === 'EPIPE' ||
    err.message?.includes('Writable stream closed')
  ) {
    // Desconexión normal del navegador al cambiar de rango o pausar el buffer
    return;
  }
  console.error('[Torrent Stream Engine] Excepción capturada:', err.message);
});

process.on('unhandledRejection', (reason) => {
  console.warn('[Torrent Stream Engine] Rejection capturado:', reason);
});

const PUBLIC_TRACKERS = [
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
  'udp://opentracker.i2p.rocks:6969/announce',
  'udp://tracker.altrosky.nl:6969/announce',
  'udp://open.free-tracker.ga:6969/announce',
  'udp://tracker.filemail.com:6969/announce',
  'udp://tracker.srv00.com:6969/announce',
  'http://tracker.openbittorrent.com:80/announce',
  'http://tracker.opentrackr.org:1337/announce',
  'wss://tracker.btorrent.xyz',
  'wss://tracker.openwebtorrent.com',
  'wss://tracker.fastcast.nz'
];

const client = new WebTorrent({
  maxConns: 350,
  dht: {
    bootstrap: [
      'router.bittorrent.com:6881',
      'dht.transmissionbt.com:6881',
      'router.utorrent.com:6881',
      'dht.aelitis.com:6881'
    ]
  },
  tracker: true,
  webSeeds: true,
  utPex: true,
  lsd: true
});

const PORT = 8088;
const VIDEO_EXTENSIONS = ['.mp4', '.mkv', '.avi', '.webm', '.m4v', '.mov', '.ts'];

function getInfoHash(torrentId) {
  if (!torrentId) return null;
  const str = String(torrentId).trim();
  if (/^[a-fA-F0-9]{40}$/i.test(str)) {
    return str.toLowerCase();
  }
  const match = str.match(/urn:btih:([a-fA-F0-9]{40})/i);
  if (match) {
    return match[1].toLowerCase();
  }
  const matchHex = str.match(/([a-fA-F0-9]{40})/i);
  if (matchHex) {
    return matchHex[1].toLowerCase();
  }
  return null;
}

function isVideoFile(fileName) {
  const lower = (fileName || '').toLowerCase();
  return VIDEO_EXTENSIONS.some(ext => lower.endsWith(ext));
}

function findMainVideoFile(torrent) {
  if (!torrent || !torrent.files || torrent.files.length === 0) return null;
  let mainFile = null;
  let maxLen = 0;

  for (const f of torrent.files) {
    const fLower = f.name.toLowerCase();
    // Evitar samples o trailers pequeños
    if (fLower.includes('sample') && torrent.files.length > 1 && f.length < 50 * 1024 * 1024) {
      continue;
    }
    if (isVideoFile(f.name) && f.length > maxLen) {
      maxLen = f.length;
      mainFile = f;
    }
  }

  if (!mainFile) {
    for (const f of torrent.files) {
      if (f.length > maxLen) {
        maxLen = f.length;
        mainFile = f;
      }
    }
  }

  return mainFile;
}

const server = http.createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Expose-Headers', 'Content-Length, Content-Range, Accept-Ranges');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const reqUrl = new URL(req.url, 'http://127.0.0.1:8088');
  const pathname = reqUrl.pathname;
  const query = Object.fromEntries(reqUrl.searchParams.entries());

  // 1. Estado y estadísticas del torrent en tiempo real
  if (pathname === '/api/torrent/status') {
    const torrentParam = query.torrent;
    if (!torrentParam) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Falta parámetro torrent' }));
      return;
    }

    const hash = getInfoHash(torrentParam);
    const t = await (hash ? client.get(hash) : client.get(torrentParam));

    if (!t) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({
        active: false,
        ready: false,
        progress: 0,
        peers: 0,
        downloadSpeed: 0,
        downloadedMB: '0.0',
        totalMB: '0.0'
      }));
      return;
    }

    const activePeers = t.numPeers || (t.wires ? t.wires.length : 0);
    const swarmPeers = t._peers ? Object.keys(t._peers).length : 0;
    const totalPeers = Math.max(activePeers, swarmPeers);
    const downloadedMB = (t.downloaded / (1024 * 1024)).toFixed(1);
    const totalMB = ((t.length || 0) / (1024 * 1024)).toFixed(1);
    const elapsedSec = t._antenaAddedTime ? Math.round((Date.now() - t._antenaAddedTime) / 1000) : 0;

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      active: true,
      ready: !!t.ready,
      name: t.name || 'Conectando con enjambre P2P...',
      progress: Math.min(100, Math.round((t.progress || 0) * 100)),
      downloadSpeed: Math.round((t.downloadSpeed || 0) / 1024), // KB/s
      uploadSpeed: Math.round((t.uploadSpeed || 0) / 1024),
      numPeers: activePeers,
      totalPeers: totalPeers,
      downloaded: t.downloaded || 0,
      length: t.length || 0,
      downloadedMB,
      totalMB,
      elapsedSec
    }));
    return;
  }

  // 2. Detener un torrent activo o todos los torrents
  if (pathname === '/api/torrent/stop') {
    const torrentParam = query.torrent;
    if (torrentParam) {
      const hash = getInfoHash(torrentParam);
      const t = await (hash ? client.get(hash) : client.get(torrentParam));
      if (t) {
        try { t.destroy(); } catch (e) {}
      }
    } else {
      for (const t of client.torrents) {
        try { t.destroy(); } catch (e) {}
      }
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ ok: true }));
    return;
  }

  // 3. Inspección y detección de pistas de audio y codecs: /api/torrent/media_info
  if (pathname === '/api/torrent/media_info') {
    const torrentParam = query.torrent;
    if (!torrentParam) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Falta parámetro torrent' }));
      return;
    }

    const targetHash = getInfoHash(torrentParam);
    const requestedFileIdx = query.fileIdx !== undefined ? parseInt(query.fileIdx, 10) : null;
    const t = await (targetHash ? client.get(targetHash) : client.get(torrentParam));

    if (!t || !t.ready) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ ok: false, ready: false, audioStreams: [] }));
      return;
    }

    let file = null;
    if (requestedFileIdx !== null && t.files && t.files[requestedFileIdx]) {
      file = t.files[requestedFileIdx];
    }
    if (!file) file = findMainVideoFile(t);

    if (!file) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ ok: false, error: 'No se encontró archivo de video' }));
      return;
    }

    const info = await probeMediaFile(file);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ ok: true, ready: true, ...info }));
    return;
  }

  // 4. Streaming continuo de video con soporte de Range (206 Partial Content) y Transcode Universal
  if (pathname === '/api/torrent/stream') {
    let torrentParam = query.torrent;
    if (!torrentParam) {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('Missing torrent parameter');
      return;
    }

    const targetHash = getInfoHash(torrentParam);
    const requestedFileIdx = query.fileIdx !== undefined ? parseInt(query.fileIdx, 10) : null;

    // Detener otros torrents en segundo plano para concentrar el ancho de banda en la reproducción actual
    if (targetHash) {
      for (const existing of client.torrents) {
        if (existing.infoHash && existing.infoHash.toLowerCase() !== targetHash) {
          try {
            console.log(`[Torrent Stream Engine] Liberando torrent previo: ${existing.infoHash}`);
            existing.destroy();
          } catch (e) {}
        }
      }
    }

    let torrent = await (targetHash ? client.get(targetHash) : client.get(torrentParam));

    if (!torrent) {
      let torrentInput = torrentParam;

      // 1. Si es una URL http/https directa a un archivo .torrent, descargarlo como buffer en memoria
      if (typeof torrentParam === 'string' && (torrentParam.startsWith('http://') || torrentParam.startsWith('https://'))) {
        try {
          console.log(`[Torrent Stream Engine] Descargando archivo .torrent desde: ${torrentParam}`);
          const dlResp = await fetch(torrentParam, {
            headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
          });
          if (dlResp.ok) {
            const arrBuf = await dlResp.arrayBuffer();
            const buf = Buffer.from(arrBuf);
            if (buf.length > 50 && buf[0] === 0x64) {
              torrentInput = buf;
              console.log(`[Torrent Stream Engine] Archivo .torrent descargado con éxito (${buf.length} bytes). Metadatos inmediatos.`);
            }
          }
        } catch (e) {
          console.warn(`[Torrent Stream Engine] Error al descargar .torrent directo: ${e.message}`);
        }
      } else if (targetHash) {
        // 2. Si es infoHash o magnet, intentar obtener el .torrent pre-construido de YTS para evitar espera de DHT
        try {
          const ytsUrl = `https://yts.gg/torrent/download/${targetHash.toUpperCase()}`;
          const dlResp = await fetch(ytsUrl, {
            headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
          });
          if (dlResp.ok) {
            const arrBuf = await dlResp.arrayBuffer();
            const buf = Buffer.from(arrBuf);
            if (buf.length > 50 && buf[0] === 0x64) {
              torrentInput = buf;
              console.log(`[Torrent Stream Engine] Metadatos .torrent cargados instantáneamente de YTS (${buf.length} bytes).`);
            }
          }
        } catch (e) {}
      }

      // Si sigue siendo infohash simple de 40 caracteres, armar magnet completo con trackers públicos
      if (typeof torrentInput === 'string' && /^[a-fA-F0-9]{40}$/.test(torrentInput)) {
        torrentInput = `magnet:?xt=urn:btih:${torrentInput}&${PUBLIC_TRACKERS.map(tr => `tr=${encodeURIComponent(tr)}`).join('&')}`;
      }

      try {
        torrent = client.add(torrentInput, {
          announce: PUBLIC_TRACKERS,
          maxWebConns: 30
        });
        torrent._antenaAddedTime = Date.now();
        console.log(`[Torrent Stream Engine] Nuevo torrent añadido al cliente: ${targetHash || (Buffer.isBuffer(torrentInput) ? 'Buffer' : torrentInput.slice(0, 50))}...`);
      } catch (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error al agregar torrent: ' + err.message);
        return;
      }
    } else if (!torrent._antenaAddedTime) {
      torrent._antenaAddedTime = Date.now();
    }

    const serveFile = () => {
      let file = null;
      if (requestedFileIdx !== null && torrent.files && torrent.files[requestedFileIdx]) {
        const candidate = torrent.files[requestedFileIdx];
        if (isVideoFile(candidate.name)) {
          file = candidate;
        }
      }
      if (!file) {
        file = findMainVideoFile(torrent);
      }

      if (!file) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('No se encontró archivo de video en el torrent');
        return;
      }

      // Deseleccionar otros archivos y priorizar el archivo de video
      try {
        torrent.deselect(0, torrent.pieces.length - 1, false);
      } catch (e) {}
      file.select();

      // Priorizar el inicio del archivo con alto pre-buffer inicial para evitar pausas o micro-cortes
      if (file._startPiece !== undefined && file._endPiece !== undefined) {
        try {
          // Descargar de forma crítica e inmediata los primeros 48 pieces (cabeceras + primer buffer masivo de al menos 24MB-48MB)
          torrent.critical(file._startPiece, Math.min(file._startPiece + 48, file._endPiece));
          // Pre-buffer de las siguientes 160 piezas con prioridad alta para reproducción ultra fluida
          torrent.select(file._startPiece, Math.min(file._startPiece + 160, file._endPiece), 1);
          // Índice moov al final del archivo (por si el contenedor no tiene faststart)
          torrent.critical(Math.max(file._startPiece, file._endPiece - 6), file._endPiece);
          torrent.select(Math.max(file._startPiece, file._endPiece - 16), file._endPiece, 1);
        } catch (e) {}
      }

      const total = file.length;
      const range = req.headers.range;

      let mimeType = 'video/mp4';
      const fName = file.name.toLowerCase();
      if (fName.endsWith('.webm') || fName.endsWith('.mkv')) {
        mimeType = 'video/webm';
      } else if (fName.endsWith('.mp4') || fName.endsWith('.m4v')) {
        mimeType = 'video/mp4';
      } else {
        mimeType = 'video/mp4';
      }

      if (req.method === 'HEAD') {
        res.writeHead(200, {
          'Content-Length': total,
          'Content-Type': mimeType,
          'Accept-Ranges': 'bytes',
          'Access-Control-Allow-Origin': '*'
        });
        res.end();
        return;
      }

      const audioMode = query.audioMode || 'auto';
      const requestedAudioTrack = (query.audioTrack !== undefined && query.audioTrack !== '') ? parseInt(query.audioTrack, 10) : null;
      const startTime = query.startTime ? parseFloat(query.startTime) : 0;

      // Si se solicita transcodificación forzada o pista específica de audio
      if (audioMode === 'transcode' || requestedAudioTrack !== null) {
        console.log(`[Torrent Stream Engine] 🎧 Transcodificando audio con FFmpeg a AAC estéreo compatible (Pista: ${requestedAudioTrack ?? 'auto'}, Inicio: ${startTime}s)...`);
        const ffmpegArgs = ['-hide_banner', '-loglevel', 'error'];
        ffmpegArgs.push('-i', 'pipe:0');
        if (startTime > 0) {
          ffmpegArgs.push('-ss', String(startTime));
        }
        ffmpegArgs.push('-map', '0:v:0?');

        if (requestedAudioTrack !== null) {
          ffmpegArgs.push('-map', `0:a:${requestedAudioTrack}?`);
        } else {
          ffmpegArgs.push('-map', '0:a:0?');
        }

        ffmpegArgs.push(
          '-c:v', 'copy',
          '-c:a', 'aac',
          '-b:a', '192k',
          '-ac', '2',
          '-movflags', 'frag_keyframe+empty_moov+default_base_moof',
          '-f', 'mp4',
          'pipe:1'
        );

        res.writeHead(200, {
          'Content-Type': 'video/mp4',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*',
          'Transfer-Encoding': 'chunked'
        });

        const readStream = file.createReadStream();
        const ffProcess = spawn(ffmpegPath, ffmpegArgs);

        readStream.on('error', () => {});
        ffProcess.stdin.on('error', () => {});
        ffProcess.stdout.on('error', () => {});

        readStream.pipe(ffProcess.stdin);
        ffProcess.stdout.pipe(res);

        const cleanup = () => {
          try { readStream.destroy(); } catch (e) {}
          try { ffProcess.kill('SIGKILL'); } catch (e) {}
        };

        res.once('close', cleanup);
        ffProcess.once('error', cleanup);
        return;
      }

      if (!range) {
        res.writeHead(200, {
          'Content-Length': total,
          'Content-Type': mimeType,
          'Accept-Ranges': 'bytes',
          'Access-Control-Allow-Origin': '*'
        });
        const readStream = file.createReadStream();
        pipeline(readStream, res, (err) => {
          // Desconexión normal del cliente
        });
      } else {
        const parts = range.replace(/bytes=/, "").split("-");
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : total - 1;
        const chunksize = (end - start) + 1;

        // Priorizar piezas del rango solicitado con amplia ventana de anticipación
        if (torrent.pieceLength && file.offset !== undefined) {
          const startPiece = Math.floor((start + file.offset) / torrent.pieceLength);
          const endPiece = Math.min(torrent.pieces.length - 1, startPiece + 32);
          try {
            torrent.critical(startPiece, Math.min(torrent.pieces.length - 1, startPiece + 12));
            torrent.select(startPiece, endPiece, 1);
          } catch (e) {}
        }

        res.writeHead(206, {
          'Content-Range': `bytes ${start}-${end}/${total}`,
          'Accept-Ranges': 'bytes',
          'Content-Length': chunksize,
          'Content-Type': mimeType,
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Range, Accept-Ranges, Content-Range, Content-Type',
          'Access-Control-Expose-Headers': 'Content-Length, Content-Range, Accept-Ranges'
        });
        const readStream = file.createReadStream({ start, end });
        pipeline(readStream, res, (err) => {
          // Desconexión normal del cliente
        });
      }
    };

    if (torrent.ready) {
      serveFile();
    } else {
      let served = false;
      const timeoutTimer = setTimeout(() => {
        if (!served) {
          served = true;
          torrent.removeListener('ready', onReady);
          torrent.removeListener('error', onError);
          if (!res.headersSent) {
            res.writeHead(504, { 'Content-Type': 'text/plain' });
            res.end('Tiempo de espera agotado buscando semillas activas en el enjambre');
          }
        }
      }, 14000);

      const onReady = () => {
        if (served) return;
        served = true;
        clearTimeout(timeoutTimer);
        serveFile();
      };
      const onError = (err) => {
        if (served) return;
        served = true;
        clearTimeout(timeoutTimer);
        if (!res.headersSent) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Error de torrent: ' + (err ? err.message : 'desconocido'));
        }
      };
      torrent.once('ready', onReady);
      torrent.once('error', onError);
      res.once('close', () => {
        clearTimeout(timeoutTimer);
        torrent.removeListener('ready', onReady);
        torrent.removeListener('error', onError);
      });
    }
    return;
  }

  res.writeHead(404);
  res.end('Not Found');
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`📡 [Torrent Stream Engine] Motor P2P activo en http://127.0.0.1:${PORT}`);
});
