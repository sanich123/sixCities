import { Link } from 'react-router-dom';
import { Offer } from '../../types/types';
import { Modificator } from '../const';
import FavoriteButton from './is-favorite';
import Premium from './premium';
import Price from './price';
import Rating from './rating';

type CardProps = {
  onHover? : (id: number) => void,
  modificator?: string,
}

function Card({ type, title, price, rating, isPremium, isFavorite, previewImage, id, onHover, modificator }: Offer & CardProps): JSX.Element {
  return (
    <article
      className={ modificator ? `${ modificator === Modificator.FAVORITES ? 'favorites' : 'near-places'}__card place-card` : 'cities__place-card place-card' }
      onMouseOver={ () => onHover ? onHover(id) : undefined }
    >
      { isPremium && <Premium /> }
      <div className={ modificator ? `${ modificator === Modificator.FAVORITES ? 'favorites' : 'near-places'}__image-wrapper place-card__image-wrapper` : 'cities__image-wrapper place-card__image-wrapper' }>
        <Link to={ `/offer/:${ id }` }>
          <img
            className="place-card__image"
            src={ previewImage }
            width={ modificator === Modificator.FAVORITES ? '150' : '260' }
            height={ modificator === Modificator.FAVORITES ? '110' : '200' }
            alt=""
          />
        </Link>
      </div>
      <div className={ modificator === Modificator.FAVORITES ? 'favorites__card-info place-card__info' : 'place-card__info' }>
        <div className="place-card__price-wrapper">

          <Price price={ price } />

          <FavoriteButton isFavorite={ isFavorite } />

        </div>

        <Rating rating={rating} />

        <h2 className="place-card__name">
          <Link to={ `/offer/:${ id }` }>{ title }</Link>
        </h2>
        <p className="place-card__type">{ type }</p>
      </div>
    </article>
  );
}

export default Card;
