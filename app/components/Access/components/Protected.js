import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import classNames from 'classnames';

/**
 * Protected
 * @function Protected
 * @param  {object} props: { type, userType, loading, token }
 * @description This component will be loaded if the user is logged and the user type and protected type are the same
 */
const Protected = (props) => {
  const checkType = props.type ? props.type === props.userType : false;

  return props.token && checkType && !props.loading ? (<div className={classNames(props.className, 'protected-component')}>{props.children}</div>) : null;
};

const mapStateToProps = (state) => {
  const tokenState = state.get('global').get('checkToken');
  return {
    token: tokenState.get('valid'),
    loading: tokenState.get('loading'),
    userType: state.get('global').get('userType')
  };
};

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(Protected);
