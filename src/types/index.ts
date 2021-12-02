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
    body: string;
    text: string;
    border: string;
    background: string;
    buttons: ButtonType;
  }
