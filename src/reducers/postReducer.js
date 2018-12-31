import * as actionTypes from "../actions/actionTypes";

const initialState = {
  fetching: false,
  postId: 0,
  post: [],
  error: null
};

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.API_CALL_REQUEST_ONE_POST:
      return { ...state, fetching: true, error: null, postId: action.postId };
    case actionTypes.API_CALL_SUCCESS_ONE_POST:
      return {
        ...state,
        fetching: false,
        post: action.post,
        postId: action.postId
      };
    case actionTypes.API_CALL_FAILURE_ONE_POST:
      return {
        ...state,
        fetching: false,
        post: null,
        error: action.error,
        postId: action.postId
      };
    default:
      return state;
  }
}
