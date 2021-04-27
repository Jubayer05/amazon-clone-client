import React from 'react';
import logo from '../../images/logos/logo-white.png';
import flag from '../../images/logos/U.S.A.png';
import LanguageIcon from '@material-ui/icons/Language';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="backToTop">Back to top</div>
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__content--1">
            <h4>Get to Know Us</h4>
            <a href="#facebook.com" className="footer__link">
              Careers
            </a>
            <a href="#facebook.com" className="footer__link">
              Blog
            </a>
            <a href="#facebook.com" className="footer__link">
              About Amazon
            </a>
            <a href="#facebook.com" className="footer__link">
              Investor Relations
            </a>
            <a href="#facebook.com" className="footer__link">
              Amazon Devices
            </a>
            <a href="#facebook.com" className="footer__link">
              Amazon Tours
            </a>
          </div>
        </div>

        {/* TODO: */}

        <div className="footer__content">
          <div className="footer__content--2">
            <h4>Make Money with Us</h4>
            <a href="#facebook.com" className="footer__link">
              Sell products on Amazon
            </a>
            <a href="#facebook.com" className="footer__link">
              Sell on Amazon Business
            </a>
            <a href="#facebook.com" className="footer__link">
              Sell apps on Amazon
            </a>
            <a href="#facebook.com" className="footer__link">
              Become an Affiliate
            </a>
            <a href="#facebook.com" className="footer__link">
              Advertise Your Products
            </a>
            <a href="#facebook.com" className="footer__link">
              Self-Publish with Us
            </a>
            <a href="#facebook.com" className="footer__link">
              Host an Amazon Hub
            </a>
          </div>
        </div>

        {/* TODO: */}

        <div className="footer__content">
          <div className="footer__content--3">
            <h4> Amazon Payment Products</h4>
            <a href="#facebook.com" className="footer__link">
              Amazon Business Card
            </a>
            <a href="#facebook.com" className="footer__link">
              Shop with Points
            </a>
            <a href="#facebook.com" className="footer__link">
              Reload your Balance
            </a>
            <a href="#facebook.com" className="footer__link">
              Amazon Currency Converter
            </a>
          </div>
        </div>

        {/* TODO: */}

        <div className="footer__content">
          <div className="footer__content--4">
            <h4>Let Us Help You</h4>
            <a href="#facebook.com" className="footer__link">
              Amazon and COVID-19
            </a>
            <a href="#facebook.com" className="footer__link">
              Your Account
            </a>
            <a href="#facebook.com" className="footer__link">
              Your Orders
            </a>
            <a href="#facebook.com" className="footer__link">
              Shipping Rates & Policies
            </a>
            <a href="#facebook.com" className="footer__link">
              Returns & Replacements
            </a>
            <a href="#facebook.com" className="footer__link">
              Manage Your Content and Devices
            </a>
            <a href="#facebook.com" className="footer__link">
              Amazon Assistant
            </a>
            <a href="#facebook.com" className="footer__link">
              Help
            </a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom--content">
          <div style={{ flex: 1 }}>
            <img src={logo} alt="" className="footer__img" />
          </div>
          <div className="footer__box">
            <LanguageIcon />
            <span style={{ padding: '10px' }}>English</span>
          </div>
          <div className="footer__box">
            $<span style={{ padding: '10px' }}>USD - U.S. Dollar</span>
          </div>
          <div className="footer__box">
            <img src={flag} className="footer__flag" alt="Flag" />
            <span style={{ paddingRight: '30px' }}>United States</span>
          </div>
        </div>
      </div>
      <p className="copyright">
        Amazon Clone &copy;copyright {new Date().getFullYear()}. All rights
        reserved. Made By{' '}
        <a href="" target="_blank">
          Jubayer Ahmed.
        </a>
      </p>
    </div>
  );
};

export default Footer;
