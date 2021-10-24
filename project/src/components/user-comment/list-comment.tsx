import {CommentsOfferType} from '../../types/offers-type';
import UserComment from './user-comment';

type CommentProps = {
  comments: CommentsOfferType;
}

function ListComment ({comments}:CommentProps): JSX.Element{
  return(
    <>
      <h2 className="reviews__title">Reviews &middot;
        <span className="reviews__amount">{comments.length}</span>
      </h2>
      <ul className="reviews__list">
        {comments.map((item)=> <UserComment key={item.id}  offer={item}/>)}
      </ul>
    </>
  );
}

export default ListComment;
