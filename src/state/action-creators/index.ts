import { ActionType } from "../action-types";
import { ToggleTheme, Theme } from "../actions";

export const toggleTheme = (theme: Theme): ToggleTheme => {
  return { type: ActionType.TOGGLE_THEME, payload: theme };
};
