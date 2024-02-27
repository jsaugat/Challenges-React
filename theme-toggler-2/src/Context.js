import { createContext, useContext } from "react";

const defaultContext = {
    themeMode: "light",
    lightTheme: () => {},
    darkTheme: () => {},
};

//Create Context
export const ThemeContext = createContext(defaultContext);

//Context Provider
export const ThemeProvider = ThemeContext.Provider;

//Custom Hook returning useContext(ThemeContext)
export default function useTheme() {
  return useContext(ThemeContext);
}
