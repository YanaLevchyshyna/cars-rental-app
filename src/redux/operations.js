import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// import { fetchCars, } from '../fetch-cars/fetchCars';

import { fetchAllCars } from '../fetch-cars/fetchCars';

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

axios.defaults.baseURL = 'https://656870759927836bd974cfd0.mockapi.io/';

export const getAllCars = createAsyncThunk(
  'cars/getAllCars',
  async ({ selectedPrice, selectedBrand, query }, thunkAPI) => {
    try {
      const queryParams = [];

      if (selectedPrice && selectedPrice !== 'all') {
        queryParams.push(`selectedPrice=${selectedPrice}`);
      }

      if (selectedBrand && selectedBrand !== 'all') {
        queryParams.push(`selectedBrand=${selectedBrand}`);
      }

      if (query && query.trim() !== '') {
        queryParams.push(`query=${query}`);
      }
      const queryString =
        queryParams.length > 0 ? `?${queryParams.join('&')}` : '';

      const allCars = await fetchAllCars(queryString);
      return allCars;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
