import * as actionTypes from "../actions/actionTypes";

const initialState = {
  fetching: false,
  users: [],
  error: null
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.API_CALL_REQUEST_USERS:
      return { ...state, fetching: true, error: null };
    case actionTypes.API_CALL_SUCCESS_USERS:
      return { ...state, fetching: false, users: action.users };
    case actionTypes.API_CALL_FAILURE_USERS:
      return { ...state, fetching: false, users: null, error: action.error };
    default:
      return state;
  }
}
