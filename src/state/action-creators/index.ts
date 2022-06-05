import { Pages } from "interfaces";
import { Dispatch } from "react";
import { ActionType } from "../action-types";
import {
  ToggleThemeMode,
  ThemeMode,
  ToggleMobileMenu,
  SetThemePalette,
  Action,
  SetAppTour,
  SetPageTour,
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

export const setAppTour = (hasTour: boolean): SetAppTour => {
  return { type: ActionType.SET_APP_TOUR, payload: hasTour };
};

export const setPageTour = ({
  name,
  isDone,
}: {
  name: Pages;
  isDone: boolean;
}): SetPageTour => {
  return { type: ActionType.SET_PAGE_TOUR, payload: { name, isDone } };
};

export const getGithubRepositories = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.SET_GITHUB_LOADING, payload: true });

    try {
      const response = await fetch(
        "https://api.github.com/users/rasoul678/repos?per_page=100"
      );
      const repos = await response.json();

      const myOwnRepos = repos.filter((repo: any) => !repo.fork);

      dispatch({ type: ActionType.SET_GITHUB_LOADING, payload: false });
      dispatch({ type: ActionType.SET_GITHUB_REPOS, payload: myOwnRepos });
    } catch (error) {
      dispatch({ type: ActionType.SET_GITHUB_LOADING, payload: false });
      dispatch({
        type: ActionType.SET_GITHUB_ERROR,
        payload: (error as { message: string }).message,
      });
    }
  };
};
