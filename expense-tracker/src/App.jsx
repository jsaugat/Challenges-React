// import { useState } from 'react'
import './App.css'
import AddTransaction from './Components/AddTransaction'
import Balance from './Components/Balance'
import Header from './Components/Header'
import IncomeExpenses from './Components/IncomeExpenses'
import TransactionList from './Components/TransactionList'
//GlobalContext.Provider
import { GlobalProvider } from './Context/GlobalState'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <GlobalProvider>
      <Header title={`Expense Tracker`}/>
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  )
}

export default App
