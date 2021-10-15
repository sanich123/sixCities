import Sprite from '../main/sprite/sprite';
import Header from '../main/header/header';
import Footer from '../main/footer/footer';
import FavoritesList from './favorite-list/favorite-list';
import {Offer} from '../../types/types';

type favoriteProps = {
  offers: Offer[];
}

function Favorites({offers}: favoriteProps): JSX.Element {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  const uniqueСities = Array.from(new Set(favoriteOffers.map(({city}) => city.name)));

  return (
    <>
      <Sprite />

      <div className="page">

        <Header />

        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {uniqueСities.map((city) =>
                  (<FavoritesList city={city} offers={favoriteOffers} key={city} />))}
              </ul>
            </section>
          </div>
        </main>

        <Footer />

      </div>
    </>
  );
}

export default Favorites;
