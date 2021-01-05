import React from 'react';

import menuData from './menu-data';
import MenuItem from '../menu-item/MenuItem';

import './home-menu.styles.css'

const HomeMenu = () => {
  console.log(menuData)

  return (
    <div className="home-menu">
      {
        menuData.map(({ id, ...otherProps }) => (
          <MenuItem key={id} {...otherProps} />
        ))
      }
    </div>
  )
}

export default HomeMenu;
