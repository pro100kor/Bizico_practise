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
    const {
      users,
      userGitHub,
      userTwitter,
      userWebsite_url,
      userLocation
    } = this.state;
    let {
      userGitHubUrl,
      userTwitterUrl,
      userGitHubColor,
      userTwitterColor,
      userWebsite_urlColor,
      userLoc,
      userWebsiteIcon,
      userTwitterIcon,
      userGitHubIcon
    } = "";
    console.log(users);

    if (userLocation !== null && userLocation !== "") {
      userLoc = <span className="wordFrom">from</span>;
    }

    if (userWebsite_url !== null && userWebsite_url !== "") {
      userWebsite_urlColor = "green";
      userWebsiteIcon = <Icon color={userWebsite_urlColor} name="user" />;
    }

    if (userGitHub !== null) {
      userGitHubUrl = "https://github.com/" + userGitHub;
      userGitHubColor = "green";
      userGitHubIcon = <Icon color={userGitHubColor} name="github" />;
    }

    if (userTwitter !== null) {
      userTwitterUrl = "https://twitter.com/" + userTwitter;
      userTwitterColor = "green";
      userTwitterIcon = <Icon color={userTwitterColor} name="twitter" />;
    }

    let usersContent = (
      <Card align="center">
        <Image src={users.profile_image} wrapped ui={false} />
        <Card.Content>
          <Card.Header>
            {users.name} {userLoc} {users.location}
          </Card.Header>
          <Card.Meta>
            <span className="date">{users.joined_at}</span>
          </Card.Meta>
          <Card.Description>{users.summary}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div>
            <span>
              {userWebsiteIcon}
              <a href={users.website_url}> {users.website_url}</a>
            </span>
            <span>
              <p>
                {userGitHubIcon}
                <a href={userGitHubUrl}> {userGitHubUrl}</a>
              </p>
            </span>
            <span>
              <p>
                {userTwitterIcon}
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
        userWebsite_url: result.data.website_url,
        userLocation: result.data.location
      });
    });
  }
}

export default Users;
