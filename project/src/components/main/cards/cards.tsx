import Card from '../card/card';
import { Offer } from '../../../../src/types/types';

type cardsProps = {
  offers: Offer[],
 }

type OnHover = {
  onHover?: (id: number) => void
}

function Cards( { offers, onHover }: cardsProps & OnHover): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      { offers.map(({ id, ...rest }) => <Card id={ id } key={ id } onHover={ onHover } { ...rest } />) }
    </div>
  );
}

export default Cards;


