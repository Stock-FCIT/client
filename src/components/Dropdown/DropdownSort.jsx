import React, { useEffect, useState } from 'react';
import { useMenuState, Menu, MenuItem, MenuButton } from 'reakit/Menu';

import styles from './Dropdown.module.scss';

import closeButton from '../../images/close.svg';
import arrow from '../../images/arrow.svg';

const DropdownSort = ({ title, items, setSortId }) => {
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
      <MenuButton className={styles.dropdownSelectionSort} {...menu}>
        {selectedItemIndex != null ? selectedItemIndex : `${title}`}
      </MenuButton>
      {selectedItemIndex != null ? (
        <img
          className={styles.closeButton}
          src={closeButton}
          alt="Close Button"
          onClick={(e) => {
            setSelectedItemIndex(null);
            setSortId(undefined);
          }}
        />
      ) : (
        <img
          className={styles.arrow}
          src={arrow}
          alt="Arrow"
          onClick={(e) => setSelectedItemIndex(null)}
        />
      )}

      <Menu className={styles.itemsHolder} {...menu} aria-label="Preferences">
        {items &&
          items.map((name, id) => (
            <MenuItem
              className={styles.dropdownItem}
              {...menu}
              key={id}
              id={name}
              onClick={(e) => {
                setSelectedItemIndex(name);
                setSortId(name);
                menu.hide();
              }}>
              {children}
            </MenuItem>
          ))}
      </Menu>
    </div>
  );
};

export default DropdownSort;
