import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { selectCars, selectPage } from '../../redux/selectors';
import { getCars } from '../../redux/operations';
import CarItem from '../CarItem/CarItem';
import { loadMoreCars } from '../../redux/carsSlice';

import {
  Wrapper,
  Section,
  CarsListEl,
  ListItem,
  Button,
} from './CarsList.styled';

export default function CarsList() {
  const cars = useSelector(selectCars);
  const page = useSelector(selectPage);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars({ page }));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    dispatch(loadMoreCars({ page: page + 1, limit: 12 }));
  };

  return (
    <Wrapper>
      <Section>
        <CarsListEl>
          {cars.map((car) => (
            <ListItem key={car.id}>
              <CarItem car={car} />
            </ListItem>
          ))}
        </CarsListEl>
      </Section>
      <Button onClick={handleLoadMore}>Load more</Button>
    </Wrapper>
  );
}
