import React from 'react';
import './Sidebar.css';
import { slide as Menu } from 'react-burger-menu';

export default (props) => {
  return (
    // Pass on our props
    <Menu stle {...props}>
      <div className='sidebar-header'>hello, Name</div>

      <a className='menu-item' href='/'>
        SHOP BY CATEGORY
      </a>

      <a className='menu-item' href='/burgers'>
        Burgers
      </a>

      <a className='menu-item' href='/pizzas'>
        Pizzas
      </a>

      <a className='menu-item' href='/desserts'>
        Desserts
      </a>
    </Menu>
  );
};
