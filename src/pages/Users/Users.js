import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import { getUsers } from "../../common/api";
import "./Users.css";
class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      users: []
    };
  }
  render() {
    const { users, userGitHub, usertwitter, userWebsite_url } = this.state;
    let {
      userGitHubUrl,
      userTwitterUrl,
      userGitHubColor,
      userTwitterColor,
      userWebsite_urlColor
    } = "";
    console.log(users);

    if (userWebsite_url !== null && userWebsite_url !== "") {
      userWebsite_urlColor = "green";
    }

    if (userGitHub !== null) {
      userGitHubUrl = "https://github.com/" + userGitHub;
      userGitHubColor = "green";
    } else {
      userGitHubUrl = "Nope";
    }

    if (usertwitter !== null) {
      userTwitterUrl = "https://twitter.com/" + usertwitter;
      userTwitterColor = "green";
    } else {
      userTwitterUrl = "Nope";
    }

    let usersContent = (
      <Card align="center">
        <Image src={users.profile_image} wrapped ui={false} />
        <Card.Content>
          <Card.Header>
            {users.name} <span className="wordFrom">from</span> {users.location}
          </Card.Header>
          <Card.Meta>
            <span className="date">{users.joined_at}</span>
          </Card.Meta>
          <Card.Description>{users.summary}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div>
            <span>
              <Icon color={userWebsite_urlColor} name="user" />
              <a href={users.website_url}> {users.website_url}</a>
            </span>
            <span>
              <p>
                <Icon color={userGitHubColor} name="github" />
                <a href={userGitHubUrl}> {userGitHubUrl}</a>
              </p>
            </span>
            <span>
              <p>
                <Icon color={userTwitterColor} name="twitter" />
                <a href={userTwitterUrl}> {userTwitterUrl}</a>
              </p>
            </span>
          </div>
        </Card.Content>
      </Card>
    );
    return <div className="userscontant main container">{usersContent}</div>;
  }

  componentDidMount() {
    getUsers(this.props.match.params.username).then(result => {
      //console.log("users :", result);
      this.setState({
        isLoaded: true,
        users: result.data,
        userGitHub: result.data.github_username,
        userTwitter: result.data.twitter_username,
        userWebsite_url: result.data.website_url
      });
    });
  }
}

export default Users;
