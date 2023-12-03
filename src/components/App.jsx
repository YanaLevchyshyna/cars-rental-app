import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { ToastContainer } from 'react-toastify';

import { SharedLayout } from './SharedLayout/SharedLayout';

const Home = lazy(() => import('../pages/Home/Home'));
const Cars = lazy(() => import('../pages/Cars/Cars'));
const FavoriteCar = lazy(() => import('../pages/FavoriteCar/FavoriteCar'));

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Cars />} />
          <Route path="favorites" element={<FavoriteCar />} />

          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={3000} />
    </>
  );
}
