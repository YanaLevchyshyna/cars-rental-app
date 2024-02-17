import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import Select from 'react-select';

import {
  selectByBrand,
  selectByPrice,
  selectByMileageFrom,
  // selectByMileageTo,
} from '../../redux/filterSlice';
import { selectCarsList, selectCarOptions } from '../../redux/carsSlice';
import {
  filteredByMileageFrom,
  filteredByBrand,
  filteredByPrice,
  // filteredByMileageTo,
} from '../../redux/filterSlice';
import { getAllCars, getCarOptions } from '../../redux/operations';
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
  const [inputQueryFrom, setInputQueryFrom] = useState('');
  const [inputQueryTo, setInputQueryTo] = useState('');

  // const [currentPage, setCurrentPage] = useState(1);

  const cars = useSelector(selectCarsList);
  // console.log('CARS', cars);
  const carOptions = useSelector(selectCarOptions);
  // console.log('carBrands', carBrands);

  const selectedBrand = useSelector(selectByBrand);
  const selectedPrice = useSelector(selectByPrice);
  const query = useSelector(selectByMileageFrom);
  // const milageTo = useSelector(selectByMileageTo);

  useEffect(() => {
    dispatch(getCarOptions());
  }, [dispatch]);

  useEffect(() => {
    dispatch(
      getAllCars({
        selectedBrand: selectedBrand.value,
        selectedPrice: selectedPrice.value,
        query,
      })
    );
  }, [selectedBrand, selectedPrice, query, dispatch]);

  const allBrands = carOptions.flatMap((car) => car.make);
  const uniqueCarMakes = [...new Set(allBrands)];
  // console.log('uniqueCarMakes', uniqueCarMakes);

  const carBrandList = [
    { value: 'all', label: 'All car brands' },
    ...uniqueCarMakes.map((make) => ({
      value: make,
      label: make,
    })),
  ];

  const uniquePrices = [
    ...new Set(
      carOptions.map(({ rentalPrice }) => rentalPrice.replace('$', ''))
    ),
  ];
  const ascendingPrices = [...uniquePrices].sort(
    (a, b) => Number(a) - Number(b)
  );

  const carRentalPriceList = [
    { value: 'all', label: 'All car rental prices' },
    ...ascendingPrices.map((rentalPrice) => ({
      value: `$${rentalPrice}`,
      label: `$${rentalPrice}`,
    })),
  ];

  // const handleLoadMore = () => {
  //   setCurrentPage((currentPage) => currentPage + 1);
  //   // console.log('prevPage', currentPage);
  // };

  const handleBrandChange = (selectedOption) => {
    dispatch(filteredByBrand(selectedOption));
  };

  const handlePriceChange = (selectedOption) => {
    dispatch(filteredByPrice(selectedOption));
  };

  const handleFromInputChange = (e) => {
    const { value } = e.target;
    setInputQueryFrom(value);
  };

  const handleToInputChange = (e) => {
    const { value } = e.target;
    setInputQueryTo(value);
  };

  const handleSearch = (e) => {
    console.log('EVENT ===>', e);
    e.preventDefault();

    const searchValueFrom = e.target.elements[0].value;
    // const searchValueTo = Math.round(parseFloat(inputQueryTo));
    dispatch(filteredByMileageFrom(searchValueFrom));
    // dispatch(filteredByMileageTo(searchValueTo));
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
              value={inputQueryFrom}
              onChange={handleFromInputChange}
            />
          </label>
          <label htmlFor="">
            <InputToEl
              type="text"
              placeholder="To"
              name="mileageTo"
              value={inputQueryTo}
              onChange={handleToInputChange}
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
        <Button>Load more</Button>
      </Wrapper>
    </>
  );
}
