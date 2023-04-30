import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useMenuState, MenuButton } from 'reakit/Menu';
import { useDialogState, Dialog, DialogBackdrop, DialogDisclosure } from 'reakit/Dialog';

import styles from './Header.module.scss';

import userPhoto from '../../images/userPhoto.png';
import logo from '../../images/stock_logo.svg';
import Favourite from '../../images/favoutiteButton';
import cart from '../../images/cart.svg';

import Register from '../Register/Register';
import Login from '../Login/Login';
import UserMenu from '../UserMenu/UserMenu';
import { getUserInfo } from '../../http/userAPI';
import { Context } from '../../index';

const Header = observer(() => {
  const dialog1 = useDialogState({ animated: true });
  const menu = useMenuState({ animated: 250 });

  const { user } = useContext(Context);

  const [userInfo, setUserInfo] = useState({});
  const [userName, setUserName] = useState('');

  const [clickListener, setClickListener] = useState();

  const handleWindowChange = (value) => {
    setClickListener(value);
  };

  useEffect(() => {
    dialog1.stopAnimation();

    getUserInfo().then((data) => {
      const fullname = data.name.split(' ');
      setUserName(fullname[0]);
      setUserInfo(data);
    });
  }, [user.isAuth]);

  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <Link to="/" className={styles.headerLeft}>
          <img className={styles.logo} src={logo} alt="Logo" />
          <h1 className={styles.logoName}>Stock</h1>
        </Link>

        <div className={styles.headerRight}>
          {!user.isAuth ? (
            <>
              <DialogDisclosure
                className={styles.registerButton}
                onClick={() => setClickListener(true)}
                {...dialog1}>
                Register
              </DialogDisclosure>
              <p className={styles.separator}>|</p>
              <DialogDisclosure
                className={styles.loginButton}
                onClick={() => setClickListener(false)}
                {...dialog1}>
                Login
              </DialogDisclosure>
              <DialogBackdrop {...dialog1} className={styles.backdropStyles}>
                <Dialog aria-label="Welcome" {...dialog1} className={styles.dialogStyles}>
                  {clickListener ? (
                    <Register changeWindow={handleWindowChange} dialog1={dialog1} />
                  ) : (
                    <Login changeWindow={handleWindowChange} dialog2={dialog1} />
                  )}
                </Dialog>
              </DialogBackdrop>{' '}
            </>
          ) : (
            <>
              <Favourite className={styles.svgLike} />
              <img className={styles.svgLike} src={cart} alt="" />
              <div className={styles.userBar}>
                <div className={styles.welcomeName}>Welcome, {userName}!</div>

                <MenuButton className={styles.menuButton} {...menu}>
                  <img src={userPhoto} alt="" />
                </MenuButton>
                <UserMenu menu={menu} fullname={userInfo.name} email={userInfo.email} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
});

export default Header;
