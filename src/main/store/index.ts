import { configureStore } from '@reduxjs/toolkit';

import {moviesSlice} from '../../presentation/pages/movies/store';

export const rootStore = configureStore({
    reducer: {
        movies: moviesSlice.reducer
    }
});;

export * from '.';