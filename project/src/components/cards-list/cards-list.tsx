import { OffersType } from '../../types/offers-type';
import Card from '../card/card';
import Map from '../map/map';
import SortOptions from '../sort-options/sort-options';
import { useTypeSelector } from '../../hooks/useTypeSelector';
type ListProps = {
  setActive: (a: string) => void;
  active: string;
  offersActive: OffersType;
};

function CardsList({
  setActive,
  active,
  offersActive,
}: ListProps): JSX.Element {
  const mapState = useTypeSelector((state) => state.map);
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          {mapState && (
            <b className="places__found">
              {mapState.countOffer} places to stay in {mapState.city}
            </b>
          )}
          <SortOptions offersActive={offersActive} />
          <div className="cities__places-list places__list tabs__content">
            {offersActive.map((item) => (
              <Card
                key={item.id}
                item={item}
                active={active}
                setActive={setActive}
              />
            ))}
          </div>
        </section>
        <div className="cities__right-section">
          <section className="cities__map map">
            <Map offers={offersActive} active={active} />
          </section>
        </div>
      </div>
    </div>
  );
}
export default CardsList;
