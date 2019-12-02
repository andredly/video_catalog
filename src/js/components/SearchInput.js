import React, {Component} from "react";
import {Link} from "react-router-dom";

class SearchInput extends Component {

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
        let queryString = Object.keys(this.props.searchParams).map(key => key + '=' + encodeURIComponent(this.props.searchParams[key])).join('&');
        return (
            <div className="container">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" value={this.props.searchParams.search}
                           onChange={event => this.onSearchTextChange(event)}
                           placeholder="Enter movie title" aria-label="Enter movie title" name="search"/>
                    <div className="input-group-append">
                        <Link style={{textDecoration: 'none', color: 'black'}} to={{ pathname : "/search", search : `?${queryString}`}}>
                            <button className="btn btn-outline-secondary search-button"
                                     type="button">SEARCH
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        )

    }
}


export default SearchInput;
