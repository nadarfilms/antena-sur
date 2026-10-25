/**
 * ANTENA SUR - Data Manager
 * Gestión de la base de datos de canales y radios, extracción jerárquica
 */

export class DataManager {
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
