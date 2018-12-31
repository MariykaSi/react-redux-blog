import * as actionTypes from "../actions/actionTypes";

const initialState = {
  fetching: false,
  postId: 0,
  comments: [],
  error: null
};

export default function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.API_CALL_REQUEST_COMMENTS:
      return { ...state, fetching: true, error: null, postId: action.postId };
    case actionTypes.API_CALL_SUCCESS_COMMENTS:
      return {
        ...state,
        fetching: false,
        comments: action.comments,
        postId: action.postId
      };
    case actionTypes.API_CALL_FAILURE_COMMENTS:
      return {
        ...state,
        fetching: false,
        comments: null,
        error: action.error
      };
    default:
      return state;
  }
}
