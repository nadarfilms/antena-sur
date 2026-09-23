/**
 * ANTENA SUR - Favorites & History Manager
 * Gestión en LocalStorage de emisoras favoritas y reproducciones recientes
 */

export class FavoritesManager {
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
