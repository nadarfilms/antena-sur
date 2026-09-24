/**
 * ANTENA SUR - TV Navigation Engine
 * Navegación espacial determinista 2D de alta precisión para Android TV, Google TV y Smart TVs
 * Compatible con controles remotos USB Wireless con dongle 2.4GHz, mandos IR y teclados físicos
 */

export function initTvNavigation() {
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
      try { element.focus(); } catch (e2) {}
    }
    try {
      element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
    } catch (e) {
      try { element.scrollIntoView(); } catch (e2) {}
    }
    document.querySelectorAll('.is-tv-focused').forEach(el => el.classList.remove('is-tv-focused'));
    element.classList.add('is-tv-focused');
  }

  function navigateSpatial(direction) {
    let current = document.activeElement;
    const tvFocused = document.querySelector('.is-tv-focused');
    if (!current || current === document.body || !document.contains(current)) {
      current = tvFocused;
    }

    const heroTv = document.getElementById('heroCardTv');
    const heroRadio = document.getElementById('heroCardRadio');
    const tabTv = document.getElementById('sectionTabTv');
    const tabRadio = document.getElementById('sectionTabRadio');
    const firstStationCard = document.querySelector('.stations-grid .station-card');

    if (!current) {
      setFocus(heroTv || tabTv);
      return;
    }

    // ========================================================================
    // 1. NAVEGACIÓN DETERMINISTA EN BARRA SUPERIOR DE PESTAÑAS
    // ========================================================================
    if (current === tabTv || current.id === 'sectionTabTv') {
      if (direction === 'ArrowRight') { setFocus(tabRadio); return; }
      if (direction === 'ArrowDown') { setFocus(heroTv); return; }
      return;
    }
    if (current === tabRadio || current.id === 'sectionTabRadio') {
      if (direction === 'ArrowLeft') { setFocus(tabTv); return; }
      if (direction === 'ArrowDown') { setFocus(heroRadio); return; }
      return;
    }

    // ========================================================================
    // 2. NAVEGACIÓN DETERMINISTA EN LOS 2 GRANDES BOTONES PRINCIPALES (HERO)
    // ========================================================================
    if (current === heroTv || current.id === 'heroCardTv') {
      if (direction === 'ArrowUp') { setFocus(tabTv); return; }
      if (direction === 'ArrowRight') { setFocus(heroRadio); return; }
      if (direction === 'ArrowDown') {
        if (firstStationCard) setFocus(firstStationCard);
        return;
      }
      return;
    }
    if (current === heroRadio || current.id === 'heroCardRadio') {
      if (direction === 'ArrowUp') { setFocus(tabRadio); return; }
      if (direction === 'ArrowLeft') { setFocus(heroTv); return; }
      if (direction === 'ArrowDown') {
        if (firstStationCard) setFocus(firstStationCard);
        return;
      }
      return;
    }

    // ========================================================================
    // 3. NAVEGACIÓN DETERMINISTA DENTRO DEL CATÁLOGO DE ESTACIONES (.station-card)
    // ========================================================================
    if (current.classList && current.classList.contains('station-card')) {
      const allCards = Array.from(document.querySelectorAll('.stations-grid .station-card'));
      const idx = allCards.indexOf(current);

      if (idx !== -1) {
        const curRect = current.getBoundingClientRect();
        const firstRowTop = allCards[0] ? allCards[0].getBoundingClientRect().top : undefined;

        // Subir desde la primera fila de tarjetas regresa al gran botón de TV
        if (direction === 'ArrowUp') {
          if (firstRowTop !== undefined && Math.abs(curRect.top - firstRowTop) < 35) {
            setFocus(heroTv);
            return;
          }
          // Subir a la fila anterior buscando la tarjeta verticalmente más cercana
          let bestUp = null;
          let minDiff = Infinity;
          for (let i = 0; i < idx; i++) {
            const r = allCards[i].getBoundingClientRect();
            const dy = r.top - curRect.top;
            if (dy < -20) {
              const dx = Math.abs(r.left - curRect.left);
              const score = Math.abs(dy) + dx * 2;
              if (score < minDiff) {
                minDiff = score;
                bestUp = allCards[i];
              }
            }
          }
          if (bestUp) {
            setFocus(bestUp);
            return;
          }
        }

        // Bajar a la siguiente fila de tarjetas
        if (direction === 'ArrowDown') {
          let bestDown = null;
          let minDiff = Infinity;
          for (let i = idx + 1; i < allCards.length; i++) {
            const r = allCards[i].getBoundingClientRect();
            const dy = r.top - curRect.top;
            if (dy > 20) {
              const dx = Math.abs(r.left - curRect.left);
              const score = dy + dx * 2;
              if (score < minDiff) {
                minDiff = score;
                bestDown = allCards[i];
              }
            }
          }
          if (bestDown) {
            setFocus(bestDown);
            return;
          }
        }

        // Desplazamiento horizontal secuencial entre tarjetas
        if (direction === 'ArrowLeft' && idx > 0) {
          setFocus(allCards[idx - 1]);
          return;
        }
        if (direction === 'ArrowRight' && idx < allCards.length - 1) {
          setFocus(allCards[idx + 1]);
          return;
        }
      }
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
    const firstCard = document.querySelector('.stations-grid .station-card');
    setFocus(heroTv || firstCard);
  };

  window.onTvBack = function() {
    const player = window.AntenaSurPlayer || (window.__antenaSurApp ? window.__antenaSurApp.player : null);
    const isTvPlayerOpen = (player && player.dom && player.dom.tvZappingView && !player.dom.tvZappingView.classList.contains('is-hidden'));
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
    const player = window.AntenaSurPlayer || (window.__antenaSurApp ? window.__antenaSurApp.player : null);
    const isTvPlayerOpen = (player && player.dom && player.dom.tvZappingView && !player.dom.tvZappingView.classList.contains('is-hidden'));

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
