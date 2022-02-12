import { addFavorite, removeFavorite } from '../domain/movies.model';
import { MoviesStore } from '../repository';

type LoadMoviesStore = Pick<MoviesStore, 'loadMovies'>;

export function toggleFavoriteMovieUseCase(store: MoviesStore) {
    const state = store.selectedMovie.isFavorite
        ? removeFavorite({ upcoming: store.upcoming, top_rated: store.top_rated, favorites: store.favorites, selectedMovie: store.selectedMovie, popular: store.popular })
        : addFavorite({ upcoming: store.upcoming, top_rated: store.top_rated, favorites: store.favorites, selectedMovie: store.selectedMovie, popular: store.popular });
    store.setMovies(state);
}

export function loadMoviesUseCase(store: LoadMoviesStore)  {
    store.loadMovies();
}