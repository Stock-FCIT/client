import React from 'react';

import './Item.scss';

import itemImage from '../../images/plant.jpg';
import { ReactComponent as Favourite } from '../../images/liked.svg';

const Item = () => {
  return (
    <div className="itemHolder">
      <img className="itemImage" src={itemImage} alt="" />

      <div className="itemInfo">
        <div className="favouriteWrapper">
          <Favourite className="favouriteButton" />
        </div>
        <div className="itemName">Red Prayer Plant</div>
        <div className="itemPrice">$79.89</div>
      </div>
    </div>
  );
};

export default Item;
