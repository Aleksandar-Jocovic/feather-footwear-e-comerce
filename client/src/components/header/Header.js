import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { NavLink, Router } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/CartIcon';
import logo from '../../assets/logo.png';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';

import './header.styles.css';

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

const mapStateToProps = state =>
	createStructuredSelector({
		currentUser: selectCurrentUser,
		hidden: selectCartHidden
	});

export default connect(mapStateToProps)(Header);
