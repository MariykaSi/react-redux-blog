import { call, put } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";
import { fetchPost } from "../services";

export default function* workerSagaPost(action) {
  try {
    const response = yield call(fetchPost, action.postId);
    const post = response.data;

    yield put({ type: actionTypes.API_CALL_SUCCESS_ONE_POST, post });
  } catch (error) {
    yield put({ type: actionTypes.API_CALL_FAILURE_ONE_POST, error });
  }
}
