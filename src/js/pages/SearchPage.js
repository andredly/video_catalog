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

    componentDidMount() {
        let query = this.props.location.search;
        this.updateData(query);
    }

    componentDidUpdate(prevProps) {
        let query = this.props.location.search;
        const preQuery = prevProps.location.search;
        if (query === preQuery) {
            return
        }
        this.updateData(query);
    }

    updateData (query) {
        if (this.props.location.search) {
            query = query.replace("?","")
        }
        const searchParams = querystring.parse(query);
        this.props.fetchMovies(searchParams);
        this.props.setSearchText(searchParams.search);
    }

    render() {
        return (
            <>
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
        setSearchText : input => dispatch(setSearchText(input))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
