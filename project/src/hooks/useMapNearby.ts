import { ClientOfferType } from './../types/offers-type';
import { useEffect, useState, MutableRefObject } from 'react';
import { Map, TileLayer } from 'leaflet';

function useMapNearby(mapRef: MutableRefObject<HTMLElement | null>, city:ClientOfferType): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  useEffect(() => {
    if (mapRef.current !== null && map === null && city) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: city.location.zoom,
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        },
      );

      instance.addLayer(layer);

      setMap(instance);
    }
    const adress =  {
      lat: city.location.latitude,
      lng: city.location.longitude,
    };
    if (map && city) {
      map.setView(adress, city.location.zoom);
    }
  }, [mapRef, map, city]);

  return map;
}

export default useMapNearby;
