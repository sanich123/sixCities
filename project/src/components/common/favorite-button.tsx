type FavoriteButtonProps = {
  isFavorite: boolean,
  uniqUrl?: number,
}

function FavoriteButton({ isFavorite, uniqUrl }: FavoriteButtonProps): JSX.Element {
  return (
    <button
      className={ isFavorite ? `${ uniqUrl ? 'property__bookmark-button property' : 'place-card__bookmark-button place-card'}__bookmark-button--active button` : `${ uniqUrl ? 'property' : 'place-card'}__bookmark-button button` }
      type="button"
    >
      <svg
        className={ `${ uniqUrl ? 'property' : 'place-card'}__bookmark-icon`}
        width={ uniqUrl ? '31' : '18'}
        height={ uniqUrl ? '33' : '19' }
      >
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">{ `${ isFavorite ? 'In' : 'To' }bookmarks` }</span>
    </button>
  );
}

export default FavoriteButton;
