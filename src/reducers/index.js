import { combineReducers } from "redux";
import PostsReducer from "./Posts-reducer";
import ActivePost from "./activePost-reducer";
const rootReducer = combineReducers({
  posts: PostsReducer,
  activePost: ActivePost
});

export default rootReducer;
