import React from "react";

function SearchInput() {

    return (
        <div className="container">
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Enter movie title"
                       aria-label="Enter movie title"
                       aria-describedby="button-addon2"/>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2">SEARCH</button>
                </div>
            </div>
        </div>
    )
}

export default SearchInput;
