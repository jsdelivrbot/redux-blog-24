import React, { Component } from "react";
import { fetch_posts, delete_fetch_posts } from "../actions/index";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }
  componentWillMount() {
    this.props.fetch_posts();
  }
  deletePost(post) {
    this.setState({
      isLoading: true
    });
    this.props.delete_fetch_posts(post.id);
    setInterval(() => {
      this.setState({
        isLoading: false
      });
    }, 800);
  }
  renderLengthPosts(posts) {
    if (posts) {
      return <h1>Total de posts : {posts.length}</h1>;
    }
  }
  render() {
    const { posts, delete_fetch_posts } = this.props;
    const { isLoading } = this.state;
    if (!posts || isLoading) {
      return (
        <div>
          <h1>LOADING....</h1>
        </div>
      );
    }
    return (
      <div>
        {posts
          ? posts.map(post => {
              return (
                <div key={post.id}>
                  <Link to={`/post/${post.id}`}>{post.title}</Link>
                  <button onClick={() => this.deletePost(post)}>
                    Supprimer
                  </button>
                </div>
              );
            })
          : null}
        {this.renderLengthPosts(posts)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetch_posts, delete_fetch_posts }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Posts));
