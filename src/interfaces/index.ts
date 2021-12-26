export type ThemeMode = "dark" | "light" | string;

export interface ButtonColor {
  backgroundColor: string;
  textColor: string;
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
