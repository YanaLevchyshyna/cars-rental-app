import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filterByBrand: { value: 'all', label: 'All car brands' },
    filterByPrice: { value: 'all', label: 'All car rental prices' },
    filterByMileageFrom: '',
  },
  selectors: {
    selectByBrand: (state) => state.filterByBrand,
    selectByPrice: (state) => state.filterByPrice,
    selectByMileageFrom: (state) => state.filterByMileageFrom,
  },
  reducers: {
    filteredByBrand: (state, action) => {
      state.filterByBrand = action.payload;
    },
    filteredByPrice: (state, action) => {
      state.filterByPrice = action.payload;
    },
    filteredByMileageFrom: (state, action) => {
      state.filterByMileageFrom = action.payload;
    },
  },
});

export const { filteredByBrand, filteredByPrice, filteredByMileageFrom } =
  filterSlice.actions;

export const { selectByBrand, selectByPrice, selectByMileageFrom } =
  filterSlice.selectors;

export default filterSlice.reducer;
