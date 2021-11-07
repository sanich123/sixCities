import Card from '../common/card';
import { MAIN } from '../../const';
import { useSelector } from 'react-redux';
import { State } from '../../types/reducer';

type cardsProps = {
  onHover?: (id: number) => void,
 }

function Cards( { onHover }: cardsProps): JSX.Element {
  const offersFiltred = useSelector(({ filtredOffers }: State) => filtredOffers);

  return (
    <div className="cities__places-list places__list tabs__content">
      { offersFiltred.map(({ id, ...rest }) => (
        <Card
          id={ id }
          key={ id }
          onHover={ onHover }
          { ...rest }
          modificator={ MAIN }
        />
      ))}
    </div>
  );
}

export default Cards;
