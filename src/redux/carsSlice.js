import { createSlice } from '@reduxjs/toolkit';

// import { getCars } from '../redux/operations';
import { getAllCars, getCarMakes } from '../redux/operations';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    carMakes: [],
    carsList: [],
    isLoading: false,
    error: null,
  },
  selectors: {
    selectCarMake: (state) => state.carMakes,
    selectCarsList: (state) => state.carsList,
    selectIsLoading: (state) => state.isLoading,
    selectError: (state) => state.error,
  },
  // reducers: {
  //   loadMoreCars: (state, action) => {
  //     state.page = action.payload.page;
  //     state.limit = action.payload.limit;
  //   },
  // },
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
      .addCase(getCarMakes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.carMakes = action.payload;
      })
      .addCase(getCarMakes.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCarMakes.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// export const { loadMoreCars } = carsSlice.actions;

export const { selectCarMake, selectCarsList, selectError, selectIsLoading } =
  carsSlice.selectors;

export default carsSlice.reducer;
