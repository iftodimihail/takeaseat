import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Transition from 'react-transition-group/Transition';
import Preloader from './Preloader';

/**
 * Global preloader
 * @function GlobalPreloader
 * @param  {object} props: { loading }
 * @description This component will be shown when application is loading
 */
const GlobalPreloader = (props) => (
  <Transition in={props.loading} enter={false} timeout={300} mountOnEnter unmountOnExit>
    {(state) => (
      <div className={`global-preloader ${state}`}>
        <Preloader />
      </div>
    )}
  </Transition>
);

const mapStateToProps = (state) => ({
  loading: state.get('global').get('checkToken').get('loading')
});

const withConnect = connect(mapStateToProps, null);

export default compose(withConnect)(GlobalPreloader);
