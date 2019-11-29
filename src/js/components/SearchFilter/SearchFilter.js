import React, {Component} from "react";
import "./SearchFilter.css"

class SearchFilter extends Component{
    constructor(props) {
        super(props);
        this.onOptionChange = this.onOptionChange.bind(this);
    }

    onOptionChange( event) {
        this.props.setOption(event.target.value);
        const searchFetchMovies = this.props.searchFetchMovies;
        if (searchFetchMovies){
            this.props.searchParams.sortBy = event.target.value;
            searchFetchMovies(this.props.searchParams)
        }
    }

    render() {
        return (
            <div className="container">
                <label className="btn text-dark my-2 pl-0 type-search-title">{this.props.typeText}</label>
                <div className="btn-group" role="group">
                    <button type="button"
                            value={this.props.firstTypeValue}
                            onClick={event => this.onOptionChange(event)}
                            className="btn btn-secondary first-button">
                        {this.props.firstTypeText}
                    </button>
                    <button type="button"
                            value={this.props.secondTypeValue}
                            onClick={event => this.onOptionChange(event)}
                            className="btn btn-secondary second-button">
                        {this.props.secondTypeText}
                    </button>
                </div>
            </div>
        )
    }
}

export default SearchFilter;
