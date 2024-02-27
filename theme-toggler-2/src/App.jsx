import { useState } from "react";
import "./App.css";
import Header from "./Header";
import ToggleBtn from "./ToggleBtn";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex gap-3 h-screen w-screen items-center justify-center p-6 dark:bg-black">
      <ToggleBtn />
      <Header />
    </main>
  );
}

export default App;
