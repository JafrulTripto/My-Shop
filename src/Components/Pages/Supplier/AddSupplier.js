import React from 'react'
import { connect } from 'react-redux';


function AddSupplier(props) {

    return (
        <div className="modal fade " id="addSupplierModal" tabIndex="-1" role="dialog" aria-labelledby="addSupplierModalTitle" aria-hidden="true">
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
                                <div className="col-lg-6">
                                    <label className="text-dark" htmlFor="unit"><strong>Supplier Name</strong></label>
                                    <input type="text" value={props.state} className="form-control" name="sup_Name"
                                        onChange={props.changeInput} placeholder="Enter Supplier Name" />
                                </div>

                                <div className="col-lg-6">
                                    <label className="text-dark" htmlFor="unit"><strong>Email</strong></label>
                                    <input type="text" value={props.state} className="form-control" name="email"
                                        onChange={props.changeInput} placeholder="Enter Email" />
                                </div>
                                <div className="col-lg-6">
                                    <label className="text-dark" htmlFor="unit"><strong>Contact Person</strong></label>
                                    <input type="text" value={props.state} className="form-control" name="contact_person"
                                        onChange={props.changeInput} placeholder="Enter Contact Parson Name" />
                                </div>
                                
                                <div className="col-lg-6">
                                    <label className="text-dark" htmlFor="unit"><strong>Contact Person Phone</strong></label>
                                    <input type="text" value={props.state} className="form-control" name="contact_person_phone"
                                        onChange={props.changeInput} placeholder="Enter Contact Parson Phone No." />
                                </div>
                                
                                <div className="col-lg-6">
                                <label className="text-dark"  htmlFor="Category"><strong>Select Category</strong></label>
                                    <select className="form-control" name="category_id" id="exampleFormControlSelect1" onChange={props.changeInput}>
                                    <option >Select...</option>
                                        {props.categories.map((category, index) =>{
                                            return <option value={index} key={index}>{category.categoryName}</option>     
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
        categories: state.data.categories,
    }
}

export default connect(mapStateToProps)(AddSupplier);