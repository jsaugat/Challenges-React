import React, { useEffect, useRef, useState } from "react";

export default function App() {
  const [range, setRange] = useState(10);
  const [hasNumbers, setHasNumbers] = useState(false);
  // const [alphabets, setAlphabets] = useState(false);
  const [hasSymbols, setHasSymbols] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

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

  const handleCopyToClipboard = async () => {
    try {
      // Copy the selected text to the clipboard using the Clipboard API
      await navigator.clipboard.writeText("passwordRef.current.value");
      // Select the text inside the input
      passwordRef.current.select();
    } catch (error) {
      console.error("Unable to copy to clipboard", error);
    }
  };

  return (
    <div>
      <h1>Password Generator</h1>
      {/* INPUT */}
      <section>
        <input
          ref={passwordRef}
          type="text"
          value={password}
          style={{
            width: "29rem",
            height: "2rem",
            borderRadius: "6px",
            border: "none",
            paddingLeft: "0.6rem",
            margin: "1rem 0.2rem",
          }}
        />
        <button onClick={handleCopyToClipboard}>Copy</button>
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
