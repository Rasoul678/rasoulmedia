import { combineReducers } from "redux";
import globalReducer from "./globalReducer";
import githubReducer from "./githubReducer"

const rootReducer = combineReducers({
  global: globalReducer,
  github: githubReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
