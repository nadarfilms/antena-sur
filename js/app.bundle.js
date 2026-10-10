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
      "channelNumber": 13,
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
      "channelNumber": 21,
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
      "channelNumber": 22
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
      "channelNumber": 23
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
      "streamUrl": "https://redirector.rudo.video/hls-video/10b92cafdf3646cbc1e727f3dc76863621a327fd/c13/c13.smil/playlist.m3u8",
      "backupStreamUrl": "https://redirector.dps.live/hls/13cl/playlist.m3u8?PlaylistM3UCL",
      "website": "https://www.13.cl",
      "description": "Señal nacional abierta oficial de Canal 13 en alta definición (1080p).",
      "embedUrl": "https://www.13.cl/en-vivo",
      "needsProxy": false,
      "status": "online",
      "channelNumber": 30,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://redirector.rudo.video/hls-video/10b92cafdf3646cbc1e727f3dc76863621a327fd/c13/c13.smil/playlist.m3u8",
          "needsProxy": false
        },
        {
          "name": "Fuente 2 (Respaldo Oficial)",
          "url": "https://redirector.dps.live/hls/13cl/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": true
        },
        {
          "name": "Fuente 3 (M3U Alternativa)",
          "url": "http://15.204.246.24:8080/Canal13HD/index.m3u8",
          "needsProxy": true
        },
        {
          "name": "Fuente 4 (M3U Alternativa)",
          "url": "https://redirector.rudo.video/hls-video/ey6283je82983je9823je8jowowiekldk9838274/13popup/13popup.smil/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
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
      "channelNumber": 34
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
      "channelNumber": 50,
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
      "channelNumber": 51,
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
      "channelNumber": 52,
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
      "channelNumber": 59
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
      "channelNumber": 60,
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
      "channelNumber": 81
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
      "channelNumber": 82
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
      "channelNumber": 86
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
      "streamUrl": "https://live.getcirca.run/3969875408/ts:abr.m3u8",
      "backupStreamUrl": "https://live.getcirca.run/3969875408/ts:abr.m3u8?PlaylistM3UCL",
      "website": "https://www.lared.cl",
      "description": "Canal nacional de televisión abierta chileno con programación miscelánea e informativa.",
      "embedUrl": "https://www.lared.cl/senal-online",
      "channelNumber": 108,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://live.getcirca.run/3969875408/ts:abr.m3u8",
          "needsProxy": false
        },
        {
          "name": "Fuente 2 (M3U Alternativa)",
          "url": "https://live.getcirca.run/3969875408/ts:abr.m3u8?PlaylistM3UCL",
          "needsProxy": false
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
      "channelNumber": 109
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
      "channelNumber": 118,
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
      "channelNumber": 124,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://mdstrm.com/live-stream-playlist/5aaabe9e2c56420918184c6d.m3u8",
          "needsProxy": false
        },
        {
          "name": "Fuente 2 (Respaldo Oficial)",
          "url": "https://mdstrm.com/live-stream-playlist/5653641561b4eba30a7e4929.m3u8",
          "needsProxy": false
        },
        {
          "name": "Fuente 3 (M3U Alternativa)",
          "url": "https://mdstrm.com/live-stream-playlist/5aaabe9e2c56420918184c6d.m3u8?PlaylistM3UCL",
          "needsProxy": false
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
      "channelNumber": 131
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
      "channelNumber": 132,
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
      "channelNumber": 197
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
      "streamUrl": "https://tls-cl.cdnz.cl/retroplustvuno/live/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://tls-cl.cdnz.cl/retroplustvuno/live/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Retro Plus TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 215
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
      "streamUrl": "https://tls-cl.cdnz.cl/retroplustvdos/live/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://tls-cl.cdnz.cl/retroplustvdos/live/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Retro Plus TV Señal 2 disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 216
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
      "streamUrl": "https://tls-cl.cdnz.cl/retroplustvtres/live/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://tls-cl.cdnz.cl/retroplustvtres/live/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Retro Plus TV Señal 3 disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 217
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
      "channelNumber": 219
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
      "streamUrl": "https://trun.suyaitv.cl/memfs/1255a743-cd41-40a8-86c4-d264ee16ebf3.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://trun.suyaitv.cl/memfs/1255a743-cd41-40a8-86c4-d264ee16ebf3.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Suyai TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 245
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
      "channelNumber": 247,
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
      "channelNumber": 256
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
      "channelNumber": 265
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
          "name": "Fuente 1 (Principal)",
          "url": "https://redirector.dps.live/hls/turno/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": true
        }
      ],
      "website": "",
      "description": "Canal de televisión TurnoEnVivo disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 266
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
      "backupStreamUrl": "https://mdstrm.com/live-stream-playlist/689ba606ecfe7915e1f8f741.m3u8",
      "embedUrl": "https://www.tvn.cl/tvchile",
      "website": "https://www.tvn.cl/tvchile",
      "status": "online",
      "isHd": true,
      "featured": true,
      "channelNumber": 271,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://mdstrm.com/live-stream-playlist/533adcc949386ce765657d7c.m3u8",
          "needsProxy": false
        },
        {
          "name": "Fuente 2 (Respaldo Oficial)",
          "url": "https://mdstrm.com/live-stream-playlist/689ba606ecfe7915e1f8f741.m3u8",
          "needsProxy": false
        }
      ]
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
      "channelNumber": 283,
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
      "backupStreamUrl": "https://mdstrm.com/live-stream-playlist/689ba606ecfe7915e1f8f741.m3u8",
      "website": "https://www.tvn.cl/envivo",
      "description": "Señal abierta nacional en directo de Televisión Nacional de Chile en Full HD (1080p).",
      "embedUrl": "https://www.tvn.cl/envivo",
      "status": "online",
      "needsProxy": true,
      "channelNumber": 286,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "http://15.204.246.24:8080/TVNHD/index.m3u8",
          "needsProxy": true
        },
        {
          "name": "Fuente 2 (Respaldo Oficial)",
          "url": "https://mdstrm.com/live-stream-playlist/689ba606ecfe7915e1f8f741.m3u8",
          "needsProxy": false
        },
        {
          "name": "Fuente 3 (M3U Alternativa)",
          "url": "https://iptv2.intersurtv.cl/TVN/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
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
      "channelNumber": 287
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
      "channelNumber": 292,
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
      "channelNumber": 293
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
      "channelNumber": 306
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
      "channelNumber": 307
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
      "channelNumber": 317
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

    // Filtros internos de la guía Zapping
    this.currentZappingGenre = 'all';
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
      zappingCategoryChips: document.getElementById('zappingCategoryChips'),
      zappingChCount: document.getElementById('zappingChCount'),

      // Área Principal del Reproductor TV
      zappingPlayerArea: document.getElementById('zappingPlayerArea'),
      zappingVideoContainer: document.getElementById('zappingVideoContainer'),
      tvVideo: document.getElementById('tvVideo'),
      tvIframe: document.getElementById('tvIframe'),
      tvLoading: document.getElementById('tvLoading'),
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

    // Chips de categoría de TV (Sincronizados entre Sidebar y Guía Pantalla Completa)
    const chipContainers = [this.dom.zappingCategoryChips, document.getElementById('zappingFsCategoryChips')].filter(Boolean);
    chipContainers.forEach(container => {
      container.querySelectorAll('.zapping-chip').forEach(chip => {
        chip.addEventListener('click', (e) => {
          e.stopPropagation();
          const targetGenre = chip.getAttribute('data-genre') || 'all';
          this.currentZappingGenre = targetGenre;
          chipContainers.forEach(cGroup => {
            cGroup.querySelectorAll('.zapping-chip').forEach(c => {
              c.classList.toggle('active', (c.getAttribute('data-genre') || 'all') === targetGenre);
            });
          });
          this.renderTvGuide();
        });
      });
    });
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

    if (this.currentZappingGenre && this.currentZappingGenre !== 'all') {
      const g = this.currentZappingGenre.toLowerCase();
      filtered = filtered.filter(s => {
        const genre = (s.genre || '').toLowerCase();
        if (g === 'general' && (genre.includes('general') || genre.includes('nacional'))) return true;
        if (g === 'noticias' && genre.includes('noticia')) return true;
        if (g === 'regional' && (s.region !== 'Región Metropolitana' || genre.includes('regional'))) return true;
        if (g === 'cultura' && (genre.includes('cultura') || genre.includes('educacion') || genre.includes('arte'))) return true;
        if ((g === 'musica' || g === 'música') && (genre.includes('music') || genre.includes('músic') || genre.includes('musical'))) return true;
        return genre.includes(g);
      });
    }

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
      sidebarHtml += `
        <button class="zapping-ch-item ${isPlaying ? 'is-playing is-active is-dpad-focused' : ''}" data-id="${station.id}" data-index="${idx}" tabindex="0">
          <span class="zapping-ch-num">${chNum}</span>
          <img class="zapping-ch-logo" src="${station.logo || './img/logos/cl-tv-tvn.svg'}" alt="${station.name}" loading="lazy" onerror="this.src='./img/logos/cl-tv-tvn.svg'">
          <div class="zapping-ch-text">
            <span class="zapping-ch-title">${station.name} ${sourcesPill}</span>
            <span class="zapping-ch-sub">${station.city || 'Chile'} • ${station.genre || 'General'}</span>
          </div>
          <span class="zapping-live-pill"><span class="pulse-dot"></span> EN VIVO</span>
        </button>
      `;
    });

    this.dom.zappingChannelList.innerHTML = sidebarHtml || `<div style="padding: 20px; color: var(--text-muted); font-size: 0.85rem; text-align: center;">No hay canales en este filtro</div>`;

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
      html += `
        <button class="tv-opt-btn ${isActive ? 'is-active' : ''}" data-type="source" data-index="${idx}">
          <span>📡 ${label}</span>
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

  zapPrevious() {
    if (!this.tvStations || this.tvStations.length === 0) return;
    const curId = this.currentStation ? this.currentStation.id : null;
    let idx = this.tvStations.findIndex(s => s.id === curId);
    if (idx === -1) idx = 0;
    idx = (idx - 1 + this.tvStations.length) % this.tvStations.length;
    this.playTv(this.tvStations[idx]);
  }

  zapNext() {
    if (!this.tvStations || this.tvStations.length === 0) return;
    const curId = this.currentStation ? this.currentStation.id : null;
    let idx = this.tvStations.findIndex(s => s.id === curId);
    if (idx === -1) idx = 0;
    idx = (idx + 1) % this.tvStations.length;
    this.playTv(this.tvStations[idx]);
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

  switchToWebPlayer() {
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
    if (this.dom.tvSourceWrapper) {
      this.dom.tvSourceWrapper.style.display = 'none';
    }

    const targetUrl = this.currentStation.embedUrl || this.currentStation.website || this.currentStation.streamUrl;
    if (this.dom.tvIframe) {
      this.dom.tvIframe.src = targetUrl;
      this.dom.tvIframe.classList.remove('is-hidden');
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
        this.playTv(this.currentStation, this.isUsingProxy);
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
    if (this.dom.tvStationLogo) {
      this.dom.tvStationLogo.src = station.logo || './img/logos/cl-tv-tvn.svg';
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
          { src: station.logo || './img/logos/cl-tv-tvn.svg', sizes: '96x96', type: 'image/svg+xml' },
          { src: station.logo || './img/logos/cl-tv-tvn.svg', sizes: '128x128', type: 'image/svg+xml' },
          { src: station.logo || './img/logos/cl-tv-tvn.svg', sizes: '256x256', type: 'image/svg+xml' },
          { src: station.logo || './img/logos/cl-tv-tvn.svg', sizes: '512x512', type: 'image/svg+xml' }
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

    const needsAutoProxy = forceProxy || source.needsProxy ||
      (targetUrl && (
        targetUrl.includes('dpsgo.com') ||
        targetUrl.includes('bitred.cl') ||
        targetUrl.includes('dps.live') ||
        targetUrl.includes('tlink.cl') ||
        targetUrl.includes('15.204.246.24') ||
        targetUrl.includes('15.204.')
      )) ||
      station.id === 'cl-tv-canal13' ||
      station.id === 'cl-tv-tvn';

    this.isUsingProxy = needsAutoProxy;
    let streamUrl = targetUrl;

    if (needsAutoProxy) {
      const refParam = encodeURIComponent(station.website || (station.id === 'cl-tv-canal13' ? 'https://www.13.cl/' : ''));
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
        } else if (station.embedUrl) {
          this.switchToWebPlayer();
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
                if (station.embedUrl) {
                  console.log('Conmutando a reproductor web oficial...');
                  this.switchToWebPlayer();
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
                if (station.embedUrl) {
                  this.switchToWebPlayer();
                } else {
                  this.showTvFallback('Error desconocido al reproducir la fuente seleccionada.');
                }
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
      if (station.embedUrl) {
        this.switchToWebPlayer();
      } else {
        this.showTvFallback('Tu navegador no es compatible con transmisiones HLS.');
      }
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

    this.fsControlsTimer = setTimeout(() => {
      this.hideFsControls();
    }, 5000);
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

      // Caso B: Flecha Izquierda (ArrowLeft)
      // "al apretar el boton izquierdo debe aparecer el menu lateral con el listado de canales, y me debe dejar navegar en el, manteniendo el video o señal en pantalla completa."
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

      // Caso F: Botón Central (Enter / OK)
      // "al estar en pantalla completa en canales de tv, al apretar el boton del lado izquierdo y el boton del centro o ok, tiene que aparecer el menu de la lista de canales en el lado izquerdo de la pantalla, sin salir del modo pantalla completa, y sin achicar la señal de video. teniendo la capacidad de navegar los canales, con un click puedo cambiar de canal y desaparecera ese menu de canales al lado izquierdo, se vera solo la señal de video q aprete"
      if (action === 'Enter') {
        if (isFullscreen) {
          if (isFsSidebarOpen) {
            this.selectFocusedSidebarChannel();
            this.toggleFullscreenSidebar(false);
          } else {
            this.toggleFullscreenSidebar(true);
            this.focusCurrentSidebarItem();
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

      // 3. Filtro Búsqueda por Texto (Nombre, género o frecuencia)
      if (this.state.search) {
        const q = this.state.search;
        const nameMatch = (station.name || '').toLowerCase().includes(q);
        const freqMatch = (station.frequency || '').toLowerCase().includes(q);
        const genreMatch = (station.genre || '').toLowerCase().includes(q);

        if (!nameMatch && !freqMatch && !genreMatch) {
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
     SOURCE MODULE: tv-navigation.js
     ======================================================================== */

/**
 * ANTENA SUR - TV Navigation Engine
 * Navegación espacial determinista 2D de alta precisión para Android TV, Google TV y Smart TVs
 * Compatible con controles remotos USB Wireless con dongle 2.4GHz, mandos IR y teclados físicos
 */
function initTvNavigation() {
  function getFocusableElements() {
    const selectors = [
      '#heroCardTv',
      '#heroCardRadio',
      '.section-nav-tab',
      '.station-card'
    ];
    return Array.from(document.querySelectorAll(selectors.join(',')))
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

  function navigateSpatial(direction) {
    let current = document.activeElement;
    if (!current || current === document.body || !document.contains(current)) {
      current = currentTvFocused || document.querySelector('.is-tv-focused');
    }

    const heroTv = document.getElementById('heroCardTv');
    const heroRadio = document.getElementById('heroCardRadio');

    if (!current) {
      setFocus(heroTv || heroRadio);
      return;
    }

    // ========================================================================
    // NAVEGACIÓN DETERMINISTA EN LOS 2 GRANDES BOTONES PRINCIPALES (HERO)
    // ========================================================================
    if (current === heroTv || current.id === 'heroCardTv') {
      if (direction === 'ArrowRight' || direction === 'ArrowDown') {
        setFocus(heroRadio);
        return;
      }
      return;
    }
    if (current === heroRadio || current.id === 'heroCardRadio') {
      if (direction === 'ArrowLeft' || direction === 'ArrowUp') {
        setFocus(heroTv);
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
    const heroTv = document.getElementById('heroCardTv');
    setFocus(heroTv);
  };

  window.onTvBack = function() {
    const player = window.AntenaSurPlayer || (window.__antenaSurApp ? window.__antenaSurApp.player : null);
    const isTvPlayerOpen = (player && player.dom && player.dom.tvZappingView && !player.dom.tvZappingView.classList.contains('is-hidden'));
    if (isTvPlayerOpen) {
      window.onTvNav('Back');
      return true;
    }

    const isRadioFsOpen = (player && (player.isRadioFullscreen || (player.dom && player.dom.radioFullscreenView && !player.dom.radioFullscreenView.classList.contains('is-hidden'))));
    if (isRadioFsOpen) {
      player.closeFullscreenRadio();
      return true;
    }

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

    const heroTv = document.getElementById('heroCardTv');
    if (document.activeElement && document.activeElement !== heroTv && heroTv) {
      setFocus(heroTv);
      return true;
    }

    return false;
  };

  window.onTvNav = function(action) {
    const player = window.AntenaSurPlayer || (window.__antenaSurApp ? window.__antenaSurApp.player : null);
    const isTvPlayerOpen = (player && player.dom && player.dom.tvZappingView && !player.dom.tvZappingView.classList.contains('is-hidden'));

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
          } else if (typeof player.toggleFullscreenSidebar === 'function') {
            player.toggleFullscreenSidebar(true);
            player.focusCurrentSidebarItem();
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
        const heroTv = document.getElementById('heroCardTv');
        if (heroTv) {
          setFocus(heroTv);
          heroTv.click();
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

    // 4. Ocultar estado de carga inicial legacy si existe
    if (this.dom.loadingState) {
      this.dom.loadingState.style.display = 'none';
    }

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
