import { createReducer } from "@reduxjs/toolkit";
import { AnyAction } from 'redux';

import { addFavorite, removeFavorite, setMovies, selectMovie } from './movies.actions';

export const initialState = {
  favorites: [],
  top_rated: [],
  upcoming: [],
  popular: [],
  selectedMovie: null
};

export const reducer = createReducer(initialState, builder => {
  builder
    .addCase(setMovies.type, (state: any, action: AnyAction) => {
      return { ...state, ...action.payload };
    })
    .addCase(addFavorite.type, (state: any, action: AnyAction) => {
      return {
        ...state,
        favorites: state.favorites.concat({ ...action.payload, isFavorite: !action.payload.isFavorite }),
        [action.payload.category]: state[action.payload.category].map((movie: any) =>
          movie.id === action.payload.id
            ? toggleFavorite(movie)
            : movie
        )
      };
    })
    .addCase(removeFavorite.type, (state: any, action: AnyAction) => {
      return {
        ...state,
        favorites: state.favorites.filter((movie: any) => movie.id !== action.payload.id),
        [action.payload.category]: state[action.payload.category].map((movie: any) => 
          movie.id === action.payload.id
            ? toggleFavorite(movie)
            : movie
        )
      };
    })
    .addCase(selectMovie.type, (state: any, action: AnyAction) => {
      return { ...state, selectedMovie: action.payload };
    })
    .addDefaultCase((state) => state)
})

function toggleFavorite(movie: any) {
  return { ...movie, isFavorite: !movie.isFavorite };
}