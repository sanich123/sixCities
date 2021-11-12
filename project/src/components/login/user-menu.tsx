import { useSelector } from 'react-redux';
import { AuthorizationStatus } from '../../const';
import { getAuthEmail, statusOfAuth } from '../../utils/selectors';
import UserMenuAuth from './user-menu-auth';
import UserMenuNoAuth from './user-menu-noauth';

function UserMenu(): JSX.Element {
  const authStatus = useSelector(statusOfAuth);
  const authEmail = useSelector(getAuthEmail);
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        { authStatus === AuthorizationStatus.AUTH ?
          <UserMenuAuth authEmail={ authEmail } /> : <UserMenuNoAuth />}
      </ul>
    </nav>
  );
}

export default UserMenu;
