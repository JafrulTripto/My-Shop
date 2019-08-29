import React from 'react';
import ProductUnit from '../../../Containers/Layout/Settings/ProductSettings/ProductUnit'
import ProductCategory from '../../../Containers/Layout/Settings/ProductSettings/ProductCategory'


export default function ProductSettigs() {
    return (
        <div className="container">
            <div className="row">
                <ProductUnit />
                <ProductCategory />
            </div>
        </div>



    )
}
