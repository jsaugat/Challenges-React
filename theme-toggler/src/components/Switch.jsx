import "../css/Switch.css";
import React from 'react'
import { useTheme } from "../context/ThemeContext";

function Switch() {
  const {theme, toggleTheme} = useTheme()
  return (
    <label className="switch">
        <input
            type="checkbox"
            checked={theme === "light"}
            onChange={toggleTheme}
        />
        <span className="toggler"></span>
    </label>
  )
}

export default Switch
