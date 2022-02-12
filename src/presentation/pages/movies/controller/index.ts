import { useCallback, useEffect } from 'react';

import { MoviesStore } from '../../../../features/movies/repository';
import { loadMoviesUseCase } from '../../../../features/movies/usecase';
import img from '../../../../assets/img/hero.png';

export function useMoviesViewController(store: MoviesStore) {
  const loadMovies = useCallback(() => {
    loadMoviesUseCase({ loadMovies: store.loadMovies });
  }, [store.loadMovies]);

  useEffect(() => {
    loadMovies();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    favoritesMovies: store.favorites,
    upcomingMovies: store.upcoming,
    popularMovies: store.popular,
    topRatedMovies: store.top_rated,
    loadMovies,
    img
  }
}
