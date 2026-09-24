/**
 * ANTENA SUR - Standalone Application Bundle
 * Compatible con Android TV, Google TV, WebViews, Apple CarPlay y Navegadores Modernos
 * Generado de forma autónoma sin dependencias de carga modular ES6 a nivel de runtime
 */

(function() {
  "use strict";

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

  async load() {
    try {
      let data = (typeof window !== 'undefined' && window.STATIONS_DATA) ? window.STATIONS_DATA : null;
      if (!data) {
        const response = await fetch('./data/stations.json');
        if (response.ok) {
          data = await response.json();
        }
      }

      if (!data && typeof window !== 'undefined' && window.STATIONS_DATA) {
        data = window.STATIONS_DATA;
      }

      if (data) {
        this.countries = data.countries || [];
        this.loadCustomStations();
        this.stations = [...(data.stations || []), ...this.customStations];
        this.isLoaded = true;
        return true;
      }
      throw new Error('No se encontraron datos de estaciones');
    } catch (error) {
      console.warn('Carga alternativa de estaciones:', error);
      if (typeof window !== 'undefined' && window.STATIONS_DATA) {
        const data = window.STATIONS_DATA;
        this.countries = data.countries || [];
        this.loadCustomStations();
        this.stations = [...(data.stations || []), ...this.customStations];
        this.isLoaded = true;
        return true;
      }
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
      radioQuickScrollTray: document.getElementById('radioQuickScrollTray')
    };

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
  }

  initZappingSidebarEvents() {
    // Botón para colapsar/expandir barra lateral
    if (this.dom.zappingSidebarToggleBtn) {
      this.dom.zappingSidebarToggleBtn.addEventListener('click', () => {
        this.toggleSidebar();
      });
    }

    // Botón hamburguesa en HUD superior para abrir/cerrar la guía (funciona tanto en pantalla completa como en modo normal)
    if (this.dom.zappingOpenGuideBtn) {
      this.dom.zappingOpenGuideBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (this.isFullscreenActive()) {
          if (this.isGuideOverlayVisible) {
            this.hideFullscreenGuide();
          } else {
            this.showFullscreenGuide();
          }
        } else {
          this.toggleSidebar();
        }
      });
    }

    // Botón cerrar (✕) en overlay de pantalla completa
    const fsCloseBtn = document.getElementById('fsOverlayCloseBtn');
    if (fsCloseBtn) {
      fsCloseBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.hideFullscreenGuide();
      });
    }

    // Botón atrás (◀) en overlay de pantalla completa
    const fsBackBtn = document.getElementById('fsOverlayBackBtn');
    if (fsBackBtn) {
      fsBackBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.hideFullscreenGuide();
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
        <button class="zapping-ch-item ${isPlaying ? 'is-playing is-active' : ''}" data-id="${station.id}" data-index="${idx}" tabindex="0">
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

    // Asignar clics a los ítems del sidebar
    this.dom.zappingChannelList.querySelectorAll('.zapping-ch-item').forEach(item => {
      item.addEventListener('click', () => {
        const id = item.getAttribute('data-id');
        const st = this.tvStations.find(s => s.id === id);
        if (st) this.playTv(st);
      });
    });

    // Renderizar lista en Overlay de Pantalla Completa
    if (this.dom.zappingFsChannelList) {
      this.dom.zappingFsChannelList.innerHTML = sidebarHtml;
      this.dom.zappingFsChannelList.querySelectorAll('.zapping-ch-item').forEach(item => {
        item.addEventListener('click', () => {
          const id = item.getAttribute('data-id');
          const st = this.tvStations.find(s => s.id === id);
          if (st) {
            this.playTv(st);
            this.hideFullscreenGuide();
          }
        });
      });
    }

    // Scroll suave al canal activo
    const activeItem = this.dom.zappingChannelList.querySelector('.zapping-ch-item.is-active');
    if (activeItem) {
      activeItem.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
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
    const items = this.dom.zappingFsChannelList?.querySelectorAll('.zapping-ch-item');
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
      const title = it.querySelector('.zapping-ch-title')?.textContent.toLowerCase() || '';
      const sub = it.querySelector('.zapping-ch-sub')?.textContent.toLowerCase() || '';
      const num = it.querySelector('.zapping-ch-num')?.textContent.toLowerCase() || '';
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

    items[this.dpadFocusIndex]?.classList.remove('is-dpad-focused');

    this.dpadFocusIndex += direction;
    if (this.dpadFocusIndex < 0) this.dpadFocusIndex = items.length - 1;
    if (this.dpadFocusIndex >= items.length) this.dpadFocusIndex = 0;

    const focusedItem = items[this.dpadFocusIndex];
    if (focusedItem) {
      focusedItem.classList.add('is-dpad-focused');
      focusedItem.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }

    this.resetFsOverlayInactivityTimer();
  }

  selectFocusedOverlayChannel() {
    if (!this.dom.zappingFsChannelList) return;
    const items = this.dom.zappingFsChannelList.querySelectorAll('.zapping-ch-item');
    const focusedItem = items[this.dpadFocusIndex];
    if (focusedItem) {
      const id = focusedItem.getAttribute('data-id');
      const st = this.tvStations.find(s => s.id === id);
      if (st) {
        this.playTv(st);
        this.hideFullscreenGuide();
      }
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
    let idx = this.tvStations.findIndex(s => s.id === this.currentStation?.id);
    if (idx === -1) idx = 0;
    idx = (idx - 1 + this.tvStations.length) % this.tvStations.length;
    this.playTv(this.tvStations[idx]);
  }

  zapNext() {
    if (!this.tvStations || this.tvStations.length === 0) return;
    let idx = this.tvStations.findIndex(s => s.id === this.currentStation?.id);
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
    this.stopRadio();
    this.clearConnectionWatchdog();

    this.currentStation = station;
    this.currentType = 'tv';
    this.fav.addToHistory(station);

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
      this.renderTvGuide();
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

    // Actualizar canal activo en la guía lateral
    this.renderTvGuide();

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
        this.updateFullscreenIcon();
        if (isFull) {
          this.resetFsControlsInactivityTimer();
        } else {
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
    // Al entrar en pantalla completa, el objetivo es el contenedor Zapping completo para que el overlay funcione sobre el video
    const target = this.dom.zappingPlayerArea || this.dom.tvZappingView || document.documentElement;

    if (this.dom.zappingPlayerArea) {
      this.dom.zappingPlayerArea.classList.add('is-fullscreen');
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

        // 1. Flecha Izquierda (ArrowLeft) -> Abrir guía lateral
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          if (isFullscreen) {
            this.showFullscreenGuide();
          } else {
            this.toggleSidebar(true);
            const activeItem = this.dom.zappingChannelList?.querySelector('.zapping-ch-item.is-active');
            if (activeItem) activeItem.focus();
          }
          return;
        }

        // 2. Flecha Derecha (ArrowRight) -> Cerrar guía lateral
        if (e.key === 'ArrowRight') {
          e.preventDefault();
          if (isFullscreen) {
            this.hideFullscreenGuide();
          } else {
            this.toggleSidebar(false);
          }
          return;
        }

        // 3. Flecha Arriba (ArrowUp) -> Canal anterior o subir en guía
        if (e.key === 'ArrowUp') {
          e.preventDefault();
          if (isFullscreen && this.isGuideOverlayVisible) {
            this.navigateOverlayGuide(-1);
          } else {
            this.zapPrevious();
          }
          return;
        }

        // 4. Flecha Abajo (ArrowDown) -> Siguiente canal o bajar en guía
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          if (isFullscreen && this.isGuideOverlayVisible) {
            this.navigateOverlayGuide(1);
          } else {
            this.zapNext();
          }
          return;
        }

        // 5. Botón Central del Control (Enter / OK)
        if (e.key === 'Enter') {
          e.preventDefault();
          if (isFullscreen) {
            if (!this.isGuideOverlayVisible) {
              this.showFullscreenGuide();
            } else {
              this.selectFocusedOverlayChannel();
            }
          } else if (document.activeElement && document.activeElement.classList.contains('zapping-ch-item')) {
            document.activeElement.click();
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
          if (isFullscreen && this.isGuideOverlayVisible) {
            this.hideFullscreenGuide();
          } else if (isFullscreen) {
            this.exitFullscreenCrossBrowser();
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
          this.dom.tvVideo?.play();
        } else {
          this.isUserPaused = false;
          this.resumeRadio(true);
        }
      });

      navigator.mediaSession.setActionHandler('pause', () => {
        if (this.currentType === 'tv') {
          this.dom.tvVideo?.pause();
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
    let idx = this.radioStations.findIndex(s => s.id === this.currentStation?.id);
    if (idx === -1) idx = 0;
    idx = (idx - 1 + this.radioStations.length) % this.radioStations.length;
    this.playRadio(this.radioStations[idx]);
  }

  playNextRadio() {
    if (!this.radioStations || this.radioStations.length === 0) return;
    let idx = this.radioStations.findIndex(s => s.id === this.currentStation?.id);
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

    // Actualizar interfaz del reproductor móvil estilo Spotify / Apple Music
    this.updateMobileRadioUI(station);

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
 * Navegación espacial 2D de alta precisión para Android TV, Google TV y Smart TVs
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

  function setFocus(element) {
    if (!element) return;
    try {
      element.focus({ preventScroll: true });
    } catch (e) {
      element.focus();
    }
    try {
      element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
    } catch (e) {
      element.scrollIntoView();
    }
    document.querySelectorAll('.is-tv-focused').forEach(el => el.classList.remove('is-tv-focused'));
    element.classList.add('is-tv-focused');
  }

  function navigateSpatial(direction) {
    const focusable = getFocusableElements();
    if (!focusable.length) return;

    let current = document.activeElement;
    if (!current || !focusable.includes(current)) {
      const tvFocused = document.querySelector('.is-tv-focused');
      if (tvFocused && focusable.includes(tvFocused)) {
        current = tvFocused;
      }
    }

    // Si aún no hay nada enfocado, enfocar el botón principal de Canales de TV e iniciar desde allí
    if (!current || !focusable.includes(current)) {
      const heroTv = document.getElementById('heroCardTv');
      current = (heroTv && focusable.includes(heroTv)) ? heroTv : focusable[0];
      setFocus(current);
    }

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
          // Penalizar fuertemente la desviación vertical para mantenerse en la misma fila
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
          // Penalizar desviación horizontal para caer en la tarjeta directamente debajo
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
    const firstCard = document.querySelector('.station-card');
    setFocus(heroTv || firstCard);
  };

  window.onTvBack = function() {
    const player = window.AntenaSurPlayer || window.__antenaSurApp?.player;
    const isTvPlayerOpen = player?.dom?.tvZappingView && !player.dom.tvZappingView.classList.contains('is-hidden');
    if (isTvPlayerOpen) {
      window.onTvNav('Back');
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
    const player = window.AntenaSurPlayer || window.__antenaSurApp?.player;
    const isTvPlayerOpen = player?.dom?.tvZappingView && !player.dom.tvZappingView.classList.contains('is-hidden');

    if (isTvPlayerOpen) {
      if (action === 'ArrowUp') {
        if (player.isFullscreenActive() && player.isGuideOverlayVisible) {
          player.navigateOverlayGuide(-1);
        } else {
          player.zapPrevious();
        }
        return;
      }
      if (action === 'ArrowDown') {
        if (player.isFullscreenActive() && player.isGuideOverlayVisible) {
          player.navigateOverlayGuide(1);
        } else {
          player.zapNext();
        }
        return;
      }
      if (action === 'ArrowLeft') {
        if (player.isFullscreenActive()) {
          player.showFullscreenGuide();
        } else {
          player.toggleSidebar(true);
        }
        return;
      }
      if (action === 'ArrowRight') {
        if (player.isFullscreenActive()) {
          player.hideFullscreenGuide();
        } else {
          player.toggleSidebar(false);
        }
        return;
      }
      if (action === 'Enter') {
        if (player.isFullscreenActive()) {
          if (!player.isGuideOverlayVisible) {
            player.showFullscreenGuide();
          } else {
            player.selectFocusedOverlayChannel();
          }
        } else {
          player.togglePlayPause();
        }
        return;
      }
      if (action === 'Back') {
        if (player.isFullscreenActive() && player.isGuideOverlayVisible) {
          player.hideFullscreenGuide();
        } else if (player.isFullscreenActive()) {
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
      if (!current || current === document.body) {
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
      const player = window.AntenaSurPlayer || window.__antenaSurApp?.player;
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
    if (e.target && (e.target.classList?.contains('hero-action-card') || e.target.classList?.contains('station-card') || e.target.classList?.contains('section-nav-tab'))) {
      document.querySelectorAll('.is-tv-focused').forEach(el => el.classList.remove('is-tv-focused'));
      e.target.classList.add('is-tv-focused');
    }
  });

  // Atajos de teclado para mandos bluetooth y teclados estándar
  window.addEventListener('keydown', (e) => {
    if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) {
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

  // Inicializar foco al primer elemento
  setTimeout(() => {
    window.initTvFocus();
  }, 200);
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
  }

  async start() {
    this.showToast('Cargando señales de Chile y Sudamérica...', 'info');

    const success = await this.dataManager.load();
    if (!success) {
      this.showToast('No se pudieron cargar los datos de las emisoras.', 'error');
      return;
    }

    if (this.dom.loadingState) {
      this.dom.loadingState.style.display = 'none';
    }

    // Inicializar Player Engine
    this.player = new PlayerEngine(this.favoritesManager, (station, status) => {
      this.handlePlayerStateChange(station, status);
    });

    // Enviar datos al reproductor para la Guía Zapping y MediaSession
    this.player.setStationsData(this.dataManager.getAllStations());

    // Inicializar Filters Engine con callback de renderizado
    this.filters = new FiltersEngine(this.dataManager, this.favoritesManager, (filteredStations) => {
      this.renderStations(filteredStations);
    });

    this.filters.init();
    this.initCustomModalEvents();
    this.initKeyboardShortcuts();
    this.initMainSectionTabs();

    // Actualizar contadores de sección superior
    const tvCount = this.dataManager.getAllStations().filter(s => s.type === 'tv').length;
    const radioCount = this.dataManager.getAllStations().filter(s => s.type === 'radio').length;
    const tvCounterEl = document.getElementById('tvCounter');
    const radioCounterEl = document.getElementById('radioCounter');
    if (tvCounterEl) tvCounterEl.textContent = tvCount;
    if (radioCounterEl) radioCounterEl.textContent = radioCount;

    // Render inicial
    const initialList = this.filters.getFilteredStations();
    this.renderStations(initialList);

    this.showToast(`¡Listo! ${tvCount} Canales de TV y ${radioCount} Radios activas en Chile`, 'success');

    // Exponer el reproductor globalmente para botones nativos de Android TV (Zap+/Zap-)
    window.AntenaSurPlayer = this.player;

    // Inicializar motor de navegación por control remoto Android TV
    initTvNavigation();
    if (typeof window.initTvFocus === 'function') {
      window.initTvFocus();
    }
  }

  initMainSectionTabs() {
    const tabs = document.querySelectorAll('.section-nav-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const section = tab.getAttribute('data-section');
        this.filters.setType(section);
      });
    });

    // Gran Botón 1: Canales de TV -> Entrar directamente a Zapping TV
    const heroCardTv = document.getElementById('heroCardTv');
    if (heroCardTv) {
      heroCardTv.addEventListener('click', () => {
        const tvStations = this.dataManager.getAllStations().filter(s => s.type === 'tv');
        const defaultStation = tvStations.find(s => s.id === 'cl-tv-canal13') || tvStations.find(s => s.id === 'cl-tv-tvn') || tvStations[0];
        if (defaultStation) {
          this.player.playTv(defaultStation);
        }
      });
    }

    // Gran Botón 2: Radios de Chile -> Reproductor móvil Spotify / Apple Music
    const heroCardRadio = document.getElementById('heroCardRadio');
    if (heroCardRadio) {
      heroCardRadio.addEventListener('click', () => {
        this.filters.setType('radio');
        const radioSection = document.getElementById('radioSectionContainer');
        if (radioSection) {
          radioSection.classList.remove('is-hidden');
          radioSection.scrollIntoView({ behavior: 'smooth' });
        }
        if (!this.player.currentStation || this.player.currentStation.type !== 'radio') {
          const radioStations = this.dataManager.getAllStations().filter(s => s.type === 'radio');
          const defaultRadio = radioStations.find(s => s.id === 'cl-rad-rockandpop') || radioStations[0];
          if (defaultRadio) {
            this.player.playRadio(defaultRadio);
          }
        }
      });
    }
  }

  /* ========================================================================
     RENDERIZADO DE TARJETAS
     ======================================================================== */

  renderStations(stations) {
    if (!this.dom.stationsGrid) return;

    if (!stations || stations.length === 0) {
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

    const currentPlayingId = this.player.currentStation ? this.player.currentStation.id : null;
    const isActuallyPlaying = this.player.isPlaying;

    let html = '';
    stations.forEach(station => {
      const isFav = this.favoritesManager.isFavorite(station.id);
      const isThisPlaying = (station.id === currentPlayingId) && isActuallyPlaying;
      const isTv = station.type === 'tv';

      const typeBadgeClass = isTv ? 'badge-tv' : 'badge-radio';
      const typeLabel = isTv ? '📺 TV' : '📻 Radio';
      const flag = this.getCountryFlag(station.country);

      // Icono de fallback para logo
      const placeholderIcon = isTv ? '📺' : '📻';

      html += `
        <div class="station-card type-${station.type} ${isThisPlaying ? 'is-playing is-active' : ''}" data-id="${station.id}" tabindex="0" role="button" aria-label="${station.name}">
          <div class="card-header">
            <div class="card-badges">
              <span class="badge-tag ${typeBadgeClass}">${typeLabel}</span>
              ${(station.sources && station.sources.length > 1) ? `<span class="badge-tag" style="background: rgba(0, 229, 255, 0.15); border: 1px solid rgba(0, 229, 255, 0.35); color: #00e5ff; font-weight: 700;">📡 ${station.sources.length} Fuentes</span>` : ''}
              <span class="live-indicator">
                <span class="live-dot"></span> EN VIVO
              </span>
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

    this.dom.stationsGrid.innerHTML = html;

    // Asignar manejadores de eventos delegados a las tarjetas
    this.dom.stationsGrid.querySelectorAll('.station-card').forEach(card => {
      const id = card.getAttribute('data-id');
      const station = this.dataManager.getStationById(id);
      if (!station) return;

      // Botón Play
      const playBtn = card.querySelector('[data-action="play"]');
      if (playBtn) {
        playBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          this.handleStationPlayToggle(station);
        });
      }

      // Botón Favorito
      const favBtn = card.querySelector('[data-action="toggle-fav"]');
      if (favBtn) {
        favBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const isFavNow = this.favoritesManager.toggleFavorite(station.id);
          this.filters.updateFavCounter();
          
          favBtn.classList.toggle('is-favorite', isFavNow);
          const svg = favBtn.querySelector('svg');
          if (svg) svg.setAttribute('fill', isFavNow ? '#f59e0b' : 'none');

          this.showToast(isFavNow ? `Añadido a favoritos: ${station.name}` : `Quitado de favoritos: ${station.name}`, 'info');

          // Si estamos en la pestaña favoritos, re-renderizar
          if (this.filters.state.type === 'favorites') {
            this.filters.triggerChange();
          }
        });
      }

      // Clic en la tarjeta completa: sintoniza inmediatamente (TV abre Zapping TV, Radio inicia en barra de audio)
      card.addEventListener('click', (e) => {
        if (e.target.closest('[data-action="toggle-fav"]') || e.target.closest('[data-action="play"]')) {
          return;
        }
        this.handleStationPlayToggle(station);
      });

      // Tecla Enter del control remoto sobre la tarjeta enfocada
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.keyCode === 13) {
          e.preventDefault();
          this.handleStationPlayToggle(station);
        }
      });
    });
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
      const isTvPlayerOpen = this.player?.dom?.tvZappingView && !this.player.dom.tvZappingView.classList.contains('is-hidden');
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
