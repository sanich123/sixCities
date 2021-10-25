import { connect, ConnectedProps } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dispatch } from 'redux';
import { changeCity } from '../../store/action';
import { Actions, State } from '../../types/reducer';

type CityProps = {
  town: string,
}

const mapStateToProps = ({ city }: State) => ({
  city,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onChangeCity(city: string) {
    dispatch(changeCity(city));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & CityProps;

function City({ town, onChangeCity, city = 'Paris' }: ConnectedComponentProps): JSX.Element {
  return (
    <li className="locations__item">
      <Link
        className={ `locations__item-link tabs__item ${ city === town && 'tabs__item--active'}` }
        to="/"
        onClick={ () => onChangeCity(town) }
      >
        <span>{ town }</span>
      </Link>
    </li>
  );
}

export { City };
export default connector(City);
