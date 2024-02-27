import React, {useContext} from "react";
import { GlobalContext } from "../Context/GlobalState";

function Transaction({ transaction }) {
  const { deleteTransaction } = useContext(GlobalContext)

  const sign = transaction.amount < 0 ? "-" : "+"

  return (
    <div>
      <li className={sign === "+" ? "plus" : "minus"}>
        {transaction.name}
        <span>{sign}${Math.abs(transaction.amount)}</span>
        <button onClick={()=> deleteTransaction(transaction.id)} className="delete-btn">x</button>
      </li>
    </div>
  );
}

export default Transaction;
