import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './Details.scss';

import { fetchOnePlant } from '../../http/plantsAPI';

const Details = () => {
  const { id } = useParams();
  const [plant, setPlant] = useState();
  const category = [
    'All',
    'Easy care',
    'Pet friendly',
    'Bright light',
    'Rare specimens',
    'Air purifying',
  ];

  useEffect(() => {
    fetchOnePlant(id).then((data) => setPlant(data));
  }, []);

  return (
    <div>
      {plant ? (
        <div className="detailsWrapper">
          <div className="upper">
            <div className="upperLeft">
              <img className="image" src={process.env.REACT_APP_API_URL + plant.img} alt="" />
            </div>
            <div className="upperRight">
              <div className="name">{plant.name}</div>
              <div className="category">{category[plant.categoryId - 1]}</div>
              <div className="price">${plant.price}</div>
              <div className="cartButton">Add to cart</div>
              <div className="favouriteButton">Add to favourites</div>
            </div>
          </div>
          <div className="lower">
            <div className="title">Description</div>
            <div className="description">{plant.description}</div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Details;
