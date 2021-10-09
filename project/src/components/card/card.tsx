import {OfferType} from '../../types/offers-type';
import { Link } from 'react-router-dom';
import {AppRoute} from '../../const';
// import { MouseEvent } from 'react';

type CardScreenProps = {
  el:OfferType;
  setActive:(a:string)=>void;
  active:string;
}
const style = {
  svg:{
    fill:'#4481c3',
  },
  svgN:{
    fill:'none',
  },
};


function Card({el,active,setActive}:CardScreenProps): JSX.Element {
  return(
    <article className="cities__place-card place-card" onMouseOver={()=>setActive(el.id)}>
      {el.premium &&
      <div className="place-card__mark">
        <span>
          Premium
        </span>
      </div> }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href='/'>
          <img className="place-card__image" src={el.img} width="260" height="200" alt="Place"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{el.cost}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg style={el.favorites ? style.svg : style.svgN} className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div  className="place-card__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={AppRoute.Room}>{el.name}</Link>
        </h2>
        <p className="place-card__type">{el.type}</p>
      </div>
    </article>
  );
}

export default Card;
