import React, { useState } from 'react';
import { useStateValue } from '../../../context/StateProvider';
import ProductStar from '../ProductStar/ProductStar';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import BlockIcon from '@material-ui/icons/Block';
import './ProductItem.css';

const ProductItem = ({ item }) => {
  const { name, price, img, star, discount } = item;
  const [{ cart }, dispatch] = useStateValue();
  const [disableBtn, setDisableBtn] = useState(false);
  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      newItem: { ...item, discountPrice },
    });
    setDisableBtn(true);
  };
  const discountPrice = parseFloat(
    (price - price * (discount / 100)).toFixed(2)
  );
  return (
    <div className="product">
      <div style={{ margin: '0 auto' }}>
        <img className="product__img" src={img} alt="" />
      </div>
      <div className="product__info">
        <p className="product__name">{name}</p>
        <p className="product__price">
          <span className="product__discountPrice">${discountPrice}</span>
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

      {!disableBtn ? (
        <button onClick={addToCart} className="product__btn">
          <AddShoppingCartOutlinedIcon />
          <span style={{ fontWeight: 'bold' }}>Add to Cart</span>
          <span>&nbsp;</span>
        </button>
      ) : (
        <button
          onClick={() => alert('Product Already Added to Cart')}
          className="product__btn--disable product__btn"
        >
          <BlockIcon />
          <span style={{ fontWeight: 'bold' }}>Product Added</span>
          <span>&nbsp;</span>
        </button>
      )}
    </div>
  );
};

export default ProductItem;
