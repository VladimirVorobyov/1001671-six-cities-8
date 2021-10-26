import { useRef, useEffect } from 'react';
import useMap from '../../hooks/useMap';
import imgGeneral from '../../img/pin.svg';
import imgActive from '../../img/pin-active.svg';
import 'leaflet/dist/leaflet.css';
import { Icon, Marker } from 'leaflet';
import { OffersType } from '../../types/offers-type';


type MapPropsType = {
  offers: OffersType;
  active: string;
};
const defaultCustomIcon = new Icon({
  iconUrl: imgGeneral,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: imgActive,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map({ offers, active }: MapPropsType): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.lat,
          lng: offer.lng,
        });

        marker
          .setIcon(active === offer.id ? currentCustomIcon : defaultCustomIcon)
          .addTo(map);
      });
    }
  }, [map, offers, active]);
  return <div style={{ height: '100%' }} ref={mapRef}></div>;
}

export default Map;
