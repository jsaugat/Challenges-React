import { createContext, useContext, useState } from "react";

//New Context
const ThemeContext = createContext(undefined);

//Component : Theme Provider
export const ThemeProvider = ({ children }) => {
  //light default theme local state
  const [theme, setTheme] = useState("light");
  const contextValue = {
    theme,
    toggleTheme: () => setTheme(theme === "light" ? "dark" : "light")
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

//useTheme Custom Hook
export const useTheme = () => useContext(ThemeContext);
