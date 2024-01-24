import { createSlice } from '@reduxjs/toolkit';

import { getAllCars, getCars } from '../redux/operations';

const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    cars: [],
    filteredCars: [],
    query: '',
    priceFilter: null,
    brandFilter: null,
  },
  selectors: {
    selectAllCars: (state) => state.cars,
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
    builder.addCase(getCars.fulfilled, (state, action) => {
      state.cars = action.payload;
      state.filteredCars = action.payload;
    });
  },
});

export const { setQueryFilter, setBrandFilter, setPriceFilter } =
  filterSlice.actions;

export const { selectAllCars, selectFilteredCars } = filterSlice.selectors;

export default filterSlice.reducer;
