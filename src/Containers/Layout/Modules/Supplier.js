import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchSuppliers } from '../../../Store/Actions';
import AddSupplier from '../../../Components/Pages/Supplier/AddSupplier';
import ShowSuppliers from '../../../Components/Pages/Supplier/ShowSuppliers';
import '../../../Style.css'
class Supplier extends Component {

    state = {
        search: '',
    }

    componentDidMount(prevProp, prevState) {
        if (this.props.suppliers.length === 0) {
            this.props.fetchSuppliers();
        }


    }

    render() {

        let filteredSuppliers = this.props.suppliers.filter(supplier => {
            return supplier.sup_Name.toLowerCase().indexOf(this.state.search) !== -1;
        });
        return (
            <div className="container">
                <div className="row">
                    <div className="input-group mb-3 mx-3">
                        <input type="text" className="form-control" name="search" onChange={this.inuptChangeHandler}
                            placeholder="Search Supplier By Name . . ." aria-label="Recipient's username" aria-describedby="button-addon2" />

                    </div>
                </div>
                <button type="button" id="ContainerBody" className="btn btn-dark btn-lg btn-block"
                    data-toggle="modal" data-target="#addSupplierModal">ADD NEW SUPPLIER</button>
                <AddSupplier />
                <ShowSuppliers supplier={filteredSuppliers} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        suppliers: state.supplierData.suppliers
    }
}

export default connect(mapStateToProps, {
    fetchSuppliers
})(Supplier);