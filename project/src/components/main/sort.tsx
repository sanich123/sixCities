import { useState } from 'react';
import { connect, ConnectedProps, useDispatch } from 'react-redux';
import { changeSortName } from '../../store/action';
import { State } from '../../types/reducer';
import { sortTypes } from '../../const';

const mapStateToProps = ({ sortName }: State) => ({
  sortName,
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

function Sort({ sortName }: ConnectedComponentProps): JSX.Element {
  const [isOpen, sortChangeListener] = useState(false);
  const dispatch = useDispatch();

  return (
    <form className="places__sorting" action="#" method="get" onClick={() => sortChangeListener(!isOpen)}>
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={ 0 }>
        { sortName }
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={ `${ isOpen && 'places__options--opened'} places__options places__options--custom`}>
        { Object.values(sortTypes).map((sortType) =>
          (<li className="places__option" key={ sortType } onClick={ () => dispatch(changeSortName(sortType)) } tabIndex={ 0 }>{ sortType }</li>))}
      </ul>
    </form>
  );
}

export { Sort };
export default connector(Sort);
