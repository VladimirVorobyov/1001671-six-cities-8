import {MouseEvent} from 'react';
import { useDispatch } from 'react-redux';
import { commentPostAction } from '../../store/api-action';
import {useState} from 'react';

type FormProps = {
  id:string
}

function Comment ({id}:FormProps): JSX.Element{
  const [form, setForm] = useState({
    rating: '',
    discription: '',
  });
  const dispatch = useDispatch();
  const onPushClick = (event:MouseEvent<HTMLButtonElement>) =>{
    event.preventDefault();
    const comment = {
      rating:form.rating,
      comment:form.discription,
    };
    dispatch(commentPostAction(comment,id));
    setForm({rating:'',discription:''});
  };


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
        id="review" name="review" value={form.discription}
        placeholder="Tell how was your stay, what you like and what can be improved"
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
  To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        { !form.rating || form.discription.length < 50 || form.discription.length > 300 ?
          <button className="reviews__submit form__submit button" disabled >
            Submit
          </button>:
          <button className="reviews__submit form__submit button"
            onClick={(event)=>onPushClick(event)}
          >
            Submit
          </button>}
      </div>
    </form>
  );
}

export default Comment;
