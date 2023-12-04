export const selectPage = (state) => state.cars.page;

export const selectLimit = (state) => state.cars.limit;

export const selectCars = (state) => state.cars.carsList;

export const getIsLoading = (state) => state.cars.isLoading;

export const getError = (state) => state.cars.error;

export const selectFavorite = (state) => state.favorite.favoritesCars;
