import { memo } from 'react';

type RatingProps = {
  mark: string,
  value: string,
  setRating: (evt: string) => void,
  isFormDisabled: boolean,
  rating: string,
 }

function Rating({ mark, value, setRating, isFormDisabled, rating }: RatingProps):JSX.Element {

  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={ mark }
        id={ `${ mark }-stars` }
        type="radio"
        onChange={ (evt) => setRating(evt.target.value) }
        disabled={ isFormDisabled }
        checked={ mark === rating }
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
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </>
  );
}

export default memo(Rating);
