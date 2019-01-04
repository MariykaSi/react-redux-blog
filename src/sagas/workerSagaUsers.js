import { call, put } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";
import { fetchUsers } from "../services";

export default function* workerSagaUsers() {
  try {
    const response = yield call(fetchUsers);
    const users = response.data;

    yield put({ type: actionTypes.API_CALL_SUCCESS_USERS, users });
  } catch (error) {
    yield put({ type: actionTypes.API_CALL_FAILURE_USERS, error });
  }
}
