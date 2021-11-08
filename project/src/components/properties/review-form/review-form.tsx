import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Marks } from '../../../const';
import { commentAction } from '../../../store/api-actions';
import Rating from './rating';

type ReviewFormProps = {
  uniqUrl: number,
}

function ReviewForm({ uniqUrl }: ReviewFormProps): JSX.Element {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [rating, setRating] = useState('');

  const clearState = () => {
    setText('');
    setRating('');
  };

  let isFormDisabled = false;
  let isBtnDisabled = true;

  if (text.length > 50 && text.length < 300 && rating !== '') {
    isBtnDisabled = false;
  }

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    isFormDisabled = true;
    dispatch(commentAction({
      id: uniqUrl,
      comment: text,
      rating: rating,
    }));
    clearState();
    isFormDisabled = false;
  };

  return (
    <form className="reviews__form form"
      action="#"
      method="post"
      onSubmit={ handleSubmit }
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        { Object.entries(Marks).reverse().map(([mark, value]) => (
          <Rating key={ value } value={ value } mark={ mark } setRating={ setRating } isFormDisabled={ isFormDisabled } />
        )) }
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={ text }
        onChange={ (evt) => setText(evt.target.value) }
        disabled={ isFormDisabled }
      />

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating </span>
          and describe your stay with at least
          <b className="reviews__text-amount"> 50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={ isBtnDisabled }>Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
