import React, { Component } from "react";

class SearchForm extends Component {

  constructor() {
    super();
    this.state = {
      searchText: ""
    }
  }

  onSearchChange = event => {
    this.setState({ searchText: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSearch(this.state.searchText);
    event.currentTarget.reset();
  }

  render() {
    return (
      <form className="search-form" onSubmit={ this.handleSubmit }>
        <label className="is-hidden" htmlFor="search">Search</label>
        <input type="search" onChange={ this.onSearchChange } name="search" />
        <button type="submit" id="submit" className="search-button">Search</button>
      </form>
    );
  }
}

export default SearchForm;
