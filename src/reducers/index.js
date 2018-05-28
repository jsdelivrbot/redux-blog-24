import { combineReducers } from "redux";
import PostsReducer from "./Posts-reducer";
import ActivePost from "./activePost-reducer";
import SearchPost from "./SearchPost-reducer";
import { reducer as FormReducer } from "redux-form";
const rootReducer = combineReducers({
  posts: PostsReducer,
  activePost: ActivePost,
  form: FormReducer,
  searchPost: SearchPost
});

export default rootReducer;
