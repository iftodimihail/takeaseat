import React from 'react';
import { Input } from 'antd';

/**
 * SearchBar Component
 */
class SearchBar extends React.Component {

  render() {
    return (
      <div className="search-bar-container">
        <Input.Search
          defaultValue={this.props.defaultValue || ''}
          className="search-bar"
          onSearch={this.props.onSearch}
          enterButton
          size="large"
          placeholder="Caută după numele localului"
        />
      </div>
    );
  }
}

export default SearchBar;
