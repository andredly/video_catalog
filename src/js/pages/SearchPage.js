import React, { Component } from 'react';
import { connect } from 'react-redux';
import ResultPanel from '../containers/ResultPanel';
import { loadMovies } from '../store/fetchData/actions';
import SearchContainer from '../containers/SearchContainer';
import ResultsBody from '../components/ResultBody/ResultsBody';
import { setSearchText } from '../store/search/actions';

const querystring = require('querystring');

class SearchPage extends Component {
  static initialAction(req) {
    const searchParams = req.query;
    Object.keys(searchParams)
      .forEach((key) => {
        if (searchParams[key] === undefined) {
          searchParams[key] = '';
        }
      });
    return loadMovies(searchParams);
  }

  componentDidMount() {
    const query = this.props.location.search;
    const isEmptyStateMovies = Object.keys(this.props.movies).length === 0;
    if (query && isEmptyStateMovies) {
      this.parseQueryAndUpdateData(query);
    }
  }

  componentDidUpdate(prevProps) {
    const query = this.props.location.search;
    const preQuery = prevProps.location.search;
    if (query === preQuery) {
      return;
    }
    this.parseQueryAndUpdateData(query);
  }

  parseQueryAndUpdateData(query) {
    let result = query;
    if (this.props.location.search) {
      result = query.replace('?', '');
    }
    this.updateData(querystring.parse(result));
  }

  updateData(params) {
    const searchParams = params;
    Object.keys(searchParams).forEach((key) => {
      if (searchParams[key] === undefined) {
        searchParams[key] = '';
      }
    });
    this.props.fetchMovies(searchParams);
    this.props.setSearchText(searchParams.search);
  }

  render() {
    return (
      <>
                <div className={'search-page'}></div>
                <SearchContainer/>
                <ResultPanel searchFilterEnable={true} typeResult="home"/>
                <ResultsBody movies={this.props.movies}
                             searchParams={this.props.searchParams}
                             total={this.props.total}
                             pending={this.props.pending}
                             error={this.props.error}/>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.moviesReducer.movies,
  searchParams: {
    search: state.resultOptionReducer.search,
    searchBy: state.resultOptionReducer.searchBy,
    sortBy: state.resultOptionReducer.sortBy,
    limit: state.moviesReducer.limit,
    offset: state.moviesReducer.offset,
  },
  total: state.moviesReducer.total,
  pending: state.moviesReducer.pending,
  error: state.moviesReducer.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMovies: (queryParams) => {
    dispatch(loadMovies(queryParams));
  },
  setSearchText: (input) => dispatch(setSearchText(input)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
