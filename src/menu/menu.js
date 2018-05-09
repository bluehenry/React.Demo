import React, { Component } from 'react';
import './menu.css';

class Menu extends Component {
    fetchMenus = () => {
        fetch('./menu.json')
        .then(rsp => rsp.json())
        .then(allMenus => {
            this.allMenus = allMenus;
        })
    }

    render() {
       return (
            <div>
                <div className="flex-container">
                    <div className="order-12">1</div>
                    <div className="order-12">2</div>
                    <div className="order-12">3</div>
                </div>
                <div class="d-flex flex-row bd-highlight mb-3">
  <div class="p-2 bd-highlight">Flex item 1</div>
  <div class="p-2 bd-highlight">Flex item 2</div>
  <div class="p-2 bd-highlight">Flex item 3</div>
</div>
<div class="d-flex flex-row-reverse bd-highlight">
  <div class="p-2 bd-highlight">Flex item 1</div>
  <div class="p-2 bd-highlight">Flex item 2</div>
  <div class="p-2 bd-highlight">Flex item 3</div>
</div>
            </div>            
        );
    }
}

export default Menu;
