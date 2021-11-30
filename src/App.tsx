import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/Global/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Global/Theme";
import { useTypedSelector } from "./hooks/useTypedSelector";
import useActions from "./hooks/useActions";
import Button from "./components/Button";

const App: React.FC = () => {
  const { theme } = useTypedSelector((state) => state.global);
  const { toggleTheme } = useActions();

  const handleClick = () => {
    toggleTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Rasoul Media
      </h1>
      <Button onClick={handleClick} size="small">
        Theme
      </Button>
    </ThemeProvider>
  );
};

export default App;
