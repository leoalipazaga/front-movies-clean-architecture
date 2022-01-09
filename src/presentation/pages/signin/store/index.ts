import { createSlice } from '@reduxjs/toolkit';

import { initialState, reducer } from './user.reducer';

export const userSlice = createSlice({
    name: 'user',
    reducers: reducer,
    initialState
});

export const userActions = userSlice.actions;

export function signinFlow(api: () => Promise<any>,) {
    return async function signinThunk(dispatch: any, _state: any) {
        dispatch(userActions.login({}));
        try {
            const userLogged = await api();
            dispatch(userActions.loginSuccess(userLogged.data));
        } catch(error) {
            dispatch(userActions.loginFailure(error));
        }
    }
}