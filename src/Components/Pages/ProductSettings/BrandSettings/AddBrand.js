import React from 'react'

export default function AddBrand(props) {
    let error = props.state.formErrors.nameErr;
    return (
        <div className="modal fade" id="addBrandModal" tabIndex="-1" role="dialog" aria-labelledby="addUnitModalTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header bg-dark">
                        <h5 className="modal-title" id="exampleModalLongTitle">Add New Product Brand</h5>
                        <button type="button" className="close text-white" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={props.addBrand} noValidate>
                            <div className="form-group">
                                <label className="text-dark" htmlFor="unit"><strong>Add Brand</strong></label>
                                <input type="text" value={props.state.form_input.brandName}
                                className={error.length > 0 ? "form-control is-invalid" : "form-control"}
                                 name="brandName"
                                    onChange={props.changeInput} placeholder="Enter New Brand" />
                                {error.length > 0 && (<div className="invalid-feedback"> {error}</div>)}
                                
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary">Save changes</button>
                            </div>
                            {props.state.submitError ? (<div className="alert alert-danger" role="alert">
                                        {props.state.submitError}
                                    </div>) : null}
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}
