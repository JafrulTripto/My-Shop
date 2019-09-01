import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchSuppliers } from '../../../Store/Actions';



class SupplierDetails extends Component {

    componentDidMount(){
        if(this.props.suppliers.length === 0){
            this.props.fetchSuppliers();
        }
    }

    render() {
        let index = this.props.match.params.id;
        return (
            <div>
                <div className="container">
                    <div className="card border-info mb-3">
                        <div className="card-header bg-info text-white"><h3>{this.props.suppliers[index].sup_Name}</h3></div>
                        <div className="card-body ">
                            <h5 className="card-title">Info card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
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
})(SupplierDetails);