/**
 * ANTENA SUR - Main Application Controller
 * Coordinador de UI, eventos, renderizado de tarjetas, modales y atajos de teclado
 */

import { DataManager } from './data-manager.js';
import { FavoritesManager } from './favorites.js';
import { FiltersEngine } from './filters.js';
import { PlayerEngine } from './player.js';
import { initTvNavigation } from './tv-navigation.js';

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
