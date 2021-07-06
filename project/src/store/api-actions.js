import { ActionCreator } from './action';
import { AuthorizationStatus, AppRoute, APIRoute } from '../const';
import { adaptOfferToClient } from '../utils/adapter';

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS).then(({ data }) => {
    const offers = data.map((elem) => adaptOfferToClient(elem));
    dispatch(ActionCreator.loadOffers(offers));
  })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
    })
);

export const login = ({ login: email, password }) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, { email, password })
    .then((console.log(email + password)))
    .then(({ data }) => localStorage.setItem('token', data.token))
    .then(console.log(localStorage.getItem('token')))
    .then(localStorage.setItem('userInfo', JSON.stringify(email)))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.ROOT)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.logout()))
);

