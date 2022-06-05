import produce from "immer";
import { ActionType } from "../action-types";
import { ThemeMode, Action } from "../actions";
import theme from "schema/theme.json";
import { Pages, ThemePallet } from "interfaces";

interface GlobalState {
  themeMode: ThemeMode;
  themePallet: ThemePallet;
  selectedPallet: string;
  isMobileMenuOpen: boolean;
  tour: {
    hasTour: boolean;
    pages: {
      [key in Pages]: {
        isDone: boolean;
        name: Pages;
      };
    };
  };
}

const initialState: GlobalState = {
  themeMode: "dark",
  themePallet: theme.data.dark,
  selectedPallet: "p1",
  isMobileMenuOpen: false,
  tour: {
    hasTour: true,
    pages: {
      home: {
        isDone: false,
        name: "home",
      },
      contact: {
        isDone: false,
        name: "contact",
      },
    },
  },
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

      case ActionType.SET_APP_TOUR:
        draft.tour.hasTour = action.payload;
        break;

      case ActionType.SET_PAGE_TOUR:
        draft.tour.pages[action.payload.name].isDone = action.payload.isDone;
        break;

      default:
        break;
    }
  });

export default globalReducer;
