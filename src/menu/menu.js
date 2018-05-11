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
                <div class="card">Flex item 1</div>
                <div class="card">Flex item 2</div>
                <div class="card">Flex item 3</div>
                <div class="card">Flex item 4</div>
                <div class="card">Flex item 5</div>
                <div class="card">Flex item 6</div>
                <div class="card">Flex item 7</div>
                <div class="card">Flex item 8</div>
                <div class="card">Flex item 9</div>
                <div class="card">Flex item 10</div>
             </div>
            </div>            
        );
    }
}

export default Menu;
