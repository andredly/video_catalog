import React, {Component} from "react";
import Movie from "../Movie";
import "./ResultsBody.css"
import {loadMoreMovies, loadMovies} from "../../store/fetchData/actions";
import {connect} from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import {NoFilmsFound} from "../NoFilmsFound";
import {Loader} from "../Loader";

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

    shouldComponentRender() {
        return this.props.pending !== false;
    }

    render() {
        const hasContent = this.props.movies.length > 0;
        if (!this.shouldComponentRender()) return <Loader load={true}/>;
        return (
            <div className="album py-5 jumbotron mb-0">
                {this.props.error && <div className='text-body'>{this.props.error}</div>}
                {hasContent ? (
                    <InfiniteScroll dataLength={this.props.movies.length}
                                    next={this.fetchNextMovies}
                                    hasMore={true}
                                    loader={<Loader load={this.props.pending}/>}>
                        <div className="container">
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

                        </div>
                    </InfiniteScroll>
                ) : (
                    <NoFilmsFound/>
                )}
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
        pending: state.resultOptionReducer.pending,
        error: state.resultOptionReducer.error

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
