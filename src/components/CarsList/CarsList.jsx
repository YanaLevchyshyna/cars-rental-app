import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Select from 'react-select';

import { selectCarsList, selectPage } from '../../redux/carsSlice';
// import { selectAllCars } from '../../redux/filterSlice';
import { getCars } from '../../redux/operations';
// import { getAllCars } from '../../redux/operations';
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
  // const allCars = useSelector(selectAllCars);
  // console.log('allCars', allCars);

  const cars = useSelector(selectCarsList);
  const page = useSelector(selectPage);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars({ page }));
  }, [dispatch, page]);

  // useEffect(() => {
  //   dispatch(getAllCars());
  // }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(loadMoreCars({ page: page + 1, limit: 12 }));
  };

  const capitalizeString = (string) => {
    return `${string[0].toUpperCase()}${string.slice(1)}`;
  };

  const carBrandList = [
    ...cars.map(({ id, make }) => ({
      value: id,
      label: capitalizeString(make),
    })),
  ];

  return (
    <>
      <Select options={carBrandList} placeholder="Car brand" />
      <Select />
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
    </>
  );
}
