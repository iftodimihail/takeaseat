import React from 'react';
import { Button } from 'antd';
import randomString from 'randomstring';
import range from 'lodash/range';

/**
 * NumberOfPersons component
 */
class NumberOfPersons extends React.Component {
  onSelectPerson = (val) => () => {
    this.props.nextTab('3');
    this.props.onSelectPersons(val + 1);
  };

  render() {
    return (
      <div className="persons-tab-container">
        {range(12).map((val) => <Button onClick={this.onSelectPerson(val)} key={randomString.generate(7)}>{val + 1}</Button>)}
      </div>
    );
  }
}

export default NumberOfPersons;
