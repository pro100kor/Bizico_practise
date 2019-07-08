import React, { Fragment } from "react";
import { getArticles, getTags } from "../../common/api.js";
import { Grid, Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
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
    const { isLoaded, articles, tags, users } = this.state;

    this.getTagsList();
    const list = articles.map(article => (
      <Grid className="news-card">
        <Grid.Column width={4}>
          <Link to={`/users/${article.user.username}`}>
            <Image
              className="circleImage"
              src={article.user.profile_image_90}
            />
            <p className="username">{article.user.name}</p>
          </Link>
          <h1 className="articleTitle">{article.title}</h1>
        </Grid.Column>

        <Grid.Column width={9}>
          <h4>{article.description}</h4>
          <Image src={article.cover_image} />
        </Grid.Column>

        <Grid.Column className="icons" width={3}>
          <span className="iconContainer">
            <Icon name="like" />
            <span className="likeImage">
              {article.positive_reactions_count}
            </span>
          </span>
          <br />
          <span className="iconContainer">
            <Icon name="comments" />
            <span className="likeImage">{article.comments_count}</span>
          </span>
        </Grid.Column>
      </Grid>
    ));
    return (
      <Fragment>
        <div className="ui fixed menu">{this.getTagsList()}</div>
        <div className="ui main container">{list}</div>
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
        articles: result.data
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
