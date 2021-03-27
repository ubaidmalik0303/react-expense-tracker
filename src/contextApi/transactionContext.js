import { createContext, useReducer } from 'react';
import TransactionsReducer from './transactionsReducer';


const getData = localStorage.getItem('transactions');
if (getData) {
    var initialTransactions = {
        transactions: JSON.parse(localStorage.getItem('transactions'))
    }
} else {
    initialTransactions = {
        transactions: [],
        balance: 0,
        income: 0,
        expense: 0,
    }
}


export const TransactionsContext = createContext(initialTransactions);


export const TransactionsProvider = ({ children }) => {

    const [state, dispatch] = useReducer(TransactionsReducer, initialTransactions);

    const add_transaction = (transaction) => {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction,
        })
    }

    const delete_transaction = (id) => {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id,
        })
    }

    return (
        <TransactionsContext.Provider
            value={{
                transactions: state.transactions,
                add_transaction,
                delete_transaction,
            }}
        >
            {children}
        </TransactionsContext.Provider>
    )
}
