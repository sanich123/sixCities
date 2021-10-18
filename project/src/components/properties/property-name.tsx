import FavoriteButton from '../common/is-favorite';

type PropertyNameProps = {
  title: string,
  isFavorite: boolean,
  uniqUrl: number,
}

function PropertyName({ title, isFavorite, uniqUrl }: PropertyNameProps): JSX.Element {
  return (
    <div className="property__name-wrapper">
      <h1 className="property__name">
        { title }
      </h1>

      <FavoriteButton isFavorite={ isFavorite } uniqUrl={ uniqUrl } />

    </div>
  );
}

export default PropertyName;
