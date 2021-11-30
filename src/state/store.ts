import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { persistMiddleware } from "./middlewares/persistMiddleware";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const reHydrateStore = () => {
  if (localStorage.getItem("rasoulMediaState") !== null) {
    return JSON.parse(localStorage.getItem("rasoulMediaState") || "{}");
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  reHydrateStore(),
  composeEnhancers(applyMiddleware(persistMiddleware, thunk))
);
