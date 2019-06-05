import {
  FETCH_ALL_PLACES_START,
  FETCH_ALL_PLACES_SUCCESS,
  FETCH_ALL_PLACES_ERROR,
  SELECT_FILTER
} from './constants';

export function fetchAllPlacesStart(filters) {
  return {
    type: FETCH_ALL_PLACES_START,
    filters
  };
}

export function fetchAllPlacesSuccess(data) {
  return {
    type: FETCH_ALL_PLACES_SUCCESS,
    data
  };
}

export function fetchAllPlacesError(error) {
  return {
    type: FETCH_ALL_PLACES_ERROR,
    error
  };
}

export function selectFilter(newFilter, filteredData) {
  return {
    type: SELECT_FILTER,
    newFilter,
    filteredData
  };
}
