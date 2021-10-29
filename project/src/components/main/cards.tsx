import Card from '../common/card';
import { MAIN } from '../../const';
import { useSelector } from 'react-redux';

type cardsProps = {
  onHover?: (id: number) => void,
 }

function Cards( { onHover }: cardsProps): JSX.Element {
  const filtredOffers = useSelector((store) => store.filtredOffers);
  return (
    <div className="cities__places-list places__list tabs__content">
      { filtredOffers.map(({ id, ...rest }) => (
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
