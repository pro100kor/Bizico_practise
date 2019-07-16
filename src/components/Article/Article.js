import React from "react";
import "./Article.css";
import { Grid, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import EmptyImage from "../../assets/image.png";

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      tagList: [],
      newsArticleId: []
    };
  }

  render() {
    const {
      title,
      coverImage,
      username,
      profile_image_90,
      name,
      tagList,
      newsArticleId
    } = this.props;

    return (
      <Grid className="news-card">
        <Grid.Column width={6}>
          <Link to={`/articles/${newsArticleId}`}>
            <Image src={coverImage || EmptyImage} fluid />
          </Link>
        </Grid.Column>

        <Grid.Column width={10}>
          <span className="tagsList">
            {tagList.map(tag => (
              <Link to={`/${tag}`}> #{tag}</Link>
            ))}
          </span>
          <Link to={`/articles/${newsArticleId}`}>
            <h1 className="articleTitle">{title}</h1>
          </Link>
          <Link to={`/users/${username}`}>
            <Image className="circleImage" src={profile_image_90} />
            <span className="username">{name.toUpperCase()}</span>{" "}
          </Link>
        </Grid.Column>
      </Grid>
    );
  }
}
export default Article;
