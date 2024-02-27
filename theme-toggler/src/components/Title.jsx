import React from 'react'
import { useTheme } from "../context/ThemeContext";


function Title({children}) {
  const { theme } = useTheme()

  return (
    <h1 className='title' 
      style={theme === "light" ? { color: "black" } : { color: "white" }}>
      {children}
    </h1>
  )
}

export default Title;
