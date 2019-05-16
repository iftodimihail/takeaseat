/*
 * Memorial Candles Saga
 */
import { put, takeLatest, call } from 'redux-saga/effects';
import axios from '../../../../axios';
import {
  makeReservationSuccess,
  makeReservationError
} from './actions';
import { MAKE_RESERVATION_START } from './constants';
import { successNotification } from '../../../../components/Notifications';
import config from '../../../../config';

/**
 * Make reservation - api call
 * @function makeReservationStartSaga
 */
export function* makeReservationStartSaga({ data, form, onSuccess }) {
  try {
    yield call(() => axios.post('/reservations', data));
    yield put(makeReservationSuccess());
    form.resetFields();
    onSuccess();
    successNotification('successReservation', 'Reservarea a fost înregistrată. Veți primi un email de confirmare încurând');
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
