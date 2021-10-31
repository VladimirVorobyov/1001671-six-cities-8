import { useState } from 'react';
import { useParams } from 'react-router';
import Card from '../card/card';
import Comment from '../comment/comment';
import Error from '../error/error';
import Logo from '../logo/logo';
import ListComment from '../user-comment/list-comment';
import DescriptionRoom from './description-room';
import FullImgRoom from './full-img-room';
import InsideList from './inside-list';
import Map from '../map/map';
import comments from '../../mocks/comments';
import { useTypeSelector } from '../../hooks/useTypeSelector';

function Room (): JSX.Element {
  const [form, setForm] = useState({
    rating:'',
    discription:'',
  });
  type IdParams = {
    id: string;
  }
  const offers = useTypeSelector((state)=>state.offers);
  const {id}:IdParams = useParams();
  const offer = offers.find((item) => item.id === +id);
  const cards = offers.filter((item) => item.id !== +id);

  return id && offer && cards ? (
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
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <Logo />
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a
                      href="/"
                      className="header__nav-link header__nav-link--profile"
                    >
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      <span className="header__user-name user__name">
                        Oliver.conner@gmail.com
                      </span>
                    </a>
                  </li>
                  <li className="header__nav-item">
                    <a href="/" className="header__nav-link">
                      <span className="header__signout">Sign out</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {offer.images.map((item) => (
                  <FullImgRoom img={item} key={item} />
                ))}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {offer?.is_premium && (
                  <div className="place-card__mark">
                    <span>Premium</span>
                  </div>
                )}
                <div className="property__name-wrapper">
                  <h1 className="property__name">{offer.title}</h1>
                  <button
                    className="property__bookmark-button button"
                    type="button"
                  >
                    <svg
                      className="property__bookmark-icon"
                      width="31"
                      height="33"
                    >
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{ width: '80%' }}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">
                    {offer.rating}
                  </span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {offer.type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {offer.bedrooms}
                  </li>
                  <li className="property__feature property__feature--adults">
                    {offer.max_adults}
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">{offer.price}</b>
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
                        src={offer.host.avatar_url}
                        width="74"
                        height="74"
                        alt="Host avatar"
                      />
                    </div>
                    <span className="property__user-name">
                      {offer.host.name}
                    </span>
                    {offer.host.is_pro && (
                      <span className="property__user-status">Pro</span>
                    )}
                  </div>
                  <div className="property__description">
                    <DescriptionRoom title={offer.description} />
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <ListComment comments={comments} />
                  <Comment setForm={setForm} form={form} />
                </section>
              </div>
            </div>
            <section className="property__map map">
              <Map offers={cards} />
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
  ) : (
    <Error />
  );
}

export default Room;
