import { createSlice } from '@reduxjs/toolkit';

import { getCars } from '../redux/operations';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    page: 1,
    limit: 12,
    carsList: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    loadMoreCars: (state, action) => {
      state.page = action.payload.page;
      state.limit = action.payload.limit;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        state.carsList =
          state.page === 1
            ? action.payload.map((car) => ({ ...car })) // Копіювати дані без Proxy
            : [...state.carsList, ...action.payload.slice(0, state.limit)];

        // console.log(
        //   'After update - page:',
        //   state.page,
        //   'limit:',
        //   state.limit,
        //   'carsList:',
        //   state.carsList
        // );
      })
      .addCase(getCars.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { loadMoreCars } = carsSlice.actions;

export default carsSlice.reducer;
