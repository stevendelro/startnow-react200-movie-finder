import { combineReducers } from 'redux';
import DetailReducer from './reducers/DetailReducer';
import ListReducer from './reducers/ListReducer';

const rootReducer = combineReducers({
  list: ListReducer,
  detail: DetailReducer
});

export default rootReducer;
