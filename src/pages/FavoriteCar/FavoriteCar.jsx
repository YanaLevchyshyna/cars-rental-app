import { useSelector } from 'react-redux';

import { selectFavorite } from '../../redux/favoriteSlice';

import CarItem from '../../components/CarItem/CarItem';
import car from '../../static/media/sport-vintage.png';
import {
  Section,
  CarsList,
  ListItem,
  Title,
  VintageCarImg,
} from './FavoriteCar.styled';

function FavoriteCars() {
  const favoriteCar = useSelector(selectFavorite);
  // console.log('Favorite', favoriteCar);

  if (favoriteCar.length < 1) {
    return (
      <>
        <Title>Please choose your favorite car!</Title>;
        <VintageCarImg src={car} alt="Vintage Car" />
      </>
    );
  }

  return (
    <>
      <main>
        <Title>Your favorite cars</Title>
        <Section>
          <CarsList>
            {favoriteCar.map((car) => (
              <ListItem key={car.id}>
                <CarItem car={car} />
              </ListItem>
            ))}
          </CarsList>
        </Section>
      </main>
    </>
  );
}
export default FavoriteCars;
