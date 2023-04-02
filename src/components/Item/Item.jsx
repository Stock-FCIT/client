import React from 'react';

import './Item.scss';

import itemImage from '../../images/plant.jpg';
import favourite from '../../images/favoutiteButton.svg';

const Item = () => {
  return (
    <div className="itemHolder">
      <img className="itemImage" src={itemImage} alt="" />

      <div className="itemInfo">
        <img className="favouriteButton" src={favourite} alt="" />
        <div className="itemName">Red Prayer Plant</div>
        <div className="itemPrice">$79.89</div>
      </div>
    </div>
  );
};

export default Item;
