import produce from "immer";
import { ActionType } from "../action-types";
import { Theme, Action } from "../actions";

interface GlobalState {
  theme: Theme;
  isMobileMenuOpen: boolean;
}

const initialState: GlobalState = {
  theme: "light",
  isMobileMenuOpen: false,
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

      case ActionType.TOGGLE_MOBILE_MENU:
        draft.isMobileMenuOpen = action.payload;
        break;

      default:
        break;
    }
  });

export default globalReducer;
