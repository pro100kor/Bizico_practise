import React from "react";
import { Route, Redirect } from "react-router-dom";
import Cookies from "js-cookie";

class PrivateRoute extends React.Component {
  render() {
    const { component: Component, ...rest } = this.props;
    console.log(Cookies.get());

    return (
      <Route
        {...rest}
        render={props =>
          false ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/auth/login"
              }}
            />
          )
        }
      />
    );
  }
}

export default PrivateRoute;
