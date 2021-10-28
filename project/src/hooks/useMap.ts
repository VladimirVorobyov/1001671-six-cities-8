import {useEffect, useState, MutableRefObject} from 'react';
import {Map,TileLayer} from 'leaflet';
import { useTypeSelector } from './useTypeSelector';

function useMap(mapRef:MutableRefObject<HTMLElement | null>): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const city = useTypeSelector((state) => state.map);
  useEffect(() => {
    if (mapRef.current !== null && map === null && city ) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.lat,
          lng: city.lng,
        },
        zoom: city.zoom,
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
    if(map && city){
      map.setView(city, city.zoom);
    }
  }, [mapRef, map, city]);

  return map;
}

export default useMap;
