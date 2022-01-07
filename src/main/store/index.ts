import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';

import {moviesSlice} from '../../presentation/pages/movies/store';

export const rootStore = configureStore({
    reducer: {
        movies: moviesSlice.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
});

export * from '.';