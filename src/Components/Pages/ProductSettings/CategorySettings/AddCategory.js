import React from 'react'

export default function AddCategory(props) {
    return (
        <div className="modal fade" id="addCategoryModal" tabIndex="-1" role="dialog" aria-labelledby="addUnitModalTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-header bg-dark">
                    <h5 className="modal-title" id="exampleModalLongTitle">Add New Product Category</h5>
                    <button type="button" className="close text-white" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="form-group">
                            <label className="text-dark" htmlFor="unit"><strong>Add Category</strong></label>
                            <input type="text" value={props.state} className="form-control" name="categoryName"  onChange={props.changeInput} placeholder="Enter New Category" />
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
