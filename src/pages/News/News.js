import React from "react";
import { getArticles } from "../../common/api.js";
import "./News.css";
import Article from "../../components/Article.js";
import InfiniteScroll from "react-infinite-scroller";
import { Segment, Dimmer, Image, Loader } from "semantic-ui-react";
import whiteLoadingImage from "../../assets/shortParagraphWhite.png";
import grayLoadingImage from "../../assets/shortParagraphGray.png";
import darkLoadingImage from "../../assets/shortParagraphDark.png";

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
      <Segment>
        <Dimmer active>
          <Loader size="massive">Loading</Loader>
        </Dimmer>

        <Image src={whiteLoadingImage} />
        <Image src={grayLoadingImage} />
        <Image src={darkLoadingImage} />
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
