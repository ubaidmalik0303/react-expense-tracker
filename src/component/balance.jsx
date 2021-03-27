import React, { useContext } from 'react';
import './balance.css';
import { TransactionsContext } from '../contextApi/transactionContext';


const Balance = () => {

    const { transactions } = useContext(TransactionsContext);
    const getBalance = () => {
        let balance = 0;
        for (var i = 0; i < transactions.length; i++) {
            balance = balance + transactions[i].amount
        }
        return balance;
    }

    return (
        <>
            <div className="balance">
                <p>YOUR BALANCE</p>
                <h1>${getBalance()}</h1>
            </div>
        </>
    )
}


export default Balance;