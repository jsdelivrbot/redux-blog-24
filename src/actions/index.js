import {
  FETCH_POSTS,
  ERROR_FETCH_POSTS,
  ACTIVE_POST,
  DELETE_FETCH_POSTS
} from "./actions-type";
import axios from "axios";

export function fetch_posts() {
  return dispatch => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then(res => {
        dispatch({ type: FETCH_POSTS, payload: res.data });
      });
  };
}

export function delete_fetch_posts(id) {
  return dispatch => {
    axios(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE"
    }).then(res => {
      dispatch({ type: DELETE_FETCH_POSTS, payload: {
        id,
        loading: true
      } });
    });
  };
}

export function active_post(id) {
  return dispatch => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => {
      dispatch({ type: ACTIVE_POST, payload: res.data });
    });
  };
}
