import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import News from "./pages/News/News";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/:tag" component={News} />
      </Router>
    );
  }
}

export default App;
