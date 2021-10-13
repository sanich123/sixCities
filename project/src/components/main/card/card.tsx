/* eslint-disable no-console */
import { useState } from 'react';
import { Link } from 'react-router-dom';

type cardProps = {
  type: string,
  title: string,
  price: number,
  rating: number,
  isPremium: boolean,
  isFavorite: boolean,
  previewImage: string,
  id: number,
}

function Card({type, title, price, rating, isPremium, isFavorite, previewImage, id }: cardProps): JSX.Element {
  const [cardId, setId] = useState('');
  console.log(cardId);
  return (
    <article
      className="cities__place-card place-card"
      onMouseEnter={() => setId(id.toString())}
      onMouseLeave={() => setId('')}
    >
      {isPremium ? <div className="place-card__mark"><span>Premium</span></div> : ''}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/:${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width="260"
            height="200"
            alt=""
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className='place-card__price-text'>&#47;&nbsp;night</span>
          </div>
          <button className={isFavorite ? 'place-card__bookmark-button button place-card__bookmark-button--active' : 'place-card__bookmark-button button'} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{`${isFavorite ? 'In' : 'To'}bookmarks`}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rating / 5 * 100}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/:${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default Card;
