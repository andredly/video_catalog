import { combineReducers } from "redux";
import {GET_MOVIE_DETAILS, GET_MOVIES_LIST} from "./actions";
import {resultOptionReducer} from "./search/reducers";


const defaultState = {
    movies : [],
    movieDetails : {},
    limit: 10,
    offset: 0,
    total: 0
};

const moviesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_MOVIES_LIST :
            return {
                ...state,
                movies : action.movies.data,
                total : action.movies.total,
                limit : action.movies.limit,
                offset : action.movies.offset
            };
        case GET_MOVIE_DETAILS :
            return {
                ...state,
                movieDetails : action.movieDetails,
            }
    }
    return state;
};

export default combineReducers({
    moviesReducer : moviesReducer,
    resultOptionReducer
});
