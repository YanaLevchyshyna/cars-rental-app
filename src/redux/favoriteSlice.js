import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    favoritesCars: [],
  },
  selectors: { selectFavorite: (state) => state.favoritesCars },
  reducers: {
    addCarToFavorite: (state, action) => {
      state.favoritesCars.push(action.payload);
    },
    deleteCarFromFavorite: (state, action) => {
      state.favoritesCars = state.favoritesCars.filter(
        (car) => car.id !== action.payload
      );
    },
  },
});

export const { addCarToFavorite, deleteCarFromFavorite } =
  favoriteSlice.actions;

export const { selectFavorite } = favoriteSlice.selectors;

export default favoriteSlice.reducer;
