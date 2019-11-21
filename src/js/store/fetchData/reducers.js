import {
    ADD_MOVIES_TO_STATE,
    FETCH_MOVIES_ERROR,
    FETCH_MOVIES_PENDING,
    GET_MOVIE_DETAILS,
    GET_MOVIES_LIST
} from "./actions";


const defaultState = {
    pending: false,
    error: null,
    movies : [],
    movieDetails : {},
    limit: 20,
    offset: 0,
    total: 0
};

export const moviesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_MOVIES_LIST :
            return {
                ...state,
                movies : action.movies.data,
                offset : action.movies.offset,
                pending: false
            };
        case GET_MOVIE_DETAILS :
            return {
                ...state,
                movieDetails : action.movieDetails,
                pending: false
            };
        case ADD_MOVIES_TO_STATE :
            return {
                ...state,
                movies : state.movies.concat(action.movies.data),
                offset : action.movies.offset,
                pending: false,
            };
        case FETCH_MOVIES_PENDING:
            return {
                ...state,
                pending: true
            };
        case FETCH_MOVIES_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
    }
    return state;
};
