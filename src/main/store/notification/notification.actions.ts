import { createAction } from '@reduxjs/toolkit';

export enum NOTIFICATION_ACTIONS {
    SET_NOTIFICATION = 'SET_NOTIFICATION',
    CLEAR_NOTIFICATION = 'CLEAR_NOTIFICATION'
}

export const setNotification = createAction(NOTIFICATION_ACTIONS.SET_NOTIFICATION, ({ message, feature }) => {
    return {
        type: `${feature} ${NOTIFICATION_ACTIONS.SET_NOTIFICATION}`,
        payload: message,
        meta: { feature }
    };
});

export const clearNotification = createAction(NOTIFICATION_ACTIONS.CLEAR_NOTIFICATION, ({ feature }) => {
    return {
        type: `${feature} ${NOTIFICATION_ACTIONS.SET_NOTIFICATION}`,
        payload: [],
        meta: { feature }
    }
});