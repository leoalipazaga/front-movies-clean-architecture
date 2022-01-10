import { createSlice } from '@reduxjs/toolkit';

import { reducer, initialState } from './movies.reducer';

export const moviesSlice = createSlice({
    name: 'movies',
    reducers: reducer,
    initialState
});

export const moviesActions = moviesSlice.actions;

export function fetchMovies(api: (category: any) => Promise<any>) {
    return async function fetchMoviesThunk(dispatch: any, _state: any) {
        dispatch(moviesActions.fetchMovies({}));
        try {
            const {data: popularMovies} = await api('popular');
            const {data: topRatedMovies} = await api('top_rated');
            const {data: upcomingMovies} = await api('upcoming');
            dispatch(moviesActions.fetchMoviesSuccess({ upcoming: upcomingMovies, popular: popularMovies, top_rated: topRatedMovies }));
        } catch(error) {
            dispatch(moviesActions.fetchMoviesFailure(error));
        }
    }
}