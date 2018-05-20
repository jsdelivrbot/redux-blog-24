import React, { Component } from "react";
import { active_post } from "../actions/index";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Post extends Component {
  componentWillMount() {
    this.props.active_post(this.props.match.params.id);
  }
  renderPost(post) {
    if (post) {
      return (
        <div>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      );
    }
  }
  render() {
    const { post } = this.props;
    return (
      <div>
        <Link to="/">Retour a l'accueil</Link>
        {this.renderPost(post)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    post: state.activePost
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ active_post }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
