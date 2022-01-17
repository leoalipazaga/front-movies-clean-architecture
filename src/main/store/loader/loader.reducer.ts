import { createReducer } from '@reduxjs/toolkit';
import { AnyAction } from 'redux';
import { LOADER_ACTIONS } from './loader.actions';

const initialState = {
    isLoading: false
}

export const reducer = createReducer(initialState, builder => {
    builder
        .addMatcher(isLoader, (state: any, action: AnyAction) => {
            return { ...state, isLoading: action.payload };
        })
        .addDefaultCase((state) => {
            return { ...state };
        })
});

function isLoader(action: AnyAction) {
    return action.type.includes(LOADER_ACTIONS.SET_LOADER);
}