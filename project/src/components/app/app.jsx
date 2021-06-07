import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainPage from '../main-page/main-page';
import Login from '../login/login';
import Favorite from '../favorite/favorite';
import Room from '../room/room';
import NotFoundPage from '../not-found-page/not-found-page';

function App(props) {
  const { placesCount } = props;

  return (
    < BrowserRouter >
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainPage placesCount={placesCount} />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <Login />
        </Route>
        <Route exact path={AppRoute.FAVORITE}>
          <Favorite />
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

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
};

export default App;
