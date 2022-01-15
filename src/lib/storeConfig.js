import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { createWrapper } from "next-redux-wrapper";

import rootReducer from "../store/rootReducer";
import rootSaga from "../store/rootSaga";

const allWatchers = { ...rootSaga };
// //console.log({ allWatchers, rootSaga });

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export const makeStore = (context) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));

  for (let watcher in allWatchers) {
    store.sagaTask = sagaMiddleware.run(allWatchers[watcher]);
  }

  // store.sagaTask = sagaMiddleware.run(rootSaga)

  return store;
};

export const wrapper = createWrapper(makeStore, { debug: true });
