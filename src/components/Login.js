import "./Login.css";
import React, { Fragment } from "react";
import { Form, Button } from "semantic-ui-react";
import Cookies from "js-cookie";
import { users } from "../common/auth.js";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "null",
      password: "null"
    };
  }

  setLogin = e => {
    this.setState({ login: e.target.value });
  };

  setPassword = e => {
    this.setState({ password: e.target.value });
  };

  login = () => {
    console.log(
      "Login : ",
      this.state.login,
      "Password : ",
      this.state.password
    );
    console.log(users);
    if (
      users.find(
        user =>
          user.name === this.state.login &&
          user.password === this.state.password
      )
    ) {
      Cookies.set("user", `${this.state.login}.${this.state.password}`);
      this.props.history.push("/");
    }
  };

  render() {
    return (
      <Fragment className="login">
        <Form>
          <Form.Field>
            <label>Login</label>
            <input onChange={this.setLogin} placeholder="Login" />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              type="password"
              onChange={this.setPassword}
              placeholder="Password"
            />
          </Form.Field>
          <Button onClick={this.login} type="button">
            Login
          </Button>
        </Form>
      </Fragment>
    );
  }
}

export default Login;
