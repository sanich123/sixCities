/* eslint-disable no-console */
// import { nanoid } from '@reduxjs/toolkit';
import { useState } from 'react';
import { Marks } from '../../const';

function ReviewForm(): JSX.Element {
  const [text, setText] = useState('');
  const [rating, getRating] = useState('');

  console.log(text, rating);

  return (
    <form className="reviews__form form"
      action="#"
      method="post"
      onSubmit={(evt) => evt.preventDefault()}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        { Object.entries(Marks).reverse().map(([key, value]) => (
          <div key={value}>
            <input
              className="form__rating-input visually-hidden"
              key={value}
              name="rating"
              value={`${key}`}
              id={`${key}-stars`}
              type="radio"
              onChange={(evt) => getRating(evt.target.value)}
            />
            <label
              htmlFor={`${key}-stars`}
              className="reviews__rating-label form__rating-label"
              title={`${value}`}
            >
              <svg
                className="form__star-image"
                width="37"
                height="33"
              >
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </div>
        ))}
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={text}
        onChange={(evt) => setText(evt.target.value)}
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
