import React from 'react';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './component/Checkout/Checkout';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
