import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootStore = createStore(
  rootReducer,
  // persistedState,
  composeEnhancers(applyMiddleware(logger, thunk))
);

// rootStore.subscribe(throttle(() => {
//   saveState(rootStore.getState());
// }),1000)

export default rootStore;
