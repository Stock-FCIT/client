import React, { useState, useEffect } from 'react';
import './SortBar.scss';
import ReakitDropdown from '../Dropdown/DropdownCategory';
import { fetchCategory } from '../../http/plantsAPI';
import DropdownCategory from '../Dropdown/DropdownCategory';
import DropdownSort from '../Dropdown/DropdownSort';

const SortBar = ({setCategoryId, setSortId}) => {
  const [category, setCategory] = useState();

  useEffect(() => {
    fetchCategory().then((data) => setCategory(data));
  }, []);

  const sort = ['Popular', 'New'];



  return (
    <div className="main-bar">
      <input
        className="search-bar"
        type="text"
        name="search"
        placeholder="Search products by name"
        autoComplete="off"
      />
      <div className="helper">
        <div className="category-bar">
          <DropdownCategory
            title="Choose category"
            items={category}
            setCategoryId={setCategoryId}
          />
        </div>

        <div className="sort-bar">
          <DropdownSort title="Sorting" items={sort} setSortId={setSortId} />
        </div>
      </div>
    </div>
  );
};

export default SortBar;
