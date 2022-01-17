import { createReducer } from "@reduxjs/toolkit";
import { AnyAction } from 'redux';

import { addFavorite, removeFavorite, setMovies } from './movies.actions';

export const initialState = {
  favorites: [],
  top_rated: [],
  upcoming: [],
  popular: []
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
            ? { ...movie, isFavorite: !movie.isFavorite }
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
            ? { ...movie, isFavorite: !movie.isFavorite }
            : movie
        )
      };
    })
    .addDefaultCase((state) => state)
})