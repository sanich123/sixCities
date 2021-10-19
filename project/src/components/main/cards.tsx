import Card from '../common/card';
import { Offer } from '../../types/types';
import { MAIN } from '../const';

type cardsProps = {
  offers: Offer[],
 }

type OnHover = {
  onHover?: (id: number) => void
}

function Cards( { offers, onHover }: cardsProps & OnHover): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      { offers.map(({ id, ...rest }) => <Card id={ id } key={ id } onHover={ onHover } { ...rest } modificator={ MAIN } />) }
    </div>
  );
}

export default Cards;


