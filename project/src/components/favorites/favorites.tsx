import Sprite from '../sprite/sprite';
import Header from '../header/header';
import Footer from '../footer/footer';
import FavoriteCity from './favorites-city/favorites-city';
import { Offers } from '../types/types';

type favoriteProps = {
  offers: Offers;
}

function Favorites({offers}: favoriteProps): JSX.Element {
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
                {offers.map((
                  { id,
                    description,
                    price,
                    type,
                    rating,
                    isPremium,
                    isFavorite,
                    city,
                    previewImage,
                  }) =>
                  isFavorite ?
                    <FavoriteCity
                      key={id}
                      type={type}
                      description={description}
                      price={price}
                      rating={rating}
                      isPremium={isPremium}
                      city={city}
                      previewImage={previewImage}
                      id={id}
                    /> : '')}
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
