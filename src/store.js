
import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./redux/reducer/rootReducer";
import rootSaga from "./redux/saga/rootSaga";

const sagaMiddleware=createSagaMiddleware()

export default function configureStore() {
  const store = createStore(rootReducer,applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  return store;
}