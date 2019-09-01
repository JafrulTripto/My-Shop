import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchProductUnit, fetchProductCategory } from '../../Store/Actions';
import Sidebar from '../../Components/MainLayout/Sidebar/Sidebar';
import Navbar from '../../Components/MainLayout/Navbar/Navbar'
import Aux from '../../Hoc/Hoc';
import { Route } from 'react-router-dom';
import Dashboard from '../../Components/Pages/Dashboard';
import Page2 from '../../Components/Pages/Page2';
import ProductSettings from '../../Components/Pages/ProductSettings/ProductSettigs';
import Products from './Modules/Products'
import Suppliers from './Modules/Supplier'
import Styles from './MainLayout.module.css';
import SupplierDetails from '../../Components/Pages/Supplier/SupplierDetails';


class MainLayout extends Component {

    state = {
        sidebarItems: [
            {
                id: "item001",
                path: '/',
                component: Dashboard,
                itemName: 'Dashboard',
                icon: 'list_alt',
                subItems: []

            },

            {
                id: "item002",
                itemName: 'Main Setup',
                icon: 'settings',
                subItems: [{
                    name: 'Product Setup',
                    component: ProductSettings,
                    path: '/productSettings'
                },
                {
                    name: 'Role Setup',
                    component: Page2,
                    path: '/page2'
                }]

            },
            {
                id: "item003",
                path: '/products',
                component: Products,
                itemName: 'Products',
                icon: 'archive',
                subItems: []

            },
            {
                id: "item004",
                path: '/suppliers',
                component: Suppliers,
                itemName: 'Suppliers',
                icon: 'home_work',
                subItems: []

            },

        ],

        toggleButton: true,
    }

    toggleSidebar = () => {
        this.state.toggleButton ? this.setState({ toggleButton: false }) : this.setState({ toggleButton: true })
    }
    componentDidMount() {
        this.props.fetchProductUnit();
        this.props.fetchProductCategory();
    }


    render() {

        return (
            <Aux>
                <Navbar toggle={this.toggleSidebar} />
                <div className='row'>
                    <Sidebar toggle={this.state.toggleButton}
                        items={this.state.sidebarItems}
                        toggleSubItem={this.toggleSubItem}
                        subItem={this.state.toggleSubItem} />
                </div>
                <div id={Styles.pageContentWrapper} className={this.state.toggleButton ? Styles.toggledPageContent : null}>
                    {this.state.sidebarItems.map((item, index) => {
                        return item.subItems.length !== 0 ? item.subItems.map((subItem, index) => {
                            return <Route path={subItem.path} key={index} exact component={subItem.component} />
                        }) : <Route path={item.path} exact key={index} component={item.component} />
                    })
                    }
                    <Route path='/suppliers/:id' exact component={SupplierDetails}/>
                </div>
            </Aux>
        )
    }
}

export default connect(null, {
    fetchProductUnit,
    fetchProductCategory

})(MainLayout);
