import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/header';
import Balance from './component/balance';
import IncomeExpense from './component/incomeExpense';
import Transactions from './component/transactions';
import AddTransaction from './component/addTransaction';

function App() {

  return (
    <>
      <div className="container">
        <Header />
        <Balance />
        <IncomeExpense />
        <Transactions />
        <AddTransaction />
      </div>
    </>
  );
}

export default App;
