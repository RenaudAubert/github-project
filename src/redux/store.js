import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import repoReducer from './reducers';

export default createStore(
  repoReducer,
  applyMiddleware(thunk)
);
