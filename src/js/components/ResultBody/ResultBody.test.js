import React from "react";
import ResultsBody from "./ResultsBody";
import configureMockStore from 'redux-mock-store'
import thunk from "redux-thunk";
import toJson from "enzyme-to-json";
import {MemoryRouter} from "react-router";
import {Provider} from "react-redux";
const sinon = require('sinon');

describe("ResultsBody", () => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);
    const addMovieToStateMock = jest.fn();
    const movies = [
        {
            id: 1020,
            title: "Call Me by Your Name",
            release_date: "2017-10-27",
            posterPath: "https://image.tmdb.org/t/p/w500/nPTjj6ZfBXXBwOhd7iUy6tyuKWt.jpg",
            genres: [
                "Romance",
                "Drama"
            ]
        },
        {
            id: 1021,
            title: "Call Me by Your Name1",
            release_date: "2018-10-27",
            posterPath: "https://image.tmdb.org/t/p/w500/nPTjj6ZfBXXBwOhd7iUy6tyuKWt.jpg",
            genres: [
                "Drama"
            ]
        }
    ];
    const initialState = {
        moviesReducer: {
            addMovieToState: addMovieToStateMock
        }
    };
    let store;
    let wrapper;
    let onScroll;

    beforeEach(() => {
        store = mockStore(initialState);
    });

    it('renders correctly', () => {
        wrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <ResultsBody movies={movies}/>
                </MemoryRouter>
            </Provider>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('pending renders correctly', () => {
        wrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <ResultsBody pending={true} error={<h1>ERROR</h1>} movies={movies}/>
                </MemoryRouter>
            </Provider>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });


});
