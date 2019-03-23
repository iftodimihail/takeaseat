/*
 * Forgot password Reducer
 */

import { fromJS } from 'immutable';
import initialState from './initialState';
import { FORGOT_PASSWORD_START, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_ERROR } from './constants';

/**
 * Forgot password reducer
 * @function forgotPasswordReducer
 * @param {Object} state
 * @param {Object} action
 * @returns {Object} new state
 */
function forgotPasswordReducer(state = initialState, action) {
  switch (action.type) {
    case FORGOT_PASSWORD_START:
      return state
        .set('loading', true)
        .set('error', null);
    case FORGOT_PASSWORD_SUCCESS:
      return state
        .set('loading', false)
        .set('error', null);
    case FORGOT_PASSWORD_ERROR:
      return state
        .set('loading', false)
        .set('error', fromJS(action.error));
    default:
      return state;
  }
}

export default forgotPasswordReducer;
