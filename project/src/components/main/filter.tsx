import { Dispatch } from 'react';
import { Actions, State } from '../../types/reducer';
import {connect, ConnectedProps} from 'react-redux';
import City from './city';
import { changeCity } from '../../store/action';
import { cities } from '../const';

type FilterProps = {
  city: string,
}
const mapStateToProps = ({city, offers}: State) => ({
  city, offers,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onChangeCity(city: string) {
    dispatch(changeCity(city));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & FilterProps;

function Filter({ city, onChangeCity }: ConnectedComponentProps): JSX.Element {

  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">

            {cities.map((town) => <City key={town} onClick={onChangeCity} town={town} currentValue={city} />)}

          </ul>
        </section>
      </div>
    </>
  );
}

export { Filter};
export default connector (Filter);
