import React, { useState } from 'react';
import styles from './Header.module.scss';
import logo from '../../images/stock_logo.svg';
import liked from '../../images/liked.svg';
import cart from '../../images/cart.svg';
import Register from '../Register/Register';
import Login from '../Login/Login';


import { useDialogState, Dialog, DialogBackdrop, DialogDisclosure } from 'reakit/Dialog';
import { Link } from 'react-router-dom';

const Header = () => {
  const [clickListener, setClickListener] = useState();

  const handleWindowChange = (value) => {
    setClickListener(value);
  };

  const dialog1 = useDialogState({ animated: true });

  return (
    <div className={styles.headerContainer}>
      <Link to='/' className={styles.headerLeft}>
        <img className={styles.logo} src={logo} alt="Logo" />
        <h1 className={styles.logoName}>Stock</h1>
      </Link>

      <div className={styles.headerRight}>
        <a className={styles.svgButton} href="">
          <img src={liked} alt="" />
        </a>
        <a className={styles.svgButton} href="">
          <img src={cart} alt="" />
        </a>

        <DialogDisclosure
          className={styles.registerButton}
          onClick={() => setClickListener(true)}
          {...dialog1}>
          Register
        </DialogDisclosure>
        <p className={styles.separator}>|</p>
        <DialogDisclosure
          className={styles.registerButton}
          onClick={() => setClickListener(false)}
          {...dialog1}>
          Login
        </DialogDisclosure>
        <DialogBackdrop {...dialog1} className={styles.backdropStyles}>
          <Dialog {...dialog1} className={styles.dialogStyles}>
            {clickListener ? (
              <Register changeWindow={handleWindowChange} dialog1={dialog1} />
            ) : (
              <Login changeWindow={handleWindowChange} dialog2={dialog1} />
            )}
          </Dialog>
        </DialogBackdrop>
      </div>
    </div>
  );
};

export default Header;
