import { createReducer, AnyAction } from '@reduxjs/toolkit';

import { NOTIFICATION_ACTIONS, clearNotification } from './notification.actions';

const initialState: any[] = [];

export const reducer = createReducer(initialState, builder => {
    builder
        .addCase(clearNotification.type, () => ([]))
        .addMatcher(isSetNotification, (state, action: AnyAction) => state.concat(action.payload))
        .addDefaultCase((state) => state)
});

function isSetNotification(action: AnyAction) {
    return action.type.includes(NOTIFICATION_ACTIONS.SET_NOTIFICATION);
}