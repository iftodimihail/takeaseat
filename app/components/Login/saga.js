/*
 * Login saga
 */

import { put, takeLatest, call } from 'redux-saga/effects';
import store from 'store';
import axios from '../../axios';
import { loginSuccess, loginError } from './actions';
import config from '../../config';
import { LOGIN_START } from './constants';
import { checkTokenSuccess } from '../../containers/App/actions';

/**
 * Login start - api call
 * @function loginStart
 * @param {Object} action
 */
export function* loginStart(action) {
  const { email, password, userType } = action;

  try {
    const response = yield call(() => axios.post(`${userType}/login`, { email, password, user_type: userType }));
    const token = response.data.data.access_token;
    const { user } = response.data.data;

    /* Send user and token to localStorage */
    store.set(config.storeKey.token, token);
    store.set(config.storeKey.user, user);
    store.set(config.storeKey.userType, userType);

    /* Set axios token */
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;

    yield put(loginSuccess(user, token, userType));
    yield put(checkTokenSuccess(user, token, userType));
  } catch (error) {
    try {
      yield put(loginError(error.response.data.errors));
    } catch (internal) {
      yield put(loginError(config.generalError));
    }
  }
}

/**
 * Login saga
 * @function LoginSaga
 */
export default function* LoginSaga() {
  yield takeLatest(LOGIN_START, loginStart);
}
