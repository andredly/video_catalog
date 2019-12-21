import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Button, Input, InputGroup, InputGroupAddon} from 'reactstrap';

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
  }

  onSearchTextChange(event) {
    this.props.setSearchText(event.target.value);
  }

  render() {
    // this.props.searchParams.sortOrder = "desc";
    const queryString = Object.keys(this.props.searchParams)
      .map((key) => `${key}=${encodeURIComponent(this.props.searchParams[key])}`)
      .join('&');
    return (
            <div className="container">
                <InputGroup>
                    <Input
                        type="text"value={this.props.searchParams.search}
                        onChange={(event) => this.onSearchTextChange(event)}
                        placeholder="Enter movie title" aria-label="Enter movie title" name="search"
                    />
                    <InputGroupAddon addonType="append">
                        <Link style={{ textDecoration: 'none', color: 'black' }}
                              to={{ pathname: '/search', search: `?${queryString}` }}>
                            <Button color="secondary" className="search-button">SEARCH
                            </Button>
                        </Link>
                    </InputGroupAddon>
                </InputGroup>
            </div>
    );
  }
}

export default SearchInput;
