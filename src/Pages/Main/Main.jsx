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

  const { user } = useContext(Context);

  useEffect(() => {
    fetchPlants().then((data) => setPlants(data.rows));
    if (user.isAuth) {
      getFavouritePlants().then((data) => setFavouritePlantsId(data.map((item) => item.plantId)));
    }
  }, [user.isAuth]);

  return (
    <>
      <div className="mainWrapper">
        <SortBar />
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
