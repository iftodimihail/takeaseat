import {
  FETCH_PENDING_RESERVATIONS_START,
  FETCH_PENDING_RESERVATIONS_SUCCESS,
  FETCH_PENDING_RESERVATIONS_ERROR,
  APPROVE_RESERVATION_START,
  APPROVE_RESERVATION_SUCCESS,
  APPROVE_RESERVATION_ERROR
} from './constants';

/**
 * @function selectReservationDate
 * @param date
 * @returns {{type: string, date: *}}
 */
export function fetchPendingReservationsStart(date) {
  return {
    type: FETCH_PENDING_RESERVATIONS_START,
    date
  };
}
