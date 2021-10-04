import OfferCard from '../offer-card/offer-card';

type cardsListProps = {
  cards: number[]
}

function CardsList({cards}: cardsListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {cards.map((number) => <OfferCard key={number}/>)}
    </div>
  );
}

export default CardsList;


