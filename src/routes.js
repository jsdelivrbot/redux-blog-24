import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Posts from "./components/Posts";
import Post from "./components/Post";
import FormContainer from "./components/formContainer";
import RouteNotFound from "./components/RouteNotFound";
import SearchPost from "./components/SearchPost";
class Routes extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Posts} />
            <Route path="/createpost" component={FormContainer} />
            <Route path="/post/:id" component={Post} />
            <Route path="/search" component={SearchPost} />
            <Route path="*" component={RouteNotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Routes;
