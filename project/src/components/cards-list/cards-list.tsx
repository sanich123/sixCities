import OfferCard from '../offer-card/offer-card';

type cardsListProps = {
  cardsList: number[]
}

function CardsList({cardsList}: cardsListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {cardsList.map((number) => <OfferCard key={number}/>)}
    </div>
  );
}

export default CardsList;


