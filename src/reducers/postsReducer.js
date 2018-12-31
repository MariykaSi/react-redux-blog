import * as actionTypes from "../actions/posts";

const initialState = {
  fetching: false,
  posts: [],
  error: null
};

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.API_CALL_REQUEST:
      return { ...state, fetching: true, error: null };
    case actionTypes.API_CALL_SUCCESS:
      return { ...state, fetching: false, posts: action.posts };
    case actionTypes.API_CALL_FAILURE:
      return { ...state, fetching: false, posts: null, error: action.error };
    default:
      return state;
  }
}
