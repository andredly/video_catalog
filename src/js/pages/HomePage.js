import React from "react";
import SearchContainer from "../containers/SearchContainer";
import ResultPanel from "../containers/ResultPanel";
import ResultsBody from "../components/ResultBody/ResultsBody";
import {connect} from "react-redux";

function HomePage({ searchParams, pending, error, total }) {

    return (
        <>
            <SearchContainer/>
            <ResultPanel searchFilterEnable={true} typeResult="home"/>
            <ResultsBody movies={[]}
                         searchParams={searchParams}
                         pending={pending}
                         error={error}
                         total={total}/>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        searchParams: {
            search: state.resultOptionReducer.search,
            searchBy: state.resultOptionReducer.searchBy,
            sortBy: state.resultOptionReducer.sortBy,
            limit: state.moviesReducer.limit,
            offset: state.moviesReducer.offset
        },
        total: state.moviesReducer.total,
        pending: state.moviesReducer.pending,
        error: state.moviesReducer.error
    }
};

export default connect(mapStateToProps)(HomePage);
