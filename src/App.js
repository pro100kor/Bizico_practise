import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import News from "./pages/News/News";
import Users from "./pages/Users/Users";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/users/:username" component={Users} />
        <Route exact path="/" component={News} />
        <Route exact path="/:tag" component={News} />
      </Router>
    );
  }
}

export default App;
