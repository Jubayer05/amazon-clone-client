import React from 'react';
import { useStateValue } from '../../context/StateProvider';
import CheckoutItem from '../CheckoutItem/CheckoutItem';
import Footer from '../Footer/Footer';
import Subtotal from '../Subtotal/Subtotal';
import './Checkout.css';

const Checkout = () => {
  const [{ cart }, dispatch] = useStateValue();
  return (
    <>
      <div className="checkout">
        <div className="checkout__left">
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
            className="checkout__ad"
          />
          <div>
            <h2 className="checkout__title">Your shopping Basket</h2>
          </div>
          {cart.map((item) => (
            <CheckoutItem item={item} key={item.key} />
          ))}
        </div>
        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
