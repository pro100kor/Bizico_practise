import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import News from "./pages/News/News";
import Users from "./pages/Users/Users";
import Tags from "./components/Tags.js";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="ui fixed menu">{<Tags />}</div>
        <Route path="/users/:username" component={Users} />
        <Route exact path="/" component={News} />
        <Route exact path="/:tag" component={News} />
      </Router>
    );
  }
}

export default App;
