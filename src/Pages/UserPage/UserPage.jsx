import React, { useState, useEffect } from 'react';
import userPhoto from '../../images/userPhoto.png';
import styles from './UserPage.module.scss';
import EditInfo from '../../components/EditInfo/EditInfo';
import EditPassword from '../../components/EditPassword/EditPassword';

import { getUserInfo } from '../../http/userAPI';
import { getAllFavouritePlants, getFavouritePlants } from '../../http/favouriteAPI';
import Item from '../../components/Item/Item';

const UserPage = () => {
  const [menuHandler, setMenuHandler] = useState(1);
  const [userInfo, setUserInfo] = useState({});
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [favouritePlantsId, setFavouritePlantsId] = useState();

  useEffect(() => {
    getUserInfo().then((data) => {
      setUserInfo(data);
    });
    getAllFavouritePlants().then((data) => {
      setFavoriteItems(data);
    });
    getFavouritePlants().then((data) => setFavouritePlantsId(data.map((item) => item.plantId)));
  }, []);

  return (
    <div className={styles.userContainer}>
      <img className={styles.userPhoto} src={userPhoto} alt="userPhoto" />
      <div className={styles.userName}>{userInfo.name}</div>

      <div className={styles.menu}>
        <div className={styles.menuButtonContainer}>
          <div
            className={menuHandler === 1 ? styles.menuButtonActive : styles.menuButton}
            onClick={() => setMenuHandler(1)}>
            Edit Account
          </div>
          <div
            className={menuHandler === 2 ? styles.menuButtonActive : styles.menuButton}
            onClick={() => setMenuHandler(2)}>
            Orders History
          </div>
          <div
            className={menuHandler === 3 ? styles.menuButtonActive : styles.menuButton}
            onClick={() => setMenuHandler(3)}>
            Favourites
          </div>
        </div>

        {menuHandler === 1 ? (
          <div className={styles.minContainer}>
            <EditInfo user={userInfo} />
            <EditPassword />
          </div>
        ) : menuHandler === 2 ? (
          <div className={styles.minContainer}>Orders history</div>
        ) : (
          <div className={styles.gridContainer}>
            {favoriteItems ? (
              favoriteItems.map((obj) => (
                <Item key={obj.id} {...obj} favourite={favouritePlantsId} />
              ))
            ) : (
              <></>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserPage;
