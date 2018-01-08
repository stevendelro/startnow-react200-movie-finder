import {
  FETCH_INITIAL_DATA,
  FETCH_MAIN_DATA_START,
  FETCH_MAIN_DATA_SUCCESS,
  FETCH_ERROR,
  SEARCH_INPUT
} from '../actions/ListActions';

import uuid from 'uuid';
import mapKeys from 'lodash/mapKeys';

const INITIAL_STATE = {
  pending: false,
  empty: true,
  error: null,
  searchInput: '',
  movies: []
};

export default function(state = INITIAL_STATE, action) {
  const { type, text, payload, error } = action;

  switch (type) {
    case SEARCH_INPUT:
      return {
        ...state,
        searchInput: text
      };
      break;
    case FETCH_INITIAL_DATA:
      return {
        ...state,
        pending: true,
        searchInput: ''
      };
      break;
    case FETCH_MAIN_DATA_START:
      return {
        ...state,
        empty: false
      };
      break;
    case FETCH_MAIN_DATA_SUCCESS:
      return {
        ...state,
        empty: false,
        pending: false,
        movies: payload
      };
      break;
    case FETCH_ERROR:
      return {
        ...state,
        error: error,
        pending: false
      };
      break;

    default: {
      return state;
    }
  }
}
