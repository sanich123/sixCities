import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../const';
import { logoutAction } from '../../store/api-actions';

type UserMenuAuthProps = {
  authEmail: string | null | undefined,
}

function UserMenuAuth({ authEmail }: UserMenuAuthProps): JSX.Element {
  const dispatch = useDispatch();

  return (
    <>
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to={AppRoutes.Favorites}>
          <div className="header__avatar-wrapper user__avatar-wrapper" />
          <span className="header__user-name user__name">{ authEmail }</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <Link
          className="header__nav-link"
          to={ AppRoutes.Main }
          onClick={ useCallback(() => dispatch(logoutAction()), [dispatch]) }
        >
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    </>);
}

export default UserMenuAuth;
