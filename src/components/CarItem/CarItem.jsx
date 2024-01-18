import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

// import { selectFavorite } from '../../redux/selectors';
import { selectFavorite } from '../../redux/favoriteSlice';

import {
  addCarToFavorite,
  deleteCarFromFavorite,
} from '../../redux/favoriteSlice';
import sprite from '../../constants/sprite.svg';
import defaultCar from '../DefaultImage/defaultCar1.jpeg';
import {
  HeartSvg,
  HeartButton,
  FirstItemWrapper,
  Span,
  FirstList,
  SecondList,
  Button,
} from './CarItem.styled';

export default function CarItem({ car }) {
  const dispatch = useDispatch();
  const favorite = useSelector(selectFavorite);
  const isCarAdded = favorite.some((item) => item.id === car.id);

  const handleToggleFavorite = (e) => {
    e.stopPropagation();

    if (isCarAdded) {
      dispatch(deleteCarFromFavorite(car.id));
    } else {
      dispatch(addCarToFavorite(car));
    }
  };

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
      <HeartButton onClick={handleToggleFavorite} top="14px" right="14px">
        <HeartSvg isFavorite={isCarAdded}>
          <use href={sprite + '#icon-heart'} />
        </HeartSvg>
      </HeartButton>
      <img src={img ? img : defaultCar} alt={make} />
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
