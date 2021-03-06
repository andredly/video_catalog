import React, {Component} from "react";
import ResultPanel from "../containers/ResultPanel";
import ResultsBody from "../components/ResultBody/ResultsBody";
import MovieDetails from "../components/MovieDetails/MovieDetails";
import {loadMovieDetails, loadMovies} from "../store/fetchData/actions";
import {connect} from "react-redux";
import {matchPath} from "react-router-dom";
import routes from "../containers/routes";

class FilmDetailsPage extends Component {

    constructor(props) {
        super(props);
    }

    static initialAction(req) {
        function getRouteData() {
            let matchingRoute = routes.find(route => {
                return matchPath(req.path, route);
            });
            return matchPath(req.path, matchingRoute);
        }

        let {params} = getRouteData();
        return loadMovieDetails(params.id)
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.fetchMovieDetails(id);
        this.props.fetchMovies(this.props.searchParams);
    }

    componentDidUpdate(prevProps) {
        const id = this.props.match.params.id;
        const newId = prevProps.match.params.id;
        if (id === newId) {
            return
        }
        window.scrollTo(0, 0);
        this.props.fetchMovieDetails(this.props.match.params.id);
        this.props.fetchMovies(this.props.searchParams);
    }

    render() {
        return (
            <>
                <div className={"film-detail-page"}></div>
                <MovieDetails movieDetails={this.props.movieDetails}/>
                <ResultPanel searchFilterEnable={false} typeResult="movieDetails"/>
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
        movieDetails: state.moviesReducer.movieDetails,
        movies: state.moviesReducer.movies,
        searchParams: {
            filter: state.resultOptionReducer.genres,
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
        fetchMovieDetails: (id) => {
            dispatch(loadMovieDetails(id))
        },
        fetchMovies: (queryParams) => {
            dispatch(loadMovies(queryParams))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmDetailsPage);
