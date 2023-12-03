import PropTypes from 'prop-types';

import defaultCar from '../DefaultImage/defaultCar1.jpeg';

import {
  FirstItemWrapper,
  Span,
  FirstList,
  SecondList,
  Button,
} from './CarItem.styled';

export default function CarItem({ car }) {
  const {
    make,
    model,
    year,
    address,
    rentalPrice,
    img,
    type,
    rentalCompany,
    functionalities,
  } = car;

  const addressParts = address.split(', ');
  const city = addressParts[1];
  const country = addressParts[2];

  return (
    <>
      <img src={img || defaultCar} alt={make} />
      <FirstItemWrapper>
        <p>
          {make} <Span>{model}</Span>
        </p>
        <p>{rentalPrice}</p>
      </FirstItemWrapper>
      <FirstList>
        <li>{city}</li>
        <li>{country}</li>
        <li>{rentalCompany}</li>
      </FirstList>
      <SecondList>
        <li>{type}</li>
        <li>{year}</li>
        <li>{functionalities[0]}</li>
      </SecondList>
      <Button>Learn more</Button>
    </>
  );
}

CarItem.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number.isRequired,
    make: PropTypes.string,
    img: PropTypes.string,
  }).isRequired,
};
