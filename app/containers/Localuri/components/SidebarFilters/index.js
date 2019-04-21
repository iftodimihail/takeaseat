import React from 'react';
import FilterContainer from './FilterContainer';

/**
 * SidebarFilters component
 */
class SidebarFilters extends React.Component {
  render() {
    return (
      <div style={{ minWidth: '250px' }} className="sidebar">
        <FilterContainer type="restaurant-types" title="Tip Local" />
        <FilterContainer type="kitchen-types" title="Bucătărie" />
        <FilterContainer type="price-types" title="Preț" />
        <FilterContainer type="rating-types" title="Scor" />
      </div>
    );
  }
}

export default SidebarFilters;
