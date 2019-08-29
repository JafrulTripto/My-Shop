import React, { Component } from 'react'


export default class Dashboard extends Component {


    render() {

        return (
            <div className="container">
                <div className="col-lg-12 col-md-12">
                    <div className="row">

                        <div className="col-lg-3 col-md-6 col-sm-6 my-2">
                            <div className="card bg-info text-white">
                                <div className="card-header">
                                    <h6 className="card-title">Products</h6>
                                </div>
                                <div className="card-body">
                                    <h1 className="card-title">200+</h1>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6 my-2">
                            <div className="card bg-warning text-white">
                                <div className="card-header">
                                    <h6 className="card-title">Products</h6>
                                </div>
                                <div className="card-body">
                                    <h1 className="card-title">200+</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 my-2">
                            <div className="card bg-danger text-white">
                                <div className="card-header">
                                    <h6 className="card-title">Products</h6>
                                </div>
                                <div className="card-body">
                                    <h1 className="card-title">200+</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 my-2">
                            <div className="card bg-secondary  text-white">
                                <div className="card-header">
                                    <h6 className="card-title">Products</h6>
                                </div>
                                <div className="card-body">
                                    <h1 className="card-title">200+</h1>
                                </div>
                            </div>
                        </div>


                       
                    </div>
                </div>

            </div>
        )
    }
}
