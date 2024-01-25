import axios from 'axios';

axios.defaults.baseURL = 'https://656870759927836bd974cfd0.mockapi.io';

// export async function fetchAllCars() {
//   const { data } = await axios.get('/cars');

//   return data;
// }

export async function fetchCars(page = 1, limit = 12, brand = null) {
  const { data } = await axios.get('/cars', {
    params: {
      page,
      limit,
      brand,
    },
  });
  return data;
}
