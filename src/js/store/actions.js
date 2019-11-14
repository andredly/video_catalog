import {BASE_URL, MOVIES_PATH} from "../containers/Main";
const querystring = require('querystring');

export const GET_MOVIES_LIST = "GET_MOVIES_LIST";
export const GET_MOVIE_DETAILS = "GET_MOVIE_DETAILS";


export function loadMovies(queryParams) {
    queryParams.sortOrder = "desc";
    const queryParamsString = querystring.stringify(queryParams);
    queryParams = queryParams ? `?${queryParamsString}` : "";
    const url = `${BASE_URL}${MOVIES_PATH}${queryParams}`;
    console.log(url);
    return async (dispatch) => {
        return await fetch(url)
            .then(response => response.json())
            .then(movies => {dispatch(setAllMovies(movies))})
    }
}

export function loadMovieDetails(id) {
    const url = `${BASE_URL}${MOVIES_PATH}/${id}`;
    console.log(url);
    return async (dispatch) => {
        return await fetch(url)
            .then(response => response.json())
            .then(movieDetails => {dispatch(setMovieDetails(movieDetails))})
    }
}

export const setAllMovies = (movies) => ({
    type: GET_MOVIES_LIST,
    movies
});

export const setMovieDetails = (movieDetails) => ({
    type: GET_MOVIE_DETAILS,
    movieDetails
});

