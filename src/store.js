import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import posts from "./reducers/postsReducer";
import watcherSaga from "./sagas/index";

const sagaMiddleware = createSagaMiddleware();

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default createStore(
  posts,
  compose(
    applyMiddleware(sagaMiddleware),
    reduxDevTools
  )
);

sagaMiddleware.run(watcherSaga);
