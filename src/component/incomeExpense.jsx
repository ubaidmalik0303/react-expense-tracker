import React, { useContext, useState } from 'react';
import './incomeExpense.css';
import { TransactionsContext } from '../contextApi/transactionContext';


const IncomeExpense = () => {

    const { transactions } = useContext(TransactionsContext);

    const getIncome = () => {
        let income = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount > 0) {
                income = income + transactions[i].amount
            }
        }
        return income;
    }

    const getExpense = () => {
        let expense = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount < 0) {
                expense = expense + transactions[i].amount
            }
        }
        return expense;
    }


    return (
        <>
            <div className="income-expense">
                <div className="income">
                    <p>INCOME</p>
                    <h3>${getIncome()}</h3>
                </div>
                <div className="expense">
                    <p>EXPENSE</p>
                    <h3>${getExpense()}</h3>
                </div>
            </div>
        </>
    )
}

export default IncomeExpense;