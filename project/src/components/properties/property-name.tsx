type PropertyNameProps = {
  title: string,
  isFavorite: boolean,
}

function PropertyName({ title, isFavorite }: PropertyNameProps): JSX.Element {

  return (
    <div className="property__name-wrapper">
      <h1 className="property__name">
        { title }
      </h1>
      <button
        className={ isFavorite ? 'property__bookmark-button button property__bookmark-button--active' : 'property__bookmark-button button' } type="button"
      >
        <svg className="property__bookmark-icon" width="31" height="33">
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">{ `${ isFavorite ? 'In' : 'To' }bookmarks` }</span>
      </button>
    </div>
  );
}

export default PropertyName;
