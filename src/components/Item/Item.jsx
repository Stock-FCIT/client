import React from 'react';
import { Link } from 'react-router-dom';

import './Item.scss';

import { ReactComponent as Favourite } from '../../images/liked.svg';

const Item = ({ id, img, name, price }) => {
  return (
    <Link className="link" to={`/plant/${id}`}>
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
    </Link>
  );
};

export default Item;
