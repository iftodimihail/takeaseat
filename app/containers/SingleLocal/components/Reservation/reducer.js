import {
  SELECT_RESERVATION_DATE,
  SELECT_NR_OF_PERSONS,
  SELECT_RESERVATION_HOUR,
  MAKE_RESERVATION_START,
  MAKE_RESERVATION_SUCCESS,
  MAKE_RESERVATION_ERROR
} from './constants';
import initialState from './initialState';

/**
 * @function reservationReducer
 * @param state
 * @param action
 * @returns {*}
 */
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
    case MAKE_RESERVATION_START:
      return state
        .set('loading', true);
    case MAKE_RESERVATION_SUCCESS:
      return initialState;
    case MAKE_RESERVATION_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
 }
}

export default reservationReducer;
