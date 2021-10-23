import Sprite from '../common/sprite';
import Header from '../common/header';
import Footer from '../main/footer';
import FavoritesList from './favorite-list';
import { Offer } from '../../types/types';

type favoriteProps = {
  offers: Offer[];
 }

function Favorites({ offers }: favoriteProps): JSX.Element {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  const uniqueСities = Array.from(new Set(favoriteOffers.map(({ city }) => city.name)));

  return (
    <>
      <Sprite />

      <div className={ `${!favoriteOffers.length && 'page--favorites-empty'} page`}>

        <Header />

        <main className={ `${!favoriteOffers.length && 'page__main--favorites-empty'} page__main page__main--favorites`}>
          <div className="page__favorites-container container">
            { favoriteOffers.length ?
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                <ul className="favorites__list">
                  { uniqueСities.map((city) =>
                    (<FavoritesList city={ city } offers={ favoriteOffers } key={ city } />)) }
                </ul>
              </section>
              :
              <section className="favorites favorites--empty">
                <h1 className="visually-hidden">Favorites (empty)</h1>
                <div className="favorites__status-wrapper">
                  <b className="favorites__status">Nothing yet saved.</b>
                  <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
                </div>
              </section>}
          </div>
        </main>

        <Footer />

      </div>
    </>
  );
}

export default Favorites;
