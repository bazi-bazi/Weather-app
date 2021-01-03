import { createStore, applyMiddleware } from "redux";
import weatherReducer from "./Reducers"
import { logger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

export let store = createStore(
  weatherReducer,
  composeWithDevTools(applyMiddleware(logger))
);