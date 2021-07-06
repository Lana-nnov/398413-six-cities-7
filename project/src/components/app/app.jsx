import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, Router as BrowserRouter } from 'react-router-dom';
import PrivateRoute from '../private-route/private-route';
import { AppRoute } from '../../const';
import MainPage from '../main-page/main-page';
import Login from '../login/login';
import FavoritesList from '../favorites-list/favorites-list';
import Room from '../room/room';
import NotFoundPage from '../not-found-page/not-found-page';
import LoadingScreen from '../loading-screen/loading-screen';
import browserHistory from '../../browser-history';
import { isCheckedAuth } from '../../utils/util.js';

function App(props) {

  const { authorizationStatus, isDataLoaded } = props;

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    < BrowserRouter history={browserHistory} >
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainPage />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <Login />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.FAVORITE}
          render={() => <FavoritesList />}
        >
        </PrivateRoute>
        {/*<Route exact path={AppRoute.FAVORITE}>
          <FavoritesList />
  </Route>*/}
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
  isDataLoaded: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  isDataLoaded: state.isDataLoaded,
  authorizationStatus: state.authorizationStatus,
});

export { App };
export default connect(mapStateToProps, null)(App);
