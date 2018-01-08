import axios from 'axios';
const API_KEY = '&apikey=95db710c';
const ROOT_URL = 'http://www.omdbapi.com/';

export const FETCH_DETAIL_STARTED = 'FETCH_DETAIL_STARTED';
export const FETCH_DETAIL_FULFILLED = 'FETCH_DETAIL_FULFILLED';
export const FETCH_ERROR = 'FETCH_ERROR';

export const fetchError = error => ({ type: FETCH_ERROR, error });
export const fetchDetailStarted = () => ({ type: FETCH_DETAIL_STARTED });
export const fetchFulfilled = response => ({
  type: FETCH_DETAIL_FULFILLED,
  payload: response
});

export const fetchDetailByID = imdbID => {
  const url = `${ROOT_URL}?i=${imdbID}&plot=full${API_KEY}`;
  return dispatch => {
    dispatch(fetchDetailStarted());
    axios
      .get(url)
      .then(response => {
        dispatch(fetchFulfilled(response));
      })
      .catch(error => {
        dispatch(fetchError(error));
      });
  };
};
