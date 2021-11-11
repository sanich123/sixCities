import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { AppRoutes, AuthorizationStatus } from '../../const';
import { changeFavorite } from '../../store/api-actions';
import { State } from '../../types/reducer';
type FavoriteButtonProps = {
  isFavorite: boolean,
  uniqUrl?: number,
  id?: number,
}

function FavoriteButton({ isFavorite, uniqUrl, id }: FavoriteButtonProps): JSX.Element {
  const history = useHistory();
  const dispatch = useDispatch();
  const authStatus = useSelector(({authorizationStatus}: State) => authorizationStatus);
  const handleClick = () => {
    authStatus === AuthorizationStatus.NO_AUTH ? history.push(AppRoutes.SignIn) : dispatch(changeFavorite(uniqUrl ? uniqUrl : id, isFavorite ? 0 : 1));
  };
  const buttonClass = cn({'property__bookmark-button property__bookmark-button--active button' : isFavorite && uniqUrl },
    {'place-card__bookmark-button place-card__bookmark-button--active button' : isFavorite},
    {'property__bookmark-button button': uniqUrl},
    'place-card__bookmark-button button');

  return (
    <button
      className={ buttonClass }
      onClick={ handleClick }
    >
      <svg
        className={ `${ uniqUrl ? 'property' : 'place-card'}__bookmark-icon`}
        width={ uniqUrl ? '31' : '18'}
        height={ uniqUrl ? '33' : '19' }
      >
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">{ isFavorite ? 'In' : 'To' } bookmarks</span>
    </button>
  );
}

export default FavoriteButton;
