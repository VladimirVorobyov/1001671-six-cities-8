import { ClientOfferType } from '../../types/offers-type';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {activeCardAction, redirectToRouteAction} from '../../store/action';
import {favoritePushOffersAction} from '../../store/api-action';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { getAuthorization } from '../../store/authorization/selectors';
import { adaptTypeHouse, AppRoute, AuthorizationStatus } from '../../const';

type CardScreenProps = {
  item: ClientOfferType;
};

function Card({ item}: CardScreenProps): JSX.Element {
  const dispatch = useDispatch();
  const rating = Math.round(item.rating) * 20;
  const status = useTypeSelector(getAuthorization);
  const typeHouse = adaptTypeHouse(item.type);
  return (
    <article
      className="cities__place-card place-card"
      onMouseOver={() => dispatch(activeCardAction(item.id))}
    >
      {item.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${item.id}`}>
          <img
            className="place-card__image"
            src={item.previewImage}
            width="260"
            height="200"
            alt="Place"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{`\u20AC${item.price}`}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              status === AuthorizationStatus.Auth
                ? dispatch(favoritePushOffersAction(item))
                : dispatch(redirectToRouteAction(AppRoute.SignIn));
            }}
            className="place-card__bookmark-button button"
            type="button"
          >
            {item.isFavorite ? (
              <svg
                style={{ fill: '#4481c3' }}
                className="place-card__bookmark-icon"
                width="18"
                height="19"
              >
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
            ) : (
              <svg
                style={{ fill: 'none' }}
                className="place-card__bookmark-icon"
                width="18"
                height="19"
              >
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
            )}
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rating}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="place-card__type">{typeHouse}</p>
      </div>
    </article>
  );
}

export default Card;
