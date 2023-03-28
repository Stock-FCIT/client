import React, { useEffect, useState, useRef } from 'react';

import './Dropdown.scss';

const Dropdown = ({ title, items }) => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  const [itemList, setItemList] = useState(items);

  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsDropDownVisible(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  return (
    <div className="custom-dropdown">
      <div
        ref={menuRef}
        className={'custom-dropdown-selection ' + (isDropDownVisible ? 'visible' : '')}
        onClick={(e) => {
          setIsDropDownVisible(!isDropDownVisible);
        }}>
        {selectedItemIndex != null ? itemList[selectedItemIndex].name : `${title}`}
      </div>

      <div className={'items-holder ' + (isDropDownVisible ? 'visible' : '')}>
        {itemList.map((item, index) => (
          <div
            key={item.value}
            className="dropdown-item"
            onClick={(e) => {
              setSelectedItemIndex(index);
              setIsDropDownVisible(false);
            }}>
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
