import React from "react";
import ResultsBody from "./ResultsBody";
import configureMockStore  from 'redux-mock-store'
import thunk from "redux-thunk";

describe("ResultsBody", () => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);
    const setSearchTextMock = jest.fn();
    const searchFetchMoviesMock = jest.fn();
    const setOptionMock = jest.fn();
    const initialState = {
        resultOptionReducer : {
            search: "",
            searchBy: "title",
            sortBy: "release_data"
        },
        moviesReducer : {
            movies : {
            }
        },
        setSearchText : setSearchTextMock,
        searchFetchMovies : searchFetchMoviesMock,
        setOption : setOptionMock

    };
    let store;
    let wrapper;

    beforeEach(() => {
        store = mockStore(initialState);
        wrapper= mount(<ResultsBody store={store}/>);
    });

    it('renders correctly', () => {
        const tree = renderer
            .create(<ResultsBody store={store}/>)
                .toJSON();
                expect(tree).toMatchSnapshot();
    });

});
