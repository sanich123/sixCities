import Card from '../card/card';
import { Offers } from '../types/types';

type cardsProps = {
  offers: Offers
}

function Cards({offers}: cardsProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map(({ id, description, price, type, rating, isPremium, isFavorite, previewImage }) =>
        (<Card key={id} type={type} description={description} price={price} rating={rating} isPremium={isPremium} isFavorite={isFavorite} previewImage={previewImage} />),
      )}
    </div>
  );
}

export default Cards;


