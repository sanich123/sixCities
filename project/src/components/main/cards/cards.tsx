import Card from '../card/card';
import { Offer } from '../../../../src/types/types';
// import { useState } from 'react';

type cardsProps = {
  offers: Offer[],
 }

type OnHover = {
  onHover?: (id: number) => void
}
function Cards( { offers, onHover }: cardsProps & OnHover): JSX.Element {
  // const [activeOffer, setActiveOffer] = useState<number | null>(null);
  // // eslint-disable-next-line no-console
  // console.log(activeOffer);
  // const handleHover = (id: number | null) => {
  //   setActiveOffer(id);
  // };

  return (
    <div className="cities__places-list places__list tabs__content">
      { offers.map(({ id, ...rest }) => <Card id={ id } key={ id } onHover={onHover} { ...rest } />) }
    </div>
  );
}

export default Cards;


