import React from "react";
import SearchFilter from "../components/SearchFilter/SearchFilter";
import SearchInput from "../components/SearchInput";
import {setOptionSearch, setSearchText} from "../store/search/actions";
import {connect} from "react-redux";
import {loadMovies} from "../store/fetchData/actions";

function SearchContainer(props) {

    return (
        <div className="jumbotron mb-0 text-left search-container">
            <div className="container">
                <SearchInput
                    searchParams={props.searchParams}
                    setSearchText={props.setSearchText}
                    searchFetchMovies={props.searchFetchMovies}/>
                < SearchFilter
                    typeText={"SEARCH BY"}
                    firstTypeText={"TITLE"}
                    firstTypeValue={"title"}
                    secondTypeText={"GENRE"}
                    secondTypeValue={"genres"}
                    setOption={props.setOption}/>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        searchParams : {
            search : state.resultOptionReducer.search,
            searchBy : state.resultOptionReducer.searchBy,
            sortBy : state.resultOptionReducer.sortBy
        }
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setOption : option => {
            dispatch(setOptionSearch(option))
        },
        setSearchText : input => dispatch(setSearchText(input)),
        searchFetchMovies: queryParams => {
            dispatch(loadMovies(queryParams))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
