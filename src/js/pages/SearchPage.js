import React, {Component} from "react";
import ResultPanel from "../containers/ResultPanel";
import {loadMovies} from "../store/fetchData/actions";
import {connect} from "react-redux";
import SearchContainer from "../containers/SearchContainer";
import ResultsBody from "../components/ResultBody/ResultsBody";
import {setSearchText} from "../store/search/actions";

const querystring = require('querystring');

class SearchPage extends Component {

    constructor(props) {
        super(props);
    }

    static initialAction(req) {
        const searchParams = req.query;
        Object.keys(searchParams).forEach(key => searchParams[key] === undefined && (searchParams[key] = ""))
        return loadMovies(searchParams)
    }

    componentDidMount() {
        let query = this.props.location.search;
        const isEmptyStateMovies = Object.keys(this.props.movies).length === 0;
        if (query && isEmptyStateMovies) {
            this.parseQueryAndUpdateData(query);
        }
    }

    componentDidUpdate(prevProps) {
        let query = this.props.location.search;
        const preQuery = prevProps.location.search;
        if (query === preQuery) {
            return
        }
        this.parseQueryAndUpdateData(query);
    }

    parseQueryAndUpdateData(query) {
        if (this.props.location.search) {
            query = query.replace("?", "")
        }
        this.updateData(querystring.parse(query));
    }

    updateData(searchParams) {
        Object.keys(searchParams).forEach(key => searchParams[key] === undefined && (searchParams[key] = ""))
        this.props.fetchMovies(searchParams);
        this.props.setSearchText(searchParams.search);
    }

    render() {
        return (
            <>
                <div className={"search-page"}></div>
                <SearchContainer/>
                <ResultPanel searchFilterEnable={true} typeResult="home"/>
                <ResultsBody movies={this.props.movies}
                             searchParams={this.props.searchParams}
                             total={this.props.total}
                             pending={this.props.pending}
                             error={this.props.error}/>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.moviesReducer.movies,
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

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovies: (queryParams) => {
            dispatch(loadMovies(queryParams))
        },
        setSearchText: input => dispatch(setSearchText(input))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
