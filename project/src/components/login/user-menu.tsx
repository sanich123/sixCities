import { useSelector } from 'react-redux';
import { AuthorizationStatus } from '../../const';
import { getAuthEmail, statusOfAuth } from '../../store/reducer/user/user-selectors';
import UserMenuAuth from './user-menu-auth';
import UserMenuNoAuth from './user-menu-noauth';

function UserMenu(): JSX.Element {
  const authStatus = useSelector(statusOfAuth);
  const authEmail = useSelector(getAuthEmail);
  const isAuthorized = authStatus === AuthorizationStatus.AUTH;

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        { isAuthorized ?
          <UserMenuAuth authEmail={ authEmail } /> : <UserMenuNoAuth />}
      </ul>
    </nav>
  );
}

export default UserMenu;
