/*
 * Forgot password saga
 */

import { put, call, takeLatest } from 'redux-saga/effects';
import axios from '../../axios';
import { forgotPasswordSuccess, forgotPasswordError } from './actions';
import config from '../../config';
import { FORGOT_PASSWORD_START } from './constants';

/**
 * Forgot password start - api call
 * @function forgotPasswordStart
 */
export function* forgotPasswordStart({ email, userType }) {
  try {
    yield call(() => axios.get(`${userType}/forgot-password`, {
      email,
      userType
    }));
    yield put(forgotPasswordSuccess());
  } catch (error) {
    try {
      yield put(forgotPasswordError(error));
    } catch (internal) {
      yield put(forgotPasswordError(config.generalError));
    }
  }
}

/**
 * Forgot password saga
 * @function forgotPasswordSaga
 */
export default function* forgotPasswordSaga() {
  yield takeLatest(FORGOT_PASSWORD_START, forgotPasswordStart);
}
