import React from "react";
import { getTags } from "../common/api.js";
import { Link } from "react-router-dom";
import "./Tags.css";

class Tags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: []
    };
  }

  render() {
    return this.getTagsList();
  }

  getTagsList() {
    const { tags } = this.state;
    const tagsList = tags.map(({ name }) => (
      <Link to={`/${name}`}>
        <span className="tags" key={name}>
          #{name}
        </span>
      </Link>
    ));
    return tagsList;
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

export default Tags;
