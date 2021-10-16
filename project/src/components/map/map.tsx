import 'leaflet/dist/leaflet.css';
import { Offer } from '../../types/types';
import { useEffect, useRef } from 'react';
import  useMap from '../../hooks/useMap';
import {  LeafletUrls } from '../const';
import leaflet, { Marker } from 'leaflet';

type MapProps = {
  offers: Offer[],
}

function Map({ offers }: MapProps): JSX.Element {
  const { city } = offers[0];
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: LeafletUrls.URL_MARKER_DEFAULT,
    iconSize: [26, 40],
    iconAnchor: [13, 40],
  });

  // const currentCustomIcon = leaflet.icon({
  //   iconUrl: LeafletUrls.URL_MARKER_CURRENT,
  //   iconSize: [26, 40],
  //   iconAnchor: [13, 40],
  // });

  useEffect(() => {
    if (map) {
      offers.forEach(({ location }) => {
        const marker = new Marker({
          lat: location.latitude,
          lng: location.longitude,
        });
        marker.setIcon(defaultCustomIcon).addTo(map);
      });
    }
  }, [defaultCustomIcon, map, offers]);
  return (
    <div
      style={ { minHeight: '100%' } }
      ref={ mapRef }
    >
    </div>
  );
}

export default Map;
