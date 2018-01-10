import axios from 'axios';
import mapKeys from 'lodash/mapKeys';

const API_KEY = '&apikey=95db710c';
const ROOT_URL = 'http://www.omdbapi.com/';

export const FETCH_INITIAL_DATA = 'FETCH_INITIAL_DATA';
export const FETCH_MAIN_DATA_START = 'FETCH_MAIN_DATA_START';
export const FETCH_MAIN_DATA_SUCCESS = 'FETCH_MAIN_DATA_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';
export const SEARCH_INPUT = 'SEARCH_INPUT';
export const DATA_LOADED = 'DATA_LOADED';

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

export const fetchData = searchTerm => {
  const url = `${ROOT_URL}?s=${searchTerm}${API_KEY}`;
  return dispatch => {
    dispatch(fetchStarted());
    axios
      .get(url)
      .then(
        response => Object.keys(mapKeys(response.data.Search, 'imdbID')),
        dispatch(fetchMainData())
      )
      .then(async movieIDs => {
        let fullDetailArray = [];
        await asyncForEach(movieIDs, async imdbID => {
          const url = `${ROOT_URL}?i=${imdbID}&plot=short${API_KEY}`;
          await axios.get(url).then(response => {
            fullDetailArray.push(response.data);
          });
        });
        dispatch(fetchMainDataSuccess(fullDetailArray));
      });
  };
};

export const newSearchTerm = text => ({
  type: SEARCH_INPUT,
  text
});
export const fetchStarted = () => ({
  type: FETCH_INITIAL_DATA
});
export const fetchError = error => ({
  type: FETCH_ERROR,
  error
});
export const fetchMainData = () => ({
  type: FETCH_MAIN_DATA_START
});

export const fetchMainDataSuccess = List => ({
  type: FETCH_MAIN_DATA_SUCCESS,
  payload: List
});
