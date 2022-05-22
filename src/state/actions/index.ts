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

export interface SetGithubRepos {
  type: ActionType.SET_GITHUB_REPOS;
  payload: any[];
}

export interface SetGithubLoading {
  type: ActionType.SET_GITHUB_LOADING;
  payload: boolean;
}

export interface SetGithubError {
  type: ActionType.SET_GITHUB_ERROR;
  payload: string;
}

export type Action =
  | ToggleThemeMode
  | ToggleMobileMenu
  | SetThemePalette
  | SetGithubRepos
  | SetGithubLoading
  | SetGithubError;
