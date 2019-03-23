/*
 * App saga
 */

import { select, put, takeLatest, call } from 'redux-saga/effects';
import axios from '../../axios';
import { logoutSuccess, logoutError } from './actions';
import config from '../../config';
import { LOGOUT_START } from './constants';
import { removeAuthDataLocalStorage } from '../../containers/App/saga';
import { removeAuthData } from '../../containers/App/actions';

/**
 * Saga logout start
 * @function logoutStart
 */
export function* logoutStart() {
  const userType = yield select((data) => data.get('global').get('userType'));
  try {
    yield call(() => axios.post(`${userType}/logout`));
    removeAuthDataLocalStorage();
    yield put(logoutSuccess());
    yield put(removeAuthData());
  } catch (error) {
    try {
      yield put(logoutError(error.response.data.errors));
    } catch (internal) {
      yield put(logoutError(config.generalError));
    }
  }
}

/**
 * Saga app
 * @function appSaga
 */
export default function* appSaga() {
  yield takeLatest(LOGOUT_START, logoutStart);
}
