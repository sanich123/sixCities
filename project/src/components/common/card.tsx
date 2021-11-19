import FavoriteButton from './favorite-button';
import Premium from './premium';
import Price from './price';
import Rating from './rating';
import { Link } from 'react-router-dom';
import { Offer } from '../../types/types';
import { FAVORITES } from '../../const';

type CardProps = {
  onHover? : (id: number) => void,
  modificator?: string,
}
const cardModificator = {
  SmallWidth: '150',
  HugeWidth: '260',
  SmallHeight: '110',
  HugeHeight: '200',
};

function Card({ type, title, price, rating, isPremium, isFavorite, previewImage, id, onHover, modificator }: Offer & CardProps): JSX.Element {
  const favorites = modificator === FAVORITES;

  return (
    <article
      className={ modificator ? `${ favorites ? 'favorites' : 'near-places'}__card place-card` : 'cities__place-card place-card' }
      onMouseEnter={ () => onHover ? onHover(id) : undefined }
    >
      { isPremium && <Premium /> }
      <div className={ modificator ? `${ favorites ? 'favorites' : 'near-places'}__image-wrapper place-card__image-wrapper` : 'cities__image-wrapper place-card__image-wrapper' }>
        <Link to={ `/offer/:${ id }` }>
          <img
            className="place-card__image"
            src={ previewImage }
            width={ favorites ? cardModificator.SmallWidth : cardModificator.HugeWidth }
            height={ favorites ? cardModificator.SmallHeight : cardModificator.HugeHeight }
            alt=""
          />
        </Link>
      </div>
      <div className={ `${ favorites && 'favorites__card-info'} place-card__info` }>
        <div className="place-card__price-wrapper">

          <Price price={ price } />

          <FavoriteButton id={ id } isFavorite={ isFavorite } />

        </div>

        <Rating rating={ rating } />

        <h2 className="place-card__name">
          <Link to={ `/offer/:${ id }` }>{ title }</Link>
        </h2>
        <p className="place-card__type">{ type }</p>
      </div>
    </article>
  );
}

export default Card;
