import { createReducer, ActionReducerMapBuilder, AnyAction } from '@reduxjs/toolkit';

import { setUser } from './user.action';

export const initialState = {
    userAuthenticated: null,
    isAuthenticated: false
}

export const reducer = createReducer(initialState, (builder: ActionReducerMapBuilder<any>) => {
    builder
        .addCase(setUser.type, (_state: any, action: AnyAction) => ({ userAuthenticated: action.payload.userAuthenticated, isAuthenticated: action.payload.isAuthenticated  }))
        .addDefaultCase((state: any) => state)
});