import { createAction } from '@reduxjs/toolkit';

// command actions
export const USER_FEATURE = '[USER]';

export const setUser = createAction(`${USER_FEATURE} SET`, (param: any) => ({
    type: `${USER_FEATURE} SET`,
    payload: param
}));

export const userSignin = createAction(`${USER_FEATURE} SIGNIN`, (param: any) => ({
    type: `${USER_FEATURE} SIGNIN`,
    payload: param
}));

export const userSignout = createAction(`${USER_FEATURE} SIGNOUT`, () => ({
    type: `${USER_FEATURE} SIGNOUT`,
    payload: null
}));

export const userSignup = createAction(`${USER_FEATURE} SIGNUP`, (param: any) => ({
    type: `${USER_FEATURE} SIGNUP`,
    payload: param
}));