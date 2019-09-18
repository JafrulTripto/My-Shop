import React, { Component } from 'react'
import { connect } from 'react-redux';
import Axios from 'axios';
import { toast } from 'react-toastify';
import { fetchSuppliers } from '../../../Store/Actions';



const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, form_input }) => {
    let valid = true;

    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });

    Object.values(form_input).forEach(val => {
        val.length === 0 && (valid = false)
    });
    return valid;
}

class AddSupplier extends Component {


    state = {
        form_input: {
            sup_Name: '',
            email: '',
            contact_person: '',
            contact_person_phone: '',
            category_id: '',
        },
        formErrors: {
            sup_Name: '',
            email: '',
            contact_person: '',
            contact_person_phone: '',
            category_id: '',
        },
        search: '',
        submitError: '',
    }

    inuptChangeHandler = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let formErrors = this.state.formErrors;

        switch (name) {
            case 'sup_Name':
                formErrors.sup_Name = value.length < 3 ? "Minimum 3 character required" : '';
                break;
            case 'email':
                formErrors.email = emailRegex.test(value) ? '' : "Enter a valid Email";
                break;
            case 'contact_person':
                formErrors.contact_person = value.length < 3 ? "Minimum 3 character required" : '';
                break;
            case 'contact_person_phone':
                formErrors.contact_person_phone = isNaN(value) ? "Enter a valid Phone Number" : '';
                break;
            case 'category_id':
                formErrors.category_id = value.length < 1 ? "Enter Category" : '';
                break;
            default:
                break;
        }
        const updatedValue = {...this.state.form_input}
        updatedValue[name] = value;
        this.setState({ formErrors, form_input: updatedValue });
    }

    modalClose = () => {
        let valid = true;
        Object.values(this.state.formErrors).forEach(val => {
            val.length > 0 && (valid = false);
        });
        return valid;
    }

    postSupplierHandler = (event) => {
        event.preventDefault();

        let supplier = {
            sup_Name: this.state.sup_Name,
            email: this.state.email,
            contact_person: this.state.contact_person,
            contact_person_phone: this.state.contact_person_phone,
            category_id: this.state.category_id
        }
        if (formValid(this.state)) {
            Axios.post(process.env.REACT_APP_SERVER + 'addSupplier', supplier).then(response => {
                toast.info("New Product Unit Added");
                this.props.fetchSuppliers();
                this.setState({
                    form_input: {
                        sup_Name: '',
                        email: '',
                        contact_person: '',
                        contact_person_phone: '',
                        category_id: '',
                    }
                })
                window.$("#addSupplierModal").modal("hide");
                console.log(this.state)
                window.$('#addSupplierModal').on('hidden.bs.modal', function (e) {
                    window.$(this).removeData();
                });


            }).catch(err => {
                console.log(err);
            })
        }
        else {

            this.setState({ submitError: "Please fill all the fields" })
        }


    }

    render() {

        console.log(this.state)
        const { formErrors } = this.state;
        return (
            <div className="modal fade " id="addSupplierModal"
                tabIndex="-1" role="dialog" aria-labelledby="addSupplierModalTitle" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header bg-dark">
                            <h5 className="modal-title text-white" id="exampleModalLongTitle">Add New Product</h5>
                            <button type="button" className="close text-white" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={this.postSupplierHandler} noValidate>
                                <div className="form-row">
                                    <div className="col-lg-6">
                                        <label className="text-dark" htmlFor="unit"><strong>Supplier Name</strong></label>
                                        <input type="text"
                                            className={formErrors.sup_Name.length > 0 ? "form-control is-invalid" : "form-control"}
                                            name="sup_Name" value={this.state.form_input.sup_Name}
                                            onChange={this.inuptChangeHandler} placeholder="Enter Supplier Name" />
                                        {formErrors.sup_Name.length > 0 && (<div className="invalid-feedback"> {formErrors.sup_Name}</div>)}
                                    </div>

                                    <div className="col-lg-6">
                                        <label className="text-dark" htmlFor="unit"><strong>Email</strong></label>
                                        <input type="text"
                                            className={formErrors.email.length > 0 ? "form-control is-invalid" : "form-control"}
                                            name="email" value={this.state.form_input.email} onChange={this.inuptChangeHandler} placeholder="Enter Email" />
                                        {formErrors.email.length > 0 && (<div className="invalid-feedback"> {formErrors.email}</div>)}
                                    </div>
                                    <div className="col-lg-6">
                                        <label className="text-dark" htmlFor="unit"><strong>Contact Person</strong></label>
                                        <input type="text" className={formErrors.contact_person.length > 0 ? "form-control is-invalid" : "form-control"}
                                            name="contact_person" value={this.state.form_input.contact_person}
                                            onChange={this.inuptChangeHandler} placeholder="Enter Contact Parson Name" />
                                        {formErrors.contact_person.length > 0 && (<div className="invalid-feedback"> {formErrors.contact_person}</div>)}
                                    </div>

                                    <div className="col-lg-6">
                                        <label className="text-dark" htmlFor="unit"><strong>Contact Person Phone</strong></label>
                                        <input type="text" className={formErrors.contact_person_phone.length > 0 ? "form-control is-invalid" : "form-control"}
                                            name="contact_person_phone" value={this.state.form_input.contact_person_phone}
                                            onChange={this.inuptChangeHandler} placeholder="Enter Contact Parson Phone No." />
                                        {formErrors.contact_person_phone.length > 0 && (<div className="invalid-feedback"> {formErrors.contact_person_phone}</div>)}
                                    </div>

                                    <div className="col-lg-6 mb-3">
                                        <label className="text-dark" htmlFor="Category"><strong>Select Category</strong></label>
                                        <select className={formErrors.category_id.length > 0 ? "form-control is-invalid" : "form-control"}
                                            name="category_id" id="exampleFormControlSelect1" value={this.state.form_input.category_id}
                                            onChange={this.inuptChangeHandler}>
                                            <option value=''>Select...</option>
                                            {this.props.categories.map((category, index) => {
                                                return <option value={category.id} key={index}>{category.categoryName}</option>
                                            })}

                                        </select>
                                        {formErrors.category_id.length > 0 && (<div className="invalid-feedback"> {formErrors.category_id}</div>)}
                                    </div>
                                    {/* {this.state.submitError ? (<div className="alert alert-danger" role="alert">
                                        {this.state.submitError}
                                    </div>) : null} */}

                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary" >Save changes</button>
                                </div>

                            </form>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        categories: state.data.categories,
    }
}

export default connect(mapStateToProps, { fetchSuppliers })(AddSupplier);