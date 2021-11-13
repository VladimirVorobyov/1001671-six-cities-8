import { useTypeSelector } from '../../hooks/useTypeSelector';
import { getComments } from '../../store/full-offer/selectors';
import UserComment from '../user-comment/user-comment';

function ListComment (): JSX.Element{
  const comments = useTypeSelector(getComments);
  if(comments.length>10){
    comments.slice(0,10);
  }
  return (
    <>
      <h2 className="reviews__title">
        Reviews &middot;
        <span className="reviews__amount">{comments.length}</span>
      </h2>
      <ul className="reviews__list">
        {comments
          .sort((a, b) => +new Date(b.date) - +new Date(a.date))
          .map((item) => (
            <UserComment key={item.id} offer={item} />
          ))}
      </ul>
    </>
  );
}

export default ListComment;
