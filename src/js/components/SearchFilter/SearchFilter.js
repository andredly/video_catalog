import React from "react";
import "./SearchFilter.css"

function SearchFilter() {

    return (
        <div className="container" >
            <label className="btn text-dark my-2 pl-0">SEARCH BY</label>
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-secondary">TITLE</button>
                <button type="button" className="btn btn-secondary">GENGRE</button>
            </div>
        </div>
    )
}

export default SearchFilter;
