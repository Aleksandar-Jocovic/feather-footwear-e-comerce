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

import {
	HeaderContainer,
	LogoContainer,
	OptionsContainer,
	OptionLink,
	LogoImage
} from './header.styles';

const Header = ({ currentUser, hidden }) => {
	return (
		<HeaderContainer>
			<LogoContainer to='/'>
				<LogoImage src={logo} alt='Logo' />
			</LogoContainer>
			<OptionsContainer>
				<OptionLink to='/collections'>collections</OptionLink>
				{currentUser ? (
					<OptionLink as='div' onClick={() => auth.signOut()}>
						sign out
					</OptionLink>
				) : (
					<OptionLink to='/signin'>sign in</OptionLink>
				)}
				<CartIcon />
			</OptionsContainer>
			{!hidden && <CartDropdown />}
		</HeaderContainer>
	);
};

const mapStateToProps = state =>
	createStructuredSelector({
		currentUser: selectCurrentUser,
		hidden: selectCartHidden
	});

export default connect(mapStateToProps)(Header);
