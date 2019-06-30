import { put, takeLatest, call } from 'redux-saga/effects';
import axios from '../../../../axios';
import {
  makeReservationSuccess,
  makeReservationError
} from './actions';
import { MAKE_RESERVATION_START } from './constants';
import config from '../../../../config';

/**
 * Make reservation - api call
 * @function makeReservationStartSaga
 */
export function* makeReservationStartSaga({ data, form, onSuccess }) {
  try {
    const reservationInformation = { ...data, ...form.getFieldsValue() };
    yield call(() => axios.post('/reservations', reservationInformation));
    yield put(makeReservationSuccess());
    form.resetFields();
    onSuccess();
  } catch (error) {
    try {
      yield put(makeReservationError(error.response.data.errors));
    } catch (internal) {
      yield put(makeReservationError(config.generalError));
    }
  }
}

/**
 * Reservation saga
 * @function reservationSaga
 */
export default function* reservationSaga() {
  yield takeLatest(MAKE_RESERVATION_START, makeReservationStartSaga);
}
