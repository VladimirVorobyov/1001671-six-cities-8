import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { favoritePopOffersAction } from '../../store/api-action';
import { ClientOfferType } from '../../types/offers-type';

type CardProps = {
  card: ClientOfferType;
};

function FavoritesCard ({card}:CardProps): JSX.Element{
  const rating = Math.round(card.rating) * 20;
  const dispatch = useDispatch();
  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${card.id}`}>
          <img
            className="place-card__image"
            src={card.previewImage}
            width="150"
            height="110"
            alt="Place"
          />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{card.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button onClick={(event)=>{
            event.preventDefault();
            dispatch(favoritePopOffersAction(card.id));
          }}
          className="place-card__bookmark-button place-card__bookmark-button--active button"
          type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rating}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${card.id}`}>{card.title}</Link>
        </h2>
        <p className="place-card__type">{card.type}</p>
      </div>
    </article>
  );
}

export default FavoritesCard;
