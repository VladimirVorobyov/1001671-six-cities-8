import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from '../main/main';
import Error from '../error/error';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import {AppRoute,AuthorizationStatus} from '../../const';
import PrivateRoute from '../private-route/private-route';


type AppScreenProps = {
  counter: number;
}

function App({ counter }: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.Main} exact>
          <Main counter={counter} />
        </Route>
        <Route path={AppRoute.SignIn} exact>
          <Login/>
        </Route>
        <PrivateRoute path={AppRoute.Favorites}
          exact
          render={()=><Favorites/>}
          authorizationStatus={AuthorizationStatus.NoAuth}
        />
        <Route path={AppRoute.Room} exact>
          <Room/>
        </Route>
        < Route render={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
