import React from 'react';
import { ClientOfferType } from '../../types/offers-type';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {activeCardAction} from '../../store/action';
import {
  fullOfferAction,
  offerNearbyAction,
  commentOfferAction
} from '../../store/api-action';

type CardScreenProps = {
  item: ClientOfferType;
};
const style = {
  svg: {
    fill: '#4481c3',
  },
  svgN: {
    fill: 'none',
  },
};


function Card({ item}: CardScreenProps): JSX.Element {
  const dispatch = useDispatch();
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
        <Link
          to={`/offer/${item.id}`}
          onClick={() =>{
            dispatch(offerNearbyAction(item.id));
            dispatch(fullOfferAction(item.id));
            dispatch(commentOfferAction(item.id));
          }}
        >
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
          <button className="place-card__bookmark-button button" type="button">
            <svg
              style={item.isFavorite ? style.svg : style.svgN}
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
            <span style={{ width: '50%' }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link
            to={`/offer/${item.id}`}
            onClick={() =>{
              dispatch(fullOfferAction(item.id));
              dispatch(offerNearbyAction(item.id));
              dispatch(commentOfferAction(item.id));
            }}
          >
            {item.title}
          </Link>
        </h2>
        <p className="place-card__type">{item.type}</p>
      </div>
    </article>
  );
}

export default React.memo(Card,(prevProps,nextProps)=>prevProps.item === nextProps.item);
