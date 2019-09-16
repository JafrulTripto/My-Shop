import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchSuppliers } from '../../../Store/Actions';

class AddProduct extends Component {

    state = {
        supplier_id: '',
        supplier_key: ''
    }
    inuptChangeHandler = (event) => {
        event.preventDefault();
        const selectedIndex = event.target.options.selectedIndex;
       this.setState({
            supplier_id : event.target.value,
            supplier_key: event.target.options[selectedIndex].getAttribute('data-key')
         })
    }
    // componentDidMount(){
    //     if(this.props.suppliers.length === 0){
    //         this.props.fetchSuppliers();
    //     }
    // }
    render() {
        
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
                                        <input type="text"  className="form-control" name="productName"
                                             placeholder="Enter New Category" />
                                    </div>

                                    <div className="col-lg-4">
                                        <label className="text-dark" htmlFor="unit"><strong>Barcode</strong></label>
                                        <input type="text" className="form-control" name="barcode"
                                             placeholder="Enter New Category" />
                                    </div>
                                    <div className="col-lg-4">
                                        <label className="text-dark" htmlFor="unit"><strong>Select Unit</strong></label>
                                        <select className="form-control" id="exampleFormControlSelect1">
                                            <option >Select...</option>
                                            {this.props.units.map((unit, index) => {
                                                return <option key={index}>{unit.unitName}</option>
                                            })}

                                        </select>
                                    </div>

                                    <div className="col-lg-4">
                                        <label className="text-dark" htmlFor="Category"><strong>Select Supplier</strong></label>
                                        <select className="form-control" name="supplier_id"
                                             onChange={this.inuptChangeHandler}>
                                            <option >Select...</option>
                                            {this.props.suppliers.map((supplier, index) => {
                                                return <option value={supplier.id} key={index} data-key={index}>{supplier.sup_Name}</option>
                                            })}

                                        </select>
                                    </div>

                                    <div className="col-lg-4">
                                        <label className="text-dark" htmlFor="Category"><strong>Select Category</strong></label>
                                        <select className="form-control" id="exampleFormControlSelect1">
                                           
                                            {this.state.supplier_key ?this.props.suppliers[this.state.supplier_key].Product_Categories.map((category, index) => {
                                                return <option key={index}>{category.categoryName}</option>
                                            }) : <option >Select...</option>}

                                        </select>
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