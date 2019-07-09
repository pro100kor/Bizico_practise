import React, { Fragment } from "react";
import { getArticles, getTags } from "../../common/api.js";
import { Link } from "react-router-dom";
import "./News.css";
import Article from "../../components/Article.js";
import Tags from "../../components/Article.js";

class News extends React.Component {
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
    const { articles } = this.state;

    return (
      <Fragment>
        <div className="ui fixed menu">{<Tags />}</div>
        <div className="ui main container">
          {articles.map(article => (
            <Article
              key={article.title}
              title={article.title}
              cover_image={article.cover_image}
              username={article.user.username}
              profile_image_90={article.user.profile_image_90}
              name={article.user.name}
              positive_reactions_count={article.positive_reactions_count}
              comments_count={article.comments_count}
            />
          ))}
        </div>
      </Fragment>
    );
  }

  getTagsList() {
    const { tags } = this.state;
    const tagsList = tags.map(({ name }) => (
      <Link to={`/${name}`}>
        <span className="tags" key={name}>
          #{name}
        </span>
      </Link>
    ));
    return tagsList;
  }

  componentDidUpdate(preProps) {
    if (preProps.match.params.tag !== this.props.match.params.tag) {
      getArticles(this.props.match.params.tag).then(result => {
        this.setState({
          isLoaded: true,
          articles: result.data
        });
      });
    }
  }
  componentDidMount() {
    getArticles(this.props.match.params.tag).then(result => {
      //console.log(result);
      this.setState({
        isLoaded: true,
        articles: result.data,
        imageSrc: result.data.cover_image
      });
    });
    getTags("https://dev.to/api/articles").then(result => {
      this.setState({
        isLoaded: true,
        tags: result.data
      });
    });
  }
}
export default News;
