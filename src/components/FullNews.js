import React from "react";
import getNewsArticle from "../common/api.js";

class FullNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      articles: [],
      tags: []
    };
  }

  render() {
    return;
  }

  componentDidMount() {
    getNewsArticle().then(result => {
      console.log(result);
      this.setState({
        article: result.data
      });
    });
  }
}

export default FullNews;
