import { MutableRefObject, useEffect, useState } from 'react';
import { Map, TileLayer } from 'leaflet';
import { Location } from '../../types/types';
import { LeafletUrls } from '../../const';

type City = {
  location: Location,
  name: string,
}

function useMap(mapRef: MutableRefObject<HTMLElement | null>, { location }: City): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: location.latitude,
          lng: location.longitude,
        },
        zoom: location.zoom,
      });
      const layer = new TileLayer(LeafletUrls.Layer,
        {
          attribution: LeafletUrls.Attribution,
        },
      );

      instance.addLayer(layer);
      setMap(instance);
    }

    else {
      map?.setView({
        lat: location.latitude,
        lng: location.longitude,
      }, location.zoom);
    }
  }, [mapRef, map, location.latitude, location.longitude, location.zoom]);

  return map;
}

export default useMap;
