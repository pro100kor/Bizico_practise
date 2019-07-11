import React, { Fragment } from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import { getUsers, getUsersNews } from "../../common/api";
import "./Users.css";
import Article from "../../components/Article.js";
class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      users: [],
      articles: []
    };
  }
  render() {
    const {
      users,
      userGitHub,
      userTwitter,
      userWebsiteUrl,
      userLocation,
      articles
    } = this.state;
    //console.log(users);

    let usersContent = (
      <Card align="center">
        <Image src={users.profile_image} wrapped ui={false} />
        <Card.Content>
          <Card.Header>
            {users.name}
            {userLocation && <span className="wordFrom"> from </span>}
            {users.location}
          </Card.Header>
          <Card.Meta>
            <span className="date">{users.joined_at}</span>
          </Card.Meta>
          <Card.Description>{users.summary}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div>
            <span>
              {userWebsiteUrl && (
                <Fragment>
                  <Icon color="green" name="user" />
                  <a href={users.website_url} target="blank">
                    {users.website_url}
                  </a>
                </Fragment>
              )}
            </span>
            <span>
              <p>
                {userGitHub && (
                  <Fragment>
                    <Icon color="green" name="github" />
                    <a href={"https://github.com/" + userGitHub} target="blank">
                      {"https://github.com/" + userGitHub}
                    </a>
                  </Fragment>
                )}
              </p>
            </span>
            <span>
              <p>
                {userTwitter && (
                  <Fragment>
                    <Icon color="green" name="twitter" />
                    <a
                      href={"https://twitter.com/" + userTwitter}
                      target="blank"
                    >
                      {"https://twitter.com/" + userTwitter}
                    </a>
                  </Fragment>
                )}
              </p>
            </span>
          </div>
        </Card.Content>
      </Card>
    );
    return (
      <Fragment>
        <div className="userscontant main container">{usersContent}</div>
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
      </Fragment>
    );
  }

  componentDidMount() {
    getUsers(this.props.match.params.username).then(result => {
      //console.log("users :", result);
      this.setState({
        isLoaded: true,
        users: result.data,
        userGitHub: result.data.github_username,
        userTwitter: result.data.twitter_username,
        userWebsiteUrl: result.data.website_url,
        userLocation: result.data.location
      });
    });

    getUsersNews(this.props.match.params.username).then(result => {
      console.log("usersNews :", result);
      this.setState({
        articles: result.data
      });
    });
  }
}

export default Users;
