import React from 'react'
import Aux from '../../../Hoc/Hoc'
import { NavLink } from 'react-router-dom';

import classes from './Sidebar.module.css';

export default function sidebar(props) {

    let items = (
        <ul className={classes.sidebarNav}>
            {props.items.map((item, index) => {
                return <li key = {index}>{
                    item.subItems.length === 0 ?<NavLink key={index} to={item.path}><i className="material-icons">{item.icon}</i> {item.itemName}</NavLink>
                    :<Aux>
                    <a data-toggle="collapse"  href={"#" + item.id} aria-expanded="false" aria-controls="collapseExample"><i className="material-icons">{item.icon}</i>
                        {item.itemName}</a>
                    <div className="collapse" id={item.id}>{
                        item.subItems.map((subItem, index) => {
                            return <NavLink key={index} to={subItem.path}>{subItem.name}</NavLink>
                        })
                    }
                    </div>
                    </Aux>
                }
                    
                </li>
            })}
        </ul>

    )

    return (
        <div id={classes.sidebarWrapper} className={props.toggle ? classes.toggledSidebar : null}>
            {items}
        </div>
    )
}
