import { Review } from '../../types/types';
import { Comments } from './review-form/comments';

type ReviewsProps = {
  reviews: Review[],
}

function Reviews({ reviews }: ReviewsProps): JSX.Element {
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <Comments key={review.id} id={review.id} comment={review.comment} date={review.date} rating={review.rating} user={review.user} />
        ))}
      </ul>
    </>
  );
}

export default Reviews;
