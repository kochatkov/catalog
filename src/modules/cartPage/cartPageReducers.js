import { handleActions } from 'redux-actions';

import * as actionTypes from './cartPageActionTypes';

let initialState = {
  productsForBuying: [],
  totalPrice: null,
  amountOfProducts: null
}

initialState = sessionStorage.getItem("cartPage") ? JSON.parse(sessionStorage.getItem("cartPage")) : initialState;

export const cartPage = handleActions(
  {
    [actionTypes.ADD_PRODUCT_TO_CART] (state, { payload }) {
      const updatedProducts = [ ...state.productsForBuying ];
      let amount = 0;
      let amountOfProducts = state.amountOfProducts ? state.amountOfProducts + 1 : 1;


      updatedProducts.push(payload);

      updatedProducts.forEach(product => {
        product.quantity = product.quantity ? product.quantity : 1; 

        amount += product.price * product.quantity; 
      });

      return {
        ...state, 
        productsForBuying: updatedProducts,
        totalPrice: amount,
        amountOfProducts
      };
    },
    [actionTypes.SET_CART_QUANTITY](state, { payload }) {
      const { item, quantity } = payload;
      const updatedProducts = [ ...state.productsForBuying ];
      let updatedTotalAmount = 0;
      let amount = 0;

      updatedProducts.forEach(product => {
        if (product.id === item.id) {
          product.quantity = quantity;
        }
      });

      const filterdProducts = updatedProducts.filter(product => product.quantity > 0);

      filterdProducts.forEach(product => {
        updatedTotalAmount += product.price * product.quantity; 
        amount += product.quantity;
       });

  
      return {
        ...state, 
        productsForBuying: filterdProducts,
        totalPrice: updatedTotalAmount,
        amountOfProducts: amount
      };
    }
  }, initialState,
 )

