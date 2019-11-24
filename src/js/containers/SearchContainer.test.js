import React from "react";
import SearchContainer, {mapDispatchToProps, mapStateToProps} from "./SearchContainer";
import configureMockStore  from 'redux-mock-store'
import thunk from "redux-thunk";

describe("SearchContainer", () => {
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
            movieDetails : {
                title: "Call Me by Your Name",
                tagline: "",
                "vote_average": 8.3,
                "vote_count": 1887,
                "release_date": "2017-10-27",
                "poster_path": "https://image.tmdb.org/t/p/w500/nPTjj6ZfBXXBwOhd7iUy6tyuKWt.jpg",
                overview: "Elio Perlman is spending the summer with his family at their vacation home in Lombardy, Italy. When his father hires a handsome doctoral student, the curious 17-year-old finds himself developing a growing attraction to the young man.",
                genres: [
                    "Romance",
                    "Drama"
                ],
                runtime: 132
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
        wrapper= mount(<SearchContainer store={store}/>);
    });

    it('renders correctly', () => {
        const tree = renderer
            .create(<SearchContainer store={store}/>)
                .toJSON();
                expect(tree).toMatchSnapshot();
    });

    it('SearchInput component has text after changing in input field', () => {
        const event = {
            target: { value: 'text' }
        };
        wrapper.find('.form-control').simulate('change', event);
        expect( store.getActions()).toEqual([ { type: 'GET_SEARCH_TEXT', searchText: 'text' } ]);
    });

    it('SearchInput component fetches data after click to button', () => {
        wrapper.find('.input-group button').simulate('click');
        expect( store.getActions()).toEqual([ { type: 'FETCH_MOVIES_PENDING' } ]);
    });

    it('SearchFilter component option was changed data after click to button', () => {
        const event = {
            target: { value: 'click' }
        };
        wrapper.find('.btn-group button').first().simulate('click', event);
        expect( store.getActions()).toEqual([ { type: 'CHANGE_OPTION_SEARCH_BY' , searchBy : "click"} ]);
    });
});
