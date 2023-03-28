import React, { useState } from 'react';
import { useMenuState, Menu, MenuItem, MenuButton } from 'reakit/Menu';

import styles from './ReakitDropdown.module.scss';

const ReakitDropdown = ({ title, items }) => {
  const menu = useMenuState({visible: false});

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
      <MenuButton className={styles.dropdownSelection} {...menu}>
        {selectedItemIndex != null ? items[selectedItemIndex] : `${title}`}
      </MenuButton>
      <Menu  className={styles.itemsHolder} {...menu} aria-label={selectedItemIndex}>
        {items.map((name, id) => (
          <MenuItem
            className={styles.dropdownItem}
            {...menu}
            key={id}
            id={name}
            onClick={(e) => {
              setSelectedItemIndex(id);
            }}>
            {children}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default ReakitDropdown;
