import { useState } from 'react';
import { Marks } from '../../const';
import Rating from './rating';

function ReviewForm(): JSX.Element {
  const [text, setText] = useState('');

  return (
    <form className="reviews__form form"
      action="#"
      method="post"
      onSubmit={ (evt) => evt.preventDefault() }
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        { Object.entries(Marks).reverse().map(([number, value]) => (
          <Rating key={ value } value={ value } number={ number } />
        )) }
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={ text }
        onChange={ (evt) => setText(evt.target.value) }
      />

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating </span>
          and describe your stay with at least
          <b className="reviews__text-amount"> 50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button" type="submit" disabled
        >Submit
        </button>
      </div>
    </form>
  );
}

export { ReviewForm };
