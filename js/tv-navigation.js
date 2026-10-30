/**
 * ANTENA SUR - TV Navigation Engine
 * Navegación espacial determinista 2D de alta precisión para Android TV, Google TV y Smart TVs
 * Compatible con controles remotos USB Wireless con dongle 2.4GHz, mandos IR y teclados físicos
 */

export function initTvNavigation() {
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
        '.cinema-source-card',
        '[data-action="play-ep-stream"]',
        '[data-action="load-ep-streams"]',
        '.cinema-btn-load-ep-streams',
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
        '.cinema-card'
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
    // Desplazamiento inteligente para TV: centrado horizontal si está en carrusel o barra de chips
    try {
      if (element.id === 'cinemaDetailBackBtn') {
        const scrollWrap = document.getElementById('cinemaDetailScrollWrap');
        if (scrollWrap) scrollWrap.scrollTo({ top: 0, behavior: 'smooth' });
      }

      const epCard = element.closest('.cinema-episode-card') || element.closest('.cinema-torrent-item');
      if (epCard) {
        epCard.scrollIntoView({ block: 'center', inline: 'nearest', behavior: 'smooth' });
      }

      const carousel = element.closest('.cinema-ep-carousel') ||
                       element.closest('.cinema-seasons-bar') ||
                       element.closest('.cinema-subbar') ||
                       element.closest('.cinema-genres-list') ||
                       element.closest('.cinema-ranking-filters');
      if (carousel) {
        element.scrollIntoView({ block: 'nearest', inline: 'center' });
      } else if (!epCard && element.id !== 'cinemaDetailBackBtn') {
        element.scrollIntoView({ block: 'nearest', inline: 'nearest' });
      }
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

    // Helper: determinar si un elemento es visible en pantalla
    const isVisible = el => el && (el.offsetWidth > 0 || el.offsetHeight > 0 || (el.getClientRects && el.getClientRects().length > 0)) && window.getComputedStyle(el).display !== 'none' && window.getComputedStyle(el).visibility !== 'hidden';

    // ========================================================================
    // 1. NAVEGACIÓN DETERMINISTA EN VISTA DE DETALLES (PELÍCULAS Y SERIES)
    // ========================================================================
    const cinemaDetailView = document.getElementById('cinemaDetailView');
    if (cinemaDetailView && !cinemaDetailView.classList.contains('is-hidden')) {
      const backBtn = document.getElementById('cinemaDetailBackBtn');
      const favBtn = document.getElementById('cinemaDetailFavBtn');
      const watchedBtn = document.getElementById('cinemaDetailWatchedBtn');

      // Garantizar que si no hay foco válido dentro de detalles, se inicie en VOLVER A CARTELERA o en la primera calidad
      if (!current || !cinemaDetailView.contains(current)) {
        const firstPlayable = cinemaDetailView.querySelector('[data-action="play-movie-quality"], .cinema-season-tab.is-active, .cinema-season-tab, .cinema-source-card') || backBtn;
        if (firstPlayable) setFocus(firstPlayable);
        return;
      }

      // 1.1 Foco en Botón "◀ VOLVER A CARTELERA"
      if (current === backBtn || current.id === 'cinemaDetailBackBtn') {
        if (direction === 'ArrowRight' || direction === 'ArrowDown') {
          // Prioridad: ir al contenido principal abajo o a las acciones de biblioteca
          if (isVisible(favBtn)) { setFocus(favBtn); return; }
          if (isVisible(watchedBtn)) { setFocus(watchedBtn); return; }
          const firstQuality = cinemaDetailView.querySelector('[data-action="play-movie-quality"]');
          if (firstQuality && isVisible(firstQuality)) { setFocus(firstQuality); return; }
          const activeSeason = cinemaDetailView.querySelector('.cinema-season-tab.is-active, .cinema-season-tab');
          if (activeSeason && isVisible(activeSeason)) { setFocus(activeSeason); return; }
          const firstEpStream = cinemaDetailView.querySelector('.cinema-episodes-container .cinema-source-card, .cinema-episodes-container [data-action="play-ep-stream"], .cinema-episodes-container [data-action="load-ep-streams"]');
          if (firstEpStream && isVisible(firstEpStream)) { setFocus(firstEpStream); return; }
        }
        return;
      }

      // 1.2 Foco en Botones de Acciones Plex (Mi Biblioteca y Marcar como Visto)
      if (current === favBtn || current.id === 'cinemaDetailFavBtn') {
        if (direction === 'ArrowUp' || direction === 'ArrowLeft') {
          setFocus(backBtn);
          return;
        }
        if (direction === 'ArrowRight') {
          if (isVisible(watchedBtn)) { setFocus(watchedBtn); return; }
        }
        if (direction === 'ArrowDown') {
          const firstQuality = cinemaDetailView.querySelector('[data-action="play-movie-quality"]');
          if (firstQuality && isVisible(firstQuality)) { setFocus(firstQuality); return; }
          const activeSeason = cinemaDetailView.querySelector('.cinema-season-tab.is-active, .cinema-season-tab');
          if (activeSeason && isVisible(activeSeason)) { setFocus(activeSeason); return; }
          const firstEpStream = cinemaDetailView.querySelector('.cinema-episodes-container .cinema-source-card, .cinema-episodes-container [data-action="play-ep-stream"], .cinema-episodes-container [data-action="load-ep-streams"]');
          if (firstEpStream && isVisible(firstEpStream)) { setFocus(firstEpStream); return; }
        }
        return;
      }

      if (current === watchedBtn || current.id === 'cinemaDetailWatchedBtn') {
        if (direction === 'ArrowUp') {
          setFocus(backBtn);
          return;
        }
        if (direction === 'ArrowLeft') {
          if (isVisible(favBtn)) { setFocus(favBtn); return; }
          setFocus(backBtn);
          return;
        }
        if (direction === 'ArrowDown') {
          const firstQuality = cinemaDetailView.querySelector('[data-action="play-movie-quality"]');
          if (firstQuality && isVisible(firstQuality)) { setFocus(firstQuality); return; }
          const activeSeason = cinemaDetailView.querySelector('.cinema-season-tab.is-active, .cinema-season-tab');
          if (activeSeason && isVisible(activeSeason)) { setFocus(activeSeason); return; }
          const firstEpStream = cinemaDetailView.querySelector('.cinema-episodes-container .cinema-source-card, .cinema-episodes-container [data-action="play-ep-stream"], .cinema-episodes-container [data-action="load-ep-streams"]');
          if (firstEpStream && isVisible(firstEpStream)) { setFocus(firstEpStream); return; }
        }
        return;
      }

      // 1.3 Foco en Calidades de Películas ([data-action="play-movie-quality"])
      if (current.dataset && current.dataset.action === 'play-movie-quality') {
        const qualities = Array.from(cinemaDetailView.querySelectorAll('[data-action="play-movie-quality"]')).filter(isVisible);
        const qIdx = qualities.indexOf(current);
        if (direction === 'ArrowDown') {
          if (qIdx !== -1 && qIdx < qualities.length - 1) {
            setFocus(qualities[qIdx + 1]);
            return;
          }
        }
        if (direction === 'ArrowUp') {
          if (qIdx > 0) {
            setFocus(qualities[qIdx - 1]);
            return;
          }
          if (isVisible(favBtn)) { setFocus(favBtn); return; }
          setFocus(backBtn);
          return;
        }
        if (direction === 'ArrowLeft') {
          setFocus(backBtn);
          return;
        }
        return;
      }

      // 1.4 Foco en Pestañas de Temporadas de Series (.cinema-season-tab)
      if (current.classList && current.classList.contains('cinema-season-tab')) {
        const tabs = Array.from(cinemaDetailView.querySelectorAll('.cinema-season-tab')).filter(isVisible);
        const tIdx = tabs.indexOf(current);
        if (direction === 'ArrowLeft') {
          if (tIdx > 0) {
            setFocus(tabs[tIdx - 1]);
            return;
          }
          if (isVisible(favBtn)) { setFocus(favBtn); return; }
          setFocus(backBtn);
          return;
        }
        if (direction === 'ArrowRight') {
          if (tIdx !== -1 && tIdx < tabs.length - 1) {
            setFocus(tabs[tIdx + 1]);
            return;
          }
        }
        if (direction === 'ArrowUp') {
          if (isVisible(favBtn)) { setFocus(favBtn); return; }
          setFocus(backBtn);
          return;
        }
        if (direction === 'ArrowDown') {
          const firstEpStream = cinemaDetailView.querySelector('.cinema-episodes-container .cinema-source-card, .cinema-episodes-container [data-action="play-ep-stream"], .cinema-episodes-container [data-action="load-ep-streams"]');
          if (firstEpStream && isVisible(firstEpStream)) {
            setFocus(firstEpStream);
            return;
          }
        }
        return;
      }

      // 1.5 Foco en Fuentes de Episodios (.cinema-source-card / streams)
      const currentSourceCard = current.closest('.cinema-source-card') || current.closest('[data-action="play-ep-stream"]') || current.closest('[data-action="load-ep-streams"]') || (current.classList && current.classList.contains('cinema-source-card') ? current : null);
      if (currentSourceCard) {
        const currentEpCard = currentSourceCard.closest('.cinema-episode-card');
        const allEpCards = Array.from(cinemaDetailView.querySelectorAll('.cinema-episode-card')).filter(isVisible);

        if (currentEpCard) {
          const epIdx = allEpCards.indexOf(currentEpCard);
          const epSources = Array.from(currentEpCard.querySelectorAll('.cinema-source-card, [data-action="play-ep-stream"], [data-action="load-ep-streams"]')).filter(isVisible);
          const sIdx = epSources.indexOf(currentSourceCard);

          if (direction === 'ArrowLeft') {
            if (sIdx > 0) {
              setFocus(epSources[sIdx - 1]);
              return;
            }
          }
          if (direction === 'ArrowRight') {
            if (sIdx !== -1 && sIdx < epSources.length - 1) {
              setFocus(epSources[sIdx + 1]);
              return;
            }
          }
          if (direction === 'ArrowDown') {
            if (epIdx !== -1 && epIdx < allEpCards.length - 1) {
              const nextEp = allEpCards[epIdx + 1];
              const nextSources = Array.from(nextEp.querySelectorAll('.cinema-source-card, [data-action="play-ep-stream"], [data-action="load-ep-streams"]')).filter(isVisible);
              if (nextSources.length > 0) {
                const target = nextSources[Math.min(Math.max(0, sIdx), nextSources.length - 1)];
                setFocus(target);
                return;
              }
            }
          }
          if (direction === 'ArrowUp') {
            if (epIdx > 0) {
              const prevEp = allEpCards[epIdx - 1];
              const prevSources = Array.from(prevEp.querySelectorAll('.cinema-source-card, [data-action="play-ep-stream"], [data-action="load-ep-streams"]')).filter(isVisible);
              if (prevSources.length > 0) {
                const target = prevSources[Math.min(Math.max(0, sIdx), prevSources.length - 1)];
                setFocus(target);
                return;
              }
            } else {
              const activeSeason = cinemaDetailView.querySelector('.cinema-season-tab.is-active, .cinema-season-tab');
              if (activeSeason && isVisible(activeSeason)) {
                setFocus(activeSeason);
                return;
              }
              if (isVisible(favBtn)) { setFocus(favBtn); return; }
              setFocus(backBtn);
              return;
            }
          }
        }
        return;
      }
      return;
    }

    // ========================================================================
    // 2. NAVEGACIÓN DETERMINISTA EN CARTELERA PRINCIPAL (CINEMA VOD)
    // ========================================================================
    const cinemaVodView = document.getElementById('cinemaVodView');
    if (cinemaVodView && !cinemaVodView.classList.contains('is-hidden')) {
      const backBtn = document.getElementById('cinemaBackBtn');
      const moviesBtn = document.getElementById('cinemaModeMoviesBtn');
      const seriesBtn = document.getElementById('cinemaModeSeriesBtn');
      const libraryBtn = document.getElementById('cinemaModeLibraryBtn');
      const searchInput = document.getElementById('cinemaSearchInput');
      const userBtn = document.getElementById('cinemaUserBtn');

      // Garantizar foco inicial dentro de la cartelera
      if (!current || !cinemaVodView.contains(current)) {
        setFocus(moviesBtn || backBtn);
        return;
      }

      // 2.1 Barra Superior Header HUD: ATRÁS <-> PELÍCULAS <-> SERIES <-> MI BIBLIOTECA <-> BUSCADOR <-> USUARIO
      if (current === backBtn || current.id === 'cinemaBackBtn') {
        if (direction === 'ArrowRight') {
          // El camino más corto y natural: ir a PELÍCULAS
          setFocus(moviesBtn || seriesBtn);
          return;
        }
        if (direction === 'ArrowDown') {
          // Bajar a la primera categoría de la subbarra
          const firstChip = cinemaVodView.querySelector('.cinema-subbar .cinema-genre-chip.is-active, .cinema-subbar .cinema-rank-chip.is-active, .cinema-subbar .cinema-rank-chip, .cinema-subbar .cinema-genre-chip');
          if (firstChip && isVisible(firstChip)) { setFocus(firstChip); return; }
          const firstCard = cinemaVodView.querySelector('#cinemaGrid .cinema-card');
          if (firstCard && isVisible(firstCard)) { setFocus(firstCard); return; }
        }
        return;
      }

      if (current === moviesBtn || current.id === 'cinemaModeMoviesBtn') {
        if (direction === 'ArrowLeft') { setFocus(backBtn); return; }
        if (direction === 'ArrowRight') { setFocus(seriesBtn || libraryBtn); return; }
        if (direction === 'ArrowDown') {
          const activeChip = cinemaVodView.querySelector('.cinema-subbar .cinema-rank-chip.is-active, .cinema-subbar .cinema-genre-chip.is-active, .cinema-subbar .cinema-rank-chip, .cinema-subbar .cinema-genre-chip');
          if (activeChip && isVisible(activeChip)) { setFocus(activeChip); return; }
          const firstCard = cinemaVodView.querySelector('#cinemaGrid .cinema-card');
          if (firstCard && isVisible(firstCard)) { setFocus(firstCard); return; }
        }
        return;
      }

      if (current === seriesBtn || current.id === 'cinemaModeSeriesBtn') {
        if (direction === 'ArrowLeft') { setFocus(moviesBtn || backBtn); return; }
        if (direction === 'ArrowRight') { setFocus(libraryBtn || searchInput); return; }
        if (direction === 'ArrowDown') {
          const activeChip = cinemaVodView.querySelector('.cinema-subbar .cinema-genre-chip.is-active, .cinema-subbar .cinema-genre-chip');
          if (activeChip && isVisible(activeChip)) { setFocus(activeChip); return; }
          const firstCard = cinemaVodView.querySelector('#cinemaGrid .cinema-card');
          if (firstCard && isVisible(firstCard)) { setFocus(firstCard); return; }
        }
        return;
      }

      if (current === libraryBtn || current.id === 'cinemaModeLibraryBtn') {
        if (direction === 'ArrowLeft') { setFocus(seriesBtn || moviesBtn); return; }
        if (direction === 'ArrowRight') { setFocus(searchInput || userBtn); return; }
        if (direction === 'ArrowDown') {
          const firstCard = cinemaVodView.querySelector('#cinemaGrid .cinema-card');
          if (firstCard && isVisible(firstCard)) { setFocus(firstCard); return; }
        }
        return;
      }

      if (current === searchInput || current.id === 'cinemaSearchInput') {
        if (direction === 'ArrowLeft') { setFocus(libraryBtn || seriesBtn || moviesBtn); return; }
        if (direction === 'ArrowRight') { setFocus(userBtn); return; }
        if (direction === 'ArrowDown') {
          const activeChip = cinemaVodView.querySelector('.cinema-subbar .cinema-genre-chip.is-active, .cinema-subbar .cinema-genre-chip, .cinema-subbar .cinema-rank-chip');
          if (activeChip && isVisible(activeChip)) { setFocus(activeChip); return; }
          const firstCard = cinemaVodView.querySelector('#cinemaGrid .cinema-card');
          if (firstCard && isVisible(firstCard)) { setFocus(firstCard); return; }
        }
        return;
      }

      if (current === userBtn || current.id === 'cinemaUserBtn') {
        if (direction === 'ArrowLeft') { setFocus(searchInput || libraryBtn); return; }
        if (direction === 'ArrowDown') {
          const firstCard = cinemaVodView.querySelector('#cinemaGrid .cinema-card');
          if (firstCard && isVisible(firstCard)) { setFocus(firstCard); return; }
        }
        return;
      }

      // 2.2 Barra de Categorías / Chips (.cinema-subbar)
      if (current.classList && (current.classList.contains('cinema-genre-chip') || current.classList.contains('cinema-rank-chip'))) {
        const chips = Array.from(cinemaVodView.querySelectorAll('.cinema-subbar .cinema-rank-chip, .cinema-subbar .cinema-genre-chip')).filter(isVisible);
        const cIdx = chips.indexOf(current);

        if (direction === 'ArrowLeft') {
          if (cIdx > 0) {
            setFocus(chips[cIdx - 1]);
            return;
          }
          // Si está en el primer chip y va a la izquierda, subir directamente a ATRÁS
          setFocus(backBtn);
          return;
        }

        if (direction === 'ArrowRight') {
          if (cIdx !== -1 && cIdx < chips.length - 1) {
            setFocus(chips[cIdx + 1]);
            return;
          }
        }

        if (direction === 'ArrowUp') {
          // Subir a la pestaña de modo actualmente activa
          const activeModeTab = cinemaVodView.querySelector('.cinema-nav-tabs .cinema-tab-btn.is-active') || moviesBtn || backBtn;
          setFocus(activeModeTab);
          return;
        }

        if (direction === 'ArrowDown') {
          // Bajar inmediatamente al primer póster de la cuadrícula
          const firstCard = cinemaVodView.querySelector('#cinemaGrid .cinema-card');
          if (firstCard && isVisible(firstCard)) {
            setFocus(firstCard);
            return;
          }
        }
        return;
      }

      // 2.3 Cuadrícula de Pósters (.cinema-card)
      if (current.classList && current.classList.contains('cinema-card')) {
        const allCinemaCards = Array.from(cinemaVodView.querySelectorAll('#cinemaGrid .cinema-card')).filter(isVisible);
        const total = allCinemaCards.length;
        if (total > 0) {
          const idx = allCinemaCards.indexOf(current);
          if (idx !== -1) {
            let cols = 1;
            const top0 = allCinemaCards[0].offsetTop;
            while (cols < total && allCinemaCards[cols].offsetTop === top0) {
              cols++;
            }

            if (direction === 'ArrowUp') {
              if (idx < cols) {
                // Primera fila: subir a las categorías
                const activeChip = cinemaVodView.querySelector('.cinema-subbar .cinema-genre-chip.is-active, .cinema-subbar .cinema-rank-chip.is-active') ||
                                   cinemaVodView.querySelector('.cinema-subbar .cinema-genre-chip, .cinema-subbar .cinema-rank-chip');
                if (activeChip && isVisible(activeChip)) {
                  setFocus(activeChip);
                  return;
                }
                setFocus(moviesBtn || backBtn);
                return;
              } else {
                setFocus(allCinemaCards[idx - cols]);
                return;
              }
            }

            if (direction === 'ArrowDown') {
              const nextIdx = idx + cols;
              if (window.AntenaSurCinema && typeof window.AntenaSurCinema.loadNextPage === 'function') {
                if (nextIdx >= total - (cols * 2)) {
                  window.AntenaSurCinema.loadNextPage();
                }
              }
              if (nextIdx < total) {
                setFocus(allCinemaCards[nextIdx]);
                return;
              } else {
                if (window.AntenaSurCinema && typeof window.AntenaSurCinema.loadNextPage === 'function') {
                  window.AntenaSurCinema.loadNextPage();
                }
                return;
              }
            }

            if (direction === 'ArrowLeft') {
              if (idx > 0) {
                setFocus(allCinemaCards[idx - 1]);
                return;
              }
            }

            if (direction === 'ArrowRight') {
              if (idx < total - 1) {
                setFocus(allCinemaCards[idx + 1]);
                return;
              }
            }
          }
        }
        return;
      }
      return;
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
