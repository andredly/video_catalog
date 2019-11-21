import {CHANGE_OPTION_SEARCH_BY, CHANGE_OPTION_SORT_BY, GET_SEARCH_TEXT} from "./actions";

const defaultState = {
    search: "",
    searchBy: "title",
    sortBy: "release_data"
};

export const resultOptionReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_OPTION_SEARCH_BY :
            return {
                ...state,
                searchBy: action.searchBy
            };
        case CHANGE_OPTION_SORT_BY :
            return {
                ...state,
                sortBy: action.sortBy
            };
        case GET_SEARCH_TEXT :
            return {
                ...state,
                search: action.searchText
            }
    }
    return state;
};
