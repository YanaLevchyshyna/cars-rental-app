import { useSelector } from 'react-redux';
import { selectFavorite } from '../../redux/selectors';

import CarItem from '../../components/CarItem/CarItem';
import { Section, CarsList, ListItem, Title } from './FavoriteCar.styled';

function FavoriteCars() {
  const favoriteCar = useSelector(selectFavorite);
  // console.log('Favorite', favoriteCar);

  if (favoriteCar.length < 1) {
    return <Title>Please choose your favorite car!</Title>;
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
