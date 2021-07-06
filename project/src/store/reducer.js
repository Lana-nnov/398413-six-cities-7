import { ActionType } from './action';
import { DEFAULT_CITY, AuthorizationStatus } from '../const';
import reviews from '../mocks/reviews';

const initialState = {
  city: DEFAULT_CITY,
  offers: [],
  currentOffers: [],
  reviews: reviews,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  isDataLoaded: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
        currentOffers: state.offers.filter((elem) => elem.city === action.payload),
      };
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        currentOffers: action.payload.filter((elem) => elem.city === state.city),
        isDataLoaded: true,
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    default:
      return state;
  }
};


export { reducer };
