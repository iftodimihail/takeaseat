import {
  SELECT_RESERVATION_DATE,
  SELECT_NR_OF_PERSONS,
  SELECT_RESERVATION_HOUR,
  MAKE_RESERVATION_START,
  MAKE_RESERVATION_SUCCESS,
  MAKE_RESERVATION_ERROR
} from './constants';

/**
 * @function selectReservationDate
 * @param date
 * @returns {{type: string, date: *}}
 */
export function selectReservationDate(date) {
  return {
    type: SELECT_RESERVATION_DATE,
    date
  };
}

/**
 * @function selectNrOfPersons
 * @param persons
 * @returns {{type: string, persons: *}}
 */
export function selectNrOfPersons(persons) {
  return {
    type: SELECT_NR_OF_PERSONS,
    persons
  };
}

/**
 * @function selectReservationHour
 * @param hour
 * @returns {{type: string, hour: *}}
 */
export function selectReservationHour(hour) {
  return {
    type: SELECT_RESERVATION_HOUR,
    hour
  };
}

/**
 * @function makeReservationStart
 * @param data
 * @param form
 * @param onSuccess
 * @returns {{type: string, data: *, form: *}}
 */
export function makeReservationStart(data, form, onSuccess) {
  return {
    type: MAKE_RESERVATION_START,
    data,
    form,
    onSuccess
  };
}

/**
 * @function makeReservationStart
 * @returns {{type: string}}
 */
export function makeReservationSuccess() {
  return {
    type: MAKE_RESERVATION_SUCCESS
  };
}

/**
 * @function makeReservationError
 * @returns {{type: string}}
 */
export function makeReservationError(error) {
  return {
    type: MAKE_RESERVATION_ERROR,
    error
  };
}
