import produce from "immer";
import { ActionType } from "../action-types";
import { ThemeMode, Action } from "../actions";
import theme from "schema/theme.json";
import { ThemePallet } from "types";

interface GlobalState {
  themeMode: ThemeMode;
  themePallet: ThemePallet;
  selectedPallet: string;
  isMobileMenuOpen: boolean;
}

const initialState: GlobalState = {
  themeMode: "dark",
  themePallet: theme.data.dark,
  selectedPallet: "p1",
  isMobileMenuOpen: false,
};

const globalReducer = (
  state: GlobalState = initialState,
  action: Action
): GlobalState =>
  produce(state, (draft) => {
    switch (action.type) {
      case ActionType.TOGGLE_THEME_MODE:
        draft.themeMode = action.payload;
        draft.themePallet = theme.data[action.payload];
        break;

      case ActionType.TOGGLE_MOBILE_MENU:
        draft.isMobileMenuOpen = action.payload;
        break;

      case ActionType.SET_THEME_PALETTE:
        draft.selectedPallet = action.payload;
        break;

      default:
        break;
    }
  });

export default globalReducer;
