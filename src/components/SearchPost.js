import React, { Component } from "react";
import { Link } from "react-router-dom";
import { autoComplete } from "./../actions/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ResultSearch from "./resultSearch";
class SearchPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      autoComplete: false
    };
  }
  handleSubmit(pEvt) {
    pEvt.preventDefault();
  }
  handleChange(pEvt) {
    if (pEvt.target.value !== "") {
      this.setState({
        autoComplete: true
      });
      this.props.autoComplete(pEvt.target.value);
    } else {
      this.setState({
        autoComplete: false
      });
    }
  }
  render() {
    const { autoComplete } = this.state;
    const { search } = this.props;
    return (
      <div className="searchPost-container">
        <h1>Search Component</h1>
        <form onSubmit={pEvt => this.handleSubmit(pEvt)}>
          <input
            onChange={pEvt => this.handleChange(pEvt)}
            type="search"
            placeholder="Rechercher un post"
          />
          {autoComplete ? (
            <div className="searchPost">
              {search
                ? search.map(post => {
                    return (
                      <div key={post.id}>
                        <ResultSearch post={post} />
                      </div>
                    );
                  })
                : null}
            </div>
          ) : null}
          <button type="submit">Rechercher</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    search: state.searchPost
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ autoComplete }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPost);
