import { transformRating } from '../../utils/utils';

type RatingProps = {
  rating: number,
  uniqUrl?: number,
}

function Rating({ rating, uniqUrl }: RatingProps): JSX.Element {
  return (
    <div className={ `${ uniqUrl ? 'property' : 'place-card'}__rating rating` }>
      <div className={ `${ uniqUrl ? 'property' : 'place-card'}__stars rating__stars` }>
        <span style={ { width: transformRating(rating) } } />
        <span className="visually-hidden">Rating</span>
      </div>
      { uniqUrl && <span className="property__rating-value rating__value">{ rating }</span> }
    </div>
  );
}

export default Rating;
