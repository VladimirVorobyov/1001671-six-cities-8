import { useEffect, useState} from 'react';
import Card from '../card/card';
import Comment from '../comment/comment';
import ListComment from '../list-comment/list-comment';
import DescriptionRoom from './description-room/description-room';
import FullImgRoom from './full-img-room/full-img-room';
import InsideList from './inside-list/inside-list';
import MapNearby from '../nearby-map/nearby-map';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import Header from '../header/header';
import { getFullOffer, getLoding, getNearby } from '../../store/full-offer/selectors';
import { useDispatch } from 'react-redux';
import {
  fullOfferAction,
  offerNearbyAction,
  commentOfferAction
} from '../../store/api-action';
import { useParams } from 'react-router';
import { getAuthorization } from '../../store/authorization/selectors';
import { adaptTypeHouse, AppRoute, AuthorizationStatus } from '../../const';
import Error from '../error/error';
import { favoritePushOffersAction } from '../../store/api-action';
import { redirectToRouteAction } from '../../store/action';
import Loading from '../loading/loading';

function Room (): JSX.Element {
  const [cardFavorite, isCardFavorite] = useState(false);
  type IdParams = {
    id: string;
  }

  const { id }: IdParams = useParams();
  const offer = useTypeSelector(getFullOffer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!cardFavorite) {
      dispatch(fullOfferAction(+id));
      dispatch(offerNearbyAction(+id));
      dispatch(commentOfferAction(+id));
      isCardFavorite(true);
    }
  }, [offer,dispatch, id, cardFavorite, offer]);
  const cards = useTypeSelector(getNearby);
  const status = useTypeSelector(getAuthorization);
  const rating = offer.rating * 20;
  const images = offer.images.slice(0,6);
  const typeHouse = adaptTypeHouse(offer.type);
  const isLoding = useTypeSelector(getLoding);
  const pushFavorite = async()=> {
    await dispatch(favoritePushOffersAction(offer));
    isCardFavorite(false);
  };
  if (!isLoding) {
    return <Loading />;
  }
  return cards.length === 0 ? (
    <Error />
  ) : (
    <>
      <div style={{ display: 'none' }}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <symbol id="icon-arrow-select" viewBox="0 0 7 4">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"
            >
            </path>
          </symbol>
          <symbol id="icon-bookmark" viewBox="0 0 17 18">
            <path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path>
          </symbol>
          <symbol id="icon-star" viewBox="0 0 13 12">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"
            >
            </path>
          </symbol>
        </svg>
      </div>
      <div className="page">
        <Header />
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {images.map((item) => (
                  <FullImgRoom img={item} key={item} />
                ))}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {offer?.isPremium && (
                  <div className="place-card__mark">
                    <span>Premium</span>
                  </div>
                )}
                <div className="property__name-wrapper">
                  <h1 className="property__name">{offer.title}</h1>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      status === AuthorizationStatus.Auth
                        ? pushFavorite()
                        : dispatch(redirectToRouteAction(AppRoute.SignIn));
                    }}
                    className="property__bookmark-button button"
                    type="button"
                  >
                    {offer.isFavorite ? (
                      <svg
                        style={{ fill: '#4481c3' }}
                        className="property__bookmark-icon"
                        width="31"
                        height="33"
                      >
                        <use xlinkHref="#icon-bookmark"></use>
                      </svg>
                    ) : (
                      <svg
                        className="property__bookmark-icon"
                        width="31"
                        height="33"
                      >
                        <use xlinkHref="#icon-bookmark"></use>
                      </svg>
                    )}
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{ width: `${rating}%` }}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">
                    {offer.rating}
                  </span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {typeHouse}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {offer.bedrooms > 1
                      ? `${offer.bedrooms} Bedrooms`
                      : `${offer.bedrooms} Bedroom`}
                  </li>
                  <li className="property__feature property__feature--adults">
                    {offer.maxAdults > 1
                      ? `Max ${offer.maxAdults} adults`
                      : `Max ${offer.maxAdults} adult`}
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{offer.price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {offer.goods.map((item) => (
                      <InsideList things={item} key={item} />
                    ))}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img
                        className="property__avatar user__avatar"
                        src={offer.host.avatar}
                        width="74"
                        height="74"
                        alt="Host avatar"
                      />
                    </div>
                    <span className="property__user-name">
                      {offer.host.name}
                    </span>
                    {offer.host.pro && (
                      <span className="property__user-status">Pro</span>
                    )}
                  </div>
                  <div className="property__description">
                    <DescriptionRoom title={offer.description} />
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <ListComment />
                  {status === AuthorizationStatus.Auth && <Comment id={id} />}
                </section>
              </div>
            </div>
            <section className="property__map map">
              <MapNearby offers={cards} offerActive={offer}/>
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">
                Other places in the neighbourhood
              </h2>
              <div className="near-places__list places__list">
                {cards.map((item) => (
                  <Card key={item.id} item={item} />
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}

export default Room;
