import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import toJson from 'enzyme-to-json';
import FilmDetailsPage from './FilmDetailsPage';

describe('FilmDetailsPage', () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  const fetchMovieDetailsMock = jest.fn();
  const fetchMoviesMock = jest.fn();
  const initialState = {
    resultOptionReducer: {
      search: '',
      searchBy: 'title',
      sortBy: 'release_data',
      genres: ['Drama', 'Horror'],
    },
    moviesReducer: {
      movieDetails: {
        id: 10,
        title: 'Call Me by Your Name',
        tagline: '',
        vote_average: 8.3,
        vote_count: 1887,
        release_date: '2017-10-27',
        poster_path: 'https://image.tmdb.org/t/p/w500/nPTjj6ZfBXXBwOhd7iUy6tyuKWt.jpg',
        overview: 'Elio Perlman is spending the summer with his family'
            + ' at their vacation home in Lombardy, Italy.'
            + ' When his father hires a handsome doctoral student,'
            + ' the curious 17-year-old finds himself developing'
            + ' a growing attraction to the young man.',
        genres: [
          'Romance',
          'Drama',
        ],
        runtime: 132,
      },
      movies:
                [{
                  id: 1,
                  genres: ['Drama', 'Horror'],
                },
                {
                  id: 2,
                  genres: ['Horror', 'Drama'],
                }],
      pending: false,
      total: 0,
      error: null,
      limit: 20,
      offset: 0,
    },
    fetchMovieDetails: fetchMovieDetailsMock,
    fetchMovies: fetchMoviesMock,
  };
  let store;
  let wrapper;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                <FilmDetailsPage match={{ params: { id: 2 } }}/>
                </MemoryRouter>
            </Provider>,
    );
  });

  it('renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('fetchMovieDetails and fetchMovies function were called', () => {
    expect(store.getActions()).toEqual([
      {
        type: 'FETCH_MOVIES_PENDING',
      },
      {
        type: 'FETCH_MOVIES_PENDING',
      },
    ]);
  });
});
