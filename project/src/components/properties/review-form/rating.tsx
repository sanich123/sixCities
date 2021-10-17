import { useState } from 'react';

type RatingProps = {
  mark: string,
  value: string,
 }

function Rating({ mark, value }: RatingProps):JSX.Element {
  const [, setRating] = useState('');
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={ mark }
        id={ `${ mark }-stars` }
        type="radio"
        onChange={ (evt) => setRating(evt.target.value) }
      />
      <label
        htmlFor={ `${ mark }-stars` }
        className="reviews__rating-label form__rating-label"
        title={ value }
      >
        <svg
          className="form__star-image"
          width="37"
          height="33"
        >
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default Rating;
