import { combineReducers } from 'redux';
import { homePage } from './modules/homePage/homePageReducers';
import { cartPage } from './modules/cartPage/cartPageReducers';
import { reducer as formReducer } from 'redux-form';

export const rootReducer = combineReducers({
  homePage,
  cartPage,
  form: formReducer
});
