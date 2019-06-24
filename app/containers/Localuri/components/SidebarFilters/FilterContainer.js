import React from 'react';
import { Checkbox } from 'antd';
import assign from 'lodash/assign';
import isEmpty from 'lodash/isEmpty';
import capitalize from 'lodash/capitalize';
import queryString from 'query-string';
import classNames from 'classnames';
import axios from '../../../../axios';

const type = {
  'place-types': 'placeType',
  'kitchen-types': 'kitchenType',
  'price-types': 'priceType',
  'rating-types': 'ratingType'
};

/**
 * FilterContainer component
 */
class FilterContainer extends React.Component {
  state = {
    [this.props.type]: []
  };

  componentDidMount() {
    axios.get(`${this.props.type}`)
      .then((res) => this.setState({ [this.props.type]: res.data.data }));

    const queryObj = queryString.parse(this.props.location.search);

    if (!isEmpty(queryObj)) {
      if (queryObj.tip === 'restaurant') {
        const filtersObj = assign(this.props.filters, { placeType: ['Restaurant'] });
        const filteredData = this.props.placesFilter(filtersObj);
        this.props.onSelectFilter(filtersObj, filteredData);
      }

      if (queryObj.tip === 'bar') {
        const filtersObj = assign(this.props.filters, { placeType: ['Bar'] });
        const filteredData = this.props.placesFilter(filtersObj);
        this.props.onSelectFilter(filtersObj, filteredData);
      }

      if (queryObj.tip === '5-stele') {
        const filtersObj = assign(this.props.filters, { ratingType: ['5 stele'] });
        const filteredData = this.props.placesFilter(filtersObj);
        this.props.onSelectFilter(filtersObj, filteredData);
      }
    }
  }

  onChange = (e) => {
    const newFilter = e.target.name;
    if (e.target.checked) {
      const filtersObj = assign(this.props.filters, { [type[this.props.type]]: [newFilter, ...this.props.filters[type[this.props.type]]] });
      let filteredData = this.props.placesFilter(filtersObj);
      if (this.props.location.search) {
        filteredData = filteredData.filter((place) => place.name.includes(queryString.parse(this.props.location.search).nume));
      }
      this.props.onSelectFilter(filtersObj, filteredData);
    } else {
      const filtersAfterRemoving = this.props.filters[type[this.props.type]].filter((filter) => filter !== newFilter);
      const filtersObj = assign(this.props.filters, { [type[this.props.type]]: filtersAfterRemoving });
      let filteredData = this.props.placesFilter(filtersObj);
      if (this.props.location.search) {
        filteredData = !isEmpty(filteredData) ?
          filteredData.filter((place) => place.name.includes(queryString.parse(this.props.location.search).nume)) :
          this.props.data.filter((place) => place.name.includes(queryString.parse(this.props.location.search).nume));
      }
      this.props.onSelectFilter(filtersObj, filteredData);
    }
  };

  render() {
    const { location } = this.props;
    return (
      <div className="filter-container">
        <p className="filter-title">{this.props.title}</p>
        <div className={this.props.ceva}>
          {this.state[this.props.type].map((filter) => (
            <div key={filter.id}>
              <Checkbox onChange={this.onChange} name={filter.name} defaultChecked={queryString.parse(location.search).tip && filter.name === capitalize(queryString.parse(location.search).tip.split('-').join(' '))}>
                <span className={classNames({ active: this.state[filter.name] })}>{filter.name}</span>
              </Checkbox>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default FilterContainer;
