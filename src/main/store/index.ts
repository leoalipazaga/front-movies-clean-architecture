import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';

import { middleware as moviesMiddleware, reducer as moviesReducer } from '../../features/movies/data';
import { middleware as userMiddleware, reducer as userReducer } from '../../features/user/data';
import { reducer as notificationReducer } from '../store/notification';
import { middleware as apiMiddleware } from '../store/api';
import { reducer as loaderReducer } from '../store/loader';

const featureMiddleware = [
    moviesMiddleware,
    userMiddleware
];

const coreMiddleware = [
    apiMiddleware
];

export const rootStore = configureStore({
    reducer: {
        movies: moviesReducer,
        user: userReducer,
        notification: notificationReducer,
        loader: loaderReducer
    },
    middleware: getDefaultMiddleware => [...getDefaultMiddleware().concat(logger), ...featureMiddleware, ...coreMiddleware]
});

export * from '.';