import Header from '../common/header';
import Sprite from '../common/sprite';
import Map from '../map/map';
import ReviewForm from './review-form/review-form';
import Hostess from './host';
import Features from './features';
import PropertiesInside from './properties-inside';
import Price from '../common/price';
import Images from './images';
import Reviews from './reviews';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import NearPlaces from './near-places';
import Premium from '../common/premium';
import Rating from '../common/rating';
import FavoriteButton from '../common/favorite-button';
import { useSelector } from 'react-redux';

const NUMBER_OF_SLICING = 8;

function Properties(): JSX.Element {
  const offers = useSelector((state) => state.offers);
  const reviews = useSelector((state) => state.reviews);
  const uniqUrl = +useHistory().location.pathname.split('').slice(NUMBER_OF_SLICING).join('');
  const [uniqOffer] = offers.slice().filter(({ id }) => id === uniqUrl);
  const nearPlaces = offers.slice().filter(({ city, id }) => city.name === uniqOffer.city.name && id !== uniqOffer.id);
  const { images, isPremium, title, isFavorite, rating, type, bedrooms, maxAdults, price, goods, host, description } = uniqOffer;
  const [activeOffer, setActiveOffer] = useState<number | null>(null);
  const onHover = (id: number | null) => setActiveOffer(id);

  return (
    <>
      <Sprite />

      <div className="page">

        <Header />

        <main className="page__main page__main--property">
          <section className="property">

            <Images images={ images } />

            <div className="property__container container">
              <div className="property__wrapper">
                { isPremium && <Premium uniqUrl={ uniqUrl } /> }

                <div className="property__name-wrapper">

                  <h1 className="property__name">
                    { title }
                  </h1>

                  <FavoriteButton isFavorite={ isFavorite } uniqUrl={ uniqUrl } />

                </div>

                <Rating rating={ rating } uniqUrl={ uniqUrl } />

                <Features type={ type } bedrooms={ bedrooms } maxAdults={ maxAdults } />

                <Price price={ price } uniqUrl={ uniqUrl } />

                <PropertiesInside goods={ goods }/>

                <Hostess host={ host } description={ description } uniqUrl={uniqUrl} />

                <section className="property__reviews reviews">

                  <Reviews reviews={ reviews } />

                  <ReviewForm />

                </section>
              </div>
            </div>
            { nearPlaces.length > 0 &&
              <section className="property__map map">
                <Map offers={ nearPlaces } activeOffer={ activeOffer } />
              </section> }
          </section>
          <div className="container">
            { nearPlaces.length > 0 &&
              <NearPlaces nearPlaces={ nearPlaces } onHover={ onHover } /> }
          </div>
        </main>
      </div>
    </>
  );
}

export default Properties;


