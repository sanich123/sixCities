import { connect, ConnectedProps, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeCity } from '../../store/action';
import { State } from '../../types/reducer';
import cn from 'classnames';

type CityProps = {
  town: string,
}

const mapStateToProps = ({ city }: State) => ({
  city,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & CityProps;

function City({ town, city = 'Paris' }: ConnectedComponentProps): JSX.Element {
  const activeCity = cn('locations__item-link tabs__item', { 'tabs__item--active': city === town });
  const dispatch = useDispatch();
  return (
    <li className="locations__item">
      <Link
        className={ activeCity }
        to="/"
        onClick={ () => dispatch(changeCity(town)) }
      >
        <span>{ town }</span>
      </Link>
    </li>
  );
}

export { City };
export default connector(City);
