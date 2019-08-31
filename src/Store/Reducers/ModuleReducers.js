const initState = {
    suppliers:[]
}

export default (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_SUPPLIER':
            return {
                ...state, suppliers: [...action.payload]
            }
        default:
            return state;
    }
};