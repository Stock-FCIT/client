import React from 'react';

import './NotFound.scss';
import pnf from '../../images/pageNotFound.png';
import { Link } from 'react-router-dom';

const PleaseLogin = () => {
  return (
    <div className="notFoundWrapper">
      <div className="left">
        <div className="top">404</div>
        <div className="middle">Ooops!</div>
        <div className="bottom">Page Not Found</div>
        <div className="hint1">This page doesn't exist or was removed!</div>
        <div className="hint2"> We suggest you back to home</div>
        <Link to="/" className="redirectButton">
          Back To Home
        </Link>
      </div>
      <img src={pnf} alt="" />
    </div>
  );
};

export default PleaseLogin;
