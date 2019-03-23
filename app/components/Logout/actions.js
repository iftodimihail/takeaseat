/*
 * Logout Actions
 */

import {
  LOGOUT_START,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR
} from './constants';

/**
 * Logout start
 * @function logoutStart
 * @return {object} type
 */
export function logoutStart() {
  return {
    type: LOGOUT_START
  };
}


/**
 * Logout success
 * @function logoutSuccess
 * @return {object} type
 */
export function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS
  };
}

/**
 * Logout error
 * @function logoutError
 * @param  {object} error
 * @return {object} type and error
 */
export function logoutError(error) {
  return {
    type: LOGOUT_ERROR,
    error
  };
}
