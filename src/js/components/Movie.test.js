import React from "react";
import Movie from "./Movie";
import configureMockStore from 'redux-mock-store'
import thunk from "redux-thunk";
import toJson from "enzyme-to-json";
import {MemoryRouter} from "react-router";

describe("Movie", () => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);
    const searchFetchMoviesMock = jest.fn();

    const props = {
        id: 1020,
        title: "Call Me by Your Name",
        release_date: "2017-10-27",
        posterPath: "https://image.tmdb.org/t/p/w500/nPTjj6ZfBXXBwOhd7iUy6tyuKWt.jpg",
        genres: [
            "Romance",
            "Drama"
        ]
    };

    const initialState = {
        resultOptionReducer: {
            search: "",
            sortBy: "release_data"
        },
        searchFetchMovies: searchFetchMoviesMock,
    };
    let store;
    let wrapper;

    beforeEach(() => {
        store = mockStore(initialState);
        wrapper = mount(
            <MemoryRouter>
                <Movie store={store}
                       title={props.title}
                       id={props.id}
                       key={props.id}
                       releaseData={props.release_date}
                       genres={props.genres}
                       posterPath={props.poster_path}/>
            </MemoryRouter>)
    });

    it('renders correctly', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });


    it('Movie component option fetches data after click to image', () => {
        wrapper.find('.card-img-top').simulate('click');
        expect(store.getActions()).toEqual([
            {
                "genres": [
                    "Romance",
                    "Drama"
                ],
                "type": "CHANGE_GENRES"
            }]);
    });

});
