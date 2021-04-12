import { handleActions } from 'redux-actions';

import * as actionTypes from './homePageActionTypes';

const initialState = {
  products: []
}

export const homePage = handleActions(
  {
    [actionTypes.FETCH_PRODUCTS](state, { payload }) {
      return {...state, products: payload};
    },
  },
  initialState
)
