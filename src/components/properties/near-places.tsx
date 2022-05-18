import { Offer } from '../../types/types';
import { PROPERTIES } from '../../const';
import Card from '../common/card';

type NearPlacesProps = {
  nearPlaces: Offer[],
}

function NearPlaces({ nearPlaces }: NearPlacesProps): JSX.Element {

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        { nearPlaces.map(({ id, ...rest }) =>
          (<Card key={ id } id={ id } { ...rest } modificator={ PROPERTIES } />)) }
      </div>
    </section>
  );
}

export default NearPlaces;


