import React, {Component} from "react";
import {loadMovieDetails} from "../store/fetchData/actions";
import {connect} from "react-redux";


class Movie extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-md-4" key={this.props.id}>
                <div className="card mb-4 shadow-sm">
                    <img src={this.props.posterPath}
                         onClick={() => this.props.fetchMovieDetails(this.props.id)} className="card-img-top bd-placeholder-img" alt={this.props.title}/>
                    <a href="#!"/>
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                            <h5 className="card-title" onClick={() => this.props.fetchMovieDetails(this.props.id)}><a>{this.props.title}</a></h5>
                            <div className="card-text">{new Date(this.props.releaseData).getUTCFullYear()}</div>
                        </div>
                        <small>{this.props.genres}</small>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.moviesReducer.movieDetails
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovieDetails: (id) => {
            dispatch(loadMovieDetails(id))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
