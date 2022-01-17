import { createAction } from '@reduxjs/toolkit';

export enum API_ACTIONS {
    // command action
    REQUEST = 'API_REQUEST',
    // event action
    SUCCESS = 'API_SUCCESS',
    ERROR = 'API_ERROR'
}

// command action
export const API_REQUEST = createAction(API_ACTIONS.REQUEST, apiRequest);

// event action
export const API_ERROR = createAction(API_ACTIONS.ERROR, apiError);
export const API_SUCCESS = createAction(API_ACTIONS.SUCCESS, apiSuccess);

// action creators
export function apiRequest({ body, url, method, feature }: any) {
    return { type: `${feature} ${API_ACTIONS.REQUEST}`, meta: { url, method, feature }, payload: { body } }
}

export function apiSuccess({ response, feature }: any) {
    return { type: `${feature} ${API_ACTIONS.SUCCESS}`, payload: {response}, meta: { feature } };
}

export function apiError({ error, feature }: any) {
    return { type: `${feature} ${API_ACTIONS.ERROR}`, payload: error, meta: { feature } };
}
