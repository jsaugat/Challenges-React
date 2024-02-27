import React, { useContext } from "react";
import {GlobalContext} from "../Context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext)

  const balance = transactions.reduce((acc, curr) => (acc + curr.amount),0)
  return (
    <>
      <h4 className="font-bold">Your Balance</h4>
      <h1 className="font-bold text-3xl">${balance.toFixed(2)}</h1>
    </>
  );
};

export default Balance;
