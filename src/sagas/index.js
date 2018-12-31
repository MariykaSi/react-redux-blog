import { takeEvery, call, put } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";
import { fetchPosts, fetchPost } from "../libs/api";

export default function* rootSaga() {
  yield takeEvery(actionTypes.API_CALL_REQUEST, workerSaga);
  yield takeEvery(actionTypes.API_CALL_REQUEST_ONE_POST, workerSagaPost);
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

function* workerSagaPost(action) {
  try {
    const response = yield call(fetchPost, action.postId);
    const post = response.data;

    yield put({ type: actionTypes.API_CALL_SUCCESS_ONE_POST, post });
  } catch (error) {
    yield put({ type: actionTypes.API_CALL_FAILURE_ONE_POST, error });
  }
}
