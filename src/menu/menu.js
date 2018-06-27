import React, { Component } from 'react';
import './menu.css';
import MenuCard from './menu-card';


class Menu extends Component {
  render() {  
    return (     	            
      <div className="flex-container">
        <MenuCard />
      </div>              
    );      
  }
}

export default Menu;
