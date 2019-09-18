import React, { Component } from 'react'
import AddProduct from '../../../../Components/Pages/ProductPage/AddProduct'
import '../../../../Style.css'

export default class Products extends Component {

    

    
    render() {
        
        return (
            <div className="container">
                <div className="row">
                    <div className="input-group mb-3 mx-3">
                        <input type="text" className="form-control" placeholder="Search Product" />
                    </div>
                </div>
                <button type="button" id="ContainerBody" className="btn btn-primary btn-lg btn-block"
                    data-toggle="modal" data-target="#addProductModal" >ADD NEW PRODUCT</button>
                <AddProduct changeInput={this.inuptChangeHandler}
                    supplier_id={this.props.supplier_id} />
            </div>
        )
    }
}
