import { useSelector } from 'react-redux';
import { selectFavorite } from '../../redux/selectors';

// import CarItem from '../../components/CarItem/CarItem';
// import { Section, CarsList, ListItem, Title } from './FavoriteCar.styled';

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
        <section>
          <ul>
            {favoriteCar.map((auto) => (
              <li key={auto.id}>{auto.model}</li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
export default FavoriteCars;
