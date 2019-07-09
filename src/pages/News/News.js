import React, { Fragment } from "react";
import { getArticles, getTags } from "../../common/api.js";
import { Grid, Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./News.css";

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
    const { isLoaded, articles, tags, users, imageSrc } = this.state;

    this.getTagsList();
    const list = articles.map(article => (
      <Grid className="news-card">
        <Grid.Column width={4}>
          <Image
            src={
              article.cover_image ||
              "https://react.semantic-ui.com/images/wireframe/image.png"
            }
          />
        </Grid.Column>

        <Grid.Column width={12}>
          <h1 className="articleTitle">{article.title}</h1>
          <Link to={`/users/${article.user.username}`}>
            <Grid className="user">
              <Grid.Column mobile={3} tablet={3} computer={3}>
                <Image
                  className="circleImage"
                  src={article.user.profile_image_90}
                />
              </Grid.Column>
              <Grid.Column mobile={13} tablet={14} computer={15}>
                <span className="username">{article.user.name}</span>{" "}
              </Grid.Column>
            </Grid>
          </Link>

          <Grid className="user">
            <Grid.Column width={3}>
              <span className="iconContainer">
                <Icon name="like" />
                <span className="likeImage">
                  {article.positive_reactions_count}
                </span>
              </span>
            </Grid.Column>
            <Grid.Column width={3}>
              <span className="iconContainer">
                <Icon name="comments" />
                <span className="likeImage">{article.comments_count}</span>
              </span>
            </Grid.Column>
          </Grid>
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
