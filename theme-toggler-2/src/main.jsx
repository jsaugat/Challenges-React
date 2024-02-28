import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./Context";

//Theme Wrapper Component
const ThemeEnabledApp = () => {
  const [themeMode, setThemeMode] = useState("light");
  const lightTheme = () => setThemeMode("light");
  const darkTheme = () => setThemeMode("dark");

  //? Theme Toggle functionality with tailwind classes light or dark to the html element/ whole document
  useEffect(() => {
    const html = document.querySelector("html");
    html.classList.remove("light", "dark");
    html.classList.add(themeMode);
  }, [themeMode]);
  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
        <App />
    </ThemeProvider>
  )
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeEnabledApp />
  </React.StrictMode>
);