import Sprite from '../common/sprite';
import Header from '../common/header';
import Footer from '../main/footer';
import FavoritesList from './favorite-list';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchFavorites } from '../../store/api-actions';
import { favorites } from '../../store/reducer/data/data-selectors';

function Favorites(): JSX.Element {
  const dispatch = useDispatch();
  const favoriteHotels = useSelector(favorites);
  const uniqueСities = Array.from(new Set(favoriteHotels.map(({ city }) => city.name)));

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  return (
    <>
      <Sprite />

      <div className={ `${!favoriteHotels.length && 'page--favorites-empty'} page`}>

        <Header />

        <main className={ `${!favoriteHotels.length && 'page__main--favorites-empty'} page__main page__main--favorites`}>
          <div className="page__favorites-container container">
            <section className={ `favorites${ !favoriteHotels.length && '--empty'}`}>
              <h1 className={ favoriteHotels.length ? 'favorites__title' : 'visually-hidden'}>{ favoriteHotels.length > 0 ? 'Saved listing' : 'Favorites (empty)'}</h1>
              { favoriteHotels.length > 0 ?
                <ul className="favorites__list">
                  { uniqueСities.map((city) =>
                    (<FavoritesList city={ city } offers={ favoriteHotels } key={ city } />)) }
                </ul>
                :
                <div className="favorites__status-wrapper">
                  <b className="favorites__status">Nothing yet saved.</b>
                  <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
                </div> }
            </section>
          </div>
        </main>

        <Footer />

      </div>
    </>
  );
}

export default Favorites;
