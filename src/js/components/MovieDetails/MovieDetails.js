import React from "react";
import "./MovieDetails.css"

function MovieDetails(props) {

    let releaseDate = new Date(props.releaseDate).getUTCFullYear();

    return (
        <div className="card flex-md-row mb-4 shadow-sm h-md-250">
            {/*{error && <span className='product-list-error'>{error}</span>}*/}
            <div className="card-body d-flex flex-column align-items-start">
                <div className="row">
                    <div className="col-md-4">
                        <img src={props.posterPath} className="card-img"
                             alt={props.title}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <div className="d-flex flex-row bd-highlight pb-3">
                                <h1 className="card-title">{props.title}</h1>
                                { props.voteAverage ? (<div className="numberCircle">{props.voteAverage}</div>): (<div/>) }
                            </div>
                            <p className="card-text">{props.tagline}</p>
                            <div className="d-flex flex-row bd-highlight pb-3">
                                <div className="movieDate bd-highlight">{releaseDate}<small
                                    className="text-muted pl-md-1 bd-highlight">{releaseDate ? "year" : ""}</small></div>
                                <div className="moveRuntime pl-md-2 bd-highlight">{props.runtime}<small
                                    className="text-muted pl-md-1 bd-highlight">{props.runtime ? "min" : ""}</small></div>
                            </div>
                            <p className="card-text">{props.overview}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails;
