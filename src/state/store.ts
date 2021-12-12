import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { persistMiddleware } from "./middlewares/persistMiddleware";
import { LOCAL_STORAGE_KEY } from "constants/Global";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const reHydrateStore = () => {
  if (localStorage.getItem(LOCAL_STORAGE_KEY) !== null) {
    const localState = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY) || "{}"
    );

    if (localState?.global?.appVersion === process.env.REACT_APP_VERSION) {
      return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "{}");
    } else {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
      return {};
    }
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  reHydrateStore(),
  composeEnhancers(applyMiddleware(persistMiddleware, thunk))
);
