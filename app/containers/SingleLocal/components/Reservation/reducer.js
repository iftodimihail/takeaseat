import {
  SELECT_RESERVATION_DATE,
  SELECT_NR_OF_PERSONS,
  SELECT_RESERVATION_HOUR
} from './constants';
import initialState from './initialState';

function reservationReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_RESERVATION_DATE:
      return state
        .set('date', action.date);
    case SELECT_NR_OF_PERSONS:
      return state
        .set('persons', action.persons);
    case SELECT_RESERVATION_HOUR:
      return state
        .set('hour', action.hour);
    default:
      return state;
  }
}

export default reservationReducer;
