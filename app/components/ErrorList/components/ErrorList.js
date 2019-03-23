import React from 'react';
import Immutable from 'immutable';
import classNames from 'classnames';
import { Alert } from 'antd';
import { errorList } from '../../../utils/errors';

/**
 * Error list
 * @function ErrorList
 * @param  {object} props: { error }
 * @description This component show an error list
 */
const ErrorList = (props) => {
  const error = props.error ? Immutable.Iterable.isIterable(props.error) ? errorList(props.error.toJS()) : errorList(props.error) : null;
  return error ? (<Alert className={classNames(props.className, 'error-list')} type="error" message={error.map((err) => <div key={err}>{err}</div>)} />) : null;
};

export default ErrorList;
