import { call, put } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";
import { fetchComments } from "../services";

export default function* workerSagaComments(action) {
  try {
    const response = yield call(fetchComments, action.postId);
    const comments = response.data;

    yield put({ type: actionTypes.API_CALL_SUCCESS_COMMENTS, comments });
  } catch (error) {
    yield put({ type: actionTypes.API_CALL_FAILURE_COMMENTS, error });
  }
}
