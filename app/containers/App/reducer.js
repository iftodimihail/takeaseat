/*
 * App Reducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS, Map } from 'immutable';
import initialState from './initialState';
import { CHECK_TOKEN_START, CHECK_TOKEN_SUCCESS, CHECK_TOKEN_ERROR, NOT_AUTHENTICATED, REMOVE_AUTH_DATA } from './constants';

/**
 * App reducer
 * @function appReducer
 * @param {Object} state
 * @param {Object} action
 * @returns {Object} new state
 */
function appReducer(state = initialState, action) {
  switch (action.type) {
    case REMOVE_AUTH_DATA:
      return Map(state)
        .setIn(['user'], {})
        .setIn(['token'], null)
        .setIn(['userType'], null)
        .setIn(['checkToken', 'valid'], false)
        .setIn(['checkToken', 'error'], null);
    case CHECK_TOKEN_START:
      return Map(state)
        .setIn(['checkToken', 'error'], null)
        .setIn(['checkToken', 'valid'], false)
        .setIn(['checkToken', 'loading'], true);
    case CHECK_TOKEN_SUCCESS:
      return Map(state)
        .setIn(['token'], action.token)
        .setIn(['userType'], action.userType)
        .setIn(['user'], action.user)
        .setIn(['checkToken', 'error'], null)
        .setIn(['checkToken', 'valid'], true)
        .setIn(['checkToken', 'loading'], false);
    case CHECK_TOKEN_ERROR:
      return Map(state)
        .setIn(['checkToken', 'error'], fromJS(action.error))
        .setIn(['checkToken', 'valid'], false)
        .setIn(['checkToken', 'loading'], false);
    case NOT_AUTHENTICATED:
      return Map(state)
        .setIn(['checkToken', 'error'], null)
        .setIn(['checkToken', 'valid'], false)
        .setIn(['checkToken', 'loading'], false);
    default:
      return state;
  }
}

export default appReducer;
