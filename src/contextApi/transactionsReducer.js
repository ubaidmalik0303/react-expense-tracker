const TransactionsReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TRANSACTION':
            localStorage.setItem('transactions', JSON.stringify([...state.transactions, action.payload]))
            return ({
                ...state,
                transactions: [...state.transactions, action.payload],

            })
        case 'DELETE_TRANSACTION':
            for (var i = 0; i < state.transactions.length; i++) {
                if (state.transactions[i].id === action.payload) {
                    state.transactions.splice(i, 1)
                    localStorage.setItem('transactions', JSON.stringify(state.transactions))
                }
            }
            return ({
                ...state,
                transactions: state.transactions,
            })
        default:
            return state
    }
}

export default TransactionsReducer;