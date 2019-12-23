import {
  CHANGE_GENRES, CHANGE_OPTION_SEARCH_BY, CHANGE_OPTION_SORT_BY, GET_SEARCH_TEXT,
} from './actions';
import resultOptionReducer from './reducers';
import { CLEAR_STATE } from '../actions';

describe('resultOptionReducer', () => {
  let defaultState;

  beforeEach(() => {
    defaultState = {
      search: '',
      searchBy: 'title',
      sortBy: 'release_data',
      genres: '',
    };
  });


  it('CHANGE_OPTION_SEARCH_BY', () => {
    const action = {
      type: CHANGE_OPTION_SEARCH_BY,
      searchBy: 'searchByTest',
    };

    expect(resultOptionReducer(defaultState, action)).toEqual({
      ...defaultState,
      searchBy: 'searchByTest',
    });
  });

  it('CHANGE_OPTION_SORT_BY', () => {
    const action = {
      type: CHANGE_OPTION_SORT_BY,
      sortBy: 'sortByTest',
    };

    expect(resultOptionReducer(defaultState, action)).toEqual({
      ...defaultState,
      sortBy: 'sortByTest',
    });
  });

  it('GET_SEARCH_TEXT', () => {
    const action = {
      type: GET_SEARCH_TEXT,
      searchText: 'searchTest',
    };
    defaultState.movies = ['testData'];

    expect(resultOptionReducer(defaultState, action)).toEqual({
      ...defaultState,
      search: 'searchTest',
    });
  });

  it('CHANGE_GENRES', () => {
    const action = {
      type: CHANGE_GENRES,
      genres: ['1', '2'],
    };

    expect(resultOptionReducer(defaultState, action)).toEqual({
      ...defaultState,
      genres: '1,2',
    });
  });

  it('CLEAR_STATE', () => {
    const action = {
      type: CLEAR_STATE,
    };

    expect(resultOptionReducer(defaultState, action)).toEqual({
      ...defaultState,
    });
  });
});
