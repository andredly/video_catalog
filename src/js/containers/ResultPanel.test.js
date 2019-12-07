import React from "react";
import ResultPanel from "./ResultPanel";
import configureMockStore from 'redux-mock-store'
import thunk from "redux-thunk";

describe("ResultPanel", () => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);
    const searchFetchMoviesMock = jest.fn();
    const setOptionMock = jest.fn();
    const initialState = {
        resultOptionReducer: {
            search: "",
            searchBy: "title",
            sortBy: "release_data"
        },
        moviesReducer: {
            movies: {
                1: {},
                2: {}
            },
            movieDetails : {
                genres : ["Drama"]
            }
        },
        searchFetchMovies: searchFetchMoviesMock,
        setOption: setOptionMock

    };
    let store;
    let wrapper;

    beforeEach(() => {
        store = mockStore(initialState);
        wrapper = mount(<ResultPanel typeResult={"movieDetails"} store={store} searchFilterEnable={true}/>);
    });

    it('renders correctly', () => {
        const tree = renderer
            .create(<ResultPanel store={store}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });


    it('SearchFilter component option was changed data and fetches data after click to last button', () => {
        console.log(wrapper.html()
        )
        wrapper.find('.btn-group button').last().simulate('click');
        expect(store.getActions()).toEqual([{
            "sortBy": "vote_average",
            "type": "CHANGE_OPTION_SORT_BY"
        }]);
    });

    it('SearchFilter component option was changed data and fetches data after click to second button', () => {
        wrapper.find('.btn-group button').first().simulate('click');
        expect(store.getActions()).toEqual([{
            "sortBy": "release_date",
            "type": "CHANGE_OPTION_SORT_BY"
        }]);
    });
});
