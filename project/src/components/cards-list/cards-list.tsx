import Card from '../card/card';
import Map from '../map/map';
import SortOptions from '../sort-options/sort-options';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import {getMap} from '../../store/sort-offers/selectors';
import { ClientOffersType } from '../../types/offers-type';

type ListProps = {
  offersActive: ClientOffersType;
};

function CardsList({offersActive}: ListProps): JSX.Element {
  const mapState = useTypeSelector(getMap);
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          {mapState && (
            <b className="places__found">
              {offersActive.length} places to stay in {mapState.city}
            </b>
          )}
          <SortOptions offersActive={offersActive} />
          <div className="cities__places-list places__list tabs__content">
            {offersActive.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </section>
        <div className="cities__right-section">
          <section className="cities__map map">
            {offersActive.length && <Map offers={offersActive} />}
          </section>
        </div>
      </div>
    </div>
  );
}
export default CardsList;
