import { OfferType } from '../../types/offers-type';
import { Link } from 'react-router-dom';

type CardScreenProps = {
  item: OfferType;
  setActive: (id: string) => void;
  active: string;
};
const style = {
  svg: {
    fill: '#4481c3',
  },
  svgN: {
    fill: 'none',
  },
};

function Card({ item, active, setActive }: CardScreenProps): JSX.Element {
  return (
    <article
      className="cities__place-card place-card"
      onMouseOver={() => setActive(item.id)}
    >
      {item.premium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="/">
          <img
            className="place-card__image"
            src={item.img}
            width="260"
            height="200"
            alt="Place"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{item.cost}</b>
            <span className="place-card__price-text">
              &#47;&nbsp;night
            </span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg
              style={item.favorites ? style.svg : style.svgN}
              className="place-card__bookmark-icon"
              width="18"
              height="19"
            >
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '80%' }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${item.id}`}>{item.name}</Link>
        </h2>
        <p className="place-card__type">{item.type}</p>
      </div>
    </article>
  );
}

export default Card;
