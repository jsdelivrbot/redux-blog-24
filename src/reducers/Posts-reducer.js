import {
  FETCH_POSTS,
  ERROR_FETCH_POSTS,
  DELETE_FETCH_POSTS
} from "../actions/actions-type";

export default (state = null, actions) => {
  switch (actions.type) {
    case FETCH_POSTS:
      return actions.payload;
    case ERROR_FETCH_POSTS:
      return actions.error;
    case DELETE_FETCH_POSTS:
      return state.filter(post => {
        if (post.id === actions.payload.id) {
          return false;
        } else {
          return true;
        }
      });
    default:
      return state;
  }
};
