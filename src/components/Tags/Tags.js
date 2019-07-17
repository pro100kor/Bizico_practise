import React, { Fragment } from "react";
import { getTags } from "../../common/api.js";
import { Link, withRouter } from "react-router-dom";
import "./Tags.css";
import MainImage from "../../assets/logo.svg";
import Cookies from "js-cookie";
import { Checkbox, Modal, Icon } from "semantic-ui-react";
import { SettingsContext } from "../SettingsContentProvider.js";

class Tags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      open: false
    };
  }
  static contextType = SettingsContext;
  show = () => this.setState({ open: true });
  close = () => this.setState({ open: false });
  slider = () => {
    this.context.changeMode();
  };
  render() {
    //console.log(this.context);
    if (this.props.location.pathname === "/auth/login") {
      return null;
    }
    return <div className="ui fixed menu">{this.getTagsList()}</div>;
  }

  logout() {
    Cookies.remove("user");
  }

  getTagsList() {
    const { tags, open } = this.state;
    const tagsList = tags.map(({ name }) => (
      <Link to={`/${name}`}>
        <span className="tags" key={name}>
          #{name}
        </span>
      </Link>
    ));

    return (
      <Fragment>
        <Link to="/">
          <img className="mainLogo" src={MainImage} alt="dev.to" />
        </Link>
        <Link to="/" className="logoutWord" onClick={this.logout}>
          Logout
        </Link>
        <Icon link color="black" onClick={this.show} name="settings" />
        <div className="centered">{tagsList}</div>
        <Modal size={"mini"} open={open} onClose={this.close}>
          <Modal.Header>
            day
            <Checkbox slider onChange={this.slider} className="slider" />
            night
            {this.context.mode}
          </Modal.Header>
        </Modal>
      </Fragment>
    );
  }

  componentDidMount() {
    getTags("https://dev.to/api/articles").then(result => {
      this.setState({
        isLoaded: true,
        tags: result.data
      });
    });
  }
}

export default withRouter(Tags);
