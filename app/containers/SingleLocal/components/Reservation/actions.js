import {
  SELECT_RESERVATION_DATE,
  SELECT_NR_OF_PERSONS,
  SELECT_RESERVATION_HOUR
} from './constants';

export function selectReservationDate(date) {
  return {
    type: SELECT_RESERVATION_DATE,
    date
  };
}

export function selectNrOfPersons(persons) {
  return {
    type: SELECT_NR_OF_PERSONS,
    persons
  };
}

export function selectReservationHour(hour) {
  return {
    type: SELECT_RESERVATION_HOUR,
    hour
  };
}
