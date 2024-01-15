import { useSelector } from 'react-redux';
import { selectFavorite } from '../../redux/selectors';

import CarItem from '../../components/CarItem/CarItem';
import { Section, CarsList, ListItem } from './FavoriteCar.styled';

function FavoriteCars() {
  const favoriteCar = useSelector(selectFavorite);
  console.log('Favorite', favoriteCar);

  if (favoriteCar.length < 1) {
    return <h1>Please choose your favorite car!</h1>;
  }

  return (
    <>
      <main>
        <h1>Your favorite cars</h1>
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
