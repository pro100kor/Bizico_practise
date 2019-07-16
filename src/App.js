import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import News from "./pages/News/News";
import Users from "./pages/Users/Users";
import Tags from "./components/Tags.js";
import FullNews from "./components/FullNews.js";
import Login from "./components/Login.js";
import PrivateRoute from "./components/PrivateRouter";
class App extends React.Component {
  render() {
    return (
      <Router>
        <Tags />
        <Route path="/users/:username" component={Users} />
        <Route exact path="/" component={News} />
        <Route exact path="/:tag" component={News} />
        <Route path="/articles/:id" component={FullNews} />
        <Route path="/auth/login" component={Login} />
        <PrivateRoute path="/test/test" component={News} />
      </Router>
    );
  }
}

export default App;
