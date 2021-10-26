import { OffersType } from '../../types/offers-type';
import Card from '../card/card';
import Map from '../map/map';
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
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <span className="places__sorting-type" tabIndex={0}>
              Popular
              <svg className="places__sorting-arrow" width="7" height="4">
                <use xlinkHref="#icon-arrow-select"></use>
              </svg>
            </span>
            <ul className="places__options places__options--custom places__options--opened">
              <li
                className="places__option places__option--active"
                tabIndex={0}
              >
                Popular
              </li>
              <li className="places__option" tabIndex={0}>
                Price: low to high
              </li>
              <li className="places__option" tabIndex={0}>
                Price: high to low
              </li>
              <li className="places__option" tabIndex={0}>
                Top rated first
              </li>
            </ul>
          </form>
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
