import { ActionType } from "../action-types";

export type ThemeMode = "light" | "dark";

export interface ToggleThemeMode {
  type: ActionType.TOGGLE_THEME_MODE;
  payload: ThemeMode;
}

export interface ToggleMobileMenu {
  type: ActionType.TOGGLE_MOBILE_MENU;
  payload: boolean;
}

export interface SetThemePalette {
  type: ActionType.SET_THEME_PALETTE;
  payload: string;
}

export type Action = ToggleThemeMode | ToggleMobileMenu | SetThemePalette;
