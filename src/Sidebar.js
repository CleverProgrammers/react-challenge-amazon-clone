import React from 'react';
import './Sidebar.css';
import { slide as Menu } from 'react-burger-menu';

export default (props) => {
  return (
    // Pass on our props
    <Menu {...props}>
      <div className='sidebar-header'>
        <p>Hello, Name</p>
      </div>

      <p className='menu-title'>
        SHOP BY CATEGORY
      </p>

      {/* Place menu-items here */}
    </Menu>
  );
};
