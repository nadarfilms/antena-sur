/**
 * ANTENA SUR - Standalone Application Bundle
 * Compatible con Android TV, Google TV, WebViews, Apple CarPlay y Navegadores Modernos
 * Generado de forma autónoma sin dependencias de carga modular ES6 a nivel de runtime
 */

(function() {
  "use strict";

  /* ========================================================================
     SOURCE MODULE: stations-data.js
     ======================================================================== */

/**
 * ANTENA SUR - Catálogo de Canales y Emisoras
 */
window.STATIONS_DATA = {
  "lastUpdated": "2026-09-22",
  "version": "2.0.0",
  "countries": [
    {
      "code": "CL",
      "name": "Chile",
      "flag": "🇨🇱",
      "capital": "Santiago"
    }
  ],
  "stations": [
    {
      "id": "cl-tv-13c",
      "name": "13 Cultura",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Región Metropolitana",
      "city": "Santiago",
      "genre": "Cultura",
      "isNational": true,
      "logo": "./img/logos/cl-tv-13c.svg",
      "streamUrl": "https://origin.dpsgo.com/ssai/event/GI-9cp_bT8KcerLpZwkuhw/master.m3u8",
      "backupStreamUrl": "https://redirector.dps.live/hls/13cultura/playlist.m3u8?PlaylistM3UCL",
      "embedUrl": "https://www.13.cl/c",
      "website": "https://www.13.cl",
      "description": "Señal cultural y de entretenimiento de Canal 13 con documentales, viajes, gastronomía y patrimonio de Chile.",
      "channelNumber": 1,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://origin.dpsgo.com/ssai/event/GI-9cp_bT8KcerLpZwkuhw/master.m3u8",
          "needsProxy": true
        },
        {
          "name": "Fuente 2 (Respaldo Oficial)",
          "url": "https://redirector.dps.live/hls/13cultura/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": true
        },
        {
          "name": "Fuente 3 (M3U Alternativa)",
          "url": "https://redirector.dps.live/hls/13cocina/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": true
        }
      ]
    },
    {
      "id": "cl-tv-d13",
      "name": "13 Deportes",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Deportes",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1199_D13.png",
      "streamUrl": "https://origin.dpsgo.com/ssai/event/uFiYkh4CQPCPgbs7WPKhXw/master.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://origin.dpsgo.com/ssai/event/uFiYkh4CQPCPgbs7WPKhXw/master.m3u8?PlaylistM3UCL",
          "needsProxy": true
        }
      ],
      "website": "",
      "description": "Canal oficial 13 Deportes de Canal 13 con transmisiones deportivas, resúmenes y eventos en directo.",
      "status": "online",
      "channelNumber": 2
    },
    {
      "id": "cl-tv-13-festival",
      "name": "13 Festival",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1446_13_Festival.png",
      "streamUrl": "https://redirector.dps.live/hls/13festival/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://redirector.dps.live/hls/13festival/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": true
        }
      ],
      "website": "",
      "description": "Canal de televisión 13 Festival disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 3
    },
    {
      "id": "cl-tv-13-go",
      "name": "13 go",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1530_13_go.png",
      "streamUrl": "https://origin.dpsgo.com/ssai/event/LhHrVtyeQkKZ-Ye_xEU75g/master.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://origin.dpsgo.com/ssai/event/LhHrVtyeQkKZ-Ye_xEU75g/master.m3u8?PlaylistM3UCL",
          "needsProxy": true
        }
      ],
      "website": "",
      "description": "Canal de televisión 13 go disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 4
    },
    {
      "id": "cl-tv-13-internacional",
      "name": "13 Internacional",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1685_13_Internacional.png",
      "streamUrl": "https://redirector.dps.live/hls/13intav/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://redirector.dps.live/hls/13intav/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": true
        }
      ],
      "website": "",
      "description": "Canal de televisión 13 Internacional disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 5
    },
    {
      "id": "cl-tv-13-pop",
      "name": "13 Pop",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1033_13_Pop.png",
      "streamUrl": "https://redirector.dps.live/hls/13pop/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://redirector.dps.live/hls/13pop/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": true
        }
      ],
      "website": "",
      "description": "Canal de televisión 13 Pop disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 6
    },
    {
      "id": "cl-tv-13-realities",
      "name": "13 Realities",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1448_13_Realities.png",
      "streamUrl": "https://redirector.dps.live/hls/13realities/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://redirector.dps.live/hls/13realities/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": true
        }
      ],
      "website": "",
      "description": "Canal de televisión 13 Realities disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 7
    },
    {
      "id": "cl-tv-13-teleseries",
      "name": "13 Teleseries",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1032_13_Teleseries.png",
      "streamUrl": "https://redirector.dps.live/hls/13t/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://redirector.dps.live/hls/13t/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": true
        }
      ],
      "website": "",
      "description": "Canal de televisión 13 Teleseries disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 8
    },
    {
      "id": "cl-tv-13-viajes",
      "name": "13 Viajes",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1684_13_Viajes.png",
      "streamUrl": "https://redirector.dps.live/hls/13viajes/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://redirector.dps.live/hls/13viajes/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": true
        }
      ],
      "website": "",
      "description": "Canal de televisión 13 Viajes disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 9
    },
    {
      "id": "cl-tv-24horas",
      "name": "24 Horas (TVN Noticias)",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Región Metropolitana",
      "city": "Santiago",
      "genre": "Noticias",
      "isNational": true,
      "logo": "./img/logos/cl-tv-24horas.svg",
      "streamUrl": "https://mdstrm.com/live-stream-playlist/689ba606ecfe7915e1f8f741.m3u8",
      "backupStreamUrl": "https://mdstrm.com/live-stream-playlist/533adcc949386ce765657d7c.m3u8",
      "website": "https://www.24horas.cl",
      "description": "Canal chileno de noticias las 24 horas del día, perteneciente a Televisión Nacional de Chile.",
      "embedUrl": "https://www.24horas.cl/envivo",
      "channelNumber": 10,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://mdstrm.com/live-stream-playlist/689ba606ecfe7915e1f8f741.m3u8",
          "needsProxy": false
        },
        {
          "name": "Fuente 2 (Respaldo Oficial)",
          "url": "https://mdstrm.com/live-stream-playlist/533adcc949386ce765657d7c.m3u8",
          "needsProxy": false
        },
        {
          "name": "Fuente 3 (M3U Alternativa)",
          "url": "https://mdstrm.com/live-stream-playlist/689ba606ecfe7915e1f8f741.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ]
    },
    {
      "id": "cl-tv-adntv",
      "name": "ADN TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Región Metropolitana",
      "city": "Santiago",
      "genre": "Noticias",
      "isNational": true,
      "logo": "./img/logos/cl-tv-adntv.svg",
      "streamUrl": "https://redirector.rudo.video/hls-video/931b584451fa6dd1313ee66efbfd5802e3f3bcea/adntv/adntv.smil/playlist.m3u8",
      "backupStreamUrl": "https://redirector.rudo.video/hls-video/931b584451fa6dd1313ee66efbfd5802e3f3bcea/adntv/adntv.smil/playlist.m3u8?PlaylistM3UCL",
      "website": "https://www.adnradio.cl",
      "description": "Canal de video de ADN Radio Chile con Los Tenores, noticias y análisis en directo.",
      "embedUrl": "https://www.adnradio.cl",
      "channelNumber": 11,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://redirector.rudo.video/hls-video/931b584451fa6dd1313ee66efbfd5802e3f3bcea/adntv/adntv.smil/playlist.m3u8",
          "needsProxy": false
        },
        {
          "name": "Fuente 2 (M3U Alternativa)",
          "url": "https://redirector.rudo.video/hls-video/931b584451fa6dd1313ee66efbfd5802e3f3bcea/adntv/adntv.smil/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "needsProxy": false
    },
    {
      "id": "cl-tv-biobiotv",
      "name": "Bío Bío TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Región Metropolitana",
      "city": "Santiago",
      "genre": "Noticias",
      "isNational": true,
      "logo": "./img/logos/cl-tv-biobiotv.svg",
      "streamUrl": "https://redirector.rudo.video/hls-video/339f69c6122f6d8f4574732c235f09b7683e31a5/bbtv/bbtv.smil/playlist.m3u8",
      "backupStreamUrl": "https://redirector.rudo.video/hls-video/339f69c6122f6d8f4574732c235f09b7683e31a5/bbtv/bbtv.smil/playlist.m3u8?PlaylistM3UCL",
      "website": "https://www.biobiochile.cl/biobiotv",
      "description": "Canal de televisión de Radio Bío Bío con debate, reportajes y noticias en vivo.",
      "embedUrl": "https://www.biobiochile.cl/biobiotv/",
      "channelNumber": 12,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://redirector.rudo.video/hls-video/339f69c6122f6d8f4574732c235f09b7683e31a5/bbtv/bbtv.smil/playlist.m3u8",
          "needsProxy": false
        },
        {
          "name": "Fuente 2 (M3U Alternativa)",
          "url": "https://redirector.rudo.video/hls-video/339f69c6122f6d8f4574732c235f09b7683e31a5/bbtv/bbtv.smil/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "needsProxy": false
    },
    {
      "id": "cl-tv-bombi-tv",
      "name": "Bombi TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1615_Bombi_TV.png",
      "streamUrl": "https://tv.arkeo.cl:1936/bombitv/bombitv/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://tv.arkeo.cl:1936/bombitv/bombitv/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Bombi TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 13
    },
    {
      "id": "cl-tv-c-y-g-tv",
      "name": "C y G TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1626_C_y_G_TV.png",
      "streamUrl": "https://stream.cygtv.cl/live/cygtv/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://stream.cygtv.cl/live/cygtv/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión C y G TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 14
    },
    {
      "id": "cl-tv-canal13",
      "name": "Canal 13",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Región Metropolitana",
      "city": "Santiago",
      "genre": "General",
      "isNational": true,
      "logo": "./img/logos/cl-tv-canal13.svg",
      "streamUrl": "http://15.204.246.24:8080/Canal13HD/index.m3u8",
      "backupStreamUrl": "https://redirector.dps.live/hls/13cl/playlist.m3u8?PlaylistM3UCL",
      "website": "https://www.13.cl",
      "description": "Señal nacional abierta oficial de Canal 13 en alta definición (1080p).",
      "embedUrl": "https://www.13.cl/en-vivo",
      "needsProxy": true,
      "status": "online",
      "channelNumber": 15,
      "sources": [
        {
          "name": "Fuente 1 (HLS HD Principal 1080p)",
          "url": "http://15.204.246.24:8080/Canal13HD/index.m3u8",
          "needsProxy": true
        },
        {
          "name": "Fuente 2 (Señal HLS Directa DPS)",
          "url": "https://redirector.dps.live/hls/13cl/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        },
        {
          "name": "Fuente 3 (Señal Internacional 13)",
          "url": "https://redirector.dps.live/hls/13intav/playlist.m3u8",
          "needsProxy": false
        },
        {
          "name": "Fuente 4 (Reproductor Rudo Oficial)",
          "url": "https://rudo.video/live/c13",
          "isEmbed": true
        }
      ]
    },
    {
      "id": "cl-tv-canal-5-puerto-montt",
      "name": "Canal 5 Puerto Montt",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/364_Canal_5_Puerto_Montt.png",
      "streamUrl": "https://5ff3d9babae13.streamlock.net:443/aufymdjpjf/aufymdjpjf/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://5ff3d9babae13.streamlock.net:443/aufymdjpjf/aufymdjpjf/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Canal 5 Puerto Montt disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 16
    },
    {
      "id": "cl-tv-chv",
      "name": "CHV (Chilevisión)",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Región Metropolitana",
      "city": "Santiago",
      "genre": "General",
      "isNational": true,
      "logo": "./img/logos/cl-tv-chv.svg",
      "streamUrl": "https://redirector.rudo.video/hls-video/10b92cafdf3646cbc1e727f3dc76863621a327fd/chv/chv.smil/playlist.m3u8",
      "backupStreamUrl": "https://redirector.rudo.video/hls-video/10b92cafdf3646cbc1e727f3dc76863621a327fd/chv/chv.smil/playlist.m3u8?PlaylistM3UCL",
      "website": "https://www.chilevision.cl",
      "description": "Canal de televisión abierta chileno con programación matinal, noticias, deportes y entretenimiento familiar.",
      "embedUrl": "https://www.chilevision.cl/senal-online",
      "channelNumber": 17,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://redirector.rudo.video/hls-video/10b92cafdf3646cbc1e727f3dc76863621a327fd/chv/chv.smil/playlist.m3u8",
          "needsProxy": false
        },
        {
          "name": "Fuente 2 (Respaldo Oficial)",
          "url": "https://redirector.rudo.video/hls-video/10b92cafdf3646cbc1e727f3dc76863621a327fd/chv/chv.smil/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "needsProxy": false
    },
    {
      "id": "cl-tv-chvdeportes",
      "name": "CHV Deportes HD",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Región Metropolitana",
      "city": "Santiago",
      "genre": "Deportes",
      "isNational": true,
      "logo": "./img/logos/cl-tv-chvdeportes.svg",
      "streamUrl": "https://redirector.rudo.video/hls-video/10b92cafdf3646cbc1e727f3dc76863621a327fd/chvdeportes/chvdeportes.smil/playlist.m3u8",
      "backupStreamUrl": "https://teletraktv.janus.cl/playlist/stream.m3u8?t=0&s=&p=&id=lufuufsd&d=w",
      "embedUrl": "https://www.chilevision.cl/deportes",
      "website": "https://www.chilevision.cl",
      "description": "Señal deportiva 24/7 de Chilevisión con fútbol chileno, Conmebol Libertadores, eventos olímpicos y debates.",
      "channelNumber": 18,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://redirector.rudo.video/hls-video/10b92cafdf3646cbc1e727f3dc76863621a327fd/chvdeportes/chvdeportes.smil/playlist.m3u8",
          "needsProxy": false
        },
        {
          "name": "Fuente 2 (Respaldo Oficial)",
          "url": "https://teletraktv.janus.cl/playlist/stream.m3u8?t=0&s=&p=&id=lufuufsd&d=w",
          "needsProxy": false
        },
        {
          "name": "Fuente 3 (M3U Alternativa)",
          "url": "https://redirector.rudo.video/hls-video/10b92cafdf3646cbc1e727f3dc76863621a327fd/chvdeportes/chvdeportes.smil/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ]
    },
    {
      "id": "cl-tv-chvnoticias",
      "name": "CHV Noticias 24/7",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Región Metropolitana",
      "city": "Santiago",
      "genre": "Noticias",
      "isNational": true,
      "logo": "./img/logos/cl-tv-chvnoticias.svg",
      "streamUrl": "https://redirector.rudo.video/hls-video/339f69c6122f6d8f4574732c235f09b7683e31a5/chvn/chvn.smil/playlist.m3u8",
      "backupStreamUrl": "https://redirector.rudo.video/hls-video/339f69c6122f6d8f4574732c235f09b7683e31a5/chvn/chvn.smil/playlist.m3u8?PlaylistM3UCL",
      "website": "https://www.chvnoticias.cl",
      "description": "Canal dedicado a la información continua y reportajes en profundidad de Chilevisión Noticias.",
      "embedUrl": "https://www.chvnoticias.cl/senal-online",
      "channelNumber": 19,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://redirector.rudo.video/hls-video/339f69c6122f6d8f4574732c235f09b7683e31a5/chvn/chvn.smil/playlist.m3u8",
          "needsProxy": false
        },
        {
          "name": "Fuente 2 (M3U Alternativa)",
          "url": "https://redirector.rudo.video/hls-video/339f69c6122f6d8f4574732c235f09b7683e31a5/chvn/chvn.smil/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ]
    },
    {
      "id": "cl-tv-cooperativa-ciencia",
      "name": "Cooperativa Ciencia",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1773_Cooperativa_Ciencia.png",
      "streamUrl": "https://unlimited2-cl-isp.dps.live/cooperativaciencia/cooperativaciencia.smil/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://unlimited2-cl-isp.dps.live/cooperativaciencia/cooperativaciencia.smil/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": true
        }
      ],
      "website": "",
      "description": "Canal de televisión Cooperativa Ciencia disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 20
    },
    {
      "id": "cl-tv-cooperativatv",
      "name": "Cooperativa TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Región Metropolitana",
      "city": "Santiago",
      "genre": "Noticias",
      "isNational": true,
      "logo": "./img/logos/cl-tv-cooperativatv.svg",
      "streamUrl": "https://unlimited1-cl-isp.dps.live/coopetv/coopetv.smil/playlist.m3u8",
      "backupStreamUrl": "https://unlimited1-cl-isp.dps.live/coopetv/coopetv.smil/playlist.m3u8?PlaylistM3UCL",
      "website": "https://www.cooperativa.cl",
      "description": "Transmisión televisada en directo de los estudios y programas de Radio Cooperativa.",
      "embedUrl": "https://www.cooperativa.cl",
      "channelNumber": 21,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://unlimited1-cl-isp.dps.live/coopetv/coopetv.smil/playlist.m3u8",
          "needsProxy": true
        },
        {
          "name": "Fuente 2 (M3U Alternativa)",
          "url": "https://unlimited1-cl-isp.dps.live/coopetv/coopetv.smil/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": true
        }
      ],
      "needsProxy": true
    },
    {
      "id": "cl-tv-energeek",
      "name": "EnerGeek",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Entretenimiento",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/947_EnerGeek.png",
      "streamUrl": "https://cl-2.backend.energeek.cl/bkp/egretroweb/index.m3u8?token=D3m0M3UCLWeb&PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://cl-2.backend.energeek.cl/bkp/egretroweb/index.m3u8?token=D3m0M3UCLWeb&PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión EnerGeek disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 22
    },
    {
      "id": "cl-tv-energeek-fan",
      "name": "EnerGeek FAN",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Entretenimiento",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1112_EnerGeek_FAN.png",
      "streamUrl": "https://cl-2.backend.energeek.cl/bkp/egfanweb/index.m3u8?token=D3m0M3UCLWeb&PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://cl-2.backend.energeek.cl/bkp/egfanweb/index.m3u8?token=D3m0M3UCLWeb&PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión EnerGeek FAN disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 23
    },
    {
      "id": "cl-tv-epa-tv",
      "name": "EPA! TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1649_EPA__TV.png",
      "streamUrl": "https://v4.tustreaming.cl/edusauriotv/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://v4.tustreaming.cl/edusauriotv/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión EPA! TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 24
    },
    {
      "id": "cl-tv-lared",
      "name": "La Red",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Región Metropolitana",
      "city": "Santiago",
      "genre": "General",
      "isNational": true,
      "logo": "./img/logos/cl-tv-lared.svg",
      "streamUrl": "https://rudo.video/live/lared",
      "backupStreamUrl": "http://15.204.246.24:8080/Canal13HD/index.m3u8",
      "website": "https://www.lared.cl",
      "description": "Canal nacional de televisión abierta chileno con programación miscelánea e informativa.",
      "embedUrl": "https://rudo.video/live/lared",
      "channelNumber": 25,
      "sources": [
        {
          "name": "Fuente 1 (Reproductor Rudo Oficial La Red)",
          "url": "https://rudo.video/live/lared",
          "isEmbed": true
        },
        {
          "name": "Fuente 2 (Señal Canal 13 HD)",
          "url": "http://15.204.246.24:8080/Canal13HD/index.m3u8",
          "needsProxy": true
        },
        {
          "name": "Fuente 3 (Señal Canal 13 DPS)",
          "url": "https://redirector.dps.live/hls/13cl/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        },
        {
          "name": "Fuente 4 (Web Oficial La Red)",
          "url": "https://www.lared.cl/senal-online",
          "isEmbed": true
        }
      ]
    },
    {
      "id": "cl-tv-lcr-televisi-n",
      "name": "LCR Televisión",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1798_LCR_Television.png",
      "streamUrl": "https://stream.blserver.cl/hls/expresiontv/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://stream.blserver.cl/hls/expresiontv/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión LCR Televisión disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 26
    },
    {
      "id": "cl-tv-mega",
      "name": "Mega TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Región Metropolitana",
      "city": "Santiago",
      "genre": "General",
      "isNational": true,
      "logo": "./img/logos/cl-tv-mega.svg",
      "streamUrl": "https://unlimited2-cl-isp.dps.live/mega/mega.smil/playlist.m3u8",
      "backupStreamUrl": "https://mdstrm.com/live-stream-playlist/561430ae330428c223687e1e.m3u8",
      "website": "https://www.mega.cl",
      "description": "Red televisiva privada líder en ficción nacional, producción propia y noticieros.",
      "embedUrl": "https://www.mega.cl/senal-en-vivo/",
      "channelNumber": 27,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://unlimited2-cl-isp.dps.live/mega/mega.smil/playlist.m3u8",
          "needsProxy": true
        },
        {
          "name": "Fuente 2 (Respaldo Oficial)",
          "url": "https://mdstrm.com/live-stream-playlist/561430ae330428c223687e1e.m3u8",
          "needsProxy": false
        },
        {
          "name": "Fuente 3 (M3U Alternativa)",
          "url": "https://unlimited2-cl-isp.dps.live/mega/mega.smil/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": true
        },
        {
          "name": "Fuente 4 (M3U Alternativa)",
          "url": "https://mdstrm.com/live-stream-playlist/561430ae330428c223687e1e.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ]
    },
    {
      "id": "cl-tv-ntv",
      "name": "NTV (Canal Cultural TVN)",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Región Metropolitana",
      "city": "Santiago",
      "genre": "Cultura",
      "isNational": true,
      "logo": "./img/logos/cl-tv-ntv.svg",
      "streamUrl": "https://mdstrm.com/live-stream-playlist/5aaabe9e2c56420918184c6d.m3u8",
      "backupStreamUrl": "https://mdstrm.com/live-stream-playlist/5653641561b4eba30a7e4929.m3u8",
      "website": "https://www.tvn.cl/ntv",
      "description": "Señal pública cultural y familiar de Televisión Nacional de Chile con contenidos educativos e infantiles.",
      "embedUrl": "https://www.tvn.cl/ntv",
      "channelNumber": 28,
      "sources": [
        {
          "name": "Fuente 1 (Señal HLS Directa Oficial)",
          "url": "https://mdstrm.com/live-stream-playlist/5aaabe9e2c56420918184c6d.m3u8",
          "needsProxy": false,
          "isEmbed": false
        },
        {
          "name": "Fuente 2 (HLS Respaldo Oficial)",
          "url": "https://mdstrm.com/live-stream-playlist/5653641561b4eba30a7e4929.m3u8",
          "needsProxy": false
        },
        {
          "name": "Fuente 3 (Web Oficial de Respaldo)",
          "url": "https://www.tvn.cl/ntv",
          "isEmbed": true
        }
      ]
    },
    {
      "id": "cl-tv-patagonia-radio-tv",
      "name": "Patagonia Radio TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/974_Patagonia_Radio_TV.png",
      "streamUrl": "https://video01.logicahost.com.br/grupomedia/grupomedia/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://video01.logicahost.com.br/grupomedia/grupomedia/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Patagonia Radio TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 29
    },
    {
      "id": "cl-tv-pautatv",
      "name": "Pauta TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Región Metropolitana",
      "city": "Santiago",
      "genre": "Noticias",
      "isNational": true,
      "logo": "./img/logos/cl-tv-pautatv.svg",
      "streamUrl": "https://redirector.rudo.video/hls-video/ey6283je82983je9823je8jowowiekldk9838274/pautatv/pautatv.smil/playlist.m3u8",
      "backupStreamUrl": "https://redirector.rudo.video/hls-video/ey6283je82983je9823je8jowowiekldk9838274/pautatv/pautatv.smil/playlist.m3u8?PlaylistM3UCL",
      "website": "https://www.pauta.cl",
      "description": "Medio de comunicación chileno multiplataforma enfocado en actualidad, negocios, economía y opinión.",
      "embedUrl": "https://www.pauta.cl",
      "channelNumber": 30,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://redirector.rudo.video/hls-video/ey6283je82983je9823je8jowowiekldk9838274/pautatv/pautatv.smil/playlist.m3u8",
          "needsProxy": false
        },
        {
          "name": "Fuente 2 (M3U Alternativa)",
          "url": "https://redirector.rudo.video/hls-video/ey6283je82983je9823je8jowowiekldk9838274/pautatv/pautatv.smil/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ]
    },
    {
      "id": "cl-tv-radio-romantica",
      "name": "Radio Romantica",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/428_Radio_Romantica.png",
      "streamUrl": "https://mdstrm.com/live-stream-playlist/63a0674c1137d408b45d4821.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://mdstrm.com/live-stream-playlist/63a0674c1137d408b45d4821.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Radio Romantica disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 31
    },
    {
      "id": "cl-tv-retro-plus-tv",
      "name": "Retro Plus TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/4_Retro_Plus_TV.png",
      "streamUrl": "https://lbgo.bozztv.com/ssh101/ssh101/retroplustvuno/playlist.m3u8",
      "backupStreamUrl": "https://tls-cl.cdnz.cl/retroplustvuno/live/playlist.m3u8?PlaylistM3UCL",
      "sources": [
        {
          "name": "Fuente 1 (Señal HLS Directa HD)",
          "url": "https://lbgo.bozztv.com/ssh101/ssh101/retroplustvuno/playlist.m3u8",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Retro Plus TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 32
    },
    {
      "id": "cl-tv-retro-plus-tv-se-al-2",
      "name": "Retro Plus TV Señal 2",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/5_Retro_Plus_TV_Senal_2.png",
      "streamUrl": "https://lbgo.bozztv.com/ssh101/ssh101/retroplustvuno/playlist.m3u8",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Señal HLS Directa HD)",
          "url": "https://lbgo.bozztv.com/ssh101/ssh101/retroplustvuno/playlist.m3u8",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Retro Plus TV Señal 2 disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 33
    },
    {
      "id": "cl-tv-retro-plus-tv-se-al-3",
      "name": "Retro Plus TV Señal 3",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/465_Retro_Plus_TV_Senal_3.png",
      "streamUrl": "https://lbgo.bozztv.com/ssh101/ssh101/retroplustvuno/playlist.m3u8",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Señal HLS Directa HD)",
          "url": "https://lbgo.bozztv.com/ssh101/ssh101/retroplustvuno/playlist.m3u8",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Retro Plus TV Señal 3 disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 34
    },
    {
      "id": "cl-tv-rewind",
      "name": "Rewind",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/156_Rewind.png",
      "streamUrl": "https://tls-cl.cdnz.cl/rewindtv/live/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://tls-cl.cdnz.cl/rewindtv/live/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Rewind disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 35
    },
    {
      "id": "cl-tv-suyai-tv",
      "name": "Suyai TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1288_Suyai_TV.png",
      "streamUrl": "https://trun.suyaitv.cl/memfs/1255a743-cd41-40a8-86c4-d264ee16ebf3.m3u8",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Señal HLS Directa)",
          "url": "https://trun.suyaitv.cl/memfs/1255a743-cd41-40a8-86c4-d264ee16ebf3.m3u8",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Suyai TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 36
    },
    {
      "id": "cl-tv-t13envivo",
      "name": "T13 En Vivo (Teletrece)",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Región Metropolitana",
      "city": "Santiago",
      "genre": "Noticias",
      "isNational": true,
      "logo": "./img/logos/cl-tv-t13envivo.svg",
      "streamUrl": "https://redirector.rudo.video/hls-video/10b92cafdf3646cbc1e727f3dc76863621a327fd/t13/t13.smil/playlist.m3u8",
      "backupStreamUrl": "https://redirector.dps.live/hls/13intav/playlist.m3u8",
      "website": "https://www.t13.cl",
      "description": "Señal informativa 24/7 de Teletrece con noticias de Chile y el mundo al instante.",
      "embedUrl": "https://www.t13.cl/en-vivo",
      "channelNumber": 37,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://redirector.rudo.video/hls-video/10b92cafdf3646cbc1e727f3dc76863621a327fd/t13/t13.smil/playlist.m3u8",
          "needsProxy": false
        },
        {
          "name": "Fuente 2 (Respaldo Oficial)",
          "url": "https://redirector.dps.live/hls/13intav/playlist.m3u8",
          "needsProxy": true
        },
        {
          "name": "Fuente 3 (M3U Alternativa)",
          "url": "https://redirector.rudo.video/hls-video/10b92cafdf3646cbc1e727f3dc76863621a327fd/t13/t13.smil/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ]
    },
    {
      "id": "cl-tv-telezeta-tropical",
      "name": "TeleZeta Tropical",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1651_TeleZeta_Tropical.png",
      "streamUrl": "https://stream.telezeta.cl/live/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://stream.telezeta.cl/live/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión TeleZeta Tropical disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 38
    },
    {
      "id": "cl-tv-turismo-travel-tv",
      "name": "Turismo Travel TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1746_Turismo_Travel_TV.png",
      "streamUrl": "https://stmv3.voxtvhd.com.br/turismotraveltv/turismotraveltv/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://stmv3.voxtvhd.com.br/turismotraveltv/turismotraveltv/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Turismo Travel TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 39
    },
    {
      "id": "cl-tv-turnoenvivo",
      "name": "TurnoEnVivo",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1666_TurnoEnVivo.png",
      "streamUrl": "https://redirector.dps.live/hls/turno/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Señal HLS Directa DPS)",
          "url": "https://redirector.dps.live/hls/turno/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión TurnoEnVivo disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 40,
      "needsProxy": false
    },
    {
      "id": "cl-tv-tvchile",
      "name": "TV Chile (TVN Señal Internacional)",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Región Metropolitana",
      "city": "Santiago",
      "genre": "General / Noticias / Cultura",
      "description": "Señal internacional oficial de Televisión Nacional de Chile para todo el mundo.",
      "logo": "./img/logos/cl-tv-tvchile.svg",
      "streamUrl": "https://mdstrm.com/live-stream-playlist/533adcc949386ce765657d7c.m3u8",
      "backupStreamUrl": "https://mdstrm.com/live-stream-playlist/533adcc949386ce765657d7c.m3u8",
      "embedUrl": "https://www.tvn.cl/tvchile",
      "website": "https://www.tvn.cl/tvchile",
      "status": "online",
      "isHd": true,
      "featured": true,
      "channelNumber": 41,
      "sources": [
        {
          "name": "Fuente 1 (Señal HLS Directa)",
          "url": "https://mdstrm.com/live-stream-playlist/533adcc949386ce765657d7c.m3u8",
          "needsProxy": true
        }
      ],
      "needsProxy": true
    },
    {
      "id": "cl-tv-tvmas",
      "name": "TV+ (TV Más)",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Región Metropolitana",
      "city": "Santiago",
      "genre": "Entretenimiento",
      "isNational": true,
      "logo": "./img/logos/cl-tv-tvmas.svg",
      "streamUrl": "https://redirector.rudo.video/hls-video/ey6283je82983je9823je8jowowiekldk9838274/tvmas/tvmas.smil/playlist.m3u8",
      "backupStreamUrl": "https://marine2.miplay.cl/tateti/playlist.m3u8",
      "website": "https://www.tvmas.tv",
      "description": "Canal enfocado en programas de conversación, actualidad y entretenimiento.",
      "embedUrl": "https://tvmas.tv/senal-en-vivo/",
      "channelNumber": 42,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://redirector.rudo.video/hls-video/ey6283je82983je9823je8jowowiekldk9838274/tvmas/tvmas.smil/playlist.m3u8",
          "needsProxy": false
        },
        {
          "name": "Fuente 2 (Respaldo Oficial)",
          "url": "https://marine2.miplay.cl/tateti/playlist.m3u8",
          "needsProxy": false
        },
        {
          "name": "Fuente 3 (M3U Alternativa)",
          "url": "https://redirector.rudo.video/hls-video/ey6283je82983je9823je8jowowiekldk9838274/tvmas/tvmas.smil/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        },
        {
          "name": "Fuente 4 (M3U Alternativa)",
          "url": "https://mdstrm.com/live-stream-playlist/533adcc949386ce765657d7c.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ]
    },
    {
      "id": "cl-tv-tvn",
      "name": "TVN (Señal Nacional Abierta)",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Región Metropolitana",
      "city": "Santiago",
      "genre": "General",
      "isNational": true,
      "logo": "./img/logos/cl-tv-tvn.svg",
      "streamUrl": "http://15.204.246.24:8080/TVNHD/index.m3u8",
      "backupStreamUrl": "http://15.204.246.24:8080/TVNHD/index.m3u8",
      "website": "https://www.tvn.cl/en-vivo",
      "description": "Señal abierta nacional en directo de Televisión Nacional de Chile en Full HD (1080p).",
      "embedUrl": "https://www.tvn.cl/en-vivo",
      "status": "online",
      "needsProxy": true,
      "channelNumber": 43,
      "sources": [
        {
          "name": "Fuente 1 (HLS HD Principal)",
          "url": "http://15.204.246.24:8080/TVNHD/index.m3u8",
          "needsProxy": true
        }
      ]
    },
    {
      "id": "cl-tv-tvn3",
      "name": "TVN3",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1437_TVN3.png",
      "streamUrl": "https://mdstrm.com/live-stream-playlist/5653641561b4eba30a7e4929.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://mdstrm.com/live-stream-playlist/5653641561b4eba30a7e4929.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión TVN3 disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 44
    },
    {
      "id": "cl-tv-uchile",
      "name": "UChile TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Región Metropolitana",
      "city": "Santiago",
      "genre": "Cultura / Educación",
      "isNational": true,
      "logo": "./img/logos/cl-tv-uchile.png",
      "streamUrl": "https://redirector.rudo.video/hls-video/931b584451fa6dd1313ee66efbfd5802e3f3bcea/uchiletv/uchiletv.smil/playlist.m3u8",
      "backupStreamUrl": "https://rudo.video/live/uchiletv",
      "embedUrl": "https://rudo.video/live/uchiletv",
      "website": "https://tv.uchile.cl",
      "description": "Canal público de televisión de la Universidad de Chile con contenidos culturales, educativos, científicos y de debate ciudadano.",
      "channelNumber": 45,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://redirector.rudo.video/hls-video/931b584451fa6dd1313ee66efbfd5802e3f3bcea/uchiletv/uchiletv.smil/playlist.m3u8",
          "needsProxy": false
        },
        {
          "name": "Fuente 2 (Respaldo Oficial)",
          "url": "https://rudo.video/live/uchiletv",
          "needsProxy": false
        },
        {
          "name": "Fuente 3 (M3U Alternativa)",
          "url": "https://unlimited1-cl-isp.dps.live/uchiletv/uchiletv.smil/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": true
        }
      ]
    },
    {
      "id": "cl-tv-ucv-2",
      "name": "UCV 2",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1152_UCV_2.png",
      "streamUrl": "https://unlimited1-cl-isp.dps.live/ucvtveventos/ucvtveventos.smil/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://unlimited1-cl-isp.dps.live/ucvtveventos/ucvtveventos.smil/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": true
        }
      ],
      "website": "",
      "description": "Canal de televisión UCV 2 disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 46
    },
    {
      "id": "cl-tv-vclassictv",
      "name": "VClassicTV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1160_VClassicTV.png",
      "streamUrl": "https://5eaccbab48461.streamlock.net:1936/8112/8112/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://5eaccbab48461.streamlock.net:1936/8112/8112/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión VClassicTV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 47
    },
    {
      "id": "cl-tv-vclassictv-tropical",
      "name": "VClassicTV Tropical",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1255_VClassicTV_Tropical.png",
      "streamUrl": "https://5eaccbab48461.streamlock.net:1936/8076/8076/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://5eaccbab48461.streamlock.net:1936/8076/8076/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión VClassicTV Tropical disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 48
    },
    {
      "id": "cl-tv-wapptv",
      "name": "WappTV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1767_WappTV.png",
      "streamUrl": "https://stream.wapptv.cl/video/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://stream.wapptv.cl/video/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión WappTV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 49
    },
    {
      "id": "cl-rad-biobiosantiago",
      "name": "Radio Bío Bío (Santiago 99.7 FM)",
      "type": "radio",
      "country": "CL",
      "countryName": "Chile",
      "region": "Región Metropolitana",
      "city": "Santiago",
      "frequency": "99.7 FM",
      "genre": "Noticias",
      "isNational": true,
      "logo": "./img/logos/cl-rad-biobiosantiago.svg",
      "streamUrl": "https://unlimited3-cl.dps.live/biobiosantiago/mp3/icecast.audio",
      "backupStreamUrl": "https://unlimited3-cl.dps.live/biobiosantiago/aac/icecast.audio",
      "website": "https://www.biobiochile.cl",
      "description": "La radio informativa más escuchada de Chile. Cobertura en vivo, noticias independientes y deportes.",
      "status": "online",
      "stationNumber": 1
    },
    {
      "id": "cl-rad-biobioconcepcion",
      "name": "Radio Bío Bío (Concepción 98.1 FM)",
      "type": "radio",
      "country": "CL",
      "countryName": "Chile",
      "region": "Región del Biobío",
      "city": "Concepción",
      "frequency": "98.1 FM",
      "genre": "Noticias",
      "isNational": false,
      "logo": "./img/logos/cl-rad-biobioconcepcion.svg",
      "streamUrl": "https://unlimited3-cl.dps.live/biobiosantiago/mp3/icecast.audio",
      "backupStreamUrl": null,
      "website": "https://www.biobiochile.cl",
      "description": "Señal matriz penquista de Radio Bío Bío con la información directa del Gran Concepción y el sur.",
      "status": "online",
      "stationNumber": 2
    },
    {
      "id": "cl-rad-biobiovalparaiso",
      "name": "Radio Bío Bío (Valparaíso 94.5 FM)",
      "type": "radio",
      "country": "CL",
      "countryName": "Chile",
      "region": "Región de Valparaíso",
      "city": "Valparaíso",
      "frequency": "94.5 FM",
      "genre": "Noticias",
      "isNational": false,
      "logo": "./img/logos/cl-rad-biobiovalparaiso.svg",
      "streamUrl": "https://unlimited3-cl.dps.live/biobiovalparaiso/mp3/icecast.audio",
      "backupStreamUrl": "https://unlimited3-cl.dps.live/biobiovalparaiso/aac/icecast.audio",
      "website": "https://www.biobiochile.cl",
      "description": "Transmisión con desconexión local para Valparaíso, Viña del Mar y el litoral central.",
      "status": "online",
      "stationNumber": 3
    },
    {
      "id": "cl-rad-biobiopuertomontt",
      "name": "Radio Bío Bío (Puerto Montt 94.9 FM)",
      "type": "radio",
      "country": "CL",
      "countryName": "Chile",
      "region": "Región de Los Lagos",
      "city": "Puerto Montt",
      "frequency": "94.9 FM",
      "genre": "Noticias",
      "isNational": false,
      "logo": "./img/logos/cl-rad-biobiopuertomontt.svg",
      "streamUrl": "https://unlimited3-cl.dps.live/biobiosantiago/mp3/icecast.audio",
      "backupStreamUrl": null,
      "website": "https://www.biobiochile.cl",
      "description": "Señal de Bío Bío para Puerto Montt, Llanquihue, Puerto Varas y Chiloé.",
      "status": "online",
      "stationNumber": 4
    },
    {
      "id": "cl-rad-biobiotemuco",
      "name": "Radio Bío Bío (Temuco 88.1 FM)",
      "type": "radio",
      "country": "CL",
      "countryName": "Chile",
      "region": "Región de La Araucanía",
      "city": "Temuco",
      "genre": "Noticias / Opinión",
      "frequency": "88.1 FM",
      "description": "Señal local de Radio Bío Bío para Temuco y la Región de La Araucanía.",
      "logo": "./img/logos/cl-rad-biobiotemuco.svg",
      "streamUrl": "https://unlimited3-cl.dps.live/biobiotemuco/mp3/icecast.audio",
      "backupStreamUrl": "https://unlimited3-cl.dps.live/biobiotemuco/aac/icecast.audio",
      "website": "https://www.biobiochile.cl",
      "status": "online",
      "featured": false,
      "stationNumber": 5
    },
    {
      "id": "cl-rad-biobiovaldivia",
      "name": "Radio Bío Bío (Valdivia 88.9 FM)",
      "type": "radio",
      "country": "CL",
      "countryName": "Chile",
      "region": "Región de Los Ríos",
      "city": "Valdivia",
      "genre": "Noticias / Opinión",
      "frequency": "88.9 FM",
      "description": "Señal local de Radio Bío Bío para Valdivia y la Región de Los Ríos.",
      "logo": "./img/logos/cl-rad-biobiovaldivia.svg",
      "streamUrl": "https://unlimited3-cl.dps.live/biobiosantiago/mp3/icecast.audio",
      "backupStreamUrl": null,
      "website": "https://www.biobiochile.cl",
      "status": "online",
      "featured": false,
      "stationNumber": 6
    },
    {
      "id": "cl-rad-biobioosorno",
      "name": "Radio Bío Bío (Osorno 106.5 FM)",
      "type": "radio",
      "country": "CL",
      "countryName": "Chile",
      "region": "Región de Los Lagos",
      "city": "Osorno",
      "genre": "Noticias / Opinión",
      "frequency": "106.5 FM",
      "description": "Señal local de Radio Bío Bío para Osorno y la provincia de Osorno.",
      "logo": "./img/logos/cl-rad-biobioosorno.svg",
      "streamUrl": "https://unlimited3-cl.dps.live/biobioosorno/mp3/icecast.audio",
      "backupStreamUrl": "https://unlimited3-cl.dps.live/biobioosorno/aac/icecast.audio",
      "website": "https://www.biobiochile.cl",
      "status": "online",
      "featured": false,
      "stationNumber": 7
    },
    {
      "id": "cl-rad-cooperativa",
      "name": "Radio Cooperativa (93.3 FM)",
      "type": "radio",
      "country": "CL",
      "countryName": "Chile",
      "region": "Región Metropolitana",
      "city": "Santiago",
      "frequency": "93.3 FM",
      "genre": "Noticias",
      "isNational": true,
      "logo": "./img/logos/cl-rad-cooperativa.svg",
      "streamUrl": "https://unlimited3-cl.dps.live/cooperativafm/mp3/icecast.audio",
      "backupStreamUrl": "https://unlimited3-cl.dps.live/cooperativafm/aac/icecast.audio",
      "website": "https://www.cooperativa.cl",
      "description": "Radio emblemática de Chile, líder en opinión pública, noticias, debate y Al Aire Libre en Deportes.",
      "status": "online",
      "stationNumber": 8
    },
    {
      "id": "cl-rad-adn",
      "name": "ADN Radio Chile (91.7 FM)",
      "type": "radio",
      "country": "CL",
      "countryName": "Chile",
      "region": "Región Metropolitana",
      "city": "Santiago",
      "frequency": "91.7 FM",
      "genre": "Noticias",
      "isNational": true,
      "logo": "./img/logos/cl-rad-adn.png",
      "streamUrl": "https://playerservices.streamtheworld.com/api/livestream-redirect/ADN.mp3",
      "backupStreamUrl": null,
      "website": "https://www.adnradio.cl",
      "description": "Actualidad, Deportes y Noticias. Gran cobertura informativa y programas emblemáticos como Los Tenores.",
      "status": "online",
      "stationNumber": 9
    },
    {
      "id": "cl-rad-futuro",
      "name": "Radio Futuro (88.9 FM)",
      "type": "radio",
      "country": "CL",
      "countryName": "Chile",
      "region": "Región Metropolitana",
      "city": "Santiago",
      "frequency": "88.9 FM",
      "genre": "Música Rock",
      "isNational": true,
      "logo": "./img/logos/cl-rad-futuro.png",
      "streamUrl": "https://playerservices.streamtheworld.com/api/livestream-redirect/FUTURO.mp3",
      "backupStreamUrl": null,
      "website": "https://www.futuro.cl",
      "description": "La radio del rock en Chile: Clásicos del rock, hard rock, blues, heavy metal y noticias de la escena musical.",
      "status": "online",
      "stationNumber": 10
    },
    {
      "id": "cl-rad-concierto",
      "name": "Radio Concierto (88.5 FM)",
      "type": "radio",
      "country": "CL",
      "countryName": "Chile",
      "region": "Región Metropolitana",
      "city": "Santiago",
      "frequency": "88.5 FM",
      "genre": "Música Pop/Rock",
      "isNational": true,
      "logo": "./img/logos/cl-rad-concierto.png",
      "streamUrl": "https://playerservices.streamtheworld.com/api/livestream-redirect/CONCIERTO.mp3",
      "backupStreamUrl": "https://26583.live.streamtheworld.com/CONCIERTOAAC.aac",
      "website": "https://www.concierto.cl",
      "description": "Solo grandes canciones. Pop, rock de los 80s, 90s y 2000s, cultura contemporánea y opinión.",
      "status": "online",
      "stationNumber": 11
    },
    {
      "id": "cl-rad-rockandpop",
      "name": "Radio Rock & Pop (94.1 FM)",
      "type": "radio",
      "country": "CL",
      "countryName": "Chile",
      "region": "Región Metropolitana",
      "city": "Santiago",
      "frequency": "94.1 FM",
      "genre": "Rock / Pop / Música",
      "isNational": true,
      "logo": "./img/logos/cl-rad-rockandpop.png",
      "streamUrl": "https://playerservices.streamtheworld.com/api/livestream-redirect/ROCK_AND_POP.mp3",
      "backupStreamUrl": null,
      "website": "https://www.rockandpop.cl",
      "description": "Música 24/7 con los mejores clásicos y tendencias del rock y pop global.",
      "status": "online",
      "stationNumber": 12
    },
    {
      "id": "cl-rad-corazon",
      "name": "Radio Corazón (101.3 FM)",
      "type": "radio",
      "country": "CL",
      "countryName": "Chile",
      "region": "Región Metropolitana",
      "city": "Santiago",
      "frequency": "101.3 FM",
      "genre": "Música Tropical/Latina",
      "isNational": true,
      "logo": "./img/logos/cl-rad-corazon.png",
      "streamUrl": "https://playerservices.streamtheworld.com/api/livestream-redirect/CORAZON.mp3",
      "backupStreamUrl": null,
      "website": "https://www.corazon.cl",
      "description": "La número 1 de Chile: Cumbia, música tropical, reggaetón, humor y compañía diaria.",
      "status": "online",
      "stationNumber": 13
    },
    {
      "id": "cl-rad-carolina",
      "name": "Radio Carolina (99.3 FM)",
      "type": "radio",
      "country": "CL",
      "countryName": "Chile",
      "region": "Región Metropolitana",
      "city": "Santiago",
      "frequency": "99.3 FM",
      "genre": "Música Juvenil/Urbana",
      "isNational": true,
      "logo": "./img/logos/cl-rad-carolina.svg",
      "streamUrl": "https://stream.zeno.fm/sri2de2qdlivv",
      "backupStreamUrl": "https://mdstrm.com/live-stream-playlist/63a06468117f42713374addd.m3u8",
      "website": "https://www.carolina.cl",
      "description": "Música juvenil urbana, trap, electrónica, reggaetón y programas juveniles de gran sintonía.",
      "status": "online",
      "stationNumber": 14
    },
    {
      "id": "cl-rad-pudahuel",
      "name": "Radio Pudahuel (90.5 FM)",
      "type": "radio",
      "country": "CL",
      "countryName": "Chile",
      "region": "Región Metropolitana",
      "city": "Santiago",
      "frequency": "90.5 FM",
      "genre": "Música Romántica",
      "isNational": true,
      "logo": "./img/logos/cl-rad-pudahuel.png",
      "streamUrl": "https://playerservices.streamtheworld.com/api/livestream-redirect/PUDAHUEL.mp3",
      "backupStreamUrl": null,
      "website": "https://www.pudahuel.cl",
      "description": "La voz de Chile: Música romántica, baladas en español y la compañía más cercana del país.",
      "status": "online",
      "stationNumber": 15
    },
    {
      "id": "cl-rad-activa",
      "name": "Radio Activa (92.5 FM)",
      "type": "radio",
      "country": "CL",
      "countryName": "Chile",
      "region": "Región Metropolitana",
      "city": "Santiago",
      "frequency": "92.5 FM",
      "genre": "Música Bailable",
      "isNational": true,
      "logo": "./img/logos/cl-rad-activa.png",
      "streamUrl": "https://playerservices.streamtheworld.com/api/livestream-redirect/ACTIVA.mp3",
      "backupStreamUrl": "https://26583.live.streamtheworld.com/ACTIVAAAC.aac",
      "website": "https://www.radioactiva.cl",
      "description": "Solo se vive una vez: Ritmo, fiesta, reggaetón, cumbia y la mejor animación radial.",
      "status": "online",
      "stationNumber": 16
    },
    {
      "id": "cl-rad-los40",
      "name": "Los 40 Chile (101.7 FM)",
      "type": "radio",
      "country": "CL",
      "countryName": "Chile",
      "region": "Región Metropolitana",
      "city": "Santiago",
      "frequency": "101.7 FM",
      "genre": "Música Pop/Hits",
      "isNational": true,
      "logo": "./img/logos/cl-rad-los40.png",
      "streamUrl": "https://playerservices.streamtheworld.com/api/livestream-redirect/LOS40_CHILE.mp3",
      "backupStreamUrl": "https://26583.live.streamtheworld.com/LOS40_CHILEAAC.aac",
      "website": "https://los40.cl",
      "description": "La radio de los éxitos musicales del momento a nivel hispanoamericano e internacional.",
      "status": "online",
      "stationNumber": 17
    },
    {
      "id": "cl-rad-fmdos",
      "name": "FM Dos (98.5 FM)",
      "type": "radio",
      "country": "CL",
      "countryName": "Chile",
      "region": "Región Metropolitana",
      "city": "Santiago",
      "frequency": "98.5 FM",
      "genre": "Música Romántica",
      "isNational": true,
      "logo": "./img/logos/cl-rad-fmdos.png",
      "streamUrl": "https://playerservices.streamtheworld.com/api/livestream-redirect/FMDOS.mp3",
      "backupStreamUrl": null,
      "website": "https://www.fmdos.cl",
      "description": "La radio de los dos: Lo mejor de las historias de amor y pop romántico en español e inglés.",
      "status": "online",
      "stationNumber": 18
    },
    {
      "id": "cl-rad-romantica",
      "name": "Radio Romántica (104.1 FM)",
      "type": "radio",
      "country": "CL",
      "countryName": "Chile",
      "region": "Región Metropolitana",
      "city": "Santiago",
      "frequency": "104.1 FM",
      "genre": "Música Romántica",
      "isNational": true,
      "logo": "./img/logos/cl-rad-romantica.svg",
      "streamUrl": "https://mdstrm.com/audio/639b78f7ff35df084fa7f964/icecast.audio",
      "backupStreamUrl": "https://romantica.streamguys1.com/romantica-aac",
      "website": "https://www.romantica.cl",
      "description": "Música para el corazón, clásicos de baladas y reflexiones para el día a día.",
      "status": "online",
      "stationNumber": 19
    },
    {
      "id": "cl-rad-duna",
      "name": "Radio Duna (89.7 FM)",
      "type": "radio",
      "country": "CL",
      "countryName": "Chile",
      "region": "Región Metropolitana",
      "city": "Santiago",
      "frequency": "89.7 FM",
      "genre": "Noticias y Cultura",
      "isNational": true,
      "logo": "./img/logos/cl-rad-duna.svg",
      "streamUrl": "https://mdstrm.com/audio/67f42f96e464d19a6eda3c7d/icecast.audio",
      "backupStreamUrl": "https://duna.streamguys1.com/duna-aac",
      "website": "https://www.duna.cl",
      "description": "Sonidos de tu mundo: Noticias, economía, debate político, música selecta y cultura.",
      "status": "online",
      "stationNumber": 20
    },
    {
      "id": "cl-rad-infinita",
      "name": "Radio Infinita (100.1 FM)",
      "type": "radio",
      "country": "CL",
      "countryName": "Chile",
      "region": "Región Metropolitana",
      "city": "Santiago",
      "frequency": "100.1 FM",
      "genre": "Noticias",
      "isNational": true,
      "logo": "./img/logos/cl-rad-infinita.svg",
      "streamUrl": "https://mdstrm.com/audio/639b791cea22540890cd1d8b/icecast.audio",
      "backupStreamUrl": "https://infinita.streamguys1.com/infinita-aac",
      "website": "https://www.infinita.cl",
      "description": "Palabras con poder: Análisis en profundidad de la actualidad, opinión e información.",
      "status": "online",
      "stationNumber": 21
    },
    {
      "id": "cl-rad-beethoven",
      "name": "Radio Beethoven (96.5 FM)",
      "type": "radio",
      "country": "CL",
      "countryName": "Chile",
      "region": "Región Metropolitana",
      "city": "Santiago",
      "frequency": "96.5 FM",
      "genre": "Música Clásica",
      "isNational": true,
      "logo": "./img/logos/cl-rad-beethoven.svg",
      "streamUrl": "https://unlimited4-us.dps.live/beethovenfm/aac/icecast.audio",
      "backupStreamUrl": "https://unlimited5-us.dps.live/beethovenfm/aac/icecast.audio",
      "website": "https://www.beethovenfm.cl",
      "description": "La emisora de música clásica por excelencia de Chile, administrada por la Pontificia Universidad Católica de Chile.",
      "status": "online",
      "stationNumber": 22
    },
    {
      "id": "cl-rad-agricultura",
      "name": "Radio Agricultura (92.1 FM)",
      "type": "radio",
      "country": "CL",
      "countryName": "Chile",
      "region": "Región Metropolitana",
      "city": "Santiago",
      "frequency": "92.1 FM",
      "genre": "Noticias y Deportes",
      "isNational": true,
      "logo": "./img/logos/cl-rad-agricultura.svg",
      "streamUrl": "https://unlimited3-cl.dps.live/agricultura/mp3/icecast.audio",
      "backupStreamUrl": "https://unlimited4-us.dps.live/agricultura/mp3/icecast.audio",
      "website": "https://www.radioagricultura.cl",
      "description": "Opinión, noticias, agro y el clásico programa de Deportes en Agricultura.",
      "status": "online",
      "stationNumber": 23
    }
  ]
};



  /* ========================================================================
     SOURCE MODULE: data-manager.js
     ======================================================================== */

/**
 * ANTENA SUR - Data Manager
 * Gestión de la base de datos de canales y radios, extracción jerárquica
 */
class DataManager {
  constructor() {
    this.stations = [];
    this.countries = [];
    this.customStations = [];
    this.isLoaded = false;
  }

  load() {
    try {
      let data = null;
      if (typeof window !== 'undefined' && window.STATIONS_DATA) {
        data = window.STATIONS_DATA;
      } else if (typeof globalThis !== 'undefined' && globalThis.STATIONS_DATA) {
        data = globalThis.STATIONS_DATA;
      }

      if (data && data.stations && data.stations.length > 0) {
        this.countries = data.countries || [];
        this.loadCustomStations();
        this.stations = [...(data.stations || []), ...this.customStations];
        this.applyCachedStreamUpdates();
        this.isLoaded = true;
        return true;
      }

      // Fallback secundario si no está precargado en memoria
      if (typeof fetch === 'function') {
        fetch('./data/stations.json')
          .then(r => r.json())
          .then(d => {
            if (d && d.stations) {
              this.countries = d.countries || [];
              this.stations = [...d.stations, ...this.customStations];
              this.applyCachedStreamUpdates();
              this.isLoaded = true;
            }
          })
          .catch(e => console.warn('Fetch fallback no disponible:', e));
      }
      return false;
    } catch (error) {
      console.warn('Error en carga de estaciones:', error);
      return false;
    }
  }

  /**
   * Limpia cachés de enlaces obsoletos para asegurar que se utilicen siempre
   * las señales verificadas de stations-data.js
   */
  applyCachedStreamUpdates() {
    try {
      localStorage.removeItem('antena_sur_m3ucl_links');
    } catch (e) {}
  }

  /**
   * Sincronización pasiva (no sobreescribe señales maestras de Antena Sur)
   */
  async syncWithM3UCL(callback) {
    if (typeof callback === 'function') {
      callback({ ok: true, changedCount: 0 });
    }
    return { ok: true, changedCount: 0 };
  }

  /**
   * Parser autónomo de M3U en JavaScript para cuando la app corre offline/stand-alone
   */
  parseM3UCLContent(m3uText) {
    const lines = m3uText.split(/\r?\n/);
    const firstMatch = {};
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.startsWith('#EXTINF')) {
        const nextUrl = (lines[i + 1] || '').trim();
        const tvgMatch = line.match(/tvg-name="([^"]+)"/i);
        const logoMatch = line.match(/tvg-logo="([^"]+)"/i);
        const titleMatch = line.match(/,\s*(.*)$/);
        const tvg = tvgMatch ? tvgMatch[1].trim() : '';
        const logo = logoMatch ? logoMatch[1].trim() : '';
        const rawTitle = titleMatch ? titleMatch[1].trim() : '';
        const cleanTitle = rawTitle.replace(/✪\s*\|\s*CL/gi, '').trim();

        [tvg.toLowerCase(), cleanTitle.toLowerCase()].forEach(k => {
          if (k && !firstMatch[k] && nextUrl) {
            firstMatch[k] = { url: nextUrl, logo: logo };
          }
        });
      }
    }

    const aliases = {
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
    };

    const updates = {};
    this.stations.forEach(s => {
      if (s.country !== 'CL' || s.type !== 'tv') return;
      let match = null;
      if (aliases[s.id]) {
        for (const a of aliases[s.id]) {
          if (firstMatch[a.toLowerCase()]) {
            match = firstMatch[a.toLowerCase()];
            break;
          }
        }
      }
      if (!match && firstMatch[s.name.toLowerCase()]) {
        match = firstMatch[s.name.toLowerCase()];
      }
      if (match) {
        updates[s.id] = match;
      }
    });

    return updates;
  }

  loadCustomStations() {
    try {
      const saved = localStorage.getItem('antena_sur_custom_stations');
      if (saved) {
        this.customStations = JSON.parse(saved);
      }
    } catch (e) {
      console.warn('No se pudieron cargar estaciones personalizadas:', e);
      this.customStations = [];
    }
  }

  saveCustomStation(station) {
    this.customStations.unshift(station);
    this.stations.unshift(station);
    try {
      localStorage.setItem('antena_sur_custom_stations', JSON.stringify(this.customStations));
    } catch (e) {
      console.error('Error guardando estación personalizada:', e);
    }
  }

  getAllStations() {
    return this.stations;
  }

  getCountries() {
    return this.countries;
  }

  getStationById(id) {
    return this.stations.find(s => s.id === id);
  }

  /**
   * Obtiene la lista ordenada de regiones para un país dado
   */
  getRegions(countryCode) {
    const list = this.stations
      .filter(s => s.country === countryCode && s.region)
      .map(s => s.region);
    return [...new Set(list)].sort((a, b) => a.localeCompare(b, 'es'));
  }

  /**
   * Obtiene la lista ordenada de ciudades para un país y región dados
   */
  getCities(countryCode, regionName = null) {
    const list = this.stations
      .filter(s => {
        if (s.country !== countryCode) return false;
        if (regionName && regionName !== 'all' && s.region !== regionName) return false;
        return Boolean(s.city);
      })
      .map(s => s.city);
    return [...new Set(list)].sort((a, b) => a.localeCompare(b, 'es'));
  }

  /**
   * Obtiene todos los géneros únicos presentes en el catálogo
   */
  getGenres() {
    const genres = new Set();
    this.stations.forEach(s => {
      if (s.genre) {
        s.genre.split(/[\/,]/).forEach(g => {
          const trimmed = g.trim();
          if (trimmed) genres.add(trimmed);
        });
      }
    });
    return ['Todos', ...Array.from(genres).sort((a, b) => a.localeCompare(b, 'es'))];
  }

  /**
   * Cuenta cantidad de señales por país
   */
  getCountByCountry(countryCode) {
    return this.stations.filter(s => s.country === countryCode).length;
  }
}



  /* ========================================================================
     SOURCE MODULE: favorites.js
     ======================================================================== */

/**
 * ANTENA SUR - Favorites & History Manager
 * Gestión en LocalStorage de emisoras favoritas y reproducciones recientes
 */
class FavoritesManager {
  constructor() {
    this.FAV_KEY = 'antena_sur_favorites';
    this.HIST_KEY = 'antena_sur_history';
    this.favorites = new Set(this.loadFavorites());
  }

  loadFavorites() {
    try {
      const data = localStorage.getItem(this.FAV_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.warn('Error leyendo favoritos:', e);
      return [];
    }
  }

  saveFavorites() {
    try {
      localStorage.setItem(this.FAV_KEY, JSON.stringify(Array.from(this.favorites)));
    } catch (e) {
      console.error('Error guardando favoritos:', e);
    }
  }

  isFavorite(stationId) {
    return this.favorites.has(stationId);
  }

  toggleFavorite(stationId) {
    let isNowFav = false;
    if (this.favorites.has(stationId)) {
      this.favorites.delete(stationId);
      isNowFav = false;
    } else {
      this.favorites.add(stationId);
      isNowFav = true;
    }
    this.saveFavorites();
    return isNowFav;
  }

  getFavoritesCount() {
    return this.favorites.size;
  }

  getFavoriteIds() {
    return Array.from(this.favorites);
  }

  // Historial de reproducciones recientes
  addToHistory(station) {
    if (!station || !station.id) return;
    try {
      let history = this.getHistory();
      // Eliminar ocurrencia previa para colocarlo primero
      history = history.filter(item => item.id !== station.id);
      history.unshift({
        id: station.id,
        name: station.name,
        type: station.type,
        playedAt: new Date().toISOString()
      });
      // Mantener máximo 20 elementos en historial
      if (history.length > 20) history = history.slice(0, 20);
      localStorage.setItem(this.HIST_KEY, JSON.stringify(history));
    } catch (e) {
      console.warn('Error guardando historial:', e);
    }
  }

  getHistory() {
    try {
      const data = localStorage.getItem(this.HIST_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }
}



  /* ========================================================================
     SOURCE MODULE: player.js
     ======================================================================== */

/**
 * ANTENA SUR - Player Engine (Zapping TV & Radio Engine)
 * Experiencia Zapping TV con Guía Lateral Interactiva, Zapping Rápido,
 * Navegación con Control Remoto para Android TV (D-Pad), Apple CarPlay y Android Auto.
 */
class PlayerEngine {
  constructor(favoritesManager, onStationChange) {
    this.fav = favoritesManager;
    this.onStationChange = onStationChange;

    this.currentStation = null;
    this.isPlaying = false;
    this.currentType = null; // 'tv' | 'radio'

    this.hls = null;
    this.radioHls = null;
    this.isUsingProxy = false;
    this.connectionWatchdogTimer = null;
    this.nowPlayingTimer = null;
    this.sourceLatencies = {};

    // Listas de estaciones para Zapping
    this.tvStations = [];
    this.radioStations = [];
    this.currentTvIndex = 0;
    this.currentRadioIndex = 0;
    this.dpadFocusIndex = 0;
    this.sidebarFocusIndex = 0;

    // Estado del overlay en pantalla completa
    this.isGuideOverlayVisible = false;
    this.fsOverlayTimeout = null;

    this.currentZappingQuery = '';

    // Audio Element para Radios (optimizado para Android TV, iOS y Navegadores Móviles)
    this.audioElement = (typeof document !== 'undefined' && document.getElementById('radioAudioPlayer'))
      ? document.getElementById('radioAudioPlayer')
      : new Audio();
    this.audioElement.id = 'radioAudioPlayer';
    this.audioElement.setAttribute('playsinline', '');
    this.audioElement.setAttribute('webkit-playsinline', '');
    this.audioElement.preload = 'auto';

    // Configuración nativa de sesión de audio para iOS Safari 16.4+ (modo background playback)
    if ('audioSession' in navigator) {
      try {
        navigator.audioSession.type = 'playback';
      } catch (e) {}
    }

    // Variables de control de estado para CarPlay, Bluetooth y llamadas telefónicas
    this.isUserPaused = false;
    this.isInterrupted = false;
    this.wasPlayingBeforeDisconnect = false;
    this.wasPlayingBeforeInterruption = false;
    this.isReconnecting = false;
    this.isReloading = false;

    // Control de estado de pantalla completa y supresión de pausas automáticas del navegador
    this._isExitingFullscreen = false;
    this._exitFsGraceTimer = null;
    this._userRequestedPause = false;
    this.reconnectAttempts = 0;
    this.reconnectTimer = null;
    this.watchdogTimer = null;
    this.stallTimer = null;
    this.onlineRecoveryTimer = null;
    this.lastPlaybackTime = 0;
    this.lastTimeAdvancedAt = Date.now();

    // Estado de volumen
    this.volume = parseFloat(localStorage.getItem('antena_sur_volume') || '0.85');
    this.isMuted = false;

    // Cache de elementos DOM
    this.dom = {
      // Vista Zapping TV
      tvZappingView: document.getElementById('tvZappingView'),
      zappingLayout: document.querySelector('.zapping-layout'),
      zappingSidebar: document.getElementById('zappingSidebar'),
      zappingSidebarToggleBtn: document.getElementById('zappingSidebarToggleBtn'),
      zappingOpenGuideBtn: document.getElementById('zappingOpenGuideBtn'),
      zappingChannelList: document.getElementById('zappingChannelList'),
      zappingSearchInput: document.getElementById('zappingSearchInput'),
      zappingChCount: document.getElementById('zappingChCount'),

      // Área Principal del Reproductor TV
      zappingPlayerArea: document.getElementById('zappingPlayerArea'),
      zappingVideoContainer: document.getElementById('zappingVideoContainer'),
      tvVideo: document.getElementById('tvVideo'),
      tvIframe: document.getElementById('tvIframe'),
      tvLoading: document.getElementById('tvLoading'),
      tvSpeedBadge: document.getElementById('tvSpeedBadge'),
      tvSpeedBadgeText: document.getElementById('tvSpeedBadgeText'),
      tvFallbackOverlay: document.getElementById('tvFallbackOverlay'),
      tvFallbackMsg: document.getElementById('tvFallbackMsg'),
      tvRetryBtn: document.getElementById('tvRetryBtn'),
      tvUseProxyBtn: document.getElementById('tvUseProxyBtn'),
      tvWebFallbackBtn: document.getElementById('tvWebFallbackBtn'),

      // HUD Superior TV
      tvChannelNumber: document.getElementById('tvChannelNumber'),
      tvStationLogo: document.getElementById('tvStationLogo'),
      tvStationTitle: document.getElementById('tvStationTitle'),
      tvStationSubtitle: document.getElementById('tvStationSubtitle'),
      tvSourceWrapper: document.getElementById('tvSourceWrapper'),
      tvSourceSelect: document.getElementById('tvSourceSelect'),
      tvNextSourceBtn: document.getElementById('tvNextSourceBtn'),
      tvQualityWrapper: document.getElementById('tvQualityWrapper'),
      tvQualitySelect: document.getElementById('tvQualitySelect'),
      tvToggleWebBtn: document.getElementById('tvToggleWebBtn'),
      tvFavoriteBtn: document.getElementById('tvFavoriteBtn'),
      tvWebsiteBtn: document.getElementById('tvWebsiteBtn'),
      tvCloseBtn: document.getElementById('tvCloseBtn'),

      // Menú OSD de Opciones Técnicas TV (Blackmagic Camera OS)
      tvOptionsOsd: document.getElementById('tvOptionsOsd'),
      tvOptionsBackdrop: document.getElementById('tvOptionsBackdrop'),
      tvOptionsCloseBtn: document.getElementById('tvOptionsCloseBtn'),
      tvOptionsStationTitle: document.getElementById('tvOptionsStationTitle'),
      tvOptSourcesTray: document.getElementById('tvOptSourcesTray'),
      tvOptSourcesCount: document.getElementById('tvOptSourcesCount'),
      tvOptQualityTray: document.getElementById('tvOptQualityTray'),
      tvOptQualityActive: document.getElementById('tvOptQualityActive'),
      tvOptActionsTray: document.getElementById('tvOptActionsTray'),
      tvOptBtnWeb: document.getElementById('tvOptBtnWeb'),
      tvOptBtnFav: document.getElementById('tvOptBtnFav'),
      tvOptBtnExitFs: document.getElementById('tvOptBtnExitFs'),
      tvBottomOptionsBtn: document.getElementById('tvBottomOptionsBtn'),

      // Elementos específicos de barra superior y drawer vertical móvil
      tvPortraitBackBtn: document.getElementById('tvPortraitBackBtn'),
      tvPortraitOptionsBtn: document.getElementById('tvPortraitOptionsBtn'),
      tvPortraitFullscreenBtn: document.getElementById('tvPortraitFullscreenBtn'),
      tvPortraitStationBar: document.getElementById('tvPortraitStationBar'),
      tvPortraitChNum: document.getElementById('tvPortraitChNum'),
      tvPortraitChTitle: document.getElementById('tvPortraitChTitle'),
      tvPortraitChSub: document.getElementById('tvPortraitChSub'),

      // Overlay de Guía en Pantalla Completa
      zappingFullscreenOverlay: document.getElementById('zappingFullscreenOverlay'),
      zappingFsChannelList: document.getElementById('zappingFsChannelList'),

      // Controles Inferiores TV
      tvPrevChannelBtn: document.getElementById('tvPrevChannelBtn'),
      tvPlayBtn: document.getElementById('tvPlayBtn'),
      tvNextChannelBtn: document.getElementById('tvNextChannelBtn'),
      tvMuteBtn: document.getElementById('tvMuteBtn'),
      tvVolumeSlider: document.getElementById('tvVolumeSlider'),
      tvPipBtn: document.getElementById('tvPipBtn'),
      tvFullscreenBtn: document.getElementById('tvFullscreenBtn'),

      // Barra de Radio Persistente
      radioBar: document.getElementById('radioPersistentBar'),
      radioLogo: document.getElementById('radioBarLogo'),
      radioTitle: document.getElementById('radioBarTitle'),
      radioSubtitle: document.getElementById('radioBarSubtitle'),
      radioPlayBtn: document.getElementById('radioPlayBtn'),
      radioMuteBtn: document.getElementById('radioMuteBtn'),
      radioVolumeSlider: document.getElementById('radioVolumeSlider'),
      radioCloseBtn: document.getElementById('radioCloseBtn'),
      radioVisualizerCanvas: document.getElementById('audioVisualizerCanvas'),
      radioFavoriteBtn: document.getElementById('radioFavoriteBtn'),

      // Reproductor Móvil de Radio Estilo Spotify / Apple Music
      radioSectionContainer: document.getElementById('radioSectionContainer'),
      radioAmbientBackdrop: document.getElementById('radioAmbientBackdrop'),
      radioActiveCountBadge: document.getElementById('radioActiveCountBadge'),
      radioBigArtwork: document.getElementById('radioBigArtwork'),
      radioArtworkGlow: document.getElementById('radioArtworkGlow'),
      radioLiveTitle: document.getElementById('radioLiveTitle'),
      radioLiveArtist: document.getElementById('radioLiveArtist'),
      radioLiveStationName: document.getElementById('radioLiveStationName'),
      radioLiveFreq: document.getElementById('radioLiveFreq'),
      radioBigFavBtn: document.getElementById('radioBigFavBtn'),
      radioBigVisualizerCanvas: document.getElementById('radioBigVisualizerCanvas'),
      radioBigPrevBtn: document.getElementById('radioBigPrevBtn'),
      radioBigPlayBtn: document.getElementById('radioBigPlayBtn'),
      radioBigPlayIcon: document.getElementById('radioBigPlayIcon'),
      radioBigNextBtn: document.getElementById('radioBigNextBtn'),
      radioQuickScrollTray: document.getElementById('radioQuickScrollTray'),

      // Reproductor de Pantalla Completa de Radios FM (Blackmagic OS / Spotify)
      radioFullscreenView: document.getElementById('radioFullscreenView'),
      radioFsBackBtn: document.getElementById('radioFsBackBtn'),
      radioFsCurrentIndex: document.getElementById('radioFsCurrentIndex'),
      radioFsTotalCount: document.getElementById('radioFsTotalCount'),
      radioFsArtwork: document.getElementById('radioFsArtwork'),
      radioFsSpectrumBars: document.getElementById('radioFsSpectrumBars'),
      radioFsBitrateTag: document.getElementById('radioFsBitrateTag'),
      radioFsFreqDial: document.getElementById('radioFsFreqDial'),
      radioFsGenrePill: document.getElementById('radioFsGenrePill'),
      radioFsStatusPill: document.getElementById('radioFsStatusPill'),
      radioFsStationName: document.getElementById('radioFsStationName'),
      radioFsTrackTitle: document.getElementById('radioFsTrackTitle'),
      radioFsTrackArtist: document.getElementById('radioFsTrackArtist'),
      radioFsCityVal: document.getElementById('radioFsCityVal'),
      radioFsCoverageVal: document.getElementById('radioFsCoverageVal'),
      radioFsWebsiteVal: document.getElementById('radioFsWebsiteVal'),
      radioFsDescVal: document.getElementById('radioFsDescVal'),
      radioFsPrevBtn: document.getElementById('radioFsPrevBtn'),
      radioFsPlayBtn: document.getElementById('radioFsPlayBtn'),
      radioFsPlayIcon: document.getElementById('radioFsPlayIcon'),
      radioFsPlayText: document.getElementById('radioFsPlayText'),
      radioFsNextBtn: document.getElementById('radioFsNextBtn'),
      radioFsVolText: document.getElementById('radioFsVolText'),
      radioFsTrayScroll: document.getElementById('radioFsTrayScroll')
    };

    // Estado del reproductor de radios en pantalla completa
    this.isRadioFullscreen = false;

    // Estado del Menú OSD de Opciones Técnicas TV
    this.isOptionsOsdOpen = false;
    this.optionsFocusIndex = 0;

    // Control de inactividad de 5s en pantalla completa (ocultar barras)
    this.fsControlsTimer = null;
    this.isFsControlsHidden = false;

    // Visualizador de Audio
    this.visualizerAnimationId = null;

    // Anclar elemento de audio al DOM para evitar que iOS Safari lo suspenda por recolección de basura
    try {
      if (typeof document !== 'undefined' && document.body && !document.getElementById('radioAudioPlayer')) {
        this.audioElement.style.position = 'fixed';
        this.audioElement.style.bottom = '-9999px';
        this.audioElement.style.opacity = '0';
        this.audioElement.style.pointerEvents = 'none';
        document.body.appendChild(this.audioElement);
      }
    } catch (e) {}

    this.initAudioEvents();
    this.initTvEvents();
    this.initZappingSidebarEvents();
    this.initFullscreenListeners();
    this.initRemoteKeyNavigation();
    this.initMediaSessionHandlers();
    this.initMobileRadioPlayer();
    this.initFullscreenRadioEvents();
    this.initSystemInterruptionListeners();
    this.initHlsLibrary();
    window.AntenaSurPlayer = this;
  }

  async initHlsLibrary() {
    if (window.Hls) return;
    try {
      const script = document.createElement('script');
      script.src = './js/hls.min.js';
      script.async = true;
      document.head.appendChild(script);
    } catch (e) {
      console.warn('No se pudo cargar Hls.js local:', e);
    }
  }

  /* ========================================================================
     INICIALIZACIÓN DE GUÍA ZAPPING Y LISTAS DE ESTACIONES
     ======================================================================== */

  setStationsData(allStations) {
    if (!Array.isArray(allStations)) return;
    this.tvStations = allStations
      .filter(s => s.type === 'tv')
      .sort((a, b) => {
        if (typeof a.channelNumber === 'number' && typeof b.channelNumber === 'number') {
          return a.channelNumber - b.channelNumber;
        }
        return a.name.localeCompare(b.name, 'es', { sensitivity: 'base' });
      });
    this.radioStations = allStations.filter(s => s.type === 'radio');
    this.renderTvGuide();
    this.renderRadioQuickScrollTray();
    this.renderFullscreenRadioTray();
  }

  initZappingSidebarEvents() {
    // Cerrar menú lateral flotante en pantalla completa al hacer clic sobre el video (fuera del sidebar)
    if (this.dom.zappingPlayerArea) {
      this.dom.zappingPlayerArea.addEventListener('click', (e) => {
        if (this.isFullscreenActive() && this.isFsSidebarOpen()) {
          if (!e.target.closest('#zappingSidebar')) {
            this.toggleFullscreenSidebar(false);
          }
        }
      });
    }

    // Botón para colapsar/expandir barra lateral
    if (this.dom.zappingSidebarToggleBtn) {
      this.dom.zappingSidebarToggleBtn.addEventListener('click', () => {
        this.toggleSidebar();
      });
    }

    // Botón para salir/cerrar guía en sidebar
    const sidebarCloseBtn = document.getElementById('zappingSidebarCloseBtn');
    if (sidebarCloseBtn) {
      sidebarCloseBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (this.isFullscreenActive()) {
          this.toggleFullscreenSidebar(false);
        } else {
          this.closeTvPlayer();
        }
      });
    }

    // Botón ATRAS en barra superior de modo vertical móvil
    if (this.dom.tvPortraitBackBtn) {
      this.dom.tvPortraitBackBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (this.isFullscreenActive()) {
          this.toggleFullscreenSidebar(false);
        } else {
          this.closeTvPlayer();
        }
      });
    }

    // Botón Opciones / Ajustes en barra superior de modo vertical móvil
    if (this.dom.tvPortraitOptionsBtn) {
      this.dom.tvPortraitOptionsBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.openTvOptionsMenu();
      });
    }

    // Botón Pantalla Completa en barra superior de modo vertical móvil
    if (this.dom.tvPortraitFullscreenBtn) {
      this.dom.tvPortraitFullscreenBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.toggleFullscreen();
      });
    }

    // Botón hamburguesa en HUD superior para abrir/cerrar la guía
    if (this.dom.zappingOpenGuideBtn) {
      this.dom.zappingOpenGuideBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (this.isFullscreenActive()) {
          this.toggleFullscreenSidebar();
        } else {
          this.toggleSidebar();
        }
      });
    }

    // Delegación de clics en la Guía Lateral (Rendimiento 60 FPS sin lag de dblclick)
    if (this.dom.zappingChannelList) {
      this.dom.zappingChannelList.addEventListener('click', (e) => {
        const item = e.target.closest('.zapping-ch-item');
        if (!item) return;
        const id = item.getAttribute('data-id');
        const idx = parseInt(item.getAttribute('data-index'), 10);
        if (!isNaN(idx)) this.sidebarFocusIndex = idx;

        this.dom.zappingChannelList.querySelectorAll('.zapping-ch-item.is-dpad-focused').forEach(el => el.classList.remove('is-dpad-focused'));
        item.classList.add('is-dpad-focused');

        const isCurrentlyActive = this.currentStation && (this.currentStation.id === id);
        if (isCurrentlyActive) {
          if (this.isFullscreenActive()) {
            this.toggleFullscreenSidebar(false);
          } else {
            this.enterFullscreenCrossBrowser();
          }
        } else {
          const st = this.tvStations.find(s => s.id === id);
          if (st) {
            this.playTv(st);
            if (this.isFullscreenActive()) {
              this.toggleFullscreenSidebar(false);
            }
          }
        }
      });
    }

    // Delegación central en Guía Overlay de Pantalla Completa
    if (this.dom.zappingFsChannelList) {
      this.dom.zappingFsChannelList.addEventListener('click', (e) => {
        const item = e.target.closest('.zapping-ch-item');
        if (!item) return;
        const id = item.getAttribute('data-id');
        const st = this.tvStations.find(s => s.id === id);
        if (st && (!this.currentStation || this.currentStation.id !== id)) {
          this.playTv(st);
        }
        this.hideFullscreenGuide();
        this.toggleFullscreenSidebar(false);
      });
    }

    // Botón cerrar (✕) en overlay de pantalla completa
    const fsCloseBtn = document.getElementById('fsOverlayCloseBtn');
    if (fsCloseBtn) {
      fsCloseBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.hideFullscreenGuide();
        this.toggleFullscreenSidebar(false);
      });
    }

    // Botón atrás (◀) en overlay de pantalla completa
    const fsBackBtn = document.getElementById('fsOverlayBackBtn');
    if (fsBackBtn) {
      fsBackBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.hideFullscreenGuide();
        this.toggleFullscreenSidebar(false);
      });
    }

    // Buscador interactivo en overlay de pantalla completa
    const fsSearchInput = document.getElementById('fsOverlaySearchInput');
    if (fsSearchInput) {
      fsSearchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        this.filterFsGuide(query);
      });
    }

    // Mantener la guía abierta y controles activos mientras el cursor está en el overlay
    if (this.dom.zappingFullscreenOverlay) {
      this.dom.zappingFullscreenOverlay.addEventListener('mousemove', (e) => {
        e.stopPropagation();
        this.clearFsControlsInactivityTimer();
        if (this.fsOverlayTimeout) {
          clearTimeout(this.fsOverlayTimeout);
          this.fsOverlayTimeout = null;
        }
      });
      this.dom.zappingFullscreenOverlay.addEventListener('mouseenter', () => {
        this.clearFsControlsInactivityTimer();
        if (this.fsOverlayTimeout) {
          clearTimeout(this.fsOverlayTimeout);
          this.fsOverlayTimeout = null;
        }
      });
      this.dom.zappingFullscreenOverlay.addEventListener('mouseleave', () => {
        if (this.isGuideOverlayVisible) {
          this.resetFsOverlayInactivityTimer();
        }
      });
      this.dom.zappingFullscreenOverlay.addEventListener('click', (e) => {
        e.stopPropagation();
      });
    }

    // Cerrar la guía de pantalla completa al hacer clic fuera del panel
    if (this.dom.zappingPlayerArea) {
      this.dom.zappingPlayerArea.addEventListener('click', (e) => {
        if (this.isGuideOverlayVisible) {
          if (!e.target.closest('#zappingFullscreenOverlay') && !e.target.closest('#zappingOpenGuideBtn')) {
            this.hideFullscreenGuide();
          }
        }
      });
    }

    // Buscador rápido dentro de la guía Zapping
    if (this.dom.zappingSearchInput) {
      this.dom.zappingSearchInput.addEventListener('input', (e) => {
        this.currentZappingQuery = e.target.value.toLowerCase().trim();
        this.renderTvGuide();
      });
    }

  }

  toggleSidebar(forceState = null) {
    if (!this.dom.zappingSidebar) return;
    // En modo normal (video reducido), la lista de canales es fija y nunca se contrae
    if (!this.isFullscreenActive()) {
      this.dom.zappingSidebar.classList.remove('is-collapsed');
      return;
    }
    const shouldShow = forceState !== null ? forceState : this.dom.zappingSidebar.classList.contains('is-collapsed');
    if (shouldShow) {
      this.dom.zappingSidebar.classList.remove('is-collapsed');
    } else {
      this.dom.zappingSidebar.classList.add('is-collapsed');
    }
  }

  toggleFullscreenSidebar(forceShow = null) {
    if (!this.dom.zappingSidebar) return;
    const isCurrentlyOpen = this.dom.zappingSidebar.classList.contains('is-open-fs');
    const shouldOpen = forceShow !== null ? forceShow : !isCurrentlyOpen;

    if (shouldOpen) {
      this.dom.zappingSidebar.classList.add('is-open-fs');
      this.dom.zappingSidebar.classList.remove('is-collapsed');
      if (this.currentStation) {
        this.syncActiveChannelHighlight(this.currentStation.id);
      }
      this.focusCurrentSidebarItem();
    } else {
      this.dom.zappingSidebar.classList.remove('is-open-fs');
      if (this.isFullscreenActive()) {
        this.dom.zappingSidebar.classList.add('is-collapsed');
      }
    }
  }

  isFsSidebarOpen() {
    return Boolean(this.dom.zappingSidebar && this.dom.zappingSidebar.classList.contains('is-open-fs'));
  }

  syncActiveChannelHighlight(stationId) {
    if (!stationId) return;
    const containers = [this.dom.zappingChannelList, this.dom.zappingFsChannelList].filter(Boolean);
    containers.forEach(container => {
      const prev = container.querySelector('.zapping-ch-item.is-playing');
      if (prev && prev.getAttribute('data-id') !== stationId) {
        prev.classList.remove('is-playing', 'is-active');
      }
      const next = container.querySelector(`.zapping-ch-item[data-id="${stationId}"]`);
      if (next) {
        next.classList.add('is-playing', 'is-active');
        const idx = parseInt(next.getAttribute('data-index'), 10);
        if (!isNaN(idx) && container === this.dom.zappingChannelList) {
          this.sidebarFocusIndex = idx;
        }
        try {
          next.scrollIntoView({ block: 'nearest', inline: 'center' });
        } catch (e) {}
      }
    });
  }

  renderTvGuide() {
    if (!this.dom.zappingChannelList) return;

    let filtered = this.tvStations;

    if (this.currentZappingQuery) {
      const q = this.currentZappingQuery;
      filtered = filtered.filter(s => {
        const name = (s.name || '').toLowerCase();
        const city = (s.city || '').toLowerCase();
        const chNum = (s.channelNumber ? s.channelNumber.toString() : '');
        return name.includes(q) || city.includes(q) || chNum === q;
      });
    }

    if (this.dom.zappingChCount) {
      this.dom.zappingChCount.textContent = `${filtered.length} Canales`;
    }

    const currentId = this.currentStation ? this.currentStation.id : null;

    // Renderizar lista en Sidebar
    let sidebarHtml = '';
    filtered.forEach((station, idx) => {
      const chNum = station.channelNumber ? String(station.channelNumber).padStart(2, '0') : String(idx + 1).padStart(2, '0');
      const isPlaying = station.id === currentId;
      const sourcesPill = (station.sources && station.sources.length > 1)
        ? `<span class="zapping-sources-pill" title="${station.sources.length} fuentes de reproducción disponibles">${station.sources.length} Fts</span>`
        : '';
      const subText = station.city ? `${station.city} • Chile` : 'Chile';

      sidebarHtml += `
        <button class="zapping-ch-item ${isPlaying ? 'is-playing is-active is-dpad-focused' : ''}" data-id="${station.id}" data-index="${idx}" tabindex="0">
          <span class="zapping-ch-num">${chNum}</span>
          <img class="zapping-ch-logo" src="${station.logo || './img/logos/default-channel.svg'}" alt="${station.name}" loading="lazy" onerror="this.onerror=null; this.src='./img/logos/default-channel.svg';">
          <div class="zapping-ch-text">
            <span class="zapping-ch-title">${station.name} ${sourcesPill}</span>
            <span class="zapping-ch-sub">${subText}</span>
          </div>
          <span class="zapping-live-pill"><span class="pulse-dot"></span> EN VIVO</span>
        </button>
      `;
    });

    this.dom.zappingChannelList.innerHTML = sidebarHtml || `<div style="padding: 20px; color: var(--text-muted); font-size: 0.85rem; text-align: center;">No se encontraron canales</div>`;

    // Renderizar en Overlay de Pantalla Completa
    if (this.dom.zappingFsChannelList) {
      this.dom.zappingFsChannelList.innerHTML = sidebarHtml;
    }

    // Scroll al canal activo en el sidebar
    const activeItem = this.dom.zappingChannelList.querySelector('.zapping-ch-item.is-playing');
    if (activeItem) {
      const idx = parseInt(activeItem.getAttribute('data-index'), 10);
      if (!isNaN(idx)) this.sidebarFocusIndex = idx;
      try {
        activeItem.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      } catch (e) {}
    } else {
      this.dom.zappingChannelList.scrollTop = 0;
      if (this.dom.zappingFsChannelList) {
        this.dom.zappingFsChannelList.scrollTop = 0;
      }
    }
  }

  /* ========================================================================
     OVERLAY DE GUÍA EN PANTALLA COMPLETA (CONTROL REMOTO D-PAD)
     ======================================================================== */

  showFullscreenGuide() {
    if (!this.dom.zappingFullscreenOverlay) return;
    this.clearFsControlsInactivityTimer();
    this.showFsControls();
    this.dom.zappingFullscreenOverlay.classList.add('is-visible');
    this.isGuideOverlayVisible = true;

    // Resaltar botón de guía en el HUD superior
    if (this.dom.zappingOpenGuideBtn) {
      this.dom.zappingOpenGuideBtn.classList.add('is-active');
    }

    // Asegurarse de que los canales estén renderizados
    if (!this.dom.zappingFsChannelList || this.dom.zappingFsChannelList.children.length === 0) {
      this.renderTvGuide();
    }

    // Limpiar buscador para mostrar todos los canales al abrir
    const fsSearchInput = document.getElementById('fsOverlaySearchInput');
    if (fsSearchInput) {
      fsSearchInput.value = '';
      this.filterFsGuide('');
    }

    // Sincronizar foco con el canal activo
    const currentId = this.currentStation ? this.currentStation.id : null;
    const items = this.dom.zappingFsChannelList ? this.dom.zappingFsChannelList.querySelectorAll('.zapping-ch-item') : null;
    if (items && items.length > 0) {
      items.forEach((it, idx) => {
        it.classList.remove('is-dpad-focused');
        if (it.getAttribute('data-id') === currentId) {
          this.dpadFocusIndex = idx;
          it.classList.add('is-dpad-focused');
          it.scrollIntoView({ block: 'center', behavior: 'smooth' });
        }
      });
    }

    this.resetFsOverlayInactivityTimer();
  }

  hideFullscreenGuide() {
    if (!this.dom.zappingFullscreenOverlay) return;
    this.dom.zappingFullscreenOverlay.classList.remove('is-visible');
    this.isGuideOverlayVisible = false;

    if (this.dom.zappingOpenGuideBtn) {
      this.dom.zappingOpenGuideBtn.classList.remove('is-active');
    }

    if (this.fsOverlayTimeout) {
      clearTimeout(this.fsOverlayTimeout);
      this.fsOverlayTimeout = null;
    }
    if (this.isFullscreenActive()) {
      this.resetFsControlsInactivityTimer();
    }
  }

  resetFsOverlayInactivityTimer() {
    if (this.fsOverlayTimeout) clearTimeout(this.fsOverlayTimeout);
    this.fsOverlayTimeout = setTimeout(() => {
      this.hideFullscreenGuide();
    }, 6000);
  }

  filterFsGuide(query) {
    if (!this.dom.zappingFsChannelList) return;
    const items = this.dom.zappingFsChannelList.querySelectorAll('.zapping-ch-item');
    let matchCount = 0;
    items.forEach(it => {
      const titleEl = it.querySelector('.zapping-ch-title');
      const title = (titleEl && titleEl.textContent) ? titleEl.textContent.toLowerCase() : '';
      const subEl = it.querySelector('.zapping-ch-sub');
      const sub = (subEl && subEl.textContent) ? subEl.textContent.toLowerCase() : '';
      const numEl = it.querySelector('.zapping-ch-num');
      const num = (numEl && numEl.textContent) ? numEl.textContent.toLowerCase() : '';
      const match = !query || title.includes(query) || sub.includes(query) || num.includes(query);
      it.style.display = match ? 'flex' : 'none';
      if (match) matchCount++;
    });

    let emptyMsg = this.dom.zappingFsChannelList.querySelector('.fs-empty-msg');
    if (matchCount === 0) {
      if (!emptyMsg) {
        emptyMsg = document.createElement('div');
        emptyMsg.className = 'fs-empty-msg';
        emptyMsg.style.cssText = 'padding: 24px 16px; color: var(--text-muted); font-size: 0.86rem; text-align: center;';
        this.dom.zappingFsChannelList.appendChild(emptyMsg);
      }
      emptyMsg.textContent = `No se encontraron canales para "${query}"`;
      emptyMsg.style.display = 'block';
    } else if (emptyMsg) {
      emptyMsg.style.display = 'none';
    }

    this.resetFsOverlayInactivityTimer();
  }

  navigateOverlayGuide(direction) {
    if (!this.dom.zappingFsChannelList) return;
    const items = this.dom.zappingFsChannelList.querySelectorAll('.zapping-ch-item');
    if (!items || items.length === 0) return;

    if (items[this.dpadFocusIndex] && items[this.dpadFocusIndex].classList) {
      items[this.dpadFocusIndex].classList.remove('is-dpad-focused');
    }

    this.dpadFocusIndex += direction;
    if (this.dpadFocusIndex < 0) this.dpadFocusIndex = items.length - 1;
    if (this.dpadFocusIndex >= items.length) this.dpadFocusIndex = 0;

    const focusedItem = items[this.dpadFocusIndex];
    if (focusedItem) {
      focusedItem.classList.add('is-dpad-focused');
      try {
        focusedItem.scrollIntoView({ block: 'nearest' });
      } catch (e) {}
    }

    this.resetFsOverlayInactivityTimer();
  }

  selectFocusedOverlayChannel() {
    if (!this.dom.zappingFsChannelList) return;
    const items = this.dom.zappingFsChannelList.querySelectorAll('.zapping-ch-item');
    const focusedItem = items[this.dpadFocusIndex];
    if (focusedItem) {
      const id = focusedItem.getAttribute('data-id');
      const isCurrentlyActive = this.currentStation && (this.currentStation.id === id);
      if (isCurrentlyActive) {
        this.hideFullscreenGuide();
      } else {
        const st = this.tvStations.find(s => s.id === id);
        if (st) {
          this.playTv(st);
          this.hideFullscreenGuide();
        }
      }
    }
  }

  /* ========================================================================
     NAVEGACIÓN EN GUÍA LATERAL ZAPPING (SIN SINTONIZACIÓN INMEDIATA)
     ======================================================================== */

  navigateSidebarList(direction) {
    if (!this.dom.zappingChannelList) return;
    const items = this.dom.zappingChannelList.querySelectorAll('.zapping-ch-item');
    if (!items || items.length === 0) return;

    if (items[this.sidebarFocusIndex] && items[this.sidebarFocusIndex].classList) {
      items[this.sidebarFocusIndex].classList.remove('is-dpad-focused');
    }

    this.sidebarFocusIndex += direction;
    if (this.sidebarFocusIndex < 0) this.sidebarFocusIndex = items.length - 1;
    if (this.sidebarFocusIndex >= items.length) this.sidebarFocusIndex = 0;

    const focusedItem = items[this.sidebarFocusIndex];
    if (focusedItem) {
      focusedItem.classList.add('is-dpad-focused');
      try {
        focusedItem.focus({ preventScroll: true });
      } catch (e) {}
      try {
        focusedItem.scrollIntoView({ block: 'nearest' });
      } catch (e) {}
    }
  }

  selectFocusedSidebarChannel() {
    if (!this.dom.zappingChannelList) return;
    const items = this.dom.zappingChannelList.querySelectorAll('.zapping-ch-item');
    if (!items || items.length === 0) return;

    const focusedItem = items[this.sidebarFocusIndex];
    if (focusedItem) {
      const id = focusedItem.getAttribute('data-id');
      const isCurrentlyActive = this.currentStation && (this.currentStation.id === id);
      if (isCurrentlyActive) {
        // Si el canal ya está sintonizado / marcado, pasa a pantalla completa o cierra overlay
        if (this.isFullscreenActive()) {
          this.toggleFullscreenSidebar(false);
        } else {
          this.enterFullscreenCrossBrowser();
        }
      } else {
        const st = this.tvStations.find(s => s.id === id);
        if (st) {
          this.playTv(st);
          if (this.isFullscreenActive()) {
            this.toggleFullscreenSidebar(false);
          }
        }
      }
    }
  }

  focusCurrentSidebarItem() {
    if (!this.dom.zappingChannelList) return;
    const items = this.dom.zappingChannelList.querySelectorAll('.zapping-ch-item');
    if (!items || items.length === 0) return;

    if (this.sidebarFocusIndex < 0 || this.sidebarFocusIndex >= items.length) {
      this.sidebarFocusIndex = 0;
    }

    items.forEach(el => el.classList.remove('is-dpad-focused'));
    const focusedItem = items[this.sidebarFocusIndex];
    if (focusedItem) {
      focusedItem.classList.add('is-dpad-focused');
      try {
        focusedItem.focus({ preventScroll: true });
      } catch (e) {}
      try {
        focusedItem.scrollIntoView({ block: 'center', inline: 'nearest' });
      } catch (e) {}
    }
  }

  /* ========================================================================
     REPRODUCTOR DE TELEVISIÓN (VISTA ZAPPING INTEGRADA)
     ======================================================================== */

  initTvEvents() {
    if (!this.dom.tvVideo) return;

    this.dom.tvVideo.volume = this.volume;
    if (this.dom.tvVolumeSlider) this.dom.tvVolumeSlider.value = this.volume;

    // Botón Salir / Cerrar TV
    if (this.dom.tvCloseBtn) {
      this.dom.tvCloseBtn.addEventListener('click', () => this.closeTvPlayer());
    }

    // Botón Play / Pause
    if (this.dom.tvPlayBtn) {
      this.dom.tvPlayBtn.addEventListener('click', () => {
        this.togglePlayPause();
      });
    }

    // Botón Zapping Anterior
    if (this.dom.tvPrevChannelBtn) {
      this.dom.tvPrevChannelBtn.addEventListener('click', () => this.zapPrevious());
    }

    // Botón Zapping Siguiente
    if (this.dom.tvNextChannelBtn) {
      this.dom.tvNextChannelBtn.addEventListener('click', () => this.zapNext());
    }

    // Eventos del Elemento Video
    this.dom.tvVideo.addEventListener('play', () => {
      this.isPlaying = true;
      this.updateTvPlayIcon(true);
      this.clearConnectionWatchdog();
      // NO ocultar tvLoading en 'play' para no exponer la superficie vacía antes de decodificar cuadros
    });

    this.dom.tvVideo.addEventListener('playing', () => {
      this.clearConnectionWatchdog();
      if (this.dom.tvVideo) this.dom.tvVideo.style.opacity = '1';
      if (this.dom.tvLoading) this.dom.tvLoading.style.display = 'none';
      if (this.dom.tvFallbackOverlay) this.dom.tvFallbackOverlay.classList.add('is-hidden');
    });

    this.dom.tvVideo.addEventListener('pause', () => {
      // Si la pausa es producida automáticamente por el navegador al salir de pantalla completa
      // o por reflow/rotación y el usuario NO presionó pausar explícitamente, reanudar al instante
      if (this.currentStation && this.currentStation.type === 'tv' && (this._isExitingFullscreen || !this._userRequestedPause)) {
        console.log('[TV] Interceptada pausa automática del navegador; reanudando transmisión al instante');
        if (this.dom.tvVideo.paused) {
          const p = this.dom.tvVideo.play();
          if (p !== undefined) {
            p.catch(e => console.warn('[TV] Error al reanudar tras pausa automática:', e));
          }
        }
        this.isPlaying = true;
        this.updateTvPlayIcon(true);
        return;
      }

      this.isPlaying = false;
      this.updateTvPlayIcon(false);
    });

    this.dom.tvVideo.addEventListener('waiting', () => {
      if (this.dom.tvLoading) this.dom.tvLoading.style.display = 'flex';
    });

    this.dom.tvVideo.addEventListener('loadeddata', () => {
      this.clearConnectionWatchdog();
      if (this.dom.tvVideo) this.dom.tvVideo.style.opacity = '1';
      if (this.dom.tvLoading) this.dom.tvLoading.style.display = 'none';
      if (this.dom.tvFallbackOverlay) this.dom.tvFallbackOverlay.classList.add('is-hidden');
    });

    this.dom.tvVideo.addEventListener('canplay', () => {
      this.clearConnectionWatchdog();
      if (this.dom.tvVideo) this.dom.tvVideo.style.opacity = '1';
      if (this.dom.tvLoading) this.dom.tvLoading.style.display = 'none';
      if (this.dom.tvFallbackOverlay) this.dom.tvFallbackOverlay.classList.add('is-hidden');
    });

    // Control de pantalla completa nativa en dispositivos móviles (iOS Safari / Android)
    this.dom.tvVideo.addEventListener('webkitbeginfullscreen', () => {
      console.log('[TV] webkitbeginfullscreen detectado');
      if (this.dom.zappingPlayerArea) {
        this.dom.zappingPlayerArea.classList.add('is-fullscreen');
      }
      if (this.dom.tvZappingView) {
        this.dom.tvZappingView.classList.add('is-fullscreen-mode');
      }
      this.updateFullscreenIcon();
    });

    this.dom.tvVideo.addEventListener('webkitendfullscreen', () => {
      console.log('[TV] webkitendfullscreen detectado (salida de pantalla completa móvil)');
      if (!this._isExitingFullscreen) {
        this.exitFullscreenCrossBrowser();
      }
      if (this.dom.tvVideo && this.currentStation && this.currentStation.type === 'tv' && this.dom.tvVideo.paused) {
        const p = this.dom.tvVideo.play();
        if (p !== undefined) {
          p.catch(e => console.warn('[TV] Error reanudando video tras webkitendfullscreen:', e));
        }
      }
      this.isPlaying = true;
      this.updateTvPlayIcon(true);
    });

    // Mute / Volumen
    if (this.dom.tvMuteBtn) {
      this.dom.tvMuteBtn.addEventListener('click', () => this.toggleMute());
    }
    if (this.dom.tvVolumeSlider) {
      this.dom.tvVolumeSlider.addEventListener('input', (e) => {
        this.setVolume(parseFloat(e.target.value));
      });
    }

    // Picture-in-Picture
    if (this.dom.tvPipBtn) {
      this.dom.tvPipBtn.addEventListener('click', async () => {
        try {
          if (document.pictureInPictureElement) {
            await document.exitPictureInPicture();
          } else if (this.dom.tvVideo.requestPictureInPicture) {
            await this.dom.tvVideo.requestPictureInPicture();
          }
        } catch (e) {
          console.warn('PiP no disponible:', e);
        }
      });
    }

    // Pantalla completa
    if (this.dom.tvFullscreenBtn) {
      this.dom.tvFullscreenBtn.addEventListener('click', () => this.toggleFullscreen());
    }

    // Botón Alternar Reproductor Web / HLS
    if (this.dom.tvToggleWebBtn) {
      this.dom.tvToggleWebBtn.addEventListener('click', () => this.toggleWebPlayerMode());
    }

    // Botón Fallback a Reproductor Web
    if (this.dom.tvWebFallbackBtn) {
      this.dom.tvWebFallbackBtn.addEventListener('click', () => this.switchToWebPlayer());
    }

    // Selector de Calidad
    if (this.dom.tvQualitySelect) {
      this.dom.tvQualitySelect.addEventListener('change', (e) => {
        const levelIndex = parseInt(e.target.value, 10);
        if (this.hls) {
          this.hls.currentLevel = levelIndex;
        }
      });
    }

    // Selector Multi-Fuente (Accesible en Pantalla Completa y Modo Zapping)
    if (this.dom.tvSourceSelect) {
      this.dom.tvSourceSelect.addEventListener('change', (e) => {
        const sourceIndex = parseInt(e.target.value, 10);
        this.switchTvSource(sourceIndex);
      });
    }

    // Botón Siguiente Fuente en Overlay de Fallback
    if (this.dom.tvNextSourceBtn) {
      this.dom.tvNextSourceBtn.addEventListener('click', () => {
        this.nextTvSource();
      });
    }

    // Reintentos manuales
    if (this.dom.tvRetryBtn) {
      this.dom.tvRetryBtn.addEventListener('click', () => {
        if (this.currentStation) this.playTv(this.currentStation, false);
      });
    }

    if (this.dom.tvUseProxyBtn) {
      this.dom.tvUseProxyBtn.addEventListener('click', () => {
        if (this.currentStation) this.playTv(this.currentStation, true);
      });
    }

    if (this.dom.tvFavoriteBtn) {
      this.dom.tvFavoriteBtn.addEventListener('click', () => {
        if (this.currentStation) {
          const isFav = this.fav.toggleFavorite(this.currentStation.id);
          this.updateFavoriteButtons(this.currentStation.id, isFav);
        }
      });
    }

    // Opciones OSD TV (Blackmagic OS)
    if (this.dom.tvBottomOptionsBtn) {
      this.dom.tvBottomOptionsBtn.addEventListener('click', () => {
        this.toggleTvOptionsMenu();
      });
    }

    if (this.dom.tvOptionsCloseBtn) {
      this.dom.tvOptionsCloseBtn.addEventListener('click', () => {
        this.closeTvOptionsMenu();
      });
    }

    // Soporte para arrastre horizontal con mouse en el carrusel de canales
    if (this.dom.zappingChannelList && !this._tvListDragInitialized) {
      this._tvListDragInitialized = true;
      const list = this.dom.zappingChannelList;
      let isDown = false;
      let startX = 0;
      let scrollLeft = 0;
      list.addEventListener('mousedown', (e) => {
        if (list.scrollWidth <= list.clientWidth) return;
        isDown = true;
        startX = e.pageX - list.offsetLeft;
        scrollLeft = list.scrollLeft;
      });
      list.addEventListener('mouseleave', () => { isDown = false; });
      list.addEventListener('mouseup', () => { isDown = false; });
      list.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        if (list.scrollWidth <= list.clientWidth) return;
        e.preventDefault();
        const x = e.pageX - list.offsetLeft;
        const walk = (x - startX) * 1.5;
        list.scrollLeft = scrollLeft - walk;
      });
    }

    if (this.dom.tvOptionsBackdrop) {
      this.dom.tvOptionsBackdrop.addEventListener('click', () => {
        this.closeTvOptionsMenu();
      });
    }

    if (this.dom.tvOptBtnWeb) {
      this.dom.tvOptBtnWeb.addEventListener('click', () => {
        this.toggleWebPlayerMode();
        this.updateTvOptionsActions();
      });
    }

    if (this.dom.tvOptBtnFav) {
      this.dom.tvOptBtnFav.addEventListener('click', () => {
        if (this.currentStation && this.fav) {
          const isFav = this.fav.toggleFavorite(this.currentStation.id);
          this.updateFavoriteButtons(this.currentStation.id, isFav);
          this.updateTvOptionsActions();
        }
      });
    }

    if (this.dom.tvOptBtnExitFs) {
      this.dom.tvOptBtnExitFs.addEventListener('click', () => {
        this.closeTvOptionsMenu();
        this.exitFullscreenCrossBrowser();
      });
    }

    // Gesto de Aceleración Rápida 2x / 3x (Estilo LibreTV / ArtPlayer)
    this.setupQuickSpeedGesture();
  }

  /**
   * Configura el gesto de aceleración rápida (Long-Press 2x / 3x estilo LibreTV / ArtPlayer)
   * En móviles mantiene presionado para acelerar a 3x; en PC acelera a 2x con clic sostenido.
   */
  setupQuickSpeedGesture() {
    if (!this.dom.zappingVideoContainer || !this.dom.tvVideo) return;

    let speedHoldTimer = null;
    let isSpeedBoosted = false;
    let originalRate = 1.0;
    const targetVideo = this.dom.tvVideo;
    const badge = this.dom.tvSpeedBadge || document.getElementById('tvSpeedBadge');
    const badgeText = this.dom.tvSpeedBadgeText || document.getElementById('tvSpeedBadgeText');

    const startSpeedBoost = (rate = 2.0) => {
      if (!this.isPlaying || !targetVideo || targetVideo.paused) return;
      isSpeedBoosted = true;
      originalRate = targetVideo.playbackRate || 1.0;
      targetVideo.playbackRate = rate;
      if (badge) {
        if (badgeText) badgeText.textContent = `⚡ ${rate}x Rápido`;
        badge.classList.remove('is-hidden');
      }
      if ('vibrate' in navigator) {
        try { navigator.vibrate(25); } catch (e) {}
      }
    };

    const stopSpeedBoost = () => {
      if (speedHoldTimer) {
        clearTimeout(speedHoldTimer);
        speedHoldTimer = null;
      }
      if (isSpeedBoosted && targetVideo) {
        targetVideo.playbackRate = originalRate || 1.0;
        isSpeedBoosted = false;
        if (badge) {
          badge.classList.add('is-hidden');
        }
      }
    };

    // Gestos táctiles en pantalla (móviles / tablets)
    this.dom.zappingVideoContainer.addEventListener('touchstart', (e) => {
      if (e.target.closest('button, select, a, input, .zapping-hud-btn, .zapping-hud-icon-btn, .zapping-btn, .zapping-ch-item')) return;
      stopSpeedBoost();
      speedHoldTimer = setTimeout(() => {
        startSpeedBoost(3.0); // 3x en móvil estilo LibreTV / ArtPlayer
      }, 400);
    }, { passive: true });

    this.dom.zappingVideoContainer.addEventListener('touchend', stopSpeedBoost, { passive: true });
    this.dom.zappingVideoContainer.addEventListener('touchcancel', stopSpeedBoost, { passive: true });

    // Gestos con ratón en PC
    this.dom.zappingVideoContainer.addEventListener('mousedown', (e) => {
      if (e.button !== 0) return; // Solo clic primario
      if (e.target.closest('button, select, a, input, .zapping-hud-btn, .zapping-hud-icon-btn, .zapping-btn, .zapping-ch-item')) return;
      stopSpeedBoost();
      speedHoldTimer = setTimeout(() => {
        startSpeedBoost(2.0); // 2x en escritorio
      }, 450);
    });

    this.dom.zappingVideoContainer.addEventListener('mouseup', stopSpeedBoost);
    this.dom.zappingVideoContainer.addEventListener('mouseleave', stopSpeedBoost);
  }

  /**
   * Sonda de latencia y estado multiorigen en vivo (Inspirado en LibreTV /api/live/probe).
   * Mide la latencia de cada fuente disponible y muestra el ping en tiempo real.
   */
  probeTvSources(station) {
    if (!station || !station.sources || station.sources.length <= 1) return;
    const sources = station.sources;

    sources.forEach((src, idx) => {
      if (!src.url) return;
      const ref = encodeURIComponent(station.website || (station.id === 'cl-tv-canal13' ? 'https://www.13.cl/' : ''));
      const probeUrl = `/api/live/probe?url=${encodeURIComponent(src.url)}&ref=${ref}`;

      fetch(probeUrl)
        .then(res => res.json())
        .then(data => {
          if (!this.sourceLatencies) this.sourceLatencies = {};
          this.sourceLatencies[src.url] = data;

          if (this.currentStation && this.currentStation.id === station.id) {
            // Actualizar <option> en selector nativo
            if (this.dom.tvSourceSelect) {
              const opt = this.dom.tvSourceSelect.querySelector(`option[value="${idx}"]`);
              if (opt) {
                const baseName = src.name || `Fuente ${idx + 1}`;
                if (data.ok && data.latencyMs > 0) {
                  const badge = data.latencyMs < 350 ? '🟢' : (data.latencyMs < 800 ? '🟡' : '🟠');
                  opt.textContent = `📡 ${baseName} • ${badge} ${data.latencyMs}ms`;
                } else {
                  opt.textContent = `📡 ${baseName} • 🔴 Desconectada`;
                }
              }
            }

            // Actualizar botón en menú OSD de Ajustes si está abierto
            if (this.isOptionsOsdOpen && this.dom.tvOptSourcesTray) {
              const btn = this.dom.tvOptSourcesTray.querySelector(`button[data-index="${idx}"]`);
              if (btn) {
                let pingSpan = btn.querySelector('.source-ping-badge');
                const badge = data.ok ? (data.latencyMs < 350 ? '🟢' : (data.latencyMs < 800 ? '🟡' : '🟠')) : '🔴';
                const pingText = data.ok ? `${data.latencyMs}ms` : 'Offline';
                if (!pingSpan) {
                  pingSpan = document.createElement('span');
                  pingSpan.className = 'source-ping-badge';
                  pingSpan.style.fontSize = '0.78rem';
                  pingSpan.style.opacity = '0.85';
                  pingSpan.style.marginLeft = '6px';
                  btn.appendChild(pingSpan);
                }
                pingSpan.textContent = `${badge} ${pingText}`;
              }
            }
          }
        })
        .catch(() => {});
    });
  }

  /* ========================================================================
     MENÚ OSD DE AJUSTES TÉCNICOS (BLACKMAGIC CAMERA OS)
     Permite navegar con el control remoto por fuentes, calidades y opciones
     ======================================================================== */

  openTvOptionsMenu() {
    if (!this.dom.tvOptionsOsd) return;
    this.isOptionsOsdOpen = true;
    this.dom.tvOptionsOsd.classList.remove('is-hidden');

    if (this.dom.tvOptionsStationTitle && this.currentStation) {
      this.dom.tvOptionsStationTitle.textContent = `${this.currentStation.name} • ${this.currentStation.genre || 'En Vivo'}`;
    }

    this.renderTvOptionsSources();
    this.renderTvOptionsQualities();
    this.updateTvOptionsActions();

    setTimeout(() => {
      this.focusOptionsOsdItem(0);
    }, 40);
  }

  closeTvOptionsMenu() {
    if (!this.dom.tvOptionsOsd) return;
    this.dom.tvOptionsOsd.classList.add('is-hidden');
    this.isOptionsOsdOpen = false;
    if (this.isFullscreenActive()) {
      this.resetFsControlsInactivityTimer();
    }
  }

  toggleTvOptionsMenu() {
    if (this.isOptionsOsdOpen) {
      this.closeTvOptionsMenu();
    } else {
      this.openTvOptionsMenu();
    }
  }

  renderTvOptionsSources() {
    if (!this.dom.tvOptSourcesTray) return;
    const station = this.currentStation;
    if (!station) return;

    const sources = (station.sources && station.sources.length > 0)
      ? station.sources
      : [{ name: 'Fuente 1 (Principal)', url: station.streamUrl, needsProxy: station.needsProxy }];

    if (this.dom.tvOptSourcesCount) {
      this.dom.tvOptSourcesCount.textContent = `${sources.length} ${sources.length === 1 ? 'disponible' : 'disponibles'}`;
    }

    let html = '';
    sources.forEach((src, idx) => {
      const isActive = idx === this.currentSourceIndex;
      const label = src.name || `Fuente ${idx + 1}`;
      const latData = this.sourceLatencies ? this.sourceLatencies[src.url] : null;
      let pingHtml = '';
      if (latData) {
        const badge = latData.ok ? (latData.latencyMs < 350 ? '🟢' : (latData.latencyMs < 800 ? '🟡' : '🟠')) : '🔴';
        const pingText = latData.ok ? `${latData.latencyMs}ms` : 'Offline';
        pingHtml = `<span class="source-ping-badge" style="font-size:0.78rem; opacity:0.85; margin-left:6px;">${badge} ${pingText}</span>`;
      }
      html += `
        <button class="tv-opt-btn ${isActive ? 'is-active' : ''}" data-type="source" data-index="${idx}">
          <span>📡 ${label}</span>
          ${pingHtml}
          ${isActive ? '<span style="color:var(--bm-cyan,#0095ff)">● ACTIVA</span>' : ''}
        </button>
      `;
    });

    this.dom.tvOptSourcesTray.innerHTML = html;

    this.dom.tvOptSourcesTray.querySelectorAll('.tv-opt-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-index'), 10);
        this.switchTvSource(idx);
        this.renderTvOptionsSources();
      });
    });
  }

  renderTvOptionsQualities() {
    if (!this.dom.tvOptQualityTray) return;
    const currentLvl = this.hls ? this.hls.currentLevel : -1;

    let html = `
      <button class="tv-opt-btn ${currentLvl === -1 ? 'is-active' : ''}" data-type="quality" data-index="-1">
        <span>⚙️ Auto (Adaptativa)</span>
        ${currentLvl === -1 ? '<span style="color:var(--bm-cyan,#0095ff)">● ACTIVA</span>' : ''}
      </button>
    `;

    if (this.hls && this.hls.levels && this.hls.levels.length > 0) {
      this.hls.levels.forEach((level, index) => {
        const isActive = index === currentLvl;
        const height = level.height || (level.attrs && level.attrs.RESOLUTION ? level.attrs.RESOLUTION.split('x')[1] : null);
        const bitrateKbps = level.bitrate ? Math.round(level.bitrate / 1000) : 0;
        let label = height ? `${height}p` : `Nivel ${index + 1}`;
        if (bitrateKbps) label += ` (${bitrateKbps}k)`;

        html += `
          <button class="tv-opt-btn ${isActive ? 'is-active' : ''}" data-type="quality" data-index="${index}">
            <span>${label}</span>
            ${isActive ? '<span style="color:var(--bm-cyan,#0095ff)">● ACTIVA</span>' : ''}
          </button>
        `;
      });
    }

    this.dom.tvOptQualityTray.innerHTML = html;

    if (this.dom.tvOptQualityActive) {
      if (currentLvl === -1) {
        this.dom.tvOptQualityActive.textContent = 'Auto';
      } else if (this.hls && this.hls.levels && this.hls.levels[currentLvl]) {
        const lvl = this.hls.levels[currentLvl];
        const h = lvl.height || '';
        this.dom.tvOptQualityActive.textContent = h ? `${h}p` : `Nivel ${currentLvl + 1}`;
      }
    }

    this.dom.tvOptQualityTray.querySelectorAll('.tv-opt-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-index'), 10);
        if (this.hls) {
          this.hls.currentLevel = idx;
        }
        if (this.dom.tvQualitySelect) {
          this.dom.tvQualitySelect.value = String(idx);
        }
        this.renderTvOptionsQualities();
      });
    });
  }

  updateTvOptionsActions() {
    if (this.dom.tvOptBtnWeb) {
      this.dom.tvOptBtnWeb.textContent = this.isWebMode ? '📺 Volver a Señal Nativa' : '🌐 Modo Web Oficial';
      this.dom.tvOptBtnWeb.classList.toggle('is-active', this.isWebMode);
    }
    if (this.dom.tvOptBtnFav && this.currentStation && this.fav) {
      const isFav = this.fav.isFavorite(this.currentStation.id);
      this.dom.tvOptBtnFav.textContent = isFav ? '★ En Favoritos' : '☆ Añadir a Favoritos';
      this.dom.tvOptBtnFav.classList.toggle('is-active', isFav);
    }
    if (this.dom.tvOptBtnExitFs) {
      const isFull = this.isFullscreenActive();
      this.dom.tvOptBtnExitFs.style.display = isFull ? 'inline-flex' : 'none';
    }
  }

  getNavigableOptionsItems() {
    if (!this.dom.tvOptionsOsd) return [];
    return Array.from(this.dom.tvOptionsOsd.querySelectorAll('.tv-opt-btn, .tv-options-close-btn')).filter(el => {
      return el.offsetParent !== null && !el.disabled;
    });
  }

  focusOptionsOsdItem(index) {
    const items = this.getNavigableOptionsItems();
    if (!items || items.length === 0) return;
    if (index < 0) index = items.length - 1;
    if (index >= items.length) index = 0;
    this.optionsFocusIndex = index;

    items.forEach(el => el.classList.remove('is-dpad-focused'));
    const target = items[this.optionsFocusIndex];
    if (target) {
      target.classList.add('is-dpad-focused');
      try {
        target.focus();
        target.scrollIntoView({ block: 'nearest' });
      } catch (e) {}
    }
  }

  navigateOptionsOsd(direction) {
    const items = this.getNavigableOptionsItems();
    if (!items || items.length === 0) return;
    this.focusOptionsOsdItem(this.optionsFocusIndex + direction);
  }

  activateFocusedOption() {
    const items = this.getNavigableOptionsItems();
    if (!items || items.length === 0) return;
    const target = items[this.optionsFocusIndex];
    if (target) {
      target.click();
    }
  }

  getVisibleTvStations() {
    return this.tvStations;
  }

  zapPrevious() {
    const list = this.getVisibleTvStations();
    if (!list || list.length === 0) return;
    const curId = this.currentStation ? this.currentStation.id : null;
    let idx = list.findIndex(s => s.id === curId);
    if (idx === -1) idx = 0;
    idx = (idx - 1 + list.length) % list.length;
    this.playTv(list[idx]);
  }

  zapNext() {
    const list = this.getVisibleTvStations();
    if (!list || list.length === 0) return;
    const curId = this.currentStation ? this.currentStation.id : null;
    let idx = list.findIndex(s => s.id === curId);
    if (idx === -1) idx = 0;
    idx = (idx + 1) % list.length;
    this.playTv(list[idx]);
  }

  togglePlayPause() {
    if (!this.dom.tvVideo) return;
    this._isExitingFullscreen = false;
    if (this.dom.tvVideo.paused) {
      this._userRequestedPause = false;
      this.dom.tvVideo.play().catch(e => console.warn('Play prevenido:', e));
    } else {
      this._userRequestedPause = true;
      this.dom.tvVideo.pause();
    }
  }

  switchToWebPlayer(customUrl = null) {
    if (!this.currentStation) return;
    this.clearConnectionWatchdog();
    if (this.hls) {
      this.hls.destroy();
      this.hls = null;
    }
    if (this.dom.tvVideo) {
      this.dom.tvVideo.pause();
      this.dom.tvVideo.removeAttribute('src');
      this.dom.tvVideo.style.display = 'none';
    }
    if (this.dom.tvLoading) {
      this.dom.tvLoading.style.display = 'none';
    }
    if (this.dom.tvFallbackOverlay) {
      this.dom.tvFallbackOverlay.classList.add('is-hidden');
    }
    if (this.dom.tvQualityWrapper) {
      this.dom.tvQualityWrapper.style.display = 'none';
    }

    let targetUrl = customUrl || this.currentStation.embedUrl || this.currentStation.website || this.currentStation.streamUrl;
    if (targetUrl && (targetUrl.includes('youtube.com') || targetUrl.includes('youtu.be')) && !targetUrl.includes('/embed/')) {
      targetUrl = `/api/youtube/embed?url=${encodeURIComponent(targetUrl)}`;
    }
    if (targetUrl && (targetUrl.includes('live.tvn.cl') || targetUrl.includes('mdstrm.com')) && !targetUrl.includes('ads=false')) {
      targetUrl += (targetUrl.includes('?') ? '&' : '?') + 'ads=false&autostart=true&autoplay=true&controls=true';
    }

    if (this.dom.tvIframe) {
      this.dom.tvIframe.src = targetUrl;
      this.dom.tvIframe.classList.remove('is-hidden');
      try {
        this.dom.tvIframe.onload = () => {
          try {
            if (this._iframeAdInterval) clearInterval(this._iframeAdInterval);
            this._iframeAdInterval = setInterval(() => {
              try {
                const ifrDoc = this.dom.tvIframe.contentDocument || this.dom.tvIframe.contentWindow.document;
                if (ifrDoc) {
                  const skipBtns = ifrDoc.querySelectorAll('.cerrar, [onclick*="ads13PrestitialTrigger"], [class*="skip"], [class*="saltar"], button[aria-label*="Skip"], .videoAdUiSkipButton, [class*="ad-skip"], [class*="advertisement-skip"]');
                  skipBtns.forEach(b => { try { b.click(); } catch(e){} });
                  const ads = ifrDoc.querySelectorAll('#ittmobile, .ads13, .banner-top, [id*="google_ads"], [class*="ad-container"], [class*="preroll"], [id*="preroll"]');
                  ads.forEach(a => a.style.display = 'none');
                }
              } catch(e) {
                clearInterval(this._iframeAdInterval);
              }
            }, 600);
            setTimeout(() => { if (this._iframeAdInterval) clearInterval(this._iframeAdInterval); }, 15000);
          } catch (e) {
            // Protección contra cross-origin: la intercepción nativa de MainActivity neutraliza las redes publicitarias
          }
        };
      } catch (e) {}
    }
    this.isWebMode = true;
    if (this.dom.tvToggleWebBtn) {
      this.dom.tvToggleWebBtn.classList.add('is-active');
      this.dom.tvToggleWebBtn.title = 'Volver a Señal HLS Directa';
    }
    this.isPlaying = true;
    this.updateTvPlayIcon(true);
  }

  toggleWebPlayerMode() {
    if (this.isWebMode) {
      this.isWebMode = false;
      if (this.dom.tvIframe) {
        this.dom.tvIframe.src = 'about:blank';
        this.dom.tvIframe.classList.add('is-hidden');
      }
      if (this.dom.tvVideo) {
        this.dom.tvVideo.style.display = 'block';
      }
      if (this.dom.tvToggleWebBtn) {
        this.dom.tvToggleWebBtn.classList.remove('is-active');
        this.dom.tvToggleWebBtn.title = 'Cambiar a Reproductor Web Oficial';
      }
      if (this.dom.tvSourceWrapper) {
        this.dom.tvSourceWrapper.style.display = 'none';
      }
      if (this.currentStation) {
        const nonEmbedIdx = (this.currentStation.sources || []).findIndex(s => !s.isEmbed && (!s.url || (
          !s.url.includes('13.cl/en-vivo') &&
          !s.url.includes('rudo.video/live') &&
          !s.url.includes('/live/c13') &&
          !s.url.includes('tvn.cl/ntv') &&
          !s.url.includes('tvn.cl/en-vivo') &&
          !s.url.includes('tvn.cl/envivo') &&
          !s.url.includes('tvn.cl/tvchile') &&
          !s.url.includes('live.tvn.cl') &&
          !s.url.includes('mdstrm.com/live-stream/')
        )));
        if (nonEmbedIdx >= 0) {
          this.switchTvSource(nonEmbedIdx);
        } else {
          this.playTv(this.currentStation, this.isUsingProxy);
        }
      }
    } else {
      this.switchToWebPlayer();
    }
  }

  playTvWithCustomUrl(url) {
    if (!this.currentStation) return;
    if (this.hls) {
      this.hls.destroy();
      this.hls = null;
    }
    if (this.dom.tvLoading) this.dom.tvLoading.style.display = 'flex';
    if (this.dom.tvFallbackOverlay) this.dom.tvFallbackOverlay.classList.add('is-hidden');

    let streamUrl = url;
    if (this.isUsingProxy) {
      const refParam = encodeURIComponent(this.currentStation.website || '');
      streamUrl = `/api/proxy?url=${encodeURIComponent(url)}&ref=${refParam}`;
    }

    if (window.Hls && window.Hls.isSupported()) {
      this.hls = new window.Hls({
        enableWorker: true,
        lowLatencyMode: true
      });
      this.hls.loadSource(streamUrl);
      this.hls.attachMedia(this.dom.tvVideo);
      this.hls.on(window.Hls.Events.MANIFEST_PARSED, () => {
        this.dom.tvVideo.play().catch(e => console.warn('Play prevenido:', e));
        this.updateQualityOptions(this.hls.levels);
      });
    } else {
      this.dom.tvVideo.src = streamUrl;
      this.dom.tvVideo.play().catch(e => console.warn('Play nativo prevenido:', e));
    }
  }

  playTv(station, forceProxy = false) {
    if (this.isRadioFullscreen) {
      if (this.dom.radioFullscreenView) this.dom.radioFullscreenView.classList.add('is-hidden');
      this.isRadioFullscreen = false;
    }
    this.stopRadio();
    this.clearConnectionWatchdog();
    this._userRequestedPause = false;
    this._isExitingFullscreen = false;

    this.currentStation = station;
    this.currentType = 'tv';


    // 1. RESPUESTA VISUAL INMEDIATA (0 ms de latencia)
    // Ocultar video de inmediato para que nunca se vea ningún cuadro previo ni icono de play nativo
    if (this.dom.tvVideo) {
      this.dom.tvVideo.style.opacity = '0';
    }
    // Mostrar pantalla de carga con fondo sólido de la aplicación inmediatamente
    if (this.dom.tvLoading) {
      this.dom.tvLoading.style.display = 'flex';
    }
    if (this.dom.tvFallbackOverlay) {
      this.dom.tvFallbackOverlay.classList.add('is-hidden');
    }

    // Actualizar canal activo en la guía lateral de inmediato
    this.syncActiveChannelHighlight(station.id);

    // Resetear modo web
    this.isWebMode = false;
    if (this.dom.tvIframe) {
      this.dom.tvIframe.src = 'about:blank';
      this.dom.tvIframe.classList.add('is-hidden');
    }
    if (this.dom.tvVideo) {
      this.dom.tvVideo.style.display = 'block';
    }
    if (this.dom.tvToggleWebBtn) {
      this.dom.tvToggleWebBtn.classList.remove('is-active');
      this.dom.tvToggleWebBtn.title = 'Cambiar a Reproductor Web Oficial';
    }

    // Mostrar vista Zapping integrada (NUNCA POPUP MODAL)
    if (this.dom.tvZappingView) {
      this.dom.tvZappingView.classList.remove('is-hidden');
    }

    if (this.isFullscreenActive()) {
      this.resetFsControlsInactivityTimer();
    }

    // Actualizar HUD superior del canal activo de inmediato
    const chNum = station.channelNumber ? String(station.channelNumber).padStart(2, '0') : '01';
    if (this.dom.tvChannelNumber) this.dom.tvChannelNumber.textContent = `CH ${chNum}`;
    if (this.dom.tvStationTitle) this.dom.tvStationTitle.textContent = station.name;
    if (this.dom.tvStationSubtitle) {
      this.dom.tvStationSubtitle.textContent = `${station.countryName || 'Chile'} • ${station.region || 'Región'} • ${station.city || 'Santiago'}`;
    }
    const defaultTvLogo = './img/logos/default-channel.svg';
    if (this.dom.tvStationLogo) {
      this.dom.tvStationLogo.src = station.logo || defaultTvLogo;
      this.dom.tvStationLogo.onerror = function() {
        this.onerror = null;
        this.src = defaultTvLogo;
      };
      this.dom.tvStationLogo.style.display = 'block';
    }
    if (this.dom.tvWebsiteBtn) {
      this.dom.tvWebsiteBtn.href = station.website || '#';
      this.dom.tvWebsiteBtn.style.display = station.website ? 'inline-flex' : 'none';
    }
    if (this.dom.tvFavoriteBtn) {
      this.updateFavoriteButtons(station.id, this.fav.isFavorite(station.id));
    }

    // Actualizar barra informativa en modo vertical móvil
    if (this.dom.tvPortraitChNum) this.dom.tvPortraitChNum.textContent = `CH ${chNum}`;
    if (this.dom.tvPortraitChTitle) this.dom.tvPortraitChTitle.textContent = station.name;
    if (this.dom.tvPortraitChSub) {
      this.dom.tvPortraitChSub.textContent = `${station.city || 'Chile'} • ${station.genre || 'General'}`;
    }

    // Reiniciar selector de calidad a Auto
    if (this.dom.tvQualitySelect) {
      this.dom.tvQualitySelect.innerHTML = `<option value="-1">Auto (Adaptativa)</option>`;
    }
    if (this.dom.tvQualityWrapper) {
      this.dom.tvQualityWrapper.style.display = 'none';
    }

    // Si el canal está configurado para reproducción web incrustada (ej. Meganoticias Ahora 24/7)
    if (station.useIframe) {
      this.switchToWebPlayer();
      return;
    }

    // Configurar y mostrar selector interactivo de fuentes
    this.updateSourceSelector(station, 0);

    // Tareas no críticas en segundo plano para no demorar la reproducción
    setTimeout(() => {
      try {
        localStorage.setItem('antena_sur_last_tv_id', station.id);
      } catch (e) {}

      this.fav.addToHistory(station);

      if (window.__antenaSurApp && typeof window.__antenaSurApp.updateHeroLastStationBadges === 'function') {
        window.__antenaSurApp.updateHeroLastStationBadges();
      }
      if (window.__antenaSurApp && typeof window.__antenaSurApp.updateHeaderActiveTab === 'function') {
        window.__antenaSurApp.updateHeaderActiveTab('tv');
      }

      this.updateMediaSession({
        title: station.name,
        artist: `Canal ${chNum} • ${station.city || 'Chile'} (${station.genre || 'En Vivo'})`,
        album: 'Antena Sur • Televisión Abierta de Chile',
        artwork: [
          { src: station.logo || defaultTvLogo, sizes: '96x96', type: 'image/png' },
          { src: station.logo || defaultTvLogo, sizes: '128x128', type: 'image/png' },
          { src: station.logo || defaultTvLogo, sizes: '256x256', type: 'image/png' },
          { src: station.logo || defaultTvLogo, sizes: '512x512', type: 'image/png' }
        ]
      });
    }, 0);

    const activeSource = (station.sources && station.sources.length > 0)
      ? station.sources[0]
      : { name: 'Fuente 1 (Principal)', url: station.streamUrl, needsProxy: station.needsProxy };

    this.playTvWithSource(activeSource, forceProxy);
  }

  updateSourceSelector(station, activeIndex = 0) {
    if (!this.dom.tvSourceWrapper || !this.dom.tvSourceSelect) return;
    const sources = (station.sources && station.sources.length > 0)
      ? station.sources
      : [{ name: 'Fuente 1 (Principal)', url: station.streamUrl, needsProxy: station.needsProxy }];

    this.currentSourceIndex = activeIndex;

    let html = '';
    sources.forEach((src, idx) => {
      const label = src.name || `Fuente ${idx + 1}`;
      html += `<option value="${idx}">📡 ${label}</option>`;
    });

    this.dom.tvSourceSelect.innerHTML = html;
    this.dom.tvSourceSelect.value = String(activeIndex);

    // Mantener selector nativo oculto (las fuentes se gestionan en el menú OSD de Ajustes)
    this.dom.tvSourceWrapper.style.display = 'none';
    this.dom.tvSourceWrapper.title = `${sources.length} ${sources.length === 1 ? 'fuente disponible' : 'fuentes de reproducción disponibles'}`;

    if (this.dom.tvNextSourceBtn) {
      if (sources.length > 1) {
        const nextNum = ((activeIndex + 1) % sources.length) + 1;
        this.dom.tvNextSourceBtn.textContent = `📡 Probar Fuente ${nextNum} de ${sources.length}`;
        this.dom.tvNextSourceBtn.style.display = 'inline-block';
      } else {
        this.dom.tvNextSourceBtn.style.display = 'none';
      }
    }

    // Iniciar prueba de latencia en vivo multiorigen (LibreTV Live Probe)
    this.probeTvSources(station);
  }

  switchTvSource(index) {
    if (!this.currentStation) return;
    const sources = (this.currentStation.sources && this.currentStation.sources.length > 0)
      ? this.currentStation.sources
      : [{ name: 'Fuente 1', url: this.currentStation.streamUrl, needsProxy: this.currentStation.needsProxy }];

    if (index < 0 || index >= sources.length) return;
    this.currentSourceIndex = index;
    const selectedSource = sources[index];

    console.log(`[Antena Sur] Cambiando a ${selectedSource.name}: ${selectedSource.url}`);

    if (this.dom.tvSourceSelect) {
      this.dom.tvSourceSelect.value = String(index);
    }
    if (this.dom.tvNextSourceBtn) {
      const nextNum = ((index + 1) % sources.length) + 1;
      this.dom.tvNextSourceBtn.textContent = `📡 Probar Fuente ${nextNum} de ${sources.length}`;
      this.dom.tvNextSourceBtn.style.display = sources.length > 1 ? 'inline-block' : 'none';
    }

    this.playTvWithSource(selectedSource);
  }

  nextTvSource() {
    if (!this.currentStation) return;
    const sources = this.currentStation.sources || [];
    if (sources.length <= 1) return;
    const nextIdx = (this.currentSourceIndex + 1) % sources.length;
    this.switchTvSource(nextIdx);
  }

  playTvWithSource(source, forceProxy = false) {
    if (!this.currentStation || !source || !source.url) return;
    this.clearConnectionWatchdog();

    // Mantener video oculto e indicador de carga de Antena Sur activo sobre la superficie
    if (this.dom.tvVideo) {
      this.dom.tvVideo.style.opacity = '0';
    }
    if (this.dom.tvLoading) {
      this.dom.tvLoading.style.display = 'flex';
    }
    if (this.dom.tvFallbackOverlay) {
      this.dom.tvFallbackOverlay.classList.add('is-hidden');
    }

    const station = this.currentStation;
    const targetUrl = source.url;

    // Conmutación solo para fuentes web explícitamente marcadas como incrustación HTML (NUNCA streams .m3u8)
    const isM3u8Stream = targetUrl && (targetUrl.includes('.m3u8') || targetUrl.includes('.smil'));
    const isEmbedSource = !isM3u8Stream && source.isEmbed;

    if (isEmbedSource) {
      this.switchToWebPlayer(targetUrl);
      return;
    }

    // Si veníamos de modo reproductor web incrustado, restaurar superficie de video nativa
    if (this.isWebMode) {
      this.isWebMode = false;
      if (this.dom.tvIframe) {
        this.dom.tvIframe.src = 'about:blank';
        this.dom.tvIframe.classList.add('is-hidden');
      }
      if (this.dom.tvVideo) {
        this.dom.tvVideo.style.display = 'block';
      }
      if (this.dom.tvToggleWebBtn) {
        this.dom.tvToggleWebBtn.classList.remove('is-active');
        this.dom.tvToggleWebBtn.title = 'Cambiar a Reproductor Web Oficial';
      }
    }

    const isHttp = targetUrl && targetUrl.startsWith('http://');
    const needsAutoProxy = forceProxy || source.needsProxy || isHttp ||
      (targetUrl && (
        targetUrl.includes('bitred.cl') ||
        targetUrl.includes('tlink.cl') ||
        targetUrl.includes('15.204.246.24') ||
        targetUrl.includes('15.204.')
      ));

    this.isUsingProxy = needsAutoProxy;
    let streamUrl = targetUrl;

    if (needsAutoProxy) {
      let defaultRef = station.website || '';
      if (!defaultRef) {
        if (station.id === 'cl-tv-canal13') defaultRef = 'https://www.13.cl/';
        else if (station.id === 'cl-tv-tvchile' || station.id === 'cl-tv-tvn') defaultRef = 'https://www.tvn.cl/';
        else if (station.id === 'cl-tv-lared') defaultRef = 'https://www.lared.cl/';
      }
      const refParam = encodeURIComponent(defaultRef);
      streamUrl = `/api/proxy?url=${encodeURIComponent(targetUrl)}&ref=${refParam}`;
    }

    // Pausar video anterior sin llamar a video.load() ni removeAttribute('src') para no reiniciar codecs de Android
    this.dom.tvVideo.pause();

    // Temporizador de conexión: si en 4.5 segundos no conecta, conmutar a siguiente fuente si hay
    this.connectionWatchdogTimer = setTimeout(() => {
      if (!this.isPlaying && this.currentStation === station && !this.isWebMode) {
        if (!this.isUsingProxy) {
          console.log('Señal de fuente tardó en conectar. Intentando con Proxy local...');
          this.playTvWithSource(source, true);
        } else if (station.sources && this.currentSourceIndex < station.sources.length - 1) {
          console.log(`Fuente #${this.currentSourceIndex + 1} no respondió. Conmutando automáticamente a Fuente #${this.currentSourceIndex + 2}...`);
          this.switchTvSource(this.currentSourceIndex + 1);
        } else {
          this.showTvFallback('La fuente seleccionada puede no estar disponible temporalmente.');
        }
      }
    }, 4500);

    // Reproducción mediante Hls.js
    if (window.Hls && window.Hls.isSupported()) {
      if (this.hls) {
        // Conmutación ultra-rápida: reutilizar decodificador y buffer de Hls.js existente
        this.hls.stopLoad();
        this.hls.loadSource(streamUrl);
        this.hls.startLoad();
        this.dom.tvVideo.play().catch(e => console.warn('Play rápido prevenido:', e));
      } else {
        this.hls = new window.Hls({
          enableWorker: true,
          lowLatencyMode: true,
          backBufferLength: 30,
          maxBufferLength: 20,
          maxMaxBufferLength: 40,
          manifestLoadingTimeOut: 10000,
          levelLoadingTimeOut: 10000
        });

        this.hls.loadSource(streamUrl);
        this.hls.attachMedia(this.dom.tvVideo);

        this.hls.on(window.Hls.Events.MANIFEST_PARSED, (event, data) => {
          this.dom.tvVideo.play().catch(e => {
            console.warn('Reproducción inicial prevenida por el navegador:', e);
          });
          this.updateQualityOptions(this.hls.levels);
        });

        this.hls.on(window.Hls.Events.LEVELS_UPDATED, (event, data) => {
          this.updateQualityOptions(data.levels || this.hls.levels);
        });

        this.hls.on(window.Hls.Events.ERROR, (event, data) => {
          if (data.fatal) {
            console.warn('Error fatal en HLS (Fuente):', data.type);
            switch (data.type) {
              case window.Hls.ErrorTypes.NETWORK_ERROR:
                if (!this.isUsingProxy) {
                  console.log('Fallo de red en fuente. Reintentando con Proxy local...');
                  this.playTvWithSource(source, true);
                  return;
                }
                if (station.sources && this.currentSourceIndex < station.sources.length - 1) {
                  console.log(`Conmutando a siguiente fuente #${this.currentSourceIndex + 2}...`);
                  this.switchTvSource(this.currentSourceIndex + 1);
                  return;
                }
                this.showTvFallback('La fuente pública actual puede tener restricciones de conexión.');
                break;
              case window.Hls.ErrorTypes.MEDIA_ERROR:
                console.log('Error de medios HLS. Recuperando decodificador...');
                this.hls.recoverMediaError();
                break;
              default:
                if (this.hls) {
                  this.hls.destroy();
                  this.hls = null;
                }
                if (station.sources && this.currentSourceIndex < station.sources.length - 1) {
                  this.switchTvSource(this.currentSourceIndex + 1);
                  return;
                }
                this.showTvFallback('Error desconocido al reproducir la fuente seleccionada.');
                break;
            }
          }
        });
      }
    } else if (this.dom.tvVideo.canPlayType('application/vnd.apple.mpegurl')) {
      // Soporte nativo HLS (Safari iOS y macOS)
      this.dom.tvVideo.src = streamUrl;
      this.dom.tvVideo.play().catch(e => {
        console.warn('Safari autoplay bloqueado:', e);
      });
    } else {
      this.showTvFallback('Tu navegador no es compatible con transmisiones HLS.');
    }

    if (this.onStationChange) {
      this.onStationChange(station, 'playing');
    }
  }

  updateQualityOptions(levels) {
    if (!this.dom.tvQualitySelect) return;

    if (!levels || levels.length === 0) {
      if (this.dom.tvQualityWrapper) this.dom.tvQualityWrapper.style.display = 'none';
      return;
    }

    if (this.dom.tvQualityWrapper) this.dom.tvQualityWrapper.style.display = 'none';

    let html = `<option value="-1">Auto (Adaptativa)</option>`;
    levels.forEach((level, index) => {
      const height = level.height || (level.attrs && level.attrs.RESOLUTION ? level.attrs.RESOLUTION.split('x')[1] : null);
      const bitrateKbps = level.bitrate ? Math.round(level.bitrate / 1000) : 0;
      let label = height ? `${height}p` : `Calidad ${index + 1}`;
      if (bitrateKbps) label += ` (${bitrateKbps} kbps)`;

      html += `<option value="${index}">${label}</option>`;
    });

    this.dom.tvQualitySelect.innerHTML = html;
    this.dom.tvQualitySelect.value = this.hls ? this.hls.currentLevel : -1;
  }

  clearConnectionWatchdog() {
    if (this.connectionWatchdogTimer) {
      clearTimeout(this.connectionWatchdogTimer);
      this.connectionWatchdogTimer = null;
    }
  }

  showTvFallback(message) {
    this.clearConnectionWatchdog();
    if (this.dom.tvLoading) this.dom.tvLoading.style.display = 'none';
    if (this.dom.tvIframe) {
      this.dom.tvIframe.src = 'about:blank';
      this.dom.tvIframe.classList.add('is-hidden');
    }
    if (this.dom.tvFallbackOverlay) {
      this.dom.tvFallbackOverlay.classList.remove('is-hidden');
    }
    if (this.dom.tvFallbackMsg) {
      this.dom.tvFallbackMsg.textContent = message;
    }
  }

  closeTvPlayer() {
    this.clearFsControlsInactivityTimer();
    this.showFsControls();
    this.clearConnectionWatchdog();
    this.hideFullscreenGuide();
    this.closeTvOptionsMenu();

    if (this.hls) {
      this.hls.destroy();
      this.hls = null;
    }
    if (this.dom.tvVideo) {
      this.dom.tvVideo.pause();
      this.dom.tvVideo.removeAttribute('src');
      this.dom.tvVideo.load();
      this.dom.tvVideo.style.display = 'block';
    }
    if (this.dom.tvIframe) {
      this.dom.tvIframe.src = 'about:blank';
      this.dom.tvIframe.classList.add('is-hidden');
    }
    this.isWebMode = false;
    if (this.dom.tvToggleWebBtn) {
      this.dom.tvToggleWebBtn.classList.remove('is-active');
      this.dom.tvToggleWebBtn.title = 'Cambiar a Reproductor Web Oficial';
    }
    if (this.dom.tvZappingView) {
      this.dom.tvZappingView.classList.add('is-hidden');
    }

    if (this.isFullscreenActive()) {
      this.exitFullscreenCrossBrowser();
    }

    if (window.AndroidNative && typeof window.AndroidNative.setOrientation === 'function') {
      window.AndroidNative.setOrientation('user');
    }

    const closedStation = this.currentStation;
    this.currentStation = null;
    this.isPlaying = false;
    this.currentType = null;
    this._isExitingFullscreen = false;
    this._userRequestedPause = false;

    const heroTv = document.getElementById('heroCardTv');
    if (heroTv) {
      try { heroTv.focus(); } catch (e) {}
    }
    if (window.__antenaSurApp && typeof window.__antenaSurApp.updateHeroLastStationBadges === 'function') {
      window.__antenaSurApp.updateHeroLastStationBadges();
    }
    if (window.__antenaSurApp && typeof window.__antenaSurApp.updateHeaderActiveTab === 'function') {
      window.__antenaSurApp.updateHeaderActiveTab('home');
    }

    if (this.onStationChange && closedStation) {
      this.onStationChange(closedStation, 'stopped');
    }
  }

  /* ========================================================================
     PANTALLA COMPLETA Y CONTROL REMOTO (ANDROID TV D-PAD)
     ======================================================================== */

  initFullscreenListeners() {
    const events = ['fullscreenchange', 'webkitfullscreenchange', 'mozfullscreenchange', 'MSFullscreenChange'];
    let fsEventDebounce = null;
    events.forEach(ev => {
      document.addEventListener(ev, () => {
        if (fsEventDebounce) clearTimeout(fsEventDebounce);
        fsEventDebounce = setTimeout(() => {
          const isFull = Boolean(
            document.fullscreenElement ||
            document.webkitFullscreenElement ||
            document.mozFullScreenElement ||
            document.msFullscreenElement
          );
          if (this.dom.zappingPlayerArea) {
            this.dom.zappingPlayerArea.classList.toggle('is-fullscreen', isFull);
          }
          if (this.dom.tvZappingView) {
            this.dom.tvZappingView.classList.toggle('is-fullscreen-mode', isFull);
          }
          this.updateFullscreenIcon();
          if (isFull) {
            if (this.dom.zappingSidebar) {
              this.dom.zappingSidebar.classList.add('is-collapsed');
              this.dom.zappingSidebar.classList.remove('is-open-fs');
            }
            this.resetFsControlsInactivityTimer();
          } else {
            this._isExitingFullscreen = true;
            if (this._exitFsGraceTimer) clearTimeout(this._exitFsGraceTimer);
            this._exitFsGraceTimer = setTimeout(() => {
              this._isExitingFullscreen = false;
            }, 1500);

            if (this.dom.zappingSidebar) {
              this.dom.zappingSidebar.classList.remove('is-open-fs');
              this.dom.zappingSidebar.classList.remove('is-collapsed');
            }
            this.clearFsControlsInactivityTimer();
            this.showFsControls();
            this.hideFullscreenGuide();

            if (this.dom.tvVideo && this.currentStation && this.currentStation.type === 'tv') {
              if (this.dom.tvVideo.paused) {
                const p = this.dom.tvVideo.play();
                if (p !== undefined) {
                  p.catch(e => console.warn('[TV] Auto-resume inmediato tras fullscreenchange exit:', e));
                }
              }
              this.isPlaying = true;
              this.updateTvPlayIcon(true);
            }
          }
        }, 30);
      });
    });

    const resetHandler = () => {
      if (this.isFullscreenActive()) {
        this.resetFsControlsInactivityTimer();
      }
    };

    if (this.dom.zappingPlayerArea) {
      this.dom.zappingPlayerArea.addEventListener('mousemove', resetHandler);
      this.dom.zappingPlayerArea.addEventListener('pointerdown', resetHandler);
      this.dom.zappingPlayerArea.addEventListener('touchstart', resetHandler, { passive: true });
    }
    window.addEventListener('mousemove', () => {
      if (this.isFullscreenActive()) {
        this.resetFsControlsInactivityTimer();
      }
    });
  }

  resetFsControlsInactivityTimer() {
    this.clearFsControlsInactivityTimer();
    this.showFsControls();

    if (!this.isFullscreenActive()) return;
    if (this.isGuideOverlayVisible) return;
    if (this.isOptionsOsdOpen) return;

    this.fsControlsTimer = setTimeout(() => {
      this.hideFsControls();
    }, 3000);
  }

  clearFsControlsInactivityTimer() {
    if (this.fsControlsTimer) {
      clearTimeout(this.fsControlsTimer);
      this.fsControlsTimer = null;
    }
  }

  hideFsControls() {
    if (!this.isFullscreenActive()) return;
    if (this.isGuideOverlayVisible) return;
    if (this.isOptionsOsdOpen) return;
    if (this.dom.zappingPlayerArea) {
      this.dom.zappingPlayerArea.classList.add('is-fullscreen-idle');
    }
    this.isFsControlsHidden = true;
  }

  showFsControls() {
    if (this.dom.zappingPlayerArea) {
      this.dom.zappingPlayerArea.classList.remove('is-fullscreen-idle');
    }
    this.isFsControlsHidden = false;
  }

  isFullscreenActive() {
    return Boolean(
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement ||
      (this.dom.zappingPlayerArea && this.dom.zappingPlayerArea.classList.contains('is-fullscreen'))
    );
  }

  toggleFullscreen() {
    if (this.isFullscreenActive()) {
      this.exitFullscreenCrossBrowser();
    } else {
      this.enterFullscreenCrossBrowser();
    }
  }

  enterFullscreenCrossBrowser() {
    if (this.dom.zappingPlayerArea) {
      this.dom.zappingPlayerArea.classList.add('is-fullscreen');
    }
    if (this.dom.tvZappingView) {
      this.dom.tvZappingView.classList.add('is-fullscreen-mode');
    }
    if (this.dom.zappingSidebar) {
      this.dom.zappingSidebar.classList.add('is-collapsed');
      this.dom.zappingSidebar.classList.remove('is-open-fs');
    }

    // En dispositivos móviles (Android / iOS / TV Box / pantallas táctiles), el modo de pantalla
    // completa se implementa de manera pura y óptima mediante CSS (in-page fullscreen),
    // garantizando que tome el 100% de la pantalla sin invocar la API nativa de pantalla completa.
    // En Chromium Android y WebKit móvil, la API nativa document.requestFullscreen / exitFullscreen
    // envía órdenes forzadas de pausa ('pause') al decodificador multimedia, provocando cortes
    // y pausas dobles al salir. Con pantalla completa CSS, la reproducción es 100% continua y fluida.
    const isMobileOrTv = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
                         (navigator.maxTouchPoints && navigator.maxTouchPoints > 0) ||
                         (window.matchMedia && window.matchMedia('(pointer: coarse)').matches);

    if (!isMobileOrTv) {
      const target = this.dom.zappingPlayerArea || this.dom.tvZappingView || document.documentElement;
      if (target.requestFullscreen) {
        target.requestFullscreen().catch(() => {});
      } else if (target.webkitRequestFullscreen) {
        target.webkitRequestFullscreen();
      }
    }

    if (window.AndroidNative && typeof window.AndroidNative.setOrientation === 'function') {
      window.AndroidNative.setOrientation('landscape');
    }

    this.resetFsControlsInactivityTimer();
    this.updateFullscreenIcon();
  }

  fallbackSafariVideoFullscreen() {
    // No-op para evitar invocar el reproductor nativo de iOS que pausa el video al cerrarse
  }

  exitFullscreenCrossBrowser() {
    // 1. Activar bandera de guardia para interceptar pausas no deseadas del navegador durante la salida
    this._isExitingFullscreen = true;
    if (this._exitFsGraceTimer) {
      clearTimeout(this._exitFsGraceTimer);
    }
    this._exitFsGraceTimer = setTimeout(() => {
      this._isExitingFullscreen = false;
    }, 1500);

    if (window.AndroidNative && typeof window.AndroidNative.setOrientation === 'function') {
      window.AndroidNative.setOrientation('user');
    }

    this.clearFsControlsInactivityTimer();
    this.showFsControls();
    this.hideFullscreenGuide();
    this.closeTvOptionsMenu();

    // 2. Limpiar clases visuales de pantalla completa
    if (this.dom.zappingPlayerArea) {
      this.dom.zappingPlayerArea.classList.remove('is-fullscreen');
      this.dom.zappingPlayerArea.classList.remove('is-fullscreen-idle');
    }
    if (this.dom.tvZappingView) {
      this.dom.tvZappingView.classList.remove('is-fullscreen-mode');
    }
    if (this.dom.zappingSidebar) {
      this.dom.zappingSidebar.classList.remove('is-open-fs');
      this.dom.zappingSidebar.classList.remove('is-collapsed');
    }

    // 3. Salir de pantalla completa nativa de documento únicamente si estaba activa (ej. escritorio)
    if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
      try {
        if (document.exitFullscreen) {
          document.exitFullscreen().catch(e => console.warn('[TV] Error en document.exitFullscreen:', e));
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } catch (e) {
        console.warn('[TV] Excepción al salir de fullscreen nativo:', e);
      }
    }

    // 4. Salir de fullscreen nativo de video ÚNICAMENTE si el video realmente está en modo webkit fullscreen
    if (this.dom.tvVideo && this.dom.tvVideo.webkitDisplayingFullscreen && typeof this.dom.tvVideo.webkitExitFullscreen === 'function') {
      try {
        this.dom.tvVideo.webkitExitFullscreen();
      } catch (e) {
        console.warn('[TV] Error en webkitExitFullscreen:', e);
      }
    }

    this.updateFullscreenIcon();

    // 5. Garantizar inmediatamente y sin pausa que la reproducción de video continúe sin cortes
    if (this.dom.tvVideo && this.currentStation && this.currentStation.type === 'tv') {
      if (this.dom.tvVideo.paused) {
        const p = this.dom.tvVideo.play();
        if (p !== undefined) {
          p.catch(e => console.warn('[TV] Auto-resume en exitFullscreenCrossBrowser:', e));
        }
      }
      this.isPlaying = true;
      this.updateTvPlayIcon(true);
    }
  }

  updateFullscreenIcon() {
    const isFull = this.isFullscreenActive();

    const svgCollapse = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
         <polyline points="4 14 10 14 10 20"></polyline>
         <polyline points="20 10 14 10 14 4"></polyline>
         <line x1="14" y1="10" x2="21" y2="3"></line>
         <line x1="3" y1="21" x2="10" y2="14"></line>
       </svg>`;

    const svgExpand = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
         <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
       </svg>`;

    if (this.dom.tvFullscreenBtn) {
      this.dom.tvFullscreenBtn.innerHTML = isFull ? svgCollapse : svgExpand;
      this.dom.tvFullscreenBtn.title = isFull ? 'Salir de Pantalla Completa (F / Doble Clic)' : 'Pantalla Completa (F / Doble Clic)';
    }

    if (this.dom.tvPortraitFullscreenBtn) {
      this.dom.tvPortraitFullscreenBtn.innerHTML = isFull
        ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
             <polyline points="4 14 10 14 10 20"></polyline>
             <polyline points="20 10 14 10 14 4"></polyline>
             <line x1="14" y1="10" x2="21" y2="3"></line>
             <line x1="3" y1="21" x2="10" y2="14"></line>
           </svg>`
        : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
             <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
           </svg>`;
      this.dom.tvPortraitFullscreenBtn.title = isFull ? 'Salir de Pantalla Completa' : 'Pantalla Completa';
    }
  }

  /* ========================================================================
     NAVEGACIÓN CON CONTROL REMOTO (ANDROID TV D-PAD / TECLADO)
     ======================================================================== */

  handleTvNav(action) {
    // 1. Si estamos en el reproductor de radio a pantalla completa
    if (this.isRadioFullscreen) {
      if (action === 'ArrowLeft' || action === 'ArrowUp') {
        this.playPreviousRadio();
        return true;
      }
      if (action === 'ArrowRight' || action === 'ArrowDown') {
        this.playNextRadio();
        return true;
      }
      if (action === 'Enter') {
        this.toggleRadioPlayPause();
        return true;
      }
      if (action === 'Back') {
        this.closeFullscreenRadio();
        return true;
      }
      return false;
    }

    // 2. Si estamos en el reproductor de TV (Zapping)
    if (this.dom.tvZappingView && !this.dom.tvZappingView.classList.contains('is-hidden')) {
      const isFullscreen = this.isFullscreenActive();

      // Caso A: El Menú OSD de Opciones está abierto
      if (this.isOptionsOsdOpen) {
        if (action === 'ArrowUp') {
          this.navigateOptionsOsd(-1);
          return true;
        }
        if (action === 'ArrowDown') {
          this.navigateOptionsOsd(1);
          return true;
        }
        if (action === 'ArrowLeft') {
          this.navigateOptionsOsd(-1);
          return true;
        }
        if (action === 'ArrowRight') {
          this.navigateOptionsOsd(1);
          return true;
        }
        if (action === 'Enter') {
          this.activateFocusedOption();
          return true;
        }
        if (action === 'Back') {
          this.closeTvOptionsMenu();
          return true;
        }
        return true;
      }

      const isFsSidebarOpen = this.isFsSidebarOpen();
      const isSidebarVisible = isFsSidebarOpen || (this.dom.zappingSidebar && !this.dom.zappingSidebar.classList.contains('is-collapsed'));

      // Caso B: Flecha Izquierda (ArrowLeft) -> Abre el menú lateral de canales en pantalla completa
      if (action === 'ArrowLeft') {
        if (isFullscreen) {
          this.toggleFullscreenSidebar(true);
          this.focusCurrentSidebarItem();
        } else {
          this.toggleSidebar(true);
          this.focusCurrentSidebarItem();
        }
        return true;
      }

      // Caso C: Flecha Derecha (ArrowRight) -> Cerrar guía lateral
      if (action === 'ArrowRight') {
        if (isFullscreen) {
          this.toggleFullscreenSidebar(false);
          this.hideFullscreenGuide();
        } else {
          this.toggleSidebar(false);
        }
        return true;
      }

      // Caso D: Flecha Arriba (ArrowUp) -> Subir en guía lateral
      if (action === 'ArrowUp') {
        if (isSidebarVisible) {
          this.navigateSidebarList(-1);
        } else {
          this.zapPrevious();
        }
        return true;
      }

      // Caso E: Flecha Abajo (ArrowDown) -> Bajar en guía lateral
      if (action === 'ArrowDown') {
        if (isSidebarVisible) {
          this.navigateSidebarList(1);
        } else {
          this.zapNext();
        }
        return true;
      }

      // Caso F: Botón Central (Enter / OK) -> Abre ajustes del canal y señal (o cambia canal si menú lateral está abierto)
      if (action === 'Enter') {
        if (isFullscreen) {
          if (isFsSidebarOpen) {
            this.selectFocusedSidebarChannel();
            this.toggleFullscreenSidebar(false);
          } else {
            this.openTvOptionsMenu();
          }
        } else if (isSidebarVisible) {
          this.selectFocusedSidebarChannel();
        } else {
          this.openTvOptionsMenu();
        }
        return true;
      }

      // Caso G: Botón Atrás (Back)
      if (action === 'Back') {
        if (isFullscreen) {
          if (this.isFsSidebarOpen()) {
            this.toggleFullscreenSidebar(false);
            return true;
          }
          this.exitFullscreenCrossBrowser();
        } else {
          this.closeTvPlayer();
        }
        return true;
      }
    }

    return false;
  }

  initRemoteKeyNavigation() {
    window.addEventListener('keydown', (e) => {
      if (e.defaultPrevented) return;

      // Ignorar si el foco está en un input de texto ordinario
      const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
      if (['input', 'textarea'].includes(activeTag) && e.key !== 'Escape') {
        return;
      }

      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Enter', 'Escape', 'BrowserBack'].includes(e.key) || e.keyCode === 8) {
        let action = e.key;
        if (e.key === 'Escape' || e.key === 'BrowserBack' || e.keyCode === 8) action = 'Back';

        const handled = this.handleTvNav(action);
        if (handled) {
          e.preventDefault();
          return;
        }
      }

      // Atajos directos de teclado estándar de escritorio
      if (e.key === 's' || e.key === 'S') {
        e.preventDefault();
        this.nextTvSource();
        return;
      }

      if (e.key === ' ' || e.code === 'Space') {
        e.preventDefault();
        this.togglePlayPause();
        return;
      }

      if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        this.toggleFullscreen();
        return;
      }

      if (e.key === 'm' || e.key === 'M') {
        e.preventDefault();
        this.toggleMute();
        return;
      }
    });
  }

  /* ========================================================================
     APPLE CARPLAY, ANDROID AUTO & LOCK SCREEN (MEDIA SESSION API)
     ======================================================================== */

  initMediaSessionHandlers() {
    this.refreshMediaSessionControls();
  }

  refreshMediaSessionControls() {
    if (!('mediaSession' in navigator)) return;

    try {
      // 1. ANULAR explícitamente los controles de avance/retroceso rápido de 10s/15s para evitar que iOS
      // los dibuje en vez de los botones de cambio de emisora en CarPlay y pantalla de bloqueo.
      navigator.mediaSession.setActionHandler('seekbackward', null);
      navigator.mediaSession.setActionHandler('seekforward', null);
      navigator.mediaSession.setActionHandler('seekto', null);

      // 2. REGISTRAR explícitamente los controles de emisora anterior (⏮) y siguiente (⏭)
      navigator.mediaSession.setActionHandler('previoustrack', () => {
        if (this.currentType === 'tv') this.zapPrevious();
        else this.playPreviousRadio();
      });

      navigator.mediaSession.setActionHandler('nexttrack', () => {
        if (this.currentType === 'tv') this.zapNext();
        else this.playNextRadio();
      });

      navigator.mediaSession.setActionHandler('play', () => {
        if (this.currentType === 'tv') {
          if (this.dom.tvVideo) this.dom.tvVideo.play();
        } else {
          console.log('🚗 [CarPlay / Bluetooth] Comando PLAY recibido desde el vehículo');
          this.isUserPaused = false;
          this.wasPlayingBeforeDisconnect = false;
          this.isInterrupted = false;
          this.resumeRadio(true);
        }
      });

      navigator.mediaSession.setActionHandler('pause', () => {
        if (this.currentType === 'tv') {
          if (this.dom.tvVideo) this.dom.tvVideo.pause();
        } else {
          console.log('🚗 [CarPlay / Bluetooth] Comando PAUSE recibido desde el vehículo');
          this.isUserPaused = true;
          this.wasPlayingBeforeDisconnect = false;
          this.pauseRadio(true);
        }
      });

      navigator.mediaSession.setActionHandler('stop', () => {
        if (this.currentType === 'tv') {
          this.closeTvPlayer();
        } else {
          console.log('🚗 [CarPlay / Bluetooth] Comando STOP recibido desde el vehículo');
          this.isUserPaused = true;
          this.wasPlayingBeforeDisconnect = false;
          this.stopRadio();
        }
      });

      // 3. Declarar transmisión EN VIVO (elimina la barra de scrubber/progreso en CarPlay y pantalla de bloqueo de iOS)
      if ('setPositionState' in navigator.mediaSession) {
        try {
          navigator.mediaSession.setPositionState({
            duration: Infinity,
            playbackRate: 1.0,
            position: 0
          });
        } catch (err) {
          try {
            navigator.mediaSession.setPositionState();
          } catch (e2) {}
        }
      }
    } catch (e) {
      console.warn('Error configurando MediaSession handlers:', e);
    }
  }

  updateMediaSession(metadata) {
    if (!('mediaSession' in navigator)) return;

    try {
      const art = metadata.artwork || [
        { src: './img/logos/cl-rad-rockandpop.png', sizes: '96x96', type: 'image/png' },
        { src: './img/logos/cl-rad-rockandpop.png', sizes: '128x128', type: 'image/png' },
        { src: './img/logos/cl-rad-rockandpop.png', sizes: '256x256', type: 'image/png' },
        { src: './img/logos/cl-rad-rockandpop.png', sizes: '512x512', type: 'image/png' }
      ];

      navigator.mediaSession.metadata = new MediaMetadata({
        title: metadata.title || 'Antena Sur',
        artist: metadata.artist || 'Chile en Vivo',
        album: metadata.album || 'Antena Sur • Radios de Chile',
        artwork: art
      });

      // En Apple CarPlay y Pantalla de Bloqueo de iOS:
      // 'playing' cuando el audio está emitiendo sonido activamente.
      // 'paused' cuando está pausado (por usuario o por llamada telefónica/interrupción).
      // Esto MANTIENE la tarjeta de la radio y los botones de emisora visibles en la pantalla del auto sin que el sistema la cierre.
      if (this.isPlaying && !this.audioElement.paused) {
        navigator.mediaSession.playbackState = 'playing';
      } else if (this.currentStation) {
        navigator.mediaSession.playbackState = 'paused';
      }

      this.refreshMediaSessionControls();
    } catch (e) {
      console.warn('Error actualizando MediaSession:', e);
    }
  }

  playPreviousRadio() {
    if (!this.radioStations || this.radioStations.length === 0) return;
    const curId = this.currentStation ? this.currentStation.id : null;
    let idx = this.radioStations.findIndex(s => s.id === curId);
    if (idx === -1) idx = 0;
    idx = (idx - 1 + this.radioStations.length) % this.radioStations.length;
    this.playRadio(this.radioStations[idx]);
  }

  playNextRadio() {
    if (!this.radioStations || this.radioStations.length === 0) return;
    const curId = this.currentStation ? this.currentStation.id : null;
    let idx = this.radioStations.findIndex(s => s.id === curId);
    if (idx === -1) idx = 0;
    idx = (idx + 1) % this.radioStations.length;
    this.playRadio(this.radioStations[idx]);
  }

  /* ========================================================================
     REPRODUCTOR MÓVIL ESTILO SPOTIFY / APPLE MUSIC & CARRUSEL DE EMISORAS
     ======================================================================== */

  initMobileRadioPlayer() {
    if (this.dom.radioBigPlayBtn) {
      this.dom.radioBigPlayBtn.addEventListener('click', () => {
        if (this.audioElement.paused) {
          this.resumeRadio();
        } else {
          this.pauseRadio();
        }
      });
    }

    if (this.dom.radioBigPrevBtn) {
      this.dom.radioBigPrevBtn.addEventListener('click', () => {
        this.playPreviousRadio();
      });
    }

    if (this.dom.radioBigNextBtn) {
      this.dom.radioBigNextBtn.addEventListener('click', () => {
        this.playNextRadio();
      });
    }

    if (this.dom.radioBigFavBtn) {
      this.dom.radioBigFavBtn.addEventListener('click', () => {
        if (this.currentStation) {
          const isFav = this.fav.toggleFavorite(this.currentStation.id);
          this.updateFavoriteButtons(this.currentStation.id, isFav);
        }
      });
    }
  }

  renderRadioQuickScrollTray() {
    if (!this.dom.radioQuickScrollTray) return;
    if (!this.radioStations || this.radioStations.length === 0) return;

    if (this.dom.radioActiveCountBadge) {
      this.dom.radioActiveCountBadge.textContent = `${this.radioStations.length} Emisoras`;
    }

    const currentId = this.currentStation ? this.currentStation.id : null;
    let html = '';
    this.radioStations.forEach(st => {
      const isActive = st.id === currentId;
      html += `
        <div class="radio-carousel-item ${isActive ? 'active' : ''}" data-id="${st.id}" title="Sintonizar ${st.name}">
          <img src="${st.logo || ''}" alt="${st.name}" class="radio-carousel-logo" onerror="this.src='./img/logos/cl-rad-rockandpop.png'">
          <span class="radio-carousel-name">${st.name}</span>
        </div>
      `;
    });

    this.dom.radioQuickScrollTray.innerHTML = html;

    this.dom.radioQuickScrollTray.querySelectorAll('.radio-carousel-item').forEach(item => {
      item.addEventListener('click', () => {
        const id = item.getAttribute('data-id');
        const st = this.radioStations.find(s => s.id === id);
        if (st) {
          this.playRadio(st);
        }
      });
    });
  }

  /* ========================================================================
     REPRODUCTOR DE RADIOS EN PANTALLA COMPLETA (BLACKMAGIC OS / SPOTIFY)
     ======================================================================== */

  initFullscreenRadioEvents() {
    if (this.dom.radioFsBackBtn) {
      this.dom.radioFsBackBtn.addEventListener('click', () => {
        this.closeFullscreenRadio();
      });
    }
    if (this.dom.radioFsPrevBtn) {
      this.dom.radioFsPrevBtn.addEventListener('click', () => {
        this.playPreviousRadio();
      });
    }
    if (this.dom.radioFsNextBtn) {
      this.dom.radioFsNextBtn.addEventListener('click', () => {
        this.playNextRadio();
      });
    }
    if (this.dom.radioFsPlayBtn) {
      this.dom.radioFsPlayBtn.addEventListener('click', () => {
        this.toggleRadioPlayPause();
      });
    }
  }

  openFullscreenRadio(station) {
    if (this.currentType === 'tv') {
      this.closeTvPlayer();
    }

    this.isRadioFullscreen = true;
    if (this.dom.radioFullscreenView) {
      this.dom.radioFullscreenView.classList.remove('is-hidden');
    }
    if (this.dom.radioBar) {
      this.dom.radioBar.classList.remove('is-hidden');
    }

    let targetStation = station;
    if (!targetStation) {
      try {
        const lastRadioId = localStorage.getItem('antena_sur_last_radio_id');
        if (lastRadioId && this.radioStations && this.radioStations.length) {
          targetStation = this.radioStations.find(s => s.id === lastRadioId);
        }
      } catch (e) {}
    }
    if (!targetStation && this.radioStations && this.radioStations.length) {
      targetStation = this.radioStations[0];
    }

    if (targetStation) {
      if (!this.currentStation || this.currentStation.id !== targetStation.id) {
        this.playRadio(targetStation);
      } else {
        this.updateFullscreenRadioUI(targetStation);
        if (this.audioElement.paused) {
          this.resumeRadio();
        }
      }
    }

    this.renderFullscreenRadioTray();

    if (window.__antenaSurApp && typeof window.__antenaSurApp.updateHeaderActiveTab === 'function') {
      window.__antenaSurApp.updateHeaderActiveTab('radio');
    }

    const activeCard = this.dom.radioFsTrayScroll ? this.dom.radioFsTrayScroll.querySelector('.radio-tray-card.active') : null;
    if (activeCard) {
      try { activeCard.focus(); } catch (e) {}
    } else if (this.dom.radioFsBackBtn) {
      try { this.dom.radioFsBackBtn.focus(); } catch (e) {}
    }
  }

  closeFullscreenRadio(stopPlayback = false) {
    this.isRadioFullscreen = false;
    if (this.dom.radioFullscreenView) {
      this.dom.radioFullscreenView.classList.add('is-hidden');
    }
    if (stopPlayback) {
      this.stopRadio();
    } else if (this.currentStation && this.dom.radioBar) {
      this.dom.radioBar.classList.remove('is-hidden');
    }

    if (window.__antenaSurApp && typeof window.__antenaSurApp.updateHeaderActiveTab === 'function') {
      window.__antenaSurApp.updateHeaderActiveTab('home');
    }

    const heroRadio = document.getElementById('heroCardRadio');
    if (heroRadio) {
      try { heroRadio.focus(); } catch (e) {}
    }
    if (window.__antenaSurApp && typeof window.__antenaSurApp.updateHeroLastStationBadges === 'function') {
      window.__antenaSurApp.updateHeroLastStationBadges();
    }
  }

  toggleRadioPlayPause() {
    if (this.audioElement.paused) {
      this.resumeRadio();
    } else {
      this.pauseRadio();
    }
  }

  renderFullscreenRadioTray() {
    if (!this.dom.radioFsTrayScroll) return;
    if (!this.radioStations || this.radioStations.length === 0) return;

    const curId = this.currentStation ? this.currentStation.id : null;
    let html = '';
    this.radioStations.forEach((st, idx) => {
      const isActive = st.id === curId;
      const num = String(idx + 1).padStart(2, '0');
      const freq = st.frequency || 'FM';
      html += `
        <button class="radio-tray-card ${isActive ? 'active' : ''}" data-id="${st.id}" title="${st.name}">
          <span class="tray-num">${num}</span>
          <img class="tray-logo" src="${st.logo || './img/logos/cl-rad-rockandpop.png'}" alt="${st.name}" onerror="this.src='./img/logos/cl-rad-rockandpop.png'">
          <div class="tray-info">
            <span class="tray-name">${st.name}</span>
            <span class="tray-freq">${freq}</span>
          </div>
        </button>
      `;
    });

    this.dom.radioFsTrayScroll.innerHTML = html;

    this.dom.radioFsTrayScroll.querySelectorAll('.radio-tray-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        const st = this.radioStations.find(s => s.id === id);
        if (st) {
          this.playRadio(st);
        }
      });
    });

    const activeEl = this.dom.radioFsTrayScroll.querySelector('.radio-tray-card.active');
    if (activeEl) {
      try {
        activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      } catch (e) {}
    }

    if (!this._radioTrayDragInitialized && this.dom.radioFsTrayScroll) {
      this._radioTrayDragInitialized = true;
      const tray = this.dom.radioFsTrayScroll;
      let isDown = false;
      let startX = 0;
      let scrollLeft = 0;

      tray.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - tray.offsetLeft;
        scrollLeft = tray.scrollLeft;
      });
      window.addEventListener('mouseup', () => { isDown = false; });
      tray.addEventListener('mouseleave', () => { isDown = false; });
      tray.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - tray.offsetLeft;
        const walk = (x - startX) * 1.5;
        tray.scrollLeft = scrollLeft - walk;
      });
    }
  }

  updateFullscreenRadioUI(station) {
    if (!station) return;

    if (this.dom.radioFsArtwork) {
      this.dom.radioFsArtwork.src = station.logo || './img/logos/cl-rad-rockandpop.png';
      this.dom.radioFsArtwork.onerror = () => {
        this.dom.radioFsArtwork.src = './img/logos/cl-rad-rockandpop.png';
      };
    }

    if (this.dom.radioFsTotalCount && this.radioStations) {
      this.dom.radioFsTotalCount.textContent = String(this.radioStations.length).padStart(2, '0');
    }
    if (this.dom.radioFsCurrentIndex && this.radioStations) {
      const idx = this.radioStations.findIndex(s => s.id === station.id);
      this.dom.radioFsCurrentIndex.textContent = String(idx >= 0 ? idx + 1 : 1).padStart(2, '0');
    }

    if (this.dom.radioFsFreqDial) {
      this.dom.radioFsFreqDial.textContent = station.frequency || 'FM DIGITAL';
    }
    if (this.dom.radioFsGenrePill) {
      this.dom.radioFsGenrePill.textContent = (station.genre || 'MÚSICA').toUpperCase();
    }
    if (this.dom.radioFsStatusPill) {
      this.dom.radioFsStatusPill.textContent = 'SEÑAL EN DIRECTO';
    }
    if (this.dom.radioFsStationName) {
      this.dom.radioFsStationName.textContent = station.name;
    }

    const defaultMeta = this.getStationDefaultMetadata(station);
    if (this.dom.radioFsTrackTitle) {
      this.dom.radioFsTrackTitle.textContent = defaultMeta ? defaultMeta.title : station.name;
    }
    if (this.dom.radioFsTrackArtist) {
      this.dom.radioFsTrackArtist.textContent = defaultMeta ? `${defaultMeta.artist} • Música en Vivo` : `Emisión Oficial en Vivo • ${station.city || 'Chile'}`;
    }

    if (this.dom.radioFsCityVal) {
      this.dom.radioFsCityVal.textContent = `${station.city || 'Santiago'} • ${station.region || 'Chile'}`;
    }
    if (this.dom.radioFsCoverageVal) {
      this.dom.radioFsCoverageVal.textContent = station.isNational ? 'Nacional e Internacional' : 'Regional y Digital';
    }
    if (this.dom.radioFsWebsiteVal) {
      if (station.website) {
        this.dom.radioFsWebsiteVal.href = station.website;
        this.dom.radioFsWebsiteVal.textContent = station.website.replace(/^https?:\/\//, '').replace(/\/$/, '');
        this.dom.radioFsWebsiteVal.style.display = 'inline-block';
      } else {
        this.dom.radioFsWebsiteVal.textContent = 'Web no disponible';
        this.dom.radioFsWebsiteVal.href = '#';
      }
    }
    if (this.dom.radioFsDescVal) {
      this.dom.radioFsDescVal.textContent = station.description || 'Emisora radial chilena con transmisión en vivo de alta definición.';
    }

    if (this.dom.radioFsVolText) {
      this.dom.radioFsVolText.textContent = `${Math.round(this.volume * 100)}%`;
    }

    const isAudioPlaying = !this.audioElement.paused && this.isPlaying;
    if (this.dom.radioFsPlayIcon) {
      this.dom.radioFsPlayIcon.textContent = isAudioPlaying ? '⏸️' : '▶️';
    }
    if (this.dom.radioFsPlayText) {
      this.dom.radioFsPlayText.textContent = isAudioPlaying ? 'PAUSAR' : 'REPRODUCIR';
    }
    if (this.dom.radioFsSpectrumBars) {
      this.dom.radioFsSpectrumBars.classList.toggle('is-playing', isAudioPlaying);
    }

    // Sincronizar carrusel inferior
    if (this.dom.radioFsTrayScroll) {
      const cards = this.dom.radioFsTrayScroll.querySelectorAll('.radio-tray-card');
      cards.forEach(card => {
        const isMatch = card.getAttribute('data-id') === station.id;
        card.classList.toggle('active', isMatch);
        if (isMatch) {
          try {
            card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
          } catch (e) {}
        }
      });
    }
  }

  updateMobileRadioUI(station) {
    if (!station) return;

    if (this.dom.radioBigArtwork) {
      this.dom.radioBigArtwork.src = station.logo || './img/logos/cl-rad-rockandpop.png';
    }
    if (this.dom.radioLiveStationName) {
      this.dom.radioLiveStationName.textContent = station.name;
    }
    if (this.dom.radioLiveFreq) {
      this.dom.radioLiveFreq.textContent = station.frequency || 'En Vivo';
    }
    if (this.dom.radioLiveTitle) {
      this.dom.radioLiveTitle.textContent = station.name;
    }
    if (this.dom.radioLiveArtist) {
      this.dom.radioLiveArtist.textContent = `Emisión en Vivo • ${station.city || 'Chile'} • ${station.genre || 'Música'}`;
    }
    if (this.dom.radioAmbientBackdrop) {
      this.dom.radioAmbientBackdrop.style.backgroundImage = `radial-gradient(circle at 50% 30%, rgba(0, 229, 255, 0.2), transparent 70%), url('${station.logo || './img/logos/cl-rad-rockandpop.png'}')`;
    }

    // Sincronizar item activo en el carrusel de emisoras
    if (this.dom.radioQuickScrollTray) {
      const items = this.dom.radioQuickScrollTray.querySelectorAll('.radio-carousel-item');
      items.forEach(item => {
        const isMatch = item.getAttribute('data-id') === station.id;
        item.classList.toggle('active', isMatch);
        if (isMatch) {
          item.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
      });
    }

    if (this.dom.radioBigFavBtn) {
      const isFav = this.fav.isFavorite(station.id);
      this.updateFavoriteButtons(station.id, isFav);
    }
  }

  /* ========================================================================
     REPRODUCTOR DE RADIO
     ======================================================================== */

  initAudioEvents() {
    this.audioElement.volume = this.volume;

    if (this.dom.radioPlayBtn) {
      this.dom.radioPlayBtn.addEventListener('click', () => {
        if (this.audioElement.paused) {
          this.resumeRadio();
        } else {
          this.pauseRadio();
        }
      });
    }

    if (this.dom.radioCloseBtn) {
      this.dom.radioCloseBtn.addEventListener('click', () => this.stopRadio());
    }

    if (this.dom.radioMuteBtn) {
      this.dom.radioMuteBtn.addEventListener('click', () => this.toggleMute());
    }

    if (this.dom.radioVolumeSlider) {
      this.dom.radioVolumeSlider.value = this.volume;
      this.dom.radioVolumeSlider.addEventListener('input', (e) => {
        this.setVolume(parseFloat(e.target.value));
      });
    }

    if (this.dom.radioFavoriteBtn) {
      this.dom.radioFavoriteBtn.addEventListener('click', () => {
        if (this.currentStation) {
          const isFav = this.fav.toggleFavorite(this.currentStation.id);
          this.updateFavoriteButtons(this.currentStation.id, isFav);
        }
      });
    }

    this.audioElement.addEventListener('playing', () => {
      this.isPlaying = true;
      this.isInterrupted = false;
      this.wasPlayingBeforeDisconnect = false;
      this.wasPlayingBeforeInterruption = false;
      this.isReconnecting = false;
      this.isReloading = false;
      this.reconnectAttempts = 0;
      if (this.reconnectTimer) {
        clearTimeout(this.reconnectTimer);
        this.reconnectTimer = null;
      }
      this.lastPlaybackTime = this.audioElement.currentTime;
      this.lastTimeAdvancedAt = Date.now();
      this.updateRadioPlayIcon(true);
      if (this.dom.radioFsPlayIcon) this.dom.radioFsPlayIcon.textContent = '⏸️';
      if (this.dom.radioFsPlayText) this.dom.radioFsPlayText.textContent = 'PAUSAR';
      if (this.dom.radioFsSpectrumBars) this.dom.radioFsSpectrumBars.classList.add('is-playing');
      this.startVisualizer();
      if ('mediaSession' in navigator) {
        navigator.mediaSession.playbackState = 'playing';
      }
      this.refreshMediaSessionControls();
      this.startAudioWatchdog();
      if (this.onStationChange && this.currentStation) {
        this.onStationChange(this.currentStation, 'playing');
      }
    });

    this.audioElement.addEventListener('pause', () => {
      if (this.dom.radioFsPlayIcon) this.dom.radioFsPlayIcon.textContent = '▶️';
      if (this.dom.radioFsPlayText) this.dom.radioFsPlayText.textContent = 'REPRODUCIR';
      if (this.dom.radioFsSpectrumBars) this.dom.radioFsSpectrumBars.classList.remove('is-playing');
      this.stopVisualizer();

      if (this.isUserPaused) {
        this.isPlaying = false;
        this.wasPlayingBeforeDisconnect = false;
        this.updateRadioPlayIcon(false);
        this.stopAudioWatchdog();
        if ('mediaSession' in navigator) {
          navigator.mediaSession.playbackState = 'paused';
        }
        if (this.onStationChange && this.currentStation) {
          this.onStationChange(this.currentStation, 'paused');
        }
      } else if (!this.isInterrupted) {
        // Pausa disparada por el sistema (desconexión de Bluetooth, salida de CarPlay, audífonos desenchufados)
        console.log('🚗 [Audio Pausado por Sistema] Dispositivo Bluetooth desconectado o salida de CarPlay.');
        this.isPlaying = false;
        this.wasPlayingBeforeDisconnect = true; // Recordar que estaba sonando para auto-reanudar en la reconexión
        this.updateRadioPlayIcon(false);
        this.stopAudioWatchdog();
        if ('mediaSession' in navigator) {
          navigator.mediaSession.playbackState = 'paused';
        }
        // Desconectar socket para que no quede buffer obsoleto ni consuma datos en segundo plano
        this.audioElement.removeAttribute('src');
        this.audioElement.load();
      }
    });

    this.audioElement.addEventListener('waiting', () => {
      console.log('⏳ Buffer de audio cargando datos en red 4G/5G...');
    });

    this.audioElement.addEventListener('stalled', () => {
      console.log('📡 Red celular o WiFi esperando paquetes...');
    });

    this.audioElement.addEventListener('error', (e) => {
      console.warn('Error en stream de radio:', e);
      if (this.currentStation && !this.isUserPaused && !this.isInterrupted) {
        if (this.currentStation.backupStreamUrl && this.audioElement.src !== this.currentStation.backupStreamUrl) {
          console.log('Stream principal con error, conmutando a backupStreamUrl:', this.currentStation.backupStreamUrl);
          this.playRadioSource(this.currentStation.backupStreamUrl);
          return;
        }
        this.scheduleReconnect(2000);
      }
    });
  }

  playRadio(station) {
    if (this.currentType === 'tv') {
      this.closeTvPlayer();
    }

    this.isUserPaused = false;
    this.isInterrupted = false;
    this.isNetworkStalled = false;
    this.isReconnecting = false;
    this.isReloading = false;
    this.reconnectAttempts = 0;
    this.stopInterruptionRecoveryMonitor();
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }
    if (this.stallTimer) {
      clearTimeout(this.stallTimer);
      this.stallTimer = null;
    }
    if (this.onlineRecoveryTimer) {
      clearTimeout(this.onlineRecoveryTimer);
      this.onlineRecoveryTimer = null;
    }
    this.currentStation = station;
    this.currentType = 'radio';
    this.fav.addToHistory(station);

    try {
      localStorage.setItem('antena_sur_last_radio_id', station.id);
    } catch (e) {}

    if (window.__antenaSurApp && typeof window.__antenaSurApp.updateHeroLastStationBadges === 'function') {
      window.__antenaSurApp.updateHeroLastStationBadges();
    }

    // Actualizar interfaz del reproductor móvil estilo Spotify / Apple Music y pantalla completa
    this.updateMobileRadioUI(station);
    this.updateFullscreenRadioUI(station);

    if (this.dom.radioBar) this.dom.radioBar.classList.remove('is-hidden');
    if (this.dom.radioTitle) this.dom.radioTitle.textContent = station.name;
    if (this.dom.radioSubtitle) {
      const freq = station.frequency ? `[${station.frequency}] • ` : '';
      this.dom.radioSubtitle.innerHTML = `
        <span class="now-playing-talk">
          <span class="live-dot"></span>
          <span>Sintonizando • ${freq}${station.city}, ${station.countryName || 'Chile'}</span>
        </span>
      `;
    }
    if (this.dom.radioLogo) {
      this.dom.radioLogo.src = station.logo || '';
      this.dom.radioLogo.style.display = station.logo ? 'block' : 'none';
    }
    if (this.dom.radioFavoriteBtn) {
      this.updateFavoriteButtons(station.id, this.fav.isFavorite(station.id));
    }

    // Configurar MediaSession inicial para CarPlay / Android Auto (botones Anterior/Siguiente)
    this.updateMediaSession({
      title: station.name,
      artist: `${station.city || 'Chile'} • ${station.frequency || 'En Vivo'}`,
      album: 'Antena Sur • Radios de Chile',
      artwork: [
        { src: station.logo || './img/logos/cl-rad-rockandpop.png', sizes: '96x96', type: 'image/png' },
        { src: station.logo || './img/logos/cl-rad-rockandpop.png', sizes: '128x128', type: 'image/png' },
        { src: station.logo || './img/logos/cl-rad-rockandpop.png', sizes: '256x256', type: 'image/png' },
        { src: station.logo || './img/logos/cl-rad-rockandpop.png', sizes: '512x512', type: 'image/png' }
      ]
    });

    // Iniciar reproducción por Hls o carga directa
    this.playRadioSource(station.streamUrl);

    // Iniciar sondeo de metadatos Now Playing en tiempo real (Banda y Tema)
    this.startNowPlayingPolling(station);

    if (this.onStationChange) {
      this.onStationChange(station, 'playing');
    }
  }

  playRadioSource(url, forceFresh = false) {
    if (!url) return;
    if (this.isInterrupted) {
      console.log('playRadioSource omitido: llamada telefónica en curso.');
      return;
    }

    if (this.radioHls) {
      this.radioHls.destroy();
      this.radioHls = null;
    }

    const isHls = url.includes('.m3u8') || url.includes('.m3u');

    if (isHls && window.Hls && Hls.isSupported()) {
      this.radioHls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
        backBufferLength: 30
      });
      this.radioHls.loadSource(url);
      this.radioHls.attachMedia(this.audioElement);
      this.radioHls.on(Hls.Events.MANIFEST_PARSED, () => {
        const p = this.audioElement.play();
        if (p !== undefined) {
          p.catch(e => {
            console.warn('Radio Hls autoplay bloqueado o esperando foco:', e);
            if (this.currentStation && !this.isUserPaused && !this.isInterrupted) {
              this.scheduleReconnect(2500);
            }
          });
        }
      });
      this.radioHls.on(Hls.Events.ERROR, (event, data) => {
        if (data.fatal) {
          console.warn('Radio Hls fatal error:', data.type);
          if (this.currentStation && !this.isUserPaused && !this.isInterrupted) {
            this.scheduleReconnect(2000);
          }
        }
      });
    } else {
      // Para emisiones de radio online en vivo (Icecast / Shoutcast):
      // Si se solicita forceFresh, o si el audio no tiene src, o si cambió de url, o si estaba pausado:
      // Asignamos src y llamamos a load() para garantizar que el socket se abra al punto
      // en tiempo real de la transmisión, eliminando búferes viejos y cualquier retraso.
      const needsFreshSocket = forceFresh || (this.audioElement.src !== url) || Boolean(this.audioElement.error) || this.audioElement.paused || !this.audioElement.src;
      if (needsFreshSocket) {
        this.audioElement.src = url;
        this.audioElement.load();
      }
      this.audioElement.muted = false;
      if (typeof this.volume === 'number') {
        this.audioElement.volume = this.volume;
      }
      const p = this.audioElement.play();
      if (p !== undefined) {
        p.then(() => {
          this.isPlaying = true;
          this.isUserPaused = false;
          this.wasPlayingBeforeDisconnect = false;
          this.updateRadioPlayIcon(true);
        }).catch(e => {
          console.warn('Autoplay de radio esperando interacción:', e);
          this.isPlaying = false;
          this.updateRadioPlayIcon(false);
        });
      }
    }
  }

  pauseRadio(isUserInitiated = true) {
    if (isUserInitiated) {
      this.isUserPaused = true;
      this.wasPlayingBeforeDisconnect = false;
      if ('mediaSession' in navigator) {
        navigator.mediaSession.playbackState = 'paused';
      }
    }
    this.isPlaying = false;
    this.stopAudioWatchdog();
    this.stopNowPlayingPolling();
    this.audioElement.pause();
    this.audioElement.removeAttribute('src');
    this.audioElement.load();
    this.stopVisualizer();
    this.updateRadioPlayIcon(false);
  }

  resumeRadio(isUserInitiated = true) {
    if (isUserInitiated) {
      this.isUserPaused = false;
      this.isInterrupted = false;
      this.wasPlayingBeforeDisconnect = false;
      if ('mediaSession' in navigator) {
        navigator.mediaSession.playbackState = 'playing';
      }
    }

    if (!this.currentStation) return;

    console.log(`📻 [Live Stream Resume] Sintonizando emisión fresca en tiempo real: ${this.currentStation.name}`);
    this.playRadioSource(this.currentStation.streamUrl, true);
    this.startNowPlayingPolling(this.currentStation);
  }

  stopRadio() {
    this.isUserPaused = true;
    this.isInterrupted = false;
    this.wasPlayingBeforeDisconnect = false;
    this.isReloading = false;
    this.stopAudioWatchdog();
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }
    if ('mediaSession' in navigator) {
      navigator.mediaSession.playbackState = 'none';
    }
    this.stopNowPlayingPolling();
    if (this.radioHls) {
      this.radioHls.destroy();
      this.radioHls = null;
    }
    this.audioElement.pause();
    this.audioElement.removeAttribute('src');
    this.audioElement.load();
    this.stopVisualizer();

    if (this.dom.radioFsPlayIcon) this.dom.radioFsPlayIcon.textContent = '▶️';
    if (this.dom.radioFsPlayText) this.dom.radioFsPlayText.textContent = 'REPRODUCIR';
    if (this.dom.radioFsSpectrumBars) this.dom.radioFsSpectrumBars.classList.remove('is-playing');

    if (this.dom.radioBar) {
      this.dom.radioBar.classList.add('is-hidden');
    }

    const prev = this.currentStation;
    if (this.currentType === 'radio') {
      this.currentStation = null;
      this.isPlaying = false;
      this.currentType = null;
    }

    if (this.onStationChange && prev) {
      this.onStationChange(prev, 'stopped');
    }
  }

  /* ========================================================================
     RESILIENCIA ANTE LLAMADAS, CAÍDAS DE SEÑAL 4G/5G Y WATCHDOG DE AUDIO
     ======================================================================== */

  initSystemInterruptionListeners() {
    // 1. Detección de pérdida y recuperación de señal celular 4G/5G
    window.addEventListener('offline', () => {
      console.warn('📡 Evento de red offline.');
    });

    window.addEventListener('online', () => {
      console.log('🌐 Conexión de red activa (online).');
      if (this.currentStation && !this.isUserPaused && !this.isInterrupted && !this.wasPlayingBeforeDisconnect && this.audioElement.paused) {
        console.log('🔄 Reanudando radio en vivo tras recuperar internet...');
        this.resumeRadio(false);
      }
    });

    // 2. Detección de conexión y desconexión de dispositivos Bluetooth y Apple CarPlay
    if (typeof navigator !== 'undefined' && navigator.mediaDevices && typeof navigator.mediaDevices.addEventListener === 'function') {
      let deviceChangeTimeout = null;
      navigator.mediaDevices.addEventListener('devicechange', () => {
        console.log('🎧 [MediaDevices] Cambio detectado en rutas de audio (Bluetooth / CarPlay / Altavoz)');
        if (deviceChangeTimeout) clearTimeout(deviceChangeTimeout);

        deviceChangeTimeout = setTimeout(() => {
          // Si estaba sonando antes de desconectar y el usuario NO presionó pausa manualmente:
          if (this.wasPlayingBeforeDisconnect && !this.isUserPaused && !this.isInterrupted && this.currentStation) {
            console.log('🚗 [CarPlay / Bluetooth] Dispositivo de audio reconectado. Reanudando emisión en vivo...');
            this.wasPlayingBeforeDisconnect = false;
            this.resumeRadio(true);
          }
        }, 800); // 800ms para permitir que el protocolo A2DP / CarPlay complete el enlace
      });
    }

    // 3. Manejo NATIVO de llamadas telefónicas y Siri en iOS (AudioSession API)
    if (typeof navigator !== 'undefined' && 'audioSession' in navigator) {
      try {
        navigator.audioSession.type = 'playback';
        navigator.audioSession.addEventListener('statechange', () => {
          const state = navigator.audioSession.state;
          console.log(`🔊 [AudioSession] Estado cambiado a: ${state}`);

          if (state === 'interrupted') {
            console.log('📞 [AudioSession] Llamada telefónica o Siri entrante. Pausando radio y liberando audio...');
            this.wasPlayingBeforeInterruption = this.isPlaying || !this.audioElement.paused;
            this.isInterrupted = true;
            this.isPlaying = false;
            this.stopAudioWatchdog();
            this.stopVisualizer();
            this.updateRadioPlayIcon(false);

            // Detener el elemento de audio y liberar el socket completamente
            // Esto EVITA de raíz que iOS aplique ducking (bajar volumen y continuar sonando en la llamada)
            this.audioElement.pause();
            this.audioElement.removeAttribute('src');
            this.audioElement.load();

            if ('mediaSession' in navigator) {
              navigator.mediaSession.playbackState = 'paused';
            }
          } else if (state === 'active') {
            console.log('✅ [AudioSession] Llamada finalizada. AudioSession activa.');
            if (this.isInterrupted && this.wasPlayingBeforeInterruption && !this.isUserPaused && this.currentStation) {
              this.isInterrupted = false;
              this.wasPlayingBeforeInterruption = false;
              // Margen de 400ms para que el sistema telefónico libere el hardware de audio antes de volver a sonar
              setTimeout(() => {
                console.log('🔄 Reanudando radio en vivo tras llamada...');
                this.resumeRadio(true);
              }, 400);
            } else {
              this.isInterrupted = false;
            }
          }
        });
      } catch (e) {
        console.warn('AudioSession API no soportada en este entorno:', e);
      }
    }

    // 4. Retorno a la aplicación tras desbloqueo o regreso de otra app
    const handleWakeOrFocus = () => {
      // Solo actuar si una llamada telefónica había interrumpido el audio y la sesión ya finalizó
      if (this.isInterrupted && this.wasPlayingBeforeInterruption && !this.isUserPaused && this.currentStation) {
        if (!('audioSession' in navigator) || navigator.audioSession.state === 'active') {
          console.log('📱 Dispositivo en foco tras llamada. Reanudando emisión en vivo...');
          this.isInterrupted = false;
          this.wasPlayingBeforeInterruption = false;
          this.resumeRadio(true);
        }
      }
    };

    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        handleWakeOrFocus();
      }
    });
    window.addEventListener('pageshow', handleWakeOrFocus);
    window.addEventListener('focus', handleWakeOrFocus);
  }

  startInterruptionRecoveryMonitor() {
    // Depurado: eliminado para evitar sondeos en bucle que provocaban ducking en llamadas
  }

  stopInterruptionRecoveryMonitor() {
    // Depurado
  }

  resumeAfterInterruption() {
    if (this.isUserPaused || !this.currentStation) return;
    this.isInterrupted = false;
    this.wasPlayingBeforeInterruption = false;
    this.resumeRadio(true);
  }

  startAudioWatchdog() {
    this.stopAudioWatchdog();
    if (this.isUserPaused || this.isInterrupted || !this.currentStation) return;

    this.lastPlaybackTime = this.audioElement.currentTime;
    this.lastTimeAdvancedAt = Date.now();

    this.watchdogTimer = setInterval(() => {
      if (this.isUserPaused || this.isInterrupted || !this.currentStation) {
        this.stopAudioWatchdog();
        return;
      }

      // El watchdog solo actualiza la referencia de avance temporal
      // NUNCA fuerza .play() de forma agresiva ni destruye el socket
      const curTime = this.audioElement.currentTime;
      if (curTime !== this.lastPlaybackTime) {
        this.lastPlaybackTime = curTime;
        this.lastTimeAdvancedAt = Date.now();
      }
    }, 5000);
  }

  stopAudioWatchdog() {
    if (this.watchdogTimer) {
      clearInterval(this.watchdogTimer);
      this.watchdogTimer = null;
    }
  }

  scheduleStallRecovery(delayMs = 8000) {
    if (this.stallTimer) {
      clearTimeout(this.stallTimer);
      this.stallTimer = null;
    }
  }

  scheduleReconnect(delayMs = 2000) {
    if (this.isUserPaused || this.isInterrupted || !this.currentStation) return;
    if (this.reconnectTimer) clearTimeout(this.reconnectTimer);

    const backoff = Math.min(delayMs * Math.pow(1.3, this.reconnectAttempts), 8000);
    this.reconnectTimer = setTimeout(() => {
      if (!this.isUserPaused && !this.isInterrupted && this.currentStation) {
        this.reloadLiveStream(true);
      }
    }, backoff);
  }

  reloadLiveStream(forceTimestamp = false) {
    if (this.isUserPaused || !this.currentStation) return;
    if (this.isReloading) return;
    if (this.isInterrupted) {
      console.log('Recarga de stream pospuesta: llamada en curso.');
      return;
    }

    this.isReloading = true;
    this.isReconnecting = true;
    this.reconnectAttempts++;

    const station = this.currentStation;
    let url = station.streamUrl;

    if (this.reconnectAttempts > 2 && station.backupStreamUrl) {
      url = (this.reconnectAttempts % 2 === 0) ? station.backupStreamUrl : station.streamUrl;
    }

    console.log(`[ReloadLiveStream] Emisora: ${station.name} | Intento: ${this.reconnectAttempts}`);

    this.playRadioSource(url, true);

    this.updateMediaSession({
      title: station.name,
      artist: `${station.city || 'Chile'} • ${station.frequency || 'En Vivo'}`,
      album: 'Antena Sur • Radios de Chile',
      artwork: [
        { src: station.logo || './img/logos/cl-rad-rockandpop.png', sizes: '256x256', type: 'image/png' },
        { src: station.logo || './img/logos/cl-rad-rockandpop.png', sizes: '512x512', type: 'image/png' }
      ]
    });

    setTimeout(() => {
      this.isReloading = false;
      this.isReconnecting = false;
    }, 1500);
  }

  // Alias para compatibilidad hacia atrás
  reconnectRadioStream(forceReload = false) {
    if (forceReload) {
      this.reloadLiveStream(true);
    } else {
      this.resumeAfterInterruption();
    }
  }

  startNowPlayingPolling(station) {
    this.stopNowPlayingPolling();
    if (!station || station.type !== 'radio') return;

    // Actualización inmediata para que Android TV y celular muestren artista y programa sin demora
    const initialMeta = this.getStationDefaultMetadata(station);
    if (initialMeta) {
      this.updateNowPlayingUI(station, initialMeta);
    }

    const poll = async () => {
      if (!this.currentStation || this.currentStation.id !== station.id) return;
      try {
        const streamParam = encodeURIComponent(station.streamUrl || '');
        const res = await fetch(`/api/nowplaying?id=${encodeURIComponent(station.id)}&stream=${streamParam}`);
        if (!res.ok) return;
        const data = await res.json();
        if (this.currentStation && this.currentStation.id === station.id && data) {
          this.updateNowPlayingUI(station, data);
        }
      } catch (err) {
        console.warn('Error consultando now playing:', err);
      }
    };

    poll();
    this.nowPlayingTimer = setInterval(poll, 8000);
  }

  stopNowPlayingPolling() {
    if (this.nowPlayingTimer) {
      clearInterval(this.nowPlayingTimer);
      this.nowPlayingTimer = null;
    }
  }

  updateNowPlayingUI(station, data) {
    if (!station) return;
    const freq = station.frequency ? `[${station.frequency}] • ` : '';

    if (data && data.hasMusic && (data.artist || data.title)) {
      const artist = data.artist || 'Música';
      const title = data.title || '';
      const separator = (data.artist && data.title) ? '<span class="np-sep">—</span>' : '';

      // 1. Barra persistente inferior
      if (this.dom.radioSubtitle) {
        this.dom.radioSubtitle.innerHTML = `
          <div class="now-playing-container" title="En vivo: ${data.artist} - ${data.title}">
            <span class="now-playing-eq">
              <span class="eq-bar b1"></span>
              <span class="eq-bar b2"></span>
              <span class="eq-bar b3"></span>
            </span>
            <span class="now-playing-info">
              <strong class="np-artist">${artist}</strong>
              ${separator}
              <span class="np-title">${title}</span>
            </span>
          </div>
        `;
      }

      if (data.cover && this.dom.radioLogo) {
        this.dom.radioLogo.src = data.cover;
      }

      // 2. Reproductor móvil prominente estilo Spotify / Apple Music
      if (this.dom.radioLiveTitle) {
        this.dom.radioLiveTitle.textContent = title || station.name;
      }
      if (this.dom.radioLiveArtist) {
        this.dom.radioLiveArtist.textContent = artist;
      }
      if (data.cover && this.dom.radioBigArtwork) {
        this.dom.radioBigArtwork.src = data.cover;
      }
      if (data.cover && this.dom.radioAmbientBackdrop) {
        this.dom.radioAmbientBackdrop.style.backgroundImage = `radial-gradient(circle at 50% 30%, rgba(0, 229, 255, 0.2), transparent 70%), url('${data.cover}')`;
      }

      // 3. MediaSession para Apple CarPlay / Android Auto con la banda y tema en vivo
      this.updateMediaSession({
        title: title || station.name,
        artist: `${artist} • ${station.name}`,
        album: 'Antena Sur • Radios de Chile',
        artwork: [
          { src: data.cover || station.logo || './img/logos/cl-rad-rockandpop.png', sizes: '256x256', type: 'image/png' },
          { src: data.cover || station.logo || './img/logos/cl-rad-rockandpop.png', sizes: '512x512', type: 'image/png' }
        ]
      });

      // 4. Reproductor de pantalla completa (Blackmagic OS / Spotify)
      if (this.dom.radioFsTrackTitle) {
        this.dom.radioFsTrackTitle.textContent = title || station.name;
      }
      if (this.dom.radioFsTrackArtist) {
        this.dom.radioFsTrackArtist.textContent = `${artist} • Música en Directo`;
      }
      if (data.cover && this.dom.radioFsArtwork) {
        this.dom.radioFsArtwork.src = data.cover;
      }
    } else {
      if (this.dom.radioSubtitle) {
        this.dom.radioSubtitle.innerHTML = `
          <span class="now-playing-talk">
            <span class="live-dot"></span>
            <span>En Vivo • ${freq}${station.city}, ${station.countryName || 'Chile'}</span>
          </span>
        `;
      }
      if (this.dom.radioLogo && station.logo && this.dom.radioLogo.src !== station.logo) {
        this.dom.radioLogo.src = station.logo;
      }

      // Restaurar interfaz móvil a estado estándar de emisora
      if (this.dom.radioLiveTitle) {
        this.dom.radioLiveTitle.textContent = station.name;
      }
      if (this.dom.radioLiveArtist) {
        this.dom.radioLiveArtist.textContent = `Emisión en Vivo • ${freq}${station.city}, ${station.countryName || 'Chile'}`;
      }
      if (this.dom.radioBigArtwork && station.logo && this.dom.radioBigArtwork.src !== station.logo) {
        this.dom.radioBigArtwork.src = station.logo;
      }

      // Restaurar interfaz de pantalla completa con datos consistentes de la emisora
      const def = this.getStationDefaultMetadata(station);
      if (this.dom.radioFsTrackTitle) {
        this.dom.radioFsTrackTitle.textContent = def ? def.title : station.name;
      }
      if (this.dom.radioFsTrackArtist) {
        this.dom.radioFsTrackArtist.textContent = def ? `${def.artist} • En Vivo` : `Emisión Oficial en Vivo • ${freq}${station.city}, ${station.countryName || 'Chile'}`;
      }
      if (this.dom.radioFsArtwork && station.logo && this.dom.radioFsArtwork.src !== station.logo) {
        this.dom.radioFsArtwork.src = station.logo;
      }
    }
  }

  getStationDefaultMetadata(station) {
    if (!station) return null;
    const id = station.id || '';
    let artist = station.name;
    let title = 'Música en Vivo';

    if (id.includes('rockandpop')) {
      artist = 'Rock & Pop Chile';
      title = 'Clásicos y Tendencias del Rock & Pop';
    } else if (id.includes('futuro')) {
      artist = 'Radio Futuro';
      title = 'La Ley del Rock • Grandes Clásicos';
    } else if (id.includes('corazon')) {
      artist = 'Radio Corazón';
      title = 'La Más Querida • Cumbia y Tropical';
    } else if (id.includes('los40')) {
      artist = 'LOS40 Chile';
      title = 'Todos los Éxitos del Momento';
    } else if (id.includes('concierto')) {
      artist = 'Radio Concierto';
      title = 'Concierto Placer • Grandes Canciones';
    } else if (id.includes('pudahuel')) {
      artist = 'Radio Pudahuel';
      title = 'La Voz de Chile • Baladas y Éxitos';
    } else if (id.includes('activa')) {
      artist = 'Radio Activa';
      title = 'Solo Se Vive Una Vez • Hits Urbanos';
    } else if (id.includes('fmdos')) {
      artist = 'FMDOS';
      title = 'La Radio de los Dos • Amor y Música';
    } else if (id.includes('adn')) {
      artist = 'ADN Deportes y Noticias';
      title = 'Actualidad, Deportes y Señal en Vivo';
    } else if (id.includes('biobio')) {
      artist = 'Radio Bío Bío';
      title = 'Información al Instante y Análisis';
    } else if (id.includes('cooperativa')) {
      artist = 'Radio Cooperativa';
      title = 'El Diario de Cooperativa • Noticias';
    } else if (id.includes('infinita')) {
      artist = 'Radio Infinita';
      title = 'Palabras con Poder • Selección Musical';
    } else if (id.includes('play')) {
      artist = 'Play FM';
      title = 'Música Sofisticada y Pop Global';
    } else if (id.includes('sonar')) {
      artist = 'Sonar FM';
      title = 'Rock, Cultura y Opinión';
    } else if (id.includes('disney')) {
      artist = 'Radio Disney Chile';
      title = 'Lo que Quieres Escuchar • Pop & Hits';
    } else if (id.includes('carolina')) {
      artist = 'Radio Carolina';
      title = 'La Más Prendida • Urban & Dance';
    } else {
      artist = station.name;
      title = (station.genre || 'Música') + ' • Señal en Vivo';
    }

    return {
      artist: artist,
      title: title,
      hasMusic: true,
      cover: station.logo || './img/logos/cl-rad-rockandpop.png'
    };
  }

  /* ========================================================================
     CANVAS AUDIO VISUALIZER (Barra Inferior y Tarjeta Móvil)
     ======================================================================== */

  startVisualizer() {
    const canvases = [this.dom.radioVisualizerCanvas, this.dom.radioBigVisualizerCanvas].filter(Boolean);
    if (canvases.length === 0) return;

    let phase = 0;
    const barCount = 26;
    const heights = new Array(barCount).fill(10);

    const render = () => {
      this.visualizerAnimationId = requestAnimationFrame(render);

      canvases.forEach(canvas => {
        if (!canvas || canvas.offsetParent === null) return;
        const width = canvas.width = canvas.clientWidth || 300;
        const height = canvas.height = canvas.clientHeight || 45;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, width, height);

        const gap = 3;
        const barWidth = (width - (barCount - 1) * gap) / barCount;

        for (let i = 0; i < barCount; i++) {
          const target = Math.sin(phase * 1.5 + i * 0.45) * 0.4 +
                         Math.cos(phase * 0.9 - i * 0.3) * 0.3 + 0.35;
          const barHeight = Math.max(3, (target * height * 0.85));

          const x = i * (barWidth + gap);
          const y = height - barHeight;

          const gradient = ctx.createLinearGradient(0, height, 0, 0);
          gradient.addColorStop(0, '#00d4ff');
          gradient.addColorStop(0.6, '#3b82f6');
          gradient.addColorStop(1, '#a855f7');

          ctx.fillStyle = gradient;
          ctx.beginPath();
          if (ctx.roundRect) {
            ctx.roundRect(x, y, Math.max(1, barWidth), barHeight, [2, 2, 0, 0]);
          } else {
            ctx.rect(x, y, Math.max(1, barWidth), barHeight);
          }
          ctx.fill();
        }
      });

      phase += 0.08;
    };

    if (this.visualizerAnimationId) {
      cancelAnimationFrame(this.visualizerAnimationId);
    }
    render();
  }

  stopVisualizer() {
    if (this.visualizerAnimationId) {
      cancelAnimationFrame(this.visualizerAnimationId);
      this.visualizerAnimationId = null;
    }
    const canvases = [this.dom.radioVisualizerCanvas, this.dom.radioBigVisualizerCanvas].filter(Boolean);
    canvases.forEach(canvas => {
      if (canvas) {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    });
  }

  /* ========================================================================
     CONTROLES COMUNES (Volumen, Iconos)
     ======================================================================== */

  setVolume(val) {
    this.volume = Math.max(0, Math.min(1, val));
    this.audioElement.volume = this.volume;
    if (this.dom.tvVideo) this.dom.tvVideo.volume = this.volume;

    localStorage.setItem('antena_sur_volume', this.volume.toString());

    if (this.dom.tvVolumeSlider) this.dom.tvVolumeSlider.value = this.volume;
    if (this.dom.radioVolumeSlider) this.dom.radioVolumeSlider.value = this.volume;
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    this.audioElement.muted = this.isMuted;
    if (this.dom.tvVideo) this.dom.tvVideo.muted = this.isMuted;

    const icon = this.isMuted ? '🔇' : '🔊';
    if (this.dom.tvMuteBtn) this.dom.tvMuteBtn.textContent = icon;
    if (this.dom.radioMuteBtn) this.dom.radioMuteBtn.textContent = icon;
  }

  updateTvPlayIcon(isPlaying) {
    if (this.dom.tvPlayBtn) {
      this.dom.tvPlayBtn.innerHTML = isPlaying
        ? `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>`
        : `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>`;
    }
  }

  updateRadioPlayIcon(isPlaying) {
    const playSvg = `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>`;
    const pauseSvg = `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>`;

    if (this.dom.radioPlayBtn) {
      this.dom.radioPlayBtn.innerHTML = isPlaying ? pauseSvg : playSvg;
    }

    if (this.dom.radioBigPlayBtn) {
      this.dom.radioBigPlayBtn.innerHTML = isPlaying
        ? `<svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>`
        : `<svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 4 19 12 6 20 6 4"/></svg>`;
    }
  }

  updateFavoriteButtons(stationId, isFav) {
    const starSvg = isFav
      ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="#f59e0b"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`
      : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;

    if (this.dom.tvFavoriteBtn) this.dom.tvFavoriteBtn.innerHTML = starSvg;
    if (this.dom.radioFavoriteBtn) this.dom.radioFavoriteBtn.innerHTML = starSvg;
    if (this.dom.radioBigFavBtn) {
      this.dom.radioBigFavBtn.innerHTML = starSvg;
      this.dom.radioBigFavBtn.classList.toggle('is-favorited', Boolean(isFav));
    }
  }
}



  /* ========================================================================
     SOURCE MODULE: filters.js
     ======================================================================== */

/**
 * ANTENA SUR - Filters Engine
 * Manejo de navegación por tipo de medio (TV / Radio / Favoritos), géneros y buscador
 * (Se eliminaron los filtros innecesarios de región y ciudad por requerimiento de usuario)
 */
class FiltersEngine {
  constructor(dataManager, favoritesManager, onFilterChange) {
    this.dm = dataManager;
    this.fav = favoritesManager;
    this.onFilterChange = onFilterChange;

    // Estado actual de filtros simplificado
    this.state = {
      type: 'tv',          // 'tv' | 'radio' | 'all' | 'favorites'
      genre: 'all',
      search: ''
    };

    // Referencias a elementos del DOM
    this.dom = {
      typeTabs: document.querySelectorAll('.type-tab'),
      genrePills: document.getElementById('genrePills'),
      searchInput: document.getElementById('searchInput'),
      clearSearchBtn: document.getElementById('clearSearchBtn'),
      clearAllFiltersBtn: document.getElementById('clearAllFiltersBtn'),
      resultsTitle: document.getElementById('resultsTitle'),
      resultsCountBadge: document.getElementById('resultsCountBadge'),
      favCounterBadge: document.getElementById('favCounterBadge')
    };

    this.initEvents();
  }

  init() {
    this.renderGenrePills();
    this.updateFavCounter();
  }

  initEvents() {
    // Tabs de Tipo (TV, Radios, Todos)
    if (this.dom.typeTabs) {
      this.dom.typeTabs.forEach(tab => {
        tab.addEventListener('click', () => {
          const type = tab.getAttribute('data-type');
          this.setType(type);
        });
      });
    }

    // Input de Búsqueda con debounce ligero
    if (this.dom.searchInput) {
      let timeout;
      this.dom.searchInput.addEventListener('input', (e) => {
        clearTimeout(timeout);
        const val = e.target.value.trim();
        if (this.dom.clearSearchBtn) {
          this.dom.clearSearchBtn.style.display = val ? 'block' : 'none';
        }
        timeout = setTimeout(() => {
          this.state.search = val.toLowerCase();
          this.triggerChange();
        }, 150);
      });
    }

    // Botón para limpiar búsqueda
    if (this.dom.clearSearchBtn) {
      this.dom.clearSearchBtn.addEventListener('click', () => {
        if (this.dom.searchInput) {
          this.dom.searchInput.value = '';
          this.dom.clearSearchBtn.style.display = 'none';
        }
        this.state.search = '';
        this.triggerChange();
      });
    }

    // Botón para restablecer todos los filtros
    if (this.dom.clearAllFiltersBtn) {
      this.dom.clearAllFiltersBtn.addEventListener('click', () => {
        this.resetFilters();
      });
    }
  }

  setType(type) {
    this.state.type = type;

    // Actualizar tabs tipo dentro del panel
    if (this.dom.typeTabs) {
      this.dom.typeTabs.forEach(t => {
        t.classList.toggle('active', t.getAttribute('data-type') === type);
      });
    }

    // Sincronizar tabs de la cabecera superior
    document.querySelectorAll('.section-nav-tab').forEach(t => {
      t.classList.toggle('active', t.getAttribute('data-section') === type);
    });

    // Mostrar u ocultar sección prominente de radios estilo Spotify / Apple Music
    const radioSec = document.getElementById('radioSectionContainer');
    if (radioSec) {
      if (type === 'radio') {
        radioSec.classList.remove('is-hidden');
      } else {
        radioSec.classList.add('is-hidden');
      }
    }

    this.triggerChange();
  }

  renderGenrePills() {
    if (!this.dom.genrePills) return;
    const genres = [
      'Todos',
      'Noticias',
      'General',
      'Música',
      'Rock',
      'Romántica',
      'Deportes',
      'Cultura',
      'Entretenimiento'
    ];

    let html = '';
    genres.forEach(g => {
      const isActive = (g === 'Todos' && this.state.genre === 'all') || this.state.genre.toLowerCase() === g.toLowerCase();
      html += `
        <button class="genre-pill ${isActive ? 'active' : ''}" data-genre="${g === 'Todos' ? 'all' : g}">
          ${g}
        </button>
      `;
    });

    this.dom.genrePills.innerHTML = html;

    this.dom.genrePills.querySelectorAll('.genre-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        this.dom.genrePills.querySelectorAll('.genre-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        this.state.genre = pill.getAttribute('data-genre');
        this.triggerChange();
      });
    });
  }

  updateFavCounter() {
    if (this.dom.favCounterBadge) {
      const count = this.fav.getFavoritesCount();
      this.dom.favCounterBadge.textContent = count;
      this.dom.favCounterBadge.style.display = count > 0 ? 'inline-block' : 'none';
    }
  }

  /**
   * Ejecuta el filtrado de estaciones según tipo, género y búsqueda
   */
  getFilteredStations() {
    const all = this.dm.getAllStations();

    return all.filter(station => {
      // 1. Filtro Tipo (TV / Radio / Favoritos)
      if (this.state.type === 'favorites') {
        if (!this.fav.isFavorite(station.id)) return false;
      } else if (this.state.type !== 'all' && station.type !== this.state.type) {
        return false;
      }

      // 2. Filtro Género
      if (this.state.genre !== 'all') {
        const stationGenre = (station.genre || '').toLowerCase();
        if (!stationGenre.includes(this.state.genre.toLowerCase())) {
          return false;
        }
      }

      // 3. Filtro Búsqueda por Texto (Nombre, género, frecuencia, país o ciudad)
      if (this.state.search) {
        const q = this.state.search;
        const nameMatch = (station.name || '').toLowerCase().includes(q);
        const freqMatch = (station.frequency || '').toLowerCase().includes(q);
        const genreMatch = (station.genre || '').toLowerCase().includes(q);
        const countryMatch = (station.countryName || '').toLowerCase().includes(q) || (station.country || '').toLowerCase().includes(q);
        const geoMatch = (station.city || '').toLowerCase().includes(q) || (station.region || '').toLowerCase().includes(q);

        if (!nameMatch && !freqMatch && !genreMatch && !countryMatch && !geoMatch) {
          return false;
        }
      }

      return true;
    });
  }

  triggerChange() {
    const results = this.getFilteredStations();
    this.updateResultsHeader(results.length);
    this.updateFavCounter();
    if (this.onFilterChange) {
      this.onFilterChange(results);
    }
  }

  updateResultsHeader(count) {
    if (this.dom.resultsCountBadge) {
      this.dom.resultsCountBadge.textContent = `${count} señales`;
    }

    if (this.dom.resultsTitle) {
      let title = 'Señales en Vivo de Chile';
      if (this.state.type === 'tv') title = 'Canales de Televisión en Directo';
      else if (this.state.type === 'radio') title = 'Emisoras de Radio de Chile';
      else if (this.state.type === 'favorites') title = 'Mis Favoritos Guardados';

      if (this.state.genre !== 'all') {
        title += ` • ${this.state.genre}`;
      }
      this.dom.resultsTitle.textContent = title;
    }
  }

  resetFilters() {
    this.state = {
      type: 'all',
      genre: 'all',
      search: ''
    };
    if (this.dom.searchInput) this.dom.searchInput.value = '';
    if (this.dom.clearSearchBtn) this.dom.clearSearchBtn.style.display = 'none';

    if (this.dom.typeTabs) {
      this.dom.typeTabs.forEach(t => {
        t.classList.toggle('active', t.getAttribute('data-type') === 'all');
      });
    }

    this.renderGenrePills();
    this.triggerChange();
  }
}



  /* ========================================================================
     SOURCE MODULE: movies-engine.js
     ======================================================================== */

/**
 * ANTENA SUR - CINEMA & SERIES VOD ENGINE
 * Catálogo inteligente de Películas y Series con Reproductor Integrado
 * Streaming directo de Torrents (WebTorrent) y Servidor en la Aplicación
 */
class CinemaEngine {
  constructor(showToastFn) {
    this.showToast = showToastFn || ((msg) => console.log(msg));

    this.currentUser = localStorage.getItem('antena_cinema_active_user') || 'helmuth';
    this.userLibrary = {
      profile: null,
      favorites: [],
      in_progress: [],
      watched: []
    };
    this.lastProgressSave = 0;
    this.currentDetailMedia = null;
    this.authMode = 'login';

    this.state = {
      mode: 'movies', // 'movies' | 'series' | 'library'
      query: '',
      genre: 'all',
      sort: 'imdb_popular', // Por defecto clasificado por popularidad IMDb & Rotten Tomatoes
      page: 1,
      isLoading: false,
      hasMore: true,
      items: []
    };

    this.searchTimer = null;
    this.dom = {};
    this.activeMedia = null;
    this.statusPollTimer = null;
    this.activeTorrent = null;
  }

  init() {
    this.dom = {
      view: document.getElementById('cinemaVodView'),
      backBtn: document.getElementById('cinemaBackBtn'),
      searchInput: document.getElementById('cinemaSearchInput'),
      searchClearBtn: document.getElementById('cinemaSearchClearBtn'),
      modeMoviesBtn: document.getElementById('cinemaModeMoviesBtn'),
      modeSeriesBtn: document.getElementById('cinemaModeSeriesBtn'),
      modeLibraryBtn: document.getElementById('cinemaModeLibraryBtn'),
      userBtn: document.getElementById('cinemaUserBtn'),
      userAvatar: document.getElementById('cinemaUserAvatar'),
      userName: document.getElementById('cinemaUserName'),
      rankingFilters: document.getElementById('cinemaRankingFilters'),
      sortSelect: document.getElementById('cinemaSortSelect'),
      genresList: document.getElementById('cinemaGenresList'),
      resultsCount: document.getElementById('cinemaResultsCount'),
      contentArea: document.getElementById('cinemaContentArea'),
      grid: document.getElementById('cinemaGrid'),
      loadingState: document.getElementById('cinemaLoadingState'),
      emptyState: document.getElementById('cinemaEmptyState'),
      loadMoreBtn: document.getElementById('cinemaLoadMoreBtn'),

      // Carruseles Horizontales Plex (Continuar Viendo y Recomendados)
      continueSection: document.getElementById('cinemaContinueSection'),
      continueRail: document.getElementById('cinemaContinueRail'),
      recommendedSection: document.getElementById('cinemaRecommendedSection'),
      recommendedRail: document.getElementById('cinemaRecommendedRail'),

      // Modal de Usuario y Biblioteca Plex
      userModal: document.getElementById('cinemaUserModal'),
      closeUserModalBtn: document.getElementById('cinemaCloseUserModalBtn'),
      profileView: document.getElementById('cinemaProfileView'),
      modalAvatar: document.getElementById('cinemaModalAvatar'),
      modalName: document.getElementById('cinemaModalName'),
      modalStats: document.getElementById('cinemaModalStats'),
      profilesPills: document.getElementById('cinemaProfilesPills'),
      btnShowLoginForm: document.getElementById('cinemaBtnShowLoginForm'),
      btnShowRegisterForm: document.getElementById('cinemaBtnShowRegisterForm'),
      authForm: document.getElementById('cinemaAuthForm'),
      authFormTitle: document.getElementById('cinemaAuthFormTitle'),
      authUsernameInput: document.getElementById('cinemaAuthUsernameInput'),
      authPasswordInput: document.getElementById('cinemaAuthPasswordInput'),
      authDisplayNameGroup: document.getElementById('cinemaAuthDisplayNameGroup'),
      authDisplayNameInput: document.getElementById('cinemaAuthDisplayNameInput'),
      authErrorMsg: document.getElementById('cinemaAuthErrorMsg'),
      btnSubmitAuth: document.getElementById('cinemaBtnSubmitAuth'),
      btnCancelAuth: document.getElementById('cinemaBtnCancelAuth'),

      // Vista Dedicada de Detalles (Menú Completo • No Pop-up)
      detailView: document.getElementById('cinemaDetailView'),
      detailBackBtn: document.getElementById('cinemaDetailBackBtn'),
      detailBreadcrumb: document.getElementById('cinemaDetailBreadcrumb'),
      detailHeroPlayBtn: document.getElementById('cinemaDetailHeroPlayBtn'),
      detailScrollWrap: document.getElementById('cinemaDetailScrollWrap'),
      detailBackdrop: document.getElementById('cinemaDetailBackdrop'),
      detailPoster: document.getElementById('cinemaDetailPoster'),
      detailTrailerBtn: document.getElementById('cinemaDetailTrailerBtn'),
      detailBadgeType: document.getElementById('cinemaDetailBadgeType'),
      detailTitle: document.getElementById('cinemaDetailTitle'),
      detailMeta: document.getElementById('cinemaDetailMeta'),
      detailGenres: document.getElementById('cinemaDetailGenres'),
      detailFavBtn: document.getElementById('cinemaDetailFavBtn'),
      detailWatchedBtn: document.getElementById('cinemaDetailWatchedBtn'),
      detailSynopsis: document.getElementById('cinemaDetailSynopsis'),

      // Banner de Último Capítulo Subido (Exclusivo Series)
      detailLatestEpBanner: document.getElementById('cinemaDetailLatestEpBanner'),
      latestEpTitle: document.getElementById('cinemaLatestEpTitle'),
      latestEpDesc: document.getElementById('cinemaLatestEpDesc'),
      latestEpAction: document.getElementById('cinemaLatestEpAction'),

      // Encabezado y Contenido Principal (Calidades o Temporadas/Episodios)
      detailSectionHeading: document.getElementById('cinemaDetailSectionHeading'),
      detailMainContent: document.getElementById('cinemaDetailMainContent'),

      // Reproductor Cinema Integrado Nativo (Torrent P2P & OSD Controls)
      playerView: document.getElementById('cinemaPlayerView'),
      playerBackBtn: document.getElementById('cinemaPlayerBackBtn'),
      playerTitle: document.getElementById('cinemaPlayerTitle'),
      playerSubtitle: document.getElementById('cinemaPlayerSubtitle'),
      playerStatusBadge: document.getElementById('cinemaPlayerStatusBadge'),
      playerStatsBadge: document.getElementById('cinemaPlayerStatsBadge'),
      videoWrap: document.getElementById('cinemaPlayerVideoWrap'),
      videoElement: document.getElementById('cinemaVideoElement'),
      loadingOverlay: document.getElementById('cinemaPlayerLoadingOverlay'),
      loadingText: document.getElementById('cinemaPlayerLoadingText'),
      loadingStats: document.getElementById('cinemaPlayerLoadingStats'),
      progressFill: document.getElementById('cinemaPlayerProgressFill'),

      // OSD Feedback y Zonas Táctiles
      centerFeedback: document.getElementById('cinemaCenterFeedback'),
      feedbackIcon: document.getElementById('cinemaFeedbackIcon'),
      feedbackText: document.getElementById('cinemaFeedbackText'),
      touchLeft: document.getElementById('cinemaTouchLeft'),
      touchRight: document.getElementById('cinemaTouchRight'),
      subtitleDisplayOverlay: document.getElementById('cinemaSubtitleDisplayOverlay'),
      subtitleText: document.getElementById('cinemaSubtitleText'),

      // HUD Superior e Inferior
      playerHudTop: document.getElementById('cinemaPlayerHudTop'),
      playerHudBottom: document.getElementById('cinemaPlayerHudBottom'),

      // Barra de Tiempo y Scrubber
      timeCurrent: document.getElementById('cinemaTimeCurrent'),
      timeTotal: document.getElementById('cinemaTimeTotal'),
      scrubTrack: document.getElementById('cinemaScrubTrack'),
      scrubBuffer: document.getElementById('cinemaScrubBuffer'),
      scrubProgress: document.getElementById('cinemaScrubProgress'),
      scrubThumb: document.getElementById('cinemaScrubThumb'),
      scrubTooltip: document.getElementById('cinemaScrubTooltip'),

      // Botones de Control Inferiores
      ctrlPlayBtn: document.getElementById('cinemaCtrlPlayBtn'),
      playIcon: document.getElementById('cinemaPlayIcon'),
      pauseIcon: document.getElementById('cinemaPauseIcon'),
      ctrlRewindBtn: document.getElementById('cinemaCtrlRewindBtn'),
      ctrlForwardBtn: document.getElementById('cinemaCtrlForwardBtn'),
      ctrlVolumeBtn: document.getElementById('cinemaCtrlVolumeBtn'),
      volumeIcon: document.getElementById('cinemaVolumeIcon'),
      volumeSlider: document.getElementById('cinemaVolumeSlider'),
      ctrlStreamTag: document.getElementById('cinemaCtrlStreamTag'),

      // Menús y Botones de Ajustes
      ctrlAudioBtn: document.getElementById('cinemaCtrlAudioBtn'),
      ctrlSubtitlesBtn: document.getElementById('cinemaCtrlSubtitlesBtn'),
      subtitlesBtnLabel: document.getElementById('cinemaSubtitlesBtnLabel'),
      ctrlSpeedBtn: document.getElementById('cinemaCtrlSpeedBtn'),
      speedBtnLabel: document.getElementById('cinemaSpeedBtnLabel'),
      ctrlAspectBtn: document.getElementById('cinemaCtrlAspectBtn'),
      ctrlFullscreenBtn: document.getElementById('cinemaCtrlFullscreenBtn'),
      fullscreenEnterIcon: document.getElementById('cinemaFullscreenEnterIcon'),
      fullscreenExitIcon: document.getElementById('cinemaFullscreenExitIcon'),

      // Popovers
      subtitlesPopover: document.getElementById('cinemaSubtitlesPopover'),
      closeSubsPopoverBtn: document.getElementById('cinemaCloseSubsPopoverBtn'),
      subOptionsList: document.getElementById('cinemaSubOptionsList'),
      btnSyncMinus: document.getElementById('cinemaBtnSyncMinus'),
      btnSyncPlus: document.getElementById('cinemaBtnSyncPlus'),
      btnSyncReset: document.getElementById('cinemaBtnSyncReset'),
      syncOffsetVal: document.getElementById('cinemaSyncOffsetVal'),
      localSubInput: document.getElementById('cinemaLocalSubInput'),

      // Controles de Tamaño y Posición de Subtítulos
      subSizePills: document.getElementById('cinemaSubSizePills'),
      btnSubSizeMinus: document.getElementById('cinemaBtnSubSizeMinus'),
      btnSubSizePlus: document.getElementById('cinemaBtnSubSizePlus'),
      subPosPills: document.getElementById('cinemaSubPosPills'),

      audioPopover: document.getElementById('cinemaAudioPopover'),
      closeAudioPopoverBtn: document.getElementById('cinemaCloseAudioPopoverBtn'),
      audioOptionsList: document.getElementById('cinemaAudioOptionsList'),

      speedPopover: document.getElementById('cinemaSpeedPopover'),
      closeSpeedPopoverBtn: document.getElementById('cinemaCloseSpeedPopoverBtn')
    };

    this.playerState = {
      isScrubbing: false,
      isMuted: false,
      volume: 1.0,
      playbackRate: 1.0,
      aspectMode: 'contain',
      showRemainingTime: false,
      subOffset: 0.0,
      subSize: localStorage.getItem('antena_cinema_sub_size') || 'mediano',
      subPos: localStorage.getItem('antena_cinema_sub_pos') || 'normal',
      activeSubtitleId: 'off',
      subtitlesList: [],
      audioStreams: [],
      mediaInfo: null,
      selectedAudioTrack: null,
      forceTranscode: false,
      audioProbingTimer: null,
      audioProbeRetries: 0,
      hudHideTimer: null,
      lastFeedbackTimer: null,
      lastLeftTap: 0,
      lastRightTap: 0
    };

    this.bindEvents();
    this.initPlayerControls();
    this.renderGenres();
  }

  bindEvents() {
    // Botón Volver al Menú Principal
    if (this.dom.backBtn) {
      this.dom.backBtn.addEventListener('click', () => {
        this.close();
      });
    }

    // Buscador con debounce
    if (this.dom.searchInput) {
      this.dom.searchInput.addEventListener('input', (e) => {
        const val = e.target.value.trim();
        if (this.dom.searchClearBtn) {
          this.dom.searchClearBtn.style.display = val ? 'block' : 'none';
        }
        clearTimeout(this.searchTimer);
        this.searchTimer = setTimeout(() => {
          this.state.query = val;
          this.state.page = 1;
          this.loadCatalog(true);
        }, 350);
      });
    }

    // Limpiar búsqueda
    if (this.dom.searchClearBtn) {
      this.dom.searchClearBtn.addEventListener('click', () => {
        if (this.dom.searchInput) {
          this.dom.searchInput.value = '';
          this.dom.searchInput.focus();
        }
        this.dom.searchClearBtn.style.display = 'none';
        this.state.query = '';
        this.state.page = 1;
        this.loadCatalog(true);
      });
    }

    // Pestañas Principales de Navegación: Películas, Series, Mi Biblioteca
    if (this.dom.modeMoviesBtn) {
      this.dom.modeMoviesBtn.addEventListener('click', () => {
        if (this.state.mode === 'movies') return;
        this.setMode('movies');
      });
    }

    if (this.dom.modeSeriesBtn) {
      this.dom.modeSeriesBtn.addEventListener('click', () => {
        if (this.state.mode === 'series') return;
        this.setMode('series');
      });
    }

    if (this.dom.modeLibraryBtn) {
      this.dom.modeLibraryBtn.addEventListener('click', () => {
        if (this.state.mode === 'library') return;
        this.setMode('library');
      });
    }

    // Chips de Filtro y Clasificación (IMDb y Rotten Tomatoes)
    if (this.dom.rankingFilters) {
      this.dom.rankingFilters.querySelectorAll('.cinema-rank-chip').forEach(chip => {
        chip.addEventListener('click', () => {
          this.dom.rankingFilters.querySelectorAll('.cinema-rank-chip').forEach(c => c.classList.remove('is-active'));
          chip.classList.add('is-active');
          this.state.sort = chip.dataset.sort || 'imdb_popular';
          if (this.dom.sortSelect) this.dom.sortSelect.value = this.state.sort;
          this.state.page = 1;
          this.loadCatalog(true);
        });
      });
    }

    // Selector Ordenamiento (Sort Select oculto/auxiliar)
    if (this.dom.sortSelect) {
      this.dom.sortSelect.addEventListener('change', (e) => {
        this.state.sort = e.target.value;
        this.state.page = 1;
        this.loadCatalog(true);
      });
    }

    // Modal de Usuario y Perfil Plex
    if (this.dom.userBtn) {
      this.dom.userBtn.addEventListener('click', () => this.openUserModal());
    }
    if (this.dom.closeUserModalBtn) {
      this.dom.closeUserModalBtn.addEventListener('click', () => this.closeUserModal());
    }
    if (this.dom.userModal) {
      this.dom.userModal.addEventListener('click', (e) => {
        if (e.target === this.dom.userModal) this.closeUserModal();
      });
    }
    if (this.dom.btnShowLoginForm) {
      this.dom.btnShowLoginForm.addEventListener('click', () => this.showAuthForm('login'));
    }
    if (this.dom.btnShowRegisterForm) {
      this.dom.btnShowRegisterForm.addEventListener('click', () => this.showAuthForm('register'));
    }
    if (this.dom.btnCancelAuth) {
      this.dom.btnCancelAuth.addEventListener('click', () => this.showProfileView());
    }
    if (this.dom.btnSubmitAuth) {
      this.dom.btnSubmitAuth.addEventListener('click', () => this.submitAuth());
    }

    // Botones de Biblioteca y Visto en Vista de Detalles
    if (this.dom.detailFavBtn) {
      this.dom.detailFavBtn.addEventListener('click', () => {
        if (this.currentDetailMedia) {
          this.toggleFavoriteMedia(this.currentDetailMedia.item, this.currentDetailMedia.type);
        }
      });
    }
    if (this.dom.detailWatchedBtn) {
      this.dom.detailWatchedBtn.addEventListener('click', () => {
        if (this.currentDetailMedia) {
          this.toggleWatchedMedia(this.currentDetailMedia.item, this.currentDetailMedia.type);
        }
      });
    }

    // Botón Cargar Más
    if (this.dom.loadMoreBtn) {
      this.dom.loadMoreBtn.addEventListener('click', () => {
        this.state.page += 1;
        this.loadCatalog(false);
      });
    }

    // Botón Volver de la Vista de Detalles a Cartelera
    if (this.dom.detailBackBtn) {
      this.dom.detailBackBtn.addEventListener('click', () => this.closeDetail());
    }

    // Salir del Reproductor Cinema
    if (this.dom.playerBackBtn) {
      this.dom.playerBackBtn.addEventListener('click', () => {
        this.closeCinemaPlayer();
      });
    }

    // Atajos de Teclado y Control Remoto TV
    window.addEventListener('keydown', (e) => {
      // 1. Si el reproductor cinema está activo
      if (this.dom.playerView && !this.dom.playerView.classList.contains('is-hidden')) {
        this.resetHudTimer();

        if (e.key === 'Escape' || e.key === 'Back') {
          e.preventDefault();
          if (this.closeAllPopovers()) return;
          this.closeCinemaPlayer();
          return;
        }

        if (e.key === ' ' || e.code === 'Space' || e.key === 'k' || e.key === 'K') {
          e.preventDefault();
          this.togglePlayPause();
          return;
        }

        if (e.key === 'ArrowLeft' || e.key === 'j' || e.key === 'J') {
          e.preventDefault();
          this.seekRelative(-10);
          return;
        }

        if (e.key === 'ArrowRight' || e.key === 'l' || e.key === 'L') {
          e.preventDefault();
          this.seekRelative(10);
          return;
        }

        if (e.key === 'ArrowUp') {
          e.preventDefault();
          const video = this.dom.videoElement;
          if (video) {
            video.muted = false;
            video.volume = Math.min(1, Math.round((video.volume + 0.05) * 100) / 100);
            this.updateVolumeUI();
            this.showCenterFeedback('🔊', `${Math.round(video.volume * 100)}%`);
          }
          return;
        }

        if (e.key === 'ArrowDown') {
          e.preventDefault();
          const video = this.dom.videoElement;
          if (video) {
            video.volume = Math.max(0, Math.round((video.volume - 0.05) * 100) / 100);
            this.updateVolumeUI();
            this.showCenterFeedback('🔉', `${Math.round(video.volume * 100)}%`);
          }
          return;
        }

        if (e.key === 'm' || e.key === 'M') {
          e.preventDefault();
          const video = this.dom.videoElement;
          if (video) {
            video.muted = !video.muted;
            this.updateVolumeUI();
            this.showCenterFeedback(video.muted ? '🔇' : '🔊', video.muted ? 'SILENCIO' : 'SONIDO');
          }
          return;
        }

        if (e.key === 'f' || e.key === 'F') {
          e.preventDefault();
          this.toggleFullscreen();
          return;
        }

        if (e.key === 'c' || e.key === 'C' || e.key === 's' || e.key === 'S') {
          e.preventDefault();
          this.toggleSubtitlesPopover();
          return;
        }

        if (e.key === 'a' || e.key === 'A') {
          e.preventDefault();
          this.toggleAudioPopover();
          return;
        }

        return;
      }

      // 2. Si la vista dedicada de detalles está abierta
      if (this.dom.detailView && !this.dom.detailView.classList.contains('is-hidden')) {
        if (e.key === 'Escape' || e.key === 'Back') {
          e.preventDefault();
          this.closeDetail();
          return;
        }
      }

      // 3. Si la cartelera está abierta
      if (this.dom.view && !this.dom.view.classList.contains('is-hidden')) {
        if (e.key === 'Escape') {
          this.close();
        }
      }
    });
  }

  renderGenres() {
    if (!this.dom.genresList) return;

    const movieGenres = [
      { id: 'all', label: 'Todos' },
      { id: 'action', label: 'Acción' },
      { id: 'adventure', label: 'Aventura' },
      { id: 'animation', label: 'Animación' },
      { id: 'comedy', label: 'Comedia' },
      { id: 'crime', label: 'Crimen' },
      { id: 'documentary', label: 'Documental' },
      { id: 'drama', label: 'Drama' },
      { id: 'family', label: 'Familiar' },
      { id: 'fantasy', label: 'Fantasía' },
      { id: 'horror', label: 'Terror' },
      { id: 'mystery', label: 'Misterio' },
      { id: 'romance', label: 'Romance' },
      { id: 'sci-fi', label: 'Ciencia Ficción' },
      { id: 'thriller', label: 'Suspenso' }
    ];

    const seriesGenres = [
      { id: 'all', label: 'Todas' },
      { id: 'drama', label: 'Drama' },
      { id: 'action', label: 'Acción' },
      { id: 'comedy', label: 'Comedia' },
      { id: 'science-fiction', label: 'Ciencia Ficción' },
      { id: 'crime', label: 'Crimen' },
      { id: 'thriller', label: 'Suspenso' },
      { id: 'animation', label: 'Animación' }
    ];

    const genres = this.state.mode === 'movies' ? movieGenres : seriesGenres;
    this.dom.genresList.innerHTML = '';

    genres.forEach(g => {
      const chip = document.createElement('button');
      chip.className = `cinema-genre-chip ${this.state.genre === g.id ? 'is-active' : ''}`;
      chip.textContent = g.label;
      chip.dataset.genre = g.id;
      chip.addEventListener('click', () => {
        this.dom.genresList.querySelectorAll('.cinema-genre-chip').forEach(c => c.classList.remove('is-active'));
        chip.classList.add('is-active');
        this.state.genre = g.id;
        this.state.page = 1;
        this.loadCatalog(true);
      });
      this.dom.genresList.appendChild(chip);
    });
  }

  setMode(mode) {
    this.state.mode = mode;
    [this.dom.modeMoviesBtn, this.dom.modeSeriesBtn, this.dom.modeLibraryBtn].forEach(btn => {
      if (btn) btn.classList.remove('is-active');
    });

    if (mode === 'movies' && this.dom.modeMoviesBtn) this.dom.modeMoviesBtn.classList.add('is-active');
    if (mode === 'series' && this.dom.modeSeriesBtn) this.dom.modeSeriesBtn.classList.add('is-active');
    if (mode === 'library' && this.dom.modeLibraryBtn) this.dom.modeLibraryBtn.classList.add('is-active');

    if (this.dom.genresList) {
      this.dom.genresList.style.display = (mode === 'library') ? 'none' : 'flex';
    }
    if (this.dom.rankingFilters) {
      this.dom.rankingFilters.style.display = (mode === 'library') ? 'none' : 'flex';
    }
    if (this.dom.sortSelect) {
      this.dom.sortSelect.style.display = (mode === 'movies') ? 'block' : 'none';
    }

    this.state.page = 1;
    if (mode !== 'library') {
      this.renderGenres();
      this.loadCatalog(true);
    } else {
      this.renderLibraryView();
    }
  }

  async loadUserProfile() {
    try {
      const resp = await fetch(`/api/cinema/user/library?username=${encodeURIComponent(this.currentUser)}`);
      const data = await resp.json();
      if (data.ok && data.library) {
        const lib = data.library;
        this.userLibrary = {
          profile: {
            username: lib.username || this.currentUser,
            display_name: lib.displayName || lib.display_name || this.currentUser,
            avatar_color: lib.avatarColor || lib.avatar_color || '#00e5ff'
          },
          favorites: lib.favorites || [],
          in_progress: lib.inProgress || lib.in_progress || [],
          watched: Array.isArray(lib.watched)
            ? lib.watched
            : Object.keys(lib.watched || {}).map(k => ({ media_id: k, ...(typeof lib.watched[k] === 'object' ? lib.watched[k] : {}) }))
        };
        this.updateUserUI();
      }
    } catch (e) {
      console.error('Error al cargar biblioteca de usuario:', e);
    }
  }

  updateUserUI() {
    const prof = (this.userLibrary && this.userLibrary.profile) || { display_name: this.currentUser, username: this.currentUser };
    const name = prof.display_name || prof.username || 'Usuario';
    const initial = name.charAt(0).toUpperCase();

    if (this.dom.userAvatar) this.dom.userAvatar.textContent = initial;
    if (this.dom.userName) this.dom.userName.textContent = name;
    if (this.dom.modalAvatar) this.dom.modalAvatar.textContent = initial;
    if (this.dom.modalName) this.dom.modalName.textContent = name;

    const favs = (this.userLibrary && this.userLibrary.favorites) ? this.userLibrary.favorites.length : 0;
    const prog = (this.userLibrary && this.userLibrary.in_progress) ? this.userLibrary.in_progress.length : 0;
    const watched = (this.userLibrary && this.userLibrary.watched) ? this.userLibrary.watched.length : 0;

    if (this.dom.modalStats) {
      this.dom.modalStats.textContent = `${favs} favoritos • ${prog} en curso • ${watched} vistos`;
    }
  }

  async openUserModal() {
    if (!this.dom.userModal) return;
    this.dom.userModal.classList.remove('is-hidden');
    this.dom.userModal.style.removeProperty('display');
    this.showProfileView();
    this.updateUserUI();

    try {
      const resp = await fetch('/api/cinema/auth/users');
      const data = await resp.json();
      const list = data.profiles || data.users || [];
      if (data.ok && list && this.dom.profilesPills) {
        this.dom.profilesPills.innerHTML = '';
        list.forEach(u => {
          const pill = document.createElement('button');
          pill.className = `cinema-profile-pill ${u.username === this.currentUser ? 'is-active' : ''}`;
          pill.innerHTML = `
            <span class="cinema-profile-pill-dot" style="background:${u.avatarColor || u.avatar_color || '#00e5ff'};"></span>
            <span>${u.displayName || u.display_name || u.username}</span>
          `;
          pill.addEventListener('click', () => {
            this.switchProfile(u.username);
          });
          this.dom.profilesPills.appendChild(pill);
        });
      }
    } catch (e) {
      console.error('Error al listar perfiles:', e);
    }
  }

  closeUserModal() {
    if (this.dom.userModal) {
      this.dom.userModal.classList.add('is-hidden');
      this.dom.userModal.style.setProperty('display', 'none', 'important');
    }
  }

  showProfileView() {
    if (this.dom.profileView) this.dom.profileView.style.removeProperty('display');
    if (this.dom.authForm) {
      this.dom.authForm.classList.add('is-hidden');
      this.dom.authForm.style.setProperty('display', 'none', 'important');
    }
  }

  showAuthForm(type) {
    if (this.dom.profileView) this.dom.profileView.style.setProperty('display', 'none', 'important');
    if (this.dom.authForm) {
      this.dom.authForm.classList.remove('is-hidden');
      this.dom.authForm.style.removeProperty('display');
    }
    this.authMode = type;
    if (this.dom.authFormTitle) {
      this.dom.authFormTitle.textContent = (type === 'register') ? 'Crear Nuevo Usuario' : 'Iniciar Sesión';
    }
    if (this.dom.authDisplayNameGroup) {
      this.dom.authDisplayNameGroup.style.display = (type === 'register') ? 'flex' : 'none';
    }
    if (this.dom.authUsernameInput) this.dom.authUsernameInput.value = '';
    if (this.dom.authPasswordInput) this.dom.authPasswordInput.value = '';
    if (this.dom.authDisplayNameInput) this.dom.authDisplayNameInput.value = '';
    if (this.dom.authErrorMsg) {
      this.dom.authErrorMsg.classList.add('is-hidden');
      this.dom.authErrorMsg.textContent = '';
    }
    if (this.dom.authUsernameInput) this.dom.authUsernameInput.focus();
  }

  showAuthError(msg) {
    if (this.dom.authErrorMsg) {
      this.dom.authErrorMsg.textContent = msg;
      this.dom.authErrorMsg.classList.remove('is-hidden');
    }
  }

  async submitAuth() {
    const username = (this.dom.authUsernameInput ? this.dom.authUsernameInput.value : '').trim();
    const password = (this.dom.authPasswordInput ? this.dom.authPasswordInput.value : '').trim();
    const displayName = (this.dom.authDisplayNameInput ? this.dom.authDisplayNameInput.value : '').trim();

    if (!username || !password) {
      this.showAuthError('Por favor ingresa usuario y contraseña.');
      return;
    }

    try {
      const endpoint = (this.authMode === 'register') ? '/api/cinema/auth/register' : '/api/cinema/auth/login';
      const body = { username, password };
      if (this.authMode === 'register' && displayName) body.display_name = displayName;

      const resp = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      const data = await resp.json();

      if (data.ok) {
        await this.switchProfile(data.username || username);
        this.showToast((this.authMode === 'register') ? `¡Bienvenido ${username}! Cuenta creada.` : `¡Sesión iniciada como ${username}!`, 'success');
      } else {
        this.showAuthError(data.error || 'Error al procesar la solicitud.');
      }
    } catch (e) {
      console.error('Error en autenticación:', e);
      this.showAuthError('Error de conexión con el servidor.');
    }
  }

  async switchProfile(username) {
    this.currentUser = username;
    localStorage.setItem('antena_cinema_active_user', username);
    await this.loadUserProfile();
    await this.loadContinueWatching();
    await this.loadRecommendations();
    this.closeUserModal();
    this.showToast(`Perfil cambiado a: ${username}`, 'success');
    if (this.state.mode === 'library') {
      this.renderLibraryView();
    }
  }

  isMediaFavorite(id) {
    if (!this.userLibrary || !this.userLibrary.favorites) return false;
    return this.userLibrary.favorites.some(f => f.media_id === String(id));
  }

  isMediaWatched(id) {
    if (!this.userLibrary || !this.userLibrary.watched) return false;
    return this.userLibrary.watched.some(w => w.media_id === String(id));
  }

  async toggleFavoriteMedia(item, type) {
    const id = type === 'movie' ? `movie_${item.id}` : `series_${item.id || item.imdb}`;
    const isFav = this.isMediaFavorite(id);
    const poster = item.medium_cover_image || item.large_cover_image || item.poster || '';
    const title = item.title || item.name || '';
    const genres = item.genres || [];

    try {
      const resp = await fetch('/api/cinema/user/favorite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: this.currentUser,
          action: isFav ? 'remove' : 'add',
          item: {
            media_id: id,
            media_type: type,
            title: title,
            poster: poster,
            year: item.year || item.premiered || '',
            genres: genres,
            imdb_rating: item.imdb_rating || item.rating || 0,
            rotten_tomatoes: item.rotten_tomatoes || null
          }
        })
      });
      const data = await resp.json();
      if (data.ok) {
        await this.loadUserProfile();
        this.showToast(isFav ? `Eliminado de Mi Biblioteca: ${title}` : `Guardado en Mi Biblioteca: ${title}`, 'success');
        this.updateDetailActionButtons();
        if (this.state.mode === 'library') {
          this.renderLibraryView();
        } else {
          const btn = document.querySelector(`.cinema-card-fav-btn[data-fav-id="${id}"]`);
          if (btn) {
            btn.classList.toggle('is-active', !isFav);
            btn.textContent = !isFav ? '❤️' : '🤍';
          }
        }
      }
    } catch (e) {
      console.error('Error al alternar favorito:', e);
    }
  }

  async toggleWatchedMedia(item, type) {
    const id = type === 'movie' ? `movie_${item.id}` : `series_${item.id || item.imdb}`;
    const isWatched = this.isMediaWatched(id);
    const title = item.title || item.name || '';

    try {
      const resp = await fetch('/api/cinema/user/mark_watched', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: this.currentUser,
          media_id: id,
          media_type: type,
          title: title,
          poster: item.medium_cover_image || item.large_cover_image || item.poster || '',
          action: isWatched ? 'unmark' : 'mark'
        })
      });
      const data = await resp.json();
      if (data.ok) {
        await this.loadUserProfile();
        this.showToast(isWatched ? `Marcado como no visto: ${title}` : `Marcado como visto: ${title}`, 'success');
        this.updateDetailActionButtons();
        if (this.state.mode === 'library') {
          this.renderLibraryView();
        }
      }
    } catch (e) {
      console.error('Error al alternar visto:', e);
    }
  }

  updateDetailActionButtons() {
    if (!this.currentDetailMedia || !this.dom.detailFavBtn || !this.dom.detailWatchedBtn) return;
    const { item, type } = this.currentDetailMedia;
    const id = type === 'movie' ? `movie_${item.id}` : `series_${item.id || item.imdb}`;
    const isFav = this.isMediaFavorite(id);
    const isWatched = this.isMediaWatched(id);

    // Botón Favorito / Biblioteca
    if (isFav) {
      this.dom.detailFavBtn.classList.add('is-in-library');
      const icon = this.dom.detailFavBtn.querySelector('.lib-icon');
      const text = this.dom.detailFavBtn.querySelector('.lib-text');
      if (icon) icon.textContent = '❤️';
      if (text) text.textContent = 'EN MI BIBLIOTECA (QUITAR)';
    } else {
      this.dom.detailFavBtn.classList.remove('is-in-library');
      const icon = this.dom.detailFavBtn.querySelector('.lib-icon');
      const text = this.dom.detailFavBtn.querySelector('.lib-text');
      if (icon) icon.textContent = '➕';
      if (text) text.textContent = 'AGREGAR A MI BIBLIOTECA';
    }

    // Botón Visto
    if (isWatched) {
      this.dom.detailWatchedBtn.classList.add('is-watched');
      const icon = this.dom.detailWatchedBtn.querySelector('.watched-icon');
      const text = this.dom.detailWatchedBtn.querySelector('.watched-text');
      if (icon) icon.textContent = '✓';
      if (text) text.textContent = 'VISTO (DESMARCAR)';
    } else {
      this.dom.detailWatchedBtn.classList.remove('is-watched');
      const icon = this.dom.detailWatchedBtn.querySelector('.watched-icon');
      const text = this.dom.detailWatchedBtn.querySelector('.watched-text');
      if (icon) icon.textContent = '👁️';
      if (text) text.textContent = 'MARCAR COMO VISTO';
    }
  }

  async loadContinueWatching() {
    if (!this.dom.continueSection || !this.dom.continueRail) return;
    try {
      const inProgress = (this.userLibrary && this.userLibrary.in_progress) || [];
      if (inProgress.length === 0) {
        this.dom.continueSection.style.display = 'none';
        return;
      }
      this.dom.continueSection.style.display = 'block';
      this.renderContinueWatching(inProgress);
    } catch (e) {
      console.error('Error al renderizar continuar viendo:', e);
    }
  }

  renderContinueWatching(items) {
    if (!this.dom.continueRail) return;
    this.dom.continueRail.innerHTML = '';

    items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'cinema-continue-card';
      card.tabIndex = 0;
      card.setAttribute('role', 'button');

      const pct = (item.duration && item.duration > 0)
        ? Math.min(100, Math.round((item.progress_seconds / item.duration) * 100))
        : 50;

      const title = item.title || 'Continuar viendo';
      const meta = item.media_type === 'series'
        ? (item.episode_info ? `S${item.episode_info.season}E${item.episode_info.episode}` : 'Serie')
        : 'Película';
      const remSec = (item.duration && item.progress_seconds)
        ? Math.max(0, Math.round(item.duration - item.progress_seconds))
        : null;
      const remText = remSec ? `Quedan ${Math.round(remSec / 60)} min` : `${pct}% visto`;

      card.innerHTML = `
        <div class="cinema-continue-thumb-wrap">
          <img class="cinema-continue-thumb" src="${item.poster || './img/logos/default-channel.svg'}" alt="${title}" onerror="this.src='./img/logos/default-channel.svg'">
          <div class="cinema-continue-play-overlay">▶</div>
          <div class="cinema-continue-progress-bar" style="width: ${pct}%;"></div>
        </div>
        <div class="cinema-continue-info">
          <h4 class="cinema-continue-title" title="${title}">${title}</h4>
          <div class="cinema-continue-meta">
            <span>${meta}</span>
            <span>${remText}</span>
          </div>
        </div>
      `;

      card.addEventListener('click', () => {
        this.resumeItem(item);
      });
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.resumeItem(item);
        }
      });

      this.dom.continueRail.appendChild(card);
    });
  }

  async loadRecommendations() {
    if (!this.dom.recommendedSection || !this.dom.recommendedRail) return;
    try {
      const resp = await fetch(`/api/cinema/user/recommendations?username=${encodeURIComponent(this.currentUser)}`);
      const data = await resp.json();
      if (data.ok && data.recommendations && data.recommendations.length > 0) {
        this.dom.recommendedSection.style.display = 'block';
        this.renderRecommendations(data.recommendations);
      } else {
        this.dom.recommendedSection.style.display = 'none';
      }
    } catch (e) {
      console.error('Error al cargar recomendaciones:', e);
    }
  }

  renderRecommendations(items) {
    if (!this.dom.recommendedRail) return;
    this.dom.recommendedRail.innerHTML = '';

    items.forEach(movie => {
      const card = document.createElement('div');
      card.className = 'cinema-card';
      card.style.flex = '0 0 190px';
      card.tabIndex = 0;
      card.setAttribute('role', 'button');

      const posterUrl = movie.medium_cover_image || movie.large_cover_image || movie.poster || '';
      const imdbScore = movie.imdb_rating || movie.rating || null;
      const rt = movie.rotten_tomatoes;
      const rtScore = rt ? rt.critics : null;
      const rtIcon = rt ? rt.icon : '🍅';
      const isFav = this.isMediaFavorite(`movie_${movie.id}`);
      const isWatched = this.isMediaWatched(`movie_${movie.id}`);

      card.innerHTML = `
        <div class="cinema-card-poster-wrap">
          <img class="cinema-card-poster" src="${posterUrl}" alt="${movie.title}" loading="lazy" onerror="this.src='./img/logos/default-channel.svg'">
          <span class="cinema-badge-quality">HD</span>
          ${isWatched ? '<span class="cinema-badge-watched">✓ Visto</span>' : ''}
          <div class="cinema-card-badges-top">
            ${imdbScore ? `<span class="cinema-badge-imdb">⭐ ${Number(imdbScore).toFixed(1)} IMDb</span>` : ''}
            ${rtScore !== null && rtScore !== undefined ? `<span class="cinema-badge-rt">${rtIcon} ${rtScore}% RT</span>` : ''}
          </div>
          <button class="cinema-card-fav-btn ${isFav ? 'is-active' : ''}" data-fav-id="movie_${movie.id}" title="${isFav ? 'Quitar de favoritos' : 'Agregar a favoritos'}">${isFav ? '❤️' : '🤍'}</button>
          ${movie.year ? `<span class="cinema-badge-year">${movie.year}</span>` : ''}
        </div>
        <div class="cinema-card-info">
          <h4 class="cinema-card-title" title="${movie.title}">${movie.title}</h4>
          <span class="cinema-card-genres">${(movie.genres || []).slice(0, 2).join(' • ') || 'Recomendado'}</span>
        </div>
      `;

      card.addEventListener('click', (e) => {
        if (e.target.closest('.cinema-card-fav-btn')) {
          e.stopPropagation();
          this.toggleFavoriteMedia(movie, 'movie');
          return;
        }
        this.openMovieDetail(movie.id);
      });

      this.dom.recommendedRail.appendChild(card);
    });
  }

  resumeItem(item) {
    if (item.media_type === 'movie' && item.torrent_data && item.torrent_data.parentMedia) {
      this.playMovie(item.torrent_data.parentMedia, {
        magnet_url: item.torrent_data.torrentId,
        fileIdx: item.torrent_data.fileIdx,
        quality: '1080p'
      });
      if (this.dom.videoElement && item.progress_seconds > 0) {
        const onLoaded = () => {
          this.dom.videoElement.currentTime = item.progress_seconds;
          this.dom.videoElement.removeEventListener('loadedmetadata', onLoaded);
        };
        this.dom.videoElement.addEventListener('loadedmetadata', onLoaded);
      }
    } else if (item.media_type === 'series' && item.torrent_data && item.torrent_data.parentMedia) {
      const show = item.torrent_data.parentMedia;
      const s = item.episode_info ? item.episode_info.season : 1;
      const epNum = item.episode_info ? item.episode_info.episode : 1;
      this.playEpisode(show, { season: s, number: epNum }, {
        magnet_url: item.torrent_data.torrentId,
        fileIdx: item.torrent_data.fileIdx
      });
      if (this.dom.videoElement && item.progress_seconds > 0) {
        const onLoaded = () => {
          this.dom.videoElement.currentTime = item.progress_seconds;
          this.dom.videoElement.removeEventListener('loadedmetadata', onLoaded);
        };
        this.dom.videoElement.addEventListener('loadedmetadata', onLoaded);
      }
    } else {
      this.state.query = item.title;
      if (this.dom.searchInput) this.dom.searchInput.value = item.title;
      this.loadCatalog(true);
    }
  }

  renderLibraryView() {
    if (!this.dom.grid) return;
    this.dom.grid.innerHTML = '';
    if (this.dom.loadingState) this.dom.loadingState.style.display = 'none';
    if (this.dom.loadMoreBtn) this.dom.loadMoreBtn.style.display = 'none';

    const favs = (this.userLibrary && this.userLibrary.favorites) || [];
    const watched = (this.userLibrary && this.userLibrary.watched) || [];
    const inProgress = (this.userLibrary && this.userLibrary.in_progress) || [];

    if (this.dom.resultsCount) {
      this.dom.resultsCount.textContent = `${favs.length} favoritos • ${watched.length} vistos`;
    }

    if (favs.length === 0 && watched.length === 0 && inProgress.length === 0) {
      if (this.dom.emptyState) {
        this.dom.emptyState.style.display = 'flex';
        this.dom.emptyState.innerHTML = `
          <div style="font-size:3rem;">⭐</div>
          <h3 style="color:#ffffff; margin:8px 0;">Tu Biblioteca Personal está Vacía</h3>
          <p style="color:#94a3b8; max-width:480px;">Navega por las pestañas de <strong>PELÍCULAS</strong> o <strong>SERIES</strong> y haz clic en <strong>➕ AGREGAR A MI BIBLIOTECA</strong> o en el corazón ❤️ para guardar tus títulos favoritos aquí.</p>
        `;
      }
      return;
    }

    if (this.dom.emptyState) this.dom.emptyState.style.display = 'none';

    favs.forEach(f => {
      const card = document.createElement('div');
      card.className = 'cinema-card';
      card.tabIndex = 0;
      card.setAttribute('role', 'button');

      const isMovie = f.media_type === 'movie';
      const rawId = f.media_id.replace(/^movie_/, '').replace(/^series_/, '');
      const posterUrl = f.poster || '';
      const isWatched = this.isMediaWatched(f.media_id);
      const imdbScore = f.imdb_rating ? Number(f.imdb_rating).toFixed(1) : null;
      const rt = f.rotten_tomatoes;
      const rtScore = rt ? rt.critics : null;
      const rtIcon = rt ? rt.icon : '🍅';

      card.innerHTML = `
        <div class="cinema-card-poster-wrap">
          <img class="cinema-card-poster" src="${posterUrl}" alt="${f.title}" loading="lazy" onerror="this.src='./img/logos/default-channel.svg'">
          <span class="cinema-badge-quality">${isMovie ? 'PELÍCULA' : 'SERIE'}</span>
          ${isWatched ? '<span class="cinema-badge-watched">✓ Visto</span>' : ''}
          <div class="cinema-card-badges-top">
            ${imdbScore ? `<span class="cinema-badge-imdb">⭐ ${imdbScore} IMDb</span>` : ''}
            ${rtScore !== null && rtScore !== undefined ? `<span class="cinema-badge-rt">${rtIcon} ${rtScore}% RT</span>` : ''}
          </div>
          <button class="cinema-card-fav-btn is-active" data-fav-id="${f.media_id}" title="Quitar de favoritos">❤️</button>
          ${f.year ? `<span class="cinema-badge-year">${f.year}</span>` : ''}
        </div>
        <div class="cinema-card-info">
          <h4 class="cinema-card-title" title="${f.title}">${f.title}</h4>
          <span class="cinema-card-genres">${(f.genres || []).slice(0, 2).join(' • ') || (isMovie ? 'Película' : 'Serie')}</span>
        </div>
      `;

      card.addEventListener('click', (e) => {
        if (e.target.closest('.cinema-card-fav-btn')) {
          e.stopPropagation();
          this.toggleFavoriteMedia(f, f.media_type);
          return;
        }
        if (isMovie) {
          this.openMovieDetail(rawId);
        } else {
          this.openSeriesDetail({ id: rawId, imdb: rawId, name: f.title, poster: posterUrl });
        }
      });

      this.dom.grid.appendChild(card);
    });
  }

  open() {
    // Detener la reproducción de radio y TV inmediatamente al entrar a Cine y Series
    const player = window.AntenaSurPlayer || (window.__antenaSurApp ? window.__antenaSurApp.player : null);
    if (player) {
      if (player.isRadioFullscreen) {
        if (player.dom && player.dom.radioFullscreenView) {
          player.dom.radioFullscreenView.classList.add('is-hidden');
        }
        player.isRadioFullscreen = false;
      }
      if (typeof player.stopRadio === 'function') {
        player.stopRadio();
      }
      if (typeof player.closeTvPlayer === 'function' && player.currentType === 'tv') {
        player.closeTvPlayer();
      }
    }

    if (this.dom.view) {
      this.dom.view.classList.remove('is-hidden');
      this.dom.view.scrollLeft = 0;
    }
    if (this.dom.contentArea) {
      this.dom.contentArea.scrollLeft = 0;
    }
    try { window.scrollTo(0, 0); } catch (e) {}
    try { if (document.body) document.body.scrollLeft = 0; } catch (e) {}
    this.loadUserProfile();
    this.loadContinueWatching();
    this.loadRecommendations();

    if (!this.state.items || this.state.items.length === 0) {
      this.loadCatalog(true);
    }

    // Navegación TV: enfocar primeramente los botones de Películas/Series
    if (this.dom.modeMoviesBtn) {
      setTimeout(() => {
        try { this.dom.modeMoviesBtn.focus(); } catch (e) {}
      }, 80);
    }
  }

  close() {
    this.closeCinemaPlayer(false);
    this.closeDetail();
    if (this.dom.view) {
      this.dom.view.classList.add('is-hidden');
    }
  }

  async loadCatalog(reset = false) {
    if (this.state.isLoading) return;
    this.state.isLoading = true;

    if (reset) {
      this.state.page = 1;
      this.state.items = [];
      if (this.dom.grid) this.dom.grid.innerHTML = '';
      if (this.dom.emptyState) this.dom.emptyState.style.display = 'none';
      if (this.dom.loadMoreBtn) this.dom.loadMoreBtn.style.display = 'none';
      if (this.dom.loadingState) this.dom.loadingState.style.display = 'flex';
    }

    try {
      if (this.state.mode === 'movies') {
        const queryParams = new URLSearchParams({
          query: this.state.query,
          genre: this.state.genre === 'all' ? '' : this.state.genre,
          sort_by: this.state.sort || 'imdb_popular',
          page: this.state.page,
          limit: 25
        });
        const resp = await fetch(`/api/cinema/movies?${queryParams.toString()}`);
        const data = await resp.json();

        if (this.dom.loadingState) this.dom.loadingState.style.display = 'none';

        if (data.ok && data.movies && data.movies.length > 0) {
          if (reset) {
            this.state.items = data.movies;
          } else {
            this.state.items = this.state.items.concat(data.movies);
          }
          this.renderMovies(data.movies, !reset);

          if (this.dom.resultsCount) {
            const total = data.movie_count || this.state.items.length;
            this.dom.resultsCount.textContent = `${total.toLocaleString()} títulos`;
          }
          if (this.dom.loadMoreBtn) {
            this.dom.loadMoreBtn.style.display = data.movies.length >= 25 ? 'block' : 'none';
          }
        } else {
          if (reset) {
            if (this.dom.emptyState) this.dom.emptyState.style.display = 'flex';
            if (this.dom.resultsCount) this.dom.resultsCount.textContent = '0 títulos';
          }
          if (this.dom.loadMoreBtn) this.dom.loadMoreBtn.style.display = 'none';
        }
      } else {
        // Modo Series
        const queryParams = new URLSearchParams({
          query: this.state.query,
          page: this.state.page
        });
        const resp = await fetch(`/api/cinema/series?${queryParams.toString()}`);
        const data = await resp.json();

        if (this.dom.loadingState) this.dom.loadingState.style.display = 'none';

        if (data.ok && data.shows && data.shows.length > 0) {
          let filteredShows = data.shows;
          if (this.state.genre && this.state.genre !== 'all') {
            filteredShows = data.shows.filter(s =>
              (s.genres || []).some(g => g.toLowerCase().includes(this.state.genre.toLowerCase()))
            );
          }

          if (reset) {
            this.state.items = filteredShows;
          } else {
            this.state.items = this.state.items.concat(filteredShows);
          }

          this.renderSeries(filteredShows, !reset);

          if (this.dom.resultsCount) {
            this.dom.resultsCount.textContent = `${this.state.items.length} series`;
          }
          if (this.dom.loadMoreBtn) {
            this.dom.loadMoreBtn.style.display = (!this.state.query && data.shows.length >= 25) ? 'block' : 'none';
          }
        } else {
          if (reset) {
            if (this.dom.emptyState) this.dom.emptyState.style.display = 'flex';
            if (this.dom.resultsCount) this.dom.resultsCount.textContent = '0 series';
          }
          if (this.dom.loadMoreBtn) this.dom.loadMoreBtn.style.display = 'none';
        }
      }
    } catch (err) {
      console.error('Error al cargar cartelera:', err);
      if (this.dom.loadingState) this.dom.loadingState.style.display = 'none';
      if (reset && this.dom.emptyState) this.dom.emptyState.style.display = 'flex';
      this.showToast('No se pudo conectar con el catálogo de cine', 'warning');
    } finally {
      this.state.isLoading = false;
    }
  }

  renderMovies(movies, append = false) {
    if (!this.dom.grid) return;
    if (!append) this.dom.grid.innerHTML = '';

    const fragment = document.createDocumentFragment();

    movies.forEach(movie => {
      const card = document.createElement('div');
      card.className = 'cinema-card';
      card.tabIndex = 0;
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `${movie.title} (${movie.year})`);

      const posterUrl = movie.medium_cover_image || movie.large_cover_image || '';
      const genresStr = (movie.genres || []).slice(0, 2).join(' • ');

      // Calidad de resolución máxima disponible
      let bestQuality = 'HD';
      if (movie.torrents && movie.torrents.length > 0) {
        if (movie.torrents.some(t => t.quality === '2160p')) bestQuality = '4K';
        else if (movie.torrents.some(t => t.quality === '1080p')) bestQuality = '1080p';
        else if (movie.torrents.some(t => t.quality === '720p')) bestQuality = '720p';
      }

      // Calificaciones IMDb y Rotten Tomatoes
      const imdbScore = movie.imdb_rating || (movie.rating ? movie.rating.toFixed(1) : null);
      const rt = movie.rotten_tomatoes;
      const rtScore = rt ? rt.critics : null;
      const rtIcon = rt ? rt.icon : '🍅';
      const rtClass = rt && rt.status === 'Certified Fresh' ? 'is-certified' : (rt && rt.status === 'Rotten' ? 'is-rotten' : '');

      const mediaId = `movie_${movie.id}`;
      const isFav = this.isMediaFavorite(mediaId);
      const isWatched = this.isMediaWatched(mediaId);

      card.innerHTML = `
        <div class="cinema-card-poster-wrap">
          ${posterUrl ? `
            <img class="cinema-card-poster" src="${posterUrl}" alt="${movie.title}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="cinema-poster-placeholder" style="display:none;">
              🎬
              <span>${movie.title}</span>
            </div>
          ` : `
            <div class="cinema-poster-placeholder">
              🎬
              <span>${movie.title}</span>
            </div>
          `}
          <span class="cinema-badge-quality">${bestQuality}</span>
          ${isWatched ? '<span class="cinema-badge-watched">✓ Visto</span>' : ''}
          <div class="cinema-card-badges-top">
            ${imdbScore ? `<span class="cinema-badge-imdb" title="Calificación IMDb">⭐ ${Number(imdbScore).toFixed(1)} IMDb</span>` : ''}
            ${rtScore !== null && rtScore !== undefined ? `<span class="cinema-badge-rt ${rtClass}" title="Tomatometer Rotten Tomatoes">${rtIcon} ${rtScore}% RT</span>` : ''}
          </div>
          <button class="cinema-card-fav-btn ${isFav ? 'is-active' : ''}" data-fav-id="${mediaId}" title="${isFav ? 'Quitar de favoritos' : 'Agregar a favoritos'}" tabindex="-1">${isFav ? '❤️' : '🤍'}</button>
          ${movie.year ? `<span class="cinema-badge-year">${movie.year}</span>` : ''}
        </div>
        <div class="cinema-card-info">
          <h4 class="cinema-card-title" title="${movie.title}">${movie.title}</h4>
          <span class="cinema-card-genres">${genresStr || 'Película'}</span>
        </div>
      `;

      card.addEventListener('click', (e) => {
        if (e.target.closest('.cinema-card-fav-btn')) {
          e.stopPropagation();
          this.toggleFavoriteMedia(movie, 'movie');
          return;
        }
        this.openMovieDetail(movie.id);
      });
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.openMovieDetail(movie.id);
        }
      });

      fragment.appendChild(card);
    });

    this.dom.grid.appendChild(fragment);
  }

  renderSeries(shows, append = false) {
    if (!this.dom.grid) return;
    if (!append) this.dom.grid.innerHTML = '';

    const fragment = document.createDocumentFragment();

    shows.forEach(show => {
      const card = document.createElement('div');
      card.className = 'cinema-card';
      card.tabIndex = 0;
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `${show.name} (${show.premiered || ''})`);

      const posterUrl = show.poster || '';
      const genresStr = (show.genres || []).slice(0, 2).join(' • ');

      // Calificaciones IMDb y Rotten Tomatoes
      const imdbScore = show.imdb_rating || (show.rating ? show.rating.toFixed(1) : null);
      const rt = show.rotten_tomatoes;
      const rtScore = rt ? rt.critics : null;
      const rtIcon = rt ? rt.icon : '🍅';
      const rtClass = rt && rt.status === 'Certified Fresh' ? 'is-certified' : (rt && rt.status === 'Rotten' ? 'is-rotten' : '');

      const mediaId = `series_${show.id || show.imdb}`;
      const isFav = this.isMediaFavorite(mediaId);
      const isWatched = this.isMediaWatched(mediaId);

      card.innerHTML = `
        <div class="cinema-card-poster-wrap">
          ${posterUrl ? `
            <img class="cinema-card-poster" src="${posterUrl}" alt="${show.name}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="cinema-poster-placeholder" style="display:none;">
              📺
              <span>${show.name}</span>
            </div>
          ` : `
            <div class="cinema-poster-placeholder">
              📺
              <span>${show.name}</span>
            </div>
          `}
          <span class="cinema-badge-quality">SERIE</span>
          ${isWatched ? '<span class="cinema-badge-watched">✓ Visto</span>' : ''}
          <div class="cinema-card-badges-top">
            ${imdbScore ? `<span class="cinema-badge-imdb" title="Calificación IMDb">⭐ ${Number(imdbScore).toFixed(1)} IMDb</span>` : ''}
            ${rtScore !== null && rtScore !== undefined ? `<span class="cinema-badge-rt ${rtClass}" title="Tomatometer Rotten Tomatoes">${rtIcon} ${rtScore}% RT</span>` : ''}
          </div>
          <button class="cinema-card-fav-btn ${isFav ? 'is-active' : ''}" data-fav-id="${mediaId}" title="${isFav ? 'Quitar de favoritos' : 'Agregar a favoritos'}" tabindex="-1">${isFav ? '❤️' : '🤍'}</button>
          ${show.premiered ? `<span class="cinema-badge-year">${show.premiered}</span>` : ''}
        </div>
        <div class="cinema-card-info">
          <h4 class="cinema-card-title" title="${show.name}">${show.name}</h4>
          <span class="cinema-card-genres">${genresStr || 'Serie TV'}</span>
        </div>
      `;

      card.addEventListener('click', (e) => {
        if (e.target.closest('.cinema-card-fav-btn')) {
          e.stopPropagation();
          this.toggleFavoriteMedia(show, 'series');
          return;
        }
        this.openSeriesDetail(show);
      });
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.openSeriesDetail(show);
        }
      });

      fragment.appendChild(card);
    });

    this.dom.grid.appendChild(fragment);
  }

  /* ========================================================================
     VISTA DEDICADA DE DETALLES: PELÍCULAS (MENÚ COMPLETO • NO POP-UP)
     ======================================================================== */

  async openMovieDetail(movieId) {
    if (!this.dom.detailView) return;

    if (this.dom.detailBreadcrumb) {
      this.dom.detailBreadcrumb.textContent = 'PELÍCULA • CARTELERA';
    }
    if (this.dom.detailBadgeType) {
      this.dom.detailBadgeType.textContent = '🎬 PELÍCULA';
    }
    if (this.dom.detailSectionHeading) {
      this.dom.detailSectionHeading.textContent = '🎬 CALIDADES DISPONIBLES EN LA APLICACIÓN';
    }

    // Ocultar banner de último capítulo (es exclusivo de series, jamás en películas)
    if (this.dom.detailLatestEpBanner) {
      this.dom.detailLatestEpBanner.classList.add('is-hidden');
      this.dom.detailLatestEpBanner.style.setProperty('display', 'none', 'important');
    }
    if (this.dom.detailHeroPlayBtn) {
      this.dom.detailHeroPlayBtn.style.display = 'none';
    }

    if (this.dom.detailTitle) this.dom.detailTitle.textContent = 'Cargando película...';
    if (this.dom.detailMeta) this.dom.detailMeta.innerHTML = '';
    if (this.dom.detailGenres) this.dom.detailGenres.innerHTML = '';
    if (this.dom.detailSynopsis) this.dom.detailSynopsis.textContent = 'Obteniendo ficha técnica y calidades disponibles...';
    if (this.dom.detailMainContent) {
      this.dom.detailMainContent.innerHTML = '<div class="cinema-loading-state"><div class="cinema-loading-spinner"></div><p>Buscando calidades de reproducción...</p></div>';
    }
    if (this.dom.detailPoster) this.dom.detailPoster.src = './img/logos/default-channel.svg';
    if (this.dom.detailBackdrop) this.dom.detailBackdrop.style.display = 'none';
    if (this.dom.detailTrailerBtn) this.dom.detailTrailerBtn.style.display = 'none';

    // Desplazar al tope
    if (this.dom.detailScrollWrap) {
      this.dom.detailScrollWrap.scrollTop = 0;
    }

    this.dom.detailView.classList.remove('is-hidden');

    try {
      const resp = await fetch(`/api/cinema/movie?id=${movieId}`);
      const data = await resp.json();

      if (!data.ok || !data.movie) {
        if (this.dom.detailTitle) this.dom.detailTitle.textContent = 'Error al cargar película';
        if (this.dom.detailSynopsis) this.dom.detailSynopsis.textContent = 'No se pudo obtener la información de esta película.';
        if (this.dom.detailMainContent) {
          this.dom.detailMainContent.innerHTML = '<div style="color:#ef4444; font-size:0.9rem; padding:20px;">No se encontraron calidades disponibles para esta película.</div>';
        }
        return;
      }

      const movie = data.movie;

      // Actualizar Título
      if (this.dom.detailTitle) this.dom.detailTitle.textContent = movie.title;

      // Backdrop y Póster
      if (movie.background_image_original && this.dom.detailBackdrop) {
        this.dom.detailBackdrop.src = movie.background_image_original;
        this.dom.detailBackdrop.style.display = 'block';
      }
      if (this.dom.detailPoster) {
        this.dom.detailPoster.src = movie.large_cover_image || movie.medium_cover_image || '';
      }

      // Meta: Año, Duración, Rating, Idioma
      let metaHtml = '';
      if (movie.year) metaHtml += `<span class="cinema-meta-pill">${movie.year}</span>`;
      if (movie.runtime) metaHtml += `<span class="cinema-meta-pill">⏱ ${movie.runtime} min</span>`;
      if (movie.rating) metaHtml += `<span class="cinema-meta-pill cinema-rating-pill">★ ${movie.rating} / 10</span>`;
      if (movie.language) metaHtml += `<span class="cinema-meta-pill">AUDIO: ${movie.language.toUpperCase()}</span>`;
      if (this.dom.detailMeta) this.dom.detailMeta.innerHTML = metaHtml;

      // Géneros
      if (this.dom.detailGenres) {
        this.dom.detailGenres.innerHTML = (movie.genres || []).map(g => `<span class="cinema-genre-tag">${g}</span>`).join('');
      }

      // Sinopsis (Prioridad en Español si existe)
      const synopsis = movie.synopsis_es || movie.description_full || movie.summary || 'Sin sinopsis disponible.';
      if (this.dom.detailSynopsis) this.dom.detailSynopsis.textContent = synopsis;

      // Botón Trailer Oficial
      if (this.dom.detailTrailerBtn) {
        if (movie.yt_trailer_code) {
          this.dom.detailTrailerBtn.href = `https://www.youtube.com/watch?v=${movie.yt_trailer_code}`;
          this.dom.detailTrailerBtn.target = '_blank';
          this.dom.detailTrailerBtn.style.display = 'inline-flex';
        } else {
          this.dom.detailTrailerBtn.style.display = 'none';
        }
      }

      // 1. Renderizar calidades disponibles de inmediato
      movie.torrents = this.processAndFilterStreams([], movie.torrents || [], movie.title);
      this.renderMovieQualities(movie);

      // 2. Si la película tiene código IMDb y tiene menos de 5 torrents (ej. sólo los básicos de YTS),
      // enriquecer asíncronamente con el enjambre completo de Torrentio (hasta 3 de 4K, 3 de 1080p, 3 de 720p, 3 de 480p)
      if (movie.imdb_code && (!movie.torrents || movie.torrents.length < 5)) {
        try {
          const cleanImdb = movie.imdb_code.startsWith('tt') ? movie.imdb_code : `tt${movie.imdb_code}`;
          const torrPromise = fetch(`https://torrentio.strem.fun/stream/movie/${cleanImdb}.json`);
          const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 3500));
          const torrResp = await Promise.race([torrPromise, timeoutPromise]);
          if (torrResp && torrResp.ok) {
            const torrData = await torrResp.json();
            if (torrData && torrData.streams && torrData.streams.length > 0) {
              movie.torrents = this.processAndFilterStreams(torrData.streams, movie.torrents || [], movie.title);
              this.renderMovieQualities(movie);
            }
          }
        } catch (ignored) {}
      }

      // Configurar estado de Mi Biblioteca y Marcar como Visto (Plex)
      this.currentDetailMedia = { item: movie, type: 'movie' };
      this.updateDetailActionButtons();

    } catch (e) {
      console.error('Error al abrir detalles de película:', e);
      if (this.dom.detailTitle) this.dom.detailTitle.textContent = 'Error';
      if (this.dom.detailSynopsis) this.dom.detailSynopsis.textContent = 'Ocurrió un error al consultar el servidor.';
    }
  }

  processAndFilterStreams(rawStreams = [], ytsTorrents = [], defaultTitle = '') {
    const buckets = { '4K': [], '1080p': [], '720p': [], '480p': [] };
    const seenHashes = new Set();
    const CAM_3D_PATTERN = /(?:^|[\s._\-[\]()/])(cam|hdcam|camrip|telesync|ts|hdts|telecine|tc|hdtc|screener|scr|dvdscr|bdscr|workprint|wp|3d|half-sbs|hsbs|half-ou|hou|sbs)(?:$|[\s._\-[\]()/])/i;
    const Q4K_RE = /\b(2160p|4k|uhd)\b/i;
    const Q1080_RE = /\b(1080p|fhd|1080i)\b/i;
    const Q720_RE = /\b(720p|hd|hdtv)\b/i;
    const Q480_RE = /\b(480p|480i|sd|dvdrip)\b/i;

    const buildMagnetUri = (hash, title) => {
      if (!hash) return '';
      const dn = encodeURIComponent(title || 'Torrent');
      const trackers = [
        'udp://tracker.opentrackr.org:1337/announce',
        'udp://open.tracker.cl:1337/announce',
        'udp://open.demonii.com:1337/announce',
        'udp://open.stealth.si:80/announce',
        'udp://tracker.torrent.eu.org:451/announce',
        'udp://tracker.openbittorrent.com:80/announce',
        'wss://tracker.btorrent.xyz',
        'wss://tracker.openwebtorrent.com'
      ].map(tr => `&tr=${encodeURIComponent(tr)}`).join('');
      return `magnet:?xt=urn:btih:${hash}&dn=${dn}${trackers}`;
    };

    const parseLanguages = (name, title) => {
      const full = `${name || ''} ${title || ''}`;
      const fullL = full.toLowerCase();
      const flagRegex = /[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/g;
      const flags = [];
      let m;
      while ((m = flagRegex.exec(full)) !== null) {
        if (!flags.includes(m[0])) flags.push(m[0]);
      }
      const isLatino = /\b(latino|lat|es-419|es-la|mx|mexico|colombia|chile|argentina)\b/i.test(fullL);
      const isCastellano = /\b(castellano|cast|es-es|spain)\b/i.test(fullL);
      const isSpanish = /\b(español|spanish|spa|esp)\b/i.test(fullL) || flags.includes('🇪🇸') || flags.includes('🇲🇽') || isLatino || isCastellano;
      const isEnglish = /\b(english|eng|en)\b/i.test(fullL) || flags.includes('🇬🇧') || flags.includes('🇺🇸');
      const isDual = /\b(dual|multi audio|multi|multi-audio|dub|mvo|dvdrip)\b/i.test(fullL) || flags.length > 1;

      if (isLatino && !flags.includes('🇲🇽')) flags.unshift('🇲🇽');
      else if (isCastellano && !flags.includes('🇪🇸')) flags.unshift('🇪🇸');
      else if (isSpanish && !flags.includes('🇪🇸') && !flags.includes('🇲🇽')) flags.unshift('🇪🇸');

      if (isEnglish && !flags.includes('🇬🇧') && !flags.includes('🇺🇸')) flags.push('🇺🇸');
      if (flags.length === 0) flags.push('🇺🇸');

      let desc = '';
      if (isLatino && isEnglish) desc = `${flags.slice(0, 3).join(' ')} Dual Latino`;
      else if (isLatino) desc = `${flags.slice(0, 3).join(' ')} Español Latino`;
      else if (isCastellano && isEnglish) desc = `${flags.slice(0, 3).join(' ')} Castellano / Dual`;
      else if (isCastellano) desc = `${flags.slice(0, 3).join(' ')} Castellano`;
      else if (isSpanish && isDual) desc = `${flags.slice(0, 3).join(' ')} Dual Español`;
      else if (isSpanish) desc = `${flags.slice(0, 3).join(' ')} Español`;
      else if (isDual) desc = `${flags.slice(0, 4).join(' ')} Multi Audio`;
      else if (flags.includes('🇬🇧') || flags.includes('🇺🇸') || isEnglish) desc = `${flags.slice(0, 2).join(' ')} Inglés (V.O.)`;
      else desc = `${flags.slice(0, 3).join(' ')} Audio Original`;

      return { flags, audio: desc };
    };

    if (Array.isArray(rawStreams)) {
      rawStreams.forEach(s => {
        const h = (s.infoHash || s.hash || '').trim().toLowerCase();
        if (!h || seenHashes.has(h)) return;
        seenHashes.add(h);

        const title = s.title || '';
        const name = s.name || '';
        const rawQ = String(s.quality || '').trim();
        const combined = `${name} ${title} ${rawQ}`;
        if (CAM_3D_PATTERN.test(combined)) return;

        const seedsM = title.match(/👤\s*(\d+)/);
        const seeds = seedsM ? parseInt(seedsM[1], 10) : (parseInt(s.seeds, 10) || 0);
        const sizeM = title.match(/💾\s*([\d.]+\s*[MG]B)/i);
        const size = sizeM ? sizeM[1] : (s.size || 'HD');

        const fileIdx = (s.fileIdx !== undefined && s.fileIdx !== null) ? s.fileIdx : 0;
        const cleanTitle = title.split('\n')[0].trim() || name || defaultTitle;
        const magnet = s.magnet_url || buildMagnetUri(h, cleanTitle);

        const textForQ = `${name} ${title}`;
        const rawQUp = rawQ.toUpperCase();
        let q = '';
        if (Q4K_RE.test(textForQ) || rawQUp === '4K' || rawQUp === '2160P' || rawQUp === 'UHD') q = '4K';
        else if (Q1080_RE.test(textForQ) || rawQUp === '1080P' || rawQUp === 'FHD' || rawQUp === '1080I') q = '1080p';
        else if (Q720_RE.test(textForQ) || rawQUp === '720P' || rawQUp === 'HD') q = '720p';
        else if (Q480_RE.test(textForQ) || rawQUp === '480P' || rawQUp === 'SD') q = '480p';
        else return;

        const langInfo = (s.flags && s.audio) ? { flags: s.flags, audio: s.audio } : parseLanguages(name, title);

        buckets[q].push({
          quality: q,
          title: cleanTitle,
          size: size,
          seeds: seeds,
          flags: langInfo.flags,
          audio: langInfo.audio,
          hash: h,
          fileIdx: fileIdx,
          magnet_url: magnet,
          type: 'torrent'
        });
      });
    }

    if (Array.isArray(ytsTorrents)) {
      ytsTorrents.forEach(yt => {
        const h = (yt.hash || yt.infoHash || '').trim().toLowerCase();
        if (!h || seenHashes.has(h)) return;
        seenHashes.add(h);

        const rawQ = String(yt.quality || '').trim().toUpperCase();
        let q = '1080p';
        if (rawQ === '2160P' || rawQ === '4K' || rawQ === 'UHD') q = '4K';
        else if (rawQ === '1080P' || rawQ === 'FHD') q = '1080p';
        else if (rawQ === '720P' || rawQ === 'HD') q = '720p';
        else if (rawQ === '480P' || rawQ === 'SD') q = '480p';

        const size = yt.size || 'HD';
        const seeds = parseInt(yt.seeds, 10) || 50;
        const cleanTitle = yt.title || `${defaultTitle || 'Película'} [${q}]`;
        const magnet = yt.magnet_url || buildMagnetUri(h, cleanTitle);

        buckets[q].push({
          quality: q,
          title: cleanTitle,
          size: size,
          seeds: seeds,
          flags: yt.flags || ['🇺🇸'],
          audio: yt.audio || '🇺🇸 Inglés (V.O.)',
          hash: h,
          fileIdx: 0,
          magnet_url: magnet,
          type: 'torrent'
        });
      });
    }

    // Máximo 3 opciones por resolución, priorizando semillas verificadas y audio latino/español (+300 pts)
    ['4K', '1080p', '720p', '480p'].forEach(q => {
      buckets[q].sort((a, b) => {
        const hasSpaA = (a.audio && a.audio.toLowerCase().includes('latino')) || (a.flags && (a.flags.includes('🇲🇽') || a.flags.includes('🇪🇸')));
        const hasSpaB = (b.audio && b.audio.toLowerCase().includes('latino')) || (b.flags && (b.flags.includes('🇲🇽') || b.flags.includes('🇪🇸')));
        const scoreA = (a.seeds || 0) + (hasSpaA ? 300 : 0);
        const scoreB = (b.seeds || 0) + (hasSpaB ? 300 : 0);
        return scoreB - scoreA;
      });
      // Límite estricto de hasta 3 alternativas por calidad
      buckets[q] = buckets[q].slice(0, 3);
    });

    // En orden estricto de mayor a menor calidad: 4K (hasta 3), 1080p (hasta 3), 720p (hasta 3), 480p (hasta 3)
    return [...buckets['4K'], ...buckets['1080p'], ...buckets['720p'], ...buckets['480p']];
  }

  sortStreamsByQuality(streams) {
    if (!streams || !Array.isArray(streams) || streams.length === 0) return [];

    const getQualityRank = (qStr) => {
      const q = String(qStr || '').toLowerCase().trim();
      if (q.includes('4k') || q.includes('2160') || q.includes('uhd')) return 1;
      if (q.includes('1080') || q.includes('fhd')) return 2;
      if (q.includes('720') || q === 'hd') return 3;
      if (q.includes('480') || q.includes('sd')) return 4;
      return 5;
    };

    return [...streams].sort((a, b) => {
      const rankA = getQualityRank(a.quality);
      const rankB = getQualityRank(b.quality);
      if (rankA !== rankB) return rankA - rankB;

      // Misma resolución: ordenar por semillas y dar prioridad a audio latino/español
      const hasSpaA = (a.audio && a.audio.toLowerCase().includes('latino')) || (a.flags && (a.flags.includes('🇲🇽') || a.flags.includes('🇪🇸')));
      const hasSpaB = (b.audio && b.audio.toLowerCase().includes('latino')) || (b.flags && (b.flags.includes('🇲🇽') || b.flags.includes('🇪🇸')));
      const scoreA = (a.seeds || 0) + (hasSpaA ? 300 : 0);
      const scoreB = (b.seeds || 0) + (hasSpaB ? 300 : 0);
      return scoreB - scoreA;
    });
  }

  renderMovieQualities(movie) {
    if (!this.dom.detailMainContent) return;

    let rawItems = (movie.torrents && movie.torrents.length > 0) ? [...movie.torrents] : [];
    let items = this.sortStreamsByQuality(rawItems);
    movie.torrents = items;

    // Si no hay torrents específicos, ofrecer opción directa HD
    if (items.length === 0) {
      items.push({
        quality: '1080p',
        type: 'TORRENT',
        size: '1.8 GB',
        seeds: 100
      });
    }

    // Configurar botón rápido REPRODUCIR en la barra superior con la mejor calidad disponible (4K -> 1080p -> HD -> 480p)
    const bestItem = items[0];
    if (this.dom.detailHeroPlayBtn) {
      this.dom.detailHeroPlayBtn.style.display = 'inline-flex';
      this.dom.detailHeroPlayBtn.onclick = () => this.playMovie(movie, bestItem);
    }

    let html = '<div class="cinema-torrents-list">';
    items.forEach((t, idx) => {
      const q = t.quality || '1080p';
      const type = t.type ? t.type.toUpperCase() : 'TORRENT';
      const size = t.size || 'HD';
      const seedsText = (t.seeds !== undefined && t.seeds > 0)
        ? `⚡ ${t.seeds.toLocaleString()} semillas verificadas`
        : '⚡ Enjambre P2P disponible';
      const qClass = (q === '4K') ? 'q-4k' : ((q === '1080p') ? 'q-1080p' : ((q === '480p') ? 'q-480p' : 'q-720p'));

      const audioDesc = t.audio || 'Audio Original';
      const flagsStr = (t.flags && t.flags.length > 0) ? t.flags.slice(0, 4).join(' ') : '🇺🇸';
      const isLatino = audioDesc.toLowerCase().includes('latino') || flagsStr.includes('🇲🇽');
      const isDual = audioDesc.toLowerCase().includes('dual') || audioDesc.toLowerCase().includes('multi');
      const releaseName = t.title || t.name || `${movie.title} [${q}]`;

      html += `
        <div class="cinema-torrent-item">
          <div class="cinema-torrent-info-col">
            <div class="cinema-torrent-meta">
              <span class="cinema-torrent-q cinema-ep-q-tag ${qClass}">${q}</span>
              <span class="cinema-torrent-type">${type}</span>
              <span class="cinema-torrent-size">💾 ${size}</span>
              <span class="cinema-torrent-seeds">${seedsText}</span>
              <span class="cinema-torrent-lang ${isLatino ? 'is-latino' : (isDual ? 'is-dual' : '')}" title="Idioma de audio: ${audioDesc}">
                <span class="cinema-lang-flags">${flagsStr}</span>
                <span class="cinema-lang-text">${audioDesc}</span>
              </span>
            </div>
            <div class="cinema-torrent-filename" title="Nombre exacto del archivo torrent (para concordar con subtítulos)">
              <span class="cinema-torrent-fn-icon">📁</span>
              <span class="cinema-torrent-fn-text">${releaseName}</span>
            </div>
          </div>
          <div class="cinema-torrent-actions">
            <button class="cinema-btn-play-action" data-action="play-movie-quality" data-index="${idx}" title="Reproducir película en ${q} (${audioDesc}) dentro de la aplicación" tabindex="0">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
              REPRODUCIR
            </button>
          </div>
        </div>
      `;
    });
    html += '</div>';

    this.dom.detailMainContent.innerHTML = html;

    // Vincular evento único de reproducción en la aplicación
    this.dom.detailMainContent.querySelectorAll('[data-action="play-movie-quality"]').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.index, 10);
        const selected = items[idx];
        if (selected) {
          this.playMovie(movie, selected);
        }
      });
    });

    // Auto-enfocar primera calidad para control remoto de Android TV
    if (window.setTvFocus) {
      setTimeout(() => {
        const firstPlay = this.dom.detailMainContent.querySelector('[data-action="play-movie-quality"]') || this.dom.detailBackBtn;
        if (firstPlay) window.setTvFocus(firstPlay);
      }, 100);
    }
  }

  /* ========================================================================
     VISTA DEDICADA DE DETALLES: SERIES (MENÚ COMPLETO • NO POP-UP)
     Inicia en la última temporada y destaca el último capítulo subido
     ======================================================================== */

  async openSeriesDetail(show) {
    if (!this.dom.detailView) return;

    if (this.dom.detailBreadcrumb) {
      this.dom.detailBreadcrumb.textContent = 'SERIE DE TV • TEMPORADAS';
    }
    if (this.dom.detailBadgeType) {
      this.dom.detailBadgeType.textContent = '📺 SERIE DE TV';
    }
    if (this.dom.detailSectionHeading) {
      this.dom.detailSectionHeading.textContent = '📺 TEMPORADAS Y EPISODIOS';
    }

    if (this.dom.detailHeroPlayBtn) {
      this.dom.detailHeroPlayBtn.style.display = 'none';
    }
    if (this.dom.detailLatestEpBanner) {
      this.dom.detailLatestEpBanner.classList.add('is-hidden');
      this.dom.detailLatestEpBanner.style.setProperty('display', 'none', 'important');
    }

    if (this.dom.detailTitle) this.dom.detailTitle.textContent = show.name;
    if (this.dom.detailPoster) this.dom.detailPoster.src = show.poster || './img/logos/default-channel.svg';
    if (this.dom.detailBackdrop) this.dom.detailBackdrop.style.display = 'none';
    if (this.dom.detailTrailerBtn) this.dom.detailTrailerBtn.style.display = 'none';

    let metaHtml = '';
    if (show.premiered) metaHtml += `<span class="cinema-meta-pill">${show.premiered}</span>`;
    if (show.rating) metaHtml += `<span class="cinema-meta-pill cinema-rating-pill">★ ${show.rating} / 10</span>`;
    metaHtml += `<span class="cinema-meta-pill">SERIE DE TV</span>`;
    if (this.dom.detailMeta) this.dom.detailMeta.innerHTML = metaHtml;

    if (this.dom.detailGenres) {
      this.dom.detailGenres.innerHTML = (show.genres || []).map(g => `<span class="cinema-genre-tag">${g}</span>`).join('');
    }

    if (this.dom.detailSynopsis) this.dom.detailSynopsis.textContent = show.summary || 'Cargando información y temporadas completas...';
    if (this.dom.detailMainContent) {
      this.dom.detailMainContent.innerHTML = '<div class="cinema-loading-state"><div class="cinema-loading-spinner"></div><p>Obteniendo temporadas y episodios estilo Stremio...</p></div>';
    }

    // Desplazar al tope
    if (this.dom.detailScrollWrap) {
      this.dom.detailScrollWrap.scrollTop = 0;
    }

    this.dom.detailView.classList.remove('is-hidden');

    try {
      const resp = await fetch(`/api/cinema/series/details?id=${show.id || ''}&imdb=${show.imdb || ''}`);
      const data = await resp.json();

      if (!data.ok || !data.show) {
        if (this.dom.detailMainContent) {
          this.dom.detailMainContent.innerHTML = '<div style="color:#ef4444; font-size:0.9rem; padding:20px;">No se pudieron cargar los episodios de esta serie.</div>';
        }
        return;
      }

      // Actualizar detalles con información enriquecida (sinopsis en español si está disponible)
      const fullShow = data.show;
      if (fullShow.summary && this.dom.detailSynopsis) {
        this.dom.detailSynopsis.textContent = fullShow.summary;
      }
      if (fullShow.poster && this.dom.detailPoster) {
        this.dom.detailPoster.src = fullShow.poster;
      }

      // 1. Configurar Banner de Último Capítulo Subido (Exclusivo de Series)
      const latestEp = data.latestEpisode;
      if (latestEp && this.dom.detailLatestEpBanner) {
        this.dom.detailLatestEpBanner.classList.remove('is-hidden');
        this.dom.detailLatestEpBanner.style.removeProperty('display');

        if (this.dom.latestEpTitle) {
          this.dom.latestEpTitle.textContent = `Temporada ${latestEp.season} • Episodio ${latestEp.number}: ${latestEp.name}`;
        }
        if (this.dom.latestEpDesc) {
          const epAir = latestEp.airdate ? `Emitido el ${latestEp.airdate} • ` : '';
          this.dom.latestEpDesc.textContent = `${epAir}${latestEp.summary || 'Reproduce directamente el último capítulo emitido con un solo clic.'}`;
        }
        if (this.dom.latestEpAction) {
          this.dom.latestEpAction.innerHTML = `
            <button class="cinema-btn-play-action cinema-btn-play-hero" id="btnPlayLatestEpBanner" title="Reproducir último capítulo subido" tabindex="0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
              REPRODUCIR ÚLTIMO CAPÍTULO
            </button>
          `;
          const playLatestBtn = document.getElementById('btnPlayLatestEpBanner');
          if (playLatestBtn) {
            playLatestBtn.addEventListener('click', () => {
              const stream = (latestEp.streams && latestEp.streams[0]) || null;
              this.playEpisode(fullShow, latestEp, stream);
            });
          }
        }

        // También vincular el botón del topbar HUD para reproducción rápida
        if (this.dom.detailHeroPlayBtn) {
          this.dom.detailHeroPlayBtn.style.display = 'inline-flex';
          this.dom.detailHeroPlayBtn.onclick = () => {
            const stream = (latestEp.streams && latestEp.streams[0]) || null;
            this.playEpisode(fullShow, latestEp, stream);
          };
        }
      } else if (this.dom.detailLatestEpBanner) {
        this.dom.detailLatestEpBanner.classList.add('is-hidden');
        this.dom.detailLatestEpBanner.style.setProperty('display', 'none', 'important');
      }

      const seasons = data.seasons || [];
      if (seasons.length === 0) {
        if (this.dom.detailMainContent) {
          this.dom.detailMainContent.innerHTML = '<div style="color:#8fa0b5; font-size:0.9rem; padding:20px;">No hay temporadas registradas para esta serie.</div>';
        }
        return;
      }

      // Temporada por defecto: Siempre la primera temporada disponible (Temporada 1)
      const defaultSeason = seasons[0];

      // 2. Renderizar Barra de Temporadas Estilo Stremio
      let seasonsBarHtml = '<div class="cinema-seasons-bar" id="cinemaSeasonsBar" role="tablist">';
      seasons.forEach((s) => {
        const isAct = (s === defaultSeason) ? 'is-active' : '';
        seasonsBarHtml += `
          <button class="cinema-season-tab ${isAct}" data-season="${s}" role="tab" tabindex="0">
            Temporada ${s}
          </button>
        `;
      });
      seasonsBarHtml += '</div>';

      // 3. Contenedor Espacioso de Episodios
      seasonsBarHtml += '<div class="cinema-episodes-container" id="cinemaEpisodesContainer"></div>';

      if (this.dom.detailMainContent) {
        this.dom.detailMainContent.innerHTML = seasonsBarHtml;
      }

      // Vincular eventos de pestañas de temporada
      const seasonTabs = this.dom.detailMainContent.querySelectorAll('.cinema-season-tab');
      seasonTabs.forEach(tab => {
        tab.addEventListener('click', () => {
          seasonTabs.forEach(t => {
            t.classList.remove('is-active');
            t.classList.remove('is-tv-focused');
          });
          tab.classList.add('is-active');
          if (window.setTvFocus) window.setTvFocus(tab);
          const sNum = parseInt(tab.dataset.season, 10);
          this.renderSeasonEpisodes(sNum, data);
        });
        tab.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            tab.click();
          }
        });
      });

      // Renderizar inmediatamente la temporada activa (Temporada 1 por defecto)
      this.renderSeasonEpisodes(defaultSeason, data);

      // Configurar estado de Mi Biblioteca y Marcar como Visto (Plex)
      this.currentDetailMedia = { item: fullShow, type: 'series' };
      this.updateDetailActionButtons();

      // Auto-enfocar pestaña de la temporada activa para control remoto de Android TV
      if (window.setTvFocus) {
        setTimeout(() => {
          const activeSeasonTab = this.dom.detailMainContent.querySelector('.cinema-season-tab.is-active') ||
                                  this.dom.detailMainContent.querySelector('.cinema-season-tab') ||
                                  this.dom.detailBackBtn;
          if (activeSeasonTab) window.setTvFocus(activeSeasonTab);
        }, 120);
      }

    } catch (err) {
      console.error('Error al cargar temporadas y episodios:', err);
      if (this.dom.detailMainContent) {
        this.dom.detailMainContent.innerHTML = '<div style="color:#ef4444; font-size:0.9rem; padding:20px;">Error de conexión al cargar temporadas.</div>';
      }
    }
  }

  renderSeasonEpisodes(seasonNum, seriesData) {
    const container = document.getElementById('cinemaEpisodesContainer');
    if (!container) return;

    const rawEpisodes = (seriesData.episodesBySeason && seriesData.episodesBySeason[String(seasonNum)]) || [];

    if (rawEpisodes.length === 0) {
      container.innerHTML = `<div style="color:#8fa0b5; font-size:0.85rem; padding:20px;">No hay episodios disponibles para la Temporada ${seasonNum}.</div>`;
      return;
    }

    const isLatestSeason = (seriesData.latestSeason === seasonNum);
    const latestEpNum = seriesData.latestEpisode ? seriesData.latestEpisode.number : -1;
    const show = seriesData.show || {};

    let epHtml = '';
    rawEpisodes.forEach((ep, epIdx) => {
      const epNum = ep.number || (epIdx + 1);
      const epTitle = ep.name || `Episodio ${epNum}`;
      const epSummary = ep.summary || 'Sin sinopsis disponible.';
      const airdate = ep.airdate || '';
      const runtime = ep.runtime ? `⏱ ${ep.runtime} min` : '';
      const thumb = ep.image || '';
      const isLatest = isLatestSeason && (epNum === latestEpNum);
      const rawStreams = ep.streams || [];
      const streams = this.sortStreamsByQuality(rawStreams);
      ep.streams = streams;

      let streamsHtml = '';
      if (streams.length > 0) {
        streamsHtml = `
          <div class="cinema-ep-streams-header">
            <span>🎬 CALIDADES DISPONIBLES (${streams.length}):</span>
          </div>
          <div class="cinema-ep-streams-list">
            ${streams.map((st, stIdx) => {
              const qClass = (st.quality === '4K') ? 'q-4k' : ((st.quality === '1080p') ? 'q-1080p' : ((st.quality === '480p') ? 'q-480p' : 'q-720p'));
              const audioDesc = st.audio || 'Audio Original';
              const flagsStr = (st.flags && st.flags.length > 0) ? st.flags.slice(0, 4).join(' ') : '🇺🇸';
              const isLatino = audioDesc.toLowerCase().includes('latino') || flagsStr.includes('🇲🇽');
              const isDual = audioDesc.toLowerCase().includes('dual') || audioDesc.toLowerCase().includes('multi');

              return `
                <button class="cinema-ep-stream-btn" data-action="play-ep-stream" data-ep-idx="${epIdx}" data-stream-idx="${stIdx}" title="Reproducir en ${st.quality} (${st.size}) - ${audioDesc}">
                  <span class="cinema-ep-q-tag ${qClass}">${st.quality}</span>
                  <span class="cinema-ep-size-tag">💾 ${st.size}</span>
                  <span class="cinema-ep-seeds-tag">⚡ ${st.seeds} semillas</span>
                  <span class="cinema-ep-lang-tag ${isLatino ? 'is-latino' : (isDual ? 'is-dual' : '')}"><span class="cinema-flags-icon">${flagsStr}</span> ${audioDesc}</span>
                  <span class="cinema-ep-play-text">▶ REPRODUCIR</span>
                </button>
              `;
            }).join('')}
          </div>
        `;
      } else {
        streamsHtml = `
          <div class="cinema-ep-streams-header">
            <span>🎬 OPCIONES DE RESOLUCIÓN:</span>
          </div>
          <div class="cinema-ep-streams-actions">
            <button class="cinema-btn-load-ep-streams" data-action="load-ep-streams" data-ep-idx="${epIdx}" data-season="${seasonNum}" data-episode="${epNum}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              VER CALIDADES (4K • 1080p • 720p) Y REPRODUCIR
            </button>
          </div>
        `;
      }

      epHtml += `
        <div class="cinema-episode-card ${isLatest ? 'is-latest-highlight' : ''}" data-ep-card-idx="${epIdx}">
          <div class="cinema-episode-thumb-wrap">
            ${thumb ? `
              <img class="cinema-episode-thumb" src="${thumb}" alt="${epTitle}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
              <div class="cinema-episode-placeholder" style="display:none;">📺</div>
            ` : `
              <div class="cinema-episode-placeholder">📺</div>
            `}
            <span class="cinema-episode-badge-num">E${String(epNum).padStart(2, '0')}</span>
            ${runtime ? `<span class="cinema-episode-badge-runtime">${runtime}</span>` : ''}
          </div>
          <div class="cinema-episode-content">
            <div class="cinema-episode-header">
              <h5 class="cinema-episode-title">
                ${epNum}. ${epTitle}
                ${isLatest ? '<span class="cinema-badge-new-ep">⚡ ÚLTIMO SUBIDO</span>' : ''}
              </h5>
              ${airdate ? `<span class="cinema-episode-airdate">Emitido: ${airdate}</span>` : ''}
            </div>
            <p class="cinema-episode-summary">${epSummary}</p>
            <div class="cinema-episode-streams-block" id="epStreams_${seasonNum}_${epNum}">
              ${streamsHtml}
            </div>
          </div>
        </div>
      `;
    });

    container.innerHTML = epHtml;

    // Vinculación de eventos
    const wireStreamsEvents = () => {
      container.querySelectorAll('[data-action="play-ep-stream"]').forEach(btn => {
        btn.onclick = (e) => {
          e.stopPropagation();
          const epIdx = parseInt(btn.dataset.epIdx, 10);
          const stIdx = parseInt(btn.dataset.streamIdx, 10);
          const selectedEp = rawEpisodes[epIdx];
          if (selectedEp && selectedEp.streams && selectedEp.streams[stIdx]) {
            const stream = selectedEp.streams[stIdx];
            this.playEpisode(show, selectedEp, stream);
          }
        };
      });

      container.querySelectorAll('[data-action="load-ep-streams"]').forEach(btn => {
        btn.onclick = async (e) => {
          e.stopPropagation();
          const epIdx = parseInt(btn.dataset.epIdx, 10);
          const sNum = parseInt(btn.dataset.season, 10);
          const eNum = parseInt(btn.dataset.episode, 10);
          const block = document.getElementById(`epStreams_${sNum}_${eNum}`);
          if (block) {
            block.innerHTML = '<div class="cinema-ep-streams-loading"><div class="cinema-loading-spinner" style="width:14px;height:14px;border-width:2px;margin:0;"></div> Buscando fuentes 4K, 1080p y 720p en la red...</div>';
          }
          await this.loadEpisodeStreams(show, rawEpisodes[epIdx], sNum, eNum, block, epIdx);
        };
      });

      // Clic en la tarjeta completa del episodio para reproducir directamente o cargar calidades
      container.querySelectorAll('.cinema-episode-card').forEach(card => {
        card.addEventListener('click', (e) => {
          if (e.target.closest('button') || e.target.closest('a')) return;
          const epIdx = parseInt(card.dataset.epCardIdx, 10);
          const ep = rawEpisodes[epIdx];
          if (!ep) return;
          if (ep.streams && ep.streams.length > 0) {
            this.playEpisode(show, ep, ep.streams[0]);
          } else {
            const epN = ep.number || (epIdx + 1);
            const block = document.getElementById(`epStreams_${seasonNum}_${epN}`);
            if (block) {
              block.innerHTML = '<div class="cinema-ep-streams-loading"><div class="cinema-loading-spinner" style="width:14px;height:14px;border-width:2px;margin:0;"></div> Buscando fuentes 4K, 1080p y 720p en la red...</div>';
            }
            this.loadEpisodeStreams(show, ep, seasonNum, epN, block, epIdx);
          }
        });
      });
    };

    wireStreamsEvents();

    // Precargar automáticamente calidades para los 2 primeros episodios de la temporada activa
    rawEpisodes.slice(0, 2).forEach((ep, idx) => {
      if (!ep.streams || ep.streams.length === 0) {
        const epN = ep.number || (idx + 1);
        const block = document.getElementById(`epStreams_${seasonNum}_${epN}`);
        if (block) {
          this.loadEpisodeStreams(show, ep, seasonNum, epN, block, idx);
        }
      }
    });
  }

  async loadEpisodeStreams(show, episode, seasonNum, episodeNum, blockEl, epIdx) {
    const imdbCode = show.imdb || (episode.imdb || '');
    if (!imdbCode) {
      if (blockEl) {
        blockEl.innerHTML = '<div style="font-size:0.75rem; color:#ef4444;">No se encontró código IMDb para esta serie.</div>';
      }
      return;
    }

    try {
      const resp = await fetch(`/api/cinema/series/episode_streams?imdb=${encodeURIComponent(imdbCode)}&season=${seasonNum}&episode=${episodeNum}`);
      const data = await resp.json();
      if (data.ok && data.streams && data.streams.length > 0) {
        const sortedStreams = this.processAndFilterStreams(data.streams, [], `Episodio S${seasonNum}E${episodeNum}`);
        episode.streams = sortedStreams;
        if (blockEl) {
          blockEl.innerHTML = `
            <div class="cinema-ep-streams-header">
              <span>🎬 CALIDADES DISPONIBLES (${sortedStreams.length}):</span>
            </div>
            <div class="cinema-ep-streams-list">
              ${sortedStreams.map((st, stIdx) => {
                const qClass = (st.quality === '4K') ? 'q-4k' : ((st.quality === '1080p') ? 'q-1080p' : ((st.quality === '480p') ? 'q-480p' : 'q-720p'));
                const audioDesc = st.audio || 'Audio Original';
                const flagsStr = (st.flags && st.flags.length > 0) ? st.flags.slice(0, 4).join(' ') : '🇺🇸';
                const isLatino = audioDesc.toLowerCase().includes('latino') || flagsStr.includes('🇲🇽');
                const isDual = audioDesc.toLowerCase().includes('dual') || audioDesc.toLowerCase().includes('multi');
                const epReleaseName = st.title || st.name || `Episodio S${seasonNum}E${episodeNum} [${st.quality}]`;

                return `
                  <button class="cinema-ep-stream-btn" data-action="play-ep-stream" data-ep-idx="${epIdx}" data-stream-idx="${stIdx}" title="Reproducir en ${st.quality} (${st.size}) - ${audioDesc}">
                    <div class="cinema-ep-stream-btn-inner">
                      <div class="cinema-ep-stream-meta-row">
                        <span class="cinema-ep-q-tag ${qClass}">${st.quality}</span>
                        <span class="cinema-ep-size-tag">💾 ${st.size}</span>
                        <span class="cinema-ep-seeds-tag">⚡ ${st.seeds} semillas</span>
                        <span class="cinema-ep-lang-tag ${isLatino ? 'is-latino' : (isDual ? 'is-dual' : '')}"><span class="cinema-flags-icon">${flagsStr}</span> ${audioDesc}</span>
                      </div>
                      <div class="cinema-torrent-filename" title="Nombre exacto del archivo torrent (para concordar con subtítulos)">
                        <span class="cinema-torrent-fn-icon">📁</span>
                        <span class="cinema-torrent-fn-text">${epReleaseName}</span>
                      </div>
                    </div>
                    <span class="cinema-ep-play-text">▶ REPRODUCIR</span>
                  </button>
                `;
              }).join('')}
            </div>
          `;
          blockEl.querySelectorAll('[data-action="play-ep-stream"]').forEach(btn => {
            btn.onclick = (e) => {
              e.stopPropagation();
              const sIdx = parseInt(btn.dataset.streamIdx, 10);
              const stream = sortedStreams[sIdx];
              this.playEpisode(show, episode, stream);
            };
          });
        }
      } else {
        if (blockEl) {
          blockEl.innerHTML = `
            <div style="font-size:0.75rem; color:#94a3b8; display:flex; align-items:center; gap:8px;">
              <span>No se encontraron fuentes digitales verificadas actualmente.</span>
            </div>
          `;
        }
      }
    } catch (e) {
      console.error('Error al cargar streams del episodio:', e);
      if (blockEl) {
        blockEl.innerHTML = '<div style="font-size:0.75rem; color:#ef4444;">Error de red al consultar calidades.</div>';
      }
    }
  }

  closeDetail() {
    if (this.dom.detailView) {
      this.dom.detailView.classList.add('is-hidden');
    }
    this.currentDetailMedia = null;
    if (window.setTvFocus && this.dom.view) {
      setTimeout(() => {
        const activeCard = this.dom.view.querySelector('.cinema-card.is-tv-focused') || this.dom.view.querySelector('.cinema-card') || this.dom.backBtn;
        if (activeCard) window.setTvFocus(activeCard);
      }, 50);
    }
  }

  /* ========================================================================
     REPRODUCTOR DE VIDEO INTEGRADO EN LA APLICACIÓN (MOTOR HÍBRIDO DIRECTO + P2P)
     ======================================================================== */

  playMovie(movie, torrent) {
    // Detener audio de radios para evitar sonidos superpuestos
    if (window.AntenaSurPlayer && typeof window.AntenaSurPlayer.stopRadio === 'function') {
      window.AntenaSurPlayer.stopRadio();
    }

    const q = (torrent && torrent.quality) || '1080p';
    const torrentId = (torrent && (torrent.url || torrent.magnet_url || torrent.hash)) || null;
    const fileIdx = (torrent && torrent.fileIdx !== undefined && torrent.fileIdx !== null) ? torrent.fileIdx : null;
    const releaseName = (torrent && (torrent.title || torrent.name)) || `${movie.title} [${q}]`;
    const title = `${movie.title} [${q}]`;

    const availableStreams = (movie.torrents && movie.torrents.length > 0) ? this.sortStreamsByQuality(movie.torrents) : (torrent ? [torrent] : []);
    const currentIndex = torrent ? availableStreams.findIndex(t => (t.hash && torrent.hash && t.hash.toLowerCase() === torrent.hash.toLowerCase()) || t.magnet_url === torrentId) : 0;

    this.activeMedia = {
      type: 'movie',
      title: movie.title,
      quality: q,
      imdb: movie.imdb_code || '',
      torrentId: torrentId,
      torrentTitle: releaseName,
      fileIdx: fileIdx,
      allStreams: availableStreams,
      currentStreamIndex: Math.max(0, currentIndex),
      parentMedia: movie,
      torrentData: torrent
    };

    if (this.dom.playerTitle) this.dom.playerTitle.textContent = title;
    if (this.dom.playerSubtitle) this.dom.playerSubtitle.textContent = `PELÍCULA • CALIDAD ${q} • 📁 ${releaseName}`;

    this.openCinemaPlayer();
    if (torrentId) {
      this.startTorrentPlayback(title, torrentId, fileIdx);
    } else {
      this.showToast('No se encontró fuente de reproducción torrent para esta película', 'error');
    }
  }

  async playEpisode(show, episode, stream) {
    if (window.AntenaSurPlayer && typeof window.AntenaSurPlayer.stopRadio === 'function') {
      window.AntenaSurPlayer.stopRadio();
    }

    const s = episode.season || 1;
    const epNum = episode.number || 1;
    const epName = episode.name || `Episodio ${epNum}`;
    const title = `${show.name} - S${String(s).padStart(2,'0')}E${String(epNum).padStart(2,'0')} • ${epName}`;
    const epReleaseName = (stream && (stream.title || stream.name)) || title;

    let torrentId = (stream && (stream.url || stream.magnet_url || stream.hash)) || null;
    let fileIdx = (stream && stream.fileIdx !== undefined && stream.fileIdx !== null) ? stream.fileIdx : null;

    if (!torrentId && episode.streams && episode.streams.length > 0) {
      episode.streams = this.sortStreamsByQuality(episode.streams);
      const best = episode.streams[0];
      torrentId = best.url || best.magnet_url || best.hash;
      fileIdx = (best.fileIdx !== undefined && best.fileIdx !== null) ? best.fileIdx : null;
      stream = best;
    }

    const imdbCode = show.imdb || (episode.imdb || '');

    const rawStreams = (episode.streams && episode.streams.length > 0) ? episode.streams : (stream ? [stream] : []);
    const availableStreams = this.sortStreamsByQuality(rawStreams);
    const currentIndex = availableStreams.findIndex(st => (st.hash && stream && stream.hash && st.hash.toLowerCase() === stream.hash.toLowerCase()) || st.magnet_url === torrentId);

    this.activeMedia = {
      type: 'series',
      title: title,
      showName: show.name,
      imdb: imdbCode,
      season: s,
      episode: epNum,
      torrentId: torrentId,
      torrentTitle: epReleaseName,
      fileIdx: fileIdx,
      allStreams: availableStreams,
      currentStreamIndex: Math.max(0, currentIndex),
      parentMedia: show,
      episodeData: episode,
      streamData: stream
    };

    if (this.dom.playerTitle) this.dom.playerTitle.textContent = title;
    if (this.dom.playerSubtitle) this.dom.playerSubtitle.textContent = `TEMPORADA ${s} • EPISODIO ${epNum} • 📁 ${epReleaseName}`;

    this.openCinemaPlayer();
    if (torrentId) {
      this.startTorrentPlayback(title, torrentId, fileIdx);
    } else {
      this.showToast('No se encontró fuente torrent para este episodio', 'error');
    }
  }

  openCinemaPlayer() {
    if (this.dom.playerView) {
      this.dom.playerView.classList.remove('is-hidden');
      this.dom.playerView.classList.remove('hud-hidden');
    }
    this.applySubtitleSize(this.playerState.subSize || 'mediano', false);
    this.applySubtitlePosition(this.playerState.subPos || 'normal', false);
    this.closeAllPopovers();
    this.resetHudTimer();

    // Auto-focus para Android TV en el botón de reproducción o retroceso
    if (window.setTvFocus) {
      setTimeout(() => {
        const targetFocus = this.dom.ctrlPlayBtn || this.dom.playerBackBtn;
        if (targetFocus) window.setTvFocus(targetFocus);
      }, 100);
    }
  }

  closeCinemaPlayer(returnToDetail = true) {
    this.savePlaybackProgress(true);
    setTimeout(() => {
      this.loadUserProfile().then(() => this.loadContinueWatching());
    }, 300);

    if (this.statusPollTimer) {
      clearInterval(this.statusPollTimer);
      this.statusPollTimer = null;
    }

    if (this.playerState) {
      if (this.playerState.hudHideTimer) {
        clearTimeout(this.playerState.hudHideTimer);
        this.playerState.hudHideTimer = null;
      }
      if (this.playerState.audioProbingTimer) {
        clearTimeout(this.playerState.audioProbingTimer);
        this.playerState.audioProbingTimer = null;
      }
      this.playerState.streamStartTime = 0;
    }

    if (this.activeTorrent) {
      try {
        fetch(`/api/torrent/stop?torrent=${encodeURIComponent(this.activeTorrent)}`).catch(() => {});
      } catch (e) {}
      this.activeTorrent = null;
    }

    if (document.fullscreenElement || document.webkitFullscreenElement) {
      try {
        if (document.exitFullscreen) document.exitFullscreen().catch(() => {});
        else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
      } catch (e) {}
    }

    this.clearSubtitles();
    this.closeAllPopovers();

    if (this.dom.videoElement) {
      this.dom.videoElement.pause();
      this.dom.videoElement.src = '';
      this.dom.videoElement.classList.remove('fit-cover', 'fit-fill');
      this.dom.videoElement.style.display = 'block';
    }

    if (this.dom.playerView) {
      this.dom.playerView.classList.add('is-hidden');
      this.dom.playerView.classList.remove('hud-hidden');
    }

    // Regresar a la vista de detalles solo si se solicitó explícitamente y hay contenido cargado
    if (this.dom.detailView) {
      if (returnToDetail && this.currentDetailMedia) {
        this.dom.detailView.classList.remove('is-hidden');
        if (window.setTvFocus) {
          setTimeout(() => {
            const firstPlay = this.dom.detailView.querySelector('[data-action="play-movie-quality"], [data-action="play-ep-stream"], .cinema-season-tab') || this.dom.detailBackBtn;
            if (firstPlay) window.setTvFocus(firstPlay);
          }, 80);
        }
      } else {
        this.dom.detailView.classList.add('is-hidden');
      }
    }

    this.activeMedia = null;
  }

  closeAllPopovers() {
    let hadOpen = false;
    const popovers = [this.dom.subtitlesPopover, this.dom.audioPopover, this.dom.speedPopover];
    popovers.forEach(p => {
      if (p) {
        if (!p.classList.contains('is-hidden') || p.style.display !== 'none') {
          hadOpen = true;
        }
        p.classList.add('is-hidden');
        p.style.setProperty('display', 'none', 'important');
      }
    });
    return hadOpen;
  }

  toggleSubtitlesPopover() {
    const pop = this.dom.subtitlesPopover;
    if (!pop) return;
    const wasOpen = !pop.classList.contains('is-hidden') && pop.style.display !== 'none';
    this.closeAllPopovers();
    if (!wasOpen) {
      pop.classList.remove('is-hidden');
      pop.style.removeProperty('display');
      this.renderSubtitlesMenu();
    }
    this.resetHudTimer();
  }

  toggleAudioPopover() {
    const pop = this.dom.audioPopover;
    if (!pop) return;
    const wasOpen = !pop.classList.contains('is-hidden') && pop.style.display !== 'none';
    this.closeAllPopovers();
    if (!wasOpen) {
      pop.classList.remove('is-hidden');
      pop.style.removeProperty('display');
      this.setupAudioMenu();
    }
    this.resetHudTimer();
  }

  toggleSpeedPopover() {
    const pop = this.dom.speedPopover;
    if (!pop) return;
    const wasOpen = !pop.classList.contains('is-hidden') && pop.style.display !== 'none';
    this.closeAllPopovers();
    if (!wasOpen) {
      pop.classList.remove('is-hidden');
      pop.style.removeProperty('display');
    }
    this.resetHudTimer();
  }

  /* ========================================================================
     INICIALIZACIÓN DE CONTROLES OSD, SCRUBBER Y MENÚS
     ======================================================================== */

  initPlayerControls() {
    const video = this.dom.videoElement;
    if (!video) return;

    // 1. Play / Pausa Principal
    if (this.dom.ctrlPlayBtn) {
      this.dom.ctrlPlayBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.togglePlayPause();
      });
    }

    // 2. Retroceder y Adelantar 10s
    if (this.dom.ctrlRewindBtn) {
      this.dom.ctrlRewindBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.seekRelative(-10);
      });
    }
    if (this.dom.ctrlForwardBtn) {
      this.dom.ctrlForwardBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.seekRelative(10);
      });
    }

    // 3. Alternar Duración Total y Tiempo Restante
    if (this.dom.timeTotal) {
      this.dom.timeTotal.addEventListener('click', () => {
        this.playerState.showRemainingTime = !this.playerState.showRemainingTime;
        this.updateTimeDisplay();
        this.resetHudTimer();
      });
    }

    // 4. Scrubber interactivo y barra de búfer
    this.setupScrubber();

    // 5. Control de Volumen
    this.setupVolume();

    // 6. Zonas de Doble Tap / Clic
    this.setupDoubleTapZones();

    // 7. Popovers de Subtítulos, Audio y Velocidad
    this.setupPopovers();
    this.setupSpeedMenu();

    // 8. Ajuste de Pantalla (Aspect Ratio)
    if (this.dom.ctrlAspectBtn) {
      this.dom.ctrlAspectBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggleAspectRatio();
      });
    }

    // 9. Pantalla Completa
    if (this.dom.ctrlFullscreenBtn) {
      this.dom.ctrlFullscreenBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggleFullscreen();
      });
    }

    // 10. Movimiento de ratón y toques para reactivar controles
    if (this.dom.playerView) {
      const onActivity = () => this.resetHudTimer();
      this.dom.playerView.addEventListener('mousemove', onActivity);
      this.dom.playerView.addEventListener('touchstart', onActivity, { passive: true });
    }

    // 11. Eventos del Elemento de Video HTML5
    video.addEventListener('timeupdate', () => this.updateTimeDisplay());
    video.addEventListener('play', () => {
      this.updatePlayPauseUI(true);
      this.resetHudTimer();
    });
    video.addEventListener('pause', () => {
      this.updatePlayPauseUI(false);
      this.resetHudTimer();
      this.savePlaybackProgress(true);
    });
    video.addEventListener('ended', () => {
      this.updatePlayPauseUI(false);
      this.savePlaybackProgress(true);
      if (this.dom.playerView) this.dom.playerView.classList.remove('hud-hidden');
      setTimeout(() => {
        this.loadUserProfile().then(() => this.loadContinueWatching());
      }, 400);
    });
    video.addEventListener('loadedmetadata', () => {
      this.updateTimeDisplay();
      this.setupAudioMenu();
    });
    video.addEventListener('volumechange', () => this.updateVolumeUI());

    // Escuchar cambios de fullscreen del sistema
    document.addEventListener('fullscreenchange', () => {
      this.updateFullscreenUI(!!document.fullscreenElement);
    });
    document.addEventListener('webkitfullscreenchange', () => {
      this.updateFullscreenUI(!!document.webkitFullscreenElement);
    });
  }

  setupScrubber() {
    const track = this.dom.scrubTrack;
    const video = this.dom.videoElement;
    if (!track || !video) return;

    const handleSeek = (clientX) => {
      const rect = track.getBoundingClientRect();
      const pos = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      if (video.duration && isFinite(video.duration)) {
        video.currentTime = pos * video.duration;
      }
      this.updateTimeDisplay();
    };

    track.addEventListener('click', (e) => {
      e.stopPropagation();
      handleSeek(e.clientX);
      this.resetHudTimer();
    });

    track.addEventListener('mousemove', (e) => {
      const rect = track.getBoundingClientRect();
      const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      if (this.dom.scrubTooltip) {
        this.dom.scrubTooltip.classList.remove('is-hidden');
        this.dom.scrubTooltip.style.left = `${pos * 100}%`;
        const previewTime = (video.duration || 0) * pos;
        this.dom.scrubTooltip.textContent = this.formatTime(previewTime);
      }
    });

    track.addEventListener('mouseleave', () => {
      if (this.dom.scrubTooltip) {
        this.dom.scrubTooltip.classList.add('is-hidden');
      }
    });

    track.addEventListener('touchstart', (e) => {
      this.playerState.isScrubbing = true;
      if (e.touches && e.touches[0]) {
        handleSeek(e.touches[0].clientX);
      }
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (this.playerState.isScrubbing && e.touches && e.touches[0]) {
        handleSeek(e.touches[0].clientX);
      }
    }, { passive: true });

    window.addEventListener('touchend', () => {
      if (this.playerState.isScrubbing) {
        this.playerState.isScrubbing = false;
        this.resetHudTimer();
      }
    });
  }

  setupVolume() {
    const slider = this.dom.volumeSlider;
    const btn = this.dom.ctrlVolumeBtn;
    const video = this.dom.videoElement;
    if (!slider || !btn || !video) return;

    slider.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value);
      video.volume = val;
      video.muted = (val === 0);
      this.playerState.volume = val;
      this.playerState.isMuted = (val === 0);
      this.updateVolumeUI();
      this.resetHudTimer();
    });

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (video.muted || video.volume === 0) {
        video.muted = false;
        video.volume = this.playerState.volume > 0 ? this.playerState.volume : 0.8;
      } else {
        video.muted = true;
      }
      this.updateVolumeUI();
      this.resetHudTimer();
    });
  }

  updateVolumeUI() {
    const video = this.dom.videoElement;
    if (!video) return;
    const isMuted = video.muted || video.volume === 0;
    if (this.dom.volumeIcon) {
      if (isMuted) this.dom.volumeIcon.textContent = '🔇';
      else if (video.volume < 0.5) this.dom.volumeIcon.textContent = '🔉';
      else this.dom.volumeIcon.textContent = '🔊';
    }
    if (this.dom.volumeSlider) {
      this.dom.volumeSlider.value = isMuted ? 0 : video.volume;
    }
  }

  setupDoubleTapZones() {
    const left = this.dom.touchLeft;
    const right = this.dom.touchRight;

    if (left) {
      left.addEventListener('click', () => {
        const now = Date.now();
        if (now - this.playerState.lastLeftTap < 320) {
          this.seekRelative(-10);
          this.playerState.lastLeftTap = 0;
        } else {
          this.playerState.lastLeftTap = now;
          setTimeout(() => {
            if (this.playerState.lastLeftTap === now) {
              this.togglePlayPause();
            }
          }, 330);
        }
      });
    }

    if (right) {
      right.addEventListener('click', () => {
        const now = Date.now();
        if (now - this.playerState.lastRightTap < 320) {
          this.seekRelative(10);
          this.playerState.lastRightTap = 0;
        } else {
          this.playerState.lastRightTap = now;
          setTimeout(() => {
            if (this.playerState.lastRightTap === now) {
              this.togglePlayPause();
            }
          }, 330);
        }
      });
    }
  }

  setupPopovers() {
    // Evitar que clics dentro del cuerpo del popover se propaguen
    [this.dom.subtitlesPopover, this.dom.audioPopover, this.dom.speedPopover].forEach(pop => {
      if (pop) {
        pop.addEventListener('click', (e) => e.stopPropagation());
      }
    });

    // Subtítulos
    if (this.dom.ctrlSubtitlesBtn) {
      this.dom.ctrlSubtitlesBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggleSubtitlesPopover();
      });
    }
    if (this.dom.closeSubsPopoverBtn) {
      this.dom.closeSubsPopoverBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.closeAllPopovers();
        this.resetHudTimer();
      });
    }

    // Audio
    if (this.dom.ctrlAudioBtn) {
      this.dom.ctrlAudioBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggleAudioPopover();
      });
    }
    if (this.dom.closeAudioPopoverBtn) {
      this.dom.closeAudioPopoverBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.closeAllPopovers();
        this.resetHudTimer();
      });
    }

    // Velocidad
    if (this.dom.ctrlSpeedBtn) {
      this.dom.ctrlSpeedBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggleSpeedPopover();
      });
    }
    if (this.dom.closeSpeedPopoverBtn) {
      this.dom.closeSpeedPopoverBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.closeAllPopovers();
        this.resetHudTimer();
      });
    }

    // Calibración de subtítulos
    if (this.dom.btnSyncMinus) {
      this.dom.btnSyncMinus.addEventListener('click', (e) => {
        e.stopPropagation();
        this.adjustSubtitleOffset(-0.5);
      });
    }
    if (this.dom.btnSyncPlus) {
      this.dom.btnSyncPlus.addEventListener('click', (e) => {
        e.stopPropagation();
        this.adjustSubtitleOffset(0.5);
      });
    }
    if (this.dom.btnSyncReset) {
      this.dom.btnSyncReset.addEventListener('click', (e) => {
        e.stopPropagation();
        this.adjustSubtitleOffset(0);
      });
    }

    // Control de Tamaño de Subtítulos (Chico, Mediano, Grande, Extra)
    if (this.dom.subSizePills) {
      this.dom.subSizePills.querySelectorAll('.cinema-sub-size-pill').forEach(pill => {
        pill.addEventListener('click', (e) => {
          e.stopPropagation();
          const sz = pill.dataset.size;
          this.applySubtitleSize(sz);
        });
      });
    }

    const sizeOrder = ['chico', 'mediano', 'grande', 'extragrande'];
    if (this.dom.btnSubSizeMinus) {
      this.dom.btnSubSizeMinus.addEventListener('click', (e) => {
        e.stopPropagation();
        const curIdx = sizeOrder.indexOf(this.playerState.subSize || 'mediano');
        if (curIdx > 0) {
          this.applySubtitleSize(sizeOrder[curIdx - 1]);
        }
      });
    }
    if (this.dom.btnSubSizePlus) {
      this.dom.btnSubSizePlus.addEventListener('click', (e) => {
        e.stopPropagation();
        const curIdx = sizeOrder.indexOf(this.playerState.subSize || 'mediano');
        if (curIdx < sizeOrder.length - 1) {
          this.applySubtitleSize(sizeOrder[curIdx + 1]);
        }
      });
    }

    // Control de Posición Vertical de Subtítulos (Cómoda / Alta)
    if (this.dom.subPosPills) {
      this.dom.subPosPills.querySelectorAll('.cinema-sub-pos-pill').forEach(pill => {
        pill.addEventListener('click', (e) => {
          e.stopPropagation();
          const pos = pill.dataset.pos;
          this.applySubtitlePosition(pos);
        });
      });
    }

    // Carga de archivo local de subtítulos (.srt / .vtt)
    if (this.dom.localSubInput) {
      this.dom.localSubInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files[0]) {
          this.handleLocalSubtitleFile(e.target.files[0]);
        }
      });
    }

    // Clic fuera de los popovers para cerrarlos inmediatamente en cualquier parte de la pantalla
    document.addEventListener('click', (e) => {
      if (this.dom.playerView && !this.dom.playerView.classList.contains('is-hidden')) {
        const isTrigger = e.target.closest('#cinemaCtrlSubtitlesBtn, #cinemaCtrlAudioBtn, #cinemaCtrlSpeedBtn');
        const isInsidePopover = e.target.closest('.cinema-player-popover');
        if (!isTrigger && !isInsidePopover) {
          this.closeAllPopovers();
        }
      }
    });
  }

  applySubtitleSize(sizeKey, notify = true) {
    this.playerState.subSize = sizeKey;
    localStorage.setItem('antena_cinema_sub_size', sizeKey);

    const sizeMap = {
      chico: 'clamp(1.25rem, 2.4vw, 1.75rem)',
      mediano: 'clamp(1.5rem, 3.0vw, 2.2rem)',
      grande: 'clamp(1.85rem, 3.8vw, 2.85rem)',
      extragrande: 'clamp(2.3rem, 4.6vw, 3.6rem)'
    };
    const cssVal = sizeMap[sizeKey] || sizeMap.mediano;

    if (this.dom.playerView) {
      this.dom.playerView.style.setProperty('--cinema-sub-size', cssVal);
    }
    document.documentElement.style.setProperty('--cinema-sub-size', cssVal);

    if (this.dom.subSizePills) {
      this.dom.subSizePills.querySelectorAll('.cinema-sub-size-pill').forEach(p => {
        p.classList.toggle('is-active', p.dataset.size === sizeKey);
      });
    }
    const labelMap = { chico: 'Chico', mediano: 'Mediano (Por Defecto)', grande: 'Grande', extragrande: 'Extra Grande' };
    if (notify) this.showToast(`Tamaño de subtítulos: ${labelMap[sizeKey] || sizeKey}`, 'info');
  }

  applySubtitlePosition(posKey, notify = true) {
    this.playerState.subPos = posKey;
    localStorage.setItem('antena_cinema_sub_pos', posKey);

    if (this.dom.subtitleDisplayOverlay) {
      if (posKey === 'alta') {
        this.dom.subtitleDisplayOverlay.classList.add('pos-alta');
      } else {
        this.dom.subtitleDisplayOverlay.classList.remove('pos-alta');
      }
    }

    if (this.dom.subPosPills) {
      this.dom.subPosPills.querySelectorAll('.cinema-sub-pos-pill').forEach(p => {
        p.classList.toggle('is-active', p.dataset.pos === posKey);
      });
    }
    if (notify) this.showToast(`Posición subtítulos: ${posKey === 'alta' ? 'Alta (Más arriba)' : 'Cómoda (Despegada del borde)'}`, 'info');
  }

  setupSpeedMenu() {
    const pop = this.dom.speedPopover;
    if (!pop) return;
    pop.querySelectorAll('.cinema-speed-opt').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        pop.querySelectorAll('.cinema-speed-opt').forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        const spd = parseFloat(btn.dataset.speed);
        if (this.dom.videoElement) {
          this.dom.videoElement.playbackRate = spd;
        }
        if (this.dom.speedBtnLabel) {
          this.dom.speedBtnLabel.textContent = `${spd}x`;
        }
        this.playerState.playbackRate = spd;
        this.showToast(`Velocidad: ${spd}x`, 'info');
        this.closeAllPopovers();
        this.resetHudTimer();
      });
    });
  }

  /* ========================================================================
     GESTIÓN DE SUBTÍTULOS EN ESPAÑOL Y SINCRONIZACIÓN
     ======================================================================== */

  isSubtitleMatchingRip(sub) {
    if (!sub) return false;
    const tTitle = (this.activeMedia?.torrentTitle || this.activeMedia?.torrentData?.title || this.activeMedia?.streamData?.title || '').toLowerCase();
    if (!tTitle) return false;

    const subRel = (sub.release_name || sub.subtitle_file || '').toLowerCase();
    const subGroup = (sub.release_group || '').toLowerCase();
    if (!subRel && !subGroup) return false;

    // 0. Si el grupo de ripeo coincide directamente (ej. YIFY, RARBG, PSA, etc.)
    if (subGroup && subGroup.length >= 3 && tTitle.includes(subGroup)) {
      return true;
    }

    // 1. Grupos y tags de ripeo populares
    const ripTerms = [
      'yts', 'yify', 'rarbg', 'psa', 'galaxy', 'terminal', 'qxr', 'ntb', 'sparks', 
      'amiable', 'geckos', 'darksiders', 'cmrg', 'flux', 'dimension', 'deflate', 
      'cakes', 'rovers', 'batv', 'lostfilm', 'fog', 'marjenbo', 'vision', 'ettv', 'tgx'
    ];
    for (const term of ripTerms) {
      if (tTitle.includes(term) && (subRel.includes(term) || subGroup.includes(term))) {
        return true;
      }
    }

    // 2. Coincidencias de formato y resolución (ej. bluray 1080p, webrip 720p)
    const formats = ['bluray', 'brrip', 'bdrip', 'webrip', 'web-dl', 'web.dl', 'hdtv', 'dvdrip'];
    for (const fmt of formats) {
      if (tTitle.includes(fmt) && subRel.includes(fmt)) {
        if ((tTitle.includes('1080p') && subRel.includes('1080p')) ||
            (tTitle.includes('720p') && subRel.includes('720p')) ||
            (tTitle.includes('2160p') && subRel.includes('2160p'))) {
          return true;
        }
      }
    }

    // 3. Tokens clave compartidos
    const titleTokens = tTitle.split(/[^a-z0-9]+/).filter(t => t.length > 3 && !['2022', '2023', '2024', '2025', '2021', '2020', 'season', 'episode'].includes(t));
    let matchCount = 0;
    for (const tok of titleTokens) {
      if (subRel.includes(tok)) matchCount++;
    }
    return matchCount >= 3;
  }

  async loadSubtitlesForCurrentMedia() {
    if (!this.activeMedia) return;
    const imdb = this.activeMedia.imdb || '';
    if (!imdb) {
      this.renderSubtitlesMenu();
      return;
    }

    let subUrl = `/api/cinema/subtitles?imdb=${encodeURIComponent(imdb)}`;
    if (this.activeMedia.season && this.activeMedia.episode) {
      subUrl += `&season=${this.activeMedia.season}&episode=${this.activeMedia.episode}`;
    }

    try {
      const resp = await fetch(subUrl);
      const data = await resp.json();
      if (data && data.ok && data.subtitles) {
        // Filtrar estrictamente solo subtítulos en español (Latino, Neutro, España)
        const spanishSubs = (data.subtitles || []).filter(s => s.is_spanish);
        this.playerState.subtitlesList = spanishSubs;
        this.renderSubtitlesMenu();

        // Buscar concordancia de ripeo con el torrent del video
        const matchingLatino = spanishSubs.find(s => s.is_latino && this.isSubtitleMatchingRip(s));
        const matchingSpanish = spanishSubs.find(s => this.isSubtitleMatchingRip(s));
        const bestLatino = spanishSubs.find(s => s.is_latino);
        const bestSpanish = spanishSubs[0] || null;

        const ripMatched = matchingLatino || matchingSpanish;
        if (ripMatched) {
          console.log(`[Cinema Subtitles] 🎯 Auto-activando subtítulo por concordancia de ripeo:`, ripMatched.label, ripMatched.release_name);
          this.selectSubtitle(ripMatched, true);
          this.showToast(`🎯 Subtítulo auto-sincronizado con ripeo (${ripMatched.label})`, 'info');
        } else if (bestLatino || bestSpanish) {
          const fallbackSub = bestLatino || bestSpanish;
          console.log(`[Cinema Subtitles] 💬 Auto-activando subtítulo en español:`, fallbackSub.label);
          this.selectSubtitle(fallbackSub, true);
          this.showToast(`💬 Subtítulo en Español auto-activado (${fallbackSub.label})`, 'info');
        }
      } else {
        this.playerState.subtitlesList = [];
        this.renderSubtitlesMenu();
      }
    } catch (e) {
      console.warn('Error al consultar subtítulos:', e);
      this.playerState.subtitlesList = [];
      this.renderSubtitlesMenu();
    }
  }

  renderSubtitlesMenu() {
    const container = this.dom.subOptionsList;
    if (!container) return;

    container.innerHTML = '';

    // Indicador destacado del archivo/ripeo torrent actualmente en reproducción
    const activeTorrentTitle = this.activeMedia?.torrentTitle || this.activeMedia?.torrentData?.title || this.activeMedia?.streamData?.title || '';
    if (activeTorrentTitle) {
      const torInd = document.createElement('div');
      torInd.className = 'cinema-sub-torrent-indicator';
      torInd.innerHTML = `
        <span class="cinema-sub-torrent-indicator-label">📁 Ripeo de video en reproducción:</span>
        <span class="cinema-sub-torrent-indicator-val" title="${activeTorrentTitle}">${activeTorrentTitle}</span>
      `;
      container.appendChild(torInd);
    }

    // Opción: Desactivado
    const offOpt = document.createElement('div');
    offOpt.className = `cinema-sub-option ${this.playerState.activeSubtitleId === 'off' ? 'is-active' : ''}`;
    offOpt.innerHTML = `<span>✕ Desactivar Subtítulos</span><span>${this.playerState.activeSubtitleId === 'off' ? '✓' : ''}</span>`;
    offOpt.addEventListener('click', () => {
      this.selectSubtitle(null, true);
      this.closeAllPopovers();
    });
    container.appendChild(offOpt);

    // Solo subtítulos en Español (filtrar cualquier otro idioma de forma infalible)
    const list = (this.playerState.subtitlesList || []).filter(sub => sub.is_spanish);
    if (list.length === 0) {
      const emptyNote = document.createElement('div');
      emptyNote.className = 'cinema-sub-loading';
      emptyNote.textContent = 'No se hallaron subtítulos en español disponibles en línea.';
      container.appendChild(emptyNote);
      return;
    }

    list.forEach(sub => {
      const opt = document.createElement('div');
      const isAct = (this.playerState.activeSubtitleId === sub.id);
      const isMatch = this.isSubtitleMatchingRip(sub);

      opt.className = `cinema-sub-option ${isAct ? 'is-active' : ''} ${isMatch ? 'is-rip-match' : ''}`;

      const icon = sub.icon || (sub.is_latino ? '🇲🇽' : '🇪🇸');
      const relDisplay = sub.release_name || sub.subtitle_file || '';

      opt.innerHTML = `
        <div class="cinema-sub-item-body">
          <div class="cinema-sub-primary-row">
            <span class="cinema-sub-lang-text">${icon} ${sub.label}</span>
            ${isMatch ? '<span class="cinema-sub-badge-match">🎯 Concordancia de Ripeo (Sincronizado)</span>' : ''}
            ${sub.fps ? `<span class="cinema-sub-badge-fps">${sub.fps}</span>` : ''}
          </div>
          ${relDisplay ? `<div class="cinema-sub-release-tag" title="Ripeo del subtítulo: ${relDisplay}">📁 Ripeo: <span>${relDisplay}</span></div>` : ''}
        </div>
        <span class="cinema-sub-check">${isAct ? '✓' : ''}</span>
      `;
      opt.addEventListener('click', () => {
        this.selectSubtitle(sub, true);
        this.closeAllPopovers();
      });
      container.appendChild(opt);
    });
  }

  async selectSubtitle(sub, notify = true) {
    const video = this.dom.videoElement;
    if (!video) return;

    if (!sub || sub.id === 'off') {
      this.playerState.activeSubtitleId = 'off';
      if (this.dom.subtitlesBtnLabel) this.dom.subtitlesBtnLabel.textContent = 'SUBTÍTULOS';
      if (this.dom.ctrlSubtitlesBtn) this.dom.ctrlSubtitlesBtn.classList.remove('is-active');
      this.clearSubtitles();
      this.renderSubtitlesMenu();
      if (notify) this.showToast('Subtítulos desactivados', 'info');
      return;
    }

    this.playerState.activeSubtitleId = sub.id;
    if (this.dom.subtitlesBtnLabel) {
      const shortLabel = sub.is_latino ? 'LAT' : (sub.is_spanish ? 'ES' : (sub.is_english ? 'EN' : 'CC'));
      this.dom.subtitlesBtnLabel.textContent = `CC: ${shortLabel}`;
    }
    if (this.dom.ctrlSubtitlesBtn) {
      this.dom.ctrlSubtitlesBtn.classList.add('is-active');
    }

    try {
      this.clearSubtitles();
      const track = document.createElement('track');
      track.kind = 'subtitles';
      track.label = sub.label;
      track.srclang = sub.lang || 'es';
      track.src = sub.vtt_url;
      track.default = true;
      video.appendChild(track);

      // Usar modo hidden para que el navegador descargue y sincronice los cues
      // pero se rendericen con posición despegada y tamaño agrandado en el overlay personalizado
      track.track.mode = 'hidden';

      track.track.oncuechange = () => {
        const activeCues = track.track.activeCues;
        if (activeCues && activeCues.length > 0) {
          const text = Array.from(activeCues).map(c => c.text).join('<br>');
          if (this.dom.subtitleText) {
            this.dom.subtitleText.innerHTML = text;
          }
          if (this.dom.subtitleDisplayOverlay) {
            this.dom.subtitleDisplayOverlay.classList.remove('is-hidden');
          }
        } else {
          if (this.dom.subtitleText) {
            this.dom.subtitleText.innerHTML = '';
          }
          if (this.dom.subtitleDisplayOverlay) {
            this.dom.subtitleDisplayOverlay.classList.add('is-hidden');
          }
        }
      };

      track.addEventListener('load', () => {
        if (track.track.cues) {
          const cueLine = (this.playerState.subPos === 'alta' ? 82 : 88);
          for (let i = 0; i < track.track.cues.length; i++) {
            track.track.cues[i].snapToLines = false;
            track.track.cues[i].line = cueLine;
          }
        }
      });

      this.applySubtitleSize(this.playerState.subSize || 'mediano', false);
      this.applySubtitlePosition(this.playerState.subPos || 'normal', false);

      this.renderSubtitlesMenu();
      if (notify) this.showToast(`💬 Subtítulo activado: ${sub.label}`, 'info');
    } catch (e) {
      console.error('Error al aplicar subtítulo:', e);
      if (notify) this.showToast('Error al activar subtítulo', 'error');
    }
  }

  clearSubtitles() {
    if (this.dom.subtitleText) {
      this.dom.subtitleText.innerHTML = '';
    }
    if (this.dom.subtitleDisplayOverlay) {
      this.dom.subtitleDisplayOverlay.classList.add('is-hidden');
    }
    const video = this.dom.videoElement;
    if (!video) return;
    const tracks = video.querySelectorAll('track');
    tracks.forEach(t => {
      try {
        t.track.mode = 'disabled';
      } catch (e) {}
      t.remove();
    });
  }

  adjustSubtitleOffset(delta) {
    if (delta === 0) {
      this.playerState.subOffset = 0;
    } else {
      this.playerState.subOffset += delta;
    }

    const valStr = (this.playerState.subOffset > 0 ? '+' : '') + this.playerState.subOffset.toFixed(1) + 's';
    if (this.dom.syncOffsetVal) {
      this.dom.syncOffsetVal.textContent = valStr;
    }

    // Ajustar tiempos de las pistas de texto activas en el video
    const video = this.dom.videoElement;
    if (video && video.textTracks) {
      for (let i = 0; i < video.textTracks.length; i++) {
        const track = video.textTracks[i];
        if (track.cues) {
          for (let c = 0; c < track.cues.length; c++) {
            track.cues[c].startTime += delta;
            track.cues[c].endTime += delta;
          }
        }
      }
    }
    this.showToast(`Sincronización subtítulos: ${valStr}`, 'info');
  }

  handleLocalSubtitleFile(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result || '';
      let vtt = text;
      if (!text.trim().startsWith('WEBVTT')) {
        vtt = 'WEBVTT\n\n' + text.replace(/(\d{2}:\d{2}:\d{2}),(\d{3})/g, '$1.$2');
      }
      const blob = new Blob([vtt], { type: 'text/vtt' });
      const blobUrl = URL.createObjectURL(blob);
      const customSub = {
        id: 'local_file_' + Date.now(),
        label: file.name.slice(0, 22),
        lang: 'es',
        is_spanish: true,
        vtt_url: blobUrl
      };
      this.playerState.subtitlesList.unshift(customSub);
      this.selectSubtitle(customSub, true);
      this.closeAllPopovers();
    };
    reader.readAsText(file);
  }

  /* ========================================================================
     GESTIÓN DE AUDIO Y PISTAS MULTIAUDIO (FFMPEG UNIVERSAL TRANSCODE)
     ======================================================================== */

  async probeAudioTracks(torrentId, fileIdx = null, retryCount = 0) {
    if (!torrentId) return;
    try {
      let url = `/api/torrent/media_info?torrent=${encodeURIComponent(torrentId)}`;
      if (fileIdx !== null && fileIdx !== undefined) url += `&fileIdx=${fileIdx}`;
      const resp = await fetch(url);
      const data = await resp.json();
      if (data && data.ok && data.audioStreams && data.audioStreams.length > 0) {
        this.playerState.mediaInfo = data;
        this.playerState.audioStreams = data.audioStreams;
        this.setupAudioMenu();

        // Si el torrent contiene códecs de audio no soportados por el navegador
        // (AC3, EAC3, Atmos, DTS, TrueHD) y aún no está activo el transcode a AAC:
        if (data.needsAudioTranscode && !this.playerState.forceTranscode) {
          console.log('[Cinema Player] Códec de audio incompatible detectado (' + (data.audioStreams[0]?.codec || 'AC3/DTS') + '). Activando transcodificación universal a AAC compatible...');
          this.switchAudioTrack(this.playerState.selectedAudioTrack ?? 0, true);
        }
      } else if (retryCount < 6) {
        // Si el torrent aún está recibiendo cabeceras iniciales, reintentar cada 2.5s
        if (this.playerState.audioProbingTimer) clearTimeout(this.playerState.audioProbingTimer);
        this.playerState.audioProbingTimer = setTimeout(() => {
          this.probeAudioTracks(torrentId, fileIdx, retryCount + 1);
        }, 2500);
      }
    } catch (e) {
      console.warn('Error al sondear información de audio:', e);
      if (retryCount < 5) {
        if (this.playerState.audioProbingTimer) clearTimeout(this.playerState.audioProbingTimer);
        this.playerState.audioProbingTimer = setTimeout(() => {
          this.probeAudioTracks(torrentId, fileIdx, retryCount + 1);
        }, 3000);
      }
    }
  }

  translateAudioLabelToSpanish(label, lang = '', icon = '') {
    if (!label) return label;
    let s = label;
    const isRussian = lang === 'rus' || lang === 'ru' || icon === '🇷🇺' || /[а-яА-ЯёЁ]/.test(s);

    s = s.replace(/дубляж\s+для\s+слабовидящих/gi, 'Audiodescripción (Descriptivo)');
    s = s.replace(/для\s+слабовидящих/gi, 'Audiodescripción');
    s = s.replace(/полное\s+дублирование|дубляж/gi, 'Doblaje');
    s = s.replace(/многоголосый\s+закадровый|многоголосый|мво/gi, 'Doblaje Multi-voz');
    s = s.replace(/двухголосый\s+закадровый|двухголосый|дво/gi, 'Doblaje 2 voces');
    s = s.replace(/одноголосый\s+закадровый|одноголосый|аво/gi, 'Voz en off');
    s = s.replace(/закадровый/gi, 'Voz en off');
    s = s.replace(/оригинал/gi, 'Original');
    s = s.replace(/director'?s\s+commentary/gi, 'Comentarios del Director');
    s = s.replace(/audio\s+commentary|commentary/gi, 'Comentarios');
    s = s.replace(/audio\s+description|descriptive\s+audio/gi, 'Audiodescripción');
    s = s.replace(/original\s+audio/gi, 'Audio Original');
    s = s.replace(/dubbed/gi, 'Doblaje');
    s = s.replace(/doublage|dublado/gi, 'Doblaje');

    if (isRussian && !s.toLowerCase().includes('ruso')) {
      s = `Ruso: ${s}`;
    }
    return s;
  }

  setupAudioMenu() {
    const video = this.dom.videoElement;
    const container = this.dom.audioOptionsList;
    if (!video || !container) return;

    container.innerHTML = '';

    const isTranscoding = this.playerState.forceTranscode;
    const streams = this.playerState.audioStreams || [];
    const selTrack = this.playerState.selectedAudioTrack;

    // 1. Selector rápido de Modo Universal AAC / Directo
    const modeCard = document.createElement('div');
    modeCard.style.padding = '8px 10px';
    modeCard.style.marginBottom = '8px';
    modeCard.style.borderRadius = '6px';
    modeCard.style.background = isTranscoding ? 'rgba(0, 229, 255, 0.12)' : 'rgba(255, 255, 255, 0.04)';
    modeCard.style.border = isTranscoding ? '1px solid rgba(0, 229, 255, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)';

    modeCard.innerHTML = `
      <div style="font-size:0.75rem; font-weight:700; color:#00e5ff; margin-bottom:4px; display:flex; align-items:center; justify-content:space-between;">
        <span>${isTranscoding ? '🎧 Audio Universal AAC (Activo)' : '🔊 Audio Directo (Original)'}</span>
        <span style="font-size:0.68rem; padding:2px 6px; border-radius:4px; background:${isTranscoding ? 'rgba(0,229,255,0.2)' : 'rgba(255,255,255,0.1)'}; color:${isTranscoding ? '#00e5ff' : '#cbd5e1'};">
          ${isTranscoding ? '100% Compatible' : 'Sin procesar'}
        </span>
      </div>
      <div style="font-size:0.7rem; color:#94a3b8; line-height:1.3; margin-bottom:6px;">
        ${isTranscoding
          ? 'Transcodificando audio en tiempo real con FFmpeg a AAC estéreo universal. Corrige falta de sonido en AC3, Atmos y DTS.'
          : 'Reproduciendo la pista nativa del archivo. Si tu dispositivo no reproduce sonido, activa el modo Universal AAC.'}
      </div>
      <button class="cinema-audio-toggle-btn" id="btnToggleUniversalAudio" style="width:100%; padding:6px 8px; font-size:0.72rem; font-weight:700; border-radius:4px; border:1px solid ${isTranscoding ? 'rgba(255,255,255,0.2)' : '#00e5ff'}; background:${isTranscoding ? 'rgba(255,255,255,0.08)' : 'rgba(0,229,255,0.18)'}; color:${isTranscoding ? '#e2e8f0' : '#00e5ff'}; cursor:pointer;">
        ${isTranscoding ? '🔄 Probar Audio Directo Original' : '⚡ Activar Audio Universal AAC'}
      </button>
    `;
    container.appendChild(modeCard);

    const toggleBtn = modeCard.querySelector('#btnToggleUniversalAudio');
    if (toggleBtn) {
      toggleBtn.onclick = (e) => {
        e.stopPropagation();
        this.switchAudioTrack(selTrack, !isTranscoding);
      };
    }

    const titleLabel = document.createElement('div');
    titleLabel.style.fontSize = '0.68rem';
    titleLabel.style.fontWeight = '700';
    titleLabel.style.color = '#64748b';
    titleLabel.style.letterSpacing = '0.5px';
    titleLabel.style.marginBottom = '6px';
    titleLabel.textContent = 'PISTAS DE AUDIO DISPONIBLES EN EL TORRENT:';
    container.appendChild(titleLabel);

    // 2. Si se detectaron pistas individuales en el torrent mediante sondeo FFmpeg
    if (streams.length > 0) {
      streams.forEach((stream, idx) => {
        const item = document.createElement('div');
        const isActive = (selTrack === stream.trackIdx) || (selTrack === null && idx === 0);
        item.className = `cinema-audio-option ${isActive ? 'is-active' : ''}`;

        const flag = stream.icon || (stream.isLatino ? '🇲🇽' : (stream.isCastellano ? '🇪🇸' : (stream.isSpanish ? '🌎' : (stream.isEnglish ? '🇺🇸' : '🌐'))));
        const codecBadge = `<span style="font-size:0.65rem; padding:2px 5px; border-radius:3px; background:rgba(255,255,255,0.1); margin-left:6px;">${stream.codec.toUpperCase()}</span>`;
        const displayLabel = this.translateAudioLabelToSpanish(stream.label, stream.lang, stream.icon);

        item.innerHTML = `
          <div style="display:flex; align-items:center; gap:6px;">
            <span>${flag}</span>
            <span>${displayLabel}</span>
            ${codecBadge}
          </div>
          <span>${isActive ? '✓ Activa' : ''}</span>
        `;

        item.addEventListener('click', (e) => {
          e.stopPropagation();
          this.switchAudioTrack(stream.trackIdx, true);
          this.closeAllPopovers();
        });

        container.appendChild(item);
      });
    } else {
      // 3. Fallback inteligente mientras finaliza la lectura de cabeceras del contenedor
      const tData = this.activeMedia?.torrentData || this.activeMedia?.streamData || {};
      const flags = tData.flags || this.activeMedia?.flags || [];
      const audioDesc = (tData.audio || this.activeMedia?.audio || '').toLowerCase();
      const isDual = tData.is_dual || audioDesc.includes('dual') || audioDesc.includes('multi') || flags.length > 1;
      const isLatino = flags.includes('🇲🇽') || audioDesc.includes('latino') || audioDesc.includes('lat');
      const isCastellano = flags.includes('🇪🇸') || audioDesc.includes('castellano') || audioDesc.includes('spain');

      const fallbackList = [];
      if (isDual || flags.length > 1) {
        fallbackList.push({
          trackIdx: 0,
          label: isLatino ? 'Español Latino (Pista 1)' : (isCastellano ? 'Español España (Pista 1)' : 'Español (Pista 1)'),
          icon: isLatino ? '🇲🇽' : (isCastellano ? '🇪🇸' : '🌎'),
          badge: 'DUAL'
        });
        fallbackList.push({
          trackIdx: 1,
          label: 'Inglés Original (Pista 2)',
          icon: '🇺🇸',
          badge: 'DUAL'
        });
        if (flags.length > 2 || audioDesc.includes('multi')) {
          fallbackList.push({
            trackIdx: 2,
            label: 'Audio Alternativo / V.O. (Pista 3)',
            icon: '🌐',
            badge: 'MULTI'
          });
        }
      } else {
        fallbackList.push({
          trackIdx: 0,
          label: 'Audio Principal (Pista 1 - Español / V.O.)',
          icon: isLatino ? '🇲🇽' : (isCastellano ? '🇪🇸' : (flags[0] || '🔊')),
          badge: 'PRIMARIA'
        });
        fallbackList.push({
          trackIdx: 1,
          label: 'Audio Secundario (Pista 2 - Inglés / Doblaje)',
          icon: '🌐',
          badge: 'SECUNDARIA'
        });
      }

      fallbackList.forEach((st, idx) => {
        const item = document.createElement('div');
        const isActive = (selTrack === st.trackIdx) || (selTrack === null && idx === 0);
        item.className = `cinema-audio-option ${isActive ? 'is-active' : ''}`;
        item.innerHTML = `
          <div style="display:flex; align-items:center; gap:6px;">
            <span>${st.icon}</span>
            <span>${st.label}</span>
            <span style="font-size:0.65rem; padding:2px 5px; border-radius:3px; background:rgba(255,255,255,0.08); margin-left:4px;">${st.badge}</span>
          </div>
          <span>${isActive ? '✓ Activa' : ''}</span>
        `;
        item.addEventListener('click', (e) => {
          e.stopPropagation();
          this.switchAudioTrack(st.trackIdx, true);
          this.closeAllPopovers();
        });
        container.appendChild(item);
      });

      const probingNote = document.createElement('div');
      probingNote.style.fontSize = '0.7rem';
      probingNote.style.color = '#94a3b8';
      probingNote.style.marginTop = '8px';
      probingNote.style.padding = '4px 6px';
      probingNote.style.display = 'flex';
      probingNote.style.alignItems = 'center';
      probingNote.style.gap = '6px';
      probingNote.innerHTML = '<span class="cinema-pulse-dot"></span> <span>Detectando códecs exactos del torrent en segundo plano...</span>';
      container.appendChild(probingNote);
    }
  }

  switchAudioTrack(trackIdx, forceTranscode = true) {
    const video = this.dom.videoElement;
    if (!video || !this.activeTorrent) return;

    const curTime = (video.currentTime || 0) + (this.playerState.streamStartTime || 0);
    const isPaused = video.paused;

    this.playerState.selectedAudioTrack = trackIdx;
    this.playerState.forceTranscode = forceTranscode;

    let streamUrl = `/api/torrent/stream?torrent=${encodeURIComponent(this.activeTorrent)}`;
    if (this.activeMedia && this.activeMedia.fileIdx !== null && this.activeMedia.fileIdx !== undefined) {
      streamUrl += `&fileIdx=${this.activeMedia.fileIdx}`;
    }
    if (forceTranscode || trackIdx !== null) {
      streamUrl += `&audioMode=transcode`;
      if (trackIdx !== null && trackIdx !== undefined) {
        streamUrl += `&audioTrack=${trackIdx}`;
      }
    }

    if (curTime > 2) {
      this.playerState.streamStartTime = Math.floor(curTime);
      streamUrl += `&startTime=${Math.floor(curTime)}`;
    } else {
      this.playerState.streamStartTime = 0;
    }

    video.src = streamUrl;
    video.load();
    if (!isPaused) {
      video.play().catch(() => {});
    }

    this.setupAudioMenu();
    if (forceTranscode) {
      const trackLabel = (trackIdx !== null && trackIdx !== undefined) ? `Pista #${trackIdx + 1}` : 'Universal';
      this.showToast(`🎧 Audio cambiado: ${trackLabel} (AAC 100% compatible)`, 'info');
    } else {
      this.showToast('🔊 Audio directo original activado', 'info');
    }
  }

  /* ========================================================================
     CONTROLES BÁSICOS: PLAY/PAUSA, SEEK, FEEDBACK Y TIEMPO
     ======================================================================== */

  togglePlayPause() {
    const video = this.dom.videoElement;
    if (!video) return;
    if (video.paused) {
      video.play().then(() => {
        this.showCenterFeedback('▶', 'PLAY');
        this.updatePlayPauseUI(true);
        this.resetHudTimer();
      }).catch(e => {
        console.warn('Play prevenido:', e);
      });
    } else {
      video.pause();
      this.showCenterFeedback('⏸', 'PAUSA');
      this.updatePlayPauseUI(false);
      this.resetHudTimer();
    }
  }

  seekRelative(seconds) {
    const video = this.dom.videoElement;
    if (!video) return;
    const cur = video.currentTime || 0;
    const dur = video.duration || 0;
    const target = Math.max(0, Math.min(dur ? dur : cur + seconds, cur + seconds));
    video.currentTime = target;
    const icon = seconds > 0 ? `+${seconds}s` : `${seconds}s`;
    this.showCenterFeedback(seconds > 0 ? '⏩' : '⏪', icon);
    this.updateTimeDisplay();
    this.resetHudTimer();
  }

  showCenterFeedback(icon, text) {
    if (!this.dom.centerFeedback) return;
    if (this.dom.feedbackIcon) this.dom.feedbackIcon.textContent = icon;
    if (this.dom.feedbackText) this.dom.feedbackText.textContent = text;
    this.dom.centerFeedback.classList.remove('is-hidden');
    if (this.playerState.lastFeedbackTimer) {
      clearTimeout(this.playerState.lastFeedbackTimer);
    }
    this.playerState.lastFeedbackTimer = setTimeout(() => {
      if (this.dom.centerFeedback) {
        this.dom.centerFeedback.classList.add('is-hidden');
      }
    }, 600);
  }

  updatePlayPauseUI(isPlaying) {
    if (this.dom.playIcon && this.dom.pauseIcon) {
      if (isPlaying) {
        this.dom.playIcon.classList.add('is-hidden');
        this.dom.pauseIcon.classList.remove('is-hidden');
      } else {
        this.dom.playIcon.classList.remove('is-hidden');
        this.dom.pauseIcon.classList.add('is-hidden');
      }
    }
  }

  updateTimeDisplay() {
    const video = this.dom.videoElement;
    if (!video) return;

    const cur = (video.currentTime || 0) + (this.playerState.streamStartTime || 0);
    const dur = (video.duration && isFinite(video.duration)) ? Math.max(video.duration, (video.duration + (this.playerState.streamStartTime || 0))) : (video.duration || 0);

    if (this.dom.timeCurrent) {
      this.dom.timeCurrent.textContent = this.formatTime(cur);
    }

    if (this.dom.timeTotal) {
      if (this.playerState.showRemainingTime && dur > 0) {
        const remaining = Math.max(0, dur - cur);
        this.dom.timeTotal.textContent = `-${this.formatTime(remaining)}`;
      } else {
        this.dom.timeTotal.textContent = this.formatTime(dur);
      }
    }

    if (dur > 0 && !this.playerState.isScrubbing) {
      const pct = Math.min(100, Math.max(0, (cur / dur) * 100));
      if (this.dom.scrubProgress) {
        this.dom.scrubProgress.style.width = `${pct}%`;
      }
      if (this.dom.scrubThumb) {
        this.dom.scrubThumb.style.left = `${pct}%`;
      }
    }

    if (dur > 0 && video.buffered && video.buffered.length > 0) {
      try {
        const bufferedEnd = video.buffered.end(video.buffered.length - 1);
        const bufPct = Math.min(100, Math.max(0, (bufferedEnd / dur) * 100));
        if (this.dom.scrubBuffer) {
          this.dom.scrubBuffer.style.width = `${bufPct}%`;
        }
      } catch (e) {}
    }

    if (dur > 0 && cur > 5) {
      this.savePlaybackProgress(false);
    }
  }

  savePlaybackProgress(force = false) {
    if (!this.activeMedia || !this.dom.videoElement) return;
    const video = this.dom.videoElement;
    if (!video.duration || video.duration <= 0 || isNaN(video.duration)) return;

    const now = Date.now();
    if (!force && (now - this.lastProgressSave < 8000)) return; // Guardar cada 8 segundos
    this.lastProgressSave = now;

    const mediaId = this.activeMedia.type === 'movie'
      ? `movie_${this.activeMedia.parentMedia ? this.activeMedia.parentMedia.id : this.activeMedia.title}`
      : `series_${this.activeMedia.parentMedia ? (this.activeMedia.parentMedia.id || this.activeMedia.parentMedia.imdb) : this.activeMedia.title}_s${this.activeMedia.season}e${this.activeMedia.episode}`;

    const poster = (this.activeMedia.parentMedia && (this.activeMedia.parentMedia.large_cover_image || this.activeMedia.parentMedia.medium_cover_image || this.activeMedia.parentMedia.poster)) || '';

    const cur = (video.currentTime || 0) + (this.playerState.streamStartTime || 0);
    const dur = (video.duration && isFinite(video.duration)) ? Math.max(video.duration, video.duration + (this.playerState.streamStartTime || 0)) : video.duration;

    const payload = {
      username: this.currentUser,
      media_id: mediaId,
      media_type: this.activeMedia.type,
      title: this.activeMedia.title,
      poster: poster,
      current_time: cur,
      duration: dur,
      episode_info: this.activeMedia.type === 'series' ? { season: this.activeMedia.season, episode: this.activeMedia.episode } : null,
      torrent_data: {
        torrentId: this.activeMedia.torrentId,
        fileIdx: this.activeMedia.fileIdx,
        parentMedia: this.activeMedia.parentMedia
      }
    };

    fetch('/api/cinema/user/progress', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }).catch(e => console.error('Error al guardar progreso:', e));
  }

  formatTime(secs) {
    if (isNaN(secs) || secs < 0 || !isFinite(secs)) return '00:00';
    const s = Math.floor(secs % 60);
    const m = Math.floor((secs / 60) % 60);
    const h = Math.floor(secs / 3600);
    if (h > 0) {
      return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    }
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }

  toggleAspectRatio() {
    const video = this.dom.videoElement;
    if (!video) return;
    if (this.playerState.aspectMode === 'contain') {
      this.playerState.aspectMode = 'cover';
      video.classList.remove('fit-fill');
      video.classList.add('fit-cover');
      this.showToast('Aspecto: Llenar Pantalla', 'info');
      this.showCenterFeedback('⛶', 'LLENAR');
    } else if (this.playerState.aspectMode === 'cover') {
      this.playerState.aspectMode = 'fill';
      video.classList.remove('fit-cover');
      video.classList.add('fit-fill');
      this.showToast('Aspecto: Estirar 16:9', 'info');
      this.showCenterFeedback('↔️', '16:9');
    } else {
      this.playerState.aspectMode = 'contain';
      video.classList.remove('fit-cover', 'fit-fill');
      this.showToast('Aspecto: Original (Ajustar)', 'info');
      this.showCenterFeedback('🔲', 'AJUSTAR');
    }
    this.resetHudTimer();
  }

  toggleFullscreen() {
    const view = this.dom.playerView;
    const video = this.dom.videoElement;
    if (!view) return;

    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
      if (view.requestFullscreen) {
        view.requestFullscreen().catch(() => {
          if (video && video.webkitEnterFullscreen) video.webkitEnterFullscreen();
        });
      } else if (view.webkitRequestFullscreen) {
        view.webkitRequestFullscreen();
      } else if (video && video.webkitEnterFullscreen) {
        video.webkitEnterFullscreen();
      }
      this.updateFullscreenUI(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
      this.updateFullscreenUI(false);
    }
    this.resetHudTimer();
  }

  updateFullscreenUI(isFullscreen) {
    if (this.dom.fullscreenEnterIcon && this.dom.fullscreenExitIcon) {
      if (isFullscreen) {
        this.dom.fullscreenEnterIcon.classList.add('is-hidden');
        this.dom.fullscreenExitIcon.classList.remove('is-hidden');
      } else {
        this.dom.fullscreenEnterIcon.classList.remove('is-hidden');
        this.dom.fullscreenExitIcon.classList.add('is-hidden');
      }
    }
  }

  resetHudTimer() {
    if (this.dom.playerView) {
      this.dom.playerView.classList.remove('hud-hidden');
    }

    if (this.playerState.hudHideTimer) {
      clearTimeout(this.playerState.hudHideTimer);
      this.playerState.hudHideTimer = null;
    }

    const isPopoverOpen = (
      (this.dom.subtitlesPopover && !this.dom.subtitlesPopover.classList.contains('is-hidden')) ||
      (this.dom.audioPopover && !this.dom.audioPopover.classList.contains('is-hidden')) ||
      (this.dom.speedPopover && !this.dom.speedPopover.classList.contains('is-hidden'))
    );

    const video = this.dom.videoElement;
    if (video && !video.paused && !this.playerState.isScrubbing && !isPopoverOpen) {
      this.playerState.hudHideTimer = setTimeout(() => {
        if (this.dom.playerView && !this.dom.playerView.classList.contains('is-hidden')) {
          this.dom.playerView.classList.add('hud-hidden');
        }
      }, 3500);
    }
  }

  /* ========================================================================
     FAILOVER AUTOMÁTICO DE FUENTES TORRENT (SIN QUEDARSE EN 0 SEMILLAS)
     ======================================================================== */

  tryNextStreamFallback(reason = 'sin semillas activas') {
    if (!this.activeMedia || !this.activeMedia.allStreams || this.activeMedia.allStreams.length === 0) {
      return false;
    }

    const streams = this.activeMedia.allStreams;
    const nextIdx = (this.activeMedia.currentStreamIndex !== undefined) ? this.activeMedia.currentStreamIndex + 1 : 1;

    if (nextIdx >= streams.length) {
      // Se agotaron las fuentes alternativas disponibles
      if (this.dom.loadingStats) {
        this.dom.loadingStats.innerHTML = `
          <div style="color:#ef4444; font-weight:600; margin-bottom:8px;">
            ⚠️ Las fuentes para esta selección no tienen semillas activas en este momento.
          </div>
          <div style="display:flex; justify-content:center; gap:10px; margin-top:12px; flex-wrap:wrap;">
            <button class="cinema-btn-load-cancel" id="btnLoadingBackToDetail">
              ← Volver al catálogo / Elegir otra calidad
            </button>
            <button class="cinema-btn-load-cancel" id="btnLoadingRetryFirst" style="background:rgba(0,229,255,0.2); border-color:#00e5ff; color:#00e5ff;">
              🔄 Reintentar conexión
            </button>
          </div>
        `;
        const backBtn = document.getElementById('btnLoadingBackToDetail');
        if (backBtn) backBtn.onclick = () => this.closeCinemaPlayer();
        const retryBtn = document.getElementById('btnLoadingRetryFirst');
        if (retryBtn) retryBtn.onclick = () => {
          this.activeMedia.currentStreamIndex = 0;
          const first = streams[0];
          const fid = (first.fileIdx !== undefined && first.fileIdx !== null) ? first.fileIdx : null;
          const tid = first.url || first.magnet_url || first.hash;
          const q = first.quality || 'HD';
          const tName = (this.activeMedia.type === 'movie')
            ? `${this.activeMedia.title} [${q}]`
            : `${this.activeMedia.title}`;
          this.startTorrentPlayback(tName, tid, fid);
        };
      }
      return false;
    }

    const nextStream = streams[nextIdx];
    this.activeMedia.currentStreamIndex = nextIdx;
    this.activeMedia.torrentData = nextStream;
    this.activeMedia.streamData = nextStream;
    const nextTorrentId = nextStream.url || nextStream.magnet_url || nextStream.hash;
    const nextFileIdx = (nextStream.fileIdx !== undefined && nextStream.fileIdx !== null) ? nextStream.fileIdx : null;
    const nextQuality = nextStream.quality || 'HD';
    const nextSeeds = nextStream.seeds || 0;
    const nextSize = nextStream.size || 'HD';

    let nextTitle = this.activeMedia.title;
    if (this.activeMedia.type === 'movie') {
      const baseTitle = this.activeMedia.parentMedia ? this.activeMedia.parentMedia.title : this.activeMedia.title.replace(/\s*\[.*?\]$/, '');
      nextTitle = `${baseTitle} [${nextQuality}]`;
    }

    this.activeMedia.torrentId = nextTorrentId;
    this.activeMedia.fileIdx = nextFileIdx;
    this.activeMedia.quality = nextQuality;

    if (this.dom.playerTitle) this.dom.playerTitle.textContent = nextTitle;
    if (this.dom.loadingText) this.dom.loadingText.textContent = `Probando fuente alternativa (${nextQuality})...`;
    if (this.dom.loadingStats) {
      this.dom.loadingStats.textContent = `Conectando con opción ${nextIdx + 1} de ${streams.length} (⚡ ${nextSeeds} semillas, 💾 ${nextSize})...`;
    }
    this.showToast(`Buscando semillas en fuente alternativa [${nextQuality}]...`, 'info');

    this.startTorrentPlayback(nextTitle, nextTorrentId, nextFileIdx);
    return true;
  }

  /* ========================================================================
     INICIO DE REPRODUCCIÓN TORRENT P2P NATIVA (1 CLIC DIRECTO, ESTILO STREMIO)
     ======================================================================== */

  startTorrentPlayback(title, torrentId, fileIdx = null) {
    if (!this.dom.videoElement) return;

    if (this.statusPollTimer) {
      clearInterval(this.statusPollTimer);
      this.statusPollTimer = null;
    }

    this.activeTorrent = torrentId;

    // Reiniciar estado de pistas de audio, subtítulos y transcode para la nueva reproducción
    this.playerState.audioStreams = [];
    this.playerState.mediaInfo = null;
    this.playerState.selectedAudioTrack = null;
    this.playerState.forceTranscode = false;
    this.playerState.streamStartTime = 0;
    this.playerState.activeSubtitleId = 'off';
    this.playerState.subtitlesList = [];
    this.clearSubtitles();

    if (this.playerState.audioProbingTimer) {
      clearTimeout(this.playerState.audioProbingTimer);
      this.playerState.audioProbingTimer = null;
    }

    if (this.dom.loadingOverlay) {
      this.dom.loadingOverlay.classList.remove('is-hidden');
    }
    if (this.dom.loadingText) {
      this.dom.loadingText.textContent = `Iniciando "${title}"...`;
    }
    if (this.dom.progressFill) {
      this.dom.progressFill.style.width = '15%';
    }
    if (this.dom.playerStatusBadge) {
      this.dom.playerStatusBadge.innerHTML = '<span class="cinema-pulse-dot"></span> CONECTANDO...';
    }
    if (this.dom.playerStatsBadge) {
      this.dom.playerStatsBadge.textContent = '⚡ Conectando enjambre P2P...';
    }
    if (this.dom.ctrlStreamTag) {
      this.dom.ctrlStreamTag.textContent = title;
    }

    const video = this.dom.videoElement;
    video.pause();
    video.style.display = 'block';

    let streamUrl = `/api/torrent/stream?torrent=${encodeURIComponent(torrentId)}`;
    if (fileIdx !== undefined && fileIdx !== null) {
      streamUrl += `&fileIdx=${fileIdx}`;
    }

    video.src = streamUrl;
    video.load();

    // Iniciar búsqueda automática de subtítulos y sondeo de pistas de audio en segundo plano
    this.loadSubtitlesForCurrentMedia();
    setTimeout(() => this.probeAudioTracks(torrentId, fileIdx), 2000);
    this.resetHudTimer();

    let playbackStarted = false;
    let secondsWithZeroPeers = 0;
    let totalPollSeconds = 0;
    let failoverTriggered = false;
    let currentDownloadedBytes = 0;
    const INITIAL_BUFFER_TARGET_BYTES = 2 * 1024 * 1024; // 2 MB de buffer inicial sólido para reproducción fluida sin cortes

    // Función auxiliar para calcular segundos de video listos por delante en el buffer del navegador
    const getBufferedAhead = () => {
      try {
        if (video.buffered && video.buffered.length > 0) {
          for (let i = 0; i < video.buffered.length; i++) {
            if (video.buffered.start(i) <= video.currentTime && video.buffered.end(i) >= video.currentTime) {
              return video.buffered.end(i) - video.currentTime;
            }
          }
          return video.buffered.end(0);
        }
      } catch (e) {}
      return 0;
    };

    // Renderizar controles de cancelación en la pantalla de carga para que el usuario nunca quede atrapado
    const renderLoadingHUD = (statsMessage) => {
      if (!this.dom.loadingStats) return;
      const streams = this.activeMedia?.allStreams || [];
      const currentIdx = this.activeMedia?.currentStreamIndex || 0;
      const hasNext = (currentIdx + 1 < streams.length);

      let actionBtnsHtml = `
        <div style="margin-top:12px; display:flex; justify-content:center; gap:8px; flex-wrap:wrap;">
          ${hasNext ? `
            <button class="cinema-btn-load-cancel" id="btnManualNextStream" style="background:rgba(0,229,255,0.18); border-color:rgba(0,229,255,0.4); color:#00e5ff;">
              ⚡ Probar siguiente fuente (${currentIdx + 2} de ${streams.length})
            </button>
          ` : ''}
          <button class="cinema-btn-load-cancel" id="btnCancelLoadCinema">
            ✕ Volver al menú
          </button>
        </div>
      `;

      this.dom.loadingStats.innerHTML = `
        <div>${statsMessage}</div>
        ${actionBtnsHtml}
      `;

      const nextBtn = document.getElementById('btnManualNextStream');
      if (nextBtn) {
        nextBtn.onclick = () => {
          if (!failoverTriggered) {
            failoverTriggered = true;
            this.tryNextStreamFallback('cambio manual');
          }
        };
      }

      const cancelBtn = document.getElementById('btnCancelLoadCinema');
      if (cancelBtn) {
        cancelBtn.onclick = () => this.closeCinemaPlayer();
      }
    };

    renderLoadingHUD('Conectando con enjambre P2P y rastreadores públicos...');

    const onReadyToPlay = () => {
      if (playbackStarted) return;
      playbackStarted = true;
      this.probeAudioTracks(torrentId, fileIdx);
      if (this.dom.loadingOverlay) {
        this.dom.loadingOverlay.classList.add('is-hidden');
      }
      if (this.dom.playerStatusBadge) {
        this.dom.playerStatusBadge.innerHTML = '<span class="cinema-pulse-dot"></span> EN VIVO P2P';
      }
      this.updatePlayPauseUI(true);
      this.resetHudTimer();
      if (window.setTvFocus && this.dom.ctrlPlayBtn) {
        setTimeout(() => window.setTvFocus(this.dom.ctrlPlayBtn), 150);
      }

      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(e => {
          console.warn('Autoplay prevenido por navegador:', e);
          if (this.dom.loadingOverlay) {
            this.dom.loadingOverlay.classList.remove('is-hidden');
          }
          if (this.dom.loadingStats) {
            this.dom.loadingStats.innerHTML = `
              <button class="cinema-btn-play-action cinema-btn-play-hero" id="btnManualStartPlay" style="margin-top:10px; cursor:pointer;" tabindex="0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                CLIC AQUÍ PARA REPRODUCIR AHORA
              </button>
            `;
            const mBtn = document.getElementById('btnManualStartPlay');
            if (mBtn) {
              mBtn.onclick = () => {
                video.play();
                if (this.dom.loadingOverlay) this.dom.loadingOverlay.classList.add('is-hidden');
                this.updatePlayPauseUI(true);
              };
              if (window.setTvFocus) window.setTvFocus(mBtn);
            }
          }
        });
      }
      this.showToast(`▶ Reproduciendo "${title}"`, 'info');
    };

    const attemptPlaybackWithBuffer = () => {
      if (playbackStarted) return;
      const bufAhead = getBufferedAhead();
      // Iniciar cuando el buffer descargado alcance 2MB O tengamos >= 2.5 segundos decodificados en el buffer
      if (currentDownloadedBytes >= INITIAL_BUFFER_TARGET_BYTES || bufAhead >= 2.5 || totalPollSeconds >= 10) {
        onReadyToPlay();
      }
    };

    video.onloadeddata = () => attemptPlaybackWithBuffer();
    video.oncanplay = () => attemptPlaybackWithBuffer();
    video.oncanplaythrough = () => {
      if (!playbackStarted && (currentDownloadedBytes >= 1.5 * 1024 * 1024 || totalPollSeconds >= 6)) {
        onReadyToPlay();
      }
    };

    video.onwaiting = () => {
      if (this.dom.playerStatusBadge) {
        this.dom.playerStatusBadge.innerHTML = '<span class="cinema-pulse-dot" style="background:#ff9800;"></span> LLENANDO BUFFER...';
      }
    };

    video.onplaying = () => {
      if (!playbackStarted) onReadyToPlay();
      if (this.dom.loadingOverlay) this.dom.loadingOverlay.classList.add('is-hidden');
      if (this.dom.playerStatusBadge) {
        this.dom.playerStatusBadge.innerHTML = '<span class="cinema-pulse-dot"></span> EN VIVO P2P';
      }
      this.updatePlayPauseUI(true);
    };

    video.onerror = (e) => {
      console.warn('Error en stream torrent. Probando siguiente fuente...', e);
      if (!playbackStarted && !failoverTriggered) {
        failoverTriggered = true;
        this.tryNextStreamFallback('error en reproducción del stream actual');
      }
    };

    const pollStatus = async () => {
      if (!this.activeTorrent || this.activeTorrent !== torrentId) return;
      totalPollSeconds++;
      let hasData = false;
      let peers = 0;
      let speed = 0;
      let dlMB = '0.0';
      let totMB = '0.0';
      let downloadedBytes = 0;

      try {
        let statusUrl = `/api/torrent/status?torrent=${encodeURIComponent(torrentId)}`;
        if (fileIdx !== undefined && fileIdx !== null) {
          statusUrl += `&fileIdx=${fileIdx}`;
        }
        const resp = await fetch(statusUrl);
        if (resp.ok) {
          const data = await resp.json();
          if (data && data.active) {
            hasData = true;
            peers = data.numPeers || 0;
            speed = data.downloadSpeed || 0;
            dlMB = data.downloadedMB || '0.0';
            totMB = data.totalMB || '0.0';
            downloadedBytes = data.downloaded || 0;
            currentDownloadedBytes = downloadedBytes;
          }
        }
      } catch (err) {}

      if (!hasData || peers === 0) {
        if (!playbackStarted) secondsWithZeroPeers++;
      } else {
        secondsWithZeroPeers = 0;
      }

      if (this.dom.playerStatsBadge) {
        if (peers > 0) {
          this.dom.playerStatsBadge.textContent = `👥 ${peers} Semillas • ${speed} KB/s`;
        } else {
          this.dom.playerStatsBadge.textContent = `Buscando semillas (${totalPollSeconds}s)...`;
        }
      }

      // Sondeo proactivo de codecs de audio tan pronto se reciban los primeros 2MB
      if (downloadedBytes >= 2 * 1024 * 1024 && (!this.playerState.audioStreams || this.playerState.audioStreams.length === 0)) {
        this.probeAudioTracks(torrentId, fileIdx);
      }

      // Si tras 12 segundos no hay semillas activas en este torrent y no se ha iniciado la reproducción,
      // failover automático a la siguiente opción torrent
      if (!playbackStarted && !failoverTriggered && secondsWithZeroPeers >= 12) {
        failoverTriggered = true;
        console.log('[Cinema Player] Sin semillas activas tras 12s. Probando siguiente opción torrent...');
        this.tryNextStreamFallback('sin semillas activas tras 12s');
        return;
      }

      if (!playbackStarted) {
        const bufferTarget = INITIAL_BUFFER_TARGET_BYTES;
        const targetMB = (bufferTarget / (1024 * 1024)).toFixed(0);
        const pct = Math.min(96, Math.round((downloadedBytes / bufferTarget) * 100));

        let statsMsg = '';
        if (peers === 0) {
          statsMsg = `Conectando con enjambre P2P... (${secondsWithZeroPeers}s) • 👥 0 semillas detectadas`;
        } else {
          statsMsg = `Llenando buffer inicial: ${dlMB} MB de ${targetMB} MB (${pct}%) • 👥 ${peers} semillas activas • ⚡ ${speed} KB/s`;
        }

        renderLoadingHUD(statsMsg);

        if (this.dom.progressFill) {
          this.dom.progressFill.style.width = `${Math.max(8, pct)}%`;
        }
        if (peers > 0 && this.dom.playerStatusBadge) {
          this.dom.playerStatusBadge.innerHTML = `<span class="cinema-pulse-dot"></span> ${peers} SEMILLAS ACTIVAS`;
        }

        // Disparar reproducción fluida una vez alcanzado el umbral de buffer para evitar pausas
        const bufAhead = getBufferedAhead();
        if ((downloadedBytes >= bufferTarget || bufAhead >= 5.0 || (totalPollSeconds >= 15 && downloadedBytes >= 4 * 1024 * 1024)) && video.paused) {
          video.play().then(() => {
            onReadyToPlay();
          }).catch(() => {});
        }
      }
    };

    this.statusPollTimer = setInterval(pollStatus, 1000);
    setTimeout(pollStatus, 300);
  }
}




  /* ========================================================================
     SOURCE MODULE: tv-navigation.js
     ======================================================================== */

/**
 * ANTENA SUR - TV Navigation Engine
 * Navegación espacial determinista 2D de alta precisión para Android TV, Google TV y Smart TVs
 * Compatible con controles remotos USB Wireless con dongle 2.4GHz, mandos IR y teclados físicos
 */
function initTvNavigation() {
  function getFocusableElements() {
    // 1. Si el reproductor cinema está abierto, enfocar exclusivamente controles del reproductor
    const cinemaPlayerView = document.getElementById('cinemaPlayerView');
    if (cinemaPlayerView && !cinemaPlayerView.classList.contains('is-hidden')) {
      const playerSelectors = [
        '#cinemaPlayerBackBtn',
        '#cinemaCtrlPlayBtn',
        '#cinemaCtrlRewindBtn',
        '#cinemaCtrlForwardBtn',
        '#cinemaCtrlVolumeBtn',
        '#cinemaCtrlAudioBtn',
        '#cinemaCtrlSubtitlesBtn',
        '#cinemaCtrlSpeedBtn',
        '#cinemaCtrlAspectBtn',
        '#cinemaScrubTrack',
        '#btnManualStartPlay',
        '.cinema-btn-load-cancel',
        '.cinema-player-skip-wait-btn',
        '.cinema-sub-size-pill',
        '.cinema-sub-pos-pill',
        '.cinema-btn-sync',
        '.cinema-sub-option',
        '.cinema-audio-opt-btn',
        '.cinema-speed-opt',
        '.cinema-popover-close-btn'
      ];
      return Array.from(cinemaPlayerView.querySelectorAll(playerSelectors.join(',')))
        .filter(el => {
          if (!el.offsetParent && el.offsetWidth === 0 && el.offsetHeight === 0) return false;
          const style = window.getComputedStyle(el);
          return style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0';
        });
    }

    // 2. Si la vista de detalles de película o serie está abierta, enfocar exclusivamente sus controles
    const cinemaDetailView = document.getElementById('cinemaDetailView');
    if (cinemaDetailView && !cinemaDetailView.classList.contains('is-hidden')) {
      const detailSelectors = [
        '#cinemaDetailBackBtn',
        '#cinemaDetailHeroPlayBtn',
        '#cinemaDetailFavBtn',
        '#cinemaDetailWatchedBtn',
        '[data-action="play-movie-quality"]',
        '.cinema-season-tab',
        '[data-action="play-ep-stream"]',
        '[data-action="load-ep-streams"]',
        '.cinema-ep-stream-btn',
        '.cinema-quality-play-btn',
        '#btnManualStartPlay'
      ];
      return Array.from(cinemaDetailView.querySelectorAll(detailSelectors.join(',')))
        .filter(el => {
          if (!el.offsetParent && el.offsetWidth === 0 && el.offsetHeight === 0) return false;
          const style = window.getComputedStyle(el);
          return style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0';
        });
    }

    // 3. Si la cartelera VOD de cine está abierta
    const cinemaVodView = document.getElementById('cinemaVodView');
    if (cinemaVodView && !cinemaVodView.classList.contains('is-hidden')) {
      const vodSelectors = [
        '#cinemaBackBtn',
        '.cinema-tab-btn',
        '.cinema-mode-btn',
        '#cinemaSearchInput',
        '#cinemaUserBtn',
        '.cinema-rank-chip',
        '.cinema-genre-chip',
        '.cinema-card',
        '.cinema-load-more-btn'
      ];
      return Array.from(cinemaVodView.querySelectorAll(vodSelectors.join(',')))
        .filter(el => {
          if (!el.offsetParent && el.offsetWidth === 0 && el.offsetHeight === 0) return false;
          const style = window.getComputedStyle(el);
          return style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0';
        });
    }

    // 4. Menú principal y catálogo general
    const generalSelectors = [
      '#heroCardRadio',
      '#heroCardTv',
      '#heroCardCinema',
      '.section-nav-tab',
      '.station-card'
    ];
    return Array.from(document.querySelectorAll(generalSelectors.join(',')))
      .filter(el => {
        if (!el.offsetParent && el.offsetWidth === 0 && el.offsetHeight === 0) return false;
        const style = window.getComputedStyle(el);
        return style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0';
      });
  }

  let currentTvFocused = null;

  function setFocus(element) {
    if (!element) return;
    try {
      element.focus({ preventScroll: true });
    } catch (e) {
      try { element.focus(); } catch (e2) {}
    }
    // Desplazamiento instantáneo sin animación para 60 FPS constantes en TV
    try {
      element.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    } catch (e) {
      try { element.scrollIntoView(); } catch (e2) {}
    }
    if (currentTvFocused && currentTvFocused !== element) {
      currentTvFocused.classList.remove('is-tv-focused');
    }
    element.classList.add('is-tv-focused');
    currentTvFocused = element;
  }
  window.setTvFocus = setFocus;

  function navigateSpatial(direction) {
    let current = document.activeElement;
    if (!current || current === document.body || !document.contains(current)) {
      current = currentTvFocused || document.querySelector('.is-tv-focused');
    }

    // 0. Si el reproductor Cinema está abierto, garantizar foco interno
    const cinemaPlayerView = document.getElementById('cinemaPlayerView');
    if (cinemaPlayerView && !cinemaPlayerView.classList.contains('is-hidden')) {
      const focusable = getFocusableElements();
      if (!current || !cinemaPlayerView.contains(current)) {
        if (focusable.length > 0) {
          setFocus(focusable[0]);
          return;
        }
      }
    }

    // 1. Si la vista de detalles Cinema está abierta, garantizar foco interno
    const cinemaDetailView = document.getElementById('cinemaDetailView');
    if (cinemaDetailView && !cinemaDetailView.classList.contains('is-hidden')) {
      const focusable = getFocusableElements();
      if (!current || !cinemaDetailView.contains(current)) {
        if (focusable.length > 0) {
          setFocus(focusable[0]);
          return;
        }
      }
    }

    // 2. Si la cartelera Cinema está abierta, garantizar foco interno
    const cinemaVodView = document.getElementById('cinemaVodView');
    if (cinemaVodView && !cinemaVodView.classList.contains('is-hidden')) {
      const focusable = getFocusableElements();
      if (!current || !cinemaVodView.contains(current)) {
        if (focusable.length > 0) {
          setFocus(focusable[0]);
          return;
        }
      }
    }

    const heroRadio = document.getElementById('heroCardRadio');
    const heroTv = document.getElementById('heroCardTv');
    const heroCinema = document.getElementById('heroCardCinema');

    if (!current) {
      setFocus(heroRadio || heroTv || heroCinema);
      return;
    }

    // ========================================================================
    // NAVEGACIÓN DETERMINISTA EN LOS 3 GRANDES BOTONES PRINCIPALES (HERO)
    // 01: RADIOS FM | 02: CANALES DE TV | 03: CINE & SERIES
    // ========================================================================
    if (current === heroRadio || current.id === 'heroCardRadio') {
      if (direction === 'ArrowDown') {
        // Salto directo de la opción 1 a la opción 3 (pedido explícito del usuario)
        setFocus(heroCinema);
        return;
      }
      if (direction === 'ArrowRight') {
        setFocus(heroTv);
        return;
      }
      if (direction === 'ArrowLeft' || direction === 'ArrowUp') {
        setFocus(heroRadio);
        return;
      }
      return;
    }

    if (current === heroTv || current.id === 'heroCardTv') {
      if (direction === 'ArrowLeft') {
        setFocus(heroRadio);
        return;
      }
      if (direction === 'ArrowRight' || direction === 'ArrowDown') {
        setFocus(heroCinema);
        return;
      }
      if (direction === 'ArrowUp') {
        setFocus(heroRadio);
        return;
      }
      return;
    }

    if (current === heroCinema || current.id === 'heroCardCinema') {
      if (direction === 'ArrowUp') {
        // Regreso directo a la opción 1 (Radios)
        setFocus(heroRadio);
        return;
      }
      if (direction === 'ArrowLeft') {
        setFocus(heroTv);
        return;
      }
      if (direction === 'ArrowRight' || direction === 'ArrowDown') {
        setFocus(heroCinema);
        return;
      }
      return;
    }

    // ========================================================================
    // 3. NAVEGACIÓN MATEMÁTICA O(1) EN EL CATÁLOGO (.station-card) - CERO REFLOWS
    // ========================================================================
    if (current.classList && current.classList.contains('station-card')) {
      const allCards = document.querySelectorAll('.stations-grid .station-card');
      const total = allCards.length;
      if (total === 0) return;

      let idx = -1;
      for (let i = 0; i < total; i++) {
        if (allCards[i] === current) { idx = i; break; }
      }
      if (idx === -1) return;

      // Calcular número de columnas en la primera fila (O(1), máximo 6 comparaciones)
      let cols = 1;
      const top0 = allCards[0].offsetTop;
      while (cols < total && allCards[cols].offsetTop === top0) {
        cols++;
      }

      if (direction === 'ArrowUp') {
        if (idx < cols) {
          // Primera fila: subir a los botones principales
          setFocus(heroTv || tabTv);
          return;
        }
        setFocus(allCards[idx - cols]);
        return;
      }

      if (direction === 'ArrowDown') {
        const nextIdx = idx + cols;
        // Si nos acercamos al final del lote actual, cargar el siguiente bloque
        if (window.__antenaSurApp && typeof window.__antenaSurApp.loadMoreStations === 'function') {
          if (nextIdx >= total - 8) {
            window.__antenaSurApp.loadMoreStations();
          }
        }
        const updatedCards = document.querySelectorAll('.stations-grid .station-card');
        if (nextIdx < updatedCards.length) {
          setFocus(updatedCards[nextIdx]);
        } else if (updatedCards.length > 0) {
          setFocus(updatedCards[updatedCards.length - 1]);
        }
        return;
      }

      if (direction === 'ArrowLeft') {
        if (idx > 0) {
          setFocus(allCards[idx - 1]);
        }
        return;
      }

      if (direction === 'ArrowRight') {
        if (idx < total - 1) {
          setFocus(allCards[idx + 1]);
        }
        return;
      }
      return;
    }

    // ========================================================================
    // 4. FALLBACK GENERAL: CÁLCULO DE PROXIMIDAD ESPACIAL 2D
    // ========================================================================
    const focusable = getFocusableElements();
    if (!focusable.length) return;

    const cRect = current.getBoundingClientRect();
    const cCenter = {
      x: cRect.left + cRect.width / 2,
      y: cRect.top + cRect.height / 2
    };

    let bestCandidate = null;
    let minScore = Infinity;

    for (const el of focusable) {
      if (el === current) continue;
      const r = el.getBoundingClientRect();
      const center = {
        x: r.left + r.width / 2,
        y: r.top + r.height / 2
      };

      const dx = center.x - cCenter.x;
      const dy = center.y - cCenter.y;

      let isValidDirection = false;
      let score = 0;

      if (direction === 'ArrowRight') {
        if (dx > 10) {
          isValidDirection = true;
          score = dx + Math.abs(dy) * 3;
        }
      } else if (direction === 'ArrowLeft') {
        if (dx < -10) {
          isValidDirection = true;
          score = Math.abs(dx) + Math.abs(dy) * 3;
        }
      } else if (direction === 'ArrowDown') {
        if (dy > 10) {
          isValidDirection = true;
          score = dy + Math.abs(dx) * 1.5;
        }
      } else if (direction === 'ArrowUp') {
        if (dy < -10) {
          isValidDirection = true;
          score = Math.abs(dy) + Math.abs(dx) * 1.5;
        }
      }

      if (isValidDirection && score < minScore) {
        minScore = score;
        bestCandidate = el;
      }
    }

    if (bestCandidate) {
      setFocus(bestCandidate);
    }
  }

  // Interfaz pública para Android WebView
  window.initTvFocus = function() {
    const heroRadio = document.getElementById('heroCardRadio');
    setFocus(heroRadio);
  };

  window.onTvBack = function() {
    // 1. Reproductor Cinema en Pantalla Completa
    const cinemaPlayerView = document.getElementById('cinemaPlayerView');
    if (cinemaPlayerView && !cinemaPlayerView.classList.contains('is-hidden')) {
      if (window.AntenaSurCinema) {
        if (window.AntenaSurCinema.closeAllPopovers && window.AntenaSurCinema.closeAllPopovers()) {
          return true;
        }
        window.AntenaSurCinema.closeCinemaPlayer(true);
      }
      return true;
    }

    // 2. Vista de Detalles de Película / Serie
    const cinemaDetailView = document.getElementById('cinemaDetailView');
    if (cinemaDetailView && !cinemaDetailView.classList.contains('is-hidden')) {
      if (window.AntenaSurCinema) {
        window.AntenaSurCinema.closeDetail();
      }
      return true;
    }

    // 3. Cartelera Cinema & Series VOD (cerrar y volver al menú principal)
    const cinemaVodView = document.getElementById('cinemaVodView');
    if (cinemaVodView && !cinemaVodView.classList.contains('is-hidden')) {
      if (window.AntenaSurCinema) {
        window.AntenaSurCinema.close();
      }
      const heroCinema = document.getElementById('heroCardCinema');
      if (heroCinema) setFocus(heroCinema);
      return true;
    }

    // 4. Reproductor TV en Pantalla Completa / Zapping
    const player = window.AntenaSurPlayer || (window.__antenaSurApp ? window.__antenaSurApp.player : null);
    const isTvPlayerOpen = (player && player.dom && player.dom.tvZappingView && !player.dom.tvZappingView.classList.contains('is-hidden'));
    if (isTvPlayerOpen) {
      if (player.isOptionsMenuOpen) {
        player.closeTvOptionsMenu();
        return true;
      }
      if (player.isGuideOverlayVisible) {
        player.hideFullscreenGuide();
        return true;
      }
      if (player.isSidebarOpen) {
        player.toggleSidebar(false);
        return true;
      }
      player.closeTvPlayer();
      const heroTv = document.getElementById('heroCardTv');
      if (heroTv) setFocus(heroTv);
      return true;
    }

    // 5. Radios FM en Pantalla Completa
    const isRadioFsOpen = (player && (player.isRadioFullscreen || (player.dom && player.dom.radioFullscreenView && !player.dom.radioFullscreenView.classList.contains('is-hidden'))));
    if (isRadioFsOpen) {
      player.closeFullscreenRadio();
      const heroRadio = document.getElementById('heroCardRadio');
      if (heroRadio) setFocus(heroRadio);
      return true;
    }

    // 6. Modales secundarios
    const infoModal = document.getElementById('stationInfoModal');
    const customModal = document.getElementById('addCustomModal');
    if (infoModal && infoModal.classList.contains('is-open')) {
      infoModal.classList.remove('is-open');
      return true;
    }
    if (customModal && customModal.classList.contains('is-open')) {
      customModal.classList.remove('is-open');
      return true;
    }

    // 7. En el menú principal: si el foco no está en el primer elemento (Radios), enfocar Radios
    const heroRadio = document.getElementById('heroCardRadio');
    if (document.activeElement && document.activeElement !== heroRadio && heroRadio) {
      setFocus(heroRadio);
      return true;
    }

    // Si ya estamos en el Menú Principal y en la primera opción, retornar false para que Android muestre "Presiona Atrás otra vez para salir"
    return false;
  };

  window.onTvNav = function(action) {
    if (action === 'Back') {
      window.onTvBack();
      return;
    }

    const player = window.AntenaSurPlayer || (window.__antenaSurApp ? window.__antenaSurApp.player : null);
    const isTvPlayerOpen = (player && player.dom && player.dom.tvZappingView && !player.dom.tvZappingView.classList.contains('is-hidden'));

    // 0. Navegación en Reproductor Cinema en Pantalla Completa
    const cinemaPlayerView = document.getElementById('cinemaPlayerView');
    const isCinemaPlayerOpen = cinemaPlayerView && !cinemaPlayerView.classList.contains('is-hidden');
    if (isCinemaPlayerOpen) {
      if (window.AntenaSurCinema && typeof window.AntenaSurCinema.resetHudTimer === 'function') {
        window.AntenaSurCinema.resetHudTimer();
      }

      if (action === 'PlayPause') {
        if (window.AntenaSurCinema && typeof window.AntenaSurCinema.togglePlayPause === 'function') {
          window.AntenaSurCinema.togglePlayPause();
        }
        return;
      }

      if (action === 'Enter') {
        let current = document.activeElement;
        if (!current || current === document.body || current === cinemaPlayerView) {
          current = document.querySelector('.is-tv-focused');
        }
        if (current && typeof current.click === 'function' && current !== cinemaPlayerView) {
          current.click();
        } else if (window.AntenaSurCinema && typeof window.AntenaSurCinema.togglePlayPause === 'function') {
          window.AntenaSurCinema.togglePlayPause();
        }
        return;
      }

      if (action === 'ArrowLeft' || action === 'ArrowRight' || action === 'ArrowUp' || action === 'ArrowDown') {
        const prevFocused = document.activeElement;
        navigateSpatial(action);
        // Si no cambió de elemento y estamos en video sin controles enfocados, permitir seek
        if (document.activeElement === prevFocused && (!document.activeElement || document.activeElement === cinemaPlayerView || document.activeElement.id === 'cinemaScrubTrack')) {
          if (action === 'ArrowLeft' && window.AntenaSurCinema && typeof window.AntenaSurCinema.seekRelative === 'function') {
            window.AntenaSurCinema.seekRelative(-10);
          } else if (action === 'ArrowRight' && window.AntenaSurCinema && typeof window.AntenaSurCinema.seekRelative === 'function') {
            window.AntenaSurCinema.seekRelative(10);
          }
        }
        return;
      }
      return;
    }

    // 1. Navegación en Vista de Detalles de Películas / Series (Cinema Detail View)
    const cinemaDetailView = document.getElementById('cinemaDetailView');
    const isCinemaDetailOpen = cinemaDetailView && !cinemaDetailView.classList.contains('is-hidden');
    if (isCinemaDetailOpen) {
      if (action === 'Enter') {
        let current = document.activeElement;
        if (!current || current === document.body || !document.contains(current)) {
          current = document.querySelector('.is-tv-focused');
        }
        if (current && typeof current.click === 'function') {
          current.click();
        }
        return;
      }

      if (action === 'ArrowLeft' || action === 'ArrowRight' || action === 'ArrowUp' || action === 'ArrowDown') {
        navigateSpatial(action);
        return;
      }
      return;
    }

    // 2. Navegación en Cartelera Cinema & Series VOD (Catálogo)
    const cinemaView = document.getElementById('cinemaVodView');
    const isCinemaOpen = cinemaView && !cinemaView.classList.contains('is-hidden');
    if (isCinemaOpen) {
      if (action === 'Enter') {
        let current = document.activeElement;
        if (!current || current === document.body || !document.contains(current)) {
          current = document.querySelector('.is-tv-focused');
        }
        if (current && typeof current.click === 'function') {
          current.click();
        }
        return;
      }

      if (action === 'ArrowLeft' || action === 'ArrowRight' || action === 'ArrowUp' || action === 'ArrowDown') {
        navigateSpatial(action);
        return;
      }
      return;
    }

    // Navegación en Reproductor de Radio en Pantalla Completa (1 a 1)
    const isRadioFsOpen = (player && (player.isRadioFullscreen || (player.dom && player.dom.radioFullscreenView && !player.dom.radioFullscreenView.classList.contains('is-hidden'))));
    if (isRadioFsOpen) {
      if (player && typeof player.handleTvNav === 'function') {
        player.handleTvNav(action);
        return;
      }
      if (action === 'ArrowLeft' || action === 'ArrowUp') {
        player.playPreviousRadio();
        return;
      }
      if (action === 'ArrowRight' || action === 'ArrowDown') {
        player.playNextRadio();
        return;
      }
      if (action === 'Enter') {
        player.toggleRadioPlayPause();
        return;
      }
      if (action === 'Back') {
        player.closeFullscreenRadio();
        return;
      }
    }

    if (isTvPlayerOpen) {
      if (player && typeof player.handleTvNav === 'function') {
        player.handleTvNav(action);
        return;
      }

      const isFullscreen = player.isFullscreenActive();
      const isFsSidebarOpen = typeof player.isFsSidebarOpen === 'function' ? player.isFsSidebarOpen() : false;
      const isSidebarVisible = isFsSidebarOpen || (player.dom.zappingSidebar && !player.dom.zappingSidebar.classList.contains('is-collapsed'));

      if (action === 'ArrowUp') {
        if (isSidebarVisible) {
          player.navigateSidebarList(-1);
        } else {
          player.zapPrevious();
        }
        return;
      }
      if (action === 'ArrowDown') {
        if (isSidebarVisible) {
          player.navigateSidebarList(1);
        } else {
          player.zapNext();
        }
        return;
      }
      if (action === 'ArrowLeft') {
        if (isFullscreen) {
          if (typeof player.toggleFullscreenSidebar === 'function') {
            player.toggleFullscreenSidebar(true);
            player.focusCurrentSidebarItem();
          }
        } else {
          player.toggleSidebar(true);
          player.focusCurrentSidebarItem();
        }
        return;
      }
      if (action === 'ArrowRight') {
        if (isFullscreen) {
          if (typeof player.toggleFullscreenSidebar === 'function') {
            player.toggleFullscreenSidebar(false);
          }
          player.hideFullscreenGuide();
        } else {
          player.toggleSidebar(false);
        }
        return;
      }
      if (action === 'Enter') {
        if (isFullscreen) {
          if (isFsSidebarOpen) {
            player.selectFocusedSidebarChannel();
            player.toggleFullscreenSidebar(false);
          } else if (typeof player.openTvOptionsMenu === 'function') {
            player.openTvOptionsMenu();
          }
        } else if (isSidebarVisible) {
          player.selectFocusedSidebarChannel();
        } else if (typeof player.openTvOptionsMenu === 'function') {
          player.openTvOptionsMenu();
        } else {
          player.togglePlayPause();
        }
        return;
      }
      if (action === 'Back') {
        if (isFullscreen) {
          if (isFsSidebarOpen && typeof player.toggleFullscreenSidebar === 'function') {
            player.toggleFullscreenSidebar(false);
            return;
          }
          player.exitFullscreenCrossBrowser();
        } else {
          player.closeTvPlayer();
        }
        return;
      }
    }

    // Navegación dentro del menú principal
    if (action === 'Back') {
      window.onTvBack();
      return;
    }

    if (action === 'Enter') {
      let current = document.activeElement;
      if (!current || current === document.body || !document.contains(current)) {
        current = document.querySelector('.is-tv-focused');
      }

      if (current && typeof current.click === 'function') {
        current.click();
      } else {
        const heroRadio = document.getElementById('heroCardRadio');
        if (heroRadio) {
          setFocus(heroRadio);
          heroRadio.click();
        }
      }
      return;
    }

    if (action === 'PlayPause') {
      const player = window.AntenaSurPlayer || (window.__antenaSurApp ? window.__antenaSurApp.player : null);
      if (player) {
        if (player.currentType === 'tv') {
          player.togglePlayPause();
        } else if (player.currentType === 'radio') {
          if (player.audioElement.paused) player.resumeRadio();
          else player.pauseRadio();
        }
      }
      return;
    }

    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(action)) {
      navigateSpatial(action);
    }
  };

  // Mantener foco visible al interactuar
  document.addEventListener('focusin', (e) => {
    if (e && e.target && e.target.classList && (e.target.classList.contains('hero-action-card') || e.target.classList.contains('station-card') || e.target.classList.contains('section-nav-tab'))) {
      document.querySelectorAll('.is-tv-focused').forEach(el => el.classList.remove('is-tv-focused'));
      e.target.classList.add('is-tv-focused');
    }
  });

  // Atajos de teclado para mandos USB dongle, mandos bluetooth y teclados estándar
  window.addEventListener('keydown', (e) => {
    if (!e) return;
    if (e.target && ['INPUT', 'TEXTAREA'].includes(e.target.tagName)) {
      if (e.key === 'Escape') e.target.blur();
      return;
    }

    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
      e.preventDefault();
      window.onTvNav(e.key);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      window.onTvNav('Enter');
    } else if (e.key === 'Escape') {
      e.preventDefault();
      window.onTvNav('Back');
    }
  });

  // Enfocar inicialmente el botón de TV
  setTimeout(() => {
    window.initTvFocus();
  }, 100);
}

// Auto-inicializar de inmediato al cargar el script
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTvNavigation);
} else {
  initTvNavigation();
}



  /* ========================================================================
     SOURCE MODULE: app.js
     ======================================================================== */

/**
 * ANTENA SUR - Main Application Controller
 * Coordinador de UI, eventos, renderizado de tarjetas, modales y atajos de teclado
 */






class App {
  constructor() {
    this.dataManager = new DataManager();
    this.favoritesManager = new FavoritesManager();
    this.player = null;
    this.filters = null;
    this.cinema = null;

    this.dom = {
      stationsGrid: document.getElementById('stationsGrid'),
      loadingState: document.getElementById('loadingState'),
      toastContainer: document.getElementById('toastContainer'),
      
      // Modal Añadir Señal
      addCustomModal: document.getElementById('addCustomModal'),
      openAddCustomBtn: document.getElementById('openAddCustomBtn'),
      closeAddCustomBtn: document.getElementById('closeAddCustomBtn'),
      customStationForm: document.getElementById('customStationForm'),

      // Modal Detalles de Señal
      stationInfoModal: document.getElementById('stationInfoModal'),
      closeInfoModalBtn: document.getElementById('closeInfoModalBtn'),
      infoModalTitle: document.getElementById('infoModalTitle'),
      infoModalBody: document.getElementById('infoModalBody'),
      infoModalPlayBtn: document.getElementById('infoModalPlayBtn')
    };

    this.selectedInfoStation = null;
    this.allFilteredStations = [];
    this.renderedStationCount = 0;
    this.isGridEventsInitialized = false;
  }

  async start() {
    const splashLoader = document.getElementById('appSplashLoader');
    const splashFill = document.getElementById('bmSplashBarFill');
    const splashPct = document.getElementById('bmSplashPct');

    let currentPct = 0;
    const updateSplash = (pct) => {
      currentPct = pct;
      if (splashFill) splashFill.style.width = `${pct}%`;
      if (splashPct) splashPct.textContent = `${pct}%`;
    };

    const animateProgressTo = (targetPct, durationMs) => {
      return new Promise(resolve => {
        const startVal = currentPct;
        const startTime = (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now();
        const step = () => {
          const now = (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now();
          const elapsed = now - startTime;
          const factor = Math.min(elapsed / durationMs, 1);
          // Curva suave cúbica
          const eased = factor < 0.5 ? 4 * factor * factor * factor : 1 - Math.pow(-2 * factor + 2, 3) / 2;
          const val = Math.round(startVal + (targetPct - startVal) * Math.min(Math.max(eased, 0), 1));
          updateSplash(val);
          if (factor < 1) {
            requestAnimationFrame(step);
          } else {
            resolve();
          }
        };
        requestAnimationFrame(step);
      });
    };

    updateSplash(0);

    // 1. Cargar catálogo de datos en memoria (síncrono)
    this.dataManager.load();

    // 2. Inicializar Player Engine y exponerlo globalmente
    this.player = new PlayerEngine(this.favoritesManager, (station, status) => {
      this.handlePlayerStateChange(station, status);
    });
    this.player.setStationsData(this.dataManager.getAllStations());
    window.AntenaSurPlayer = this.player;

    // 3. Inicializar Filters Engine con callback de renderizado
    this.filters = new FiltersEngine(this.dataManager, this.favoritesManager, (filteredStations) => {
      this.renderStations(filteredStations);
    });
    this.filters.init();

    // 3.1 Sincronización automática de canales chilenos con https://m3u.cl/lista/CL.m3u
    this._lastM3uSync = Date.now();
    this.dataManager.syncWithM3UCL((res) => {
      if (res && res.changedCount > 0) {
        this.player.setStationsData(this.dataManager.getAllStations());
        if (this.filters) {
          const updatedList = this.filters.getFilteredStations();
          this.renderStations(updatedList);
        }
        this.showToast(`📡 ${res.changedCount} canales chilenos actualizados desde m3u.cl`, 'info');
      }
    });

    // Re-comprobar cuando la app vuelve a estar visible si han pasado más de 5 minutos
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        const now = Date.now();
        if (now - this._lastM3uSync > 300000) {
          this._lastM3uSync = now;
          this.dataManager.syncWithM3UCL((res) => {
            if (res && res.changedCount > 0) {
              this.player.setStationsData(this.dataManager.getAllStations());
              if (this.filters) {
                this.renderStations(this.filters.getFilteredStations());
              }
              this.showToast(`📡 ${res.changedCount} canales chilenos actualizados desde m3u.cl`, 'info');
            }
          });
        }
      }
    });

    // 4. Ocultar estado de carga inicial legacy si existe
    if (this.dom.loadingState) {
      this.dom.loadingState.style.display = 'none';
    }

    // 4.1 Inicializar Motor de Cartelera Cinema & Series VOD
    this.cinema = new CinemaEngine((msg, type) => this.showToast(msg, type));
    this.cinema.init();
    window.AntenaSurCinema = this.cinema;

    // 5. Inicializar navegación e interactividad (ahora player y filters YA existen)
    this.initGridEvents();
    this.initMainSectionTabs();
    this.initKeyboardShortcuts();
    this.initCustomModalEvents();
    if (typeof initTvNavigation === 'function') {
      initTvNavigation();
    }

    // 6. Actualizar contadores dinámicos y badges de última sintonía
    const tvCount = this.dataManager.getAllStations().filter(s => s.type === 'tv').length;
    const radioCount = this.dataManager.getAllStations().filter(s => s.type === 'radio').length;
    const tvCounterEl = document.getElementById('tvCounter');
    const radioCounterEl = document.getElementById('radioCounter');
    if (tvCounterEl) tvCounterEl.textContent = tvCount || 321;
    if (radioCounterEl) radioCounterEl.textContent = radioCount || 23;
    this.updateHeroLastStationBadges();
    this.initDigitalClock();

    // 7. Renderizar grid inicial de tarjetas (si aplica)
    const initialList = this.filters.getFilteredStations();
    this.renderStations(initialList);

    // Secuencia de animación cinemática Blackmagic Camera OS (~2.2 segundos para apreciar la rueda y el progreso)
    // Tramo 1: Arranque y lectura de frecuencias (0% -> 38% en 600ms)
    await animateProgressTo(38, 600);

    // Tramo 2: Sintonización de señales y carátulas (38% -> 74% en 700ms)
    await animateProgressTo(74, 700);

    // Tramo 3: Montaje de guías de emisión en directo (74% -> 95% en 550ms)
    await animateProgressTo(95, 550);

    // Tramo 4: Sincronización final a 100% (95% -> 100% en 350ms)
    await animateProgressTo(100, 350);

    // Pausa deliberada en 100% para apreciar el estado completado
    await new Promise(r => setTimeout(r, 260));

    // Transición suave de salida para la pantalla de carga industrial Blackmagic
    if (splashLoader) {
      splashLoader.classList.add('is-loaded');
      setTimeout(() => {
        splashLoader.style.display = 'none';
      }, 420);
    }

    // 8. Enfocar inmediatamente el botón principal de Canales de TV
    if (typeof window.initTvFocus === 'function') {
      window.initTvFocus();
    }
  }

  updateHeroLastStationBadges() {
    try {
      const lastTvId = localStorage.getItem('antena_sur_last_tv_id');
      const heroTvLastStation = document.getElementById('heroTvLastStation');
      if (heroTvLastStation) {
        if (lastTvId) {
          const st = this.dataManager.getStationById(lastTvId);
          if (st) {
            heroTvLastStation.textContent = `Último canal visto: ${st.name} • Sintonizar en directo`;
          }
        } else {
          heroTvLastStation.textContent = '49 señales seleccionadas • Sintonización en directo';
        }
      }

      const lastRadioId = localStorage.getItem('antena_sur_last_radio_id');
      const heroRadioLastStation = document.getElementById('heroRadioLastStation');
      if (heroRadioLastStation) {
        if (lastRadioId) {
          const st = this.dataManager.getStationById(lastRadioId);
          if (st) {
            const freq = st.frequency ? `[${st.frequency}] ` : '';
            heroRadioLastStation.textContent = `Última radio escuchada: ${st.name} ${freq}• Reproducir`;
          }
        } else {
          heroRadioLastStation.textContent = '23 emisoras en vivo • Carátulas, frecuencias y sonido en directo';
        }
      }
    } catch (e) {
      console.warn('Error actualizando badges de inicio:', e);
    }
  }

  initDigitalClock() {
    const clockEl = document.getElementById('bmHeaderClock');
    if (!clockEl) return;
    const updateTime = () => {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, '0');
      const m = String(now.getMinutes()).padStart(2, '0');
      clockEl.textContent = `${h}:${m}`;
    };
    updateTime();
    setInterval(updateTime, 10000);
  }

  initMainSectionTabs() {
    const tabs = document.querySelectorAll('.section-nav-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const section = tab.getAttribute('data-section');
        this.filters.setType(section);
      });
    });

    // Gran Botón 1: Canales de TV -> Entrar directamente a Guía Zapping (recuerda último canal)
    const heroCardTv = document.getElementById('heroCardTv');
    if (heroCardTv) {
      heroCardTv.addEventListener('click', () => {
        const tvStations = this.dataManager.getAllStations().filter(s => s.type === 'tv');
        let targetStation = null;
        try {
          const lastTvId = localStorage.getItem('antena_sur_last_tv_id');
          if (lastTvId) {
            targetStation = tvStations.find(s => s.id === lastTvId);
          }
        } catch (e) {}
        if (!targetStation) {
          targetStation = tvStations.find(s => s.id === 'cl-tv-canal13') || tvStations.find(s => s.id === 'cl-tv-tvn') || tvStations[0];
        }
        if (targetStation) {
          this.player.playTv(targetStation);
        }
      });
    }

    // Gran Botón 2: Radios FM -> Reproductor de Pantalla Completa (recuerda última radio)
    const heroCardRadio = document.getElementById('heroCardRadio');
    if (heroCardRadio) {
      heroCardRadio.addEventListener('click', () => {
        if (this.player && this.player.audioElement) {
          try {
            this.player.audioElement.muted = false;
          } catch (e) {}
        }
        const radioStations = this.dataManager.getAllStations().filter(s => s.type === 'radio');
        let targetRadio = null;
        try {
          const lastRadioId = localStorage.getItem('antena_sur_last_radio_id');
          if (lastRadioId) {
            targetRadio = radioStations.find(s => s.id === lastRadioId);
          }
        } catch (e) {}
        if (!targetRadio) {
          targetRadio = radioStations.find(s => s.id === 'cl-rad-rockandpop') || radioStations[0];
        }
        if (targetRadio) {
          this.player.openFullscreenRadio(targetRadio);
        }
      });
    }

    // Gran Botón 3: Cine & Series -> Cartelera HD de Películas y Series con Torrents
    const heroCardCinema = document.getElementById('heroCardCinema');
    if (heroCardCinema) {
      heroCardCinema.addEventListener('click', () => {
        if (this.player) {
          if (this.player.isRadioFullscreen) {
            if (this.player.dom && this.player.dom.radioFullscreenView) {
              this.player.dom.radioFullscreenView.classList.add('is-hidden');
            }
            this.player.isRadioFullscreen = false;
          }
          if (typeof this.player.stopRadio === 'function') {
            this.player.stopRadio();
          }
          if (typeof this.player.closeTvPlayer === 'function' && this.player.currentType === 'tv') {
            this.player.closeTvPlayer();
          }
        }
        if (this.cinema) {
          this.cinema.open();
        }
      });
    }

    // Pestañas Superiores (opcionales si existen en el DOM)
    const bmNavTabHome = document.getElementById('bmNavTabHome');
    const bmNavTabTv = document.getElementById('bmNavTabTv');
    const bmNavTabRadio = document.getElementById('bmNavTabRadio');

    if (bmNavTabHome) {
      bmNavTabHome.addEventListener('click', () => {
        if (this.player) {
          this.player.closeTvPlayer();
          this.player.closeFullscreenRadio();
        }
        this.updateHeaderActiveTab('home');
      });
    }
    if (bmNavTabTv && heroCardTv) {
      bmNavTabTv.addEventListener('click', () => heroCardTv.click());
    }
    if (bmNavTabRadio && heroCardRadio) {
      bmNavTabRadio.addEventListener('click', () => heroCardRadio.click());
    }
  }

  /* ========================================================================
     RENDERIZADO PROGRESIVO DE TARJETAS Y DELEGACIÓN DE EVENTOS (60 FPS TV)
     ======================================================================== */

  initGridEvents() {
    if (!this.dom.stationsGrid || this.isGridEventsInitialized) return;
    this.isGridEventsInitialized = true;

    // Delegación centralizada de clics: un único listener para todo el catálogo
    this.dom.stationsGrid.addEventListener('click', (e) => {
      const card = e.target.closest('.station-card');
      if (!card) return;
      const id = card.getAttribute('data-id');
      const station = this.dataManager.getStationById(id);
      if (!station) return;

      const favBtn = e.target.closest('[data-action="toggle-fav"]');
      if (favBtn) {
        e.stopPropagation();
        const isFavNow = this.favoritesManager.toggleFavorite(station.id);
        this.filters.updateFavCounter();
        favBtn.classList.toggle('is-favorite', isFavNow);
        const svg = favBtn.querySelector('svg');
        if (svg) svg.setAttribute('fill', isFavNow ? '#f59e0b' : 'none');
        this.showToast(isFavNow ? `Añadido a favoritos: ${station.name}` : `Quitado de favoritos: ${station.name}`, 'info');
        if (this.filters.state.type === 'favorites') {
          this.filters.triggerChange();
        }
        return;
      }

      this.handleStationPlayToggle(station);
    });

    // Delegación de teclado (Enter sobre tarjeta)
    this.dom.stationsGrid.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.keyCode === 13) {
        const card = e.target.closest('.station-card');
        if (!card) return;
        const id = card.getAttribute('data-id');
        const station = this.dataManager.getStationById(id);
        if (station) {
          e.preventDefault();
          this.handleStationPlayToggle(station);
        }
      }
    });

    // Carga progresiva al desplazarse hacia el final de la pantalla
    window.addEventListener('scroll', () => {
      if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 600)) {
        this.loadMoreStations();
      }
    }, { passive: true });
  }

  renderStations(stations) {
    if (!this.dom.stationsGrid) return;

    this.allFilteredStations = stations || [];
    this.renderedStationCount = 0;
    this.dom.stationsGrid.innerHTML = '';

    if (!this.allFilteredStations || this.allFilteredStations.length === 0) {
      this.dom.stationsGrid.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">📡</div>
          <h3>No se encontraron señales</h3>
          <p>Prueba seleccionando otra categoría o cambiando el término de búsqueda.</p>
          <button class="btn-primary" id="emptyResetBtn" style="margin-top: 10px;">
            Restablecer Filtros
          </button>
        </div>
      `;
      const resetBtn = document.getElementById('emptyResetBtn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => this.filters.resetFilters());
      }
      return;
    }

    // Renderizar primer lote de señales (32 tarjetas para arranque inmediato a 60 FPS)
    this.loadMoreStations(32);
  }

  loadMoreStations(batchSize = 24) {
    if (!this.allFilteredStations || this.renderedStationCount >= this.allFilteredStations.length) return;

    const nextBatch = this.allFilteredStations.slice(this.renderedStationCount, this.renderedStationCount + batchSize);
    this.renderedStationCount += nextBatch.length;

    const currentPlayingId = this.player && this.player.currentStation ? this.player.currentStation.id : null;
    const isActuallyPlaying = this.player && this.player.isPlaying;

    let html = '';
    nextBatch.forEach(station => {
      const isFav = this.favoritesManager.isFavorite(station.id);
      const isThisPlaying = (station.id === currentPlayingId) && isActuallyPlaying;
      const isTv = station.type === 'tv';
      const typeBadgeClass = isTv ? 'badge-tv' : 'badge-radio';
      const typeLabel = isTv ? '📺 TV' : '📻 Radio';
      const flag = this.getCountryFlag(station.country);
      const placeholderIcon = isTv ? '📺' : '📻';

      html += `
        <div class="station-card type-${station.type} ${isThisPlaying ? 'is-playing is-active' : ''}" data-id="${station.id}" tabindex="0" role="button" aria-label="${station.name}">
          <div class="card-header">
            <div class="card-badges">
              <span class="badge-tag ${typeBadgeClass}">${typeLabel}</span>
              ${(station.sources && station.sources.length > 1) ? `<span class="badge-tag" style="background: rgba(0, 229, 255, 0.15); border: 1px solid rgba(0, 229, 255, 0.35); color: #00e5ff; font-weight: 700;">📡 ${station.sources.length} Fuentes</span>` : ''}
              <span class="live-indicator"><span class="live-dot"></span> EN VIVO</span>
              <span title="${station.countryName}">${flag}</span>
            </div>
            <button class="fav-btn ${isFav ? 'is-favorite' : ''}" data-action="toggle-fav" title="${isFav ? 'Quitar de favoritos' : 'Añadir a favoritos'}">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="${isFav ? '#f59e0b' : 'none'}" stroke="currentColor" stroke-width="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            </button>
          </div>

          <div class="card-body" data-action="open-info">
            <div class="station-logo-wrapper">
              ${station.logo ? `
                <img class="station-logo-img" src="${station.logo}" alt="${station.name}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                <span class="station-placeholder-icon" style="display:none;">${placeholderIcon}</span>
              ` : `
                <span class="station-placeholder-icon">${placeholderIcon}</span>
              `}
            </div>
            <div class="station-meta">
              <h4 class="station-name" title="${station.name}">${station.name}</h4>
              <div class="station-details">
                <span class="station-geo">📍 ${station.city || station.region}</span>
                ${station.frequency ? `<span class="station-freq">${station.frequency}</span>` : ''}
              </div>
            </div>
          </div>

          <div class="card-footer">
            <span class="genre-tag">${station.genre || 'General'}</span>
            <button class="play-station-btn" data-action="play">
              ${isThisPlaying ? `
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
                <span>Pausar</span>
              ` : `
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 4 19 12 6 20 6 4"/></svg>
                <span>Sintonizar</span>
              `}
            </button>
          </div>
        </div>
      `;
    });

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    while (tempDiv.firstChild) {
      this.dom.stationsGrid.appendChild(tempDiv.firstChild);
    }
  }

  handleStationPlayToggle(station) {
    if (station.type === 'tv') {
      this.player.playTv(station);
      this.showToast(`Sintonizando TV: ${station.name}`, 'info');
    } else {
      if (this.player.currentStation && this.player.currentStation.id === station.id && this.player.isPlaying) {
        this.player.pauseRadio();
      } else if (this.player.currentStation && this.player.currentStation.id === station.id && !this.player.isPlaying) {
        this.player.resumeRadio();
      } else {
        this.player.playRadio(station);
        this.showToast(`Sintonizando Radio: ${station.name}`, 'info');
      }
    }
  }

  handlePlayerStateChange(station, status) {
    // Actualizar estilos activos de las tarjetas
    const cards = document.querySelectorAll('.station-card');
    cards.forEach(card => {
      const id = card.getAttribute('data-id');
      const isThis = station && card.getAttribute('data-id') === station.id;
      const playBtn = card.querySelector('.play-station-btn');

      if (isThis && status === 'playing') {
        card.classList.add('is-playing', 'is-active');
        if (playBtn) {
          playBtn.innerHTML = `
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
            <span>Pausar</span>
          `;
        }
      } else {
        card.classList.remove('is-playing');
        if (!isThis) card.classList.remove('is-active');
        if (playBtn) {
          playBtn.innerHTML = `
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 4 19 12 6 20 6 4"/></svg>
            <span>Sintonizar</span>
          `;
        }
      }
    });
  }

  /* ========================================================================
     MODALES (Info de Estación y Agregar Canal)
     ======================================================================== */

  showStationInfoModal(station) {
    this.selectedInfoStation = station;
    if (!this.dom.stationInfoModal) return;

    if (this.dom.infoModalTitle) {
      this.dom.infoModalTitle.innerHTML = `
        ${this.getCountryFlag(station.country)} ${station.name}
      `;
    }

    if (this.dom.infoModalBody) {
      this.dom.infoModalBody.innerHTML = `
        <div style="display: flex; gap: 16px; align-items: center; margin-bottom: 14px;">
          ${station.logo ? `<img src="${station.logo}" style="width: 60px; height: 60px; object-fit: contain; background: rgba(255,255,255,0.05); border-radius: 8px; padding: 4px;" alt="Logo">` : ''}
          <div>
            <div style="font-weight: 700; font-size: 1.05rem;">${station.name}</div>
            <div style="color: var(--accent-cyan); font-size: 0.85rem;">
              ${station.type === 'tv' ? 'Canal de Televisión' : `Radio ${station.frequency || ''}`}
            </div>
            <div style="color: var(--text-muted); font-size: 0.8rem;">
              ${station.city}, ${station.region}, ${station.countryName}
            </div>
          </div>
        </div>

        <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 14px;">
          ${station.description || 'Señal de transmisión abierta y pública.'}
        </p>

        <div style="display: flex; flex-direction: column; gap: 8px; font-size: 0.82rem; background: rgba(0,0,0,0.25); padding: 12px; border-radius: 8px;">
          <div><strong>Género:</strong> ${station.genre || 'General'}</div>
          <div><strong>Ubicación Geográfica:</strong> ${station.city} (${station.region})</div>
          <div><strong>Tipo de Transmisión:</strong> ${station.type.toUpperCase()} Stream Público</div>
          ${station.website ? `<div><strong>Sitio Web Oficial:</strong> <a href="${station.website}" target="_blank" rel="noopener" style="color: var(--accent-cyan); text-decoration: none;">${station.website}</a></div>` : ''}
        </div>
      `;
    }

    if (this.dom.infoModalPlayBtn) {
      this.dom.infoModalPlayBtn.onclick = () => {
        this.closeInfoModal();
        this.handleStationPlayToggle(station);
      };
    }

    this.dom.stationInfoModal.classList.add('is-open');
  }

  closeInfoModal() {
    if (this.dom.stationInfoModal) {
      this.dom.stationInfoModal.classList.remove('is-open');
    }
  }

  initCustomModalEvents() {
    // Abrir modal añadir señal
    if (this.dom.openAddCustomBtn) {
      this.dom.openAddCustomBtn.addEventListener('click', () => {
        if (this.dom.addCustomModal) this.dom.addCustomModal.classList.add('is-open');
      });
    }

    // Cerrar modal añadir
    if (this.dom.closeAddCustomBtn) {
      this.dom.closeAddCustomBtn.addEventListener('click', () => {
        if (this.dom.addCustomModal) this.dom.addCustomModal.classList.remove('is-open');
      });
    }

    // Cerrar modal info
    if (this.dom.closeInfoModalBtn) {
      this.dom.closeInfoModalBtn.addEventListener('click', () => this.closeInfoModal());
    }

    // Cierre al hacer clic en backdrop
    window.addEventListener('click', (e) => {
      if (e.target === this.dom.addCustomModal) {
        this.dom.addCustomModal.classList.remove('is-open');
      }
      if (e.target === this.dom.stationInfoModal) {
        this.closeInfoModal();
      }
    });

    // Envío del formulario de nueva señal
    if (this.dom.customStationForm) {
      this.dom.customStationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('customName').value.trim();
        const type = document.getElementById('customType').value;
        const country = document.getElementById('customCountry').value;
        const region = document.getElementById('customRegion').value.trim() || 'Región Personalizada';
        const city = document.getElementById('customCity').value.trim() || 'Ciudad';
        const streamUrl = document.getElementById('customUrl').value.trim();
        const genre = document.getElementById('customGenre').value.trim() || 'General';

        if (!name || !streamUrl) {
          this.showToast('Por favor completa el nombre y el link de transmisión', 'warning');
          return;
        }

        const countryObj = this.dataManager.getCountries().find(c => c.code === country);

        const newStation = {
          id: `custom-${Date.now()}`,
          name,
          type,
          country,
          countryName: countryObj ? countryObj.name : 'Personalizado',
          region,
          city,
          genre,
          streamUrl,
          backupStreamUrl: streamUrl,
          description: 'Señal agregada por el usuario.',
          isCustom: true
        };

        this.dataManager.saveCustomStation(newStation);
        this.dom.addCustomModal.classList.remove('is-open');
        this.dom.customStationForm.reset();

        this.filters.init();
        this.filters.triggerChange();
        this.showToast(`¡Señal "${name}" agregada exitosamente!`, 'success');
      });
    }
  }

  /* ========================================================================
     ATAJOS DE TECLADO & NAVEGACIÓN ANDROID TV
     ======================================================================== */

  initKeyboardShortcuts() {
    window.addEventListener('keydown', (e) => {
      // Si el usuario está escribiendo en un input, ignorar atajos salvo Escape
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'TEXTAREA') {
        if (e.key === 'Escape') {
          e.target.blur();
        }
        return;
      }

      // Si el reproductor Zapping TV está abierto, delegar navegación a PlayerEngine (player.js)
      const isTvPlayerOpen = (this.player && this.player.dom && this.player.dom.tvZappingView && !this.player.dom.tvZappingView.classList.contains('is-hidden'));
      if (isTvPlayerOpen) {
        if (e.key === 'Escape') {
          this.player.closeTvPlayer();
        }
        return;
      }

      switch (e.key) {
        case ' ': // Barra espaciadora: Play/Pause
          e.preventDefault();
          if (this.player.currentType === 'tv' && this.player.dom.tvVideo) {
            if (this.player.dom.tvVideo.paused) this.player.dom.tvVideo.play();
            else this.player.dom.tvVideo.pause();
          } else if (this.player.currentType === 'radio') {
            if (this.player.isPlaying) this.player.pauseRadio();
            else this.player.resumeRadio();
          }
          break;

        case 'm':
        case 'M': // Silenciar / Activar sonido
          this.player.toggleMute();
          this.showToast(this.player.isMuted ? 'Silenciado 🔇' : 'Sonido activado 🔊', 'info');
          break;

        case 'f':
        case 'F': // Pantalla completa
          this.player.toggleFullscreen();
          break;

        case 'Escape': // Cerrar modales o reproductor TV
          this.closeInfoModal();
          if (this.dom.addCustomModal) this.dom.addCustomModal.classList.remove('is-open');
          break;

        case '/': // Enfocar buscador
          e.preventDefault();
          if (this.filters.dom.searchInput) {
            this.filters.dom.searchInput.focus();
          }
          break;
      }
    });
  }

  showToast(message, type = 'info') {
    if (!this.dom.toastContainer) return;
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    let icon = 'ℹ️';
    if (type === 'success') icon = '✅';
    if (type === 'warning') icon = '⚠️';
    if (type === 'error') icon = '❌';

    toast.innerHTML = `<span>${icon}</span><span>${message}</span>`;
    this.dom.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3800);
  }

  getCountryFlag(countryCode) {
    const c = this.dataManager.getCountries().find(item => item.code === countryCode);
    return c ? c.flag : '🌐';
  }

  updateHeaderActiveTab(mode = 'home') {
    const tabs = {
      home: document.getElementById('bmNavTabHome'),
      tv: document.getElementById('bmNavTabTv'),
      radio: document.getElementById('bmNavTabRadio')
    };
    Object.keys(tabs).forEach(k => {
      if (tabs[k]) {
        tabs[k].classList.toggle('active', k === mode);
      }
    });
  }
}

// Iniciar aplicación asegurando ejecución inmediata aunque DOMContentLoaded ya haya disparado
function bootstrapApp() {
  const app = new App();
  app.start();
  window.__antenaSurApp = app;
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrapApp);
} else {
  bootstrapApp();
}



})();
