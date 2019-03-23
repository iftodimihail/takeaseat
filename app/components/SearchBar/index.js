import React from 'react';
import { Input } from 'antd';

const SearchBar = (props) => (
  <div className="search-bar-container">
    <Input.Search
      className="search-bar"
      onSearch={props.onSearch}
      enterButton
      size="large"
      placeholder="Caută după numele localului"
    />
  </div>
);

export default SearchBar;
