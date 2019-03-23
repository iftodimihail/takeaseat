/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  CHECK_TOKEN_START,
  CHECK_TOKEN_SUCCESS,
  CHECK_TOKEN_ERROR,
  NOT_AUTHENTICATED,
  REMOVE_AUTH_DATA
} from './constants';

/**
 * Check token start
 * @function checkTokenStart
 * @return {object} type
 */
export function checkTokenStart() {
  return {
    type: CHECK_TOKEN_START
  };
}


/**
 * Check token success
 * @function checkTokenSuccess
 * @param  {object} user
 * @param  {string} token
 * @param  {string} userType
 * @return {object} type
 */
export function checkTokenSuccess(user, token, userType) {
  return {
    type: CHECK_TOKEN_SUCCESS,
    user,
    token,
    userType
  };
}

/**
 * Check token error
 * @function checkTokenError
 * @param  {object} error
 * @return {object} type and error
 */
export function checkTokenError(error) {
  return {
    type: CHECK_TOKEN_ERROR,
    error
  };
}

/**
 * Not authenticated
 * @function notAuthenticated
 * @return {object} type
 */
export function notAuthenticated() {
  return {
    type: NOT_AUTHENTICATED
  };
}

/**
 * Remove auth data from state
 * @function removeAuthData
 * @return {object} type
 */
export function removeAuthData() {
  return {
    type: REMOVE_AUTH_DATA
  };
}
