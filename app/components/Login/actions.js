/*
 * Login Actions
 */

import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from './constants';

/**
 * Login start
 * @function loginStart
 * @param  {string} email
 * @param  {string} password
 * @param  {string} userType
 * @return {object} type, email and password
 */
export function loginStart({ email, password, userType }) {
  return {
    type: LOGIN_START,
    email,
    password,
    userType
  };
}

/**
 * Login success
 * @function loginSuccess
 * @param  {object} user
 * @param  {string} token
 * @param  {string} userType
 * @param  {string} redirect (default: empty string)
 * @return {object} type, user, token and redirect
 */
export function loginSuccess(user, token, userType, redirect = '') {
  return {
    type: LOGIN_SUCCESS,
    user,
    token,
    userType,
    redirect
  };
}

/**
 * Login error
 * @function loginError
 * @param  {object} error
 * @return {object} type and error
 */
export function loginError(error) {
  return {
    type: LOGIN_ERROR,
    error
  };
}
