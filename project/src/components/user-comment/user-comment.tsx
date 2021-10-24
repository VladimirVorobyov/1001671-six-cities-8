import {CommentOfferType} from '../../types/offers-type';

type CommentProps = {
  offer: CommentOfferType;
}

function UserComment ({offer}:CommentProps): JSX.Element{
  return(
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={offer.imgAutor} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">{offer.Autor}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{offer.description}</p>
        <time className="reviews__time" dateTime={offer.date}>{offer.date}</time>
      </div>
    </li>
  );
}

export default UserComment;
