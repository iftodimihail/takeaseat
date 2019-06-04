import { fromJS } from 'immutable';
import {
  FETCH_ALL_PLACES_START,
  FETCH_ALL_PLACES_SUCCESS,
  FETCH_ALL_PLACES_ERROR,
  SELECT_FILTER
} from './constants';
import initialState from './initialState';

function placesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_PLACES_START:
      return state
        .set('loading', true);
    case FETCH_ALL_PLACES_SUCCESS:
      return state
        .set('loading', false)
        .set('data', fromJS(action.data));
    case FETCH_ALL_PLACES_ERROR:
      return state
        .set('error', fromJS(action.error))
        .set('loading', false);
    case SELECT_FILTER:
      return state
        .set('filteredData', fromJS(action.filteredData))
        .set('filters', fromJS(action.newFilter));
    default:
      return state;
  }
}

export default placesReducer;
