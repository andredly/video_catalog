import {ADD_MOVIES_TO_STATE, CHANGE_MOVIE_COUNT, GET_MOVIE_DETAILS, GET_MOVIES_LIST} from "./actions";


const defaultState = {
    movies : [],
    movieDetails : {},
    limit: 20,
    offset: 0,
    total: 0,
    count : 0
};

export const moviesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_MOVIES_LIST :
            return {
                ...state,
                movies : action.movies.data,
                total : action.movies.total,
                offset : action.movies.offset
            };
        case GET_MOVIE_DETAILS :
            return {
                ...state,
                movieDetails : action.movieDetails,
            };
        case CHANGE_MOVIE_COUNT :
            return {
                ...state,
                count : action.count,
            };
        case ADD_MOVIES_TO_STATE :
            console.log(state.movies)
            console.log(action.movies)
            return {
                ...state,
                movies : state.movies.concat(action.movies.data),
                offset : state.offset + action.movies.offset
            }
    }
    return state;
};
