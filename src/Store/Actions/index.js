import Axios from 'axios';

export const fetchProductUnit = () => {
    return async (dispatch) => {
        await Axios.get('http://localhost:4000/getUnit').then(response => {
            dispatch({ type : 'FETCH_UNITS', payload: response.data})
        }).catch(err => {
            console.log(err);
        })
       
    }
}

export const fetchProductCategory = () => {
    return async (dispatch) => {
        await Axios.get('http://localhost:4000/getCategory').then(response => {
            dispatch({ type : 'FETCH_CATEGORY', payload: response.data})
        }).catch(err => {
            console.log(err);
        })
       
    }
}
export const fetchSuppliers = () => {
    return async (dispatch) => {
        await Axios.get('http://localhost:4000/getSupplier').then(response => {
            dispatch({ type : 'FETCH_SUPPLIER', payload: response.data})
        }).catch(err => {
            console.log(err);
        })
       
    }
}