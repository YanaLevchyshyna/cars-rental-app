import { useSelector } from 'react-redux';
import { selectFavorite } from '../../redux/selectors';

// import CarFavoriteItem from '../../components/CarFavoriteItem/CarFavoriteItem';
import CarItem from '../../components/CarItem/CarItem';

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
            {favoriteCar.map((car) => (
              <li key={car.id}>
                <CarItem car={car} />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
export default FavoriteCars;
