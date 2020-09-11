import React from 'react';
import './Sidebar.css';
import { slide as Menu } from 'react-burger-menu';

export default (props) => {
  return (
    // Pass on our props
    <Menu {...props}>
      <a className='menu-item' href='/'>
        SHOP BY CAT
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
