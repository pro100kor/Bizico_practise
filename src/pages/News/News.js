import React, { Fragment } from "react";
import { getArticles, getTags } from "../../common/api.js";
import { Grid, Icon, Image } from "semantic-ui-react";

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
    const { isLoaded, articles, tags } = this.state;
    console.log("articles в рендері", articles);
    console.log("tags в рендері", tags);
    this.getTagsList();
    const list = articles.map(article => (
      <Grid className="news-card">
        <Grid.Column width={4}>
          <Image src={article.cover_image} />
        </Grid.Column>
        <Grid.Column width={9}>
          <h1>{article.title}</h1>
          <h4>{article.description}</h4>
          <Image className="circleImage" src={article.user.profile_image_90} />
          <p>{article.user.name}</p>
        </Grid.Column>
        <Grid.Column width={3}>
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
    console.log("this.getTagList", tags);
    const tagsList = tags.map(({ name }) => (
      <span className="tags" key={name}>
        #{name}
      </span>
    ));
    return tagsList;
  }

  componentDidMount() {
    console.log(this.props);
    getArticles(this.props.match.params.tag).then(result => {
      console.log("Після getArticles", result);
      this.setState({
        isLoaded: true,
        articles: result.data
      });
    });

    getTags("https://dev.to/api/articles").then(result => {
      console.log("Після getTags", result);
      this.setState({
        isLoaded: true,
        tags: result.data
      });
      console.log("В самому кінці", result);
    });
  }
}
export default News;
