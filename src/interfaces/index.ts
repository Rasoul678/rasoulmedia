export type ThemeMode = "dark" | "light";

export interface ButtonColor {
  backgroundColor: string;
  textColor: string;
}

export interface GlobalState {
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

export interface ButtonType {
  primary: ButtonColor;
  secondary: ButtonColor;
  // error: ButtonColor;
  // success: ButtonColor;
}

export interface ThemeType {
  name: ThemeMode;
  colors: string[];
  body: string;
  text: string;
  border: string;
  background: string;
  buttons: ButtonType;
  card: {
    backgroundColor: string;
    borderColor: string;
    textColor: string;
  };
}

export type ThemePallet = {
  name: ThemeMode;
  pallets: {
    [key: string]: {
      name: string;
      mainColor: string;
      colors: string[];
      text: string;
    };
  };
};

export interface ThemePallets {
  [key: string]: ThemePallet;
}

interface GithubLanguage {
  color: string;
  name: string;
  __typename: string;
}

interface GithubCountable {
  totalCount: number;
  __typename: string;
}

export interface Repository {
  id: string;
  name: string;
  stargazers: GithubCountable;
  forks: GithubCountable;
  issues: GithubCountable;
  watchers: GithubCountable;
  languages: {
    __typename: string;
    nodes: GithubLanguage[];
  };
  url: string;
  __typename: string;
}

export type Pages = "home" | "contact";
