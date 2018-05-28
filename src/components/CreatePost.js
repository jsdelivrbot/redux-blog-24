import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <Link to="/">Retour à l'accueil</Link>
        <form method="POST" onSubmit={handleSubmit}>
          <label>
            Titre:
            <Field name="title" component="input" type="text" />
          </label>
          <label>
            Message:
            <Field name="body" component="input" type="text" />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

CreatePost = reduxForm({
  form: "createPost"
})(CreatePost);

export default CreatePost;
