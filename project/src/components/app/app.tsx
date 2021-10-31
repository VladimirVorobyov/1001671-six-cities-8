import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from '../main/main';
import Error from '../error/error';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import {AppRoute,AuthorizationStatus} from '../../const';
import PrivateRoute from '../private-route/private-route';
import {useTypeSelector} from '../../hooks/useTypeSelector';
import Loading from '../loading/loading';


function App(): JSX.Element {

  const offersActive = useTypeSelector((state) => state.offers);
  const authorizationStatus = useTypeSelector(
    (state) => state.authorizationStatus,
  );
  const isDataLoaded = useTypeSelector((state) => state.isDataLoaded);
  if (AuthorizationStatus.Unknown === authorizationStatus || !isDataLoaded) {
    return <Loading/>;
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.Main} exact>
          <Main
            offersActive={offersActive}
          />
        </Route>
        <Route path={AppRoute.SignIn} exact>
          <Login />
        </Route>
        <PrivateRoute
          path={AppRoute.Favorites}
          exact
          render={() => <Favorites/>}
          authorizationStatus={AuthorizationStatus.Auth}
        />
        <Route path={AppRoute.Room} exact>
          <Room/>
        </Route>
        <Route render={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
