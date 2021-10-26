import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {MapAction,CityAction} from '../../../store/action';
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
      <Link to={`/${city.city}`}
        className={classList.join(' ')}
        onClick={() =>{
          dispatch(MapAction(city.city));
          dispatch(CityAction(city.city));
        }}
      >
        <span>{city.city}</span>
      </Link>
    </li>
  );
}

export default City;
