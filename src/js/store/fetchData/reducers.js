import {
  ADD_MOVIES_TO_STATE, CLEAR_MOVIE,
  FETCH_MOVIES_ERROR,
  FETCH_MOVIES_PENDING,
  GET_MOVIE_DETAILS,
  GET_MOVIES_LIST,
} from './actions';
import { CLEAR_STATE } from '../actions';
import { CHANGE_GENRES } from '../search/actions';
import 'cross-fetch/polyfill';


const defaultState = {
  pending: false,
  error: null,
  movies: [],
  movieDetails: {},
  limit: 20,
  offset: 0,
  total: 0,
};

const moviesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_MOVIES_LIST:
      return {
        ...state,
        movies: action.movies.data,
        offset: action.movies.offset,
        pending: false,
        total: action.movies.total,
      };
    case GET_MOVIE_DETAILS:
      return {
        ...state,
        movieDetails: action.movieDetails,
        pending: false,
      };
    case ADD_MOVIES_TO_STATE:
      return {
        ...state,
        // movies : Array.from(new Set(state.movies.concat(action.movies.data).map(JSON.stringify))).map(JSON.parse),
        movies: state.movies.concat(action.movies.data).filter((v, i, a) => a.findIndex((t) => (t.id === v.id)) === i),
        offset: action.movies.offset,
        pending: false,
      };
    case FETCH_MOVIES_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_MOVIES_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case CLEAR_STATE:
      return {
        ...state,
        ...defaultState,
      };
    case CLEAR_MOVIE:
      return {
        ...state,
        movies: [],
        pending: false,
        limit: 20,
        offset: 0,
        total: 0,
      };
    case CHANGE_GENRES:
      return {
        ...state,
        limit: 20,
        offset: 0,
        total: 0,
        movies: [],
      };
    default: return { ...state };
  }
};

export default moviesReducer;
