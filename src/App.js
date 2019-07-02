import React from "react";
import "./App.css";
import { getArticles } from "./common/api.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      articles: [{}]
    };
  }

  render() {
    const { isLoaded, articles } = this.state;
    return <div> {!isLoaded ? "Loading" : articles[0].title} </div>;
  }

  componentDidMount() {
    getArticles("https://dev.to/api/articles").then(
      result => {
        this.setState({
          isLoaded: true,
          articles: result.data
        });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      error => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    );
  }
}

export default App;
