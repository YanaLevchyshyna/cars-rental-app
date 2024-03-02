import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filterByBrand: { value: 'all', label: 'All car makes' },
    filterByPrice: { value: 'all', label: 'All car rental prices' },
    filterByMileage: '',
  },
  selectors: {
    selectByBrand: (state) => state.filterByBrand,
    selectByPrice: (state) => state.filterByPrice,
    selectByMileage: (state) => state.filterByMileage,
  },
  reducers: {
    filteredByBrand: (state, action) => {
      state.filterByBrand = action.payload;
    },
    filteredByPrice: (state, action) => {
      state.filterByPrice = action.payload;
    },
    filteredByMileage: (state, action) => {
      state.filterByMileage = action.payload;
    },
  },
});

export const { filteredByBrand, filteredByPrice, filteredByMileage } =
  filterSlice.actions;

export const { selectByBrand, selectByPrice, selectByMileage } =
  filterSlice.selectors;

export default filterSlice.reducer;
