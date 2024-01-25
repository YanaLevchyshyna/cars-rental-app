import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import carsSlice from './carsSlice';
import favoriteSlice from './favoriteSlice';
// import filterSlice from './filterSlice';

export const reducer = combineReducers({
  cars: carsSlice,
  favorite: favoriteSlice,
  // filter: filterSlice,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['cars'], // Ім'я ключа, яке не потрібно зберігати
};

const persistedContactsReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedContactsReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
