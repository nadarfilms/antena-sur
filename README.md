# 📡 Antena Sur — TV y Radios en Vivo de Chile y Sudamérica

Una aplicación web de alto rendimiento, moderna y fluida para sintonizar los canales de televisión abierta y las principales estaciones de radio de **Chile** (con cobertura integral de sus 16 regiones) y **Sudamérica** (Argentina, Perú, Colombia, Uruguay, Bolivia, Ecuador, Paraguay y Brasil).

Todos los enlaces son **señales públicas, abiertas y legítimas** transmitidas en la web mediante protocolos estándar HLS (`.m3u8`), Icecast, Shoutcast y AAC.

---

## 🌟 Características Principales

### 🗺️ Organización Geográfica Jerárquica
* **Por País**: Selector visual con banderas de Sudamérica y contador de emisoras en tiempo real.
* **Por Región / Provincia**: Cascada dinámica que se adapta al país seleccionado (en Chile incluye las 16 regiones de Arica a Magallanes).
* **Por Ciudad / Localidad**: Desglose por comuna o ciudad (Santiago, Concepción, Valparaíso, Punta Arenas, Temuco, Buenos Aires, Bogotá, Lima, etc.).

### 📺 Reproductor de Televisión (Modo Cine)
* Motor **Hls.js** integrado con soporte adaptativo de bitrate.
* Controles avanzados: **Pantalla Completa (F)**, **Picture-in-Picture (PiP)**, control de volumen suave y silenciado rápido.
* Detección automática de errores con soporte de reintento directo y opción de **Proxy Local** (para evitar bloqueos CORS).
* Enlaces directos a las páginas web oficiales de cada emisora.

### 📻 Reproductor de Radio Persistente con Audio Visualizer
* Barra inferior flotante para escuchar radio continuamente mientras navegas y exploras el catálogo.
* **Canvas Spectrum Visualizer**: Ecualizador gráfico animado en tiempo real que reacciona con frecuencias sonoras.
* Soporte nativo para transmisiones Icecast, Shoutcast, AAC y HLS Audio.

### ⚡ Filtros y Búsqueda Instantánea
* **Buscador en tiempo real**: Encuentra por nombre, frecuencia de radio (ej: `99.7`, `94.5`), género, ciudad o región.
* **Selector de formato**: Alterna entre *Todos*, *Solo TV*, *Solo Radios* o *⭐ Mis Favoritos*.
* **Pastillas de Género**: Noticias, Deportes, Música Rock, Pop, Romántica, Cultura, Regional, etc.
* **Sistema de Favoritos**: Guarda tus señales preferidas en el navegador con persistencia local (`localStorage`).
* **Añadir Señal Personalizada**: Modal interactivo para agregar tus propios enlaces de streaming.

### 🛡️ Servidor Local con Proxy CORS Transparente
* Servidor ligero en **Python 3** nativo (sin dependencias externas ni `npm`).
* Endpoint `/api/proxy?url=...` que añade cabeceras `Access-Control-Allow-Origin: *` automáticamente para cualquier stream que restrinja CORS en navegadores.

---

## 🚀 Cómo Iniciar la Aplicación

### Opción 1: Con el script rápido (Recomendado)
Abre la terminal en la carpeta del proyecto y ejecuta:

```bash
cd /Users/helmuthbohle/.gemini/antigravity/scratch/antena-sur
./run.sh
```

Esto iniciará el servidor local y abrirá automáticamente tu navegador en `http://localhost:8080`.

### Opción 2: Ejecutar manualmente con Python
```bash
cd /Users/helmuthbohle/.gemini/antigravity/scratch/antena-sur
python3 server.py
```

Luego abre en tu navegador favorito:
👉 [http://localhost:8080](http://localhost:8080)

---

## ⌨️ Atajos de Teclado

| Tecla | Acción |
| :--- | :--- |
| `[Espacio]` | Pausar / Reanudar señal activa (TV o Radio) |
| `[M]` | Silenciar / Restaurar volumen (Mute) |
| `[F]` | Pantalla completa en el reproductor |
| `[/]` | Activar y enfocar la barra de búsqueda |
| `[Esc]` | Cerrar el reproductor de TV o los modales activos |

---

## 📁 Estructura del Proyecto

```
antena-sur/
├── index.html              # Interfaz HTML5 responsiva
├── css/
│   ├── main.css            # Variables, atmósfera y layout
│   ├── components.css      # Filtros, cards y modales
│   └── player.css          # Estilos del reproductor TV y barra de radio
├── js/
│   ├── app.js              # Controlador principal y atajos
│   ├── data-manager.js     # Gestión y extracción de la base de datos
│   ├── filters.js          # Motor de filtros jerárquicos y búsqueda
│   ├── favorites.js        # Persistencia en LocalStorage
│   └── player.js           # Reproductor HLS y Canvas Audio Visualizer
├── data/
│   └── stations.json       # Base de datos curada con 90+ señales públicas
├── server.py               # Servidor HTTP nativo con Proxy CORS
├── run.sh                  # Script de inicio en macOS
└── README.md               # Esta documentación
```

---

## 📡 Cobertura de Emisoras Incluidas

* **Chile 🇨🇱**:
  * *Nacionales*: TVN, 24 Horas, Canal 13, T13 En Vivo, Chilevisión, Meganoticias, Bío Bío TV, TV+, La Red, STGO TV, CDTV (Diputados), Senado TV.
  * *Regionales*: Arica TV, Iquique TV, Antofagasta TV (ATV), Holvoet TV (Copiapó), Thema TV (La Serena), Quintavisión, UCV TV, Sextavisión (Rancagua), TV Maule, Contivisión (Constitución), Canal 21 (Chillán), Canal 9 Bío-Bío (Concepción), TVU (U. de Concepción), UATV (Temuco), Ufro Medios, ATV Valdivia, Vértice TV (Puerto Montt), Décima TV (Chiloé), Santa María TV (Aysén), ITV Patagonia (Punta Arenas), Pingüino TV.
  * *Radios*: Bío Bío (Santiago, Concepción, Valparaíso, Temuco, Puerto Montt), Cooperativa, ADN Radio, Futuro (Rock), Concierto, Rock & Pop, Corazón, Pudahuel, Carolina, Activa, Los 40, FM Dos, Romántica, Duna, Infinita, Beethoven (Música clásica), Agricultura, Festival (Viña del Mar), Sago (Osorno), Polar (Punta Arenas), Paulina (Iquique), Nostálgica (Copiapó).
* **Argentina 🇦🇷**: TN (Todo Noticias), C5N, TV Pública, Canal 26, Radio Mitre, Radio La Red, Radio Continental, Cadena 3 (Córdoba), Aspen 102.3.
* **Perú 🇵🇪**: TV Perú, RPP Noticias (TV y Radio), Radio Exitosa, Radio Panamericana.
* **Colombia 🇨🇴**: Noticias Caracol Ahora, Noticias RCN, Señal Colombia, Telemedellín, Caracol Radio, Blu Radio, La W Radio.
* **Uruguay 🇺🇾**: Canal 5 TNU, TV Ciudad, Radio Sarandí.
* **Bolivia 🇧🇴**: Bolivia TV, Radio Fides.
* **Ecuador 🇪🇨**: Ecuador TV, Radio Canela.
* **Paraguay 🇵🇾**: Paraguay TV, Radio Monumental.
* **Brasil 🇧🇷**: TV Brasil, Jovem Pan FM.
