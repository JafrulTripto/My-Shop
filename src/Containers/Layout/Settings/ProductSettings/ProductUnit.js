import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProductUnit } from '../../../../Store/Actions';
import AddUnit from '../../../../Components/Pages/ProductSettings/UnitSettings/AddUnit';
import Units from '../../../../Components/Pages/ProductSettings/UnitSettings/Units';
import Axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure({
    position: "bottom-right",
    autoClose: 4000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    style: { fontFamily: 'Oswald, sans-serif' },
})
class ProductUnit extends Component {

    state = {
        unitName: '',
        units: [],
        updateComponent: false
    }

    inuptChangeHandler = (event) => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value })
    }
    postUnitHandler = () => {
        let unit = {
            unitName: this.state.unitName
        }
        Axios.post('http://localhost:4000/addUnit', unit).then(response => {
            this.setState({ updateComponent: true });
            this.props.fetchProductUnit();
            toast.info("New Product Unit Added");
        }).catch(err => {
            console.log(err);
        })
        this.setState({ unitName: '' })
    }
    // getUnitsHandler = () => {
    //     Axios.get('http://localhost:4000/getUnit').then(response => {
    //         this.setState({ units: response.data, updateComponent: false })
    //     }).catch(err => {
    //         console.log(err);
    //     })
    // }
    deleteUnitHandler = (key) => {
        let unitId = {
            id: key
        }
        Axios.post('http://localhost:4000/deleteUnit', unitId).then(response => {
            this.props.fetchProductUnit();
            toast.error("Product Unit Successfully Deleted");
        }).catch(err => {
            console.log(err);
        })
    }
    

    render() {
        console.log(this.props.units)
        return (
            
            <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="card">
                    <div className="card-header bg-dark text-white">
                        <h4 className="d-inline">Product Unit Settings</h4>
                        <button className="d-inline btn btn-success btn-sm float-right" data-toggle="modal"
                            data-target="#addUnitModal">
                            <i className="material-icons">add</i>
                        </button>
                        <AddUnit changeInput={this.inuptChangeHandler}
                            addUnit={this.postUnitHandler}
                            state={this.state.unitName} />
                    </div>
                    <div className="card-body">
                        <Units units={this.props.units}
                            deleteUnit={this.deleteUnitHandler}
                            update={this.updateUnitHandler} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        units: state.data.units
    }
}

export default connect(mapStateToProps, { 
    fetchProductUnit
})(ProductUnit);