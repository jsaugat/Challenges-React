import React, { useEffect, useState } from "react";

export default function App() {
  const [range, setRange] = useState(10);
  const [hasNumbers, setHasNumbers] = useState(false);
  // const [alphabets, setAlphabets] = useState(false);
  const [hasSymbols, setHasSymbols] = useState(false);
  const [password, setPassword] = useState("");

  useEffect(() => {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "1234567890";
    let symbols = '!@#$%&{}/?+-"';

    chars += hasNumbers ? numbers : "";
    chars += hasSymbols ? symbols : "";

    let password = "";
    for (let i = 0; i < range; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(password);
  }, [hasNumbers, range, hasSymbols]);

  return (
    <div>
      <h1>Password Generator</h1>
      {/* INPUT */}
      <section>
        <input
          type="text"
          value={password}
          style={{
            width: "29rem",
            height: "2rem",
            borderRadius: "6px",
            border: "none",
            paddingLeft: "0.6rem",
            margin: "1rem 0.2rem"
          }}
        />
        <button>Copy</button>
      </section>
      <section style={{ display: "flex", flexDirection: "column" }}>
        {/* range */}
        <label htmlFor="">
          <input
            type="range"
            min={10}
            max={50}
            value={range}
            onChange={(e) => setRange(e.target.value)}
          />
          {range}
          {/* numbers */}
        </label>
        <label htmlFor="">
          <input
            type="checkbox"
            name=""
            id=""
            value={hasNumbers}
            onChange={() => setHasNumbers(!hasNumbers)}
          />
          Numbers
        </label>
        {/* symbols */}
        <label htmlFor="">
          <input
            type="checkbox"
            name=""
            id=""
            value={hasSymbols}
            onChange={() => setHasSymbols(!hasSymbols)}
          />
          Symbols
        </label>
        {/* alphabets */}
        {/* <label htmlFor="">
          <input
            type="checkbox"
            name=""
            id=""
            value={alphabets}
            onChange={() => setAlphabets(!alphabets)}
          />
          Alphabets
        </label> */}
      </section>
    </div>
  );
}
