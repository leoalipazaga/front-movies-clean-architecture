import { createAction } from "@reduxjs/toolkit";

export enum LOADER_ACTIONS {
    SET_LOADER = 'SET_LOADER'
}

export const SET_LOADER = createAction(LOADER_ACTIONS.SET_LOADER, ({ state, feature }) => {
    return {
        type: `${feature} ${LOADER_ACTIONS.SET_LOADER}`,
        payload: state,
        meta: { feature }
    };
});

export const setLoader = ({ state, feature }: any) => {
    return {
        type: `${feature} ${LOADER_ACTIONS.SET_LOADER}`,
        payload: state,
        meta: { feature }
    };
}