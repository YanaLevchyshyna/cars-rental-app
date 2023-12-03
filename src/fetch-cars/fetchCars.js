import axios from 'axios';

axios.defaults.baseURL = 'https://656870759927836bd974cfd0.mockapi.io';

export async function fetchCars(page = 1, limit = 12) {
  const { data } = await axios.get('/cars', {
    params: {
      page,
      limit,
    },
  });
  return data;
}
