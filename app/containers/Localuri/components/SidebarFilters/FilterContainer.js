import React from 'react';
import { Checkbox } from 'antd';
import assign from 'lodash/assign';
import isEmpty from 'lodash/isEmpty';
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
  }


  onChange = (e) => {
    const newFilter = e.target.name;
    if (e.target.checked) {
      const filtersObj = assign(this.props.filters, { [type[this.props.type]]: [newFilter, ...this.props.filters[type[this.props.type]]] });
      const filteredData = this.placesFilter(filtersObj);
      this.props.onSelectFilter(filtersObj, filteredData);
    } else {
      const filtersAfterRemoving = this.props.filters[type[this.props.type]].filter((filter) => filter !== newFilter);
      const filtersObj = assign(this.props.filters, { [type[this.props.type]]: filtersAfterRemoving });
      const filteredData = this.placesFilter(filtersObj);
      this.props.onSelectFilter(filtersObj, filteredData);
    }
  };

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
    }

    return filteredData;
  };

  render() {
    return (
      <div className="filter-container">
        <p className="filter-title">{this.props.title}</p>
        <div className={this.props.ceva}>
          {this.state[this.props.type].map((filter) => (
            <div key={filter.id}>
              <Checkbox onChange={this.onChange} name={filter.name}>
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
