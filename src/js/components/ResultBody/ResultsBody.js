import React from "react";
import Movie from "../Movie";
import "./ResultsBody.css"
import {loadMovies} from "../../store/actions";
import {connect} from "react-redux";

class ResultsBody extends React.Component {

    componentDidMount() {
        this.props.fetchMovies(this.props.searchParams);
    }

    render() {
        return (
            <div className="album py-5 jumbotron mb-0">
                <div className="container">
                    <div className="row">
                        {console.log(this.props)}
                        {this.props.movies.map((movie) =>
                            <Movie
                                title={movie.title}
                                id={movie.id}
                                key={movie.id}
                                releaseData={movie.release_date}
                                genres = {movie.genres.join(" & ")}
                                posterPath = {movie.poster_path}
                            />
                        )}
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        movies: state.moviesReducer.movies,
        searchParams : state.resultOptionReducer.searchParams
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovies: (queryParams) => {
            dispatch(loadMovies(queryParams))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultsBody);
