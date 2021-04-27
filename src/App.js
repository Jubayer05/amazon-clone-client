import React, { useEffect } from 'react';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './component/Checkout/Checkout';
import Login from './component/Login/Login';
import { auth } from './firebase.config';
import { useStateValue } from './context/StateProvider';
import Payment from './component/Payment/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PrivateRoute from './component/Login/PrivateRoute';

const promise = loadStripe(
  'pk_test_51IcUTPSDhlQXWyr7L8E33vtc0JTbD3Wzo7vGz6vnoNpFLL95yug8KfBMmBxwX2PtqaCkQWWnfAkn6ZUwgQHIaS7I008BOOiuw6'
);

const App = () => {
  // useEffect(() => {
  //   auth.onAuthStateChanged((authUser) => {
  //     console.log(
  //       'USER >>>>>',
  //       authUser.displayName,
  //       authUser.user.displayName,
  //       {
  //         name: authUser.displayName,
  //         email: authUser.email,
  //       }
  //     );
  //     if (authUser) {
  //     } else {
  //       dispatch({
  //         type: 'SET_USER',
  //         user: null,
  //       });
  //     }
  //   });
  // }, []);
  return (
    <Router>
      <Switch>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/payment">
          <Header />
          <Elements stripe={promise}>
            <Payment />
          </Elements>
        </PrivateRoute>
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
