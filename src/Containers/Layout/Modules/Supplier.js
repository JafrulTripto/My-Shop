import React, { Component } from 'react'
import { connect } from 'react-redux';
import Axios from 'axios';
import { toast } from 'react-toastify';
import { fetchSuppliers } from '../../../Store/Actions';
import AddSupplier from '../../../Components/Pages/Supplier/AddSupplier';
import './Style.css';


class Supplier extends Component {

    state = {
        sup_Name: '',
        email: '',
        contact_person: '',
        contact_person_phone: '',
        category_id: null

    }
    inuptChangeHandler = (event) => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value });
    }
    postUnitHandler = () => {
        let supplier = {
            sup_Name: this.state.sup_Name,
            email: this.state.email,
            contact_person: this.state.contact_person,
            contact_person_phone: this.state.contact_person_phone,
            category_id: this.state.category_id
        }
        Axios.post('http://localhost:4000/addSupplier', supplier).then(response => {
            toast.info("New Product Unit Added");
            this.setState({
                sup_Name: '',
                email: '',
                contact_person: '',
                contact_person_phone: '',
                category_id: null
            })
        }).catch(err => {
            console.log(err);
        })
    }

    componentDidMount(){
        this.props.fetchSuppliers();
    }

    render() {
        console.log(this.props.suppliers);
        return (
            <div className="container">
                <div className="row">
                    <div className="input-group mb-3 mx-3">
                        <input type="text" className="form-control" placeholder="Search Product"
                            aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-primary" type="button" id="button-addon2">Search</button>
                        </div>
                    </div>
                </div>
                <button type="button" id="ContainerBody" className="btn btn-primary btn-lg btn-block"
                    data-toggle="modal" data-target="#addSupplierModal">ADD NEW SUPPLIER</button>
                <AddSupplier changeInput={this.inuptChangeHandler}
                    addSupplier={this.postUnitHandler} />
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        suppliers: state.supplierData
    }
}

export default connect(mapStateToProps, { 
    fetchSuppliers
})(Supplier);