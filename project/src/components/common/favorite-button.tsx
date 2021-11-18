import cn from 'classnames';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { AppRoutes, AuthorizationStatus } from '../../const';
import { changeFavorite } from '../../store/api-actions';
import { statusOfAuth } from '../../store/reducer/user/user-selectors';

type FavoriteButtonProps = {
  isFavorite: boolean,
  uniqUrl?: number,
  id?: number,
}
const BtnModificator = {
  LargeWidth: '31',
  SmallWidth: '18',
  LargeHeight: '33',
  SmallHeight: '19',
} as const;

function FavoriteButton({ isFavorite, uniqUrl, id }: FavoriteButtonProps): JSX.Element {
  const history = useHistory();
  const dispatch = useDispatch();
  const authStatus = useSelector(statusOfAuth);
  const noAuth = authStatus === AuthorizationStatus.NO_AUTH;
  const isFavoriteNow = isFavorite ? 0 : 1;
  const isProperties = uniqUrl ? uniqUrl : id;

  const handleClick = useCallback(
    () => {
      if (noAuth) {
        history.push(AppRoutes.SignIn);
      }
      dispatch(changeFavorite(isProperties, isFavoriteNow));
    }, [dispatch, isProperties, history, noAuth, isFavoriteNow],
  );

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
        width={ uniqUrl ? BtnModificator.LargeWidth : BtnModificator.SmallWidth}
        height={ uniqUrl ? BtnModificator.LargeHeight : BtnModificator.SmallHeight }
      >
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">{ isFavorite ? 'In' : 'To' } bookmarks</span>
    </button>
  );
}

export default FavoriteButton;
