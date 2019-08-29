import React from 'react'
import { connect } from 'react-redux';


function AddProduct(props) {

    return (
        <div className="modal fade " id="addProductModal" tabIndex="-1" role="dialog" aria-labelledby="addProductModalTitle" aria-hidden="true">
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
                                    <input type="text" value={props.state} className="form-control" name="productName"
                                        onChange={props.changeInput} placeholder="Enter New Category" />
                                </div>

                                <div className="col-lg-4">
                                    <label className="text-dark" htmlFor="unit"><strong>Barcode</strong></label>
                                    <input type="text" value={props.state} className="form-control" name="barcode"
                                        onChange={props.changeInput} placeholder="Enter New Category" />
                                </div>
                                <div className="col-lg-4">
                                <label className="text-dark" htmlFor="unit"><strong>Select Unit</strong></label>
                                    <select className="form-control" id="exampleFormControlSelect1">
                                    <option >Select...</option>
                                        {props.units.map((unit, index) =>{
                                            return <option key={index}>{unit.unitName}</option>     
                                        })}
                                       
                                    </select>
                                </div>
                                <div className="col-lg-4">
                                <label className="text-dark" htmlFor="Category"><strong>Select Category</strong></label>
                                    <select className="form-control" id="exampleFormControlSelect1">
                                    <option >Select...</option>
                                        {props.categories.map((category, index) =>{
                                            return <option key={index}>{category.categoryName}</option>     
                                        })}
                                       
                                    </select>
                                </div>

                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={props.addCategory}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        units: state.data.units,
        categories: state.data.categories,
    }
}

export default connect(mapStateToProps)(AddProduct);