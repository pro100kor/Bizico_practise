import React from "react";
import { Grid, Icon, Image } from "semantic-ui-react";
import "./App.css";
import { getArticles } from "./common/api.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      articles: []
    };
  }

  render() {
    const { isLoaded, articles } = this.state;
    console.log(articles);
    const list = articles.map(article => (
      <Grid className="news-card">
        <Grid.Column width={4}>
          <Image src={article.cover_image} />
        </Grid.Column>
        <Grid.Column width={9}>
          <h1>{article.title}</h1>
          <h4>{article.description}</h4>
          <Image src={article.user.profile_image_90} />
          <p>{article.user.name}</p>
        </Grid.Column>
        <Grid.Column width={3}>
          <span className="iconContainer">
            <Icon name="like" />
            <span className="likeImage">
              {article.positive_reactions_count}
            </span>
          </span>
          <span className="iconContainer">
            <Icon name="comments" />
            <span className="likeImage">{article.comments_count}</span>
          </span>
        </Grid.Column>
      </Grid>
    ));

    return list;
  }

  componentDidMount() {
    getArticles("https://dev.to/api/articles").then(result => {
      this.setState({
        isLoaded: true,
        articles: result.data
      });
    });
  }
}

export default App;
