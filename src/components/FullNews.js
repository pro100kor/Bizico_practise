import React from "react";
import getNewsArticle from "./../common/api.js";

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
    return <div>1234</div>;
  }

  componentDidMount() {
    getNewsArticle(134937).then(result => {
      console.log("FullNews: ", result);
      this.setState({
        article: result.data
      });
    });
  }
}

export default FullNews;
