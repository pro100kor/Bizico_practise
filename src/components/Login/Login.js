import "./Login.css";
import React, { Fragment } from "react";
import { Form, Button, Message } from "semantic-ui-react";
import Cookies from "js-cookie";
import { users } from "../../common/auth.js";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "null",
      password: "null",
      error: false
    };
  }
  setLogin = e => {
    this.setState({ login: e.target.value });
  };

  setPassword = e => {
    this.setState({ password: e.target.value });
  };

  login = () => {
    if (
      users.find(
        user =>
          user.name === this.state.login &&
          user.password === this.state.password
      )
    ) {
      Cookies.set("user", `${this.state.login}.${this.state.password}`);
      this.props.history.push("/");
    } else {
      console.log("Невірний логін або пароль");
      this.setState({
        error: true
      });
    }
  };

  render() {
    return (
      <Fragment>
        {this.state.error && (
          <Message error header="Упсики" content="Невірний логін або пароль." />
        )}
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
