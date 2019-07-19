import React, { Fragment } from "react";
import { getNewsArticle } from "../../common/api.js";
import "./FullNews.scss";
import { SettingsContext } from "../SettingsContentProvider.js";
import classNames from "classnames";

class FullNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      article: []
    };
  }
  static contextType = SettingsContext;

  render() {
    const { article } = this.state;
    const { mode } = this.context;
    const isNight = mode === "night";

    return (
      <Fragment>
        <div className="fullNewsImageAndTitle">
          <img alt="" src={article.cover_image} />
          <span className="title">
            <p>{article.title}</p>
          </span>
        </div>
        <div
          className={classNames("fullNewsDiv", { dark: isNight })}
          dangerouslySetInnerHTML={{ __html: article.body_html }}
        />
      </Fragment>
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
