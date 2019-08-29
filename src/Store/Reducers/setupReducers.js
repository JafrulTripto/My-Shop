const initState = {
    units: [],
    categories: []
}

export default (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_UNITS':
            return {
                ...state, units: [...action.payload]
            }
        case 'FETCH_CATEGORY':
            return {
                ...state, categories: [...action.payload]
            }
        default:
            return state;
    }
};