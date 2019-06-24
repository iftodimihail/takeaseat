/*
 * Memorial Candles Saga
 */
import { put, takeLatest, call, select } from 'redux-saga/effects';
import isEmpty from 'lodash/isEmpty';
import axios from '../../../../axios';
import {
  fetchAllPlacesSuccess, fetchAllPlacesError, addFilteredData
} from './actions';
import { FETCH_ALL_PLACES_START } from './constants';
import config from '../../../../config';

/**
 * Fetch places start - api call
 * @function fetchAllPlacesStart
 */
export function* fetchAllPlacesStartSaga({ filters }) {
  try {
    const filteredData = yield select((state) => state.get('places').get('filteredData').toJS());
    const response = yield call(() => axios.get('/localuri', { params: { ...filters } }));
    yield put(fetchAllPlacesSuccess(response.data.data));
    // if (isEmpty(filters)) {
    // } else {
    //   const newData = !isEmpty(filteredData) ? filteredData.filter((place) => response.data.data.includes(place)) : response.data.data;
    //   console.log(newData);
    //   yield put(addFilteredData(newData));
    // }
  } catch (error) {
    try {
      yield put(fetchAllPlacesError(error.response.data.errors));
    } catch (internal) {
      yield put(fetchAllPlacesError(config.generalError));
    }
  }
}

/**
 * Places saga
 * @function fetchMemorialSaga
 */
export default function* fetchMemorialCandlesSaga() {
  yield takeLatest(FETCH_ALL_PLACES_START, fetchAllPlacesStartSaga);
}
