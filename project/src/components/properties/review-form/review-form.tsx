import { FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Marks } from '../../../const';
import { postComment } from '../../../store/api-actions';
import { getCommentStatus } from '../../../store/reducer/user/user-selectors';
import { memo } from 'react';

import Rating from './rating';
import TextArea from './textarea';

type ReviewFormProps = {
  uniqUrl: number,
}

function ReviewForm({ uniqUrl }: ReviewFormProps): JSX.Element {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [rating, setRating] = useState('');
  const commentPost = useSelector(getCommentStatus);

  let isBtnDisabled = true;

  if (text.length > 50 && text.length < 300 && rating !== '') {
    isBtnDisabled = false;
  }

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(postComment({
      id: uniqUrl,
      comment: text,
      rating: rating,
    }));
    setRating('');
    setText('');
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
          <Rating key={ value } value={ value } mark={ mark } rating={ rating } setRating={ setRating } isFormDisabled={ commentPost } />
        )) }
      </div>

      <TextArea text={ text } setText={ setText } commentPost={ commentPost } />

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

export default memo(ReviewForm);
