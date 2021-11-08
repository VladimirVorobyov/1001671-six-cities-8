import Logo from '../logo/logo';
import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { logoutAction } from '../../store/api-action';
import { useDispatch } from 'react-redux';
import browserHistory from '../../browser-history';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { getAuthorization,getEmail } from '../../store/authorization/selectors';

function Header(): JSX.Element {
  const dispatch = useDispatch();
  const status = useTypeSelector(getAuthorization);
  const email = useTypeSelector(getEmail);
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          <nav className="header__nav">
            <ul className="header__nav-list">
              {status === AuthorizationStatus.Auth ? (
                <>
                  <li className="header__nav-item user">
                    <Link
                      to={AppRoute.Favorites}
                      className="header__nav-link header__nav-link--profile"
                    >
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      <span className="header__user-name user__name">
                        {email}
                      </span>
                    </Link>
                  </li>
                  <li className="header__nav-item">
                    <button type='button'
                      className="header__nav-link"
                      onClick={(evt) => {
                        evt.preventDefault();
                        dispatch(logoutAction());
                      }}
                    >
                      <span className="header__signout">Sign out</span>
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <button
                    className="header__nav-link"
                    onClick={(evt) => {
                      evt.preventDefault();
                      browserHistory.push(AppRoute.SignIn);
                    }}
                  >
                    <span className="header__signout">Sign In</span>
                  </button>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
