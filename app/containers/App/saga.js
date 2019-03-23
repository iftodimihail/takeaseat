/*
 * App saga
 */

import { put, call, takeLatest } from 'redux-saga/effects';
import store from 'store';
import axios from '../../axios';
import { checkTokenStart, checkTokenSuccess, checkTokenError, notAuthenticated, removeAuthData } from './actions';
import config from '../../config';
import { CHECK_TOKEN_START } from './constants';

export const removeAuthDataLocalStorage = () => {
  /* Remove data from localStorage */
  store.remove(config.storeKey.token);
  store.remove(config.storeKey.userType);
  store.remove(config.storeKey.user);

  /* Remove axios token */
  delete axios.defaults.headers.common.Authorization;
};

/**
 * Check token start - api call
 * @function checkTokenStart
 */
export function* checkTokenStartSaga() {
  const token = store.get(config.storeKey.token);
  const userType = store.get(config.storeKey.userType);

  if (token && userType) {
    try {
      const response = yield call(() => axios.get(`${userType}/me`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }));
      /* Set axios token */
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;

      store.set(config.storeKey.user, response.data.data);
      yield put(checkTokenSuccess(response.data.data, token, userType));
    } catch (e) {
      removeAuthDataLocalStorage();
      yield put(checkTokenError(e));
      yield put(removeAuthData());
    }
  } else {
    yield put(notAuthenticated());
  }
}

/**
 * Saga app
 * @function appSaga
 */
export default function* appSaga() {
  yield takeLatest(CHECK_TOKEN_START, checkTokenStartSaga);

  yield put(checkTokenStart());
}
