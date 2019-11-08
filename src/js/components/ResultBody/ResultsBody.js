import React from "react";
import Movie from "../Movie/Movie";
import "./ResultsBody.css"

function ResultsBody() {

    return (
        <div className="album jumbotron mb-0">
            <div className="container">
                <div className="row">
                    <Movie/>
                    <Movie/>
                    <Movie/>
                    <Movie/>
                    <Movie/>
                    <Movie/>
                    <Movie/>
                </div>
            </div>
        </div>
    )
}

export default ResultsBody;
