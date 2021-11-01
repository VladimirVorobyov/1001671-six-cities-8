import { useDispatch } from 'react-redux';
import { ClientOffersType } from '../../types/offers-type';
import {
  LowToHighAction,
  HighToLowAction,
  TopRatedAction
} from '../../store/action';
type SortProps = {
  offersActive: ClientOffersType;
};

function SortOptions({ offersActive }: SortProps): JSX.Element {
  const dispatch = useDispatch();
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        <li className="places__option places__option--active" tabIndex={0}>
          Popular
        </li>
        <li
          onClick={() => dispatch(LowToHighAction(offersActive))}
          className="places__option"
          tabIndex={0}
        >
          Price: low to high
        </li>
        <li
          className="places__option"
          tabIndex={0}
          onClick={() => dispatch(HighToLowAction(offersActive))}
        >
          Price: high to low
        </li>
        <li
          className="places__option"
          tabIndex={0}
          onClick={() => dispatch(TopRatedAction(offersActive))}
        >
          Top rated first
        </li>
      </ul>
    </form>
  );
}

export default SortOptions;
