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
        <NavLink to="/collections" >Cart</NavLink>
      </div>
    </nav>
  )
}

export default Header;

