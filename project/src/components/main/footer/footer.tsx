import {Link} from 'react-router-dom';

function Footer(): JSX.Element {
  return (
    <footer className="footer container">
      <Link className="footer__logo-link" to='/'>
        <img
          className="footer__logo"
          src="img/logo.svg"
          alt="6 cities logo"
          width="64"
          height="33"
        />
      </Link>
    </footer>
  );
}

export default Footer;
