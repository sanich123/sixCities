import { Link } from 'react-router-dom';
import { Offer } from '../../../types/types';
import {  transformRating  } from '../../../utils/utils';

function FavoriteCity({ id, type, description, price, rating, isPremium, previewImage }: Offer): JSX.Element {
  return (
    <article className="favorites__card place-card">
      { isPremium && <div className="place-card__mark"><span>Premium</span></div> }
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={ `/offer/:${ id }` }>
          <img className="place-card__image" src={ previewImage } width="150" height="110" alt=""/>
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{ price }</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={ { width: transformRating(rating) } }></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={ `/offer/:${ id }` }>{ description }</Link>
        </h2>
        <p className="place-card__type">{ type }</p>
      </div>
    </article>
  );
}

export default FavoriteCity;
