import { Link } from 'react-router-dom';
import { AppRoutes } from '../../const';

function UserMenuNoAuth(): JSX.Element {

  return (
    <li className="header__nav-item user">
      <Link className="header__nav-link header__nav-link--profile" to={ AppRoutes.SignIn }>
        <div className="header__avatar-wrapper user__avatar-wrapper" />
        <span className="header__login">Sign in</span>
      </Link>
    </li>);
}

export default UserMenuNoAuth;
