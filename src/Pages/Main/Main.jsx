import React from 'react';

import './Main.scss';

import SortBar from '../../components/SortBar/SortBar.jsx';
import Item from '../../components/Item/Item';
import leftPalm from '../../images/leftPalm.png';
import rightPalm from '../../images/rightPalm.png';

const Main = () => {
  return (
    <>
      <img src={leftPalm} alt="" className="leftPalm" />
      <img src={rightPalm} alt="" className="rightPalm" />
      <div className="mainWrapper">
        <SortBar />
        <div className="wrapper">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
      apper
    </>
  );
};

export default Main;
