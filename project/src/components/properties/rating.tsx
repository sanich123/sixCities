import { transformRating } from '../../utils/utils';

type OfferRatingProps = {
  rating: number,
}

function OfferRating({ rating }: OfferRatingProps): JSX.Element {
  return (
    <div className="property__rating rating">
      <div className="property__stars rating__stars">
        <span style={ { width: transformRating(rating) } }></span>
        <span className="visually-hidden">Rating</span>
      </div>
      <span className="property__rating-value rating__value">{ rating }</span>
    </div>
  );
}

export default OfferRating;
