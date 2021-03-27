import { useState, useContext } from 'react';
import './transactions.css';
import { TransactionsContext } from '../contextApi/transactionContext';

const Transactions = () => {

    const { transactions, delete_transaction } = useContext(TransactionsContext);

    return (
        <>
            <div className="transactions">
                <p className="history">History</p>
                <hr />
                <div className="transactions-list">
                    <div className="scroll">
                        {!transactions[0] ? <p>No Transactions.</p> : transactions.map((val, i) => {
                            return val.amount < 0 ? <div key={i} className="expense-transaction">
                                <p>{val.title}</p>
                                <p style={{ marginLeft: 'auto' }}>{val.amount}</p>
                                <div className="deleteBtn" onClick={() => delete_transaction(val.id)}>X</div>
                            </div> : <div key={i} className="income-transaction">
                                <p>{val.title}</p>
                                <p style={{ marginLeft: 'auto' }}>{val.amount}</p>
                                <div className="deleteBtn" onClick={() => delete_transaction(val.id)}>X</div>
                            </div>

                        })}
                    </div>
                </div>
            </div>
        </>
    )
}


export default Transactions;