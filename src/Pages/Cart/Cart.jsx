import React, {useState, useEffect} from 'react';

import './Cart.scss';
import CartItem from '../../components/CartItem/CartItem';

import plantImage from '../../images/plantImage.jpg';
import CartUserInfo from '../../components/CartUserInfo/CartUserInfo';

import { getUserInfo } from '../../http/userAPI';

const Cart = () => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    getUserInfo().then((data) => {
      setUserInfo(data);
    });
  }, []);
  return (
    <div className="mainCartWrapper">
      <div className="infoWrapper">
        <div className="title">My Cart</div>

        <div className="info">
          <div className="leftWrapper">
            <CartItem image={plantImage} price={79.89} />
            <CartItem image={plantImage} price={179.89} />
            <CartItem image={plantImage} price={279.89} />
          </div>
          <div className="rightWrapper">
            <CartUserInfo user={userInfo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
