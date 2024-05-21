import React, { useEffect, useState } from 'react';
import { useMenuState, Menu, MenuItem, MenuButton } from 'reakit/Menu';

import styles from './Dropdown.module.scss';

import closeButton from '../../images/close.svg';
import arrow from '../../images/arrow.svg';

const DropdownCategory = ({ title, items, setCategoryId }) => {
  const menu = useMenuState({ visible: false });

  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  const children = React.useCallback(
    (itemProps) => (
      <div {...itemProps}>
        <div>{itemProps.id}</div>
      </div>
    ),
    [],
  );
  return (
    <div className={styles.dropdown}>
      <MenuButton className={styles.dropdownSelectionCategory} {...menu}>
        {selectedItemIndex != null ? items.find(obj => obj.id === selectedItemIndex).name : `${title}`}
      </MenuButton>
      {selectedItemIndex != null ? (
        <img
          className={styles.closeButton}
          src={closeButton}
          alt="Close Button"
          onClick={(e) => {
            setSelectedItemIndex(null);
            setCategoryId(null);
          }}
        />
      ) : (
        <img
          className={styles.arrow}
          src={arrow}
          alt="Arrow"
        />
      )}

      <Menu className={styles.itemsHolder} {...menu} aria-label="Preferences">
        {items &&
          items.map((item) => (
            <MenuItem
              className={styles.dropdownItem}
              {...menu}
              key={item.id}
              id={item.name}
              onClick={(e) => {
                setSelectedItemIndex(item.id);
                setCategoryId(item.id);

                menu.hide();
              }}>
              {children}
            </MenuItem>
          ))}
      </Menu>
    </div>
  );
};

export default DropdownCategory;
