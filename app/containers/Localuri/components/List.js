import React from 'react';
import isEmpty from 'lodash/isEmpty';
import ListItem from './ListItem';
/**
 * List of pubs and restaurants
 */
class List extends React.Component {
  render() {
    const { filteredData, data } = this.props;
    const vector = (!isEmpty(filteredData) && [...filteredData]) || [...data];
    return (
      !isEmpty(data) ?
        <div style={{ width: '100%' }}>
          {vector.map((item) => (
            <ListItem
              key={item.id}
              {...item}
            />
          ))}
        </div>
        : null
    );
  }
}

export default List;
