import React from 'react';
import amazonLogo from '../../images/logos/logo-white.png';
import './Header.css';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import SearchIcon from '@material-ui/icons/Search';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../context/StateProvider';
import { auth } from '../../firebase.config';

const Header = () => {
  const [{ cart }, dispatch] = useStateValue();
  const user = JSON.parse(sessionStorage.getItem('user'));

  const handleAuthentication = () => {
    if (user) {
      dispatch({ type: 'LOGOUT' });
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo header__hoverBox"
          src={amazonLogo}
          alt=""
        />
      </Link>
      <div className="header__location header__hoverBox">
        <LocationOnOutlinedIcon />
        <div className="header__option--location">
          <span className="header__optionLineOne">Deliver To</span>
          <span className="header__optionLineTwo">Canada</span>
        </div>
      </div>
      <div className="header__search">
        <input className="input__searchInput" type="text" />
        <Button className="searchButton">
          <SearchIcon className="searchIcon" />
        </Button>
      </div>

      {/* TODO: */}

      <div className="header__nav">
        <Link
          onClick={handleAuthentication}
          to={!user && '/login'}
          className="header__option header__hoverBox"
        >
          <span className="header__optionLineOne">
            Hello {user ? user.name.split(' ')[0] : 'Guest'}
          </span>
          <span className="header__optionLineTwo">
            {user ? 'Sign Out' : 'Sign In'}
          </span>
        </Link>
        <div className="header__option header__hoverBox">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option header__hoverBox">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout" className="header__Basket header__hoverBox">
          <ShoppingBasketOutlinedIcon />
          <span className="header__BasketCount">{cart.length}</span>
        </Link>
      </div>
      {/* <div class="navbar-links">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default Header;
