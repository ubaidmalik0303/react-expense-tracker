import React, { useState, useContext } from 'react';
import './addTransaction.css';
import { TransactionsContext } from '../contextApi/transactionContext';


const AddTransaction = () => {

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const { add_transaction } = useContext(TransactionsContext);

    const send = (e) => {
        e.preventDefault()
        if (amount == 0) {
            alert('Please Put Valid Number');
        } else {
            const id = `trid${Math.random() * 10000}ubsf${Math.random() * 1000000}`;
            add_transaction({
                id,
                title,
                amount: parseInt(amount),
            })
            setTitle('')
            setAmount('')
        }
    }

    return (
        <>
            <div className="addTransaction">
                <h4>Add new Transaction</h4>
                <hr className="line-break" />
                <form onSubmit={(e) => send(e)}>
                    <p className="title">Title</p>
                    <input value={title} type="text" required maxLength="25" placeholder="Enter Title" className="title-input" onChange={(e) => setTitle(e.target.value)} />
                    <p className="title">Amount (+ Income, - Expense)</p>
                    <input value={amount} type="number" required placeholder="Enter Amount 500, -200" className="title-input" onChange={(e) => setAmount(e.target.value)} />
                    <button className="addTransactionButton">Add Transaction</button>
                </form>
            </div>
        </>
    )
}

export default AddTransaction;