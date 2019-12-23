import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import {
  loadMovies, loadMovieDetails, loadMoreMovies,
  ADD_MOVIES_TO_STATE, FETCH_MOVIES_PENDING, GET_MOVIE_DETAILS,
} from './actions';

const GET_MOVIES_LIST = 'GET_MOVIES_LIST';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('actions moviesReducer', () => {
  let store;
  beforeEach(() => {
    store = mockStore({});
    fetchMock.restore();
  });

  afterEach(() => {
    fetchMock.reset();
  });


  it('creates GET_MOVIES_LIST when fetching moves has been done', () => {
    fetchMock.getOnce('https://reactjs-cdp.herokuapp.com/movies?sortOrder=desc', {
      body: {
        data: ['testData'],
        offset: 10,
        total: 10,
      },
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: FETCH_MOVIES_PENDING },
      {
        type: GET_MOVIES_LIST,
        movies: {
          data: ['testData'],
          offset: 10,
          total: 10,
        },
      },
    ];

    return store.dispatch(loadMovies({}))
      .then(() => {
        expect(store.getActions())
          .toEqual(expectedActions);
      });
  });

  it('creates ADD_MOVIES_TO_STATE when fetching moves has been done', () => {
    fetchMock.getOnce('https://reactjs-cdp.herokuapp.com/movies?sortOrder=desc', {
      body: {
        data: ['testData'],
        offset: 10,
        total: 10,
      },
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: FETCH_MOVIES_PENDING },
      {
        type: ADD_MOVIES_TO_STATE,
        movies: {
          data: ['testData'],
          offset: 10,
          total: 10,
        },
      },
    ];

    return store.dispatch(loadMoreMovies({}))
      .then(() => {
        expect(store.getActions())
          .toEqual(expectedActions);
      });
  });


  it('creates GET_MOVIE_DETAILS when fetching moves has been done', () => {
    fetchMock.getOnce('https://reactjs-cdp.herokuapp.com/movies/10', {
      body: {
        movieDetails: { title: 'title' },
      },
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: FETCH_MOVIES_PENDING },
      {
        type: GET_MOVIE_DETAILS, movieDetails: { title: 'title' },
      },
    ];

    return store.dispatch(loadMovieDetails(10))
      .then(() => {
        expect(store.getActions())
          .toEqual(expectedActions);
      });
  });

  it('handles errors', async () => {
    fetchMock.get('https://reactjs-cdp.herokuapp.com/movies/10', {
      status: 500,
      body: { error: 'error' },
    });

    const expectedActions = [
      {
        type: 'FETCH_MOVIES_PENDING',
      },
      {
        error: 'error',
        type: 'FETCH_MOVIES_ERROR',
      },
    ];

    store.dispatch(loadMovieDetails(10));

    store.subscribe(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
