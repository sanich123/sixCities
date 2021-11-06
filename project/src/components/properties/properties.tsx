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
import { useEffect, useState } from 'react';
import NearPlaces from './near-places';
import Premium from '../common/premium';
import Rating from '../common/rating';
import FavoriteButton from '../common/favorite-button';
import { useDispatch, useSelector } from 'react-redux';
import { AuthorizationStatus } from '../../const';
import { fetchComments, fetchNearBy, fetchUniqHotel } from '../../store/api-actions';
import { State } from '../../types/reducer';
import { Offer } from '../../types/types';
import LoadingScreen from '../loading-screen/loading-screen';

const NUMBER_OF_SLICING = 8;

function Properties(): JSX.Element {
  const dispatch = useDispatch();
  const comments = useSelector((state: State) => state.comments);
  const nearByOffers = useSelector((state: State) => state.nearByOffers);
  const authStatus = useSelector(({ authorizationStatus }: State) => authorizationStatus);
  const uniqUrl = +useHistory().location.pathname.split('').slice(NUMBER_OF_SLICING).join('');
  const uniqOffer = useSelector((state: State): Offer | null => state.uniqOffer);

  useEffect(() => {
    dispatch(fetchUniqHotel(uniqUrl));
  }, [dispatch, uniqUrl]);

  useEffect(() => {
    dispatch(fetchComments(uniqUrl));
  }, [dispatch, uniqUrl]);

  useEffect(() => {
    dispatch(fetchNearBy(uniqUrl));
  }, [dispatch, uniqUrl]);

  const [activeOffer, setActiveOffer] = useState<number | null>(null);
  const onHover = (id: number | null) => setActiveOffer(id);


  if (uniqOffer) {
    const { images, isPremium, title, isFavorite, rating, type, bedrooms, maxAdults, price, goods, host, description } = uniqOffer;
    const nearPlaces = [uniqOffer, ...nearByOffers];

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

                  <Hostess host={ host } description={ description } uniqUrl={ uniqUrl} />

                  <section className="property__reviews reviews">

                    { comments && <Reviews reviews={ comments } /> }

                    { authStatus === AuthorizationStatus.AUTH && <ReviewForm /> }

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
  return <LoadingScreen />;
}

export default Properties;


