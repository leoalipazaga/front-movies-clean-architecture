export const initialState = {
    userAuthenticated: null,
    isAuthenticated: false,
    isLoading: false,
    error: null
}

export const reducer = {
    login(state: any, _action: { payload: any }) {
        state.isLoading = true;
    },
    loginSuccess(state: any, action: { payload: any }) {
        state.userAuthenticated = action.payload;
        state.error = null;
        state.isAuthenticated = true;
        state.isLoading = false;
    },
    loginFailure(state: any, action: { payload: any }) {
        state.userAuthenticated = null;
        state.error = action.payload;
        state.isAuthenticated = false;
        state.isLoading = false;
    }
}