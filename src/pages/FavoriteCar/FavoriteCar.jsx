import { useSelector } from 'react-redux';
import { selectFavorite } from '../../redux/selectors';

import CarFavoriteItem from '../../components/CarFavoriteItem/CarFavoriteItem';

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
        <div>
          {favoriteCar.map((car) => (
            <ul key={car.id}>
              <CarFavoriteItem car={car} />
            </ul>
          ))}
        </div>
      </main>
    </>
  );
}
export default FavoriteCars;
