import * as ActionTypes from "../actions/posts";
const initialState = {
  fetching: false,
  posts: [],
  error: null
};

export function reducerPosts(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.API_CALL_REQUEST:
      return { ...state, fetching: true, error: null };
    case ActionTypes.API_CALL_SUCCESS:
      return { ...state, fetching: false, posts: action.posts };
    case ActionTypes.API_CALL_FAILURE:
      return { ...state, fetching: false, posts: null, error: action.error };
    default:
      return state;
  }
}
