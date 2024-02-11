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
  // Button,
} from './CarsList.styled';
import { firstSelectStyles } from '../../constants/selectStyles';

export default function CarsList() {
  const dispatch = useDispatch();
  const [inputQuery, setInputQuery] = useState('');
  const [carBrandList, setCarBrandList] = useState([]);
  const [filteredCarMakes, setFilteredCarMakes] = useState([]);
  const [uniqueMakes, setUniqueMakes] = useState([]);
  console.log(filteredCarMakes);

  // const [filteredCars, setFilteredCars] = useState([]);

  const cars = useSelector(selectCarsList);
  const selectedBrand = useSelector(selectByBrand);
  // console.log('selectedBrand before', selectedBrand);
  const selectedPrice = useSelector(selectByPrice);
  const milageFrom = useSelector(selectByMileageFrom);

  useEffect(() => {
    const allBrands = cars.flatMap((car) => car.make);
    const uniqueCarMakes = allBrands.filter(
      (make, index, array) => array.indexOf(make) === index
    );

    setCarBrandList([
      { value: 'all', label: 'All car brands' },
      ...uniqueCarMakes.map((make) => ({
        value: make,
        label: make,
      })),
    ]);

    setFilteredCarMakes(uniqueCarMakes);
    setUniqueMakes(uniqueCarMakes);
  }, [cars]);

  useEffect(() => {
    dispatch(
      getAllCars({
        selectedBrand: selectedBrand.value,
        selectedPrice: selectedPrice.value,
        milageFrom,
      })
    );
  }, [selectedPrice, selectedBrand, milageFrom, dispatch]);

  // const carBrandList = [
  //   { value: 'all', label: 'All car brands' },
  //   ...uniqueCarMakes.map((make) => ({
  //     value: make,
  //     label: make,
  //   })),
  // ];

  const carRentalPriceList = [
    { value: 'all', label: 'All car rental prices' },
    ...cars.map(({ rentalPrice }) => ({
      value: rentalPrice,
      label: rentalPrice,
    })),
  ];

  const handleBrandChange = (selectedOption) => {
    dispatch(filteredByBrand(selectedOption));
    if (selectedOption.value !== 'all') {
      const filteredList = uniqueMakes.filter(
        (make) => make === selectedOption.value
      );
      setFilteredCarMakes(filteredList);
    } else {
      setFilteredCarMakes(uniqueMakes);
    }
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
    console.log('searchValueFrom', value);
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
        {/* <Button onClick={handleLoadMore}>Load more</Button> */}
      </Wrapper>
    </>
  );
}
