import * as actionTypes from './cartPageActionTypes';

export const addProductToCart = (payload) => ({
  type: actionTypes.ADD_PRODUCT_TO_CART,
  payload
});

export const updateProductQuantity = (payload) => ({
  type: actionTypes.SET_CART_QUANTITY,
  payload
});
