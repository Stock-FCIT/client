import React, { useState } from "react";
import userPhoto from "../../images/userPhoto.png";
import styles from "./UserPage.module.scss";

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
            Order History
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
          <div>Edit account</div>
        ) : menuHandler === 2 ? (
          <div>Order history</div>
        ) : (
          <div>Favourites</div>
        )}
      </div>
    </div>
  );
};

export default UserPage;
