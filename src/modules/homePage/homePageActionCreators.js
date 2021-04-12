import * as actionTypes from './homePageActionTypes';

export const fetchProducts = (payload) => ({
  type: actionTypes.FETCH_PRODUCTS,
  payload
})
