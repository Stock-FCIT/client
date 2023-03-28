import React from 'react';
import './Header.scss';
import logo from '../../images/stock_logo.svg';
import liked from '../../images/liked.svg';
import cart from '../../images/cart.svg';

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-left">
        <img className="logo" src={logo} alt="Logo" />
        <h1 className="logo-name">Stock</h1>
      </div>

      <div className="header-right">
        <a className="svg-button" href="">
          <img src={liked} alt="" />
        </a>
        <a className="svg-button" href="">
          <img src={cart} alt="" />
        </a>
        <a className="ebujaknazvatu" href="">
          Register
        </a>
        <p className="separator">|</p>
        <a className="ebujaknazvatu" href="">
          Log In
        </a>
      </div>
    </div>
  );
};

export default Header;
