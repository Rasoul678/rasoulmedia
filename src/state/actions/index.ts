import { ActionType } from "../action-types";

export type Theme = "light" | "dark";

export interface ToggleTheme {
  type: ActionType.TOGGLE_THEME;
  payload: Theme;
}

export interface ToggleMobileMenu {
  type: ActionType.TOGGLE_MOBILE_MENU;
  payload: boolean;
}

export type Action = ToggleTheme | ToggleMobileMenu;
