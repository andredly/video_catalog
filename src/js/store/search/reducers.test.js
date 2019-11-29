import {CHANGE_OPTION_SEARCH_BY, CHANGE_OPTION_SORT_BY, GET_SEARCH_TEXT} from "./actions";
import {resultOptionReducer} from "./reducers";

describe('resultOptionReducer', () => {

    let defaultState;

    beforeEach(() => {
        defaultState = {
            search: "",
            searchBy: "title",
            sortBy: "release_data"
        };
    });


    it('CHANGE_OPTION_SEARCH_BY', () => {
        const action = {
            type: CHANGE_OPTION_SEARCH_BY,
            searchBy : "searchByTest"
        };

        expect(resultOptionReducer(defaultState, action)).toEqual({
            ...defaultState,
            searchBy : "searchByTest"
        })
    });

    it('CHANGE_OPTION_SORT_BY', () => {
        const action = {
            type: CHANGE_OPTION_SORT_BY,
            sortBy : "sortByTest"
        };

        expect(resultOptionReducer(defaultState, action)).toEqual({
            ...defaultState,
            sortBy : "sortByTest"
        })
    });

    it('GET_SEARCH_TEXT', () => {
        const action = {
            type: GET_SEARCH_TEXT,
            searchText : "searchTest"
        };
        defaultState.movies = ["testData"];

        expect(resultOptionReducer(defaultState, action)).toEqual({
            ...defaultState,
            search : "searchTest"
        })
    });

});
