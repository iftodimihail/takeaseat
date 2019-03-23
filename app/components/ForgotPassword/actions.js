/*
 * Forgot Password Actions
 */

import {
  FORGOT_PASSWORD_START,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_ERROR
} from './constants';

/**
 * Forgot Password start
 * @function forgotPasswordStart
 * @param  {string} email
 * @param  {string} userType
 * @return {object} type, email, userType
 */
export function forgotPasswordStart(email, userType) {
  return {
    type: FORGOT_PASSWORD_START,
    email,
    userType
  };
}

/**
 * Forgot Password success
 * @function forgotPasswordSuccess
 * @return {object} type
 */
export function forgotPasswordSuccess() {
  return {
    type: FORGOT_PASSWORD_SUCCESS
  };
}

/**
 * Forgot Password error
 * @function forgotPasswordError
 * @param  {object} error
 * @return {object} type and error
 */
export function forgotPasswordError(error) {
  return {
    type: FORGOT_PASSWORD_ERROR,
    error
  };
}
