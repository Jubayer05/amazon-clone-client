import React from 'react';
import './ProductOverflow.css';

const ProductOverflow = ({ productName, images }) => {
  return (
    <div className="productOverflow">
      <div className="overflow__header">
        <h3 className="overflow__heading">{productName}</h3>
        <a href="#" className="overflow__link">
          Shop Now
        </a>
      </div>
      <div className="productOverflow__container">
        {images.map((img) => (
          <img
            className="productOverflow__img"
            src={img}
            alt="Images Name"
            key={img}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductOverflow;
