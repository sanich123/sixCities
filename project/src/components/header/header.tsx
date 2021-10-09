import UserMenu from '../user-menu/user-menu';
import Logo from '../logo/logo';

function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">

            <Logo />

          </div>

          <UserMenu />

        </div>
      </div>
    </header>
  );
}

export default Header;
