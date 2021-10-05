function Logo(): JSX.Element {
  return (
    <a className="header__logo-link" href="/">
      <img
        className="header__logo"
        src="img/logo.svg"
        alt="6 cities logo"
        width="81"
        height="41"
      />
    </a>
  );
}

export default Logo;
