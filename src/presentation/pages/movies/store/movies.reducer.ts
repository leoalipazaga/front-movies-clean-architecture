export const initialState = {
  favorites: [],
  isLoading: false,
  error: '',
  status: '',
  top_rated: [],
  upcoming: [],
  popular: []
};

export const reducer = {
  addFavorite(state: any, action: { payload: any }) {
    state.favorites.push(action.payload);
  },
  fetchMovies(state: any, _action: { payload: any }) {
    state.isLoading = true;
  },
  fetchMoviesSuccess(state: any, action: { payload: any }) {
    state.isLoading = false;
    state.upcoming = action.payload.upcoming;
    state.top_rated = action.payload.top_rated;
    state.popular = action.payload.popular;
  },
  fetchMoviesFailure(state: any, action: { payload: any }) {
    state.isLoading = false;
    state.error = action.payload.errorMessage;
    state.status = action.payload.status;
  }
}