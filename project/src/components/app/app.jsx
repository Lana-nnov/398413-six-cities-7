import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainPage from '../main-page/main-page';
import Login from '../login/login';
import FavoritesList from '../favorites-list/favorites-list';
import Room from '../room/room';
import NotFoundPage from '../not-found-page/not-found-page';
import offerProp from '../../prop-types/offer.prop';
import reviewProp from '../../prop-types/review.prop';

function App(props) {
  const { offers, reviews } = props;

  return (
    < BrowserRouter >
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainPage offers={offers} />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <Login />
        </Route>
        <Route exact path={AppRoute.FAVORITE}>
          <FavoritesList offers={offers} />
        </Route>
        <Route exact path={AppRoute.ROOM}>
          <Room offers={offers} reviews={reviews} />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter >
  );
}

App.propTypes = {
  offers: PropTypes.arrayOf(offerProp).isRequired,
  reviews: PropTypes.arrayOf(reviewProp).isRequired,
};

export default App;
