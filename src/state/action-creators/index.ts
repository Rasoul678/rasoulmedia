import { ActionType } from "../action-types";
import {
  ToggleThemeMode,
  ThemeMode,
  ToggleMobileMenu,
  SetThemePalette,
  Action,
} from "../actions";

import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Dispatch } from "react";
import { getRepositoriesQuery } from "queries";

export const toggleThemeMode = (themeMode: ThemeMode): ToggleThemeMode => {
  return { type: ActionType.TOGGLE_THEME_MODE, payload: themeMode };
};

export const toggleMobileMenu = (toggle: boolean): ToggleMobileMenu => {
  return { type: ActionType.TOGGLE_MOBILE_MENU, payload: toggle };
};

export const setThemePalette = (palette: string): SetThemePalette => {
  return { type: ActionType.SET_THEME_PALETTE, payload: palette };
};

export const getGithubRepositories = () => {
  const httpLink = createHttpLink({
    uri: "https://api.github.com/graphql",
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`,
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.SET_GITHUB_LOADING, payload: true });

    try {
      const { data } = await client.query({
        query: getRepositoriesQuery,
      });

      const { user } = data;
      const pinnedItems = user.pinnedItems.edges.map((edge: any) => edge.node);

      dispatch({ type: ActionType.SET_GITHUB_LOADING, payload: false });
      dispatch({ type: ActionType.SET_GITHUB_REPOS, payload: pinnedItems });

      // console.log(data);
    } catch (error) {
      dispatch({ type: ActionType.SET_GITHUB_LOADING, payload: false });
      dispatch({
        type: ActionType.SET_GITHUB_ERROR,
        payload: (error as { message: string }).message,
      });
    }
  };
};
