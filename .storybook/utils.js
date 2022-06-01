import { invertColor } from "../src/utils/helpers";

export const theme = {
  name: "dark",
  colors: ["#191919", "#343A41", "#F9C160", "#F9C160"],
  body: "#191919",
  text: "#CCCCCC",
  border: "#F9C160",
  background: "#191919",
  buttons: {
    primary: {
      backgroundColor: "#F9C160",
      textColor: invertColor("#F9C160", true),
    },
    secondary: {
      backgroundColor: "#F9C160",
      textColor: invertColor("#F9C160", true),
    },
  },
  card: {
    backgroundColor: "#343A41",
    borderColor: "#F9C160",
    textColor: "#fff",
  },
};
