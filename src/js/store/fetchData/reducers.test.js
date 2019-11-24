import {
    ADD_MOVIES_TO_STATE,
    FETCH_MOVIES_ERROR,
    FETCH_MOVIES_PENDING,
    GET_MOVIE_DETAILS,
    GET_MOVIES_LIST
} from "./actions";
import {moviesReducer} from "./reducers";

describe('moviesReducer', () => {

    let defaultState;

    beforeEach(() => {
        defaultState = {
            pending: false,
            error: null,
            movies : [],
            movieDetails : {},
            limit: 20,
            offset: 0,
            total: 0
        };
    });


    it('GET_MOVIES_LIST', () => {
        const action = {
            type: GET_MOVIES_LIST,
            movies : {
                data : ["testData"],
                offset : 10
            }
        };

        expect(moviesReducer(defaultState, action)).toEqual({
            ...defaultState,
            pending: false,
            movies : ["testData"],
            offset : 10
        })
    });

    it('GET_MOVIE_DETAILS', () => {
        const action = {
            type: GET_MOVIE_DETAILS,
            pending: false,
            movieDetails : ["testData"]
        };

        expect(moviesReducer(defaultState, action)).toEqual({
            ...defaultState,
            pending: false,
            movieDetails : ["testData"],
        })
    });

    it('ADD_MOVIES_TO_STATE', () => {
        const action = {
            type: ADD_MOVIES_TO_STATE,
            movies : {
                data : ["testData"],
                offset : 15
            }
        };
        defaultState.movies = ["testData"];

        expect(moviesReducer(defaultState, action)).toEqual({
            ...defaultState,
            pending: false,
            movies : ["testData", "testData"],
            offset : 15
        })
    });

    it('FETCH_MOVIES_PENDING', () => {
        const action = {
            type: FETCH_MOVIES_PENDING,
        };

        expect(moviesReducer(defaultState, action)).toEqual({
            ...defaultState,
            pending: true
        })
    });

    it('FETCH_MOVIES_ERROR', () => {
        const action = {
            type: FETCH_MOVIES_ERROR,
            error: "error"
        };

        expect(moviesReducer(defaultState, action)).toEqual({
            ...defaultState,
            pending: false,
            error: "error"
        })
    });


});
