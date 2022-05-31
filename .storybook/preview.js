import { ThemeProvider } from "styled-components";
import { invertColor } from "../src/utils/helpers";


const theme = {
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

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];
