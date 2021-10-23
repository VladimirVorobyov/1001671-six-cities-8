import {MouseEvent} from 'react';

type ReviewProps = {
  rating: string,
  discription: string,
}
type FormProps = {
  setForm:(props:ReviewProps)=>void;
  form: ReviewProps;
}

function Comment ({setForm,form}:FormProps): JSX.Element{
  return(
    <form className="reviews__form form" action="#" method="post" onSubmit={(e)=>
    {
      e.preventDefault();
    }}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" name="rating"
          onChange={()=>setForm({...form,...{rating:'5'}})}
          value="5" id="5-stars" type="radio"
        />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="4"
          onChange={()=>setForm({...form,...{rating:'4'}})} id="4-stars" type="radio"
        />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="3"
          onChange={()=>setForm({...form,...{rating:'3'}})}id="3-stars" type="radio"
        />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="2"
          onChange={()=>setForm({...form,...{rating:'2'}})} id="2-stars" type="radio"
        />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="1"
          onChange={()=>setForm({...form,...{rating:'1'}})} id="1-star" type="radio"
        />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea className="reviews__textarea form__textarea"
        onChange={(e)=>setForm({...form,...{discription:e.target.value}})}
        id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
  To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit"
          onClick={(e:MouseEvent<HTMLButtonElement>)=>
          {
            e.preventDefault();
            setForm({rating:'',discription:''});
          }}
        >
            Submit
        </button>
      </div>
    </form>
  );
}

export default Comment;