import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from '../main/main';
import Error from '../error/error';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import {AppRoute,AuthorizationStatus} from '../../const';
import PrivateRoute from '../private-route/private-route';
import {OffersType} from '../../types/offers-type';
import { useState } from 'react';


type AppScreenProps = {
  counter: number;
  offers:OffersType;
}

function App({ counter,offers}: AppScreenProps): JSX.Element {
  const [active, setActive] = useState('');
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.Main} exact>
          <Main
            offers={offers}
            counter={counter}
            active = {active}
            setActive = {setActive}
          />
        </Route>
        <Route path={AppRoute.SignIn} exact>
          <Login/>
        </Route>
        <PrivateRoute path={AppRoute.Favorites}
          exact
          render={()=><Favorites  offers={offers}/>}
          authorizationStatus={AuthorizationStatus.Auth}
        />
        <Route path={AppRoute.Room} exact>
          <Room
            offers={offers}
            active = {active}
            setActive = {setActive}
          />
        </Route>
        < Route render={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
