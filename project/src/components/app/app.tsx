import { Switch, Route, Router as BrowserRouter } from 'react-router-dom';
import Main from '../main/main';
import Error from '../error/error';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from '../private-route/private-route';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import Loading from '../loading/loading';
import browserHistory from '../../browser-history';
import {getLoaded,getAuthorization} from '../../store/authorization/selectors';
import { getOffers } from '../../store/sort-offers/selectors';

function App(): JSX.Element {
  const authorizationStatus = useTypeSelector(getAuthorization);
  const offersActive = useTypeSelector(getOffers);
  const isDataLoaded = useTypeSelector(getLoaded);
  if (AuthorizationStatus.Unknown === authorizationStatus || !isDataLoaded) {
    return <Loading />;
  }
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route path={AppRoute.Main} exact>
          <Main offersActive={offersActive}/>
        </Route>
        <Route path={AppRoute.SignIn} exact>
          <Login />
        </Route>
        <PrivateRoute
          path={AppRoute.Favorites}
          exact
          render={() => <Favorites />}
        />
        <Route path={AppRoute.Room} exact>
          <Room />
        </Route>
        <Route render={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
