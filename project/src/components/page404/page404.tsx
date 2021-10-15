import {Link} from 'react-router-dom';

function Page404(): JSX.Element {
  return (
    <div className="page__favorites-container container">
      <section className="favorites favorites--empty">
        <h1 className="visually-hidden">404 page</h1>
        <div className="favorites__status-wrapper">
          <b className="favorites__status">404. Requested page is not available</b>
          <Link className="favorites__status-description" to="/">Click here to return to the main page</Link>
        </div>
      </section>
    </div>
  );
}

export default Page404;
