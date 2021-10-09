import Card from '../card/card';
import { Offers } from '../types/types';

type cardsListProps = {
  cards: number[],
  offers: Offers
}

function CardsList({cards, offers}: cardsListProps): JSX.Element {

  return (
    <div className="cities__places-list places__list tabs__content">
      {cards.map((number) => <Card key={number} />)}
    </div>
  );
}

export default CardsList;


