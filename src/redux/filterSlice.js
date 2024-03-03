import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filterByBrand: { value: 'all', label: 'All car makes' },
    filterByPrice: { value: 'all', label: 'All car rental prices' },
    filterByMileageFrom: '',
    filterByMileageTo: '',
  },
  selectors: {
    selectByBrand: (state) => state.filterByBrand,
    selectByPrice: (state) => state.filterByPrice,
    selectByMileageFrom: (state) => state.filterByMileageFrom,
    selectByMileageTo: (state) => state.filterByMileageTo,
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
    filteredByMileageTo: (state, action) => {
      state.filterByMileageTo = action.payload;
    },
  },
});

export const {
  filteredByBrand,
  filteredByPrice,
  filteredByMileageFrom,
  filteredByMileageTo,
} = filterSlice.actions;

export const {
  selectByBrand,
  selectByPrice,
  selectByMileageFrom,
  selectByMileageTo,
} = filterSlice.selectors;

export default filterSlice.reducer;
