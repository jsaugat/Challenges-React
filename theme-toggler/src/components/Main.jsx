import React from "react";
import Title from "./Title";
import Switch from "./Switch";
import { useTheme } from "../context/ThemeContext";


function Main() {
  const lightTheme = {
    backgroundColor: "white"
  }
  const darkTheme = {
    backgroundColor: "black"
  }

  const { theme } = useTheme();

  return (
    <div 
      className = "flex flex-col justify-center items-center h-screen w-screen gap-6"
      style = { theme === "light" ? lightTheme : darkTheme }
    >
      <Title>toggle the theme</Title>
      <Switch />
    </div>
  );
}

export default Main;
