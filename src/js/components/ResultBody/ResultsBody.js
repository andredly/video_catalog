import React, {Component} from "react";
import Movie from "../Movie";
import "./ResultsBody.css"
import {loadMoreMovies, loadMovies} from "../../store/fetchData/actions";
import {connect} from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import {NoFilmsFound} from "../NoFilmsFound";

class ResultsBody extends Component {

    constructor(props) {
        super(props);
        this.fetchNextMovies = this.fetchNextMovies.bind(this);
    }

    componentDidMount() {
        this.props.fetchMovies(this.props.searchParams);
    }


    fetchNextMovies() {
        this.props.searchParams.offset = this.props.searchParams.offset + this.props.searchParams.limit;
        this.props.addMovieToState(this.props.searchParams);
    }

    render() {
        const hasContent = this.props.movies.length > 0;
        return (
            <div className="album py-5 jumbotron mb-0">
                <div className="container">
                    {hasContent ? (
                        <InfiniteScroll dataLength={this.props.movies.length}
                                        next={this.fetchNextMovies}
                                        hasMore={true}
                                        loader={<h4>Loading...</h4>}>
                            <div className="row">
                                {this.props.movies.map((movie) =>
                                    <Movie
                                        title={movie.title}
                                        id={movie.id}
                                        key={movie.id}
                                        releaseData={movie.release_date}
                                        genres={movie.genres.join(" & ")}
                                        posterPath={movie.poster_path}
                                    />
                                )}
                            </div>
                        </InfiniteScroll>
                    ) : (
                        <NoFilmsFound/>
                    )}
                </div>
            </div>
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
        count: state.resultOptionReducer.count,

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovies: (queryParams) => {
            dispatch(loadMovies(queryParams))
        },
        addMovieToState: (movies) => {
            dispatch(loadMoreMovies(movies))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultsBody);
