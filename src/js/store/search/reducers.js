import {CHANGE_OPTION_SEARCH_BY, CHANGE_OPTION_SORT_BY, GET_SEARCH_TEXT} from "./actions";

const defaultState = {
    searchParams: {
        search: "",
        searchBy: "title",
        sortBy: "release_data"
    }
};

export const resultOptionReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_OPTION_SEARCH_BY :
            return {
                ...state,
                searchParams: {
                    search : state.searchParams.search,
                    searchBy : action.searchBy,
                    sortBy : state.searchParams.sortBy
                }
            };
        case CHANGE_OPTION_SORT_BY :
            return {
                ...state,
                searchParams: {
                    search : state.searchParams.search,
                    searchBy : state.searchParams.searchBy,
                    sortBy : action.sortBy
                }
            };
        case GET_SEARCH_TEXT :
            return {
                ...state,
                searchParams: {
                    search : action.searchText,
                    searchBy : state.searchParams.searchBy,
                    sortBy : state.searchParams.sortBy
                }
            }
    }
    return state;
};
