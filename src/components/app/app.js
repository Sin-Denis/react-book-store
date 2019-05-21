import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, CartPage } from '../pages';
import './app.css';

import { WithBookStoreService } from '../hoc';

const App = ({ bookstoreService }) => {
  return (
    <Switch>
      <Route path="/" component={ HomePage } exact />
      <Route path="/cart" component={ CartPage } exact/>
    </Switch>
  )
};

export default WithBookStoreService()(App);