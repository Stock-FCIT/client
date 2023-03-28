import React from 'react';
import './SortBar.scss';
import ReakitDropdown from '../Dropdown/Dropdown';

const SortBar = () => {
  const category = [
    'All',
    'Easy care',
    'Pet friendly',
    'Bright light',
    'Rare specimens',
    'Air purifying',
  ];

  const sort = ['Popular', 'New'];

  return (
    <div className="main-bar">
      <input
        className="search-bar"
        type="text"
        name="search"
        placeholder="Search products by name"
      />

      <div className="category-bar">
        <ReakitDropdown title="Choose category" items={category} type="category" />
      </div>

      <div className="sort-bar">
        <ReakitDropdown title="Sorting" items={sort} />
      </div>
    </div>
  );
};

export default SortBar;
