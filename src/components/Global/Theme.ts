import { Black, White } from "../../constants/Colors";

export interface ThemeType {
  body: string;
  text: string;
  border: string;
  background: string;
}

export const lightTheme: ThemeType = {
  body: White.w1,
  text: Black.b1,
  border: Black.b2,
  background: White.w2,
};
export const darkTheme: ThemeType = {
  body: Black.b1,
  text: White.w1,
  border: White.w3,
  background: Black.b2,
};
