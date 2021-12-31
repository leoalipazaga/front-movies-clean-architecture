export const initialState = {
  favorites: []
};

export const reducer = {
  addFavorite(state: any, action: { payload: any }) {
    state.favorites.push(action.payload);
  }
}