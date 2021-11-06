import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppRoutes, AuthorizationStatus } from '../../const';
import { logoutAction } from '../../store/api-actions';


function UserMenu(): JSX.Element {
  const authStatus = useSelector(({ authorizationStatus }) => authorizationStatus);
  const authEmail = useSelector(({ authorizationEmail }) => authorizationEmail);
  const dispatch = useDispatch();
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        { authStatus === AuthorizationStatus.AUTH ?
          <>
            <li className="header__nav-item user">
              <Link className="header__nav-link header__nav-link--profile" to="/">
                <div className="header__avatar-wrapper user__avatar-wrapper">
                </div>
                <span className="header__user-name user__name">{ authEmail }</span>
              </Link>
            </li>
            <li className="header__nav-item">
              <Link
                className="header__nav-link"
                to={ AppRoutes.Main }
                onClick={() => dispatch(logoutAction())}
              >
                <span className="header__signout">Sign out</span>
              </Link>
            </li>
          </>
          :
          <li className="header__nav-item user">
            <Link className="header__nav-link header__nav-link--profile" to={ AppRoutes.SignIn }>
              <div className="header__avatar-wrapper user__avatar-wrapper">
              </div>
              <span className="header__login">Sign in</span>
            </Link>
          </li>}
      </ul>
    </nav>
  );
}

export default UserMenu;
