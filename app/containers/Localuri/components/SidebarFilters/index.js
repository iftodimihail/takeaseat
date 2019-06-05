import React from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import FilterContainer from './FilterContainer';
import SearchBar from '../../../../components/SearchBar';

/**
 * SidebarFilters component
 */
class SidebarFilters extends React.Component {
  onSearch = (value) => this.props.history.push(`/localuri?nume=${value}`);

  render() {
    return (
      <div style={{ minWidth: '250px' }} className="sidebar">
        <SearchBar onSearch={this.onSearch} defaultValue={queryString.parse(this.props.location.search).nume} />
        <FilterContainer type="place-types" title="Tip Local" {...this.props} />
        <FilterContainer type="kitchen-types" title="Bucătărie" {...this.props} />
        <FilterContainer type="price-types" title="Preț" {...this.props} />
        <FilterContainer type="rating-types" title="Scor" {...this.props} />
      </div>
    );
  }
}

export default withRouter(SidebarFilters);
