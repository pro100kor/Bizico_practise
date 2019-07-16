import React from "react";
import { getArticles } from "../../common/api.js";
import "./News.css";
import Article from "../../components/Article/Article.js";
import InfiniteScroll from "react-infinite-scroller";
import { Segment, Loader } from "semantic-ui-react";

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      articles: [],
      tags: [],
      hasMoreItems: true
    };
  }

  loadItems = page => {
    //console.log(page);
    getArticles(this.props.match.params.tag, page).then(result => {
      //console.log(result);
      this.setState({
        isLoaded: true,
        articles: [...this.state.articles, ...result.data]
      });
    });
  };

  render() {
    const { articles } = this.state;
    const loader = (
      <Segment className="loader">
        <Loader size="massive" active>
          Loading
        </Loader>
      </Segment>
    );
    return (
      <InfiniteScroll
        pageStart={0}
        loadMore={this.loadItems}
        hasMore={this.state.hasMoreItems}
        loader={loader}
      >
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
      </InfiniteScroll>
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
