import Card from '../common/card';
import { MAIN } from '../../const';
import { useSelector } from 'react-redux';
import { offersSorted } from '../../store/reducer/process/process-data-selectors';

type cardsProps = {
  onHover?: (id: number) => void,
 }

function Cards( { onHover }: cardsProps): JSX.Element {
  const sortedOffers = useSelector(offersSorted);

  return (
    <div className="cities__places-list places__list tabs__content">
      { sortedOffers.map(({ id, ...rest }) => (
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
