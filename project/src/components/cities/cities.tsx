import mapMock from '../../mocks/map';
import City from './city/city';

function Cities(): JSX.Element {
  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {mapMock.map((item) => (
              <City key={item.lat} city={item} />
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}

export default Cities;
