import 'leaflet/dist/leaflet.css';
import { Offer } from '../../types/types';
import { useEffect, useRef } from 'react';
import  useMap from '../../hooks/use-map/useMap';
import {  LeafletUrls } from '../../const';
import { LayerGroup, Marker } from 'leaflet';
import { iconChanger } from '../../utils/utils';

type MapProps = {
  offers: Offer[],
  activeOffer?: number | null,
  uniqUrl?: number | null,
}

function Map({ offers, activeOffer, uniqUrl }: MapProps): JSX.Element {
  const [{ city }] = offers;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const markerLayerRef = useRef<LayerGroup>();

  useEffect(() => {
    if (map) {
      if(markerLayerRef.current) {
        markerLayerRef.current.clearLayers();
      }

      markerLayerRef.current = new LayerGroup().addTo(map);

      if (markerLayerRef.current) {
        offers.forEach(({ location, id }) => {
          const marker = new Marker({
            lat: location.latitude,
            lng: location.longitude,
          });
          activeOffer ?
            marker.setIcon(activeOffer === id ? iconChanger(LeafletUrls.URL_MARKER_CURRENT) : iconChanger(LeafletUrls.URL_MARKER_DEFAULT)).addTo(markerLayerRef.current as LayerGroup) :
            marker.setIcon(uniqUrl === id ? iconChanger(LeafletUrls.URL_MARKER_CURRENT) : iconChanger(LeafletUrls.URL_MARKER_DEFAULT)).addTo(markerLayerRef.current as LayerGroup);
        });
      }
    }
  }, [activeOffer, map, offers, uniqUrl]);

  return (
    <div
      style={ { minHeight: '100%' } }
      ref={ mapRef }
    />
  );
}

export default Map;
