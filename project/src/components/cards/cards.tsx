import Card from '../card/card';

type cardsListProps = {
  cards: number[]
}

function CardsList({cards}: cardsListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {cards.map((number) => <Card key={number} />)}
    </div>
  );
}

export default CardsList;


