import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';
import PropTypes from 'prop-types';

import defaultCar from '../DefaultImage/defaultCar1.jpeg';
import addCommaToMileage from '../../services/addCommaToMileage';
import {
  ModalBackdrop,
  ModalContetnt,
  CloseButton,
  FirstContainer,
  SecondContainer,
  Span,
  FirstList,
  SecondList,
  Image,
  Description,
  Paragraph,
  ThirdList,
  FourthList,
  SpanLi,
  Button,
} from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onClick, car }) {
  // console.log('C A R ==>', car);

  const {
    make,
    model,
    year,
    address,
    rentalPrice,
    img,
    type,
    fuelConsumption,
    engineSize,
    description,
    mileage,
    functionalities,
    accessories,
    rentalConditions,
  } = car;

  const addressParts = address.split(', ');
  const city = addressParts[1];
  const country = addressParts[2];

  const rentalConditionsParts = rentalConditions.split('\n');
  const minimumAge = rentalConditionsParts[0];
  const age = minimumAge.split(':')[1];
  const validLicense = rentalConditionsParts[1];
  const insuranceCoverage = rentalConditionsParts[2];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Escape') {
        onClick();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClick]);

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClick();
    }
  };

  return createPortal(
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalContetnt>
        <CloseButton onClick={onClick}>
          <AiOutlineClose />
        </CloseButton>
        <FirstContainer>
          <Image src={img ? img : defaultCar} alt={make} />
        </FirstContainer>
        <SecondContainer>
          <p>
            {make} <Span>{model}</Span>
          </p>
          <FirstList>
            <li>{city}</li>
            <li>{country}</li>
            <li>Year: {year}</li>
            <li>{type}</li>
          </FirstList>
          <SecondList>
            <li>Fuel consumption: {fuelConsumption}</li>
            <li>Engine size: {engineSize}</li>
          </SecondList>
          <Description>{description}</Description>
          <Paragraph>Accessories and functionalities:</Paragraph>
          <ThirdList>
            {accessories?.map((item, index) => (
              <li key={`accessory_${index}`}>{item}</li>
            ))}
            {functionalities?.map((item, index) => (
              <li key={`functionality_${index}`}>{item}</li>
            ))}
          </ThirdList>
          <Paragraph>Rental Conditions:</Paragraph>
          <FourthList>
            <li>
              Minimum age: <SpanLi>{age}</SpanLi>
            </li>
            <li>{validLicense}</li>
            <li>{insuranceCoverage}</li>
            <li>
              Mileage: <SpanLi>{addCommaToMileage(mileage)}</SpanLi>
            </li>
            <li>
              Price: <SpanLi>{rentalPrice}</SpanLi>
            </li>
          </FourthList>
        </SecondContainer>
        <Button>Rental car</Button>
      </ModalContetnt>
    </ModalBackdrop>,
    modalRoot
  );
}

Modal.propTypes = {
  onClick: PropTypes.func.isRequired,
  car: PropTypes.object.isRequired,
};
