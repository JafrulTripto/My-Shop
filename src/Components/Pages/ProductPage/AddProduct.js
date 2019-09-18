import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchSuppliers } from '../../../Store/Actions';

class AddProduct extends Component {

    state = {
        porduct_name: '',
        barcode: '',
        supplier_id: '',
        supplier_key: '',
        category_id: '',
        unit_id: '',
        price: null,
        image: null,
        formErrors: {
            porduct_name: '',
            barcode: '',
            category_id: '',
            supplier_id: '',
            unit_id: '',
            price: ''
        }
    }


    inuptChangeHandler = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let formErrors = this.state.formErrors;

        switch (name) {
            case 'porduct_name':
                formErrors.porduct_name = value.length < 3 ? "Minimum 3 character required" : '';
                break;
            case 'barcode':
                formErrors.barcode = value.length < 6 ? "Minimum 6 character required" : '';
                break;
            case 'supplier_id':
                formErrors.supplier_id = value.length < 1 ? "Please select a supplier" : '';
                break;
            case 'unit_id':
                formErrors.unit_id = value.length < 1 ? "Please select a unit" : '';
                break;
            case 'category_id':
                formErrors.category_id = value.length < 1 ? "Please select a category" : '';
                break;
            case 'price':
                formErrors.price = value.length < 1 ? "Enter product price" : '';
                break;
            default:
                break;
        }
        this.setState({ formErrors, [name]: value });
    }

    imageSelectHandler = (event) => {
        event.preventDefault();
        this.setState({
            image: event.target.files[0]
        })
    }
    supplierInuptChangeHandler = (event) => {
        event.preventDefault();
        const selectedIndex = event.target.options.selectedIndex;
        const { name, value } = event.target;
        let formErrors = this.state.formErrors;

        switch (name) {
            case 'supplier_id':
                formErrors.supplier_id = value.length < 1 ? "Please select a supplier" : '';
                break;
            default:
                break;
        }
        this.setState({
            formErrors,
            [name]: value,
            supplier_key: event.target.options[selectedIndex].getAttribute('data-key')
        })
    }
    componentDidMount() {
        if (this.props.suppliers.length === 0) {
            this.props.fetchSuppliers();
        }
    }

    componentDidUpdate() {
        console.log(this.state)
    }
    render() {
        const { formErrors } = this.state;
        return (
            <div className="modal fade " id="addProductModal" tabIndex="-1" role="dialog"
                aria-labelledby="addProductModalTitle" aria-hidden="false">
                <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header bg-dark">
                            <h5 className="modal-title text-white" id="exampleModalLongTitle">Add New Product</h5>
                            <button type="button" className="close text-white" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-row">
                                    <div className="col-lg-4">
                                        <label className="text-dark" htmlFor="unit"><strong>Product Name</strong></label>
                                        <input type="text" className={formErrors.porduct_name.length > 0 ? "form-control is-invalid" : "form-control"} name="porduct_name"
                                            placeholder="Enter Product Name" onChange={this.inuptChangeHandler} />
                                        {formErrors.porduct_name.length > 0 && (<div className="invalid-feedback"> {formErrors.porduct_name}</div>)}
                                    </div>

                                    <div className="col-lg-4">
                                        <label className="text-dark" htmlFor="unit"><strong>Barcode</strong></label>
                                        <input type="text" className={formErrors.barcode.length > 0 ? "form-control is-invalid" : "form-control"} name="barcode"
                                            placeholder="Enter Barcode" onChange={this.inuptChangeHandler} />
                                        {formErrors.barcode.length > 0 && (<div className="invalid-feedback"> {formErrors.barcode}</div>)}
                                    </div>

                                    <div className="col-lg-4">
                                        <label className="text-dark" htmlFor="Category"><strong>Select Supplier</strong></label>
                                        <select className={formErrors.supplier_id.length > 0 ? "form-control is-invalid" : "form-control"} name="supplier_id"
                                            onChange={this.supplierInuptChangeHandler}>
                                            <option value="">Select...</option>
                                            {this.props.suppliers.map((supplier, index) => {
                                                return <option value={supplier.id} key={index} data-key={index}>{supplier.sup_Name}</option>
                                            })}

                                        </select>
                                        {formErrors.supplier_id.length > 0 && (<div className="invalid-feedback"> {formErrors.supplier_id}</div>)}
                                    </div>

                                    <div className="col-lg-4">
                                        <label className="text-dark" htmlFor="Category"><strong>Select Category</strong></label>
                                        <select className={formErrors.category_id.length > 0 ? "form-control is-invalid" : "form-control"}
                                            id="exampleFormControlSelect1"
                                            onChange={this.inuptChangeHandler} name="category_id">
                                            <option value="">Select...</option>
                                            {this.state.supplier_key ? this.props.suppliers[this.state.supplier_key].Product_Categories.map((category, index) => {
                                                return <option value={category.id} key={index}>{category.categoryName}</option>
                                            }) : null}

                                        </select>
                                        {formErrors.category_id.length > 0 && (<div className="invalid-feedback"> {formErrors.category_id}</div>)}
                                    </div>

                                    <div className="col-lg-4">
                                        <label className="text-dark" htmlFor="unit" ><strong>Select Unit</strong></label>
                                        <select className={formErrors.unit_id.length > 0 ? "form-control is-invalid" : "form-control"}
                                            id="exampleFormControlSelect1"
                                            onChange={this.inuptChangeHandler} name="unit_id">
                                            <option value=''>Select...</option>
                                            {this.props.units.map((unit, index) => {
                                                return <option value={unit.id} key={index}>{unit.unitName}</option>
                                            })}

                                        </select>
                                        {formErrors.unit_id.length > 0 && (<div className="invalid-feedback"> {formErrors.unit_id}</div>)}
                                    </div>

                                    <div className="col-lg-4">
                                        <label className="text-dark" htmlFor="unit" ><strong>Price</strong></label>
                                        <div className="input-group">
                                            <input type="text"
                                                className={formErrors.price.length > 0 ? "form-control is-invalid" : "form-control"}
                                                placeholder="Enter Price" aria-label="price"
                                                aria-describedby="basic-addon2" name="price" onChange={this.inuptChangeHandler} />
                                            <div className="input-group-append">
                                                <span className="input-group-text" id="basic-addon2">tk</span>
                                            </div>
                                            {formErrors.price.length > 0 && (<div className="invalid-feedback"> {formErrors.price}</div>)}
                                        </div>

                                    </div>
                                    <div className="col-lg-4">
                                        <label className="text-dark" htmlFor="unit"><strong>Upload Product Image</strong></label>
                                        <div className="input-group">
                                            <div className="custom-file">
                                                <input type="file" className="custom-file-input" id="inputGroupFile02"
                                                    name="image" onChange={this.imageSelectHandler} />
                                                <label className="custom-file-label" htmlFor="inputGroupFile02"
                                                    aria-describedby="inputGroupFileAddon02">Choose file</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        units: state.data.units,
        categories: state.data.categories,
        suppliers: state.supplierData.suppliers,
    }
}

export default connect(mapStateToProps, {
    fetchSuppliers
})(AddProduct);