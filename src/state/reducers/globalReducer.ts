import produce from "immer";
import { ActionType } from "../action-types";
import { Theme, Action } from "../actions";

interface GlobalState {
  theme: Theme;
}

const initialState: GlobalState = {
  theme: "light",
};

const globalReducer = (
  state: GlobalState = initialState,
  action: Action
): GlobalState =>
  produce(state, (draft) => {
    switch (action.type) {
      case ActionType.TOGGLE_THEME:
        draft.theme = action.payload;
        break;

      default:
        break;
    }
  });

export default globalReducer;
