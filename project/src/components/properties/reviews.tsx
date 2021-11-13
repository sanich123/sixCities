import { Review } from '../../types/types';
import { Comments } from './review-form/comments';

type ReviewsProps = {
  reviews: Review[],
}

const MAX_COMMENT_NUMBER = 10;
function Reviews({ reviews }: ReviewsProps): JSX.Element {

  const reviewsLengthChanger = reviews.length <= 9 ? reviews.slice(0, MAX_COMMENT_NUMBER) : reviews.slice((reviews.length - MAX_COMMENT_NUMBER), (MAX_COMMENT_NUMBER + (reviews.length - MAX_COMMENT_NUMBER)));

  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{ reviews.length }</span></h2>
      <ul className="reviews__list">
        { reviewsLengthChanger.sort((a: Review, b: Review) => Date.parse(a.date) - Date.parse(b.date))
          .map(({ id, comment, date, rating, user }) => (
            <Comments key={ id } id={ id } comment={ comment } date={ date } rating={ rating } user={ user } />
          ))}
      </ul>
    </>
  );
}

export default Reviews;
