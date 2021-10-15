import Card from '../card/card';
import {Offers} from '../../../../src/types/types';

type cardsProps = {
  offers: Offers,
}

function Cards( {offers}: cardsProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map(({id, ...rest}) => <Card id={id} key={id} {...rest} />)}
    </div>
  );
}

export default Cards;


