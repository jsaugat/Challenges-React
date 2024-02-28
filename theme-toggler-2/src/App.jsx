import Header from "./components/Header";
import ToggleBtn from "./components/ToggleBtn";

function App() {

  return (
    <main className="flex gap-3 h-screen w-screen items-center justify-center p-6 dark:text-white dark:bg-black">
      <ToggleBtn />
      <Header />
    </main>
  );
}

export default App;
