import React from 'react';
import { Button } from 'antd';
import queryString from 'query-string';
import isEmpty from 'lodash/isEmpty';
import ListItem from './ListItem';
import SearchBar from '../../../components/SearchBar';
import { onSearch } from './methods';

/**
 * List of pubs and restaurants
 */
class List extends React.Component {
  render() {
    const { filteredData, data } = this.props;
    const placesList = (!isEmpty(filteredData) && [...filteredData]) || [...data];
    return (
      !isEmpty(data) ?
        <div style={{ width: '100%', display: (this.props.filterScreen && window.innerWidth < 994) && 'none' }}>
          <div className="mobile-filter">
            <Button type="primary" size="small" onClick={this.props.showFilterScreen}>Filtrează</Button>
            <SearchBar
              size="small"
              onSearch={onSearch(this.props.history)}
              defaultValue={queryString.parse(this.props.location.search).nume}
            />
          </div>
          <div className="places-list">
            {placesList.map((item) => (
              <ListItem
                key={item.id}
                {...item}
              />
            ))}
          </div>
        </div>
        : null
    );
  }
}

export default List;
