import Axios from 'axios';



export const fetchProductUnit = () => {
    return async (dispatch) => {
<<<<<<< HEAD
        await Axios.get(process.env.REACT_APP_SERVER+'getUnit').then(response => {
            dispatch({ type : 'FETCH_UNITS', payload: response.data})
=======
        await Axios.get(process.env.REACT_APP_SERVER + 'getUnit').then(response => {
            dispatch({ type: 'FETCH_UNITS', payload: response.data })
>>>>>>> dev
        }).catch(err => {
            console.log(err);
        })

    }
}

export const fetchProductCategory = () => {
    return async (dispatch) => {
<<<<<<< HEAD
        await Axios.get(process.env.REACT_APP_SERVER+'getCategory').then(response => {
            dispatch({ type : 'FETCH_CATEGORY', payload: response.data})
=======
        await Axios.get(process.env.REACT_APP_SERVER + 'getCategory').then(response => {
            dispatch({ type: 'FETCH_CATEGORY', payload: response.data })
>>>>>>> dev
        }).catch(err => {
            console.log(err);
        })

    }
}
export const fetchSuppliers = () => {
    return async (dispatch) => {
<<<<<<< HEAD
        await Axios.get(process.env.REACT_APP_SERVER+'getSuppliers').then(response => {
            dispatch({ type : 'FETCH_SUPPLIER', payload: response.data})
=======
        await Axios.get(process.env.REACT_APP_SERVER + 'getSuppliers').then(response => {
            dispatch({ type: 'FETCH_SUPPLIER', payload: response.data })
>>>>>>> dev
        }).catch(err => {
            console.log(err);
        })

    }
}
