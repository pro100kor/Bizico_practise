import React, { Fragment } from "react";
import { getTags } from "../../common/api.js";
import { Link, withRouter } from "react-router-dom";
import "./Tags.css";
import MainImage from "../../assets/logo.svg";
import Cookies from "js-cookie";
import { Checkbox, Modal, Icon } from "semantic-ui-react";
import { SettingsContext } from "../SettingsContentProvider.js";
import classNames from "classnames";

class Tags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      open: false,
      toggleChecked: false
    };
  }
  static contextType = SettingsContext;

  show = () => {
    if (this.context.mode === "night") {
      this.setState({ toggleChecked: true });
    }

    if (this.context.mode === "day") {
      this.setState({ toggleChecked: false });
    }

    this.setState({ open: true });
  };
  close = () => this.setState({ open: false });
  toggleClick = () => {
    this.context.changeMode();
    this.setState(({ toggleChecked }) => ({ toggleChecked: !toggleChecked }));
  };
  render() {
    //console.log(this.context);
    const { mode } = this.context;
    const isNight = mode === "night";
    if (this.props.location.pathname === "/auth/login") {
      return null;
    }
    return (
      <div className={classNames("ui fixed menu", { darkHeader: isNight })}>
        {this.getTagsList()}
      </div>
    );
  }

  logout() {
    Cookies.remove("user");
  }

  getTagsList() {
    const { tags, open, toggleChecked } = this.state;
    const { mode } = this.context;
    const isNight = mode === "night";
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
          <img
            className={classNames("mainLogo", { dark: isNight })}
            src={MainImage}
            alt="dev.to"
          />
        </Link>
        <Link to="/" className="logoutWord" onClick={this.logout}>
          Logout
        </Link>
        <Icon
          link
          className={classNames("settings link icon", {
            settingsDark: isNight
          })}
          onClick={this.show}
          name="settings"
        />
        <div className="centered">{tagsList}</div>
        <Modal size={"mini"} open={open} onClose={this.close}>
          <Modal.Header>
            day
            <Checkbox
              toggle
              checked={toggleChecked}
              onChange={this.toggleClick}
              className="slider"
            />
            night
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
