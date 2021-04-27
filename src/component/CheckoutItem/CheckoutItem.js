import React from 'react';
import ProductStar from '../Product/ProductStar/ProductStar';
import './CheckoutItem.css';
import { useStateValue } from '../../context/StateProvider';

const CheckoutItem = ({ item }) => {
  const [{ cart }, dispatch] = useStateValue();
  const removeFromCart = () => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      key: item.key,
    });
  };
  return (
    <div className="checkoutItem">
      <img src={item.img} alt="" />
      <div className="checkoutItem__info">
        <p className="checkoutItem__name">{item.name}</p>
        <p className="checkoutItem__price">
          <small>$</small>
          <strong>{item.discountPrice}</strong>
        </p>
        <ProductStar star={item.star} />
        <button onClick={removeFromCart} className="checkoutItem__button">
          Remove from cart
        </button>
      </div>
    </div>
  );
};

export default CheckoutItem;
