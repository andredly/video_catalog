import React, { Component } from "react";

class SearchInput extends Component{

    constructor(props) {
        super(props);
        this.onSearchTextChange = this.onSearchTextChange.bind(this);
        this.fetchMoviesOnSearchButtonClick = this.fetchMoviesOnSearchButtonClick.bind(this);
    }

    onSearchTextChange(event) {
        this.props.setSearchText(event.target.value);
    }

    fetchMoviesOnSearchButtonClick() {
        this.props.searchFetchMovies(this.props.searchParams)
    }

    render() {
        return (
            <div className="container">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" value={this.props.searchParams.search} onChange={event => this.onSearchTextChange(event)}
                           placeholder="Enter movie title"
                           aria-label="Enter movie title"/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" onClick={() => this.fetchMoviesOnSearchButtonClick()} type="button">SEARCH</button>
                    </div>
                </div>
            </div>
        )

    }
}

export default SearchInput;
