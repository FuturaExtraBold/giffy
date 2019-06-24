import React, { Component } from "react";
import axios from "axios";

class App extends Component {

  constructor() {
    super();
    this.state = {
      gifs: []
    };
  }

  componentDidMount() {
    console.log("App componentDidMount");
    axios.get("http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC")
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
      <h1>Hello, world!</h1>
    );
  }
}

export default App;
