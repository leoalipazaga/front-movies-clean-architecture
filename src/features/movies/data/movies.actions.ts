import { createAction } from "@reduxjs/toolkit";

export const MOVIE_FEATURE = '[MOVIE]';

export const MOVIE_TOP_RATED_FEATURE = '[MOVIE_TOP_RATED]';

export const MOVIE_UPCOMING = '[MOVIE_UPCOMING]';

export const MOVIE_POPULAR = '[MOVIE_POPULAR]';

// command action
export const fetchMovies = createAction(`${MOVIE_FEATURE} FETCH`, () => ({
    type: `${MOVIE_FEATURE} FETCH`,
    payload: null
}));

// document actions
export const setMovies = createAction(`${MOVIE_FEATURE} SET`, ({ query }) => ({
    type: `${MOVIE_FEATURE} SET`,
    payload: query
}));

export const selectMovie = createAction(`${MOVIE_FEATURE} SELECT`, ({ movie }) => ({
    type: `${MOVIE_FEATURE} SELECT`,
    payload: movie
}));

export const addFavorite = createAction(`${MOVIE_FEATURE} ADD FAVORITE`, ({ movie }) => ({
    type: `${MOVIE_FEATURE} ADD FAVORITE`,
    payload: movie
}));

export const removeFavorite = createAction(`${MOVIE_FEATURE} REMOVE FAVORITE`, ({ movie }) => ({
    type: `${MOVIE_FEATURE} REMOVE FAVORITE`,
    payload: movie
}));