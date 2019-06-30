import React from 'react';
import { Button } from 'antd';
import isEmpty from 'lodash/isEmpty';
import isNaN from 'lodash/isNaN';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import FilterContainer from './FilterContainer';
import SearchBar from '../../../../components/SearchBar';
import { onSearch } from '../methods';
import { evalRating } from '../../../../utils/common';

/**
 * SidebarFilters component
 */
class SidebarFilters extends React.Component {
  componentDidMount() {
    const {
      location, data, onAddFilteredData
    } = this.props;

    if (!isEmpty(data)) {
      if (location.search && queryString.parse(location.search).nume) {
        const filteredData = data.filter((place) => place.name.toLowerCase().includes(queryString.parse(location.search).nume.toLowerCase()));
        onAddFilteredData(filteredData);
      }
    }
  }

  componentDidUpdate(prevProps) {
    const {
      location, data, filters, onAddFilteredData
    } = this.props;

    if (prevProps.location.search !== location.search) {
      const filteredData = this.placesFilter(filters);
      const searchValue = location.search && queryString.parse(location.search).nume;

      if (searchValue) {
        const newData = !isEmpty(filteredData) ?
          filteredData.filter((place) => place.name.toLowerCase().includes(searchValue.toLowerCase())) :
          data.filter((place) => place.name.toLowerCase().includes(searchValue.toLowerCase()));
        onAddFilteredData(newData);
      } else {
        onAddFilteredData(filteredData);
      }
    }
  }

  placesFilter = (filters) => {
    const { data } = this.props;
    let filteredData = [];

    if (!isEmpty(data)) {
      if (!isEmpty(filters.placeType)) {
        filteredData = data.filter((place) => filters.placeType.includes(place.placeType));
      }

      if (!isEmpty(filters.kitchenType)) {
        if (!isEmpty(filteredData)) {
          filteredData = filteredData.filter((place) => filters.kitchenType.includes(place.kitchenType));
        } else {
          filteredData = data.filter((place) => filters.kitchenType.includes(place.kitchenType));
        }
      }

      if (!isEmpty(filters.priceType)) {
        if (!isEmpty(filteredData)) {
          filteredData = filteredData.filter((place) => filters.priceType.includes(place.priceType));
        } else {
          filteredData = data.filter((place) => filters.priceType.includes(place.priceType));
        }
      }

      if (!isEmpty(filters.ratingType)) {
        const ratings = filters.ratingType.map((rating) => {
          const ratingNumber = parseInt(rating.split('')[0], 10);
          return !isNaN(ratingNumber) ? ratingNumber : 0;
        });
        if (!isEmpty(filteredData)) {
          filteredData = filteredData.filter((place) => ratings.includes(Math.ceil(evalRating(place.rating, place.totalReviews))));
        } else {
          filteredData = data.filter((place) => ratings.includes(Math.ceil(evalRating(place.rating, place.totalReviews))));
        }
      }
    }

    return filteredData;
  };

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
          <FilterContainer type="place-types" title="Tip Local" {...this.props} placesFilter={this.placesFilter} />
          <FilterContainer type="kitchen-types" title="Bucătărie" {...this.props} placesFilter={this.placesFilter} />
          <FilterContainer type="price-types" title="Preț" {...this.props} placesFilter={this.placesFilter} />
          <FilterContainer type="rating-types" title="Scor" {...this.props} placesFilter={this.placesFilter} />
        </div>
      </div>
    );
  }
}

export default withRouter(SidebarFilters);
