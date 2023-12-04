import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Container, Header, Link } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="catalog">Cars</Link>
          <Link to="favorites">Favorite cars</Link>
        </nav>
      </Header>

      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
  );
};
