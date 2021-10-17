import 'leaflet/dist/leaflet.css';
import { Offer } from '../../types/types';
import { useEffect, useRef } from 'react';
import  useMap from '../../hooks/use-map/useMap';
import {  LeafletUrls } from '../const';
import { Marker } from 'leaflet';
import { iconChanger } from '../../utils/utils';

type MapProps = {
  offers: Offer[],
  activeOffer: number | null,
}

function Map({ offers, activeOffer }: MapProps): JSX.Element {
  const { city } = offers[0];
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach(({ location, id }) => {
        const marker = new Marker({
          lat: location.latitude,
          lng: location.longitude,
        });
        marker.setIcon(activeOffer !== null && activeOffer === id ? iconChanger(LeafletUrls.URL_MARKER_CURRENT) : iconChanger(LeafletUrls.URL_MARKER_DEFAULT)).addTo(map);
      });
    }
  }, [activeOffer, map, offers]);
  return (
    <div
      style={ { minHeight: '100%' } }
      ref={ mapRef }
    >
    </div>
  );
}

export default Map;
