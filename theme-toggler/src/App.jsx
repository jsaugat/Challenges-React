// import { useState } from 'react'
import "./App.css";
import Main from "./components/Main";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="App flex justify-center items-center">
        <Main />
      </div>
    </ThemeProvider>
  );
}

export default App;
