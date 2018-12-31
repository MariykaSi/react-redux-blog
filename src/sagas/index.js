import { takeEvery, call, put } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";
import { fetchPosts, fetchPost, fetchUsers, fetchComments } from "../libs/api";

export default function* rootSaga() {
  yield takeEvery(actionTypes.API_CALL_REQUEST, workerSaga);
  yield takeEvery(actionTypes.API_CALL_REQUEST_ONE_POST, workerSagaPost);
  yield takeEvery(actionTypes.API_CALL_REQUEST_USERS, workerSagaUsers);
  yield takeEvery(actionTypes.API_CALL_REQUEST_COMMENTS, workerSagaComments);
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

function* workerSagaUsers() {
  try {
    const response = yield call(fetchUsers);
    const users = response.data;

    yield put({ type: actionTypes.API_CALL_SUCCESS_USERS, users });
  } catch (error) {
    yield put({ type: actionTypes.API_CALL_FAILURE_USERS, error });
  }
}

function* workerSagaComments(action) {
  try {
    const response = yield call(fetchComments, action.postId);
    const comments = response.data;

    yield put({ type: actionTypes.API_CALL_SUCCESS_COMMENTS, comments });
  } catch (error) {
    yield put({ type: actionTypes.API_CALL_FAILURE_COMMENTS, error });
  }
}
