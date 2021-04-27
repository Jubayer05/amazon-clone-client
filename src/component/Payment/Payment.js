import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getCartTotal } from '../../context/Reducer';
import { useStateValue } from '../../context/StateProvider';
import CheckoutItem from '../CheckoutItem/CheckoutItem';
import StripeCheckout from 'react-stripe-checkout';
import './Payment.css';
import { Button } from '@material-ui/core';
import Footer from '../Footer/Footer';

const Payment = () => {
  const [{ cart, user }, dispatch] = useStateValue();
  const history = useHistory();
  const [product, setProduct] = useState({
    name: cart.map((item) => item.name).join(),
    price: getCartTotal(cart),
  });

  console.log(cart);

  const handleSubmitData = (token) => {
    const body = {
      token,
      product,
    };
    return fetch('http://localhost:5000/payment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (response.status === 200) {
          dispatch({ type: 'PLACE_ORDER' });
          alert('Your Order is successfully Placed!');
          history.replace('/');
        }
      })
      .catch((error) => {
        console.log('ERROR >>>>>>>>>', error);
      });
  };

  return (
    <>
      <div className="payment">
        <div className="payment__container">
          <h1>
            Checkout (
            <Link to="/checkout" className="payment__itemsLink">
              {cart.length} items
            </Link>
            )
          </h1>

          <div className="payment__section">
            <div className="payment__title">
              <h3>Delivery Address</h3>
            </div>
            <div className="payment__address">
              <p>{user ? user.email : ''}</p>
              <p>1020 lane of circuit house</p>
              <p>Paris, France</p>
            </div>
          </div>
          <div className="payment__section--review">
            <div className="payment__title payment__review--title">
              <h3>Review items and delivery</h3>
            </div>
            <div className="payment__items">
              {cart.map((item) => (
                <CheckoutItem item={item} key={item.key} />
              ))}
            </div>
          </div>
          <div className="payment__section">
            <div className="payment__title">
              <h3>Payment Method</h3>
            </div>
            <div className="payment__details">
              <h4>
                Your Total Bill is <span>${getCartTotal(cart)}</span>
              </h4>
              <p>
                <span className="payment__notation">N:B:</span> For testing
                purposes use Visa Card Number:
                <span>4242 4242 4242 4242</span>, Masters Card Number:
                <span>5555 5555 5555 4444</span>
              </p>
              <StripeCheckout
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
                token={handleSubmitData}
                amount={getCartTotal(cart) * 100}
                name={user?.email}
                shippingAddress
                billingAddress
              >
                <Button variant="contained" color="primary">
                  Pay your bill with card
                </Button>
              </StripeCheckout>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Payment;
