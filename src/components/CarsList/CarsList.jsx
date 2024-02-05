import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import Select from 'react-select';

import {
  selectByBrand,
  selectByPrice,
  selectBySearch,
} from '../../redux/filterSlice';
import { selectCarsList } from '../../redux/carsSlice';
import {
  filteredBySearch,
  filteredByBrand,
  filteredByPrice,
} from '../../redux/filterSlice';
import { getAllCars } from '../../redux/operations';
import CarItem from '../CarItem/CarItem';
import {
  Wrapper,
  Section,
  CarsListEl,
  ListItem,
  FormWrapper,
  InputFromEl,
  InputToEl,
  SearchButton,
  // Button,
} from './CarsList.styled';
import { firstSelectStyles } from '../../constants/selectStyles';

export default function CarsList() {
  const [inputQuery, setInputQuery] = useState('');

  const cars = useSelector(selectCarsList);

  const selectedBrand = useSelector(selectByBrand);
  // console.log('selectedBrand', selectedBrand);
  const selectedPrice = useSelector(selectByPrice);
  const query = useSelector(selectBySearch);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getAllCars({
        selectedBrand: selectedBrand.value,
        selectedPrice: selectedPrice.value,
        query,
      })
    );
  }, [selectedPrice, selectedBrand, query, dispatch]);

  const capitalizeString = (string) => {
    return `${string[0].toUpperCase()}${string.slice(1)}`;
  };

  const carBrandList = [
    { value: 'all', label: 'All Brands' },
    ...cars.map(({ make }) => ({
      value: make,
      label: capitalizeString(make),
    })),
  ];

  // const carBrandList = cars.reduce(
  //   (options, { make }) => {
  //     const makeValue = make.toLowerCase();
  //     if (!options.some((option) => option.value === makeValue)) {
  //       options.push({
  //         value: makeValue,
  //         label: capitalizeString(make),
  //       });
  //     }
  //     return options;
  //   },
  //   [{ value: 'all', label: 'All Brands' }]
  // );

  // const carRentalPriceList = cars.reduce(
  //   (options, { rentalPrice }) => {
  //     if (!options.some((option) => option.value === rentalPrice)) {
  //       options.push({
  //         value: rentalPrice,
  //         label: rentalPrice,
  //       });
  //     }
  //     return options;
  //   },
  //   [{ value: 'all', label: 'All Prices' }]
  // );

  const carRentalPriceList = [
    { value: 'all', label: 'All Prices' },
    ...cars.map(({ rentalPrice }) => ({
      value: rentalPrice,
      label: rentalPrice,
    })),
  ];

  const handleBrandChange = (selectedOption) => {
    dispatch(filteredByBrand(selectedOption));
  };

  const handlePriceChange = (selectedOption) => {
    dispatch(filteredByPrice(selectedOption));
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setInputQuery(value);
  };

  const handleSearch = (e) => {
    // console.log('EVENT ===>', e);
    e.preventDefault();
    const searchValueFrom = e.target[0].value;
    console.log('searchValueFrom', searchValueFrom);
    dispatch(filteredBySearch(searchValueFrom));
  };

  // const resetForm = () => {
  //   setInputQuery('');
  // };

  return (
    <>
      <FormWrapper>
        <Select
          styles={firstSelectStyles}
          options={carBrandList}
          onChange={handleBrandChange}
          placeholder="Enter the car brand"
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
          options={carRentalPriceList}
          onChange={handlePriceChange}
          placeholder="To"
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

        <form onSubmit={handleSearch}>
          <label>
            <InputFromEl
              type="text"
              placeholder="From"
              name="mileageFrom"
              value={inputQuery}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="">
            <InputToEl
              type="text"
              placeholder="To"
              name="mileageTo"
              value={inputQuery}
              onChange={handleChange}
            />
          </label>
          <SearchButton type="submit">Search</SearchButton>
        </form>
      </FormWrapper>
      <Wrapper>
        <Section>
          <CarsListEl>
            {cars
              .filter(
                (car) =>
                  selectedBrand.value === 'all' ||
                  car.make === selectedBrand.value
              )
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
