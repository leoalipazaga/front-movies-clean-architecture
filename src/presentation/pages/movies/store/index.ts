import {createSlice} from '@reduxjs/toolkit';

import {reducer, initialState} from './movies.reducer';

export const moviesSlice = createSlice({
    name: 'movies',
    reducers: reducer,
    initialState
});

export const moviesActions = moviesSlice.actions;