/**
 * ANTENA SUR - CINEMA & SERIES VOD ENGINE
 * Catálogo inteligente de Películas y Series con Reproductor Integrado
 * Streaming directo de Torrents (WebTorrent) y Servidor en la Aplicación
 */

export class CinemaEngine {
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
    const torrentId = (torrent && (torrent.magnet_url || torrent.hash)) || null;
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

    let torrentId = (stream && (stream.magnet_url || stream.hash)) || null;
    let fileIdx = (stream && stream.fileIdx !== undefined && stream.fileIdx !== null) ? stream.fileIdx : null;

    if (!torrentId && episode.streams && episode.streams.length > 0) {
      episode.streams = this.sortStreamsByQuality(episode.streams);
      const best = episode.streams[0];
      torrentId = best.magnet_url || best.hash;
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
          const tid = first.magnet_url || first.hash;
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
    const nextTorrentId = nextStream.magnet_url || nextStream.hash;
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

