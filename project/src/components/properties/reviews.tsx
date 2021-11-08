import { Review } from '../../types/types';
import { Comments } from './review-form/comments';

type ReviewsProps = {
  reviews: Review[],
}

function Reviews({ reviews }: ReviewsProps): JSX.Element {

  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{ reviews.length }</span></h2>
      <ul className="reviews__list">
        {reviews.slice(0, 10)
          .map(({ id, comment, date, rating, user }) => (
            <Comments key={ id } id={ id } comment={ comment } date={ date } rating={ rating } user={ user } />
          ))}
      </ul>
    </>
  );
}

export default Reviews;
