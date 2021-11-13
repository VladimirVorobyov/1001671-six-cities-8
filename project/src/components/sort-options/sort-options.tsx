import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ClientOffersType } from '../../types/offers-type';
import {
  lowToHighAction,
  highToLowAction,
  topRatedAction,
  SortCardsOffersAction
} from '../../store/action';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { getSortValue } from '../../store/sort-offers/selectors';
type SortProps = {
  offersActive: ClientOffersType;
};

function SortOptions({ offersActive }: SortProps): JSX.Element {
  const dispatch = useDispatch();
  const value = useTypeSelector(getSortValue);
  useEffect(()=>{
    value === 'lowTo' && dispatch(lowToHighAction(offersActive));
    value === 'highTo' && dispatch(highToLowAction(offersActive));
    value === 'topRated' && dispatch(topRatedAction(offersActive));
  },[value]);
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <select
        value={value}
        onChange={(e) => dispatch(SortCardsOffersAction(e.target.value))}
        className="places__options places__options--custom places__options--opened"
      >
        <option
          value=""
          className="places__option places__option--active"
          tabIndex={0}
        >
          Popular
        </option>
        <option
          value="lowTo"
          onChange={() => dispatch(lowToHighAction(offersActive))}
          className="places__option"
          tabIndex={0}
        >
          Price: low to high
        </option>
        <option
          value="highTo"
          className="places__option"
          tabIndex={0}
          onChange={() => dispatch(highToLowAction(offersActive))}
        >
          Price: high to low
        </option>
        <option
          value="topRated"
          className="places__option"
          tabIndex={0}
          onChange={() => dispatch(topRatedAction(offersActive))}
        >
          Top rated first
        </option>
      </select>
    </form>
  );
}

export default SortOptions;
