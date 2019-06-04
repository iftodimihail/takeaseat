import React from 'react';
import FilterContainer from './FilterContainer';

/**
 * SidebarFilters component
 */
class SidebarFilters extends React.Component {
  render() {
    return (
      <div style={{ minWidth: '250px' }} className="sidebar">
        <FilterContainer type="place-types" title="Tip Local" {...this.props} />
        <FilterContainer type="kitchen-types" title="Bucătărie" {...this.props} />
        <FilterContainer type="price-types" title="Preț" {...this.props} />
        <FilterContainer type="rating-types" title="Scor" {...this.props} />
      </div>
    );
  }
}

export default SidebarFilters;
