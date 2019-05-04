import React from 'react';
import { Button } from 'antd';
import randomString from 'randomstring';
import range from 'lodash/range';
import axios from '../../../../axios';

/**
 * NumberOfPersons component
 */
class NumberOfPersons extends React.Component {
  render() {
    return (
      <div className="persons-tab-container">
        {range(12).map((val) => <Button onClick={this.props.onSelectPerson(val)} key={randomString.generate(7)}>{val + 1}</Button>)}
      </div>
    );
  }
}

export default NumberOfPersons;
