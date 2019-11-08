import React from "react";
import "./MovieDetails.css"

function MovieDetails() {

    return (
        <div className="card flex-md-row mb-4 shadow-sm h-md-250">
            <div className="card-body d-flex flex-column align-items-start">
                <div className="row">
                    <div className="col-md-4">
                        <img src="https://image.tmdb.org/t/p/w500/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg" className="card-img"
                             alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <div className="row">
                                <h1 className="card-title">Ready Player One</h1>
                                <div className="numberCircle">5</div>
                            </div>
                            <p className="card-text">A better reality awaits.</p>
                            <div className="d-flex flex-row bd-highlight pb-3">
                                <div className="movieDate bd-highlight">2018<small
                                    className="text-muted pl-md-1 bd-highlight">year</small></div>
                                <div className="moveRuntime pl-md-2 bd-highlight">140<small
                                    className="text-muted pl-md-1 bd-highlight">min</small></div>
                            </div>
                            <p className="card-text">When the creator of a popular video game system dies, a
                                virtual
                                contest is created to compete for his fortune.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MovieDetails;
