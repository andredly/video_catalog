import React from 'react';
import { connect } from 'react-redux';
import SearchFilter from '../components/SearchFilter/SearchFilter';
import SearchInput from '../components/SearchInput';
import { setOptionSearch, setSearchText } from '../store/search/actions';

function SearchContainer(props) {
  return (
        <div className="jumbotron mb-0 text-left search-container">
            <div className="container">
                <SearchInput
                    searchParams={props.searchParams}
                    setSearchText={props.setSearchText}
                    searchFetchMovies={props.searchFetchMovies}/>
                < SearchFilter
                    typeText={'SEARCH BY'}
                    firstTypeText={'TITLE'}
                    firstTypeValue={'title'}
                    secondTypeText={'GENRE'}
                    secondTypeValue={'genres'}
                    setOption={props.setOption}/>
            </div>
        </div>
  );
}

const mapStateToProps = (state) => ({
  searchParams: {
    search: state.resultOptionReducer.search,
    searchBy: state.resultOptionReducer.searchBy,
    sortBy: state.resultOptionReducer.sortBy,
  },
});

const mapDispatchToProps = (dispatch) => ({
  setOption: (option) => {
    dispatch(setOptionSearch(option));
  },
  setSearchText: (input) => dispatch(setSearchText(input)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
