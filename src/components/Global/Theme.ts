import { Black, White, Yellow, Orange, Blue } from "../../constants/Colors";
import { ThemeType } from "../../types";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}

export const lightTheme: ThemeType = {
  name: "light",
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
  particles: {
    lineColor: Black.b2,
    backgroundColor: {
      r: 230,
      g: 230,
      b: 230,
    },
  },
  breakpoints: {
    mobile: 450,
    tablet: 1025,
    desktop: 1824,
  },
};
export const darkTheme: ThemeType = {
  name: "dark",
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
  particles: {
    lineColor: White.w1,
    backgroundColor: {
      r: 0,
      g: 0,
      b: 0,
    },
  },
  //TODO: change
  breakpoints: {
    mobile: 450,
    tablet: 1025,
    desktop: 1824,
  },
};
