import React, { Component } from 'react';
import { connect } from 'react-redux';
import autoBind from 'auto-bind';
import { loadMoreMovies } from '../../store/fetchData/actions';
import Movie from '../Movie';
import './ResultsBody.css';
import Loader from '../Loader';
import NoFilmsFound from '../NoFilmsFound';

class ResultsBody extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }


  componentDidMount() {
    global.document.addEventListener('scroll', this.onScrollHandler);
  }

  componentWillUnmount() {
    global.document.removeEventListener('scroll', this.onScrollHandler);
  }

  onScrollHandler() {
    const moreData = (this.props.total >= this.props.searchParams.limit)
        && (this.props.total > this.props.searchParams.offset);
    if ((global.window.innerHeight + global.window.pageYOffset)
            >= global.document.body.scrollHeight && !this.props.pending
            && moreData) {
      this.fetchNextMovies();
    }
  }

  fetchNextMovies() {
    this.props.searchParams.offset += this.props.searchParams.limit;
    this.props.addMovieToState(this.props.searchParams);
  }

  render() {
    const hasContent = !this.props.movies.isEmpty();
    return (
            <div className="album py-5 jumbotron mb-0 result-body">
                {this.props.pending && <Loader load={true}/>}
                {this.props.error && <div className='text-body'>{this.props.error}</div>}
                {hasContent ? (
                    <div className="container">
                        <div className="row">
                            {this.props.movies.map((movie) => <Movie
                                    title={movie.toJS().title}
                                    id={movie.toJS().id}
                                    key={movie.toJS().id}
                                    releaseData={movie.toJS().release_date}
                                    genres={movie.toJS().genres}
                                    posterPath={movie.toJS().poster_path}
                                />)}
                        </div>
                    </div>
                ) : (
                  !this.props.pending && <NoFilmsFound/>
                )}
            </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => ({
  addMovieToState: (movies) => {
    dispatch(loadMoreMovies(movies));
  },
});

export default connect(null, mapDispatchToProps)(ResultsBody);
