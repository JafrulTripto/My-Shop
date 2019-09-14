import React from 'react'
import { NavLink } from 'react-router-dom';



export default function ShowSuppliers(props) {
    return (
        <div className="row my-5 mx-1">
            <table className="table table-hover">
                <thead className="thead-light">

                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Supplier Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Contact Person</th>
                        <th scope="col">Phone Number</th>
                        {/* <th scope="col">Categories</th> */}
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {props.supplier.length !== 0 ? props.supplier.map((supplier, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{supplier.id}</th>
                                <td>{supplier.sup_Name}</td>
                                <td>{supplier.email}</td>
                                <td>{supplier.contact_person}</td>
                                <td>{supplier.contact_person_phone}</td>
                                {/* {supplier.Product_Categories.map((category, index) => {
                                        return (
                                            <td key={index}>
                                                <ul>
                                                    <li>{category.categoryName}</li>
                                                </ul>
                                            </td>
                                        )
                                    })} */}
                                <td>
                                    <NavLink className="badge badge-pill badge-info" to={'/suppliers/' + index}>Details</NavLink>
                                </td>
                            </tr>
                        )

                    }) : <tr >
                            <td colSpan="3">
                                <div className="d-flex justify-content-center">
                                    <div className="spinner-grow text-info" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    <div className="spinner-grow text-danger" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    <div className="spinner-grow" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    }

                </tbody>
            </table>
        </div>
    )
}
