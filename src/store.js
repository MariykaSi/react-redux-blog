import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./sagas/index";
import {
  postsReducer,
  postReducer,
  usersReducer,
  commentsReducer
} from "./reducers";

const rootReducer = combineReducers({
  postsReducer,
  postReducer,
  usersReducer,
  commentsReducer
});

const sagaMiddleware = createSagaMiddleware();

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    reduxDevTools
  )
);

sagaMiddleware.run(rootSaga);