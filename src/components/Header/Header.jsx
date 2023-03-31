import React, { useState } from 'react';
import './Header.scss';
import logo from '../../images/stock_logo.svg';
import liked from '../../images/liked.svg';
import cart from '../../images/cart.svg';
import Register from '../Register/Register';
import Login from '../Login/Login';

const Header = () => {
  const [clickListener, setClickListener] = useState('');

  const handleWindowChange = (value) => {
    setClickListener(value);
  };

  return (
    <div className="headerContainer">
      <div className="headerLeft">
        <img className="logo" src={logo} alt="Logo" />
        <h1 className="logoName">Stock</h1>
      </div>

      <div className="headerRight">
        <a className="svgButton" href="">
          <img src={liked} alt="" />
        </a>
        <a className="svgButton" href="">
          <img src={cart} alt="" />
        </a>
        <Register changeWindow={handleWindowChange} clickListener={clickListener} />
        <p className="separator">|</p>
        <Login changeWindow={handleWindowChange} clickListener={clickListener} />
      </div>
    </div>
  );
};

export default Header;
