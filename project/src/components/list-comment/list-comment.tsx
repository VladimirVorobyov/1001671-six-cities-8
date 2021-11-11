import { useTypeSelector } from '../../hooks/useTypeSelector';
import { getComments } from '../../store/full-offer/selectors';
import UserComment from '../user-comment/user-comment';

function ListComment (): JSX.Element{
  const comments = useTypeSelector(getComments);
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
