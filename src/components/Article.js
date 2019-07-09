import React from "react";
import "./Article.css";
import { Grid, Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Article extends React.Component {
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
    const {
      title,
      cover_image,
      username,
      profile_image_90,
      name,
      positive_reactions_count,
      comments_count
    } = this.props;

    return (
      <Grid className="news-card">
        <Grid.Column width={6}>
          <Image
            src={
              cover_image ||
              "https://react.semantic-ui.com/images/wireframe/image.png"
            }
            fluid
          />
        </Grid.Column>

        <Grid.Column width={10}>
          <h1 className="articleTitle">{title}</h1>
          <Link to={`/users/${username}`}>
            <Grid className="user">
              <Grid.Column mobile={3} tablet={3} computer={2}>
                <Image className="circleImage" src={profile_image_90} />
              </Grid.Column>
              <Grid.Column mobile={13} tablet={13} computer={14}>
                <span className="username">{name}</span>{" "}
              </Grid.Column>
            </Grid>
          </Link>

          <Grid className="user">
            <Grid.Column width={3}>
              <span className="iconContainer">
                <Icon name="like" />
                <span className="likeImage">{positive_reactions_count}</span>
              </span>
            </Grid.Column>
            <Grid.Column width={3}>
              <span className="iconContainer">
                <Icon name="comments" />
                <span className="likeImage">{comments_count}</span>
              </span>
            </Grid.Column>
          </Grid>
        </Grid.Column>
      </Grid>
    );
  }
}
export default Article;
