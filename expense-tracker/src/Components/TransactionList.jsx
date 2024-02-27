import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import Transaction from "./Transaction";

function TransactionList() {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <h3 className="font-bold text-zinc-500 uppercase text-sm">History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => (<Transaction key={transaction.id} transaction={transaction}/>))}
      </ul>
    </>
  );
}

export default TransactionList;
