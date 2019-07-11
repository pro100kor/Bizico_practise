import React, { Fragment } from "react";
import { getNewsArticle } from "./../common/api.js";
import "./FullNews.scss";

class FullNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      article: []
    };
  }

  render() {
    const { article } = this.state;

    return (
      <div
        className="fullNewsDiv"
        dangerouslySetInnerHTML={{ __html: article.body_html }}
      />
    );
  }

  componentDidMount() {
    getNewsArticle(this.props.match.params.id).then(result => {
      console.log("FullNews: ", result);
      this.setState({
        article: result.data
      });
    });
  }
}

export default FullNews;
