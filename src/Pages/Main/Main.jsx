import React from 'react';

import './Main.scss';

import SortBar from '../../components/SortBar/SortBar.jsx';
import leftPalm from '../../images/leftPalm.png';
import rightPalm from '../../images/rightPalm.png';

const Main = () => {
  return (
    <>
      <img src={leftPalm} alt="" className="leftPalm" />
      <img src={rightPalm} alt="" className="rightPalm" />
      <SortBar />
      <div className="wrapper">
        {/* <img className='leftPalm' src={leftPalm} alt="leftPalm" />
        <img className='rightPalm' src={rightPalm} alt="rightPalm" /> */}
        <div className="item-holder">
          <img src="" alt="" />
        </div>
      </div>
    </>
  );
};

export default Main;
