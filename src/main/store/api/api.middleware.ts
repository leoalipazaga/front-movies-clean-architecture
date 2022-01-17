import { AnyAction } from '@reduxjs/toolkit';

import { API_ACTIONS, apiSuccess, apiError } from './api.actions';
import { fetchios } from '../../../infrastructure/http';

export function middleware({ dispatch }: any) {
    return function (next: any) {
        return function (action: AnyAction) {
            next(action);
            if(action.type.includes(API_ACTIONS.REQUEST)) {
                const { url, method, feature } = action.meta;
                const { body } = action.payload;
                const http = fetchios[String(method).toLowerCase()];

                // call to api and dispatch event actions
                http({ url, body })
                    .then((response: any) => dispatch(apiSuccess({ response: response.data.results, feature })))
                    .catch((error: any) => dispatch(apiError({ error, feature })))
            }
        }
    }
}