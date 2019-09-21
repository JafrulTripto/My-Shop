import React, { Component } from 'react';
import { formValid } from '../../../../Helpers/Helper'
import AddBrand from '../../../../Components/Pages/ProductSettings/BrandSettings/AddBrand'
import Brands from '../../../../Components/Pages/ProductSettings/BrandSettings/Brands'
import Axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure({
    position: "bottom-right",
    autoClose: 4000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    style: { fontFamily: 'Oswald, sans-serif' },
})
class ProductBrand extends Component {

    state = {
        form_input: {
            brandName: ''
        },
        formErrors: {
            nameErr: ''
        },
        submitError: '',
        updateComponent: false
    }



    inuptChangeHandler = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let formErrors = this.state.formErrors;

        switch (name) {
            case 'brandName':
                formErrors.nameErr = value.length < 3 ? "Minimum 3 character required" : '';
                break;
            default:
                break;
        }
        const updatedValue = { ...this.state.form_input }
        updatedValue[name] = value;
        this.setState({ formErrors, form_input: updatedValue });
    }
    postBrandHandler = (event) => {

        event.preventDefault();
        let brand = {
            brandName: this.state.form_input.brandName
        }
        if (formValid(this.state)) {
            Axios.post(process.env.REACT_APP_SERVER + 'addBrand', brand).then(response => {
                if (typeof response.data.errors !== 'undefined') {
                    response.data.errors.map((error, index) => {
                        return toast.warn(error.message)
                       
                    })
                    window.$('#addBrandModal').on('hidden.bs.modal', function (e) {
                        window.$(this).removeData();
                    });
                }
                else {
                    
                    window.$("#addBrandModal").modal("hide");
                    window.$('#addBrandModal').on('hidden.bs.modal', function (e) {
                        window.$(this).removeData();
                    });
                    this.setState({form_input:{brandName: ''}  })
                }

            }).catch(err => {
                console.log(err);
            })
        }
        else{
            this.setState({ submitError: "Please fill all the fields" })
        }
    }

    deleteBrandHandler = (key) => {
        let brandId = {
            id: key
        }
        Axios.post(process.env.REACT_APP_SERVER + 'deleteBrand', brandId).then(response => {


            toast.danger("Product Brand Successfully Deleted");
        }).catch(err => {
            console.log(err);
        })
    }
    updateBrandHandler = (key) => {
        console.log(key);
        toast.warn("Wow so easy !");
    }

    render() {
        return (
            <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="card">
                    <div className="card-header bg-dark text-white">
                        <h4 className="d-inline">Product Brand Settings</h4>
                        <button className="d-inline btn btn-success btn-sm float-right" data-toggle="modal"
                            data-target="#addBrandModal">
                            <i className="material-icons">add</i>
                        </button>
                        <AddBrand changeInput={this.inuptChangeHandler}
                            addBrand={this.postBrandHandler}
                            state={this.state} />
                    </div>
                    <div className="card-body">
                        <Brands
                            deleteBrand={this.deleteBrandHandler}
                            update={this.updateBrandHandler} />
                    </div>
                </div>
            </div>
        )
    }
}




export default ProductBrand;