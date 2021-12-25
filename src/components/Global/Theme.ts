import { Black, White, Yellow, Orange, Blue } from "../../constants/Colors";
import { ThemeType } from "interfaces";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}

export const lightTheme: ThemeType = {
  name: "light",
  colors: [],
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
  card: {
    backgroundColor: White.w3,
    borderColor: White.w2,
    textColor: White.w1,
  },
};
export const darkTheme: ThemeType = {
  name: "dark",
  colors: [],
  body: Black.b2,
  text: White.w1,
  border: Orange,
  background: Black.b3,
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
  card: {
    backgroundColor: Black.b3,
    borderColor: Black.b2,
    textColor: Black.b1,
  },
};
