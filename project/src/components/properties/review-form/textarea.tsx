import { memo } from 'react';

type TextAreaProps = {
  setText: (evt: string) => void,
  commentPost: boolean,
  text: string,
}

function TextArea({ setText, commentPost, text }: TextAreaProps): JSX.Element {

  return (
    <textarea
      className="reviews__textarea form__textarea"
      id="review"
      name="review"
      placeholder="Tell how was your stay, what you like and what can be improved"
      value={ text }
      onChange={ (evt) => setText(evt.target.value) }
      disabled={ commentPost }
    />
  );
}

export default memo(TextArea);
