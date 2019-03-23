import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect, Route } from 'react-router-dom';
import Preloader from '../../Preloader/components/Preloader';

/**
 * Protected route
 * @function ProtectedRoute
 * @param  {object} props: { type, userType, loading, token, redirect }
 * @description This route component will be loaded if the user is logged and the user type and protected type are the same
 */
const ProtectedRoute = (props) => {
  const checkType = props.type ? props.type === props.userType : false;

  if (props.loading) {
    return <Preloader />;
  }

  return (props.token && checkType) ? <Route {...props} /> : <Redirect to={props.redirect || '/'} />;
};

const mapStateToProps = (state) => {
  const tokenState = state.get('global').get('checkToken');
  return {
    token: tokenState.get('valid'),
    loading: tokenState.get('loading'),
    userType: state.get('global').get('userType')
  };
};

const withConnect = connect(mapStateToProps, null);

export default compose(withConnect)(ProtectedRoute);
