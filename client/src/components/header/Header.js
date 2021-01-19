import React from "react";
import { connect } from "react-redux";

import { NavLink, Router } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

import CartIcon from "../cart-icon/CartIcon";
import logo from "../../assets/logo.png";
import CartDropdown from "../cart-dropdown/CartDropdown";

import "./header.styles.css";

const Header = ({ currentUser, hidden }) => {
	return (
		<nav className='nav-bar'>
			<NavLink to='/' className='logo-container'>
				<img src={logo} alt='Logo' />
			</NavLink>
			<div className='nav-options'>
				<NavLink to='/collections'>collections</NavLink>
				{currentUser ? (
					<div className='option' onClick={() => auth.signOut()}>
						sign out
					</div>
				) : (
					<NavLink to='/signin'>sign in</NavLink>
				)}
				<CartIcon />
			</div>
			{!hidden && <CartDropdown />}
		</nav>
	);
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
	currentUser,
	hidden
});

export default connect(mapStateToProps)(Header);
