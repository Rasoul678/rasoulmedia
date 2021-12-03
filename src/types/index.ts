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

export interface Particles {
  lineColor: string;
  backgroundColor: {
    r: number;
    g: number;
    b: number;
  }
}

export interface ThemeType {
  body: string;
  text: string;
  border: string;
  background: string;
  buttons: ButtonType;
  particles: Particles;
}
