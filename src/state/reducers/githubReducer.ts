import produce from "immer";
import { ActionType } from "../action-types";
import { Action } from "../actions";

interface GithubState {
  repositories: any[];
  isLoading: boolean;
  error: string;
}

const initialState: GithubState = {
  repositories: [],
  isLoading: false,
  error: "",
};

const githubReducer = (
  state: GithubState = initialState,
  action: Action
): GithubState =>
  produce(state, (draft) => {
    switch (action.type) {
      case ActionType.SET_GITHUB_REPOS:
        draft.repositories = action.payload;
        break;

      case ActionType.SET_GITHUB_LOADING:
        draft.isLoading = action.payload;
        break;

      case ActionType.SET_GITHUB_ERROR:
        draft.error = action.payload;
        break;

      default:
        break;
    }
  });

export default githubReducer;
