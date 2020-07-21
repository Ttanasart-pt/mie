import React from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';

import icon_home from '../svg/home.svg';
import icon_cart from '../svg/minecart.svg';
import icon_gear from '../svg/gear.svg';

import './sidebar.css';

class Sidebar extends React.Component{
    constructor() {
        super();
        this.state = {
            data:
            [
                {
                    "name": "Home",
                    "icon" : icon_home,
                    "page": "/"
                },
                {
                    "name": "Mines",
                    "icon" : icon_cart,
                    "page": "/mines"
                },
                {
                    "name": "Settings",
                    "icon" : icon_gear,
                    "page": "/settings"
                },
            ]
        }
    }
    render(){
        return (
            <HashRouter>
                <div className="sidebar">
                    {
                        this.state.data.map((i) => (
                            <NavLink exact to={i.page}>
                                <img src={i.icon} />
                            </NavLink>
                        ))
                    }
                </div>
            </HashRouter>
        );
    }
}

export default Sidebar;