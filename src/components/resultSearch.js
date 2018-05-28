import React, { Component } from "react";
import { Link } from "react-router-dom";

class resultSearch extends Component {
  render() {
    const { post } = this.props;
    return (
      <Link to={`/post/${post.id}`} key={post.id}>
        {post.title}
      </Link>
    );
  }
}

export default resultSearch;
