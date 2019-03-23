import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect, Route } from 'react-router-dom';
import Preloader from '../../Preloader/components/Preloader';

/**
 * Unauthenticated route
 * @function UnauthenticatedRoute
 * @param  {object} props: { token, loading, redirect }
 * @description This route component will be loaded if the user is not logged
 */
const UnauthenticatedRoute = (props) => {
  if (props.loading) {
    return <Preloader />;
  }

  return !props.token ? <Route {...props} /> : <Redirect to={props.redirect || '/'} />;
};

const mapStateToProps = (state) => {
  const tokenState = state.get('global').get('checkToken');
  return {
    token: tokenState.get('valid'),
    loading: tokenState.get('loading')
  };
};

const withConnect = connect(mapStateToProps, null);

export default compose(withConnect)(UnauthenticatedRoute);
