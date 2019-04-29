// /*
//  * Memorial Candles Saga
//  */
// import { put, takeLatest, call } from 'redux-saga/effects';
// import axios from '../../../../axios';
// import {
//   fetchAllPlacesSuccess, fetchAllPlacesError
// } from './actions';
// import { FETCH_ALL_PLACES_START } from './constants';
// import config from '../../../../config';
//
// /**
//  * Fetch places start - api call
//  * @function fetchAllPlacesStart
//  */
// export function* fetchAllPlacesStartSaga() {
//   try {
//     const response = yield call(() => axios.get('/localuri'));
//     yield put(fetchAllPlacesSuccess(response.data.data));
//   } catch (error) {
//     try {
//       yield put(fetchAllPlacesError(error.response.data.errors));
//     } catch (internal) {
//       yield put(fetchAllPlacesError(config.generalError));
//     }
//   }
// }
//
// /**
//  * Places saga
//  * @function fetchMemorialSaga
//  */
// export default function* fetchMemorialCandlesSaga() {
//   yield takeLatest(FETCH_ALL_PLACES_START, fetchAllPlacesStartSaga);
// }
