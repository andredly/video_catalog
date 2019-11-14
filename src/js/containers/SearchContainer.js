import React from "react";
import SearchFilter from "../components/SearchFilter/SearchFilter";
import SearchInput from "../components/SearchInput";
import MovieDetails from "../components/MovieDetails/MovieDetails";
import {setOptionSearch, setSearchText} from "../store/search/actions";
import {connect} from "react-redux";
import {loadMovies} from "../store/actions";

function SearchContainer(props) {

    return (
        <div className="jumbotron mb-0 text-left">
            <div className="container">
                <MovieDetails
                    title={props.movieDetails.title}
                    tagline={props.movieDetails.tagline}
                    voteAverage={props.movieDetails.vote_average}
                    voteCount={props.movieDetails.vote_count}
                    releaseDate={props.movieDetails.release_date}
                    posterPath={props.movieDetails.poster_path}
                    overview={props.movieDetails.overview}
                    genres={props.movieDetails.genres}
                    runtime={props.movieDetails.runtime}/>
                <SearchInput
                    searchParams={props.searchParams}
                    setSearchText={props.setSearchText}
                    searchFetchMovies={props.searchFetchMovies}/>
                <SearchFilter
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
        searchParams : state.resultOptionReducer.searchParams,
        movieDetails: state.moviesReducer.movieDetails
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
