import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import resultOptionReducer from './search/reducers';
import moviesReducer from './fetchData/reducers';

export default combineReducers({
  routing: routerReducer,
  moviesReducer,
  resultOptionReducer,
});
