import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchCars, fetchAllCars } from '../fetch-cars/fetchCars';

export const getCars = createAsyncThunk(
  'cars/getCars',
  async ({ page, limit }, { rejectWithValue }) => {
    try {
      const cars = await fetchCars(page, limit);
      return cars;
    } catch (error) {
      console.log('error', error);
      return rejectWithValue(error.message);
    }
  }
);

export const getAllCars = createAsyncThunk(
  'cars/getAllCars',
  async (_, thunkAPI) => {
    try {
      const allCars = await fetchAllCars();
      return allCars;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
