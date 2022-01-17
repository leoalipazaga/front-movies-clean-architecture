import { AnyAction } from '@reduxjs/toolkit';
import { setLoader } from '../../../main/store/loader';

import { setNotification, clearNotification } from '../../../main/store/notification';
import { userSignin, userSignout, userSignup, setUser, USER_FEATURE } from './user.action';
import { signin, signout, signup } from './user.service';

export function middleware({ dispatch }: any) {
    return function (next: any) {
        return function (action: AnyAction) {
            next(action);
            switch (action.type) {
                case userSignin.type:
                    const user = action.payload;
                    signin(user)
                        .then((response: any) => {
                            dispatch(setLoader({ state: false, feature: USER_FEATURE }));
                            dispatch(clearNotification({ feature: USER_FEATURE }));
                            dispatch(setUser({ userAuthenticated: response.data, isAuthenticated: true }));
                        })
                        .catch((error: any) => {
                            dispatch(setNotification({ message: error.error, feature: USER_FEATURE }));
                        })
                    break;
                case userSignout.type:
                    signout()
                        .then(() => {
                            dispatch(setUser({ userAuthenticated: null, isAuthenticated: false }));
                            dispatch(clearNotification({ feature: USER_FEATURE }));
                            dispatch(setNotification({ message: [], feature: USER_FEATURE }));
                        })
                        .catch((error: any) => {
                            dispatch(setNotification({ message: error.error, feature: USER_FEATURE }))
                        })
                    break;
                case userSignup.type:
                    signup(action.payload)
                        .catch((error: any) => {
                            dispatch(setNotification({ message: error.error, feature: USER_FEATURE }))
                        })
                    break;
            }
        }
    }
}