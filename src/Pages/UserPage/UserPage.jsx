import React, { useState } from "react";
import userPhoto from "../../images/userPhoto.png";
import styles from "./UserPage.module.scss";
import EditInfo from "../../components/EditInfo/EditInfo";
import EditPassword from "../../components/EditPassword/EditPassword";

const UserPage = () => {
  const [menuHandler, setMenuHandler] = useState(1);
  return (
    <div className={styles.userContainer}>
      <img className={styles.userPhoto} src={userPhoto} alt="userPhoto" />
      <div className={styles.userName}>Tony Stark</div>

      <div className={styles.menu}>
        <div className={styles.menuButtonContainer}>
          <div
            className={
              menuHandler === 1 ? styles.menuButtonActive : styles.menuButton
            }
            onClick={() => setMenuHandler(1)}
          >
            Edit Account
          </div>
          <div
            className={
              menuHandler === 2 ? styles.menuButtonActive : styles.menuButton
            }
            onClick={() => setMenuHandler(2)}
          >
            Orders History
          </div>
          <div
            className={
              menuHandler === 3 ? styles.menuButtonActive : styles.menuButton
            }
            onClick={() => setMenuHandler(3)}
          >
            Favourites
          </div>
        </div>

        {menuHandler === 1 ? (
          <div>
            <EditInfo />
            <EditPassword />
          </div>
        ) : menuHandler === 2 ? (
          <div>Orders history</div>
        ) : (
          <div>Favourites</div>
        )}
      </div>
    </div>
  );
};

export default UserPage;
