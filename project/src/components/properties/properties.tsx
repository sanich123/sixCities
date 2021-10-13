import Header from '../main/header/header';
import Sprite from '../main/sprite/sprite';
import { ReviewForm } from './review-form/review-form';
import { Reviews, Offers } from '../../types/types';
import { Review } from './review-form/review';
import { Link, useHistory} from 'react-router-dom';

type propertiesProps = {
  reviews: Reviews,
  offers: Offers,
}

function Properties({reviews, offers}: propertiesProps): JSX.Element {
  const uniqUrl = +useHistory().location.pathname.split('').slice(8).join('');
  const [uniqOffer] = offers.slice().filter(({id}) => id === uniqUrl);
  const nearPlaces = offers.slice().filter(({city, id}) => city.name === uniqOffer.city.name && id !== uniqOffer.id);
  const {images, isPremium, title, isFavorite, rating, type, bedrooms, maxAdults, price, goods, host, description } = uniqOffer;

  return (
    <>

      <Sprite />

      <div className="page">

        <Header />

        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {images.map((image) => (
                  <div
                    className="property__image-wrapper"
                    key={image}
                  >
                    <img
                      className="property__image"
                      src={image}
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {isPremium ? <div className="property__mark"><span>Premium</span></div> : ''}
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {title}
                  </h1>
                  <button
                    className={isFavorite ? 'property__bookmark-button button property__bookmark-button--active' : 'property__bookmark-button button'} type="button"
                  >
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">{`${isFavorite ? 'In' : 'To'}bookmarks`}</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{ width: `${rating / 5 * 100}%` }}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {goods.map((good) => (<li key={good} className="property__inside-item">{good}</li>))}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className={host.isPro ? 'property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper' : 'property__avatar-wrapper user__avatar-wrapper'}>
                      <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                    </div>
                    <span className="property__user-name">
                      {host.name}
                    </span>
                    {host.isPro ? <span className="property__user-status">Pro</span> : ''}
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {description}
                    </p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                  <ul className="reviews__list">
                    {reviews.map((review) => (
                      <Review
                        key={review.id}
                        id={review.id}
                        comment={review.comment}
                        date={review.date}
                        rating={review.rating}
                        user={review.user}
                      />
                    ))}
                  </ul>

                  <ReviewForm />

                </section>
              </div>
            </div>
            <section className="property__map map"></section>
          </section>
          <div className="container">
            {nearPlaces.length ?
              <section className="near-places places">
                <h2 className="near-places__title">Other places in the neighbourhood</h2>
                <div className="near-places__list places__list">
                  { nearPlaces.map((place) => (
                    <article key={ place.id } className="near-places__card place-card">
                      { place.isPremium ? <div className="place-card__mark"><span>Premium</span></div> : ''}
                      <div className="near-places__image-wrapper place-card__image-wrapper">
                        <Link to={`/offer/:${place.id}`}>
                          <img className="place-card__image" src={place.previewImage} width="260" height="200" alt="" />
                        </Link>
                      </div>
                      <div className="place-card__info">
                        <div className="place-card__price-wrapper">
                          <div className="place-card__price">
                            <b className="place-card__price-value">&euro;{ place.price }</b>
                            <span className="place-card__price-text">&#47;&nbsp;night</span>
                          </div>
                          <button className={place.isFavorite ? 'place-card__bookmark-button button place-card__bookmark-button--active' : 'place-card__bookmark-button button'} type="button">
                            <svg className="place-card__bookmark-icon" width="18" height="19">
                              <use xlinkHref="#icon-bookmark"></use>
                            </svg>
                            <span className="visually-hidden">{`${place.isFavorite ? 'In' : 'To'}bookmarks`}</span>
                          </button>
                        </div>
                        <div className="place-card__rating rating">
                          <div className="place-card__stars rating__stars">
                            <span style={{ width: `${place.rating / 5 * 100}%` }}></span>
                            <span className="visually-hidden">Rating</span>
                          </div>
                        </div>
                        <h2 className="place-card__name">
                          <Link to={`/offer/:${ place.id }`}>{ place.title }</Link>
                        </h2>
                        <p className="place-card__type">{ place.type }</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section> : ''}
          </div>
        </main>
      </div>
    </>
  );
}

export default Properties;
