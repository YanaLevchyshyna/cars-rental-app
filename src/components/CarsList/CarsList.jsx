import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import Select from 'react-select';

import {
  selectByBrand,
  selectByPrice,
  selectByMileageFrom,
} from '../../redux/filterSlice';
import { selectCarsList } from '../../redux/carsSlice';
import {
  filteredByMileageFrom,
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
  Button,
} from './CarsList.styled';
import { firstSelectStyles } from '../../constants/selectStyles';

export default function CarsList() {
  const dispatch = useDispatch();
  const [inputQuery, setInputQuery] = useState('');
  // const [filteredCarBrands, setFilteredCarBrands] = useState([]);
  // console.log('filteredCarMakes', filteredCarBrands);

  const [currentPage, setCurrentPage] = useState(1);

  const cars = useSelector(selectCarsList);
  // console.log('CARS', cars);
  const selectedBrand = useSelector(selectByBrand);
  const selectedPrice = useSelector(selectByPrice);
  const milageFrom = useSelector(selectByMileageFrom);

  useEffect(() => {
    dispatch(
      getAllCars({
        selectedBrand: selectedBrand.value,
        selectedPrice: selectedPrice.value,
        milageFrom,
        page: currentPage,
        limit: 12,
      })
    );
  }, [selectedPrice, selectedBrand, milageFrom, currentPage, dispatch]);

  const allBrands = cars.flatMap((car) => car.make);
  const uniqueCarMakes = [...new Set(allBrands)];
  // console.log('uniqueCarMakes', uniqueCarMakes);

  const carBrandList = [
    { value: 'all', label: 'All car brands' },
    ...uniqueCarMakes.map((make) => ({
      value: make,
      label: make,
    })),
  ];
  // console.log('carBrandList', carBrandList);

  const carRentalPriceList = [
    { value: 'all', label: 'All car rental prices' },
    ...cars.map(({ rentalPrice }) => ({
      value: rentalPrice,
      label: rentalPrice,
    })),
  ];

  const handleLoadMore = () => {
    setCurrentPage((currentPage) => currentPage + 1);
    // console.log('prevPage', currentPage);
  };

  const handleBrandChange = (selectedOption) => {
    dispatch(filteredByBrand(selectedOption));

    // if (selectedOption.value !== 'all') {
    //   const filteredList = cars.filter(
    //     ({ make }) => make === selectedOption.value
    //   );
    //   setFilteredCarBrands(filteredList);
    // } else {
    //   setFilteredCarBrands(cars);
    // }
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
    const { value } = e.target;
    // console.log('searchValueFrom', value);
    dispatch(filteredByMileageFrom(value));
  };

  // const resetForm = () => {
  //   setInputQuery('');
  // };

  return (
    <>
      <FormWrapper>
        <Select
          styles={firstSelectStyles}
          value={selectedBrand}
          options={carBrandList}
          onChange={handleBrandChange}
          isLoading={true}
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
          value={selectedPrice}
          options={carRentalPriceList}
          onChange={handlePriceChange}
          isLoading={true}
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
            {cars.length > 0 ? (
              cars
                .filter((car) => {
                  const selectedCarByBrand =
                    selectedBrand.value === 'all' ||
                    car.make === selectedBrand.value;

                  const selectedCarByPrice =
                    selectedPrice.value === 'all' ||
                    car.rentalPrice === selectedPrice.value;
                  return selectedCarByBrand && selectedCarByPrice;
                })
                .map((car) => (
                  <ListItem key={car.id}>
                    <CarItem car={car} />
                  </ListItem>
                ))
            ) : (
              <p>
                Sorry, your query doesn't match the search criteria. Please try
                again.
              </p>
            )}
          </CarsListEl>
        </Section>
        <Button onClick={handleLoadMore}>Load more</Button>
      </Wrapper>
    </>
  );
}
