import React from 'react';
import ProductStar from '../ProductStar/ProductStar';
import './Product.css';

const Product = ({ item }) => {
  const { name, price, img, star, starCount, discount } = item;
  return (
    <div className="product">
      <div className="product__info">
        <p className="product__name">{name}</p>
        <p className="product__price">
          <span className="product__discountPrice">
            ${(price - price * (discount / 100)).toFixed(2)}
          </span>
        </p>
        <p className="product__discount">
          <del>
            <small>$</small>
            <strong>{price}</strong>
          </del>

          <span className="product__discountRate"> (-{discount}% )</span>
        </p>
        <div className="product__star">
          <ProductStar star={star} />
        </div>
      </div>

      <img className="product__img" src={img} alt="" />

      <button className="product__btn">Add to Cart</button>
    </div>
  );
};

export default Product;
