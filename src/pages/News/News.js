import React from "react";
import { getArticles } from "../../common/api.js";
import "./News.css";
import Article from "../../components/Article/Article.js";
import InfiniteScroll from "react-infinite-scroller";
import { Loader } from "semantic-ui-react";
import classNames from "classnames";
import { SettingsContext } from "../../components/SettingsContentProvider.js";

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
  static contextType = SettingsContext;
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
    const loader = <Loader active inline="centered" />;
    const { mode } = this.context;
    const isNight = mode === "night";
    return (
      <InfiniteScroll
        pageStart={0}
        loadMore={this.loadItems}
        hasMore={this.state.hasMoreItems}
        loader={loader}
      >
        <div className={classNames("ui main container", { dark: isNight })}>
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
