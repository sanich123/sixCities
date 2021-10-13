import Card from '../card/card';
import { Offers } from '../../../../src/types/types';

type cardsProps = {
  offers: Offers,
}

function Cards( { offers }: cardsProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map(({
        id,
        title,
        price,
        type,
        rating,
        isPremium,
        isFavorite,
        previewImage }) =>
        (
          <Card
            key={id}
            type={type}
            title={title}
            price={price}
            rating={rating}
            isPremium={isPremium}
            isFavorite={isFavorite}
            previewImage={previewImage}
            id={id}
          />),
      )}
    </div>
  );
}

export default Cards;


