import { takeLatest, call, put } from "redux-saga/effects";

import * as actionTypes from "../actions/posts";
import { fetchPosts } from "../libs/api";

export default function* watcherSaga() {
  yield takeLatest(actionTypes.API_CALL_REQUEST, workerSaga);
}

function* workerSaga() {
  try {
    const response = yield call(fetchPosts);
    const posts = response.data;

    yield put({ type: actionTypes.API_CALL_SUCCESS, posts });
  } catch (error) {
    yield put({ type: actionTypes.API_CALL_FAILURE, error });
  }
}
