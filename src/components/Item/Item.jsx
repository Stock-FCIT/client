import React from 'react';

import './Item.scss';

import { ReactComponent as Favourite } from '../../images/liked.svg';

const Item = ({ img, name, price }) => {
  return (
    <div className="itemHolder">
      <img className="itemImage" src={process.env.REACT_APP_API_URL + img} alt="" />

      <div className="itemInfo">
        <div className="favouriteWrapper">
          <Favourite className="favouriteButton" />
        </div>
        <div className="itemName">{name}</div>
        <div className="itemPrice">${price}</div>
      </div>
    </div>
  );
};

export default Item;
