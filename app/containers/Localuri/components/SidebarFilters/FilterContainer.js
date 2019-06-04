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
    const data = (!isEmpty(this.props.filteredData) && this.props.filteredData) || this.props.data;
    const newFilter = e.target.name;
    if (e.target.checked) {
      const filteredData = data.filter((place) => [newFilter, ...this.props.filters[type[this.props.type]]].includes(place[type[this.props.type]]));
      this.props.onSelectFilter(assign(this.props.filters, { [type[this.props.type]]: [newFilter, ...this.props.filters[type[this.props.type]]] }), filteredData);
    } else {
      const removedFilter = this.props.filters[type[this.props.type]].filter((filter) => filter !== newFilter);
      const filteredData = this.props.data.filter((place) => removedFilter.includes(place[type[this.props.type]]));
      this.props.onSelectFilter(assign(this.props.filters, { [type[this.props.type]]: this.props.filters[type[this.props.type]].filter((filter) => filter !== newFilter) }), filteredData);
    }
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
