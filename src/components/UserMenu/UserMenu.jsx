import React, { useContext } from 'react';
import { css } from 'emotion';
import styles from './UserMenu.module.scss';
import { Menu, MenuItem, MenuSeparator } from 'reakit/Menu';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';

const UserMenu = observer(({ menu, fullname, email }) => {
  const { user } = useContext(Context);

  const logOut = () => {
    menu.hide();
    user.setUser({});
    user.setIsAuth(false);
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
  };

  const style = css`
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 18px;
    margin-left: -180px;

    z-index: 20;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    width: 230px;
    transition: opacity 250ms ease-in-out, transform 250ms ease-in-out;
    opacity: 0;
    transform-origin: top center;
    transform: scaleY(0);
    [data-enter] & {
      opacity: 1;
      transform: scaleY(1);
    }
  `;

  return (
    <Menu {...menu} aria-label="Preferences">
      <div className={style}>
        <div className={styles.userInfo}>
          <div className={styles.userName}>{fullname}</div>
          <div className={styles.userEmail}>{email}</div>
        </div>
        <MenuSeparator className={styles.menuSeparator} {...menu} />
        <Link className={styles.link} to="/userpage">
          <MenuItem onClick={() => menu.hide()} className={styles.settingsButton} {...menu}>
            Settings
          </MenuItem>
        </Link>
        <Link to="/">
          <MenuItem onClick={() => logOut()} className={styles.logOutButton} {...menu}>
            Log out
          </MenuItem>
        </Link>
      </div>
    </Menu>
  );
});

export default UserMenu;
