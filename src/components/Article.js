import React from "react";
import "./Article.css";
import { Grid, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import EmptyImage from "../assets/image.png";
import { getTagsOfNews } from "../common/api.js";

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      tagList: []
    };
  }

  render() {
    const { title, coverImage, username, profile_image_90, name } = this.props;

    return (
      <Grid className="news-card">
        <Grid.Column width={6}>
          <Image src={coverImage || EmptyImage} fluid />
        </Grid.Column>

        <Grid.Column width={10}>
          <span className="tagsList">{this.getTagsOfNews()}</span>
          <h1 className="articleTitle">{title}</h1>
          <Link to={`/users/${username}`}>
            <Image className="circleImage" src={profile_image_90} />
            <span className="username">{name.toUpperCase()}</span>{" "}
          </Link>
        </Grid.Column>
      </Grid>
    );
  }

  getTagsOfNews() {
    const { articles } = this.state;
    console.log(articles);
    //const TagsOfNewsList = articles.tag_list.map();
  }

  componentDidMount() {
    getTagsOfNews().then(result => {
      //console.log(result);
      this.setState({
        isLoaded: true,
        articles: result.data
      });
    });
  }
}
export default Article;
