const initState = {
    suppliers: [],
}

export default (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_SUPPLIER':
            console.log("fetching supplier")
            return {
                ...state, suppliers: [...action.payload]
            }

        default:
            return state;
    }
};