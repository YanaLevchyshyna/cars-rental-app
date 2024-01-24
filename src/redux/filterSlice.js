import { createSlice } from '@reduxjs/toolkit';

import { getAllCars } from '../redux/operations';

const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    allCars: [],
    filteredCars: [],
    query: '',
    priceFilter: null,
    brandFilter: null,
  },
  selectors: {
    selectAllCars: (state) => state.allCars,
    selectFilteredCars: (state) => state.filteredCars,
  },
  reducers: {
    setQueryFilter(state, { payload }) {
      state.query = payload;
    },
    setPriceFilter(state, { payload }) {
      state.priceFilter = payload;
    },
    setBrandFilter(state, { payload }) {
      state.brandFilter = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCars.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllCars.fulfilled, (state, action) => {
        state.allCars = action.payload;
        state.filteredCars = action.payload;
      })
      .addCase(getAllCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setQueryFilter, setBrandFilter, setPriceFilter } =
  filterSlice.actions;

export const { selectAllCars, selectFilteredCars } = filterSlice.selectors;

export default filterSlice.reducer;
