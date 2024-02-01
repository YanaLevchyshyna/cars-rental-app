import { createSlice } from '@reduxjs/toolkit';

// import { getCars } from '../redux/operations';
import { getAllCars } from '../redux/operations';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    page: 1,
    limit: 12,
    carsList: [],
    isLoading: false,
    error: null,
    filterByBrand: null,
    filterByPrice: null,
  },
  selectors: {
    selectPage: (state) => state.page,
    selectLimit: (state) => state.limit,
    selectCarsList: (state) => state.carsList,
    selectIsLoading: (state) => state.isLoading,
    selectError: (state) => state.error,
    selectByBrand: (state) => state.filterByBrand,
    selectByPrice: (state) => state.filterByPrice,
  },
  reducers: {
    loadMoreCars: (state, action) => {
      state.page = action.payload.page;
      state.limit = action.payload.limit;
    },
    filteredByBrand: (state, action) => {
      state.filterByBrand = action.payload.value;
    },
    filteredByPrice: (state, action) => {
      state.filterByPrice = action.payload.value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCars.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllCars.fulfilled, (state, action) => {
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
      .addCase(getAllCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { loadMoreCars, filteredByBrand, filteredByPrice } =
  carsSlice.actions;

export const {
  selectPage,
  selectCarsList,
  selectError,
  selectIsLoading,
  selectLimit,
  selectByBrand,
  selectByPrice,
} = carsSlice.selectors;

export default carsSlice.reducer;
