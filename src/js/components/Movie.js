import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setGenres } from '../store/search/actions';
import PropTypes from 'prop-types';


class Movie extends Component {
  constructor(props) {
    super(props);
    this.changeGenres = this.changeGenres.bind(this);
  }

  changeGenres() {
    this.props.setGenres(this.props.genres);
  }

  render() {
    return (
            <div className="col-md-4" key={this.props.id}>
                <div className="card mb-4 shadow-sm">
                    <Link to={`/film/${this.props.id}`} id="link" onClick={this.changeGenres} >
                        <img src={this.props.posterPath}
                             className="card-img-top bd-placeholder-img"
                             alt={this.props.title} />
                    </Link>
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                            <h5 className="card-title" >
                                <Link style={{ textDecoration: 'none', color: 'black' }}
                                      to={`/film/${this.props.id}`} onClick={this.changeGenres}
                                      id="link">{this.props.title}</Link></h5>
                            <div className="card-text">{new Date(this.props.releaseData).getUTCFullYear()}</div>
                        </div>
                        <small>{this.props.genres.join(' & ')}</small>
                    </div>
                </div>
            </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setGenres: (genres) => {
    dispatch(setGenres(genres));
  },
});

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    posterPath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    releaseData: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    setGenres: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(Movie);
