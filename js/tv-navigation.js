/**
 * ANTENA SUR - TV Navigation Engine
 * Navegación espacial 2D de alta precisión para Android TV, Google TV y Smart TVs
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

    // Si aún no hay nada enfocado, enfocar el botón principal de Canales de TV
    if (!current || !focusable.includes(current)) {
      const heroTv = document.getElementById('heroCardTv');
      setFocus(heroTv && focusable.includes(heroTv) ? heroTv : focusable[0]);
      return;
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
