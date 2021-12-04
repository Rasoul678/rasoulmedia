import { ActionType } from "../action-types";
import { ToggleTheme, Theme, ToggleMobileMenu } from "../actions";

export const toggleTheme = (theme: Theme): ToggleTheme => {
  return { type: ActionType.TOGGLE_THEME, payload: theme };
};

export const toggleMobileMenu = (toggle: boolean): ToggleMobileMenu => {
  return { type: ActionType.TOGGLE_MOBILE_MENU, payload: toggle };
};
