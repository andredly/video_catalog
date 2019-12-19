import React, { Component } from 'react';
import './SearchFilter.css';

class SearchFilter extends Component {
  constructor(props) {
    super(props);
    this.onOptionChange = this.onOptionChange.bind(this);
    this.state = {
      isFirstButtonActive: true,
    };
  }

  onOptionChange(event) {
    this.props.setOption(event.target.value);
    const { classList } = event.target;
    if (classList.contains('disabled')) {
      this.state.isFirstButtonActive = !this.state.isFirstButtonActive;
    }
  }

  render() {
    return (
            <div className="container">
                <label className="btn text-dark my-2 pl-0 type-search-title">{this.props.typeText}</label>
                <div className="btn-group" role="group">
                    <button type="button"
                            value={this.props.firstTypeValue}
                            onClick={(event) => this.onOptionChange(event)}
                            className={`btn btn-secondary first-button
                             ${this.state.isFirstButtonActive ? 'active' : 'disabled'}`}>
                        {this.props.firstTypeText}
                    </button>
                    <button type="button"
                            value={this.props.secondTypeValue}
                            onClick={(event) => this.onOptionChange(event)}
                            className={`btn btn-secondary second-button
                             ${this.state.isFirstButtonActive ? 'disabled' : 'active'}`}>
                        {this.props.secondTypeText}
                    </button>
                </div>
            </div>
    );
  }
}

export default SearchFilter;
