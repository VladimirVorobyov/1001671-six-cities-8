import Logo from '../logo/logo';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { logoutAction } from '../../store/api-action';
import { useDispatch } from 'react-redux';

export default function Header(): JSX.Element {
  const dispatch = useDispatch();
  return(
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link
                  to={AppRoute.Favorites}
                  className="header__nav-link header__nav-link--profile"
                >
                  <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                  <span className="header__user-name user__name">
                   Oliver.conner@gmail.com
                  </span>
                </Link>
              </li>
              <li className="header__nav-item">
                <Link
                  to="/"
                  className="header__nav-link"
                  onClick={(evt) => {
                    evt.preventDefault();
                    dispatch(logoutAction());
                  }}
                >
                  <span className="header__signout">Sign out</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

