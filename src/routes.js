import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Posts from "./components/Posts";
import Post from "./components/Post";
import RouteNotFound from "./components/RouteNotFound";
class Routes extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Posts} />
            <Route path="/post/:id" component={Post} />
            <Route path="*" component={RouteNotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Routes;
