import { ClientOffersType } from '../../types/offers-type';
import FavoritesCard from '../favorites-card/favorites-card';

type CardProps = {
  isLooding: (param: boolean) => void;
  cityName: string;
  offresFavorites: ClientOffersType;
};

function FavoriteList({
  isLooding,
  cityName,
  offresFavorites,
}: CardProps): JSX.Element {
  const city = offresFavorites.filter((item) => item.city.name === cityName);
  return city.length>0 ?
    (
      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a href="/" className="locations__item-link">
              <span>{cityName}</span>
            </a>
          </div>
        </div>
        <div className="favorites__places">
          {city.map((e) => (
            <FavoritesCard key={e.id} card={e} isLooding={isLooding} />
          ))}
        </div>
      </li>):<div/>;
}

export default FavoriteList;
