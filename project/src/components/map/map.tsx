import { useRef, useEffect } from 'react';
import useMap from '../../hooks/useMap';
import imgGeneral from '../../img/pin.svg';
import imgActive from '../../img/pin-active.svg';
import 'leaflet/dist/leaflet.css';
import { Icon, Marker } from 'leaflet';
import { OffersType } from '../../types/offers-type';
import { useTypeSelector } from '../../hooks/useTypeSelector';


type MapPropsType = {
  offers: OffersType;
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

function Map({ offers }: MapPropsType): JSX.Element {
  const active = useTypeSelector((state)=>state.active);
  const mapRef = useRef(null);
  const map = useMap(mapRef);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(+active === offer.id ? currentCustomIcon : defaultCustomIcon)
          .addTo(map);
      });
    }
  }, [map, offers, active]);
  return <div style={{ height: '100%' }} ref={mapRef}></div>;
}

export default Map;
