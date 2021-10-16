import { useState } from 'react';

type RatingProps = {
  number: string,
  value: string,
 }

function Rating({ number, value }: RatingProps):JSX.Element {
  const [rating, setRating] = useState('');

  // eslint-disable-next-line no-console
  console.log(rating);
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={ number }
        id={ `${ number }-stars` }
        type="radio"
        onChange={ (evt) => setRating(evt.target.value) }
      />
      <label
        htmlFor={ `${ number }-stars` }
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
