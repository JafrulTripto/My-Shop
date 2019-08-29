import React, { Component } from 'react';
import { connect } from 'react-redux'
import {fetchProductCategory} from '../../../../Store/Actions'
import AddCategory from '../../../../Components/Pages/ProductSettings/CategorySettings/AddCategory';
import Categories from '../../../../Components/Pages/ProductSettings/CategorySettings/Category';
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
class ProductCategory extends Component {

    state = {
        categoryName: '',
        categories: [],
        updateComponent: false
    }

    inuptChangeHandler = (event) => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value })
    }
    postCategoryHandler = () => {
        let category = {
            categoryName: this.state.categoryName
        }
        Axios.post('http://localhost:4000/addCategory', category).then(response => {
            this.props.fetchProductCategory();
            toast.info("New Product Unit Added");
        }).catch(err => {
            console.log(err);
        })
        this.setState({ unitName: '' })
    }
    
    deleteCategoryHandler = (key) => {
        let categoryId = {
            id: key
        }
        Axios.post('http://localhost:4000/deleteCategory', categoryId).then(response => {
            this.props.fetchProductCategory();
            toast.danger("Product Category Successfully Deleted");
        }).catch(err => {
            console.log(err);
        })
    }
    updateCategoryHandler = (key) => {
        console.log(key);
        toast.warn("Wow so easy !");
    }


   
    componentDidMount() {
        this.props.fetchProductCategory();
    }

    render() {
        console.log(this.props.categories)
        return (
            <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="card">
                    <div className="card-header bg-dark text-white">
                        <h4 className="d-inline">Product Category Settings</h4>
                        <button className="d-inline btn btn-success btn-sm float-right" data-toggle="modal"
                            data-target="#addCategoryModal">
                            <i className="material-icons">add</i>
                        </button>
                        <AddCategory changeInput={this.inuptChangeHandler}
                            addCategory={this.postCategoryHandler}
                            state={this.state.categoryName} />
                    </div>
                    <div className="card-body">
                        <Categories categories={this.props.categories}
                            deleteCategory={this.deleteCategoryHandler}
                            update={this.updateCategoryHandler} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        categories: state.data.categories
    }
}

export default connect(mapStateToProps,{
    fetchProductCategory
})(ProductCategory)