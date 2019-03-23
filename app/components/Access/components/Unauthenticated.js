import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import classNames from 'classnames';

/**
 * Unauthenticated
 * @function Unauthenticated
 * @param  {object} props: { token, loading }
 * @description This component will be loaded if the user is not logged
 */
const Unauthenticated = (props) => ((!props.token && !props.loading) ? (<div className={classNames(props.className, 'unauthenticated-component')}>{props.children}</div>) : null);

const mapStateToProps = (state) => {
  const tokenState = state.get('global').get('checkToken');
  return {
    token: tokenState.get('valid'),
    loading: tokenState.get('loading')
  };
};

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(Unauthenticated);
