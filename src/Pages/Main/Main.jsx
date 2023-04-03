import React, { useState } from 'react';

import './Main.scss';

import SortBar from '../../components/SortBar/SortBar.jsx';
import Item from '../../components/Item/Item';
import leftPalm from '../../images/leftPalm.png';
import rightPalm from '../../images/rightPalm.png';
import { useEffect } from 'react';
import { fetchPlants } from '../../http/plantsAPI';

const Main = () => {
  const [plants, setPlants] = useState();

  useEffect(() => {
    fetchPlants().then((data) => setPlants(data.rows));
  }, []);

  console.log(plants);

  return (
    <>
      <img src={leftPalm} alt="" className="leftPalm" />
      <img src={rightPalm} alt="" className="rightPalm" />
      <div className="mainWrapper">
        <SortBar />
        <div className="wrapper">{plants ? plants.map((obj) => <Item key={obj.id}  {...obj}/>) : <></>}</div>
      </div>
      
    </>
  );
};

export default Main;
