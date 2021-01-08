import React from 'react';
import logo from '../../assets/logo.png'
import { NavLink, Router } from 'react-router-dom';

import './header.styles.css';

const Header = () => {
  return (
    <nav className="nav-bar">
      <NavLink to="/" className="logo-container">
        <img src={logo} alt="Logo" />
      </NavLink>
      <div className="nav-options">
        <NavLink to="/collections">Collections</NavLink>
        <NavLink to="/signin">Sign in</NavLink>
      </div>
        <NavLink to="/collections">
          <svg xmlns='http://www.w3.org/2000/svg' className='cart-icon' viewBox='0 0 512 512'><title>Cart</title><circle cx='176' cy='416' r='32'/><circle cx='400' cy='416' r='32'/><path d='M456.8 120.78a23.92 23.92 0 00-18.56-8.78H133.89l-6.13-34.78A16 16 0 00112 64H48a16 16 0 000 32h50.58l45.66 258.78A16 16 0 00160 368h256a16 16 0 000-32H173.42l-5.64-32h241.66A24.07 24.07 0 00433 284.71l28.8-144a24 24 0 00-5-19.93z'/></svg>
        </NavLink>
    </nav>
  )
}

export default Header;

