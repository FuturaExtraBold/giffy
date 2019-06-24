import React, { Component } from "react";
import axios from "axios";

import GifList from "./GifList";
import SearchForm from "./SearchForm";

class App extends Component {

  constructor() {
    super();
    this.state = {
      gifs: []
    };
  }

  componentDidMount() {
    console.log("App componentDidMount");

  }

  performSearch = (query) => {
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${ query }&api_key=dc6zaTOxFJmzC`)
      .then(response => {
        this.setState({
          gifs: response.data.data
        });
      })
      .catch(error => {
        console.log("An error occurred fetching data:", error);
      });
  }

  render() {
    console.log("state.gifs:", this.state.gifs);
    return (
      <div className="app">
        <section className="search">
          <SearchForm onSearch={ this.performSearch } />
        </section>
        <section className="results">
          <GifList data={ this.state.gifs } />
        </section>
      </div>
    );
  }
}

export default App;
