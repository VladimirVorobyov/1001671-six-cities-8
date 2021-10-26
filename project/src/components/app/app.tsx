import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from '../main/main';
import Error from '../error/error';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import {AppRoute,AuthorizationStatus} from '../../const';
import PrivateRoute from '../private-route/private-route';
import offers from '../../mocks/offers';
import { useState } from 'react';
import {useTypeSelector} from '../../hooks/useTypeSelector';

function App(): JSX.Element {
  const [active, setActive] = useState('');
  const offersActive = useTypeSelector((state) => state.offers);
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.Main} exact>
          <Main
            offersActive={offersActive}
            active={active}
            setActive={setActive}
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
          <Room  active={active} setActive={setActive} />
        </Route>
        <Route render={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
