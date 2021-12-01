import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/Global/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Global/Theme";
import { useTypedSelector } from "./hooks/useTypedSelector";
import useActions from "./hooks/useActions";
import Toggle from "./components/Toggle";
import { useState } from "react";
import Footer from "./layouts/Footer";

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
      <Toggle value={isChecked} onToggle={handleToggle} />
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
        <h1
          key={i}
          style={{
            textAlign: "center",
            height: "20vh",
          }}
        >
          Rasoul Media
        </h1>
      ))}
      <Footer />
    </ThemeProvider>
  );
};

export default App;
