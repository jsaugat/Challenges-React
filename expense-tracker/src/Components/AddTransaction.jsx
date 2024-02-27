import React, { useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);
  const handleSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * (100 - 5) + 5),
      name: text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }

  return (
    <>
      <h3 className="font-semibold text-zinc-500 uppercase text-sm">
        Add new transaction
      </h3>
      <form onSubmit={handleSubmit}>
        {/* NEW TASK */}
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="Enter text..."
          />
        </div>
        {/* AMOUNT */}
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            placeholder="Enter amount..."
          />
        </div>
        {/* ADD BUTTON */}
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
}

export default AddTransaction;
