import React, { Component } from 'react'
import AddProduct from '../../../Components/Pages/ProductPage/AddProduct'
import Styles from './Products.module.css';

export default class Products extends Component {
    render() {
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
                <button type="button" id={Styles.ContainerBody} className="btn btn-primary btn-lg btn-block"
                    data-toggle="modal" data-target="#addProductModal">ADD NEW PRODUCT</button>
                <AddProduct />
            </div>
        )
    }
}
