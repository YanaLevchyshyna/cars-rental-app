import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    favoritesCars: [],
  },
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

export default favoriteSlice.reducer;
