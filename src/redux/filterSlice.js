import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filterByBrand: { value: 'all', label: 'All car brands' },
    filterByPrice: { value: 'all', label: 'All car rental prices' },
    filterBySearch: '',
  },
  selectors: {
    selectByBrand: (state) => state.filterByBrand,
    selectByPrice: (state) => state.filterByPrice,
    selectBySearch: (state) => state.filterBySearch,
  },
  reducers: {
    filteredByBrand: (state, action) => {
      state.filterByBrand = action.payload;
    },
    filteredByPrice: (state, action) => {
      state.filterByPrice = action.payload;
    },
    filteredBySearch: (state, action) => {
      state.filterBySearch = action.payload;
    },
  },
});

export const { filteredByBrand, filteredByPrice, filteredBySearch } =
  filterSlice.actions;

export const { selectByBrand, selectByPrice, selectBySearch } =
  filterSlice.selectors;

export default filterSlice.reducer;
