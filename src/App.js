import React from 'react';

import { Switch, Router } from 'react-router-dom';
import { routing } from './configuration/routing';
import { HomePage } from './pages/HomePage';
import { CartPage } from './pages/CartPage';
import { history } from './configuration/history';
import { WrappedRoute } from './components/organisms/WrappedRoute';

export const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <WrappedRoute exact path={routing().homePage} component={HomePage} />
        <WrappedRoute exact path={routing().cartPage} component={CartPage} />
      </Switch>
    </Router>
  )
}
