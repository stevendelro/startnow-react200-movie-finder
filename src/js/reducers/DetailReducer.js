import {
  FETCH_DETAIL_STARTED,
  FETCH_DETAIL_FULFILLED,
  FETCH_ERROR
} from '../actions/DetailActions';

const INITIAL_STATE = {
  pending: false
};

export default function(state = INITIAL_STATE, action) {
  const { type, text, payload, error } = action;

  switch (type) {
    case FETCH_DETAIL_STARTED:
      return {
        ...state,
        pending: true
      };
      break;
    case FETCH_DETAIL_FULFILLED:
      return {
        ...state,
        pending: false,
        imdbID: payload.data.imdbID,
        title: payload.data.Title,
        poster: payload.data.Poster,
        yearReleased: payload.data.Released,
        plot: payload.data.Plot,
        boxOffice: payload.data.BoxOffice,
        runtime: payload.data.Runtime,
        genre: payload.data.Genre,
        metascore: payload.data.Metascore,
        IMDBrating: payload.data.imdbRating,
        website: payload.data.Website
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
