import React, { Component } from 'react'
import AddSupplier from '../../../Components/Pages/Supplier/AddSupplier';
import './Style.css';


export default class Supplier extends Component {

    state = {
        sup_Name: '',
        email:'',
        contact_person:'',
        contact_person_phone:'',
        category_id:null
       
    }
    inuptChangeHandler = (event) => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        console.log(this.state);
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
                <button type="button" id="ContainerBody"  className="btn btn-primary btn-lg btn-block"
                    data-toggle="modal" data-target="#addSupplierModal">ADD NEW SUPPLIER</button>
                <AddSupplier changeInput = {this.inuptChangeHandler}/>
            </div>
        )
    }
}
