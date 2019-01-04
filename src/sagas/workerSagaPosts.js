import { call, put } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";
import { fetchPosts } from "../services";

export default function* workerSagaPosts() {
  try {
    const response = yield call(fetchPosts);
    const posts = response.data;

    yield put({ type: actionTypes.API_CALL_SUCCESS, posts });
  } catch (error) {
    yield put({ type: actionTypes.API_CALL_FAILURE, error });
  }
}
