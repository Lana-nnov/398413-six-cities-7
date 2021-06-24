import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainPage from '../main-page/main-page';
import Login from '../login/login';
import FavoritesList from '../favorites-list/favorites-list';
import Room from '../room/room';
import NotFoundPage from '../not-found-page/not-found-page';

function App() {

  return (
    < BrowserRouter >
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainPage />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <Login />
        </Route>
        <Route exact path={AppRoute.FAVORITE}>
          <FavoritesList />
        </Route>
        <Route exact path={AppRoute.ROOM}>
          <Room />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter >
  );
}

export default App;
