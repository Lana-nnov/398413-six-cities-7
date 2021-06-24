import { ActionType } from './action';
import { DEFAULT_CITY } from '../const';
import offers from '../mocks/offers';
import reviews from '../mocks/reviews';

const initialState = {
  city: DEFAULT_CITY,
  offers: offers,
  currentOffers: offers.filter((elem) => elem.city === DEFAULT_CITY),
  reviews: reviews,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
        currentOffers: offers.filter((elem) => elem.city === action.payload),
      };
    default:
      return state;
  }
};


export { reducer };
