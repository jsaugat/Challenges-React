import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

function IncomeExpenses() {
  const { transactions } = useContext(GlobalContext);
  console.log(transactions);

  const incomeItems = transactions.filter((transaction) => transaction.amount > 0);
  const expensesItems = transactions.filter((transaction) => transaction.amount < 0);
  const income = incomeItems.reduce((accumulator, current) => accumulator + current.amount, 0)
  const expense = Math.abs(expensesItems.reduce((accumulator, current) => accumulator + current.amount, 0))

  return (
    <div class="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money font-bold plus">
          {income}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money font-bold minus">
          {expense}
        </p>
      </div>
    </div>
  );
}

export default IncomeExpenses;
