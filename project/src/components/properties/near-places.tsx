import { Offer } from '../../types/types';
import { Modificator } from '../const';
import Card from '../main/card';

type NearPlacesProps = {
  nearPlaces: Offer[],
  onHover? : (id: number) => void
}

function NearPlaces({ nearPlaces, onHover }: NearPlacesProps):JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        { nearPlaces.map(({ id, ...rest }) =>
          <Card key={ id } id={ id } { ...rest } onHover= { onHover } modificator={ Modificator.PROPERTIES } />) }
      </div>
    </section>
  );
}

export default NearPlaces;
