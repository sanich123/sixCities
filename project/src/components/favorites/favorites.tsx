import Sprite from '../common/sprite';
import Header from '../common/header';
import Footer from '../main/footer';
import FavoritesList from './favorites-list';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchFavorites } from '../../store/api-actions';
import { favorites } from '../../store/reducer/process/process-data-selectors';
import cn from 'classnames';

function Favorites(): JSX.Element {
  const dispatch = useDispatch();
  const favoriteHotels = useSelector(favorites);
  const uniqueСities = Array.from(new Set(favoriteHotels.map(({ city }) => city.name)));
  const isEmptyHotels = favoriteHotels.length === 0;
  const favoritesModificator = cn('page', { 'page--favorites-empty': isEmptyHotels });
  const favoritesMainModificator = cn('page__main page__main--favorites', { 'page__main--favorites-empty' : isEmptyHotels });

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  return (
    <>
      <Sprite />

      <div className={ favoritesModificator }>

        <Header />

        <main className={ favoritesMainModificator }>
          <div className="page__favorites-container container">
            <section className={ `favorites${ isEmptyHotels && '--empty'}`}>
              <h1 className={ favoriteHotels.length > 0 ? 'favorites__title' : 'visually-hidden'}>{ favoriteHotels.length > 0 ? 'Saved listing' : 'Favorites (empty)'}</h1>
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
