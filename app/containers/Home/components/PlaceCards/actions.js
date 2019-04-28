import {
  FETCH_ALL_PLACES_START,
  FETCH_ALL_PLACES_SUCCESS,
  FETCH_ALL_PLACES_ERROR
} from './constants';

export function fetchAllPlacesStart() {
  return {
    type: FETCH_ALL_PLACES_START
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
