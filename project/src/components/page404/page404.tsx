function Page404(): JSX.Element {
  return (
    <div className="page__favorites-container container">
      <section className="favorites favorites--empty">
        <h1 className="visually-hidden">404 page</h1>
        <div className="favorites__status-wrapper">
          <b className="favorites__status">404. Requested page is not available</b>
          <a className="favorites__status-description" href="/">Click here to return to the main page</a>
        </div>
      </section>
    </div>
  );
}

export default Page404;
