import cn from 'classnames';
type FavoriteButtonProps = {
  isFavorite: boolean,
  uniqUrl?: number,
}

function FavoriteButton({ isFavorite, uniqUrl }: FavoriteButtonProps): JSX.Element {
  const buttonClass = cn({'property__bookmark-button property__bookmark-button--active button' : isFavorite && uniqUrl },
    {'place-card__bookmark-button place-card__bookmark-button--active button' : isFavorite},
    {'property__bookmark-button button': uniqUrl},
    'place-card__bookmark-button button');

  return (
    <button
      className={ buttonClass }
    >
      <svg
        className={ `${ uniqUrl ? 'property' : 'place-card'}__bookmark-icon`}
        width={ uniqUrl ? '31' : '18'}
        height={ uniqUrl ? '33' : '19' }
      >
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">{ isFavorite ? 'In' : 'To' } bookmarks</span>
    </button>
  );
}

export default FavoriteButton;
