import { useDispatch } from 'react-redux';
import {mapAction,cityAction} from '../../../store/action';
import {MapType} from '../../../types/offers-type';


type CityType = {
  city: MapType;
};

function City({ city}: CityType): JSX.Element {
  const dispatch = useDispatch();
  const classList = ['locations__item-link', 'tabs__item'];
  if (city.active) {
    classList.push('tabs__item--active');
  }

  return (
    <li className="locations__item">
      <span
        className={classList.join(' ')}
        onClick={() =>{
          dispatch(mapAction(city.city));
          dispatch(cityAction(city.city));
        }}
      >
        <span>{city.city}</span>
      </span>
    </li>
  );
}

export default City;
