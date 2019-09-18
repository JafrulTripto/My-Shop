import React, { Component } from 'react'
import { connect } from 'react-redux';
import Axios from 'axios';
import { toast } from 'react-toastify';
import { fetchSuppliers } from '../../../Store/Actions';
import '../../../Style.css'



class SupplierDetails extends Component {


    state = {
        category_id: null,
    }

    handleChange = (event) => {
        this.setState({category_id: event.target.value})
    }

    postSupplierCategoryHandler = () => {
        let supplier = {
            supplier_id:this.props.suppliers[this.props.match.params.id].id,
            category_id: this.state.category_id
        }
        Axios.post(process.env.REACT_APP_SERVER+'addSupplierCategory', supplier).then(response => {
            toast.info("New Category For This Supplier Added");
            this.props.fetchSuppliers();
            this.setState({
                category_id: null
            })
        }).catch(err => {
            console.log(err);
        })
    }
    deleteSupplierHandler = () => {
        let supplier_id = {
            id:this.props.suppliers[this.props.match.params.id].id
        }
        Axios.post(process.env.REACT_APP_SERVER+'deleteSupplier', supplier_id).then(response => {
            this.props.fetchSuppliers();
            this.props.history.push({pathname:'/suppliers'})
            toast.error("Product Unit Successfully Deleted");
        }).catch(err => {
            console.log(err);
        })
    }
    


    componentDidMount() {
        //console.log(this.props.suppliers.length)
        if (this.props.suppliers.length === 0) {
            this.props.fetchSuppliers();
        }
    }

    render() {
        console.log(this.props.suppliers)

        let index = this.props.match.params.id;
        var style = {
            backgroundColor: '#e3e2e1',
            borderRadius: '8px'
        }
        return (
            <div className="container">
                {this.props.suppliers.length !== 0 ?
                    <div className="card border-info mb-3">
                        <div className="card-header bg-info text-white "><h3>{this.props.suppliers[index].sup_Name}</h3></div>
                        <div className="card-body ">
                            <div className="row ">
                                <div className="col-lg-6 p-3 mx-3" style={style}>
                                    <h5 className="card-title text-info ">Supplier Details :</h5>
                                    <p className="m-1"><strong>Company Name : </strong>{this.props.suppliers[index].sup_Name}</p>
                                    <p className="m-1"><strong>Company email : </strong>{this.props.suppliers[index].email}</p>
                                    <p className="m-1"><strong>Contact Person : </strong>{this.props.suppliers[index].contact_person}</p>
                                    <p className="m-1"><strong>Contact Person Phone: </strong>{this.props.suppliers[index].contact_person_phone}</p>
                                    <div className="m-1"><strong>Supplier Categories: 
                                    </strong>{this.props.suppliers[index].Product_Categories.map((category, index) => {
                                        return (
                                            <span key={index} className="badge badge-pill badge-danger mx-1">{category.categoryName}</span>
                                        )
                                    })}</div>
                                </div>

                                <div className="col-lg-5 p-3 mx-3" style={style}>
                                    <button type="button" data-toggle="modal" data-target="#CategoryModal" 
                                    id="ContainerBody" className="btn btn-outline-info btn-block mt-4">ADD CATEGORY</button>
                                    <button type="button" id="ContainerBody" className="btn btn-outline-dark btn-block">EDIT SUPPLIER INFO </button>
                                    <button type="button" id="ContainerBody" className="btn btn-outline-danger btn-block"
                                    onClick={ this.deleteSupplierHandler }>DELETE SUPPLIER </button>
                                </div>
                                <div className="modal fade " id="CategoryModal" tabIndex="-1" role="dialog" 
                                aria-labelledby="addSupplierModalTitle" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header bg-dark">
                                                <h5 className="modal-title text-white" id="exampleModalLongTitle">
                                                    Add Category For {this.props.suppliers[index].sup_Name}</h5>
                                                <button type="button" className="close text-white" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <form>

                                                    <label className="text-dark" htmlFor="Category"><strong>Select Category</strong></label>
                                                    <select className="form-control" name="category_id" id="exampleFormControlSelect1" 
                                                    onChange={this.handleChange}>
                                                        <option >Select...</option>
                                                        {this.props.categories.map((category, index) => {
                                                            return <option value={category.id} key={index}>{category.categoryName}</option>
                                                        })}

                                                    </select>


                                                </form>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-primary" data-dismiss="modal" 
                                                onClick={this.postSupplierCategoryHandler}>Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> : <div><h2>No Data</h2></div>
                }


            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        suppliers: state.supplierData.suppliers,
        categories: state.data.categories,
    }
}
export default connect(mapStateToProps, {
    fetchSuppliers
})(SupplierDetails);