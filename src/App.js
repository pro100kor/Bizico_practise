import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import News from "./pages/News/News";
import Users from "./pages/Users/Users";
import Tags from "./components/Tags/Tags.js";
import FullNews from "./components/FullNews/FullNews.js";
import Login from "./components/Login/Login.js";
import PrivateRoute from "./components/PrivateRouter";
class App extends React.Component {
  render() {
    return (
      <Router>
        <Tags />
        <PrivateRoute path="/users/:username" component={Users} />
        <PrivateRoute exact path="/" component={News} />
        <PrivateRoute exact path="/:tag" component={News} />
        <PrivateRoute path="/articles/:id" component={FullNews} />
        <Route path="/auth/login" component={Login} />
      </Router>
    );
  }
}

export default App;
