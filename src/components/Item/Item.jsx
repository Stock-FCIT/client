import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';

import './Item.scss';
import Favourite from '../../images/favoutiteButton';

import { setFavouritePlants, deleteFavouritePlants } from '../../http/favouriteAPI';

const Item = observer(({ id, img, name, price, favourite }) => {
  const [favouriteClass, setFavouriteClass] = useState('favouriteButton');
  const { user } = useContext(Context);

  const favouriteDelete = async (plantId) => {
    try {
      await deleteFavouritePlants(plantId);
    } catch (e) {}
  };

  const favouriteAdd = async (plantId) => {
    try {
      await setFavouritePlants(plantId);
    } catch (e) {}
  };

  const favouriteHandler = (plantId) => {
    if (favouriteClass === 'favouriteButtonLiked') {
      setFavouriteClass('favouriteButton');
      favouriteDelete(plantId);
    } else {
      setFavouriteClass('favouriteButtonLiked');
      favouriteAdd(plantId);
    }
  };

  useEffect(() => {
    if (favourite) {
      setFavouriteClass(favourite.includes(id) ? 'favouriteButtonLiked' : 'favouriteButton');
    }
  }, [favourite]);

  return (
    <div className="link">
      <Link className="link" to={`/plant/${id}`}>
        <div className="itemHolder">
          <img className="itemImage" src={img} alt="" />

          <div className="itemInfo">
            <div className="itemName">{name}</div>
            <div className="itemPrice">${price}</div>
          </div>
        </div>
      </Link>
      <div className="favouriteWrapper" onClick={() => favouriteHandler(id)}>
        <Favourite className={favouriteClass} />
      </div>
    </div>
  );
});

export default Item;
