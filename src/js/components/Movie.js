import React from "react";
import {loadMovieDetails} from "../store/fetchData/actions";
import {connect} from "react-redux";


function Movie(props){

        return (
            <div className="col-md-4" key={props.id}>
                <div className="card mb-4 shadow-sm">
                    <img src={props.posterPath}
                         onClick={() => props.fetchMovieDetails(props.id)} className="card-img-top bd-placeholder-img" alt={props.title}/>
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                            <h5 className="card-title" onClick={() => props.fetchMovieDetails(props.id)}><a>{props.title}</a></h5>
                            <div className="card-text">{new Date(props.releaseData).getUTCFullYear()}</div>
                        </div>
                        <small>{props.genres}</small>
                    </div>
                </div>
            </div>
        )
}


const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovieDetails: (id) => {
            dispatch(loadMovieDetails(id))
        }
    };
};

export default connect(null, mapDispatchToProps)(Movie);
