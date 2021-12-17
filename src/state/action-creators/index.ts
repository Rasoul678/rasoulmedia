import { Dispatch } from "redux";
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { ActionType } from "../action-types";
import {
  ToggleThemeMode,
  ThemeMode,
  ToggleMobileMenu,
  SetThemePalette,
  Action,
} from "../actions";
import { RootState } from "../reducers";
import { getRepositoriesQuery, getTokenQuery } from "queries";

export const toggleThemeMode = (themeMode: ThemeMode): ToggleThemeMode => {
  return { type: ActionType.TOGGLE_THEME_MODE, payload: themeMode };
};

export const toggleMobileMenu = (toggle: boolean): ToggleMobileMenu => {
  return { type: ActionType.TOGGLE_MOBILE_MENU, payload: toggle };
};

export const setThemePalette = (palette: string): SetThemePalette => {
  return { type: ActionType.SET_THEME_PALETTE, payload: palette };
};

export const getGithubToken = () => {
  const httpLink = createHttpLink({
    uri: "https://rasoulmedia-backend.herokuapp.com/",
  });

  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });

  return async (dispatch: Dispatch<Action>) => {
    try {
      const { data } = await client.query({
        query: getTokenQuery,
      });

      const { token } = data;
      dispatch({ type: ActionType.SET_GITHUB_TOKEN, payload: token });
    } catch (error) {
      dispatch({
        type: ActionType.SET_GITHUB_ERROR,
        payload: (error as { message: string }).message,
      });
    }
  };
};

export const getGithubRepositories = () => {
  return async (dispatch: Dispatch<Action>, getState: () => RootState) => {
    dispatch({ type: ActionType.SET_GITHUB_LOADING, payload: true });

    const {
      github: { token },
    } = getState();

    const httpLink = createHttpLink({
      uri: "https://api.github.com/graphql",
    });

    const authLink = setContext((_, { headers }) => {
      return {
        headers: {
          ...headers,
          authorization: `Bearer ${token}`,
        },
      };
    });

    const client = new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
    });

    try {
      const { data } = await client.query({
        query: getRepositoriesQuery,
      });

      const { user } = data;
      const pinnedItems = user.pinnedItems.edges.map((edge: any) => edge.node);

      dispatch({ type: ActionType.SET_GITHUB_LOADING, payload: false });
      dispatch({ type: ActionType.SET_GITHUB_REPOS, payload: pinnedItems });
      dispatch({
        type: ActionType.SET_GITHUB_ERROR,
        payload: "",
      });
    } catch (error) {
      dispatch({ type: ActionType.SET_GITHUB_LOADING, payload: false });
      dispatch({
        type: ActionType.SET_GITHUB_ERROR,
        payload: (error as { message: string }).message,
      });
    }
  };
};
