import { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState(30);
  const [height, setHeight] = useState(130);

  const BMI = useMemo(() => {
    const result = (weight / (height / 100) ** 2).toFixed(3);
    return result;
  }, [weight, height]);

  return (
    <main>
      <h1>BMI Calculator</h1>
      <form action="" style={{ textAlign: "left" }}>
        <label htmlFor="">
          Weight : {weight} kg <br />
          <input
            type="range"
            min={30}
            max={220}
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="">
          Height : {height} cm
          <br />
          <input
            type="range"
            min={130}
            max={200}
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </label>
      </form>

      <section className="result">
        <p>Your BMI is : </p><h2>{BMI}</h2>{" "}
      </section>
    </main>
  );
}

export default App;
