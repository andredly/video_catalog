import React from "react";
import SearchFilter from "../components/SearchFilter/SearchFilter";
import SearchInput from "../components/SearchInput";
import ResultPanel from "../components/ResultPanel";
import MovieDetails from "../components/MovieDetails/MovieDetails";

function SearchContainer() {

    return (
        <div className="jumbotron mb-0 text-left">
            <div className="container">
                <MovieDetails/>
                <SearchInput/>
                <SearchFilter/>
            </div>
        </div>

    )
}

export default SearchContainer;
