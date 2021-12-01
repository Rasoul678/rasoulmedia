import { Black, White, Yellow, Orange, Blue } from "../../constants/Colors";

interface ButtonColor {
  backgroundColor: string;
  textColor: string;
}
interface ButtonType {
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

export const lightTheme: ThemeType = {
  body: White.w2,
  text: Black.b1,
  border: White.w4,
  background: White.w2,
  buttons: {
    primary: {
      backgroundColor: Orange,
      textColor: Black.b4,
    },
    secondary: {
      backgroundColor: Blue,
      textColor: Black.b4,
    },
  },
};
export const darkTheme: ThemeType = {
  body: Black.b2,
  text: White.w1,
  border: Orange,
  background: Black.b2,
  buttons: {
    primary: {
      backgroundColor: Yellow,
      textColor: Black.b1,
    },
    secondary: {
      backgroundColor: Blue,
      textColor: Black.b1,
    },
  },
};
