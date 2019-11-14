import React from "react";
import SearchFilter from "../components/SearchFilter/SearchFilter";
import ResultCount from "../components/ResultCount";
import {setOptionSort} from "../store/search/actions";
import {connect} from "react-redux";
import {loadMovies} from "../store/actions";
import MovieDetails from "../components/MovieDetails/MovieDetails";

function ResultPanel(props) {

    return (
        <div className="pb-2 pt-2 bg-secondary resultPanel">
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <ResultCount count={props.movies.length}/>
                    </div>
                    <div className="col-sm">
                        <SearchFilter
                            typeText={"SORT BY"}
                            firstTypeText={"RELEASE_DATA"}
                            firstTypeValue={"release_date"}
                            secondTypeText={"RATING"}
                            secondTypeValue={"vote_average"}
                            setOption={props.setOption}
                            searchFetchMovies={props.searchFetchMovies}
                            searchParams={props.searchParams}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        searchParams : state.resultOptionReducer.searchParams,
        movies : state.moviesReducer.movies
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setOption : option => {
            dispatch(setOptionSort(option))
        },
        searchFetchMovies: queryParams => {
            dispatch(loadMovies(queryParams))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultPanel);
