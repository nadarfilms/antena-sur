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
      "id": "cl-tv-abajo-e-la-linea-tv",
      "name": "Abajo e la linea TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1690_Abajo_e_la_linea_TV.png",
      "streamUrl": "https://5ff3d9babae13.streamlock.net/ynfpncxxjg/ynfpncxxjg/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://5ff3d9babae13.streamlock.net/ynfpncxxjg/ynfpncxxjg/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Abajo e la linea TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 11
    },
    {
      "id": "cl-tv-ada-tv",
      "name": "ADA TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1638_ADA_TV.png",
      "streamUrl": "https://v4.tustreaming.cl/adatvchile/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://v4.tustreaming.cl/adatvchile/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión ADA TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 12
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
      "id": "cl-tv-ae-radio",
      "name": "AE Radio",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/414_AE_Radio.png",
      "streamUrl": "https://tls-cl.cdnz.cl/aeradio/live/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://tls-cl.cdnz.cl/aeradio/live/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión AE Radio disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 14
    },
    {
      "id": "cl-tv-alerce-tv",
      "name": "Alerce TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1396_Alerce_TV.png",
      "streamUrl": "https://s1.tvdatta.com:3384/live/canal20tvlive.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://s1.tvdatta.com:3384/live/canal20tvlive.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Alerce TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 15
    },
    {
      "id": "cl-tv-am-rica-tv",
      "name": "América TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/327_America_TV_Chile.png",
      "streamUrl": "https://v2.tustreaming.cl:/radioamericatv/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://v2.tustreaming.cl:/radioamericatv/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión América TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 16
    },
    {
      "id": "cl-tv-antofagastatv",
      "name": "Antofagasta TV (ATV)",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Región de Antofagasta",
      "city": "Antofagasta",
      "genre": "Regional",
      "isNational": false,
      "logo": "./img/logos/cl-tv-antofagastatv.svg",
      "streamUrl": "https://unlimited6-cl.dps.live/atv/atv.smil/playlist.m3u8",
      "backupStreamUrl": "https://v2.tustreaming.cl/fmplus/index.m3u8",
      "website": "https://www.antofagasta.tv",
      "description": "Canal de noticias, deportes y cultura de la Perla del Norte.",
      "embedUrl": "https://antofagasta.tv",
      "channelNumber": 17,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://unlimited6-cl.dps.live/atv/atv.smil/playlist.m3u8",
          "needsProxy": true
        },
        {
          "name": "Fuente 2 (Respaldo Oficial)",
          "url": "https://v2.tustreaming.cl/fmplus/index.m3u8",
          "needsProxy": false
        },
        {
          "name": "Fuente 3 (M3U Alternativa)",
          "url": "https://unlimited1-cl-isp.dps.live/atv/atv.smil/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": true
        }
      ]
    },
    {
      "id": "cl-tv-atacama-tv",
      "name": "Atacama TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/320_Atacama_TV.png",
      "streamUrl": "https://v2.tustreaming.cl/atacamatv/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://v2.tustreaming.cl/atacamatv/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Atacama TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 18
    },
    {
      "id": "cl-tv-autonoma-tv",
      "name": "Autonoma TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1120_Autonoma_TV.png",
      "streamUrl": "https://wifispeed.trapemn.tv:1936/comunales/autonoma-tv/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://wifispeed.trapemn.tv:1936/comunales/autonoma-tv/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Autonoma TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 19
    },
    {
      "id": "cl-tv-aysen-tv",
      "name": "Aysen TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1012_Aysen_TV.png",
      "streamUrl": "https://v1.tustreaming.cl/aysentv/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://v1.tustreaming.cl/aysentv/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Aysen TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 20
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
      "id": "cl-tv-cadena-rtv",
      "name": "Cadena-RTV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1717_Cadena_RTV.png",
      "streamUrl": "https://stmv4.voxtvhd.com.br/cadenartv/cadenartv/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://stmv4.voxtvhd.com.br/cadenartv/cadenartv/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Cadena-RTV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 24
    },
    {
      "id": "cl-tv-calbuconet",
      "name": "CalbucoNet",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1645_CalbucoNet.png",
      "streamUrl": "https://videostream.chileservidores.com:8081/chiloe5/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://videostream.chileservidores.com:8081/chiloe5/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión CalbucoNet disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 25
    },
    {
      "id": "cl-tv-camara-de-diputados",
      "name": "Camara de Diputados",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/445_Camara_de_Diputados.png",
      "streamUrl": "https://tls-cl.cdnz.cl/streamdiptudadosa/live/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://tls-cl.cdnz.cl/streamdiptudadosa/live/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Camara de Diputados disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 26
    },
    {
      "id": "cl-tv-campo-abierto-tv",
      "name": "Campo Abierto TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/437_Campo_Abierto_TV.png",
      "streamUrl": "https://v2.tustreaming.cl:443/catvlive/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://v2.tustreaming.cl:443/catvlive/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Campo Abierto TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 27
    },
    {
      "id": "cl-tv-canal-1",
      "name": "Canal 1",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/348_Canal_1.png",
      "streamUrl": "https://tls-cl.cdnz.cl/canal21tv/live/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://tls-cl.cdnz.cl/canal21tv/live/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Canal 1 disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 28
    },
    {
      "id": "cl-tv-canal-11-tv-aysen",
      "name": "Canal 11 TV Aysen",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/369_Canal_11_TV_Aysen.png",
      "streamUrl": "https://v2.tustreaming.cl/canal11aysen/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://v2.tustreaming.cl/canal11aysen/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Canal 11 TV Aysen disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 29
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
      "id": "cl-tv-canal-2-de-san-antonio",
      "name": "Canal 2 de San Antonio",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/76_Canal_2_de_San_Antonio.png",
      "streamUrl": "https://unlimited1-cl-isp.dps.live/canal2/canal2.smil/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://unlimited1-cl-isp.dps.live/canal2/canal2.smil/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": true
        }
      ],
      "website": "",
      "description": "Canal de televisión Canal 2 de San Antonio disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 31
    },
    {
      "id": "cl-tv-canal-2-quellon",
      "name": "Canal 2 Quellon",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/86_Canal_2_Quellon.png",
      "streamUrl": "https://unlimited1-cl-isp.dps.live/tvquellon/tvquellon.smil/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://unlimited1-cl-isp.dps.live/tvquellon/tvquellon.smil/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": true
        }
      ],
      "website": "",
      "description": "Canal de televisión Canal 2 Quellon disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 32
    },
    {
      "id": "cl-tv-canal-30-loncomilla",
      "name": "Canal 30 Loncomilla",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1431_Canal_30_Loncomilla.png",
      "streamUrl": "https://v1.tustreaming.cl:443/canal30loncomilla/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://v1.tustreaming.cl:443/canal30loncomilla/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Canal 30 Loncomilla disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 33
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
      "id": "cl-tv-c9biobio",
      "name": "Canal 9 Bío-Bío Televisión",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Región del Biobío",
      "city": "Concepción",
      "genre": "Regional",
      "isNational": false,
      "logo": "./img/logos/cl-tv-c9biobio.svg",
      "streamUrl": "https://unlimited6-cl.dps.live/c9/c9.smil/playlist.m3u8",
      "backupStreamUrl": "https://unlimited1-cl-isp.dps.live/tvu/tvu.smil/playlist.m3u8",
      "website": "https://www.canal9.cl",
      "description": "Canal líder de televisión del Gran Concepción y sur de Chile, fundado en 1991.",
      "embedUrl": "https://www.canal9.cl",
      "channelNumber": 35,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://unlimited6-cl.dps.live/c9/c9.smil/playlist.m3u8",
          "needsProxy": true
        },
        {
          "name": "Fuente 2 (Respaldo Oficial)",
          "url": "https://unlimited1-cl-isp.dps.live/tvu/tvu.smil/playlist.m3u8",
          "needsProxy": true
        },
        {
          "name": "Fuente 3 (M3U Alternativa)",
          "url": "https://unlimited1-cl-isp.dps.live/c9/c9.smil/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": true
        }
      ]
    },
    {
      "id": "cl-tv-canal-del-sur",
      "name": "Canal Del Sur",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1753_Canal_Del_Sur.png",
      "streamUrl": "https://oracle.streaminghd.cl/canal-del-sur/canal-del-sur/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://oracle.streaminghd.cl/canal-del-sur/canal-del-sur/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Canal Del Sur disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 36
    },
    {
      "id": "cl-tv-canal-isb",
      "name": "Canal ISB",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/159_Canal_ISB.png",
      "streamUrl": "https://unlimited1-cl-isp.dps.live/isb/isb.smil/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://unlimited1-cl-isp.dps.live/isb/isb.smil/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": true
        }
      ],
      "website": "",
      "description": "Canal de televisión Canal ISB disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 37
    },
    {
      "id": "cl-tv-canal-latino-54",
      "name": "Canal Latino 54",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/359_Canal_Latino_54.png",
      "streamUrl": "https://videostream.chileservidores.com:8081/latina/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://videostream.chileservidores.com:8081/latina/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Canal Latino 54 disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 38
    },
    {
      "id": "cl-tv-canal-local",
      "name": "Canal Local",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1231_Canal_Local.png",
      "streamUrl": "https://v2.tustreaming.cl/canallocalcl/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://v2.tustreaming.cl/canallocalcl/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Canal Local disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 39
    },
    {
      "id": "cl-tv-caracola-tv",
      "name": "Caracola TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1020_Caracola_TV.png",
      "streamUrl": "https://wifispeed.trapemn.tv:1936/comunales/caracola-tv/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://wifispeed.trapemn.tv:1936/comunales/caracola-tv/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Caracola TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 40
    },
    {
      "id": "cl-tv-carolina-tv",
      "name": "Carolina TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/27_Carolina_TV.png",
      "streamUrl": "https://mdstrm.com/live-stream-playlist/63a06468117f42713374addd.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://mdstrm.com/live-stream-playlist/63a06468117f42713374addd.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Carolina TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 41
    },
    {
      "id": "cl-tv-cdtv",
      "name": "CDTV (Cámara de Diputadas y Diputados)",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Región de Valparaíso",
      "city": "Valparaíso",
      "genre": "Política",
      "isNational": true,
      "logo": "./img/logos/cl-tv-cdtv.svg",
      "streamUrl": "https://tls-cl.cdnz.cl/streamdiptudadosa/live/playlist.m3u8",
      "backupStreamUrl": "https://janus-tv-ply.senado.cl/playlist/playlist.m3u8",
      "website": "https://www.cdtv.cl",
      "description": "Transmisiones en vivo de las sesiones y debates del Congreso Nacional de Chile.",
      "embedUrl": "https://www.cdtv.cl",
      "channelNumber": 42,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://tls-cl.cdnz.cl/streamdiptudadosa/live/playlist.m3u8",
          "needsProxy": false
        },
        {
          "name": "Fuente 2 (Respaldo Oficial)",
          "url": "https://janus-tv-ply.senado.cl/playlist/playlist.m3u8",
          "needsProxy": false
        }
      ]
    },
    {
      "id": "cl-tv-centaury-radio-hd",
      "name": "Centaury Radio HD",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1791_Centaury_Radio_HD.png",
      "streamUrl": "https://ccp.centaurychile.com/centaury/stream.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://ccp.centaurychile.com/centaury/stream.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Centaury Radio HD disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 43
    },
    {
      "id": "cl-tv-central-tv",
      "name": "Central TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1706_Central_TV.png",
      "streamUrl": "https://freya.mivideo.pro/centraltv/video.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://freya.mivideo.pro/centraltv/video.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Central TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 44
    },
    {
      "id": "cl-tv-chile-channel",
      "name": "Chile Channel",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/435_Chile_Channel.png",
      "streamUrl": "https://v2.tustreaming.cl/chilechannel/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://v2.tustreaming.cl/chilechannel/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Chile Channel disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 45
    },
    {
      "id": "cl-tv-chile-informa",
      "name": "Chile Informa",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1674_Chile_Informa.png",
      "streamUrl": "http://45.225.95.154:8081/mcg/chileinforma/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "http://45.225.95.154:8081/mcg/chileinforma/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Chile Informa disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 46
    },
    {
      "id": "cl-tv-chiloe-red-25",
      "name": "Chiloe Red 25",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/366_Chiloe_Red_25.png",
      "streamUrl": "https://v2.tustreaming.cl/chiloered/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://v2.tustreaming.cl/chiloered/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Chiloe Red 25 disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 47
    },
    {
      "id": "cl-tv-china-channel",
      "name": "China Channel",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1769_China_Channel.png",
      "streamUrl": "https://v2.tustreaming.cl/chinachannel/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://v2.tustreaming.cl/chinachannel/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión China Channel disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 48
    },
    {
      "id": "cl-tv-chocolatefm",
      "name": "ChocolateFM",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/382_ChocolateFM.png",
      "streamUrl": "https://5eaccbab48461.streamlock.net:1936/8180/8180/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://5eaccbab48461.streamlock.net:1936/8180/8180/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión ChocolateFM disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 49
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
      "id": "cl-tv-ciudadano-radio",
      "name": "Ciudadano Radio",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1655_Ciudadano_Radio.png",
      "streamUrl": "https://oracle.streaminghd.cl:443/ciudadanoradiotv/ciudadanoradiotv/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://oracle.streaminghd.cl:443/ciudadanoradiotv/ciudadanoradiotv/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Ciudadano Radio disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 53
    },
    {
      "id": "cl-tv-clickradio-cl",
      "name": "ClickRadio.cl",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1332_ClickRadio_cl.png",
      "streamUrl": "https://live20.bozztv.com/akamaissh101/ssh101/clickradiolive/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://live20.bozztv.com/akamaissh101/ssh101/clickradiolive/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión ClickRadio.cl disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 54
    },
    {
      "id": "cl-tv-clicktv",
      "name": "ClickTv",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/350_ClickTv.png",
      "streamUrl": "https://v2.tustreaming.cl/clicktv/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://v2.tustreaming.cl/clicktv/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión ClickTv disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 55
    },
    {
      "id": "cl-tv-club-tv",
      "name": "Club TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/810_Club_TV.png",
      "streamUrl": "https://tv.arkeo.cl:1936/clubtv/clubtv/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://tv.arkeo.cl:1936/clubtv/clubtv/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Club TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 56
    },
    {
      "id": "cl-tv-concepcion-tv",
      "name": "Concepcion TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/352_Concepcion_TV.png",
      "streamUrl": "https://stream.blserver.cl/hls/ctv/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://stream.blserver.cl/hls/ctv/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Concepcion TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 57
    },
    {
      "id": "cl-tv-contivision",
      "name": "Contivisión",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Región del Maule",
      "city": "Constitución",
      "genre": "Regional",
      "isNational": false,
      "logo": "./img/logos/cl-tv-contivision.svg",
      "streamUrl": "https://unlimited6-cl.dps.live/cm/cm.smil/playlist.m3u8",
      "backupStreamUrl": "https://pantera1-100gb-cl-movistar.dps.live/campustv/campustv.smil/playlist.m3u8",
      "website": "https://www.contivision.cl",
      "description": "Canal regional maulino de Constitución, Talca y zona costera.",
      "embedUrl": "https://contivision.cl",
      "channelNumber": 58,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://unlimited6-cl.dps.live/cm/cm.smil/playlist.m3u8",
          "needsProxy": true
        },
        {
          "name": "Fuente 2 (Respaldo Oficial)",
          "url": "https://pantera1-100gb-cl-movistar.dps.live/campustv/campustv.smil/playlist.m3u8",
          "needsProxy": true
        },
        {
          "name": "Fuente 3 (M3U Alternativa)",
          "url": "https://unlimited2-cl-isp.dps.live/cm/cm.smil/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": true
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
      "id": "cl-tv-corcubio-tv",
      "name": "Corcubio TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1515_Corcubio_TV.png",
      "streamUrl": "http://45.225.95.154:8081/mcg/corcubio/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "http://45.225.95.154:8081/mcg/corcubio/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Corcubio TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 61
    },
    {
      "id": "cl-tv-coyhaique-tv",
      "name": "Coyhaique TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1768_Coyhaique_TV.png",
      "streamUrl": "https://v2.tustreaming.cl/coyhaiquetv/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://v2.tustreaming.cl/coyhaiquetv/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Coyhaique TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 62
    },
    {
      "id": "cl-tv-cradio-cl",
      "name": "CRadio.cl",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1013_CRadio_cl.png",
      "streamUrl": "https://tls-cl.cdnz.cl/cradio/live/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://tls-cl.cdnz.cl/cradio/live/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión CRadio.cl disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 63
    },
    {
      "id": "cl-tv-crtv",
      "name": "CRTV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1098_CRTV.png",
      "streamUrl": "https://stmv2.voxtvhd.com.br/crtvchile/crtvchile/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://stmv2.voxtvhd.com.br/crtvchile/crtvchile/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión CRTV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 64
    },
    {
      "id": "cl-tv-ctv35",
      "name": "CTV35",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1608_CTV35.png",
      "streamUrl": "https://paneltv.stream:19360/ctv35/ctv35.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://paneltv.stream:19360/ctv35/ctv35.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión CTV35 disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 65
    },
    {
      "id": "cl-tv-dance-fm",
      "name": "Dance FM",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1166_Dance_FM.png",
      "streamUrl": "https://5eaccbab48461.streamlock.net:1936/dancefm_1/dancefm_1/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://5eaccbab48461.streamlock.net:1936/dancefm_1/dancefm_1/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Dance FM disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 66
    },
    {
      "id": "cl-tv-decimatv",
      "name": "Décima TV Chiloé",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Región de Los Lagos",
      "city": "Castro",
      "genre": "Regional",
      "isNational": false,
      "logo": "./img/logos/cl-tv-decimatv.svg",
      "streamUrl": "https://unlimited2-cl-isp.dps.live/decimatv/decimatv.smil/playlist.m3u8",
      "backupStreamUrl": "https://unlimited1-cl-isp.dps.live/tvquellon/tvquellon.smil/playlist.m3u8",
      "website": "https://www.decimatv.cl",
      "description": "Señal televisiva desde la Isla Grande de Chiloé para todo el archipiélago.",
      "embedUrl": "https://decimatv.cl",
      "channelNumber": 67,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://unlimited2-cl-isp.dps.live/decimatv/decimatv.smil/playlist.m3u8",
          "needsProxy": true
        },
        {
          "name": "Fuente 2 (Respaldo Oficial)",
          "url": "https://unlimited1-cl-isp.dps.live/tvquellon/tvquellon.smil/playlist.m3u8",
          "needsProxy": true
        },
        {
          "name": "Fuente 3 (M3U Alternativa)",
          "url": "https://unlimited2-cl-isp.dps.live/decimatv/decimatv.smil/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": true
        }
      ]
    },
    {
      "id": "cl-tv-docevision",
      "name": "Docevision",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1759_Docevision.png",
      "streamUrl": "https://live20.bozztv.com/giatvplayout7/giatv-208729/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://live20.bozztv.com/giatvplayout7/giatv-208729/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Docevision disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 68
    },
    {
      "id": "cl-tv-dodo-tv",
      "name": "Dodo TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1622_Dodo_TV.png",
      "streamUrl": "https://cloud5.streaminglivehd.com:3651/hybrid/play.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://cloud5.streaminglivehd.com:3651/hybrid/play.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Dodo TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 69
    },
    {
      "id": "cl-tv-egm-tv",
      "name": "EGM TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1022_EGM_TV.png",
      "streamUrl": "https://vdochile.com:3922/live/egm20live.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://vdochile.com:3922/live/egm20live.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión EGM TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 70
    },
    {
      "id": "cl-tv-el-3-de-conce",
      "name": "El 3 de Conce",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/65_El_3_de_Conce.png",
      "streamUrl": "https://5ff3d9babae13.streamlock.net:443/xedkektnqj/xedkektnqj/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://5ff3d9babae13.streamlock.net:443/xedkektnqj/xedkektnqj/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión El 3 de Conce disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 71
    },
    {
      "id": "cl-tv-el-canal-feliz",
      "name": "El Canal Feliz",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1687_El_Canal_Feliz.png",
      "streamUrl": "http://streaming.multicontenidos.cl:8081/live/canalfeliz/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "http://streaming.multicontenidos.cl:8081/live/canalfeliz/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión El Canal Feliz disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 72
    },
    {
      "id": "cl-tv-el-centro-tv",
      "name": "El Centro TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1432_El_Centro_TV.png",
      "streamUrl": "https://v1.tustreaming.cl:443/diarioelcentrotv/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://v1.tustreaming.cl:443/diarioelcentrotv/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión El Centro TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 73
    },
    {
      "id": "cl-tv-el-conquistador-concepcion",
      "name": "El Conquistador Concepcion",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/419_El_Conquistador_Concepcion.png",
      "streamUrl": "https://v1.tustreaming.cl/conquistadorconcepcion/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://v1.tustreaming.cl/conquistadorconcepcion/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión El Conquistador Concepcion disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 74
    },
    {
      "id": "cl-tv-el-conquistador-la-serena",
      "name": "El Conquistador La Serena",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1647_El_Conquistador_La_Serena.png",
      "streamUrl": "https://v4.tustreaming.cl:443/elcqlaserena/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://v4.tustreaming.cl:443/elcqlaserena/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión El Conquistador La Serena disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 75
    },
    {
      "id": "cl-tv-el-conquistador-santiago",
      "name": "El Conquistador Santiago",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1478_El_Conquistador_Santiago.png",
      "streamUrl": "https://redirector.rudo.video/hls-video/931b584451fa6dd1313ee66efbfd5802e3f3bcea/elconquistadortv/elconquistadortv.smil/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://redirector.rudo.video/hls-video/931b584451fa6dd1313ee66efbfd5802e3f3bcea/elconquistadortv/elconquistadortv.smil/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión El Conquistador Santiago disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 76
    },
    {
      "id": "cl-tv-el-radar",
      "name": "El Radar",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1743_El_Radar.png",
      "streamUrl": "https://video.ipstream.cl:3459/hybrid/play.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://video.ipstream.cl:3459/hybrid/play.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión El Radar disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 77
    },
    {
      "id": "cl-tv-el-sembrador",
      "name": "El Sembrador",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/398_El_Sembrador.png",
      "streamUrl": "https://tv.arkeo.cl:1936/elsembrador/elsembrador/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://tv.arkeo.cl:1936/elsembrador/elsembrador/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión El Sembrador disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 78
    },
    {
      "id": "cl-tv-emocion-tv",
      "name": "Emocion TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/987_Emocion_TV.png",
      "streamUrl": "https://v1.tustreaming.cl/emociontv/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://v1.tustreaming.cl/emociontv/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Emocion TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 79
    },
    {
      "id": "cl-tv-en-linea-maule",
      "name": "En Linea Maule",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/79_En_Linea_Maule.png",
      "streamUrl": "https://v1.tustreaming.cl/enlineamauletv/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://v1.tustreaming.cl/enlineamauletv/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión En Linea Maule disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 80
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
      "id": "cl-tv-energeek-radio",
      "name": "EnerGeek Radio",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1266_EnerGeek_Radio.png",
      "streamUrl": "https://cl-2.backend.energeek.cl/bkp/egradioweb/index.m3u8?token=D3m0M3UCLWeb&PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://cl-2.backend.energeek.cl/bkp/egradioweb/index.m3u8?token=D3m0M3UCLWeb&PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión EnerGeek Radio disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 83
    },
    {
      "id": "cl-tv-energia-tv",
      "name": "Energia TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/386_Energia_TV.png",
      "streamUrl": "https://andromeda2.trapemn.tv:1936/regionales/energia-fm/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://andromeda2.trapemn.tv:1936/regionales/energia-fm/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Energia TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 84
    },
    {
      "id": "cl-tv-enfoque-digital-tv",
      "name": "Enfoque Digital TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/322_Enfoque_Digital_TV.png",
      "streamUrl": "https://5eaccbab48461.streamlock.net:1936/8074/8074/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://5eaccbab48461.streamlock.net:1936/8074/8074/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Enfoque Digital TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 85
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
      "id": "cl-tv-estacionradiotv",
      "name": "EstacionRadiotv",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1693_EstacionRadiotv.png",
      "streamUrl": "https://paneltv.stream:19360/estacion/estacion.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://paneltv.stream:19360/estacion/estacion.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión EstacionRadiotv disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 87
    },
    {
      "id": "cl-tv-eternal-metal",
      "name": "Eternal Metal",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1312_Eternal_Metal.png",
      "streamUrl": "https://stmv7.voxtvhd.com.br/eternaltv/eternaltv/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://stmv7.voxtvhd.com.br/eternaltv/eternaltv/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Eternal Metal disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 88
    },
    {
      "id": "cl-tv-exprezion-tv",
      "name": "Exprezion TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/67_Exprezion_TV.png",
      "streamUrl": "https://lbgo.bozztv.com/ssh101/ssh101/exprezion2026/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://lbgo.bozztv.com/ssh101/ssh101/exprezion2026/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Exprezion TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 89
    },
    {
      "id": "cl-tv-factor-80",
      "name": "Factor 80",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1724_Factor_80.png",
      "streamUrl": "https://5ff3d9babae13.streamlock.net:443/mjtdyftskj/mjtdyftskj/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://5ff3d9babae13.streamlock.net:443/mjtdyftskj/mjtdyftskj/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Factor 80 disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 90
    },
    {
      "id": "cl-tv-fm-plus",
      "name": "FM Plus",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1755_FM_Plus.png",
      "streamUrl": "https://v2.tustreaming.cl/fmplus/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://v2.tustreaming.cl/fmplus/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión FM Plus disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 91
    },
    {
      "id": "cl-tv-frecuencia-7-aconcagua",
      "name": "Frecuencia 7 Aconcagua",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/464_Frecuencia_7_Aconcagua.png",
      "streamUrl": "https://v2.tustreaming.cl/frecuencia7/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://v2.tustreaming.cl/frecuencia7/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Frecuencia 7 Aconcagua disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 92
    },
    {
      "id": "cl-tv-grupo-libra-tv",
      "name": "Grupo Libra TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1764_Grupo_Libra_TV.png",
      "streamUrl": "https://v2.tustreaming.cl/libratv/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://v2.tustreaming.cl/libratv/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Grupo Libra TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 93
    },
    {
      "id": "cl-tv-guns-n-roses-fans",
      "name": "Guns n Roses Fans",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Entretenimiento",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1731_Guns_n_Roses_Fans.png",
      "streamUrl": "https://stmv6.voxtvhd.com.br/gunsrosesfans/gunsrosesfans/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://stmv6.voxtvhd.com.br/gunsrosesfans/gunsrosesfans/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Guns n Roses Fans disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 94
    },
    {
      "id": "cl-tv-hd-radio",
      "name": "HD Radio",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1677_HD_Radio.png",
      "streamUrl": "https://streaming.bitsur.cl:3029/live/hdradiolive.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://streaming.bitsur.cl:3029/live/hdradiolive.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión HD Radio disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 95
    },
    {
      "id": "cl-tv-interactiva-fm",
      "name": "Interactiva FM",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/388_Interactiva_FM.png",
      "streamUrl": "https://unlimited2-cl-isp.dps.live/radiointeractiva/radiointeractiva.smil/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://unlimited2-cl-isp.dps.live/radiointeractiva/radiointeractiva.smil/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": true
        }
      ],
      "website": "",
      "description": "Canal de televisión Interactiva FM disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 96
    },
    {
      "id": "cl-tv-interradio-tv",
      "name": "Interradio TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/411_Interradio_TV.png",
      "streamUrl": "https://tv.digitalstreaming.cl/live/interradiotv.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://tv.digitalstreaming.cl/live/interradiotv.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Interradio TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 97
    },
    {
      "id": "cl-tv-iquique-tv",
      "name": "Iquique TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/314_Iquique_TV.png",
      "streamUrl": "https://origin.skarnetchile.com:8081/iquiquetv-hd/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://origin.skarnetchile.com:8081/iquiquetv-hd/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Iquique TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 98
    },
    {
      "id": "cl-tv-itvpatagonia",
      "name": "ITV Patagonia",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Región de Magallanes y de la Antártica Chilena",
      "city": "Punta Arenas",
      "genre": "Regional",
      "isNational": false,
      "logo": "./img/logos/cl-tv-itvpatagonia.svg",
      "streamUrl": "https://unlimited1-cl-isp.dps.live/itv/itv.smil/playlist.m3u8",
      "backupStreamUrl": "https://redirector.rudo.video/hls-video/339f69c6122f6d8f4574732c235f09b7683e31a5/pinguinotv/pinguinotv.smil/playlist.m3u8",
      "website": "https://www.itvpatagonia.com",
      "description": "Canal regional transmitiendo desde Punta Arenas para toda la Patagonia Austral.",
      "embedUrl": "https://www.itvpatagonia.com",
      "channelNumber": 99,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://unlimited1-cl-isp.dps.live/itv/itv.smil/playlist.m3u8",
          "needsProxy": true
        },
        {
          "name": "Fuente 2 (Respaldo Oficial)",
          "url": "https://redirector.rudo.video/hls-video/339f69c6122f6d8f4574732c235f09b7683e31a5/pinguinotv/pinguinotv.smil/playlist.m3u8",
          "needsProxy": false
        },
        {
          "name": "Fuente 3 (M3U Alternativa)",
          "url": "https://unlimited1-cl-isp.dps.live/itv/itv.smil/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": true
        }
      ]
    },
    {
      "id": "cl-tv-juntos-tv",
      "name": "Juntos TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1148_Juntos_TV.png",
      "streamUrl": "https://video.juntostvchile.cl:8879/hls/web-jntv.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://video.juntostvchile.cl:8879/hls/web-jntv.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Juntos TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 100
    },
    {
      "id": "cl-tv-la-chilena-tv",
      "name": "La Chilena TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1195_La_Chilena_TV.png",
      "streamUrl": "https://vdochile.com:3134/hybrid/play.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://vdochile.com:3134/hybrid/play.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión La Chilena TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 101
    },
    {
      "id": "cl-tv-la-clave",
      "name": "La Clave",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1270_La_Clave.png",
      "streamUrl": "https://unlimited1-cl-isp.dps.live/laclavetv/laclavetv.smil/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://unlimited1-cl-isp.dps.live/laclavetv/laclavetv.smil/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": true
        }
      ],
      "website": "",
      "description": "Canal de televisión La Clave disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 102
    },
    {
      "id": "cl-tv-la-comarca-tv",
      "name": "La Comarca TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1698_La_Comarca_TV.png",
      "streamUrl": "https://v2.tustreaming.cl/lcomarcatv/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://v2.tustreaming.cl/lcomarcatv/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión La Comarca TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 103
    },
    {
      "id": "cl-tv-la-melinkana-tv",
      "name": "La Melinkana TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1393_La_Melinkana_TV.png",
      "streamUrl": "https://v1.tustreaming.cl/melinkana/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://v1.tustreaming.cl/melinkana/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión La Melinkana TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 104
    },
    {
      "id": "cl-tv-la-metro",
      "name": "La Metro",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1534_La_Metro.png",
      "streamUrl": "https://redirector.rudo.video/hls-video/931b584451fa6dd1313ee66efbfd5802e3f3bcea/metropolitanatv/metropolitanatv.smil/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://redirector.rudo.video/hls-video/931b584451fa6dd1313ee66efbfd5802e3f3bcea/metropolitanatv/metropolitanatv.smil/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión La Metro disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 105
    },
    {
      "id": "cl-tv-la-nuestra",
      "name": "La Nuestra",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1472_La_Nuestra.png",
      "streamUrl": "https://redirector.rudo.video/hls-video/339f69c6122f6d8f4574732c235f09b7683e31a5/ln/ln.smil/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://redirector.rudo.video/hls-video/339f69c6122f6d8f4574732c235f09b7683e31a5/ln/ln.smil/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión La Nuestra disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 106
    },
    {
      "id": "cl-tv-la-popular-tv",
      "name": "La Popular TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/325_La_Popular_TV.png",
      "streamUrl": "https://tv.arkeo.cl:1936/enlacetv1/enlacetv1/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://tv.arkeo.cl:1936/enlacetv1/enlacetv1/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión La Popular TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 107
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
      "id": "cl-tv-lila-tv-pencahue",
      "name": "Lila TV Pencahue",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1734_Lila_TV_Pencahue.png",
      "streamUrl": "https://tv.arkeo.cl:1936/radiolila/radiolila/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://tv.arkeo.cl:1936/radiolila/radiolila/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Lila TV Pencahue disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 110
    },
    {
      "id": "cl-tv-longino-tv",
      "name": "Longino TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1499_Longino_TV.png",
      "streamUrl": "https://coping-applaud-quit.ngrok-free.dev/hls/stream.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://coping-applaud-quit.ngrok-free.dev/hls/stream.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Longino TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 111
    },
    {
      "id": "cl-tv-m-music-tv",
      "name": "M Music TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1550_M_Music_TV.png",
      "streamUrl": "https://cloudpro.servidoresdestream.com:8081/8036/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://cloudpro.servidoresdestream.com:8081/8036/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión M Music TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 112
    },
    {
      "id": "cl-tv-madero-tv",
      "name": "Madero TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/784_Madero_TV.png",
      "streamUrl": "https://v1.tustreaming.cl/maderoantofagasta/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://v1.tustreaming.cl/maderoantofagasta/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Madero TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 113
    },
    {
      "id": "cl-tv-maray-tv",
      "name": "Maray TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1601_Maray_TV.png",
      "streamUrl": "https://5eaccbab48461.streamlock.net:1936/8242/ngrp:8242_all/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://5eaccbab48461.streamlock.net:1936/8242/ngrp:8242_all/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Maray TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 114
    },
    {
      "id": "cl-tv-marga-marga-tv",
      "name": "Marga Marga TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1434_Marga_Marga_TV.png",
      "streamUrl": "https://v1.tustreaming.cl/margamargatv/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://v1.tustreaming.cl/margamargatv/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Marga Marga TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 115
    },
    {
      "id": "cl-tv-mas-radio-tv",
      "name": "Mas Radio TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1495_Mas_Radio_TV.png",
      "streamUrl": "https://iptv.intersurtv.cl/intersur_mauletv/index.fmp4.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://iptv.intersurtv.cl/intersur_mauletv/index.fmp4.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Mas Radio TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 116
    },
    {
      "id": "cl-tv-maule-vision",
      "name": "Maule Vision",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1164_Maule_Vision.png",
      "streamUrl": "https://v2.tustreaming.cl/maulevisiontv/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://v2.tustreaming.cl/maulevisiontv/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Maule Vision disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 117
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
      "id": "cl-tv-metanoia-tv",
      "name": "Metanoia TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1384_Metanoia_TV.png",
      "streamUrl": "https://live.mtna.tv/hls/mtna/mtna.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://live.mtna.tv/hls/mtna/mtna.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Metanoia TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 119
    },
    {
      "id": "cl-tv-mi-radio-tv",
      "name": "Mi Radio TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/395_Mi_Radio_TV.png",
      "streamUrl": "https://tls-cl.cdnz.cl/miradio2/live/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://tls-cl.cdnz.cl/miradio2/live/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Mi Radio TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 120
    },
    {
      "id": "cl-tv-milodon-tv",
      "name": "Milodon TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1407_Milodon_TV.png",
      "streamUrl": "https://video3.servidordevideo.net:3585/live/upbsfzhdlive.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://video3.servidordevideo.net:3585/live/upbsfzhdlive.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Milodon TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 121
    },
    {
      "id": "cl-tv-mundo-de-la-musica-tv",
      "name": "Mundo de la Musica TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/771_Mundo_de_la_Musica_TV.png",
      "streamUrl": "https://tv.arkeo.cl:1936/mundodelamusica/mundodelamusica/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://tv.arkeo.cl:1936/mundodelamusica/mundodelamusica/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Mundo de la Musica TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 122
    },
    {
      "id": "cl-tv-nina-tv",
      "name": "Nina TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1552_Nina_TV.png",
      "streamUrl": "https://tv1.ninatv.cl/hls/stream.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://tv1.ninatv.cl/hls/stream.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Nina TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 123
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
      "id": "cl-tv-omega-radio",
      "name": "Omega Radio",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1671_Omega_Radio.png",
      "streamUrl": "https://v2.tustreaming.cl:443/broadcastingtx/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://v2.tustreaming.cl:443/broadcastingtx/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Omega Radio disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 125
    },
    {
      "id": "cl-tv-onda-fiesta",
      "name": "Onda Fiesta",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1725_Onda_Fiesta.png",
      "streamUrl": "https://5ff3d9babae13.streamlock.net:443/8000/8000/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://5ff3d9babae13.streamlock.net:443/8000/8000/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Onda Fiesta disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 126
    },
    {
      "id": "cl-tv-onda-radio-tv",
      "name": "Onda Radio TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1005_Onda_Radio_TV.png",
      "streamUrl": "https://tv.arkeo.cl:1936/ondaradiotv/ondaradiotv/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://tv.arkeo.cl:1936/ondaradiotv/ondaradiotv/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Onda Radio TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 127
    },
    {
      "id": "cl-tv-opinionsur-cine",
      "name": "Opinionsur Cine",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Entretenimiento",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1087_Opinionsur_Cine.png",
      "streamUrl": "https://mediagruptv.stream:8081/opinionsur/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://mediagruptv.stream:8081/opinionsur/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Opinionsur Cine disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 128
    },
    {
      "id": "cl-tv-parentesis-tv",
      "name": "Parentesis TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1424_Parentesis_TV.png",
      "streamUrl": "https://freya.mivideo.pro/parentesistv/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://freya.mivideo.pro/parentesistv/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Parentesis TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 129
    },
    {
      "id": "cl-tv-pasion-ranchera",
      "name": "Pasion Ranchera",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1722_Pasion_Ranchera.png",
      "streamUrl": "https://tv.arkeo.cl:19360/8068/8068.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://tv.arkeo.cl:19360/8068/8068.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Pasion Ranchera disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 130
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
      "id": "cl-tv-pichilemu-tv",
      "name": "Pichilemu TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/66_Pichilemu_TV.png",
      "streamUrl": "https://5ff3d9babae13.streamlock.net/8028/8028/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://5ff3d9babae13.streamlock.net/8028/8028/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Pichilemu TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 133
    },
    {
      "id": "cl-tv-pinguinotv",
      "name": "Pingüino TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Región de Magallanes y de la Antártica Chilena",
      "city": "Punta Arenas",
      "genre": "Regional",
      "isNational": false,
      "logo": "./img/logos/cl-tv-pinguinotv.svg",
      "streamUrl": "https://redirector.rudo.video/hls-video/339f69c6122f6d8f4574732c235f09b7683e31a5/pinguinotv/pinguinotv.smil/playlist.m3u8",
      "backupStreamUrl": "https://unlimited1-cl-isp.dps.live/itv/itv.smil/playlist.m3u8",
      "website": "https://elpinguino.com",
      "description": "Canal del grupo multimedia El Pingüino, con cobertura completa de Magallanes.",
      "embedUrl": "https://elpinguino.com",
      "channelNumber": 134,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://redirector.rudo.video/hls-video/339f69c6122f6d8f4574732c235f09b7683e31a5/pinguinotv/pinguinotv.smil/playlist.m3u8",
          "needsProxy": false
        },
        {
          "name": "Fuente 2 (Respaldo Oficial)",
          "url": "https://unlimited1-cl-isp.dps.live/itv/itv.smil/playlist.m3u8",
          "needsProxy": true
        },
        {
          "name": "Fuente 3 (M3U Alternativa)",
          "url": "https://redirector.rudo.video/hls-video/339f69c6122f6d8f4574732c235f09b7683e31a5/pinguinotv/pinguinotv.smil/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ]
    },
    {
      "id": "cl-tv-pirque-tv",
      "name": "Pirque TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1792_Pirque_TV.png",
      "streamUrl": "https://eu1.servers10.com:8081/laureltv/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://eu1.servers10.com:8081/laureltv/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Pirque TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 135
    },
    {
      "id": "cl-tv-planetatv",
      "name": "PlanetaTV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1014_PlanetaTV.png",
      "streamUrl": "https://tls-cl.cdnz.cl/planetatv/live/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://tls-cl.cdnz.cl/planetatv/live/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión PlanetaTV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 136
    },
    {
      "id": "cl-tv-poesia-tv",
      "name": "Poesia TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1630_Poesia_TV.png",
      "streamUrl": "https://5eaccbab48461.streamlock.net:1936/8222/8222/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://5eaccbab48461.streamlock.net:1936/8222/8222/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Poesia TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 137
    },
    {
      "id": "cl-tv-portal-foxmix",
      "name": "Portal FoxMix",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/31_Portal_FoxMix.png",
      "streamUrl": "https://panel.tvstream.cl:1936/8040/8040/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://panel.tvstream.cl:1936/8040/8040/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Portal FoxMix disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 138
    },
    {
      "id": "cl-tv-preludio-tv",
      "name": "Preludio TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/407_Preludio_TV.png",
      "streamUrl": "https://tv.arkeo.cl:1936/preludio/preludio/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://tv.arkeo.cl:1936/preludio/preludio/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Preludio TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 139
    },
    {
      "id": "cl-tv-preludio-tv-se-al-2",
      "name": "Preludio TV Señal 2",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1672_Preludio_TV_Senal_2.png",
      "streamUrl": "https://tv.arkeo.cl:1936/preludio2/preludio2/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://tv.arkeo.cl:1936/preludio2/preludio2/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Preludio TV Señal 2 disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 140
    },
    {
      "id": "cl-tv-pridetv-latam",
      "name": "PRIDEtv Latam",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1692_PRIDEtv_Latam.png",
      "streamUrl": "https://stream.pridetvlatam.cl/iptv/channel/2.m3u8?mode=segmenter&PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://stream.pridetvlatam.cl/iptv/channel/2.m3u8?mode=segmenter&PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión PRIDEtv Latam disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 141
    },
    {
      "id": "cl-tv-primicia-vida-television",
      "name": "Primicia Vida Television",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1485_Primicia_Vida_Television.png",
      "streamUrl": "https://mc.servidor.stream:19360/8248/8248.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://mc.servidor.stream:19360/8248/8248.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Primicia Vida Television disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 142
    },
    {
      "id": "cl-tv-providencia-television",
      "name": "Providencia Television",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1553_Providencia_Television.png",
      "streamUrl": "https://v2.tustreaming.cl/providenciatv/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://v2.tustreaming.cl/providenciatv/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Providencia Television disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 143
    },
    {
      "id": "cl-tv-pucon-tv",
      "name": "Pucon TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/83_Pucon_TV.png",
      "streamUrl": "https://unlimited1-cl-isp.dps.live/pucontv/pucontv.smil/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://unlimited1-cl-isp.dps.live/pucontv/pucontv.smil/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": true
        }
      ],
      "website": "",
      "description": "Canal de televisión Pucon TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 144
    },
    {
      "id": "cl-tv-pudahuel-fm",
      "name": "Pudahuel FM",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/429_Pudahuel_FM.png",
      "streamUrl": "https://unlimited2-cl-isp.dps.live/pudahueltv/pudahueltv.smil/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://unlimited2-cl-isp.dps.live/pudahueltv/pudahueltv.smil/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": true
        }
      ],
      "website": "",
      "description": "Canal de televisión Pudahuel FM disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 145
    },
    {
      "id": "cl-tv-pudahuel-tv",
      "name": "Pudahuel TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1754_Pudahuel_TV.png",
      "streamUrl": "https://panel.tvstream.cl:1936/8000/8000/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://panel.tvstream.cl:1936/8000/8000/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Pudahuel TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 146
    },
    {
      "id": "cl-tv-puerta-norte",
      "name": "Puerta Norte",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/313_Puerta_Norte.png",
      "streamUrl": "https://panel.tvstream.cl:1936/8030/8030/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://panel.tvstream.cl:1936/8030/8030/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Puerta Norte disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 147
    },
    {
      "id": "cl-tv-puranoticia",
      "name": "Puranoticia",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Noticias",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/415_Puranoticia.png",
      "streamUrl": "https://pnt.janusmedia.tv/hls/pnt.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://pnt.janusmedia.tv/hls/pnt.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Puranoticia disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 148
    },
    {
      "id": "cl-tv-qultura",
      "name": "Qultura",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Cultura",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1771_Qultura.png",
      "streamUrl": "https://scl.edge.grupoz.cl/transmision/live/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://scl.edge.grupoz.cl/transmision/live/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Qultura disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 149
    },
    {
      "id": "cl-tv-radio-7-tazas-de-molina",
      "name": "Radio 7 Tazas de Molina",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1745_Radio_7_Tazas_de_Molina.png",
      "streamUrl": "https://5ff3d9babae13.streamlock.net:443/krjrtsstzv/krjrtsstzv/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://5ff3d9babae13.streamlock.net:443/krjrtsstzv/krjrtsstzv/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Radio 7 Tazas de Molina disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 150
    },
    {
      "id": "cl-tv-radio-agricultura",
      "name": "Radio Agricultura",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/423_Radio_Agricultura.png",
      "streamUrl": "https://redirector.rudo.video/hls-video/ey6283je82983je9823je8jowowiekldk9838274/921tv/921tv.smil/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://redirector.rudo.video/hls-video/ey6283je82983je9823je8jowowiekldk9838274/921tv/921tv.smil/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Radio Agricultura disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 151
    },
    {
      "id": "cl-tv-radio-agricultura-2",
      "name": "Radio Agricultura 2",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1673_Radio_Agricultura_2.png",
      "streamUrl": "https://redirector.rudo.video/hls-video/931b584451fa6dd1313ee66efbfd5802e3f3bcea/agceventos/agceventos.smil/playlist.m3u8?&PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://redirector.rudo.video/hls-video/931b584451fa6dd1313ee66efbfd5802e3f3bcea/agceventos/agceventos.smil/playlist.m3u8?&PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Radio Agricultura 2 disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 152
    },
    {
      "id": "cl-tv-radio-amiga-vallenar",
      "name": "Radio Amiga Vallenar",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1675_Radio_Amiga_Vallenar.png",
      "streamUrl": "https://5eaccbab48461.streamlock.net:1936/8176/8176/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://5eaccbab48461.streamlock.net:1936/8176/8176/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Radio Amiga Vallenar disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 153
    },
    {
      "id": "cl-tv-radio-ancoa-tv",
      "name": "Radio Ancoa TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/406_Radio_Ancoa_TV.png",
      "streamUrl": "https://v2.tustreaming.cl/radioancoatv/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://v2.tustreaming.cl/radioancoatv/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Radio Ancoa TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 154
    },
    {
      "id": "cl-tv-radio-araucaria",
      "name": "Radio Araucaria",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1799_Radio_Araucaria.png",
      "streamUrl": "https://vivo.solumedia.com:19360/araucaria/araucaria.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://vivo.solumedia.com:19360/araucaria/araucaria.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Radio Araucaria disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 155
    },
    {
      "id": "cl-tv-radio-bienvenida-fm",
      "name": "Radio Bienvenida FM",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1463_Radio_Bienvenida_FM.png",
      "streamUrl": "https://panel.tvstream.cl:1936/8012/8012/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://panel.tvstream.cl:1936/8012/8012/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Radio Bienvenida FM disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 156
    },
    {
      "id": "cl-tv-radio-bohemia-tv",
      "name": "Radio Bohemia TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1776_Radio_Bohemia_TV.png",
      "streamUrl": "https://portalstream.cl:8080/bohemia1.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://portalstream.cl:8080/bohemia1.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Radio Bohemia TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 157
    },
    {
      "id": "cl-tv-radio-caldera-vision",
      "name": "Radio Caldera Vision",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1600_Radio_Caldera_Vision.png",
      "streamUrl": "https://tv.arkeo.cl:1936/kymczwbrge/kymczwbrge/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://tv.arkeo.cl:1936/kymczwbrge/kymczwbrge/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Radio Caldera Vision disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 158
    },
    {
      "id": "cl-tv-radio-camila-tv",
      "name": "Radio Camila TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/410_Radio_Camila_TV.png",
      "streamUrl": "https://panel.tvstream.cl:1936/8008/8008/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://panel.tvstream.cl:1936/8008/8008/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Radio Camila TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 159
    },
    {
      "id": "cl-tv-radio-chiloe",
      "name": "Radio Chiloe",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/409_Radio_Chiloe.png",
      "streamUrl": "https://videostream.chileservidores.com:8081/chiloe1/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://videostream.chileservidores.com:8081/chiloe1/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Radio Chiloe disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 160
    },
    {
      "id": "cl-tv-radio-contacto-90-7-fm",
      "name": "Radio Contacto 90.7 FM",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1670_Radio_Contacto_90_7_FM.png",
      "streamUrl": "https://unlimited1-cl-isp.dps.live/interactivatv/interactivatv.smil/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://unlimited1-cl-isp.dps.live/interactivatv/interactivatv.smil/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": true
        }
      ],
      "website": "",
      "description": "Canal de televisión Radio Contacto 90.7 FM disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 161
    },
    {
      "id": "cl-tv-radio-contemporanea-coihueco",
      "name": "Radio Contemporanea Coihueco",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1493_Radio_Contemporanea_Coihueco.png",
      "streamUrl": "https://tv.arkeo.cl:19360/8046/8046.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://tv.arkeo.cl:19360/8046/8046.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Radio Contemporanea Coihueco disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 162
    },
    {
      "id": "cl-tv-radio-duna",
      "name": "Radio Duna",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/427_Radio_Duna.png",
      "streamUrl": "https://mdstrm.com/live-stream-playlist/67ed8a8d6db4af9a0188555c.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://mdstrm.com/live-stream-playlist/67ed8a8d6db4af9a0188555c.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Radio Duna disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 163
    },
    {
      "id": "cl-tv-radio-edelweiss",
      "name": "Radio Edelweiss",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1313_Radio_Edelweiss.png",
      "streamUrl": "https://vmix.dyndns.biz/Edelweiss/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://vmix.dyndns.biz/Edelweiss/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Radio Edelweiss disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 164
    },
    {
      "id": "cl-tv-radio-estacion-arica",
      "name": "Radio Estacion Arica",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1242_Radio_Estacion_Arica.png",
      "streamUrl": "https://5eaccbab48461.streamlock.net:1936/heqhvtgebg/heqhvtgebg/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://5eaccbab48461.streamlock.net:1936/heqhvtgebg/heqhvtgebg/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Radio Estacion Arica disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 165
    },
    {
      "id": "cl-tv-radio-fantasia",
      "name": "Radio Fantasia",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1774_Radio_Fantasia.png",
      "streamUrl": "https://srt.servilive.com/live/fantasiachile-pf556.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://srt.servilive.com/live/fantasiachile-pf556.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Radio Fantasia disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 166
    },
    {
      "id": "cl-tv-radio-fantasia-tv",
      "name": "Radio Fantasia TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/389_Radio_Fantasia_TV.png",
      "streamUrl": "https://v2.tustreaming.cl/fantasiatv/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://v2.tustreaming.cl/fantasiatv/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Radio Fantasia TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 167
    },
    {
      "id": "cl-tv-radio-favorita",
      "name": "Radio Favorita",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/417_Radio_Favorita.png",
      "streamUrl": "https://freya.mivideo.pro/favoritatv2/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://freya.mivideo.pro/favoritatv2/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Radio Favorita disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 168
    },
    {
      "id": "cl-tv-radio-fiessta",
      "name": "Radio Fiessta",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/401_Radio_Fiessta.png",
      "streamUrl": "https://www.cloudscriptdog.cl:19360/fiesta-video-01/fiesta-video-01.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://www.cloudscriptdog.cl:19360/fiesta-video-01/fiesta-video-01.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Radio Fiessta disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 169
    },
    {
      "id": "cl-tv-radio-fin-del-mundo-tv",
      "name": "Radio Fin Del Mundo TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1605_Radio_Fin_Del_Mundo_TV.png",
      "streamUrl": "https://live20.bozztv.com/akamaissh101/ssh101/rfdmtv/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://live20.bozztv.com/akamaissh101/ssh101/rfdmtv/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Radio Fin Del Mundo TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 170
    },
    {
      "id": "cl-tv-radio-fm-top",
      "name": "Radio FM TOP",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1713_Radio_FM_TOP.png",
      "streamUrl": "https://tv.arkeo.cl:19360/8132/8132.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://tv.arkeo.cl:19360/8132/8132.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Radio FM TOP disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 171
    },
    {
      "id": "cl-tv-radio-frecuencia-uno",
      "name": "Radio Frecuencia Uno",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1646_Radio_Frecuencia_Uno.png",
      "streamUrl": "https://v1.tustreaming.cl/frecuencia1tv/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://v1.tustreaming.cl/frecuencia1tv/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Radio Frecuencia Uno disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 172
    },
    {
      "id": "cl-tv-radio-genial-tv",
      "name": "Radio Genial TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/412_Radio_Genial_TV.png",
      "streamUrl": "https://v1.tustreaming.cl:443/genialtv/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://v1.tustreaming.cl:443/genialtv/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Radio Genial TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 173
    },
    {
      "id": "cl-tv-radio-hoy",
      "name": "Radio Hoy",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/380_Radio_Hoy.png",
      "streamUrl": "https://oracle.streaminghd.cl/radiohoy/smil:transcoder.smil/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://oracle.streaminghd.cl/radiohoy/smil:transcoder.smil/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Radio Hoy disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 174
    },
    {
      "id": "cl-tv-radio-imagen-106-5",
      "name": "Radio Imagen 106.5",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1565_Radio_Imagen_106_5.png",
      "streamUrl": "https://panel.tvstream.cl:1936/8066/8066/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://panel.tvstream.cl:1936/8066/8066/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Radio Imagen 106.5 disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 175
    },
    {
      "id": "cl-tv-radio-infinita",
      "name": "Radio Infinita",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/425_Radio_Infinita.png",
      "streamUrl": "https://mdstrm.com/live-stream-playlist/63a066e54ed536087960b550.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://mdstrm.com/live-stream-playlist/63a066e54ed536087960b550.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Radio Infinita disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 176
    },
    {
      "id": "cl-tv-radio-la-se-al",
      "name": "Radio La Señal",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1571_Radio_La_Senal.png",
      "streamUrl": "https://5ff3d9babae13.streamlock.net:443/chrgkqgkyb/chrgkqgkyb/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://5ff3d9babae13.streamlock.net:443/chrgkqgkyb/chrgkqgkyb/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Radio La Señal disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 177
    },
    {
      "id": "cl-tv-radio-labrar-noticias",
      "name": "Radio Labrar Noticias",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Noticias",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1772_Radio_Labrar_Noticias.png",
      "streamUrl": "https://183.bozztv.com/giatv/giatv-labrarnoticias/labrarnoticias/chunks.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://183.bozztv.com/giatv/giatv-labrarnoticias/labrarnoticias/chunks.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Radio Labrar Noticias disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 178
    },
    {
      "id": "cl-tv-radio-labrar-tv",
      "name": "Radio Labrar TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1487_Radio_Labrar_TV.png",
      "streamUrl": "https://183.bozztv.com/giatv/giatv-radiolabrartv/radiolabrartv/chunks.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://183.bozztv.com/giatv/giatv-radiolabrartv/radiolabrartv/chunks.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Radio Labrar TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 179
    },
    {
      "id": "cl-tv-radio-las-nieves",
      "name": "Radio Las Nieves",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/408_Radio_Las_Nieves.png",
      "streamUrl": "https://v2.tustreaming.cl/rln/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://v2.tustreaming.cl/rln/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Radio Las Nieves disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 180
    },
    {
      "id": "cl-tv-radio-magallanes",
      "name": "Radio Magallanes",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1069_Radio_Magallanes.png",
      "streamUrl": "https://live20.bozztv.com/akamaissh101/ssh101/radiomagallanes/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://live20.bozztv.com/akamaissh101/ssh101/radiomagallanes/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Radio Magallanes disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 181
    },
    {
      "id": "cl-tv-radio-m-gica-tv",
      "name": "Radio Mágica TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1788_Radio_Magica_TV.png",
      "streamUrl": "https://stmv1.voxtvhd.com.br/radiomagicatv/radiomagicatv/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://stmv1.voxtvhd.com.br/radiomagicatv/radiomagicatv/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Radio Mágica TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 182
    },
    {
      "id": "cl-tv-radio-magistral-coihueco",
      "name": "Radio Magistral Coihueco",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1757_Radio_Magistral_Coihueco.png",
      "streamUrl": "https://tv.arkeo.cl:19360/8056/8056.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://tv.arkeo.cl:19360/8056/8056.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Radio Magistral Coihueco disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 183
    },
    {
      "id": "cl-tv-radio-maqui",
      "name": "Radio Maqui",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1134_Radio_Maqui.png",
      "streamUrl": "https://streamyes.alsolnet.com/maquiradio/live/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://streamyes.alsolnet.com/maquiradio/live/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Radio Maqui disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 184
    },
    {
      "id": "cl-tv-radio-mia-89-3-fm",
      "name": "Radio Mia 89.3 Fm",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1173_Radio_Mia_89_3_Fm.png",
      "streamUrl": "https://tv.telselec.cl:3856/live/radiomialive.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://tv.telselec.cl:3856/live/radiomialive.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Radio Mia 89.3 Fm disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 185
    },
    {
      "id": "cl-tv-radio-navarino",
      "name": "Radio Navarino",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1538_Radio_Navarino.png",
      "streamUrl": "https://panel.tvstream.cl:1936/8000/8000/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://panel.tvstream.cl:1936/8000/8000/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Radio Navarino disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 186
    },
    {
      "id": "cl-tv-radio-uble",
      "name": "Radio Ñuble",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/870_Radio_Nuble.png",
      "streamUrl": "https://tv.telselec.cl:3376/live/nublefmlive.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://tv.telselec.cl:3376/live/nublefmlive.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Radio Ñuble disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 187
    },
    {
      "id": "cl-tv-radio-panoramica",
      "name": "Radio Panoramica",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1502_Radio_Panoramica.png",
      "streamUrl": "https://v2.tustreaming.cl:/alingeproducciones/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://v2.tustreaming.cl:/alingeproducciones/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Radio Panoramica disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 188
    },
    {
      "id": "cl-tv-radio-polar",
      "name": "Radio Polar",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/403_Radio_Polar.png",
      "streamUrl": "https://polartv.webredirect.org/memfs/319ac83c-e602-4e91-8104-2b5501380b5e_output_0.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://polartv.webredirect.org/memfs/319ac83c-e602-4e91-8104-2b5501380b5e_output_0.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Radio Polar disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 189
    },
    {
      "id": "cl-tv-radio-popular-coihueco",
      "name": "Radio Popular Coihueco",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1122_Radio_Popular_Coihueco.png",
      "streamUrl": "https://tv.arkeo.cl:19360/8052/8052.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://tv.arkeo.cl:19360/8052/8052.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Radio Popular Coihueco disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 190
    },
    {
      "id": "cl-tv-radio-portales",
      "name": "Radio Portales",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/420_Radio_Portales.png",
      "streamUrl": "https://andromeda2.trapemn.tv:1936/radios/radioportales.stream/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://andromeda2.trapemn.tv:1936/radios/radioportales.stream/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Radio Portales disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 191
    },
    {
      "id": "cl-tv-radio-presidente-iba-ez",
      "name": "Radio Presidente Ibañez",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/413_Radio_Presidente_Ibanez.png",
      "streamUrl": "https://ibanez.servercl.com/hls/live.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://ibanez.servercl.com/hls/live.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Radio Presidente Ibañez disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 192
    },
    {
      "id": "cl-tv-radio-rancagua",
      "name": "Radio Rancagua",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/418_Radio_Rancagua.png",
      "streamUrl": "https://tv.arkeo.cl:1936/radiorancagua/radiorancagua/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://tv.arkeo.cl:1936/radiorancagua/radiorancagua/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Radio Rancagua disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 193
    },
    {
      "id": "cl-tv-radio-riquelme-tv",
      "name": "Radio Riquelme TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/787_Radio_Riquelme_TV.png",
      "streamUrl": "https://live20.bozztv.com/giatv/giatv-riquelme1350am/riquelme1350am/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://live20.bozztv.com/giatv/giatv-riquelme1350am/riquelme1350am/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Radio Riquelme TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 194
    },
    {
      "id": "cl-tv-radio-ritmo-fm",
      "name": "Radio Ritmo FM",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1196_Radio_Ritmo_FM.png",
      "streamUrl": "https://panel.tvstream.cl:1936/8046/8046/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://panel.tvstream.cl:1936/8046/8046/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Radio Ritmo FM disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 195
    },
    {
      "id": "cl-tv-radio-ritoque-la-ligua-91-3",
      "name": "Radio Ritoque La Ligua 91.3",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1797_Radio_Ritoque_La_Ligua_91_3.png",
      "streamUrl": "https://stream.radioritoque.cl/tv/chunks.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://stream.radioritoque.cl/tv/chunks.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Radio Ritoque La Ligua 91.3 disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 196
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
      "id": "cl-tv-radio-rosa-fm",
      "name": "Radio Rosa FM",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1422_Radio_Rosa_FM.png",
      "streamUrl": "https://tv.arkeo.cl:1936/rosafm/rosafm/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://tv.arkeo.cl:1936/rosafm/rosafm/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Radio Rosa FM disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 198
    },
    {
      "id": "cl-tv-radio-rt",
      "name": "Radio RT",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1500_Radio_RT.png",
      "streamUrl": "https://v1.tustreaming.cl/radiort/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://v1.tustreaming.cl/radiort/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Radio RT disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 199
    },
    {
      "id": "cl-tv-radio-uc",
      "name": "Radio UC",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1467_Radio_UC.png",
      "streamUrl": "https://oracle.streaminghd.cl/radiouc/radiouc/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://oracle.streaminghd.cl/radiouc/radiouc/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Radio UC disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 200
    },
    {
      "id": "cl-tv-radio-uniacc",
      "name": "Radio UNIACC",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1744_Radio_UNIACC.png",
      "streamUrl": "https://scl.edge.grupoz.cl/uniaccastream/live/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://scl.edge.grupoz.cl/uniaccastream/live/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Radio UNIACC disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 201
    },
    {
      "id": "cl-tv-radio-universal",
      "name": "Radio Universal",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/390_Radio_Universal.png",
      "streamUrl": "https://videostream.chileservidores.com:8081/universal/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://videostream.chileservidores.com:8081/universal/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Radio Universal disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 202
    },
    {
      "id": "cl-tv-radio-via-7-tv",
      "name": "Radio Via 7 TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1777_Radio_Via_7_TV.png",
      "streamUrl": "https://tv.arkeo.cl:1936/radiovia7tv/radiovia7tv/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://tv.arkeo.cl:1936/radiovia7tv/radiovia7tv/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Radio Via 7 TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 203
    },
    {
      "id": "cl-tv-radio-via-libre",
      "name": "Radio Via Libre",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/396_Radio_Via_Libre.png",
      "streamUrl": "https://live20.bozztv.com/akamaissh101/ssh101/vialibretv/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://live20.bozztv.com/akamaissh101/ssh101/vialibretv/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Radio Via Libre disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 204
    },
    {
      "id": "cl-tv-radio-vida-curico",
      "name": "Radio Vida Curico",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/167_Radio_Vida_Curico.png",
      "streamUrl": "https://v2.tustreaming.cl/radiovidacurico/rewind-999999.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://v2.tustreaming.cl/radiovidacurico/rewind-999999.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Radio Vida Curico disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 205
    },
    {
      "id": "cl-tv-radio-zona",
      "name": "Radio Zona",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1669_Radio_Zona.png",
      "streamUrl": "https://tv.telselec.cl:3780/live/jesuslive.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://tv.telselec.cl:3780/live/jesuslive.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Radio Zona disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 206
    },
    {
      "id": "cl-tv-radio-zona-90-3",
      "name": "Radio Zona 90.3",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1629_Radio_Zona_90_3.png",
      "streamUrl": "https://live.tvcontrolcp.com:8081/radiozona/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://live.tvcontrolcp.com:8081/radiozona/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Radio Zona 90.3 disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 207
    },
    {
      "id": "cl-tv-radioactiva-tv",
      "name": "Radioactiva TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1301_Radioactiva_TV.png",
      "streamUrl": "https://redirector.rudo.video/hls-video/339f69c6122f6d8f4574732c235f09b7683e31a5/radioactivatv/radioactivatv.smil/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://redirector.rudo.video/hls-video/339f69c6122f6d8f4574732c235f09b7683e31a5/radioactivatv/radioactivatv.smil/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Radioactiva TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 208
    },
    {
      "id": "cl-tv-raices-arabes-tv",
      "name": "Raices Arabes TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/910_Raices_Arabes_TV.png",
      "streamUrl": "https://tv.arkeo.cl:1936/raicesarabestv/raicesarabestv/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://tv.arkeo.cl:1936/raicesarabestv/raicesarabestv/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Raices Arabes TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 209
    },
    {
      "id": "cl-tv-recuerdos-retro-radio-tv",
      "name": "Recuerdos Retro Radio TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/521_Recuerdos_Retro_Radio_TV.png",
      "streamUrl": "https://panel.tvstream.cl:1936/8034/8034/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://panel.tvstream.cl:1936/8034/8034/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Recuerdos Retro Radio TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 210
    },
    {
      "id": "cl-tv-red-fueguina-radio",
      "name": "Red Fueguina Radio",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/400_Red_Fueguina_Radio.png",
      "streamUrl": "https://stmv5.voxtvhd.com.br/redfueguina/redfueguina/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://stmv5.voxtvhd.com.br/redfueguina/redfueguina/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Red Fueguina Radio disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 211
    },
    {
      "id": "cl-tv-red-vision-television",
      "name": "Red Vision Television",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1609_Red_Vision_Television.png",
      "streamUrl": "https://tls-cl.cdnz.cl/livertv/live/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://tls-cl.cdnz.cl/livertv/live/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Red Vision Television disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 212
    },
    {
      "id": "cl-tv-regi-n-televisi-n-uble",
      "name": "Región Televisión Ñuble",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/903_Region_Television_Nuble.png",
      "streamUrl": "https://tv.arkeo.cl:1936/canalrtv/canalrtv/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://tv.arkeo.cl:1936/canalrtv/canalrtv/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Región Televisión Ñuble disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 213
    },
    {
      "id": "cl-tv-restaurando-vidas-tv",
      "name": "Restaurando Vidas TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/351_Restaurando_Vidas_TV.png",
      "streamUrl": "https://v4.tustreaming.cl/restaurandovida/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://v4.tustreaming.cl/restaurandovida/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Restaurando Vidas TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 214
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
      "id": "cl-tv-retromusica-television",
      "name": "Retromusica Television",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1765_Retromusica_Television.png",
      "streamUrl": "https://vdochile.com:3864/hybrid/play.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://vdochile.com:3864/hybrid/play.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Retromusica Television disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 218
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
      "id": "cl-tv-rialtv",
      "name": "RialTv",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1599_RialTv.png",
      "streamUrl": "https://5eaccbab48461.streamlock.net:1936/8124/8124/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://5eaccbab48461.streamlock.net:1936/8124/8124/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión RialTv disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 220
    },
    {
      "id": "cl-tv-ritmo-top-latino",
      "name": "Ritmo Top Latino",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1564_Ritmo_Top_Latino.png",
      "streamUrl": "https://5ff3d9babae13.streamlock.net/vzzfdajnnf/vzzfdajnnf/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://5ff3d9babae13.streamlock.net/vzzfdajnnf/vzzfdajnnf/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Ritmo Top Latino disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 221
    },
    {
      "id": "cl-tv-ritmo-tv",
      "name": "Ritmo TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1004_Ritmo_TV.png",
      "streamUrl": "https://tv.arkeo.cl:1936/ritmofm/ritmofm/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://tv.arkeo.cl:1936/ritmofm/ritmofm/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Ritmo TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 222
    },
    {
      "id": "cl-tv-ritoquefm-tv",
      "name": "RitoqueFM TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1678_RitoqueFM_TV.png",
      "streamUrl": "https://streaming.purum.cl/ritoquetv/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://streaming.purum.cl/ritoquetv/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión RitoqueFM TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 223
    },
    {
      "id": "cl-tv-rlotv",
      "name": "RLOTV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/895_RLOTV.png",
      "streamUrl": "https://stmv7.voxtvhd.com.br/catto5860/catto5860/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://stmv7.voxtvhd.com.br/catto5860/catto5860/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión RLOTV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 224
    },
    {
      "id": "cl-tv-rtc-television",
      "name": "RTC Television",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1136_RTC_Television.png",
      "streamUrl": "https://scl.edge.grupoz.cl/rtcstreaming/live/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://scl.edge.grupoz.cl/rtcstreaming/live/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión RTC Television disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 225
    },
    {
      "id": "cl-tv-rtv",
      "name": "RTV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1602_RTV.png",
      "streamUrl": "https://origin-us.streaminghd.cl/rtv/rtv/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://origin-us.streaminghd.cl/rtv/rtv/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión RTV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 226
    },
    {
      "id": "cl-tv-ruidos-fm",
      "name": "Ruidos FM",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1716_Ruidos_FM.png",
      "streamUrl": "https://tv1.ruidosfm.cl/ruidosfm/stream.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://tv1.ruidosfm.cl/ruidosfm/stream.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Ruidos FM disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 227
    },
    {
      "id": "cl-tv-ruidos-tv",
      "name": "Ruidos TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/13_Ruidos_TV.png",
      "streamUrl": "https://tv1.ruidosfm.cl/ruidostv/stream.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://tv1.ruidosfm.cl/ruidostv/stream.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Ruidos TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 228
    },
    {
      "id": "cl-tv-sabor-tv",
      "name": "Sabor TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/416_Sabor_TV.png",
      "streamUrl": "https://v1.tustreaming.cl/sabortv/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://v1.tustreaming.cl/sabortv/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Sabor TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 229
    },
    {
      "id": "cl-tv-sabrosona-tv",
      "name": "Sabrosona TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1541_Sabrosona_TV.png",
      "streamUrl": "https://samson.streamerr.co:8081/sabrosonavideo/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://samson.streamerr.co:8081/sabrosonavideo/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Sabrosona TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 230
    },
    {
      "id": "cl-tv-san-nicolas-tv",
      "name": "San Nicolas TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1700_San_Nicolas_TV.png",
      "streamUrl": "https://v4.tustreaming.cl/sannicolastv/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://v4.tustreaming.cl/sannicolastv/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión San Nicolas TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 231
    },
    {
      "id": "cl-tv-san-pedro-conecta",
      "name": "San Pedro Conecta",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/948_San_Pedro_Conecta.png",
      "streamUrl": "https://video.ipstream.cl:3710/hybrid/play.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://video.ipstream.cl:3710/hybrid/play.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión San Pedro Conecta disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 232
    },
    {
      "id": "cl-tv-santa-cruz-fm",
      "name": "Santa Cruz FM",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1309_Santa_Cruz_FM.png",
      "streamUrl": "https://unlimited1-cl-isp.dps.live/rcruz/rcruz.smil/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://unlimited1-cl-isp.dps.live/rcruz/rcruz.smil/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": true
        }
      ],
      "website": "",
      "description": "Canal de televisión Santa Cruz FM disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 233
    },
    {
      "id": "cl-tv-santa-cruz-hd",
      "name": "Santa Cruz HD",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1607_Santa_Cruz_HD.png",
      "streamUrl": "https://origin-us.streaminghd.cl/santacruz/santacruz/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://origin-us.streaminghd.cl/santacruz/santacruz/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Santa Cruz HD disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 234
    },
    {
      "id": "cl-tv-santamariatv",
      "name": "Santa María TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Región de Aysén del G. Carlos Ibáñez del Campo",
      "city": "Coyhaique",
      "genre": "Regional",
      "isNational": false,
      "logo": "./img/logos/cl-tv-santamariatv.svg",
      "streamUrl": "https://unlimited2-cl-isp.dps.live/smtv/smtv.smil/playlist.m3u8",
      "backupStreamUrl": "https://v2.tustreaming.cl/canal11aysen/index.m3u8",
      "website": "https://radiosantamaria.cl",
      "description": "Canal regional que une a las comunidades de la Región de Aysén.",
      "embedUrl": "https://radiosantamaria.cl",
      "channelNumber": 235,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://unlimited2-cl-isp.dps.live/smtv/smtv.smil/playlist.m3u8",
          "needsProxy": true
        },
        {
          "name": "Fuente 2 (Respaldo Oficial)",
          "url": "https://v2.tustreaming.cl/canal11aysen/index.m3u8",
          "needsProxy": false
        },
        {
          "name": "Fuente 3 (M3U Alternativa)",
          "url": "https://unlimited2-cl-isp.dps.live/smtv/smtv.smil/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": true
        }
      ]
    },
    {
      "id": "cl-tv-senadotv",
      "name": "Senado TV Chile",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Región de Valparaíso",
      "city": "Valparaíso",
      "genre": "Política",
      "isNational": true,
      "logo": "./img/logos/cl-tv-senadotv.svg",
      "streamUrl": "https://janus-tv-ply.senado.cl/playlist/playlist.m3u8",
      "backupStreamUrl": "https://tls-cl.cdnz.cl/streamdiptudadosa/live/playlist.m3u8",
      "website": "https://tv.senado.cl",
      "description": "Señal oficial de las sesiones legislativas y comisiones del Senado de la República.",
      "embedUrl": "https://tv.senado.cl",
      "channelNumber": 236,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://janus-tv-ply.senado.cl/playlist/playlist.m3u8",
          "needsProxy": false
        },
        {
          "name": "Fuente 2 (Respaldo Oficial)",
          "url": "https://tls-cl.cdnz.cl/streamdiptudadosa/live/playlist.m3u8",
          "needsProxy": false
        }
      ]
    },
    {
      "id": "cl-tv-sensacion-costa",
      "name": "Sensacion Costa",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/849_Sensacion_Costa.png",
      "streamUrl": "https://tvcosta.gleeze.com/memfs/4d48db09-0b1e-4803-8da7-22be388bdd7e.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://tvcosta.gleeze.com/memfs/4d48db09-0b1e-4803-8da7-22be388bdd7e.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Sensacion Costa disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 237
    },
    {
      "id": "cl-tv-sextavision",
      "name": "Sextavisión",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Región del Libertador G. Bernardo O'Higgins",
      "city": "Rancagua",
      "genre": "Regional",
      "isNational": false,
      "logo": "./img/logos/cl-tv-sextavision.svg",
      "streamUrl": "https://5ff3d9babae13.streamlock.net/8028/8028/playlist.m3u8",
      "backupStreamUrl": "https://5ff3d9babae13.streamlock.net/wympnqeqts/wympnqeqts/playlist.m3u8",
      "website": "https://www.sextavision.cl",
      "description": "Televisión de Rancagua y las provincias de Cachapoal, Colchagua y Cardenal Caro.",
      "embedUrl": "https://sextavision.cl",
      "channelNumber": 238,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://5ff3d9babae13.streamlock.net/8028/8028/playlist.m3u8",
          "needsProxy": false
        },
        {
          "name": "Fuente 2 (Respaldo Oficial)",
          "url": "https://5ff3d9babae13.streamlock.net/wympnqeqts/wympnqeqts/playlist.m3u8",
          "needsProxy": false
        },
        {
          "name": "Fuente 3 (M3U Alternativa)",
          "url": "https://5ff3d9babae13.streamlock.net/fzkqsdfray/fzkqsdfray/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ]
    },
    {
      "id": "cl-tv-showtimetv",
      "name": "ShowtimeTV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1796_ShowtimeTV.png",
      "streamUrl": "https://stmv7.voxtvhd.com.br/showtimetv/showtimetv/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://stmv7.voxtvhd.com.br/showtimetv/showtimetv/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión ShowtimeTV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 239
    },
    {
      "id": "cl-tv-soberania-radio",
      "name": "Soberania Radio",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/370_Soberania_Radio.png",
      "streamUrl": "https://tls-cl.cdnz.cl/radiosoberania/live/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://tls-cl.cdnz.cl/radiosoberania/live/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Soberania Radio disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 240
    },
    {
      "id": "cl-tv-solotv",
      "name": "SoloTV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1762_SoloTV.png",
      "streamUrl": "https://stream.making.cl/memfs/ee909361-73e9-4e74-8391-5f1b0b8006c2.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://stream.making.cl/memfs/ee909361-73e9-4e74-8391-5f1b0b8006c2.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión SoloTV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 241
    },
    {
      "id": "cl-tv-supersonika-tv",
      "name": "Supersonika TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/349_Supersonika_TV.png",
      "streamUrl": "https://unlimited1-cl-isp.dps.live/supersonikatv/supersonikatv.smil/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://unlimited1-cl-isp.dps.live/supersonikatv/supersonikatv.smil/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": true
        }
      ],
      "website": "",
      "description": "Canal de televisión Supersonika TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 242
    },
    {
      "id": "cl-tv-surtv",
      "name": "SurTV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1116_SurTV.png",
      "streamUrl": "https://surtv-2.mddsoluciones.cl/play/ZZZ-M3U-CL:79W62zMmFSbBFoIE/live/surtvweb/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://surtv-2.mddsoluciones.cl/play/ZZZ-M3U-CL:79W62zMmFSbBFoIE/live/surtvweb/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión SurTV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 243
    },
    {
      "id": "cl-tv-suyai-radio",
      "name": "Suyai Radio",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1611_Suyai_Radio.png",
      "streamUrl": "https://trun.suyaitv.cl/memfs/d0835165-7fb4-4982-8336-84a7f4522908.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://trun.suyaitv.cl/memfs/d0835165-7fb4-4982-8336-84a7f4522908.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Suyai Radio disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 244
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
      "id": "cl-tv-t-vinet",
      "name": "T-Vinet",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/84_T_Vinet.png",
      "streamUrl": "https://unlimited1-cl-isp.dps.live/inet2/inet2.smil/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://unlimited1-cl-isp.dps.live/inet2/inet2.smil/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": true
        }
      ],
      "website": "",
      "description": "Canal de televisión T-Vinet disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 246
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
      "id": "cl-tv-t13-radio",
      "name": "T13 Radio",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1198_T13_Radio.png",
      "streamUrl": "https://unlimited1-cl-isp.dps.live/t13radio/t13radio.smil/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://unlimited1-cl-isp.dps.live/t13radio/t13radio.smil/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": true
        }
      ],
      "website": "",
      "description": "Canal de televisión T13 Radio disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 248
    },
    {
      "id": "cl-tv-teleangol-radio",
      "name": "Teleangol Radio",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/82_Teleangol_Radio.png",
      "streamUrl": "https://pantera1-100gb-cl-movistar.dps.live/teleangol/teleangol.smil/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://pantera1-100gb-cl-movistar.dps.live/teleangol/teleangol.smil/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": true
        }
      ],
      "website": "",
      "description": "Canal de televisión Teleangol Radio disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 249
    },
    {
      "id": "cl-tv-telecanal-santa-cruz",
      "name": "Telecanal Santa Cruz",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1025_Telecanal_Santa_Cruz.png",
      "streamUrl": "https://origin-us.streaminghd.cl/telecanal/telecanal/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://origin-us.streaminghd.cl/telecanal/telecanal/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Telecanal Santa Cruz disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 250
    },
    {
      "id": "cl-tv-telecauquenes",
      "name": "Telecauquenes",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1302_Telecauquenes.png",
      "streamUrl": "https://live20.bozztv.com/akamaissh101/ssh101/telecauquenestv/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://live20.bozztv.com/akamaissh101/ssh101/telecauquenestv/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Telecauquenes disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 251
    },
    {
      "id": "cl-tv-teleovalle",
      "name": "TeleOvalle",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1625_TeleOvalle.png",
      "streamUrl": "https://v2.tustreaming.cl/teleovalle/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://v2.tustreaming.cl/teleovalle/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión TeleOvalle disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 252
    },
    {
      "id": "cl-tv-teletrak-1",
      "name": "Teletrak",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/376_Teletrak.png",
      "streamUrl": "https://teletraktv.janus.cl/playlist/stream.m3u8?t=0&s=&p=&id=lufuufsd&d=w&PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://teletraktv.janus.cl/playlist/stream.m3u8?t=0&s=&p=&id=lufuufsd&d=w&PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Teletrak disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 253
    },
    {
      "id": "cl-tv-teletrak",
      "name": "Teletrak TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Región Metropolitana",
      "city": "Santiago",
      "genre": "Deportes",
      "isNational": true,
      "logo": "./img/logos/cl-tv-teletrak.svg",
      "streamUrl": "https://teletraktv.janus.cl/playlist/stream.m3u8?t=0&s=&p=&id=lufuufsd&d=w",
      "backupStreamUrl": "https://unlimited1-cl-isp.dps.live/sportinghd/sportinghd.smil/playlist.m3u8",
      "website": "https://www.teletrak.cl",
      "description": "Señal de deportes hípicos con transmisiones en directo de carreras del Club Hípico de Santiago, Hipódromo Chile y Valparaíso Sporting.",
      "embedUrl": "https://www.teletrak.cl",
      "channelNumber": 254,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://teletraktv.janus.cl/playlist/stream.m3u8?t=0&s=&p=&id=lufuufsd&d=w",
          "needsProxy": false
        },
        {
          "name": "Fuente 2 (Respaldo Oficial)",
          "url": "https://unlimited1-cl-isp.dps.live/sportinghd/sportinghd.smil/playlist.m3u8",
          "needsProxy": true
        }
      ]
    },
    {
      "id": "cl-tv-televida-hd",
      "name": "Televida HD",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/169_Televida_HD.png",
      "streamUrl": "https://tls-cl.cdnz.cl/televida/live/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://tls-cl.cdnz.cl/televida/live/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Televida HD disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 255
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
      "id": "cl-tv-temuco-tv",
      "name": "Temuco TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/357_Temuco_TV.png",
      "streamUrl": "https://mediacp.nnw.cl:19360/temucotelevision/temucotelevision.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://mediacp.nnw.cl:19360/temucotelevision/temucotelevision.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Temuco TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 257
    },
    {
      "id": "cl-tv-tendencias-prime",
      "name": "Tendencias Prime",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/336_Tendencias_Prime.png",
      "streamUrl": "https://v4.tustreaming.cl/tendenciastv/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://v4.tustreaming.cl/tendenciastv/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Tendencias Prime disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 258
    },
    {
      "id": "cl-tv-tevex",
      "name": "Tevex",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/438_Tevex.png",
      "streamUrl": "https://v2.tustreaming.cl/tevex/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://v2.tustreaming.cl/tevex/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Tevex disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 259
    },
    {
      "id": "cl-tv-thematv",
      "name": "ThemaTV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/326_ThemaTV.png",
      "streamUrl": "https://unlimited1-cl-isp.dps.live/thema/thema.smil/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://unlimited1-cl-isp.dps.live/thema/thema.smil/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": true
        }
      ],
      "website": "",
      "description": "Canal de televisión ThemaTV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 260
    },
    {
      "id": "cl-tv-tne",
      "name": "TNE",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/168_TNE.png",
      "streamUrl": "https://v2.tustreaming.cl/tnetv/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://v2.tustreaming.cl/tnetv/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión TNE disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 261
    },
    {
      "id": "cl-tv-top-new-radio",
      "name": "Top New Radio",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/973_Top_New_Radio.png",
      "streamUrl": "https://5ff3d9babae13.streamlock.net:443/dxwdsmgesp/dxwdsmgesp/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://5ff3d9babae13.streamlock.net:443/dxwdsmgesp/dxwdsmgesp/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Top New Radio disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 262
    },
    {
      "id": "cl-tv-tributo-valentina",
      "name": "Tributo Valentina",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/786_Tributo_Valentina.png",
      "streamUrl": "https://vdochile.com:3795/hybrid/play.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://vdochile.com:3795/hybrid/play.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Tributo Valentina disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 263
    },
    {
      "id": "cl-tv-tropical-ranchero",
      "name": "Tropical Ranchero",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1660_Tropical_Ranchero.png",
      "streamUrl": "https://radioxxx.ddns.net/hls/stream.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://radioxxx.ddns.net/hls/stream.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Tropical Ranchero disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 264
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
      "id": "cl-tv-tutv",
      "name": "TuTV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1704_TuTV.png",
      "streamUrl": "https://vdochile.com:3775/hybrid/play.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://vdochile.com:3775/hybrid/play.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión TuTV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 267
    },
    {
      "id": "cl-tv-tv-5-linares",
      "name": "TV 5 Linares",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/80_TV_5_Linares.png",
      "streamUrl": "https://v1.tustreaming.cl/tv5linares/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://v1.tustreaming.cl/tv5linares/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión TV 5 Linares disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 268
    },
    {
      "id": "cl-tv-tv-bajo-cero",
      "name": "TV Bajo Cero",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1676_TV_Bajo_Cero.png",
      "streamUrl": "https://tv.arkeo.cl:1936/tvbajocero/tvbajocero/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://tv.arkeo.cl:1936/tvbajocero/tvbajocero/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión TV Bajo Cero disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 269
    },
    {
      "id": "cl-tv-tv-catedral-de-la-florida",
      "name": "Tv Catedral de la Florida",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1714_Tv_Catedral_de_la_Florida.png",
      "streamUrl": "https://live20.bozztv.com/akamaissh101/ssh101/asjdksa/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://live20.bozztv.com/akamaissh101/ssh101/asjdksa/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Tv Catedral de la Florida disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 270
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
      "id": "cl-tv-tv-costa",
      "name": "TV Costa",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/332_TV_Costa.png",
      "streamUrl": "https://tvcosta.gleeze.com/memfs/39cef946-1aac-4418-8df8-6d8ff6d0a680.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://tvcosta.gleeze.com/memfs/39cef946-1aac-4418-8df8-6d8ff6d0a680.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión TV Costa disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 272
    },
    {
      "id": "cl-tv-tv-elqui",
      "name": "TV Elqui",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/329_TV_Elqui.png",
      "streamUrl": "https://panel.tvstream.cl:1936/campu/campu/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://panel.tvstream.cl:1936/campu/campu/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión TV Elqui disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 273
    },
    {
      "id": "cl-tv-tv-lascabras-net",
      "name": "TV Lascabras.net",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1572_TV_Lascabras_net.png",
      "streamUrl": "https://vivo.solumedia.com:19360/lascabrastv/lascabrastv.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://vivo.solumedia.com:19360/lascabrastv/lascabrastv.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión TV Lascabras.net disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 274
    },
    {
      "id": "cl-tv-tv-quinta-region",
      "name": "TV Quinta Region",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/854_TV_Quinta_Region.png",
      "streamUrl": "https://stmv7.voxtvhd.com.br/tvquintaregion/tvquintaregion/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://stmv7.voxtvhd.com.br/tvquintaregion/tvquintaregion/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión TV Quinta Region disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 275
    },
    {
      "id": "cl-tv-tv-salud",
      "name": "TV Salud",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/436_TV_Salud.png",
      "streamUrl": "https://stmv4.voxtvhd.com.br/rodrigo9120/rodrigo9120/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://stmv4.voxtvhd.com.br/rodrigo9120/rodrigo9120/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión TV Salud disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 276
    },
    {
      "id": "cl-tv-tv-senado",
      "name": "TV Senado",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/444_TV_Senado.png",
      "streamUrl": "https://janus-tv-ply.senado.cl/playlist/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://janus-tv-ply.senado.cl/playlist/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión TV Senado disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 277
    },
    {
      "id": "cl-tv-tv-turf",
      "name": "TV Turf",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/374_TV_Turf.png",
      "streamUrl": "https://tvturf4.janus.cl/playlist/stream.m3u8?d=w&id=lufv0n9d&t=1711909093&q=2&s=sd&PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://tvturf4.janus.cl/playlist/stream.m3u8?d=w&id=lufv0n9d&t=1711909093&q=2&s=sd&PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión TV Turf disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 278
    },
    {
      "id": "cl-tv-tv-uct",
      "name": "TV UCT",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/802_TV_UCT.png",
      "streamUrl": "https://unlimited2-cl-isp.dps.live/uct/uct.smil/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://unlimited2-cl-isp.dps.live/uct/uct.smil/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": true
        }
      ],
      "website": "",
      "description": "Canal de televisión TV UCT disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 279
    },
    {
      "id": "cl-tv-tv-usach",
      "name": "TV USACH",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/53_TV_USACH.png",
      "streamUrl": "https://stv4.janus.cl/playlist/stream.m3u8?s=lq&t=&id=luflljxo&q=&d=w&PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://stv4.janus.cl/playlist/stream.m3u8?s=lq&t=&id=luflljxo&q=&d=w&PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión TV USACH disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 280
    },
    {
      "id": "cl-tv-tv-valdivia",
      "name": "TV Valdivia",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1793_TV_Valdivia.png",
      "streamUrl": "https://5eaccbab48461.streamlock.net:1936/8206/8206/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://5eaccbab48461.streamlock.net:1936/8206/8206/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión TV Valdivia disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 281
    },
    {
      "id": "cl-tv-tv-vconline-cl",
      "name": "TV vconline.cl",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/34_TV_vconline_cl.png",
      "streamUrl": "https://panel.tvstream.cl:1936/8024/8024/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://panel.tvstream.cl:1936/8024/8024/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión TV vconline.cl disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 282
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
      "id": "cl-tv-tvm",
      "name": "TVM",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1293_TVM.png",
      "streamUrl": "https://stream.skarnetchile.com:19360/canaltvm/canaltvm.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://stream.skarnetchile.com:19360/canaltvm/canaltvm.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión TVM disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 284
    },
    {
      "id": "cl-tv-tvmas2",
      "name": "TVMas2",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1243_TVMas2.png",
      "streamUrl": "https://marine2.miplay.cl/tateti/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://marine2.miplay.cl/tateti/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión TVMas2 disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 285
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
      "id": "cl-tv-tvo-san-vicente",
      "name": "TVO San Vicente",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/340_TVO_San_Vicente.png",
      "streamUrl": "https://5ff3d9babae13.streamlock.net:443/8014/8014/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://5ff3d9babae13.streamlock.net:443/8014/8014/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión TVO San Vicente disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 288
    },
    {
      "id": "cl-tv-tvr",
      "name": "TVR",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/77_TVR.png",
      "streamUrl": "https://unlimited1-cl-isp.dps.live/tvr/tvr.smil/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://unlimited1-cl-isp.dps.live/tvr/tvr.smil/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": true
        }
      ],
      "website": "",
      "description": "Canal de televisión TVR disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 289
    },
    {
      "id": "cl-tv-tvu",
      "name": "TVU (Universidad de Concepción)",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Región del Biobío",
      "city": "Concepción",
      "genre": "Cultura",
      "isNational": false,
      "logo": "./img/logos/cl-tv-tvu.svg",
      "streamUrl": "https://unlimited1-cl-isp.dps.live/tvu/tvu.smil/playlist.m3u8",
      "backupStreamUrl": "https://unlimited6-cl.dps.live/c9/c9.smil/playlist.m3u8",
      "website": "https://www.tvu.cl",
      "description": "Televisión de la Universidad de Concepción, con contenidos culturales, científicos y de actualidad.",
      "embedUrl": "https://www.tvu.cl",
      "channelNumber": 290,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://unlimited1-cl-isp.dps.live/tvu/tvu.smil/playlist.m3u8",
          "needsProxy": true
        },
        {
          "name": "Fuente 2 (Respaldo Oficial)",
          "url": "https://unlimited6-cl.dps.live/c9/c9.smil/playlist.m3u8",
          "needsProxy": true
        },
        {
          "name": "Fuente 3 (M3U Alternativa)",
          "url": "https://unlimited1-cl-isp.dps.live/tvu/tvu.smil/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": true
        }
      ]
    },
    {
      "id": "cl-tv-uatv",
      "name": "UATV (Universidad Autónoma)",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Región de La Araucanía",
      "city": "Temuco",
      "genre": "Regional",
      "isNational": false,
      "logo": "./img/logos/cl-tv-uatv.svg",
      "streamUrl": "https://unlimited2-cl-isp.dps.live/uct/uct.smil/playlist.m3u8",
      "backupStreamUrl": "https://mdstrm.com/live-stream-playlist/580a80b827de0ae2086ea6d8.m3u8",
      "website": "https://uatv.cl",
      "description": "Canal de televisión de Temuco y la Región de La Araucanía.",
      "embedUrl": "https://uatv.cl",
      "channelNumber": 291,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://unlimited2-cl-isp.dps.live/uct/uct.smil/playlist.m3u8",
          "needsProxy": true
        },
        {
          "name": "Fuente 2 (Respaldo Oficial)",
          "url": "https://mdstrm.com/live-stream-playlist/580a80b827de0ae2086ea6d8.m3u8",
          "needsProxy": false
        }
      ]
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
      "id": "cl-tv-ucvtv",
      "name": "UCV TV (Valparaíso)",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Región de Valparaíso",
      "city": "Valparaíso",
      "genre": "Cultura",
      "isNational": false,
      "logo": "./img/logos/cl-tv-ucvtv.svg",
      "streamUrl": "https://unlimited2-cl-isp.dps.live/ucvtv2/ucvtv2.smil/playlist.m3u8",
      "backupStreamUrl": "https://unlimited1-cl-isp.dps.live/ucvtveventos/ucvtveventos.smil/playlist.m3u8",
      "website": "https://www.ucvtv.cl",
      "description": "Canal histórico de la Pontificia Universidad Católica de Valparaíso.",
      "embedUrl": "https://ucvtv.cl",
      "channelNumber": 294,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://unlimited2-cl-isp.dps.live/ucvtv2/ucvtv2.smil/playlist.m3u8",
          "needsProxy": true
        },
        {
          "name": "Fuente 2 (Respaldo Oficial)",
          "url": "https://unlimited1-cl-isp.dps.live/ucvtveventos/ucvtveventos.smil/playlist.m3u8",
          "needsProxy": true
        },
        {
          "name": "Fuente 3 (M3U Alternativa)",
          "url": "https://unlimited2-cl-isp.dps.live/ucvtv2/ucvtv2.smil/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": true
        }
      ]
    },
    {
      "id": "cl-tv-uestv",
      "name": "UesTV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/62_UesTV.png",
      "streamUrl": "https://stream.castr.com/627c69e631b96a3b9b99c2db/live_14ff24d0ed9911f0bad5c55033ee00d0/rewind-3600.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://stream.castr.com/627c69e631b96a3b9b99c2db/live_14ff24d0ed9911f0bad5c55033ee00d0/rewind-3600.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión UesTV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 295
    },
    {
      "id": "cl-tv-ufrotv",
      "name": "UFROTV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/57_UFROTV.png",
      "streamUrl": "https://mdstrm.com/live-stream-playlist/580a80b827de0ae2086ea6d8.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://mdstrm.com/live-stream-playlist/580a80b827de0ae2086ea6d8.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión UFROTV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 296
    },
    {
      "id": "cl-tv-ulagos-tv",
      "name": "ULagos TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/59_ULagos_TV.png",
      "streamUrl": "https://tv.ulagos.cl/web/live.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://tv.ulagos.cl/web/live.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión ULagos TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 297
    },
    {
      "id": "cl-tv-umag-tv",
      "name": "UMAG TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/60_UMAG_TV.png",
      "streamUrl": "https://tls-cl.cdnz.cl/umag1/ngrp:live_all/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://tls-cl.cdnz.cl/umag1/ngrp:live_all/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión UMAG TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 298
    },
    {
      "id": "cl-tv-umag-tv-2",
      "name": "UMAG TV 2",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/61_UMAG_TV_2.png",
      "streamUrl": "https://tls-cl.cdnz.cl/umag2/live/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://tls-cl.cdnz.cl/umag2/live/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión UMAG TV 2 disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 299
    },
    {
      "id": "cl-tv-unetev",
      "name": "Unetev",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1314_Unetev.png",
      "streamUrl": "https://tv.arkeo.cl:1936/unetev/unetev/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://tv.arkeo.cl:1936/unetev/unetev/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Unetev disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 300
    },
    {
      "id": "cl-tv-uniregion-tv",
      "name": "Uniregion TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1715_Uniregion_TV.png",
      "streamUrl": "https://5ff3d9babae13.streamlock.net:443/ubyecbxnfd/ubyecbxnfd/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://5ff3d9babae13.streamlock.net:443/ubyecbxnfd/ubyecbxnfd/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Uniregion TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 301
    },
    {
      "id": "cl-tv-urban-pro-dj",
      "name": "Urban Pro DJ",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1476_Urban_Pro_DJ.png",
      "streamUrl": "https://vdochile.com:3115/hybrid/play.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://vdochile.com:3115/hybrid/play.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Urban Pro DJ disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 302
    },
    {
      "id": "cl-tv-utalcatv",
      "name": "UTalcaTV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/55_UTalcaTV.png",
      "streamUrl": "https://unlimited1-cl-isp.dps.live/campustv/campustv.smil/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://unlimited1-cl-isp.dps.live/campustv/campustv.smil/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": true
        }
      ],
      "website": "",
      "description": "Canal de televisión UTalcaTV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 303
    },
    {
      "id": "cl-tv-utv-san-clemente",
      "name": "UTV San Clemente",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/345_UTV_San_Clemente.png",
      "streamUrl": "https://v2.tustreaming.cl/utv/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://v2.tustreaming.cl/utv/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión UTV San Clemente disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 304
    },
    {
      "id": "cl-tv-valparaiso-sporting",
      "name": "Valparaiso Sporting",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Deportes",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/375_Valparaiso_Sporting.png",
      "streamUrl": "https://unlimited1-cl-isp.dps.live/sportinghd/sportinghd.smil/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://unlimited1-cl-isp.dps.live/sportinghd/sportinghd.smil/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": true
        }
      ],
      "website": "",
      "description": "Canal de televisión Valparaiso Sporting disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 305
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
      "id": "cl-tv-verso-tv",
      "name": "Verso TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1668_Verso_TV.png",
      "streamUrl": "https://verso.coopcom.cl/live/SHf6GLCpn4hDSpWdzaDzgX0ciU82/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://verso.coopcom.cl/live/SHf6GLCpn4hDSpWdzaDzgX0ciU82/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Verso TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 308
    },
    {
      "id": "cl-tv-verticetv",
      "name": "Vértice TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Región de Los Lagos",
      "city": "Puerto Montt",
      "genre": "Regional",
      "isNational": false,
      "logo": "./img/logos/cl-tv-verticetv.svg",
      "streamUrl": "https://5ff3d9babae13.streamlock.net/aufymdjpjf/aufymdjpjf/playlist.m3u8",
      "backupStreamUrl": "https://unlimited2-cl-isp.dps.live/decimatv/decimatv.smil/playlist.m3u8",
      "website": "https://www.verticetv.cl",
      "description": "Canal regional transmitiendo desde Puerto Montt para la Región de Los Lagos.",
      "embedUrl": "https://www.verticetv.cl",
      "channelNumber": 309,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://5ff3d9babae13.streamlock.net/aufymdjpjf/aufymdjpjf/playlist.m3u8",
          "needsProxy": false
        },
        {
          "name": "Fuente 2 (Respaldo Oficial)",
          "url": "https://unlimited2-cl-isp.dps.live/decimatv/decimatv.smil/playlist.m3u8",
          "needsProxy": true
        }
      ]
    },
    {
      "id": "cl-tv-vida-tv",
      "name": "Vida TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/161_Vida_TV.png",
      "streamUrl": "https://player.netv.cl/vidatv/index.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://player.netv.cl/vidatv/index.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Vida TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 310
    },
    {
      "id": "cl-tv-vision-plus-tv",
      "name": "Vision Plus TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1024_Vision_Plus_TV.png",
      "streamUrl": "https://5ff3d9babae13.streamlock.net/jwagpqxehu/jwagpqxehu/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://5ff3d9babae13.streamlock.net/jwagpqxehu/jwagpqxehu/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Vision Plus TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 311
    },
    {
      "id": "cl-tv-vision-tv",
      "name": "Vision TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/361_Vision_TV.png",
      "streamUrl": "https://tv.arkeo.cl:1936/8044/8044/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://tv.arkeo.cl:1936/8044/8044/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Vision TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 312
    },
    {
      "id": "cl-tv-vltv",
      "name": "VLTV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/343_VLTV.png",
      "streamUrl": "https://andromeda2.trapemn.tv:1936/regionales/vltv.stream/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://andromeda2.trapemn.tv:1936/regionales/vltv.stream/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión VLTV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 313
    },
    {
      "id": "cl-tv-voces-del-fuego",
      "name": "Voces del Fuego",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1787_Voces_del_Fuego.png",
      "streamUrl": "https://stmv2.voxtvhd.com.br/vocesdelfuego/vocesdelfuego/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://stmv2.voxtvhd.com.br/vocesdelfuego/vocesdelfuego/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Voces del Fuego disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 314
    },
    {
      "id": "cl-tv-vtv",
      "name": "VTV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/335_VTV.png",
      "streamUrl": "https://unlimited2-cl-isp.dps.live/vtv/vtv.smil/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://unlimited2-cl-isp.dps.live/vtv/vtv.smil/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": true
        }
      ],
      "website": "",
      "description": "Canal de televisión VTV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 315
    },
    {
      "id": "cl-tv-vtv-quillota",
      "name": "VTV Quillota",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/73_VTV_Quillota.png",
      "streamUrl": "https://unlimited1-cl-isp.dps.live/vtvquillota/vtvquillota.smil/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://unlimited1-cl-isp.dps.live/vtvquillota/vtvquillota.smil/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": true
        }
      ],
      "website": "",
      "description": "Canal de televisión VTV Quillota disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 316
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
      "id": "cl-tv-wf9",
      "name": "WF9",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1474_WF9.png",
      "streamUrl": "https://5eaccbab48461.streamlock.net:1936/8240/8240/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://5eaccbab48461.streamlock.net:1936/8240/8240/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión WF9 disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 318
    },
    {
      "id": "cl-tv-zona-play-radio",
      "name": "Zona Play Radio",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "Música",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/387_Zona_Play_Radio.png",
      "streamUrl": "https://tv1.mediacp.eu:3131/live/dilxbgxylive.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://tv1.mediacp.eu:3131/live/dilxbgxylive.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Zona Play Radio disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 319
    },
    {
      "id": "cl-tv-zona-sur-tv",
      "name": "Zona Sur TV",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1664_Zona_Sur_TV.png",
      "streamUrl": "https://5ff3d9babae13.streamlock.net:443/tvtumqsfdn/tvtumqsfdn/playlist.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://5ff3d9babae13.streamlock.net:443/tvtumqsfdn/tvtumqsfdn/playlist.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Zona Sur TV disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 320
    },
    {
      "id": "cl-tv-zoom-tecnologico-plus",
      "name": "Zoom Tecnologico Plus",
      "type": "tv",
      "country": "CL",
      "countryName": "Chile",
      "region": "Chile",
      "city": "Chile",
      "genre": "General",
      "isNational": false,
      "logo": "https://cdn.m3u.cl/logo/1617_Zoom_Tecnologico_Plus.png",
      "streamUrl": "https://vivo.cdnvid.com/zoomtecnologico.m3u8?PlaylistM3UCL",
      "backupStreamUrl": null,
      "sources": [
        {
          "name": "Fuente 1 (Principal)",
          "url": "https://vivo.cdnvid.com/zoomtecnologico.m3u8?PlaylistM3UCL",
          "needsProxy": false
        }
      ],
      "website": "",
      "description": "Canal de televisión Zoom Tecnologico Plus disponible en señal abierta y web streaming de Chile.",
      "status": "online",
      "channelNumber": 321
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
      "streamUrl": "https://unlimited3-cl.dps.live/biobioconcepcion/mp3/icecast.audio",
      "backupStreamUrl": "https://unlimited3-cl.dps.live/biobioconcepcion/aac/icecast.audio",
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
      "streamUrl": "https://unlimited3-cl.dps.live/biobiopuertomontt/mp3/icecast.audio",
      "backupStreamUrl": "https://unlimited3-cl.dps.live/biobiopuertomontt/aac/icecast.audio",
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
      "streamUrl": "https://unlimited3-cl.dps.live/biobiovaldivia/mp3/icecast.audio",
      "backupStreamUrl": "https://unlimited3-cl.dps.live/biobiovaldivia/aac/icecast.audio",
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
      "backupStreamUrl": "https://26583.live.streamtheworld.com/ADNAAC.aac",
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
      "backupStreamUrl": "https://26583.live.streamtheworld.com/FUTUROAAC.aac",
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
      "backupStreamUrl": "https://26583.live.streamtheworld.com/ROCK_AND_POPAAC.aac",
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
      "backupStreamUrl": "https://26583.live.streamtheworld.com/CORAZONAAC.aac",
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
      "backupStreamUrl": "https://26583.live.streamtheworld.com/PUDAHUELAAC.aac",
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
      "backupStreamUrl": "https://26583.live.streamtheworld.com/FMDOSAAC.aac",
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

    // Audio Element para Radios (sin crossOrigin para evitar bloqueos en Icecast)
    this.audioElement = new Audio();
    this.audioElement.id = 'radioAudioPlayer';
    this.audioElement.setAttribute('playsinline', '');
    this.audioElement.setAttribute('webkit-playsinline', '');
    this.audioElement.preload = 'none';

    // Declarar duration Infinity para que WebKit/iOS trate el audio como emisión EN VIVO sin barra de tiempo
    try {
      Object.defineProperty(this.audioElement, 'duration', {
        get: () => Infinity,
        configurable: true
      });
    } catch (e) {}

    // Configuración nativa de sesión de audio para iOS Safari 16.4+ (modo background playback)
    if ('audioSession' in navigator) {
      try {
        navigator.audioSession.type = 'playback';
      } catch (e) {}
    }

    // Variables de resiliencia y reconexión ante llamadas e interrupciones de señal 4G/5G
    this.isUserPaused = false;
    this.isInterrupted = false;
    this.isNetworkStalled = false;
    this.isReconnecting = false;
    this.isReloading = false;
    this.reconnectAttempts = 0;
    this.reconnectTimer = null;
    this.watchdogTimer = null;
    this.stallTimer = null;
    this.interruptionPollTimer = null;
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
      .sort((a, b) => a.name.localeCompare(b.name, 'es', { sensitivity: 'base' }));
    this.radioStations = allStations.filter(s => s.type === 'radio');
    this.renderTvGuide();
    this.renderRadioQuickScrollTray();
    this.renderFullscreenRadioTray();
  }

  initZappingSidebarEvents() {
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

    // Delegación de clics y doble clics en la Guía Lateral (Rendimiento 60 FPS sin lag)
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

      this.dom.zappingChannelList.addEventListener('dblclick', (e) => {
        const item = e.target.closest('.zapping-ch-item');
        if (!item) return;
        e.preventDefault();
        const id = item.getAttribute('data-id');
        const st = this.tvStations.find(s => s.id === id);
        if (st && (!this.currentStation || this.currentStation.id !== id)) {
          this.playTv(st);
        }
        if (!this.isFullscreenActive()) {
          this.enterFullscreenCrossBrowser();
        } else {
          this.toggleFullscreenSidebar(false);
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

      this.dom.zappingFsChannelList.addEventListener('dblclick', (e) => {
        const item = e.target.closest('.zapping-ch-item');
        if (!item) return;
        e.preventDefault();
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
    const shouldShow = forceState !== null ? forceState : this.dom.zappingSidebar.classList.contains('is-collapsed');
    if (shouldShow) {
      this.dom.zappingSidebar.classList.remove('is-collapsed');
      if (this.dom.zappingSidebarToggleBtn) this.dom.zappingSidebarToggleBtn.textContent = '◀';
    } else {
      this.dom.zappingSidebar.classList.add('is-collapsed');
      if (this.dom.zappingSidebarToggleBtn) this.dom.zappingSidebarToggleBtn.textContent = '▶';
    }
  }

  toggleFullscreenSidebar(forceShow = null) {
    if (!this.dom.zappingSidebar) return;
    const isCurrentlyOpen = this.dom.zappingSidebar.classList.contains('is-open-fs');
    const shouldOpen = forceShow !== null ? forceShow : !isCurrentlyOpen;

    if (shouldOpen) {
      this.dom.zappingSidebar.classList.add('is-open-fs');
      this.dom.zappingSidebar.classList.remove('is-collapsed');
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
          next.scrollIntoView({ block: 'nearest' });
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
        activeItem.scrollIntoView({ block: 'nearest' });
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
        focusedItem.scrollIntoView({ block: 'nearest' });
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
      if (this.dom.tvLoading) this.dom.tvLoading.style.display = 'none';
      if (this.dom.tvFallbackOverlay) this.dom.tvFallbackOverlay.classList.add('is-hidden');
    });

    this.dom.tvVideo.addEventListener('playing', () => {
      this.clearConnectionWatchdog();
      if (this.dom.tvLoading) this.dom.tvLoading.style.display = 'none';
      if (this.dom.tvFallbackOverlay) this.dom.tvFallbackOverlay.classList.add('is-hidden');
    });

    this.dom.tvVideo.addEventListener('pause', () => {
      this.isPlaying = false;
      this.updateTvPlayIcon(false);
    });

    this.dom.tvVideo.addEventListener('waiting', () => {
      if (this.dom.tvLoading) this.dom.tvLoading.style.display = 'flex';
    });

    this.dom.tvVideo.addEventListener('loadeddata', () => {
      this.clearConnectionWatchdog();
      if (this.dom.tvLoading) this.dom.tvLoading.style.display = 'none';
      if (this.dom.tvFallbackOverlay) this.dom.tvFallbackOverlay.classList.add('is-hidden');
    });

    this.dom.tvVideo.addEventListener('canplay', () => {
      this.clearConnectionWatchdog();
      if (this.dom.tvLoading) this.dom.tvLoading.style.display = 'none';
      if (this.dom.tvFallbackOverlay) this.dom.tvFallbackOverlay.classList.add('is-hidden');
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
    if (this.dom.tvVideo.paused) {
      this.dom.tvVideo.play().catch(e => console.warn('Play prevenido:', e));
    } else {
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
        this.dom.tvSourceWrapper.style.display = 'inline-flex';
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

    this.currentStation = station;
    this.currentType = 'tv';
    this.fav.addToHistory(station);

    try {
      localStorage.setItem('antena_sur_last_tv_id', station.id);
    } catch (e) {}

    if (window.__antenaSurApp && typeof window.__antenaSurApp.updateHeroLastStationBadges === 'function') {
      window.__antenaSurApp.updateHeroLastStationBadges();
    }

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

    // Actualizar HUD superior del canal activo
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

    // Reiniciar selector de calidad a Auto
    if (this.dom.tvQualitySelect) {
      this.dom.tvQualitySelect.innerHTML = `<option value="-1">Auto (Adaptativa)</option>`;
    }
    if (this.dom.tvQualityWrapper) {
      this.dom.tvQualityWrapper.style.display = 'inline-flex';
    }

    // Si el canal está configurado para reproducción web incrustada (ej. Meganoticias Ahora 24/7)
    if (station.useIframe) {
      this.syncActiveChannelHighlight(station.id);
      this.switchToWebPlayer();
      this.updateMediaSession({
        title: station.name,
        artist: `Canal ${chNum} • ${station.city || 'Chile'} (${station.genre || 'En Vivo'})`,
        album: 'Antena Sur • Televisión Abierta de Chile',
        artwork: [
          { src: station.logo || './img/logos/cl-tv-tvn.svg', sizes: '512x512', type: 'image/svg+xml' }
        ]
      });
      return;
    }

    // Configurar y mostrar selector interactivo de fuentes (accesible en pantalla completa y HUD)
    this.updateSourceSelector(station, 0);

    // Actualizar canal activo en la guía lateral (0 ms de sobrecarga)
    this.syncActiveChannelHighlight(station.id);

    // Actualizar metadatos para Apple CarPlay, Android Auto y pantalla de bloqueo
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

    // Mostrar el selector en el HUD tanto en pantalla completa como en ventana normal
    this.dom.tvSourceWrapper.style.display = 'inline-flex';
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

    if (this.hls) {
      this.hls.destroy();
      this.hls = null;
    }

    if (this.dom.tvLoading) this.dom.tvLoading.style.display = 'flex';
    if (this.dom.tvFallbackOverlay) this.dom.tvFallbackOverlay.classList.add('is-hidden');

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

    this.dom.tvVideo.pause();
    this.dom.tvVideo.removeAttribute('src');
    this.dom.tvVideo.load();

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
      this.hls = new window.Hls({
        enableWorker: true,
        lowLatencyMode: true,
        backBufferLength: 45,
        maxBufferLength: 30,
        maxMaxBufferLength: 60,
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

    if (this.dom.tvQualityWrapper) this.dom.tvQualityWrapper.style.display = 'inline-flex';

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

    const heroTv = document.getElementById('heroCardTv');
    if (heroTv) {
      try { heroTv.focus(); } catch (e) {}
    }
    if (window.__antenaSurApp && typeof window.__antenaSurApp.updateHeroLastStationBadges === 'function') {
      window.__antenaSurApp.updateHeroLastStationBadges();
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
    events.forEach(ev => {
      document.addEventListener(ev, () => {
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
          if (this.dom.zappingSidebar) {
            this.dom.zappingSidebar.classList.remove('is-open-fs');
            this.dom.zappingSidebar.classList.remove('is-collapsed');
          }
          this.clearFsControlsInactivityTimer();
          this.showFsControls();
          this.hideFullscreenGuide();
        }
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
    // Al entrar en pantalla completa, el objetivo es el contenedor Zapping completo para que el video tome 100% de la pantalla
    const target = this.dom.zappingPlayerArea || this.dom.tvZappingView || document.documentElement;

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

    if (target.requestFullscreen) {
      target.requestFullscreen().catch(() => this.fallbackSafariVideoFullscreen());
    } else if (target.webkitRequestFullscreen) {
      target.webkitRequestFullscreen();
    } else if (target.mozRequestFullScreen) {
      target.mozRequestFullScreen();
    } else if (target.msRequestFullscreen) {
      target.msRequestFullscreen();
    } else {
      this.fallbackSafariVideoFullscreen();
    }

    this.resetFsControlsInactivityTimer();
    this.updateFullscreenIcon();
  }

  fallbackSafariVideoFullscreen() {
    if (this.dom.tvVideo && this.dom.tvVideo.webkitEnterFullscreen) {
      try {
        this.dom.tvVideo.webkitEnterFullscreen();
      } catch (e) {
        console.warn('Error en webkitEnterFullscreen:', e);
      }
    }
  }

  exitFullscreenCrossBrowser() {
    this.clearFsControlsInactivityTimer();
    this.showFsControls();
    this.hideFullscreenGuide();
    if (this.dom.zappingPlayerArea) {
      this.dom.zappingPlayerArea.classList.remove('is-fullscreen');
    }
    if (this.dom.tvZappingView) {
      this.dom.tvZappingView.classList.remove('is-fullscreen-mode');
    }
    if (this.dom.zappingSidebar) {
      this.dom.zappingSidebar.classList.remove('is-open-fs');
      this.dom.zappingSidebar.classList.remove('is-collapsed');
    }
    if (document.exitFullscreen) {
      document.exitFullscreen().catch(e => console.warn(e));
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    this.updateFullscreenIcon();
  }

  updateFullscreenIcon() {
    if (!this.dom.tvFullscreenBtn) return;
    const isFull = this.isFullscreenActive();

    this.dom.tvFullscreenBtn.innerHTML = isFull
      ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
           <polyline points="4 14 10 14 10 20"></polyline>
           <polyline points="20 10 14 10 14 4"></polyline>
           <line x1="14" y1="10" x2="21" y2="3"></line>
           <line x1="3" y1="21" x2="10" y2="14"></line>
         </svg>`
      : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
           <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
         </svg>`;
  }

  /* ========================================================================
     NAVEGACIÓN CON CONTROL REMOTO (ANDROID TV D-PAD / TECLADO)
     ======================================================================== */

  initRemoteKeyNavigation() {
    window.addEventListener('keydown', (e) => {
      if (e.defaultPrevented) return;

      // Ignorar si el foco está en un input de texto ordinario
      const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
      if (['input', 'textarea'].includes(activeTag) && e.key !== 'Escape') {
        return;
      }

      // Solo si la interfaz Zapping TV está abierta
      if (this.dom.tvZappingView && !this.dom.tvZappingView.classList.contains('is-hidden')) {
        const isFullscreen = this.isFullscreenActive();

        if (isFullscreen) {
          if (this.isFsControlsHidden) {
            this.showFsControls();
            this.resetFsControlsInactivityTimer();
            if (e.key === 'Enter') {
              // Si las barras de control estaban ocultas, el botón central las despierta primero
              e.preventDefault();
              return;
            }
          } else {
            this.resetFsControlsInactivityTimer();
          }
        }

        const isFullscreen = this.isFullscreenActive();
        const isFsSidebarOpen = this.isFsSidebarOpen();
        const isSidebarVisible = isFsSidebarOpen || (this.dom.zappingSidebar && !this.dom.zappingSidebar.classList.contains('is-collapsed'));

        // 1. Flecha Izquierda (ArrowLeft) -> Abrir guía lateral
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          if (isFullscreen) {
            this.toggleFullscreenSidebar(true);
          } else {
            this.toggleSidebar(true);
            this.focusCurrentSidebarItem();
          }
          return;
        }

        // 2. Flecha Derecha (ArrowRight) -> Cerrar guía lateral
        if (e.key === 'ArrowRight') {
          e.preventDefault();
          if (isFullscreen) {
            this.toggleFullscreenSidebar(false);
            this.hideFullscreenGuide();
          } else {
            this.toggleSidebar(false);
          }
          return;
        }

        // 3. Flecha Arriba (ArrowUp) -> Subir en guía lateral (sin sintonizar) o overlay
        if (e.key === 'ArrowUp') {
          e.preventDefault();
          if (isFullscreen && this.isGuideOverlayVisible) {
            this.navigateOverlayGuide(-1);
          } else if (isSidebarVisible) {
            this.navigateSidebarList(-1);
          } else {
            this.zapPrevious();
          }
          return;
        }

        // 4. Flecha Abajo (ArrowDown) -> Bajar en guía lateral (sin sintonizar) o overlay
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          if (isFullscreen && this.isGuideOverlayVisible) {
            this.navigateOverlayGuide(1);
          } else if (isSidebarVisible) {
            this.navigateSidebarList(1);
          } else {
            this.zapNext();
          }
          return;
        }

        // 5. Botón Central del Control (Enter / OK)
        if (e.key === 'Enter') {
          e.preventDefault();
          if (isFullscreen) {
            if (isFsSidebarOpen) {
              this.selectFocusedSidebarChannel();
            } else if (this.isGuideOverlayVisible) {
              this.selectFocusedOverlayChannel();
            } else {
              this.toggleFullscreenSidebar(true);
            }
          } else if (isSidebarVisible) {
            this.selectFocusedSidebarChannel();
          } else {
            this.togglePlayPause();
          }
          return;
        }

        // 6. Tecla 'S' / 's' -> Alternar rápidamente a la siguiente fuente de transmisión
        if (e.key === 's' || e.key === 'S') {
          e.preventDefault();
          this.nextTvSource();
          return;
        }

        // 7. Botón Atrás / Escape (Back / Escape)
        if (e.key === 'Escape' || e.key === 'BrowserBack' || e.keyCode === 8) {
          e.preventDefault();
          if (isFullscreen) {
            if (this.isFsSidebarOpen() || this.isGuideOverlayVisible) {
              const now = Date.now();
              if (this._lastBackPressTime && (now - this._lastBackPressTime < 1200)) {
                this.exitFullscreenCrossBrowser();
              } else {
                this._lastBackPressTime = now;
                this.toggleFullscreenSidebar(false);
                this.hideFullscreenGuide();
              }
            } else {
              this._lastBackPressTime = Date.now();
              this.toggleFullscreenSidebar(true);
            }
          } else {
            this.closeTvPlayer();
          }
          return;
        }

        // 7. Espacio -> Play/Pausa
        if (e.key === ' ' || e.code === 'Space') {
          e.preventDefault();
          this.togglePlayPause();
          return;
        }

        // 8. F -> Alternar Pantalla Completa
        if (e.key === 'f' || e.key === 'F') {
          e.preventDefault();
          this.toggleFullscreen();
          return;
        }

        // 9. M -> Mute
        if (e.key === 'm' || e.key === 'M') {
          e.preventDefault();
          this.toggleMute();
          return;
        }
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
          this.isUserPaused = false;
          this.resumeRadio(true);
        }
      });

      navigator.mediaSession.setActionHandler('pause', () => {
        if (this.currentType === 'tv') {
          if (this.dom.tvVideo) this.dom.tvVideo.pause();
        } else {
          this.isUserPaused = true;
          this.pauseRadio(true);
        }
      });

      navigator.mediaSession.setActionHandler('stop', () => {
        if (this.currentType === 'tv') {
          this.closeTvPlayer();
        } else {
          this.isUserPaused = true;
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

    const activeCard = this.dom.radioFsTrayScroll ? this.dom.radioFsTrayScroll.querySelector('.radio-tray-card.active') : null;
    if (activeCard) {
      try { activeCard.focus(); } catch (e) {}
    } else if (this.dom.radioFsBackBtn) {
      try { this.dom.radioFsBackBtn.focus(); } catch (e) {}
    }
  }

  closeFullscreenRadio() {
    this.isRadioFullscreen = false;
    if (this.dom.radioFullscreenView) {
      this.dom.radioFullscreenView.classList.add('is-hidden');
    }
    this.stopRadio();

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

    if (this.dom.radioFsTrackTitle) {
      this.dom.radioFsTrackTitle.textContent = station.name;
    }
    if (this.dom.radioFsTrackArtist) {
      this.dom.radioFsTrackArtist.textContent = `Emisión Oficial en Vivo • ${station.city || 'Chile'}`;
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
      this.isNetworkStalled = false;
      this.isReconnecting = false;
      this.isReloading = false;
      this.reconnectAttempts = 0;
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
      this.stopInterruptionRecoveryMonitor();
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

      if (this.isUserPaused) {
        this.isPlaying = false;
        this.updateRadioPlayIcon(false);
        this.stopVisualizer();
        this.stopAudioWatchdog();
        this.stopInterruptionRecoveryMonitor();
        if ('mediaSession' in navigator) {
          navigator.mediaSession.playbackState = 'paused';
        }
        if (this.onStationChange && this.currentStation) {
          this.onStationChange(this.currentStation, 'paused');
        }
      } else if (this.currentStation) {
        // Pausa no voluntaria provocada por llamada telefónica entrante, Siri o cambio de foco de audio en iOS
        console.log('⚠️ Audio pausado por interrupción externa (llamada o audio focus). Preservando sesión en CarPlay...');
        this.isInterrupted = true;
        this.isPlaying = false;
        this.updateRadioPlayIcon(false);
        this.stopVisualizer();
        this.stopAudioWatchdog(); // Detener watchdog para NO intentar llamadas destructivas a src durante la llamada

        // Mantener playbackState en 'paused': CarPlay conserva la emisora y carátula en pantalla mostrando el botón Play
        if ('mediaSession' in navigator) {
          navigator.mediaSession.playbackState = 'paused';
        }
        // Iniciar monitor pasivo de recuperación para reanudar apenas corte la llamada
        this.startInterruptionRecoveryMonitor();
      }
    });

    this.audioElement.addEventListener('waiting', () => {
      if (this.currentStation && !this.isUserPaused && !this.isInterrupted) {
        if (!navigator.onLine) {
          this.isNetworkStalled = true;
          return;
        }
        this.scheduleStallRecovery(4000);
      }
    });

    this.audioElement.addEventListener('stalled', () => {
      if (this.currentStation && !this.isUserPaused && !this.isInterrupted) {
        if (!navigator.onLine) {
          this.isNetworkStalled = true;
          return;
        }
        this.scheduleStallRecovery(4000);
      }
    });

    this.audioElement.addEventListener('error', (e) => {
      console.warn('Error en stream de radio:', e);
      if (this.currentStation && !this.isUserPaused && !this.isInterrupted) {
        if (!navigator.onLine) {
          this.isNetworkStalled = true;
          return;
        }
        this.scheduleReconnect(1500);
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

  playRadioSource(url) {
    if (!url) return;
    if (this.isInterrupted) {
      console.log('playRadioSource omitido: llamada telefónica en curso.');
      return;
    }
    if (!navigator.onLine) {
      console.log('playRadioSource omitido: dispositivo sin conexión 4G/5G.');
      this.isNetworkStalled = true;
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
            if (this.currentStation && !this.isUserPaused && !this.isInterrupted && navigator.onLine) {
              this.scheduleReconnect(2500);
            }
          });
        }
      });
      this.radioHls.on(Hls.Events.ERROR, (event, data) => {
        if (data.fatal) {
          console.warn('Radio Hls fatal error:', data.type);
          if (this.currentStation && !this.isUserPaused && !this.isInterrupted && navigator.onLine) {
            this.scheduleReconnect(2000);
          }
        }
      });
    } else {
      this.audioElement.src = url;
      this.audioElement.load();
      const p = this.audioElement.play();
      if (p !== undefined) {
        p.catch(e => {
          console.warn('Autoplay de radio esperando conexión/foco:', e);
          if (this.currentStation && !this.isUserPaused && !this.isInterrupted && navigator.onLine) {
            this.scheduleReconnect(2500);
          }
        });
      }
    }
  }

  pauseRadio(isUserInitiated = true) {
    if (isUserInitiated) {
      this.isUserPaused = true;
      this.stopAudioWatchdog();
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
      if ('mediaSession' in navigator) {
        navigator.mediaSession.playbackState = 'paused';
      }
    }
    this.stopNowPlayingPolling();
    this.audioElement.pause();
  }

  resumeRadio(isUserInitiated = true) {
    if (isUserInitiated) {
      this.isUserPaused = false;
      this.isInterrupted = false;
      this.stopInterruptionRecoveryMonitor();
      if ('mediaSession' in navigator) {
        navigator.mediaSession.playbackState = 'playing';
      }
    }

    if (!navigator.onLine) {
      console.log('resumeRadio: sin conexión 4G/5G, esperando recuperación...');
      this.isNetworkStalled = true;
      return;
    }

    if (this.audioElement.error || this.audioElement.readyState === 0 || this.audioElement.networkState === 3) {
      this.reloadLiveStream(true);
    } else {
      this.startAudioWatchdog();
      const p = this.audioElement.play();
      if (p !== undefined) {
        p.catch(e => {
          console.warn('No se pudo reanudar radio directamente, recargando stream live:', e);
          this.reloadLiveStream(true);
        });
      }
    }

    if (this.currentStation) {
      this.startNowPlayingPolling(this.currentStation);
    }
  }

  stopRadio() {
    this.isUserPaused = true;
    this.isInterrupted = false;
    this.isNetworkStalled = false;
    this.isReloading = false;
    this.stopAudioWatchdog();
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
    // 1. Detección de pérdida y recuperación de señal celular 4G/5G (túneles o zonas oscuras)
    window.addEventListener('offline', () => {
      console.warn('📡 Señal 4G/5G perdida (evento offline - túnel o zona oscura).');
      this.isNetworkStalled = true;
      this.stopAudioWatchdog();
      if (this.reconnectTimer) {
        clearTimeout(this.reconnectTimer);
        this.reconnectTimer = null;
      }
      if (this.stallTimer) {
        clearTimeout(this.stallTimer);
        this.stallTimer = null;
      }
    });

    window.addEventListener('online', () => {
      console.log('🌐 Conexión 4G/5G restaurada (evento online).');
      this.isNetworkStalled = false;
      if (this.onlineRecoveryTimer) {
        clearTimeout(this.onlineRecoveryTimer);
      }
      // Margen de 600ms para estabilización del socket y DNS en red móvil
      this.onlineRecoveryTimer = setTimeout(() => {
        if (this.currentStation && !this.isUserPaused && !this.isInterrupted) {
          console.log('🔄 Reconectando radio automáticamente tras salir de túnel o restaurar 4G/5G...');
          this.reconnectAttempts = 0;
          this.reloadLiveStream(true);
        }
      }, 600);
    });

    // 2. Sesión nativa de audio de WebKit / iOS Safari 16.4+ (llamadas telefónicas y Siri)
    if ('audioSession' in navigator) {
      try {
        navigator.audioSession.type = 'playback';
        navigator.audioSession.addEventListener('statechange', () => {
          const state = navigator.audioSession.state;
          console.log(`🔊 [AudioSession] statechange: ${state}`);

          if (state === 'interrupted') {
            console.log('⚠️ [AudioSession] Llamada telefónica iniciada en iOS.');
            this.isInterrupted = true;
            this.stopAudioWatchdog();
            if ('mediaSession' in navigator) {
              navigator.mediaSession.playbackState = 'paused';
            }
            this.startInterruptionRecoveryMonitor();
          } else if (state === 'active') {
            console.log('✅ [AudioSession] Llamada finalizada (AudioSession activa). Reanudando radio...');
            if (this.currentStation && !this.isUserPaused) {
              this.resumeAfterInterruption();
            }
          }
        });
      } catch (e) {
        console.warn('AudioSession no disponible o falló configuración:', e);
      }
    }

    // 3. Al desbloquear el teléfono, regresar a Safari o restaurar pantalla de bloqueo / CarPlay
    const handleWakeOrFocus = () => {
      if (this.currentStation && !this.isUserPaused) {
        if (this.isInterrupted || this.isNetworkStalled || this.audioElement.paused) {
          console.log('📱 Dispositivo en foco / pantalla activa. Verificando estado del reproductor...');
          this.resumeAfterInterruption();
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
    this.stopInterruptionRecoveryMonitor();
    if (this.isUserPaused || !this.isInterrupted || !this.currentStation) return;

    let attempts = 0;
    this.interruptionPollTimer = setInterval(() => {
      attempts++;
      if (this.isUserPaused || !this.isInterrupted || !this.currentStation) {
        this.stopInterruptionRecoveryMonitor();
        return;
      }

      // Si AudioSession nativa indica que la llamada sigue activa, continuar esperando
      if ('audioSession' in navigator && navigator.audioSession.state === 'interrupted') {
        return;
      }

      // Si estamos offline, no intentar hasta que vuelva la señal
      if (!navigator.onLine) return;

      console.log(`[Interruption Monitor] Comprobando si finalizó la llamada (intento ${attempts})...`);

      // Intentar reanudar suavemente SIN recrear src ni llamar a load()
      const p = this.audioElement.play();
      if (p !== undefined) {
        p.then(() => {
          console.log('✅ [Interruption Monitor] ¡Llamada finalizada! Audio reanudado automáticamente.');
          this.stopInterruptionRecoveryMonitor();
          this.isInterrupted = false;
          this.isPlaying = true;
          this.updateRadioPlayIcon(true);
          this.startVisualizer();
          if ('mediaSession' in navigator) {
            navigator.mediaSession.playbackState = 'playing';
          }
          this.refreshMediaSessionControls();
          this.startAudioWatchdog();
        }).catch(err => {
          if (err.name === 'NotAllowedError') {
            // La llamada telefónica sigue activa en iOS; no hacer nada destructivo
          } else {
            // Socket de Icecast cerrado por duración de la llamada
            if ('audioSession' in navigator && navigator.audioSession.state === 'active') {
              this.stopInterruptionRecoveryMonitor();
              this.resumeAfterInterruption();
            }
          }
        });
      }
    }, 2500);
  }

  stopInterruptionRecoveryMonitor() {
    if (this.interruptionPollTimer) {
      clearInterval(this.interruptionPollTimer);
      this.interruptionPollTimer = null;
    }
  }

  resumeAfterInterruption() {
    if (this.isUserPaused || !this.currentStation) return;
    this.stopInterruptionRecoveryMonitor();

    if (!navigator.onLine) {
      console.log('Reanudación pospuesta: dispositivo sin conexión 4G/5G.');
      this.isNetworkStalled = true;
      return;
    }

    console.log('[Interruption Recovery] Finalizó la llamada o interrupción. Reanudando audio...');
    this.isInterrupted = false;

    // Intentar reanudar en el elemento existente directamente sin recargar URL
    // (si la llamada fue corta, el socket Icecast sigue vivo y la música vuelve de inmediato)
    const p = this.audioElement.play();
    if (p !== undefined) {
      p.then(() => {
        console.log('[Interruption Recovery] Audio reanudado de inmediato.');
        this.isPlaying = true;
        this.updateRadioPlayIcon(true);
        this.startVisualizer();
        if ('mediaSession' in navigator) {
          navigator.mediaSession.playbackState = 'playing';
        }
        this.refreshMediaSessionControls();
        this.startAudioWatchdog();
      }).catch(err => {
        console.warn('[Interruption Recovery] Socket previo expirado durante la llamada. Recargando emisión en vivo:', err);
        this.reloadLiveStream(true);
      });
    } else {
      this.reloadLiveStream(true);
    }
  }

  startAudioWatchdog() {
    this.stopAudioWatchdog();
    if (this.isUserPaused || this.isInterrupted || !this.currentStation || !navigator.onLine) return;

    this.lastPlaybackTime = this.audioElement.currentTime;
    this.lastTimeAdvancedAt = Date.now();

    this.watchdogTimer = setInterval(() => {
      // Verificación de seguridad
      if (this.isUserPaused || this.isInterrupted || !this.currentStation || !navigator.onLine) {
        if (this.isUserPaused || this.isInterrupted) {
          this.stopAudioWatchdog();
        }
        return;
      }

      const curTime = this.audioElement.currentTime;
      const isPaused = this.audioElement.paused;

      // Caso 1: Audio pausado inesperadamente con señal de internet activa
      if (isPaused) {
        if ('audioSession' in navigator && navigator.audioSession.state === 'interrupted') {
          console.log('Watchdog: AudioSession indica llamada activa. Pausando watchdog.');
          this.isInterrupted = true;
          this.stopAudioWatchdog();
          this.startInterruptionRecoveryMonitor();
          return;
        }

        console.log('Watchdog: Audio pausado inesperadamente. Verificando...');
        const p = this.audioElement.play();
        if (p !== undefined) {
          p.catch(err => {
            if (err.name === 'NotAllowedError') {
              console.log('Watchdog: Interrupción del sistema detectada (llamada telefónica). Pausando watchdog.');
              this.isInterrupted = true;
              this.stopAudioWatchdog();
              this.startInterruptionRecoveryMonitor();
            } else {
              console.warn('Watchdog: Error de reproducción con audio pausado, recargando stream live:', err);
              this.reloadLiveStream(true);
            }
          });
        }
        return;
      }

      // Caso 2: Stream congelado por microcortes 4G/5G (>5s sin avance de audio)
      if (curTime === this.lastPlaybackTime) {
        const timeStuck = Date.now() - this.lastTimeAdvancedAt;
        if (timeStuck > 5000) {
          console.warn('Watchdog: Stream congelado (>5s sin avance con internet). Reconectando emisión live...');
          this.lastTimeAdvancedAt = Date.now();
          this.reloadLiveStream(true);
        }
      } else {
        this.lastPlaybackTime = curTime;
        this.lastTimeAdvancedAt = Date.now();
      }
    }, 3000);
  }

  stopAudioWatchdog() {
    if (this.watchdogTimer) {
      clearInterval(this.watchdogTimer);
      this.watchdogTimer = null;
    }
  }

  scheduleStallRecovery(delayMs = 4000) {
    if (this.stallTimer) clearTimeout(this.stallTimer);
    if (this.isUserPaused || this.isInterrupted || !this.currentStation) return;

    this.stallTimer = setTimeout(() => {
      if (this.currentStation && !this.isUserPaused && !this.isInterrupted) {
        if (!navigator.onLine) {
          console.log('Recuperación de buffer pospuesta: offline.');
          this.isNetworkStalled = true;
          return;
        }
        const curTime = this.audioElement.currentTime;
        if (curTime === this.lastPlaybackTime || this.audioElement.paused) {
          console.warn('Recuperación de buffer estancado: Recargando stream en vivo...');
          this.reloadLiveStream(true);
        }
      }
    }, delayMs);
  }

  scheduleReconnect(delayMs = 2000) {
    if (this.isUserPaused || this.isInterrupted || !this.currentStation) return;
    if (this.reconnectTimer) clearTimeout(this.reconnectTimer);

    if (!navigator.onLine) {
      this.isNetworkStalled = true;
      return;
    }

    const backoff = Math.min(delayMs * Math.pow(1.3, this.reconnectAttempts), 8000);
    this.reconnectTimer = setTimeout(() => {
      if (!this.isUserPaused && !this.isInterrupted && this.currentStation && navigator.onLine) {
        this.reloadLiveStream(true);
      }
    }, backoff);
  }

  reloadLiveStream(forceTimestamp = true) {
    if (this.isUserPaused || !this.currentStation) return;
    if (this.isReloading) return;
    if (this.isInterrupted) {
      console.log('Recarga de stream pospuesta: llamada en curso.');
      return;
    }
    if (!navigator.onLine) {
      console.log('Recarga de stream pospuesta: dispositivo offline.');
      this.isNetworkStalled = true;
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

    const sep = url.includes('?') ? '&' : '?';
    const liveUrl = forceTimestamp ? `${url}${sep}_live=${Date.now()}` : url;

    this.playRadioSource(liveUrl);

    // Asegurar que CarPlay mantenga la información actualizada y los controles en la pantalla del auto
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

    const poll = async () => {
      if (!this.currentStation || this.currentStation.id !== station.id) return;
      try {
        const streamParam = encodeURIComponent(station.streamUrl || '');
        const res = await fetch(`/api/nowplaying?id=${encodeURIComponent(station.id)}&stream=${streamParam}`);
        if (!res.ok) return;
        const data = await res.json();
        if (this.currentStation && this.currentStation.id === station.id) {
          this.updateNowPlayingUI(station, data);
        }
      } catch (err) {
        console.warn('Error consultando now playing:', err);
      }
    };

    poll();
    this.nowPlayingTimer = setInterval(poll, 9000);
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

      // Restaurar interfaz de pantalla completa
      if (this.dom.radioFsTrackTitle) {
        this.dom.radioFsTrackTitle.textContent = station.name;
      }
      if (this.dom.radioFsTrackArtist) {
        this.dom.radioFsTrackArtist.textContent = `Emisión Oficial en Vivo • ${freq}${station.city}, ${station.countryName || 'Chile'}`;
      }
      if (this.dom.radioFsArtwork && station.logo && this.dom.radioFsArtwork.src !== station.logo) {
        this.dom.radioFsArtwork.src = station.logo;
      }
    }
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
      const isFullscreen = player.isFullscreenActive();
      const isFsSidebarOpen = typeof player.isFsSidebarOpen === 'function' ? player.isFsSidebarOpen() : false;
      const isSidebarVisible = isFsSidebarOpen || (player.dom.zappingSidebar && !player.dom.zappingSidebar.classList.contains('is-collapsed'));

      if (action === 'ArrowUp') {
        if (isFullscreen && player.isGuideOverlayVisible) {
          player.navigateOverlayGuide(-1);
        } else if (isSidebarVisible) {
          player.navigateSidebarList(-1);
        } else {
          player.zapPrevious();
        }
        return;
      }
      if (action === 'ArrowDown') {
        if (isFullscreen && player.isGuideOverlayVisible) {
          player.navigateOverlayGuide(1);
        } else if (isSidebarVisible) {
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
          } else {
            player.showFullscreenGuide();
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
          } else if (player.isGuideOverlayVisible) {
            player.selectFocusedOverlayChannel();
          } else {
            if (typeof player.toggleFullscreenSidebar === 'function') {
              player.toggleFullscreenSidebar(true);
            } else {
              player.showFullscreenGuide();
            }
          }
        } else if (isSidebarVisible) {
          player.selectFocusedSidebarChannel();
        } else {
          player.togglePlayPause();
        }
        return;
      }
      if (action === 'Back') {
        if (isFullscreen) {
          if (isFsSidebarOpen || player.isGuideOverlayVisible) {
            const now = Date.now();
            if (player._lastBackPressTime && (now - player._lastBackPressTime < 1200)) {
              player.exitFullscreenCrossBrowser();
            } else {
              player._lastBackPressTime = now;
              if (typeof player.toggleFullscreenSidebar === 'function') {
                player.toggleFullscreenSidebar(false);
              }
              if (typeof player.hideFullscreenGuide === 'function') {
                player.hideFullscreenGuide();
              }
            }
          } else {
            player._lastBackPressTime = Date.now();
            if (typeof player.toggleFullscreenSidebar === 'function') {
              player.toggleFullscreenSidebar(true);
            } else if (typeof player.showFullscreenGuide === 'function') {
              player.showFullscreenGuide();
            }
          }
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

  start() {
    this.showToast('Cargando señales de Chile...', 'info');

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

    // 4. Ocultar estado de carga inicial
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

    if (tvCount > 0) {
      this.showToast(`¡Listo! ${tvCount} Canales de TV y ${radioCount} Radios de Chile activas`, 'success');
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
          heroTvLastStation.textContent = '321 señales nacionales y regionales • Sintonización en directo';
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
