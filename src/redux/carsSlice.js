import { createSlice } from '@reduxjs/toolkit';

// import { getCars } from '../redux/operations';
import { getAllCars, getCarOptions } from '../redux/operations';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    carOptions: [],
    carsList: [],
    showModal: false,
    carModal: null,
    isLoading: false,
    error: null,
  },
  selectors: {
    selectCarOptions: (state) => state.carOptions,
    selectCarsList: (state) => state.carsList,
    selectIsLoading: (state) => state.isLoading,
    selectError: (state) => state.error,
    selectModal: (state) => state.showModal,
    selectCarModal: (state) => state.carModal,
  },
  reducers: {
    // loadMoreCars: (state, action) => {
    //   state.page = action.payload.page;
    //   state.limit = action.payload.limit;
    // },
    openModal: (state, action) => {
      state.showModal = !state.showModal;
      state.carModal = action.payload;
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
        state.carsList = action.payload;
        // state.page === 1
        //   ? action.payload.map((car) => ({ ...car })) // Копіювати дані без Proxy
        //   : [...state.carsList, ...action.payload.slice(0, state.limit)];
      })
      .addCase(getAllCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getCarOptions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.carOptions = action.payload;
      })
      .addCase(getCarOptions.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCarOptions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { openModal } = carsSlice.actions;

export const {
  selectCarOptions,
  selectCarsList,
  selectError,
  selectIsLoading,
  selectModal,
  selectCarModal,
} = carsSlice.selectors;

export default carsSlice.reducer;
