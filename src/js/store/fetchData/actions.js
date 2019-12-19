import 'isomorphic-fetch';

const querystring = require('querystring');

export const GET_MOVIES_LIST = 'GET_MOVIES_LIST';
export const GET_MOVIE_DETAILS = 'GET_MOVIE_DETAILS';
export const ADD_MOVIES_TO_STATE = 'ADD_MOVIES_TO_STATE';
export const FETCH_MOVIES_PENDING = 'FETCH_MOVIES_PENDING';
export const FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR';
export const CLEAR_MOVIE = 'CLEAR_MOVIE';
const BASE_URL = 'https://reactjs-cdp.herokuapp.com';
const MOVIES_PATH = '/movies';

export function fetchMoviesPending() {
  return {
    type: FETCH_MOVIES_PENDING,
  };
}

export function fetchMoviesError(error) {
  return {
    type: FETCH_MOVIES_ERROR,
    error,
  };
}

export const setAllMovies = (movies) => ({
  type: GET_MOVIES_LIST,
  movies,
});

export const setMovieDetails = (movieDetails) => ({
  type: GET_MOVIE_DETAILS,
  movieDetails,
});

export const addMoviesToState = (movies) => ({
  type: ADD_MOVIES_TO_STATE,
  movies,
});

export const clearMovies = () => ({
  type: CLEAR_MOVIE,
});

function getUrl(params) {
  let queryParams = params;
  queryParams.sortOrder = 'desc';
  const queryParamsString = querystring.stringify(queryParams);
  queryParams = queryParams ? `?${queryParamsString}` : '';
  return `${BASE_URL}${MOVIES_PATH}${queryParams}`;
}

export function loadMovies(queryParams) {
  return (dispatch) => {
    dispatch(fetchMoviesPending());
    return fetch(getUrl(queryParams))
      .then((response) => response.json())
      .then((movies) => {
        if (movies.error) {
          throw (movies.error);
        }
        dispatch(setAllMovies(movies));
        // return movies;
      })
      .catch((error) => {
        dispatch(fetchMoviesError(error));
      });
  };
}

export function loadMoreMovies(queryParams) {
  return (dispatch) => {
    dispatch(fetchMoviesPending());
    return fetch(getUrl(queryParams))
      .then((response) => response.json())
      .then((movies) => {
        if (movies.error) {
          throw (movies.error);
        }
        dispatch(addMoviesToState(movies));
        // return movies;
      })
      .catch((error) => {
        dispatch(fetchMoviesError(error));
      });
  };
}

export function loadMovieDetails(id) {
  const url = `${BASE_URL}${MOVIES_PATH}/${id}`;
  return (dispatch) => {
    dispatch(fetchMoviesPending());
    fetch(url)
      .then((response) => response.json())
      .then((movieDetails) => {
        if (movieDetails.error) {
          throw (movieDetails.error);
        }
        dispatch(setMovieDetails(movieDetails));
        // return movieDetails;
      })
      .catch((error) => {
        dispatch(fetchMoviesError(error));
      });
  };
}
