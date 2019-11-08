import React from "react";

function Movie() {

    return (
        <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
                <img src="https://image.tmdb.org/t/p/w500/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg"
                     className="card-img-top bd-placeholder-img" alt="..."/>
                    <a href="#!"/>
                <div className="card-body ">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="card-title"><a>Ready Player One</a></h5>
                        <div className="card-text">2002</div>
                    </div>
                    <button type="button" className="btn pl-0">View</button>
                </div>
            </div>
        </div>

    )
}

export default Movie;
