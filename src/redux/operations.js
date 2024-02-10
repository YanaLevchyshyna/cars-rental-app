import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllCars } from '../fetch-cars/fetchCars';
// import { fetchCars, } from '../fetch-cars/fetchCars';

// export const getCars = createAsyncThunk(
//   'cars/getCars',
//   async ({ page, limit }, { rejectWithValue }) => {
//     try {
//       const cars = await fetchCars(page, limit);
//       return cars;
//     } catch (error) {
//       console.log('error', error);
//       return rejectWithValue(error.message);
//     }
//   }
// );

export const getAllCars = createAsyncThunk(
  'cars/getAllCars',
  async ({ selectedPrice, selectedBrand, query }, thunkAPI) => {
    try {
      const queryParams = [];

      console.log('selectedBrand OPERATIONS', selectedBrand);

      if (selectedPrice && selectedPrice !== 'all') {
        queryParams.push(`filter=${selectedPrice}`);
      }

      if (selectedBrand && selectedBrand !== 'all') {
        queryParams.push(`filter=${selectedBrand}`);
      }

      if (query && query.trim() !== '') {
        queryParams.push(`search=${query}`);
      }
      const queryString =
        queryParams.length > 0 ? `${queryParams.join('&')}` : '';

      const allCars = await fetchAllCars(queryString);
      return allCars;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
