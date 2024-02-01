import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Select from 'react-select';

import {
  selectCarsList,
  // selectPage,
  selectByBrand,
} from '../../redux/carsSlice';
import {
  // loadMoreCars,
  filteredByBrand,
  filteredByPrice,
} from '../../redux/carsSlice';
import { getAllCars } from '../../redux/operations';
import CarItem from '../CarItem/CarItem';
import {
  Wrapper,
  Section,
  CarsListEl,
  ListItem,
  // Button,
  SelectWrapper,
} from './CarsList.styled';
import { firstSelectStyles } from '../../constants/selectStyles';

export default function CarsList() {
  const cars = useSelector(selectCarsList);
  // console.log('cars', cars);

  // const page = useSelector(selectPage);

  const selectedBrand = useSelector(selectByBrand);
  // console.log('selectedBrand', selectedBrand);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);

  // const handleLoadMore = () => {
  //   dispatch(loadMoreCars({ page: page + 1, limit: 12 }));
  // };

  const capitalizeString = (string) => {
    return `${string[0].toUpperCase()}${string.slice(1)}`;
  };

  const carBrandList = [...new Set(cars.map(({ make }) => make))].map(
    (make) => ({
      value: make,
      label: capitalizeString(make),
    })
  );

  const handleBrandChange = (selectedOption) => {
    dispatch(filteredByBrand(selectedOption));
  };

  const handlePriceChange = (selectedOption) => {
    dispatch(filteredByPrice(selectedOption));
  };

  return (
    <>
      <SelectWrapper>
        <Select
          styles={firstSelectStyles}
          options={carBrandList}
          onChange={handleBrandChange}
          placeholder="Car brand"
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary50: '#121417', //колір фону коли натискаємо на селект в меню
              primary: 'transparent',
              neutral20: 'transparent', // дефолтний бордер
              neutral30: 'transparent', // дефолтний ховер бордер
              neutral50: '#121417', // колір плейсхолдера
              neutral80: '#121417',
            },
          })}
        />
        <Select
          styles={firstSelectStyles}
          onChange={handlePriceChange}
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary50: '#121417', //колір фону коли натискаємо на селект в меню
              primary: 'transparent',
              neutral20: 'transparent', // дефолтний бордер
              neutral30: 'transparent', // дефолтний ховер бордер
              neutral50: '#121417', // колір плейсхолдера
              neutral80: '#121417',
            },
          })}
        />
      </SelectWrapper>
      <Wrapper>
        <Section>
          <CarsListEl>
            {cars
              .filter((car) => !selectedBrand || car.make === selectedBrand)
              .map((car) => (
                <ListItem key={car.id}>
                  <CarItem car={car} />
                </ListItem>
              ))}
          </CarsListEl>
        </Section>
        {/* <Button onClick={handleLoadMore}>Load more</Button> */}
      </Wrapper>
    </>
  );
}
