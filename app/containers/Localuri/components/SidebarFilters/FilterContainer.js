import React from 'react';
import { Checkbox } from 'antd';
import classNames from 'classnames';

/**
 * FilterContainer component
 */
class FilterContainer extends React.Component {
  state = {};
  onChange = (e) => this.setState({ [e.target.name]: e.target.checked });

  render() {
    return (
      <div className="filter-container">
        <p className="filter-title">{this.props.title}</p>
        <div className="filter-items">
          {this.props.filters.map((filter) => (
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
