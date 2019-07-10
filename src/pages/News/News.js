import React from "react";
import { getArticles, getNewsArticle } from "../../common/api.js";
import "./News.css";
import Article from "../../components/Article.js";

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
      <div className="ui main container">
        {articles.map(article => (
          <Article
            title={article.title}
            coverImage={article.cover_image}
            username={article.user.username}
            profile_image_90={article.user.profile_image_90}
            name={article.user.name}
            tagList={article.tag_list}
            newsArticleId={article.id}
          />
        ))}
      </div>
    );
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
  }
}
export default News;
