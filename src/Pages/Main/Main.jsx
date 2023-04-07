import React, { useState } from 'react';

import './Main.scss';

import SortBar from '../../components/SortBar/SortBar.jsx';
import Item from '../../components/Item/Item';

import { useEffect } from 'react';
import { fetchPlants } from '../../http/plantsAPI';

const Main = () => {
  const [plants, setPlants] = useState();

  useEffect(() => {
    fetchPlants().then((data) => setPlants(data.rows));
  }, []);

  return (
    <>
      <div className="mainWrapper">
        <SortBar />
        <div className="wrapper">
          {plants ? plants.map((obj) => <Item key={obj.id} {...obj} />) : <></>}
        </div>
      </div>
    </>
  );
};

export default Main;
