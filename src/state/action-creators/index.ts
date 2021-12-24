import { ActionType } from "../action-types";
import {
  ToggleThemeMode,
  ThemeMode,
  ToggleMobileMenu,
  SetThemePalette,
} from "../actions";

export const toggleThemeMode = (themeMode: ThemeMode): ToggleThemeMode => {
  return { type: ActionType.TOGGLE_THEME_MODE, payload: themeMode };
};

export const toggleMobileMenu = (toggle: boolean): ToggleMobileMenu => {
  return { type: ActionType.TOGGLE_MOBILE_MENU, payload: toggle };
};

export const setThemePalette = (palette: string): SetThemePalette => {
  return { type: ActionType.SET_THEME_PALETTE, payload: palette };
};
