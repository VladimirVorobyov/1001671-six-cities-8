import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from '../main/main';
import Error from '../error/error';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import {AppRoute,AuthorizationStatus} from '../../const';
import PrivateRoute from '../private-route/private-route';
import offers from '../../mocks/offers';
import {useTypeSelector} from '../../hooks/useTypeSelector';


function App(): JSX.Element {

  const offersActive = useTypeSelector((state) => state.offers);
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
          render={() => <Favorites offers={offers} />}
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
