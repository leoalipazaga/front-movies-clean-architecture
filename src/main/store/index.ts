import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';

import { moviesSlice } from '../../presentation/pages/movies/store';
import { userSlice } from '../../presentation/pages/signin/store';

export const rootStore = configureStore({
    reducer: {
        movies: moviesSlice.reducer,
        user: userSlice.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
});

export * from '.';