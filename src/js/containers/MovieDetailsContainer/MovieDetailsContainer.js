import React from "react";
import {connect} from "react-redux";
import "../../containers/MovieDetailsContainer/MovieDetailsContainer.css"

function MovieDetailsContainer({movieDetails}) {

    let releaseDate = new Date(movieDetails.release_date).getUTCFullYear();

    return (
        <div className="jumbotron mb-0 text-left search-container">
            <div className="container">
                <div className="card flex-md-row mb-4 shadow-sm h-md-250">
                    {/*{error && <span className='product-list-error'>{error}</span>}*/}
                    <div className="card-body d-flex flex-column align-items-start">
                        <div className="row">
                            <div className="col-md-4">
                                <img src={movieDetails.poster_path} className="card-img"
                                     alt={movieDetails.title}/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <div className="d-flex flex-row bd-highlight pb-3">
                                        <h1 className="card-title">{movieDetails.title}</h1>
                                        { movieDetails.vote_average ? (<div className="numberCircle">{movieDetails.vote_average}</div>): (<div/>) }
                                    </div>
                                    <p className="card-text">{movieDetails.tagline}</p>
                                    <div className="d-flex flex-row bd-highlight pb-3">
                                        <div className="movieDate bd-highlight">{releaseDate}<small
                                            className="text-muted pl-md-1 bd-highlight">{releaseDate ? "year" : ""}</small></div>
                                        <div className="moveRuntime pl-md-2 bd-highlight">{movieDetails.runtime}<small
                                            className="text-muted pl-md-1 bd-highlight">{movieDetails.runtime ? "min" : ""}</small></div>
                                    </div>
                                    <p className="card-text">{movieDetails.overview}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}




export default MovieDetailsContainer;
