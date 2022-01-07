import { createSlice } from '@reduxjs/toolkit';
import { getMoviesByCategory, MovieCategory } from '../../../../domain/usecases';

import { reducer, initialState } from './movies.reducer';

export const moviesSlice = createSlice({
    name: 'movies',
    reducers: reducer,
    initialState
});

export const moviesActions = moviesSlice.actions;

export function fetchMovies() {
    return async function fetchMoviesThunk(dispatch: any, _state: any) {
        dispatch(moviesActions.fetchMovies({}));
        try {
            const {data: popularMovies} = await getMoviesByCategory(MovieCategory.popular);
            const {data: topRatedMovies} = await getMoviesByCategory(MovieCategory.topRated);
            const {data: upcomingMovies} = await getMoviesByCategory(MovieCategory.upcoming);
            dispatch(moviesActions.fetchMoviesSuccess({ upcoming: upcomingMovies, popular: popularMovies, top_rated: topRatedMovies }));
        } catch(error) {
            dispatch(moviesActions.fetchMoviesFailure(error));
        }
    }
}