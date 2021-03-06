import Image from '../../common/image';
import { Review } from '../../../types/types';
import { dateFormatter, transformRating } from '../../../utils/utils';
import UserName from '../../common/user-name';

function Comments({ comment, date, rating, user }: Review): JSX.Element {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">

          <Image avatarUrl={ user.avatarUrl } />

        </div>

        <UserName name={ user.name } />

      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={ { width: transformRating(rating) } }></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          { comment }
        </p>
        <time className="reviews__time" dateTime={ date }>{ dateFormatter(date) }</time>
      </div>
    </li>
  );
}

export { Comments };
