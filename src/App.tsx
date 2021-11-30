import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/Global/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Global/Theme";
import { useTypedSelector } from "./hooks/useTypedSelector";
import useActions from "./hooks/useActions";
import Button from "./components/Button";
import Toggle from "./components/Toggle";
import { useState } from "react";

const App: React.FC = () => {
  const { theme } = useTypedSelector((state) => state.global);
  const { toggleTheme } = useActions();
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = (value: boolean) => {
    toggleTheme(theme === "dark" ? "light" : "dark");
    setIsChecked(value);
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
      <Toggle value={isChecked} onToggle={handleToggle} />
    </ThemeProvider>
  );
};

export default App;
