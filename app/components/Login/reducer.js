/*
 * Login Reducer
 */

import { fromJS } from 'immutable';
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_ERROR } from './constants';
import initialState from './initialState';

/**
 * Login reducer
 * @function loginReducer
 * @param {Object} state
 * @param {Object} action
 * @returns {Object} new state
 */
function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_START:
      return state
        .set('error', null)
        .set('loading', true);
    case LOGIN_SUCCESS:
      return state
        .set('error', null)
        .set('loading', false);
    case LOGIN_ERROR:
      return state
        .set('error', fromJS(action.error))
        .set('loading', false);
    default:
      return state;
  }
}

export default loginReducer;
