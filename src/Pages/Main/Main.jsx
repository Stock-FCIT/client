import React, { useState, useEffect, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';

import './Main.scss';

import SortBar from '../../components/SortBar/SortBar.jsx';
import Item from '../../components/Item/Item';

import { fetchPlants } from '../../http/plantsAPI';

import { getFavouritePlants } from '../../http/favouriteAPI';

const Main = observer(() => {
  const [plants, setPlants] = useState();
  const [favouritePlantsId, setFavouritePlantsId] = useState();

  const [categoryId, setCategoryId] = useState();
  const [sortId, setSortId] = useState();

  console.log(categoryId, sortId);

  const { user } = useContext(Context);

  useEffect(() => {
    if (user.isAuth) {
      getFavouritePlants().then((data) => setFavouritePlantsId(data.map((item) => item.plantId)));
    }
  }, [user.isAuth]);

  useEffect(() => {
    fetchPlants(categoryId, sortId).then((data) => setPlants(data.rows));
  }, [categoryId, sortId]);

  return (
    <>
      <div className="mainWrapper">
        <SortBar setCategoryId={setCategoryId} setSortId={setSortId} />
        <div className="wrapper">
          {plants ? (
            plants.map((obj) => <Item key={obj.id} {...obj} favourite={favouritePlantsId} />)
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
});

export default Main;
