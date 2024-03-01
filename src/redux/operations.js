import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllCars, fetchCarOptions } from '../fetch-cars/fetchCars';

export const getCarOptions = createAsyncThunk(
  'cars/getCarMakes',
  async (_, { rejectWithValue }) => {
    try {
      const carMakes = await fetchCarOptions();
      // console.log('carMakes', carMakes);
      return carMakes;
    } catch (error) {
      console.log('error', error);
      return rejectWithValue(error.message);
    }
  }
);

export const getAllCars = createAsyncThunk(
  'cars/getAllCars',
  async ({ selectedBrand, selectedPrice, query, page, limit }, thunkAPI) => {
    try {
      const queryParams = [];

      console.log('selected Price OPERATIONS', selectedPrice);

      if (selectedPrice && selectedPrice !== 'all') {
        queryParams.push(`rentalPrice=${selectedPrice}`);
      }

      if (selectedBrand && selectedBrand !== 'all') {
        queryParams.push(`filter=${selectedBrand}`);
      }

      if (query && query.trim() !== '') {
        queryParams.push(`mileage=${query}`);
      }

      if (page) {
        queryParams.push(`page=${page}`);
      }

      if (limit) {
        queryParams.push(`limit=${limit}`);
      }

      const queryString =
        queryParams.length > 0 ? `?${queryParams.join('&')}` : '';

      const allCars = await fetchAllCars(queryString);
      // console.log('allCars', allCars);

      return allCars;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
