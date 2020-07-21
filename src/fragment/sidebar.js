import React from 'react';
import './sidebar.css';
import icon_home from '../svg/home.svg';
import icon_cart from '../svg/minecart.svg';
import icon_gear from '../svg/gear.svg';

class Sidebar extends React.Component{
    constructor() {
        super();
        this.state = {
            data:
            [
                {
                    "name": "Home",
                    "icon" : icon_home
                },
                {
                    "name": "Mines",
                    "icon" : icon_cart
                },
                {
                    "name": "Settings",
                    "icon" : icon_gear
                },
            ]
        }
    }
    render(){
        return (
            <div className="sidebar">
                {
                    this.state.data.map((i) => (
                        <div><img src={i.icon} /></div>
                    ))
                }
            </div>
        );
    }
}

export default Sidebar;