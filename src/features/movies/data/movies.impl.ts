import { MoviesStore, MoviesStoreState } from '../repository';
import { useDispatch, useSelector } from 'react-redux';

import * as moviesActions from './movies.actions';
import { MovieEntity } from '../domain';

export function useMoviesStoreImpl(): MoviesStore {
    const dispatch = useDispatch();
    const favorites = useSelector((state: any): MovieEntity[] => state.movies.favorites);
    const upcoming = useSelector((state: any): MovieEntity[] => state.movies.upcoming);
    const popular = useSelector((state: any): MovieEntity[] => state.movies.popular);
    const top_rated = useSelector((state: any): MovieEntity[] => state.movies.top_rated);
    const selectedMovie = useSelector((state: any): MovieEntity => state.movies.selectedMovie);
    
    function loadMovies() {
        dispatch(moviesActions.fetchMovies());
    }

    function setMovies(movies: MoviesStoreState) {
        dispatch(moviesActions.setMovies({query: movies}));
    }

    function selectMovie(movie: any) {
        dispatch(moviesActions.selectMovie(movie));
    }

    function addFavorite(movie: any) {
        dispatch(moviesActions.addFavorite({ movie }));
    }

    function removeFavorite(movie: any) {
        dispatch(moviesActions.removeFavorite({ movie }))
    }

    return {
        favorites,
        upcoming,
        popular,
        top_rated,
        selectedMovie,
        loadMovies,
        selectMovie,
        setMovies,
        addFavorite,
        removeFavorite
    }
}