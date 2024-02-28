import { createContext, useContext } from "react";

const defaultContext = {
    themeMode: "light",
    lightTheme: () => {},
    darkTheme: () => {},
};

const ThemeContext = createContext(defaultContext);
const ThemeProvider = ThemeContext.Provider;
const useTheme = () => useContext(ThemeContext);

export { ThemeContext, ThemeProvider };
export default useTheme;