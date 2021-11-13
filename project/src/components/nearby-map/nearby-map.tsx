import { useRef} from 'react';
import useMapNearby from '../../hooks/useMapNearby';
import imgGeneral from '../../img/pin.svg';
import imgActive from '../../img/pin-active.svg';
import 'leaflet/dist/leaflet.css';
import { Icon, Marker } from 'leaflet';
import { ClientOffersType, ClientOfferType } from '../../types/offers-type';

type MapPropsType = {
  offers: ClientOffersType;
  offerActive: ClientOfferType;
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

function MapNearby({ offers,offerActive }: MapPropsType): JSX.Element {
  const mapRef = useRef(null);
  const map = useMapNearby(mapRef, offerActive);
  if (map) {
    [...offers, offerActive].forEach((offer) => {
      const marker = new Marker({
        lat: offer.location.latitude,
        lng: offer.location.longitude,
      });

      marker
        .setIcon(
          offerActive.id === offer.id ? currentCustomIcon : defaultCustomIcon,
        )
        .addTo(map);
    });
  }
  return <div style={{ height: '100%' }} ref={mapRef}></div>;
}

export default MapNearby;
