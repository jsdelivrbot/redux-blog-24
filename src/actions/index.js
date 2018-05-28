import {
  FETCH_POSTS,
  ERROR_FETCH_POSTS,
  ACTIVE_POST,
  DELETE_FETCH_POSTS,
  CREATE_POST,
  SEARCH_POST
} from "./actions-type";
import axios from "axios";

export function fetch_posts() {
  return dispatch => {
    axios.get("http://localhost:3000/posts").then(res => {
      dispatch({ type: FETCH_POSTS, payload: res.data });
    });
  };
}

export function delete_fetch_posts(id) {
  return dispatch => {
    axios(`http://localhost:3000/posts/${id}`, {
      method: "DELETE"
    }).then(res => {
      dispatch({
        type: DELETE_FETCH_POSTS,
        payload: { id }
      });
    });
  };
}

export function active_post(id) {
  return dispatch => {
    axios.get(`http://localhost:3000/posts/${id}`).then(res => {
      dispatch({ type: ACTIVE_POST, payload: res.data });
    });
  };
}

export function create_post(post) {
  return dispatch => {
    axios
      .post("http://localhost:3000/posts/", {
        ...post
      })
      .then(res => dispatch({ type: CREATE_POST, payload: res.data }));
  };
}

export function autoComplete(value) {
  return dispatch => {
    axios.get("http://localhost:3000/posts/").then(res => {
      let result;
      let string = "";
      value = value.toLowerCase();
      for (let i = 0; i < value.length; i++) {
        string = string + value[i];
      }
      result = res.data.filter(post => {
        const lowerCase = post.title.toLowerCase();
        if (!lowerCase.includes(string)) {
          return false;
        }
        return true;
      });
      return dispatch({ type: SEARCH_POST, payload: result });
    });
  };
}
