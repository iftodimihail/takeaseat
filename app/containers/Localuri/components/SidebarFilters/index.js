import React from 'react';
import { Button } from 'antd';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import FilterContainer from './FilterContainer';
import SearchBar from '../../../../components/SearchBar';
import { onSearch } from '../methods';

/**
 * SidebarFilters component
 */
class SidebarFilters extends React.Component {
  render() {
    return (
      <div className="sidebar-filter-container" style={{ display: (!this.props.filterScreen && window.innerWidth < 994) && 'none' }}>
        <div className="results-btn">
          <Button type="primary" size="small" onClick={this.props.showPlacesScreen}>Afișează rezultatele</Button>
        </div>
        <div className="sidebar">
          <SearchBar
            onSearch={onSearch(this.props.history)}
            defaultValue={queryString.parse(this.props.location.search).nume}
            size="small"
          />
          <FilterContainer type="place-types" title="Tip Local" {...this.props} />
          <FilterContainer type="kitchen-types" title="Bucătărie" {...this.props} />
          <FilterContainer type="price-types" title="Preț" {...this.props} />
          <FilterContainer type="rating-types" title="Scor" {...this.props} />
        </div>
      </div>
    );
  }
}

export default withRouter(SidebarFilters);
