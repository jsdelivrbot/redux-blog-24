import React from "react";
import CreatePost from "./CreatePost";
import uid from "uid";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { create_post } from "../actions/index";
import { Redirect } from "react-router-dom";

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  submit = values => {
    const post = {
      userId: "Jonathan",
      id: uid(),
      ...values
    };
    this.props.create_post(post);
    this.props.history.push("/");
  };
  render() {
    return <CreatePost onSubmit={this.submit.bind(this)} />;
  }
}

function mapToDispatchProps(dispatch) {
  return bindActionCreators({ create_post }, dispatch);
}

export default connect(null, mapToDispatchProps)(FormContainer);
