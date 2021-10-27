import Card from '../common/card';
import { MAIN } from '../../utils/const';
import { State } from '../../types/reducer';
import { connect, ConnectedProps } from 'react-redux';

type cardsProps = {
  onHover?: (id: number) => void,
 }

const mapStateToProps = ({ filtredOffers}: State) => ({
  filtredOffers,
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & cardsProps;

function Cards( { filtredOffers, onHover }: ConnectedComponentProps): JSX.Element {
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
export { Cards };
export default connector(Cards);


