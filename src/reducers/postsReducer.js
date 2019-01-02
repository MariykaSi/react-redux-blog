import Paginator from "paginator";

import * as actionTypes from "../actions/actionTypes";

const initialState = {
  fetching: false,
  posts: [],
  error: null,
  paginatedPosts: null,
  paginatorData: null,
  pages: [1, 2, 3, 4, 5],
  postsCount: 9
};

let paginator = new Paginator(initialState.postsCount, 5);

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.API_CALL_REQUEST:
      return { ...state, fetching: true, error: null };
    case actionTypes.API_CALL_SUCCESS:
      let paginatorData = paginator.build(action.posts.length, 1);
      let paginatedPosts = action.posts.slice(
        paginatorData.first_result,
        paginatorData.last_result + 1
      );
      return {
        ...state,
        fetching: false,
        posts: action.posts,
        paginatedPosts,
        paginatorData
      };
    case actionTypes.API_CALL_FAILURE:
      return { ...state, fetching: false, posts: null, error: action.error };
    case actionTypes.SET_PAGINATION:
      let paginatorDataUpdate = paginator.build(
        state.posts.length,
        action.currentPage
      );
      let pagesUpdate = [
        ...Array(
          paginatorDataUpdate.last_page + 1 - paginatorDataUpdate.first_page
        ).keys()
      ].map(index => paginatorDataUpdate.first_page + index);
      let paginatedPostsUpdate = state.posts.slice(
        paginatorDataUpdate.first_result,
        paginatorDataUpdate.last_result + 1
      );
      return {
        ...state,
        paginatorData: paginatorDataUpdate,
        paginatedPosts: paginatedPostsUpdate,
        pages: pagesUpdate
      };
    default:
      return state;
  }
}
