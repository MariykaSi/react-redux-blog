import { combineReducers } from "redux";

import postsReducer from "./postsReducer";
import postReducer from "./postReducer";
import usersReducer from "./usersReducer";
import commentsReducer from "./commentsReducer";

export default combineReducers({
  postsReducer,
  postReducer,
  usersReducer,
  commentsReducer
});
