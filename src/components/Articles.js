import React, { Fragment } from "react";
import "./Articles.css";
import { Grid, Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Articles extends React.Component {
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
    const { article } = this.props;
    this.getTagsList();
    const list = articles.map(article => <Articles />);

    return (
      <Grid className="news-card">
        <Grid.Column width={4}>
          <Image
            src={
              this.props.article.cover_image ||
              "https://react.semantic-ui.com/images/wireframe/image.png"
            }
          />
        </Grid.Column>

        <Grid.Column width={12}>
          <h1 className="articleTitle">{article.title}</h1>
          <Link to={`/users/${article.user.username}`}>
            <Grid className="user">
              <Grid.Column mobile={3} tablet={2} computer={1}>
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
    );
  }
}
export default Articles;
