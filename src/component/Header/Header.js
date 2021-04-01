import React from 'react';
import amazonLogo from '../../images/logos/logo-white.png';
import './Header.css';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';

const Header = () => {
  return (
    <div className="header">
      <img className="header__logo header__hoverBox" src={amazonLogo} alt="" />

      <div className="header__search">
        <input className="input__searchInput" type="text" />
        <Button className="searchButton">
          <SearchIcon className="searchIcon" />
        </Button>
      </div>

      <div className="header__nav">
        <div className="header__option header__hoverBox">
          <span className="header__optionLineOne">Hello Jubayer</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
        <div className="header__option header__hoverBox">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option header__hoverBox">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <div className="header__Basket header__hoverBox">
          <ShoppingBasketOutlinedIcon />
          <span className="header__BasketCount">0</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
