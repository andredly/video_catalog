export const CHANGE_OPTION_SEARCH_BY = 'CHANGE_OPTION_SEARCH_BY';
export const CHANGE_OPTION_SORT_BY = 'CHANGE_OPTION_SORT_BY';
export const GET_SEARCH_TEXT = 'GET_SEARCH_TEXT';
export const CHANGE_GENRES = 'CHANGE_GENRES';

export const setOptionSearch = (option) => ({
  type: CHANGE_OPTION_SEARCH_BY,
  searchBy: option,
});

export const setOptionSort = (option) => ({
  type: CHANGE_OPTION_SORT_BY,
  sortBy: option,
});

export const setSearchText = (input) => ({
  type: GET_SEARCH_TEXT,
  searchText: input,
});

export const setGenres = (genres) => ({
  type: CHANGE_GENRES,
  genres,
});
