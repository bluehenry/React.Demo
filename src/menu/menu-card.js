import React, { Component } from 'react';
import './menu.css';
import menuData from './menu-data.json'

class MenuCard extends Component {
    render() {       
        return menuData.map((menu, i) => {
            return (
                <div className="card" key={i}>
                    {menu.label}
                    <div><i className={`fas ${menu.icon} fa-3x`}></i></div>
                </div>
            )
        });
    }
}

export default MenuCard;
