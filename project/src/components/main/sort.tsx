import { Dispatch, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { changeSortName } from '../../store/action';
import { State, Actions } from '../../types/reducer';
import { sortTypes } from '../../utils/const';

const mapStateToProps = ({ sortName }: State) => ({
  sortName,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  setSortChange(name: string) {
    dispatch(changeSortName(name));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

function Sort({ sortName, setSortChange }: ConnectedComponentProps): JSX.Element {
  const [isOpen, sortChangeListener] = useState(false);

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
          (<li className="places__option" key={ sortType } onClick={ () => setSortChange(sortType) } tabIndex={ 0 }>{ sortType }</li>))}
      </ul>
    </form>
  );
}

export { Sort };
export default connector(Sort);
