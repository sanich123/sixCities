import Header from '../common/header';
import Sprite from '../common/sprite';
import Map from '../map/map';
import ReviewForm from './review-form/review-form';
import Hostess from './hostess';
import Features from './features';
import PropertiesInside from './properties-inside';
import Price from '../common/price';
import Images from './images';
import Reviews from './reviews';
import LoadingScreen from '../loading-screen/loading-screen';
import Page404 from '../page404/page404';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import NearPlaces from './near-places';
import Premium from '../common/premium';
import Rating from '../common/rating';
import FavoriteButton from '../common/favorite-button';
import { useDispatch, useSelector } from 'react-redux';
import { AuthorizationStatus } from '../../const';
import { fetchComments, fetchNearBy, fetchUniqHotel } from '../../store/api-actions';
import { getNetworkStatus, offersComments, offerSelected, offersNearBy } from '../../store/reducer/data/process-data-selectors';
import { statusOfAuth } from '../../store/reducer/user/user-selectors';

const NUMBER_OF_SLICING = 8;

function Properties(): JSX.Element {
  const dispatch = useDispatch();
  const selectedId = +useHistory().location.pathname.split('').slice(NUMBER_OF_SLICING).join('');

  useEffect(() => {
    dispatch(fetchUniqHotel(selectedId));
    dispatch(fetchComments(selectedId));
    dispatch(fetchNearBy(selectedId));
  }, [dispatch, selectedId]);

  const comments = useSelector(offersComments);
  const nearOffers = useSelector(offersNearBy);
  const authStatus = useSelector(statusOfAuth);
  const network = useSelector(getNetworkStatus);
  const selectedOffer = useSelector(offerSelected);
  const isAuthorized = authStatus === AuthorizationStatus.AUTH;

  if (!network) {
    return <Page404 />;
  }

  if (selectedOffer) {
    const { images, isPremium, title, isFavorite, rating, type, bedrooms, maxAdults, price, goods, host, description } = selectedOffer;
    const nearPlaces = [selectedOffer, ...nearOffers];

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
                  { isPremium && <Premium uniqUrl={ selectedId } /> }

                  <div className="property__name-wrapper">

                    <h1 className="property__name">
                      { title }
                    </h1>

                    <FavoriteButton isFavorite={ isFavorite } uniqUrl={ selectedId } />

                  </div>

                  <Rating rating={ rating } uniqUrl={ selectedId } />

                  <Features type={ type } bedrooms={ bedrooms } maxAdults={ maxAdults } />

                  <Price price={ price } uniqUrl={ selectedId } />

                  <PropertiesInside goods={ goods }/>

                  <Hostess host={ host } description={ description } uniqUrl={ selectedId } />

                  <section className="property__reviews reviews">

                    { comments && <Reviews reviews={ comments } /> }

                    { isAuthorized && <ReviewForm uniqUrl={ selectedId } /> }

                  </section>
                </div>
              </div>
              { nearPlaces.length > 0 &&
              <section className="property__map map">
                <Map offers={ nearPlaces } uniqUrl={ selectedId } />
              </section> }
            </section>
            <div className="container">
              { nearOffers.length > 0 &&
              <NearPlaces nearPlaces={ nearOffers }/> }
            </div>
          </main>
        </div>
      </>
    );
  }
  return <LoadingScreen />;
}

export default Properties;

