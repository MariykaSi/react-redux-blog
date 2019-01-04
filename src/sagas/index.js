import { takeEvery } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";
import workerSagaPosts from "./workerSagaPosts";
import workerSagaPost from "./workerSagaPost";
import workerSagaUsers from "./workerSagaUsers";
import workerSagaComments from "./workerSagaComments";

export default function* rootSaga() {
  yield takeEvery(actionTypes.API_CALL_REQUEST, workerSagaPosts);
  yield takeEvery(actionTypes.API_CALL_REQUEST_ONE_POST, workerSagaPost);
  yield takeEvery(actionTypes.API_CALL_REQUEST_USERS, workerSagaUsers);
  yield takeEvery(actionTypes.API_CALL_REQUEST_COMMENTS, workerSagaComments);
}
