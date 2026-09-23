/**
 * ANTENA SUR - Filters Engine
 * Manejo de navegación por tipo de medio (TV / Radio / Favoritos), géneros y buscador
 * (Se eliminaron los filtros innecesarios de región y ciudad por requerimiento de usuario)
 */

export class FiltersEngine {
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
