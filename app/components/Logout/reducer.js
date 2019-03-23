/*
 * Logout Reducer
 */

import { fromJS } from 'immutable';
import initialState from './initialState';
import { LOGOUT_START, LOGOUT_SUCCESS, LOGOUT_ERROR } from './constants';

/**
 * Logout reducer
 * @function logoutReducer
 * @param {Object} state
 * @param {Object} action
 * @returns {Object} new state
 */
function logoutReducer(state = initialState, action) {
  switch (action.type) {
    case LOGOUT_START:
      return state
        .set('error', null)
        .set('loading', true);
    case LOGOUT_SUCCESS:
      return state
        .set('error', null)
        .set('loading', false);
    case LOGOUT_ERROR:
      return state
        .set('error', fromJS(action.error))
        .set('loading', false);
    default:
      return state;
  }
}

export default logoutReducer;
