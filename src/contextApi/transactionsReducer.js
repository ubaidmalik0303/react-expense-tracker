const TransactionsReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TRANSACTION':
            localStorage.setItem('transactions', JSON.stringify([...state.transactions, action.payload]))
            return ({
                ...state,
                transactions: [...state.transactions, action.payload],

            })
        case 'DELETE_TRANSACTION':
            state.transactions = state.transactions.filter(transactions => transactions.id !== action.payload)
            localStorage.setItem('transactions', JSON.stringify(state.transactions))
            return ({
                ...state,
                transactions: state.transactions,
            })
        default:
            return state;
    }
}

export default TransactionsReducer;