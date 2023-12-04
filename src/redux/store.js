import { configureStore } from '@reduxjs/toolkit';

import carsSlice from './carsSlice';
import favoriteSlice from './favoriteSlice';

export const store = configureStore({
  reducer: {
    cars: carsSlice,
    favorite: favoriteSlice,
  },
});
