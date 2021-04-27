import React from 'react';
import androids from '../../fakeData/Android';
import cameras from '../../fakeData/Camera';
import laptops from '../../fakeData/laptop';
import ProductItem from './ProductItem/ProductItem';
import './Product.css';

const Product = () => {
  const androids3 = androids.slice(0, 3);
  const cameras4 = cameras.slice(0, 4);
  const laptop2 = laptops.slice(0, 2);
  return (
    <div className="product__container">
      <div className="product__row product__row--1">
        {androids3.map((item) => (
          <ProductItem item={item} key={item.key} />
        ))}
      </div>
      <div className="product__row product__row--2">
        {cameras4.map((item) => (
          <ProductItem item={item} key={item.key} />
        ))}
      </div>
      <div className="product__row product__row--3">
        {laptop2.map((item) => (
          <ProductItem item={item} key={item.key} />
        ))}
      </div>
    </div>
  );
};

export default Product;
