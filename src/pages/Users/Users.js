import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import { getUsers } from "../../common/api";
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
    const { users } = this.state;
    let usersContent = (
      <Card align="center">
        <Image src={users.profile_image} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{users.name}</Card.Header>
          <Card.Meta>
            <span className="date">{users.joined_at}</span>
          </Card.Meta>
          <Card.Description>{users.summary}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            {users.website_url}
          </a>
        </Card.Content>
      </Card>
    );
    return <div className="userscontant main container">{usersContent}</div>;
  }

  componentDidMount() {
    getUsers(this.props.match.params.username).then(result => {
      this.setState({
        isLoaded: true,
        users: result.data
      });
    });
  }
}

export default Users;
