import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Select from 'react-select';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  selectByBrand,
  selectByPrice,
  selectByMileageFrom,
  selectByMileageTo,
} from '../../redux/filterSlice';
import {
  selectCarsList,
  selectCarOptions,
  selectPage,
  selectLimit,
  selectIsLoading,
} from '../../redux/carsSlice';

import {
  filteredByMileageFrom,
  filteredByBrand,
  filteredByPrice,
  filteredByMileageTo,
} from '../../redux/filterSlice';

import { loadMoreCars } from '../../redux/carsSlice';
import { getAllCars, getCarOptions } from '../../redux/operations';
import CarItem from '../CarItem/CarItem';
import CarLoader from '../CarLoader/CarLoader';
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

  const cars = useSelector(selectCarsList);
  const page = useSelector(selectPage);
  const limit = useSelector(selectLimit);

  const carOptions = useSelector(selectCarOptions);
  // console.log('carBrands', carBrands);

  const selectedBrand = useSelector(selectByBrand);
  const selectedPrice = useSelector(selectByPrice);
  const mileageTo = useSelector(selectByMileageTo);
  const mileageFrom = useSelector(selectByMileageFrom);

  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getCarOptions());
  }, [dispatch]);

  useEffect(() => {
    dispatch(
      getAllCars({
        selectedBrand: selectedBrand.value,
        selectedPrice: selectedPrice.value,
        page,
        limit,
      })
    );
  }, [selectedBrand, selectedPrice, page, limit, dispatch]);

  // useEffect(() => {

  // })

  const totalPage = Math.floor(cars.length / limit);
  // console.log('totalPage', totalPage);

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
      value: `${rentalPrice}`,
      label: `$${rentalPrice}`,
    })),
  ];

  // const handleSearchButtonClick = (e) => {
  //   console.log('EVENT ===>', e);
  //   e.preventDefault();

  //   let filteredCars = cars;

  //   if (inputQueryFrom === '' && inputQueryTo !== '') {
  //     filteredCars = filteredCars.filter(
  //       ({ mileage }) => mileage <= parseInt(inputQueryTo, 10)
  //     );
  //   }

  //   if (inputQueryFrom !== '' && inputQueryTo === '') {
  //     filteredCars = filteredCars.filter(
  //       ({ mileage }) => mileage >= parseInt(inputQueryFrom, 10)
  //     );
  //   }

  //   if (inputQueryFrom > inputQueryTo && inputQueryTo !== '') {
  //     toast.error('Mileage is incorrect! Please try again', {
  //       position: 'top-right',
  //       theme: 'colored',
  //     });
  //     return;
  //   }
  //   if (inputQueryFrom !== '' && inputQueryTo !== '') {
  //     const mileageFrom = parseInt(inputQueryFrom, 10);
  //     const mileageTo = parseInt(inputQueryTo, 10);

  //     filteredCars = filteredCars.filter(
  //       ({ mileage }) => mileage >= mileageFrom && mileage <= mileageTo
  //     );
  //   }
  //   // if (selectedBrand) {
  //   //   filteredCars = filteredCars.filter(
  //   //     (car) =>
  //   //       selectedBrand.value === 'all' || car.make === selectedBrand.value
  //   //   );
  //   // }

  //   // if (selectedPrice) {
  //   //   filteredCars = filteredCars.filter(
  //   //     (car) =>
  //   //       selectedPrice.value === 'all' ||
  //   //       car.rentalPrice.replace('$', '') === selectedPrice.value
  //   //   );
  //   // }

  //   dispatch(filteredByMileage(filteredCars));
  //   setFilteredCarsList(filteredCars);
  //   resetForm();
  // };

  const handleBrandChange = (selectedOption) => {
    dispatch(filteredByBrand(selectedOption));
  };

  const handlePriceChange = (selectedOption) => {
    // console.log('selectedOption', selectedOption);
    dispatch(filteredByPrice(selectedOption));
  };

  const handleFromInputChange = (e) => {
    const { value } = e.target;
    dispatch(filteredByMileageFrom(value));
  };

  const handleToInputChange = (e) => {
    const { value } = e.target;
    dispatch(filteredByMileageTo(value));
  };

  const filterCars = (car) => {
    if (mileageFrom > mileageTo && mileageTo !== '') {
      toast.error('Mileage is incorrect! Please try again', {
        position: 'top-right',
        theme: 'colored',
        toastId: 'mileageErrorToast',
      });
      return false;
    }

    const selectedCarByBrand =
      selectedBrand.value === 'all' || car.make === selectedBrand.value;

    const selectedCarByPrice =
      selectedPrice.value === 'all' ||
      car.rentalPrice.replace('$', '') === selectedPrice.value;

    const selectedCarByMileage =
      (car.mileage >= parseInt(mileageFrom) || !mileageFrom) &&
      (car.mileage <= parseInt(mileageTo) || !mileageTo);

    return selectedCarByBrand && selectedCarByPrice && selectedCarByMileage;
  };

  const filteredCars = cars.filter(filterCars);

  const resetForm = () => {
    dispatch(filteredByMileageFrom(''));
    dispatch(filteredByMileageTo(''));
  };

  return (
    <>
      {isLoading && <CarLoader />}
      <FormWrapper>
        <Select
          styles={firstSelectStyles}
          value={selectedBrand}
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
          value={selectedPrice}
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
        <form>
          <label>
            <InputFromEl
              type="text"
              placeholder="From"
              name="mileageFrom"
              value={mileageFrom}
              onChange={handleFromInputChange}
            />
          </label>
          <label htmlFor="">
            <InputToEl
              type="text"
              placeholder="To"
              name="mileageTo"
              value={mileageTo}
              onChange={handleToInputChange}
            />
          </label>
          <SearchButton type="button" onClick={resetForm}>
            Cancel
          </SearchButton>
        </form>
      </FormWrapper>
      <Wrapper>
        <Section>
          <CarsListEl>
            {filteredCars.map((car) => (
              <ListItem key={car.id}>
                <CarItem car={car} />
              </ListItem>
            ))}
          </CarsListEl>
        </Section>
        {page <= totalPage && cars.length > 0 && (
          <Button
            onClick={() => dispatch(loadMoreCars({ page: page + 1, limit }))}
          >
            Load more
          </Button>
        )}
      </Wrapper>
    </>
  );
}
