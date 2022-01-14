import { createSlice } from '@reduxjs/toolkit';

import { initialState, reducer } from './user.reducer';
import { authenticate } from '../../../../domain/usecases';

export const userSlice = createSlice({
    name: 'user',
    reducers: reducer,
    initialState
});

export const {loginSuccess, loginFailure, login} = userSlice.actions;

export function signinFlow(user: any, params: { onSucess?: () => void, onError?: () => void } = {}) {
    return async function signinThunk(dispatch: any, _state: any) {
        dispatch(login({}));
        try {
            const userLogged = await authenticate(user);
            dispatch(loginSuccess(userLogged.data));
            params.onSucess && params.onSucess();
            return userLogged.data;
        } catch(error) {
            dispatch(loginFailure(error));
            params.onError && params.onError();
            return error;
        }
    }
}