import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState({});
  const index = Math.floor(Math.random() * quotes.length);

  useEffect(() => {
    const url = "https://stoic-quotes.com/api/quotes?num=100";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setQuotes(data);
        setQuote(data[index]);
      })
      .catch((err) => console.error("Something went wrong : " + err));
  }, []);

  const randomize = () => {
    setQuote(quotes[index]);
  }

  return (
    <main className="max-w-[800px] py-20 m-auto grid justify-center gap-12 border rounded-lg bg-transparent">
      <h2 className="text-3xl mb-8 mt-2">Kanye being Kanye</h2>
      <section className="w-[500px] break-words">
        <q className="text-left">{quote["text"]}</q>
        <br />
        <br />
        <cite className="">- {quote["author"]}</cite>
      </section>
      <button onClick={randomize} className="bg-[#eaeaea] text-black hover:bg-white font-semibold rounded-full w-fit py-2 px-3">
        Randomize
      </button>
    </main>
  );
}

export default App;
