import React from 'react';
import ProductStar from '../ProductStar/ProductStar';
import './Product.css';

const Product = () => {
  return (
    <div className="product">
      <div className="product__info">
        <p className="product__name">
          2020 Apple iPad Pro (11-inch, Wi-Fi, 128GB) - Space Gray (2nd
          Generation)
        </p>
        <p className="product__price">
          <del>
            <small>$</small>
            <strong>799</strong>
          </del>
        </p>
        <p className="product__discount">
          <span className="product__discountPrice">{799 - 799 * 0.22}</span>
          <span className="product__discountRate">(22% off for new year)</span>
        </p>
        <div className="product__star">
          <ProductStar />
        </div>
      </div>

      <img
        src="https://images-na.ssl-images-amazon.com/images/I/311ThQv0JoL.jpg"
        alt=""
      />

      <button className="product__btn">Add to Cart</button>
    </div>
  );
};

export default Product;
